import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  imports: [],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.css',
})
export class TicketCardComponent {
  @Input() ticket: any;
  @Output() deleteTicket = new EventEmitter<number>(); // ID numar

  removeTicket() {
    this.deleteTicket.emit(this.ticket.id);
  }
}
