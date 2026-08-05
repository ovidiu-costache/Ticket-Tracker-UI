import { Component, signal } from '@angular/core';
import { TicketList } from './ticket-list/ticket-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TicketList, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ticket-tracker-ui');
}
