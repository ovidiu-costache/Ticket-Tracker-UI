import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  imports: [],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.css',
})
export class TicketCard {
  id = 12;
  ticketKey = 'TK-112';
  title = 'Metrorex';
  description = 'Card urgent';
  createdAt = new Date();
  statusId = 1;
  priorityId = 3;
}
