import { Routes } from '@angular/router';
import { AdministrarServiciosComponent } from './pages/administrar-servicios/administrar-servicios.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalleServicioComponent } from './pages/detalle-servicio/detalle-servicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
  {
    path: '',
    component: BienvenidaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'servicios',
    component: CatalogoComponent
  },
  {
    path: 'servicios/id',
    component: DetalleServicioComponent
  },
  {
    path: 'administrar',
    component: AdministrarServiciosComponent
  }
];
