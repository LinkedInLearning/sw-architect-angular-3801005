import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { AsyncPipe, NgIf } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

export const MainNavigationComponentDeps = [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    NgIf,
    MatIconModule,
    RouterLink,
    AsyncPipe
]
