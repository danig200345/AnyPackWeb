// Importamos las clases y módulos necesarios de Angular
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// Definimos el componente con su metadata
@Component({
  selector: 'app-header', // Nombre del selector del componente
  standalone: true, // Indica que este componente es autónomo
  imports: [RouterModule], // Importamos el módulo de enrutamiento de Angular
  templateUrl: './header.component.html', // Ruta al archivo HTML del componente
  styleUrls: ['./header.component.css'] // Ruta al archivo CSS del componente
})
export class HeaderComponent {
  email = 'redes.sociales@anypack.mx'; // Propiedad para almacenar el correo electrónico

  // Inyectamos el Router en el constructor para poder usarlo en la clase
  constructor(private router: Router) { }

  // Método para desplazarse a una sección específica
  scrollToSection(sectionId: string): void {
    // Verificamos si la URL actual no es '/home'
    if (this.router.url !== '/home') {
      // Navegamos a la página de inicio y luego ejecutamos una función
      this.router.navigate(['/home']).then(() => {
        // Después de la navegación, desplazamos a la sección
        this.scrollToSectionAfterNavigation(sectionId);
      });
    } else {
      // Si ya estamos en la página de inicio, desplazamos a la sección directamente
      this.scrollToSectionAfterNavigation(sectionId);
    }
  }

  // Método para desplazarse a la sección después de la navegación
  private scrollToSectionAfterNavigation(sectionId: string): void {
    // Usamos setTimeout para asegurarnos de que la vista se ha cargado completamente antes de desplazarnos
    setTimeout(() => {
      // Obtenemos el elemento con el ID proporcionado
      const element = document.getElementById(sectionId);
      // Si el elemento existe, desplazamos a él suavemente
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Ajusta el tiempo si es necesario
  }
  scrollTop() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
  }
}
