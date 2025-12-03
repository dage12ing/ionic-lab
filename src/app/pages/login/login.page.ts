import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonInput, IonItem, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonText, IonButton, IonInput, IonItem, IonContent,
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onLogin() {
    this.router.navigate(['/servicios']);
    if (this.loginForm.valid) {
      // Aquí va la lógica para autenticación
      console.log('Login data:', this.loginForm.value);
    }
  }

  navigateRegister() {
    this.router.navigate(['/registro']);
  }
}
