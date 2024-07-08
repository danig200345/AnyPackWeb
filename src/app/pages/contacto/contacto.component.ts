import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
  loading = false;
  sentMessage = false;
  errorMessage = '';
  private _success = new Subject<string>();
  private _error = new Subject<string>();

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this._success.subscribe(() => this.sentMessage = true);
    this._success.pipe(debounceTime(5000)).subscribe(() => this.sentMessage = false);

    this._error.subscribe(message => this.errorMessage = message);
    this._error.pipe(debounceTime(10000)).subscribe(() => this.errorMessage = '');
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.loading = true;
      this.sentMessage = false;
      this.errorMessage = '';

      this.http.post('http://localhost:3000/envio', this.contactForm.value)
        .subscribe(
          response => {
            this.loading = false;
            this._success.next('');
            this.contactForm.reset();
          },
          error => {
            this.loading = false;
            this._error.next('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
          }
        );
    } else {
      this.contactForm.markAllAsTouched();
      this._error.next('Por favor, completa todos los campos del formulario.');
    }
  }

  email = 'redes.sociales@anypack.mx';

  scrollTop() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);  // Ajusta el tiempo de retraso si es necesario
  }
}
