import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ RouterOutlet, MainNavigationComponent ],
    templateUrl: './app.component.html',
})
export class AppComponent {
}
