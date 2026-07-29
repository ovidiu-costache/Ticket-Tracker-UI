import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketCard } from './ticket-card/ticket-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TicketCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ticket-tracker-ui');
}
