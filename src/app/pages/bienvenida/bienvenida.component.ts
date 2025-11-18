import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
  imports: [IonCardHeader, IonCardTitle, IonCard, IonCardContent, IonButton, IonContent],
})
export class BienvenidaComponent {

  constructor(private router: Router) {}

  irCatalogo() {
    this.router.navigate(['/servicios']);
  }

}
