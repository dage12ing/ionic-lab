import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent } from "@ionic/angular/standalone";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    ReactiveFormsModule,
    CommonModule,
    IonicModule
  ]
})
export class RegistroPage implements OnInit {

  registroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telefono: ['']
    });
  }

  onRegister() {
    if (this.registroForm.valid) {
      console.log('Datos enviados:', this.registroForm.value);
    }
  }
}
