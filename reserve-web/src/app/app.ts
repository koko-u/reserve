import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/ui/navbar/navbar';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'rv-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('reserve-web');
}
