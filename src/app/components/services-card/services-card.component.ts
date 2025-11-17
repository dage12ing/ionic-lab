import { ChangeDetectorRef, Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss'],
})
export class ServicesCardComponent  implements OnInit {
  name = input<string>();
  description = input<string>();
  image = input<string>();
  id = input<number>();

  private router = inject(Router);
  private changeDetector = inject(ChangeDetectorRef);

  constructor() { }

  ngOnInit() {}

  checkDetails() {
    const serviceId = this.id();
    if (serviceId) {
      this.router.navigate(['/detalles-servicio', serviceId]);
    }
    this.changeDetector.detectChanges();
  }
}
