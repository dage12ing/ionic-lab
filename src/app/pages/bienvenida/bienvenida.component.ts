import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
  imports: [RouterLink],
})
export class BienvenidaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
