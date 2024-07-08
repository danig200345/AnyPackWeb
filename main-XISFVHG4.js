import{B as r,C as i,D as s,H as a,L as p,N as d,T as f,U as u,V as g,W as C,X as h,Y as m,m as o}from"./chunk-P2E3HYVB.js";var M=[{path:"home",loadComponent:()=>import("./chunk-FEBD4DRO.js").then(t=>t.HomeComponent)},{path:"contacto",loadComponent:()=>import("./chunk-M74D6MXO.js").then(t=>t.ContactoComponent)},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",redirectTo:"home",pathMatch:"full"}];var v={providers:[d({eventCoalescing:!0}),h(M),u()]};var x=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o({type:e,selectors:[["app-header"]],standalone:!0,features:[p],decls:12,vars:0,consts:[[1,"container"],[1,"logo"],["routerLink","/home"],["routerLink","/contacto"]],template:function(n,l){n&1&&(r(0,"header")(1,"div",0)(2,"div",1),a(3," Guajiro Anypack Any Sizes "),i(),r(4,"nav")(5,"ul")(6,"li")(7,"a",2),a(8,"Inicio"),i()(),r(9,"li")(10,"a",3),a(11,"Contacto"),i()()()()()())},dependencies:[m,C],styles:[`body[_ngcontent-%COMP%] {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  header[_ngcontent-%COMP%] {
    background-color: #333;
    color: white;
    padding: 10px 0;
  }

  .container[_ngcontent-%COMP%] {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo[_ngcontent-%COMP%] {
    font-size: 1.5em;
    font-weight: bold;
  }

  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
    margin-left: 20px;
  }

  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
    color: white;
    text-decoration: none;
  }

  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
    text-decoration: underline;
  }`]});let t=e;return t})();var O=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o({type:e,selectors:[["app-footer"]],standalone:!0,features:[p],decls:3,vars:0,template:function(n,l){n&1&&(r(0,"footer")(1,"p"),a(2,"\xA9 2024 Anypack Any Sizes. Todos los derechos reservados."),i()())},dependencies:[m]});let t=e;return t})();var P=(()=>{let e=class e{constructor(){this.title="anypackweb"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:3,vars:0,template:function(n,l){n&1&&s(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[g,x,O]});let t=e;return t})();f(P,v).catch(t=>console.error(t));
