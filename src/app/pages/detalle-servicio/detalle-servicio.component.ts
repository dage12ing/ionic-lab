import { Component, inject, OnInit, signal } from '@angular/core';
import { BreadcrumbComponent } from "src/app/components/breadcrumb/breadcrumb.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { GetServices } from 'src/app/services/get-services';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.scss'],
  imports: [HeaderComponent, BreadcrumbComponent],
})
export class DetalleServicioComponent  implements OnInit {
  public serviceId = signal(null as number | null);
  public serviceName = signal('');
  public serviceDescription = signal('');
  public serviceImage = signal('');
  public servicePrice = signal('');
  public serviceSchedule = signal('');

  private getService = inject(GetServices);

  constructor() { }

  ngOnInit() {
    const urlSegments = window.location.pathname.split('/');
    const id = Number(urlSegments[urlSegments.length - 1]);
    this.serviceId.set(id);
    this.getService.getServiceById(id).subscribe(service => {
      if (service) {
        this.serviceName.set(service.name);
        this.serviceDescription.set(service.description);
        this.serviceImage.set(service.image);
        this.servicePrice.set(service.price);
        this.serviceSchedule.set(service.schedule);
      }
    });
  }
}
