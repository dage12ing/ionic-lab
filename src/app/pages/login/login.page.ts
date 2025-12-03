import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importa ReactiveFormsModule
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonText } from '@ionic/angular/standalone';
import { RouterLink, Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (email === 'admin' && password === 'admin') {
        console.log('Acceso permitido: usuario administrador');
        alert('Bienvenido Administrador');
        // Aquí podrías agregar navegación si luego añades Router
        // this.router.navigate(['/home']);
      } else {
        console.log('Credenciales incorrectas');
        alert('Usuario o contraseña incorrectos');
      }
    }
  }

  navigateRegister() {
    // Navegar a la página de registro
    this.router.navigate(['/registro']); // Asegúrate de que esta ruta exista en tu app-routing
  }
}
