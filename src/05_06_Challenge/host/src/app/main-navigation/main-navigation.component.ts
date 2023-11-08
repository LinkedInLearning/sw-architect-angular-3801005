import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MainNavigationComponentDeps } from './main-navigation.component.deps';

@Component({
  selector: 'ws-main-navigation',
  standalone: true,
  templateUrl: './main-navigation.component.html',
  imports: [...MainNavigationComponentDeps],
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
