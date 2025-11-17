import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent  implements OnInit {
  public currentRoute = signal('');
  private router = inject(Router);

  ngOnInit() {
    this.currentRoute.set(this.getCurrentRoute());
  }

  getCurrentRoute(): string {
    const url = this.router.url;

    if (url.startsWith('/detalles-servicio/')) {
      return 'Detalle del Servicio';
    }

    switch (url) {
      case '/': return 'Bienvenida';
      case '/login': return 'Login';
      case '/registro': return 'Registro';
      case '/servicios': return 'Catálogo';
      case '/administrar': return 'Administrar Servicios';
      default: return 'Desconocido';
    }
  }
}
