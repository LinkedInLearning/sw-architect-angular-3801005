import { Component } from '@angular/core';
import { SearchComponent } from '@ddd-demo/feature-search';

@Component({
  selector: 'ddd-demo-root',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-app';
}
