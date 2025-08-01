import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('udemy-angular-app');
}
