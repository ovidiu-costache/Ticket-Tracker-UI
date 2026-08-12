import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { StatusLabelPipe } from '../status-label-pipe';
import { PriorityLabelPipe } from '../priority-label-pipe';
import { ITicket } from '../ticket.model';

@Component({
  selector: 'app-ticket-card',
  imports: [DatePipe, TitleCasePipe, StatusLabelPipe, PriorityLabelPipe],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.css',
})
export class TicketCardComponent {
  @Input() ticket!: ITicket;
  @Output() deleteTicket = new EventEmitter<number>(); // ID numar

  removeTicket() {
    this.deleteTicket.emit(this.ticket.id);
  }
}
