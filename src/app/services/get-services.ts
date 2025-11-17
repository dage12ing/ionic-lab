import { Injectable } from '@angular/core';
import { of } from 'rxjs';
const services = [
  {
    id: 1,
    name: 'Limpieza de oficinas',
    description: 'Servicio de limpieza profesional para oficinas y espacios comerciales.',
    price: '90.000',
    schedule: 'Lunes a Domingo, 9am - 6pm',
    image: 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Limpieza de muebles',
    description: 'Servicio especializado en limpieza y mantenimiento de muebles y tapicería.',
    price: '120.000',
    schedule: 'Lunes a Domingo, 9am - 6pm',
    image: 'https://images.unsplash.com/photo-1627905646269-7f034dcc5738?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Limpieza de alfombras',
    description: 'Servicio especializado en limpieza profunda de alfombras y tapetes.',
    price: '150.000',
    schedule: 'Lunes a Domingo, 9am - 6pm',
    image: 'https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: 'Limpieza de ventanas',
    description: 'Limpieza profesional de ventanas para hogares y edificios comerciales.',
    price: '180.000',
    schedule: 'Lunes a Domingo, 9am - 6pm',
    image: 'https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

@Injectable({
  providedIn: 'root'
})

export class GetServices {
  getServices() {
    return of(services);
  }

  getServiceById(id: number) {
    const service = services.find(s => s.id === id);
    return of(service);
  }

  searchServices(searchTerm: string) {
    if (!searchTerm || searchTerm.trim() === '') {
      return of(services);
    }
    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return of(filtered);
  }

  getServiceByName(name: string) {
    const service = services.find(s => s.name === name);
    return of(service);
  }
}
