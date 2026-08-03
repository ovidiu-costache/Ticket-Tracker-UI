import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketCardComponent } from "../ticket-card/ticket-card";
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  imports: [TicketCardComponent, FormsModule],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList implements OnInit {
  tickets: any[] = [];
  searchText = '';
  title = '';
  priority = 1;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.getTickets().subscribe((data) => {
      this.tickets = data;
    });
  }

  get filteredTickets() {
    if (this.searchText == '') {
      return this.tickets;
    }
    return this.tickets.filter(ticket => ticket.title.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  addTicket() {
    const newTicket = {
      id: this.tickets.length + 1,
      ticketKey: 'TK-' + (this.tickets.length + 201),
      title: this.title,
      description: '',
      createdAt: new Date(),
      statusId: 1,
      priorityId: Number(this.priority)
    };

    this.ticketService.addTicket(newTicket);
    this.loadTickets();

    this.title = '';
    this.priority = 1;
  }

  clearList() {
    this.tickets = [];
  }

  // Redundant, pentru testare
  populateList() {
    this.loadTickets();
  }

  removeTicketFromList(id: number) {
    this.ticketService.deleteTicket(id);
    this.loadTickets();
  }
}
