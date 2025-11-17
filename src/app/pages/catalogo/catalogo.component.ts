import { Component, inject, OnInit, signal } from '@angular/core';
import { BreadcrumbComponent } from "src/app/components/breadcrumb/breadcrumb.component";
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SearchbarComponent } from "src/app/components/searchbar/searchbar.component";
import { ServicesCardComponent } from "src/app/components/services-card/services-card.component";
import { GetServices } from 'src/app/services/get-services';
import { FloatingButtonComponent } from "src/app/components/floating-button/floating-button.component";
import { FooterComponent } from "src/app/components/footer/footer.component";

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  schedule: string;
  image: string;
}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
  imports: [HeaderComponent, BreadcrumbComponent, SearchbarComponent, ServicesCardComponent, FloatingButtonComponent, FooterComponent],
})
export class CatalogoComponent implements OnInit {
  private servicesData = inject(GetServices);
  public servicesList = signal<Service[]>([]);

  constructor() { }

  ngOnInit() {
    this.servicesData.getServices().subscribe(services => {
      this.servicesList.set(services);
    });
  }

  onSearch(searchTerm: string) {
    this.servicesData.searchServices(searchTerm).subscribe(services => {
      this.servicesList.set(services);
    });
  }
}
