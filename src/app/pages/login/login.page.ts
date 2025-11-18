import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importa ReactiveFormsModule
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonText } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Importa ReactiveFormsModule aquí
    IonText, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar,
    RouterLink,
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onLogin() {
    if (this.loginForm.valid) {
      // Aquí va la lógica para autenticación
      console.log('Login data:', this.loginForm.value);
    }
  }
}
