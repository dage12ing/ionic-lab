import { Component, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent  implements OnInit {
  public searchTerm = signal('');
  public searchChange = output<string>();
  private debounceTimer: any;

  constructor() { }

  ngOnInit() {}

  onSearch() {
    this.searchChange.emit(this.searchTerm());
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      this.searchChange.emit(this.searchTerm());
    }, 500);
  }
}
