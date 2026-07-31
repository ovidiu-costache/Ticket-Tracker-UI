import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketCardComponent } from "../ticket-card/ticket-card";

@Component({
  selector: 'app-ticket-list',
  imports: [TicketCardComponent, FormsModule],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList {
  tickets = [
    { id: 1, ticketKey: 'TK-101', title: 'Eroare de login', description: 'Nu ma pot loga', createdAt: new Date(), statusId: 1, priorityId: 3 },
    { id: 2, ticketKey: 'TK-1002', title: 'Buton stricat', description: 'Butonul de save nu merge', createdAt: new Date(), statusId: 1, priorityId: 2 },
    { id: 3, ticketKey: 'TK-103', title: 'Baza de date', description: 'Nu se incarca lista', createdAt: new Date(), statusId: 2, priorityId: 3 },
    { id: 4, ticketKey: 'TK-104', title: 'Interfata', description: 'Culoare gresita', createdAt: new Date(), statusId: 3, priorityId: 1 },
    { id: 5, ticketKey: 'TK-105', title: 'Pagina 404', description: 'Primesc eroare la accesarea profilului', createdAt: new Date(), statusId: 4, priorityId: 2 },
    { id: 6, ticketKey: 'TK-106', title: 'Export PDF', description: '?', createdAt: new Date(), statusId: 1, priorityId: 1 }
  ];

  searchText = '';
  title = '';
  priority = 1;

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

    this.tickets.push(newTicket);

    this.title = '';
    this.priority = 1;
  }

  clearList() {
    this.tickets = [];
  }

  // Redundant, pentru testare
  populateList() {
    this.tickets = [
      { id: 1, ticketKey: 'TK-101', title: 'Eroare de login', description: 'Nu ma pot loga', createdAt: new Date(), statusId: 1, priorityId: 3 },
      { id: 2, ticketKey: 'TK-1002', title: 'Buton stricat', description: 'Butonul de save nu merge', createdAt: new Date(), statusId: 1, priorityId: 2 },
      { id: 3, ticketKey: 'TK-103', title: 'Baza de date', description: 'Nu se incarca lista', createdAt: new Date(), statusId: 2, priorityId: 3 },
      { id: 4, ticketKey: 'TK-104', title: 'Interfata', description: 'Culoare gresita', createdAt: new Date(), statusId: 3, priorityId: 1 },
      { id: 5, ticketKey: 'TK-105', title: 'Pagina 404', description: 'Primesc eroare la accesarea profilului', createdAt: new Date(), statusId: 4, priorityId: 2 },
      { id: 6, ticketKey: 'TK-106', title: 'Export PDF', description: '?', createdAt: new Date(), statusId: 1, priorityId: 1 }
    ];
  }

  removeTicketFromList(id: number) {
    this.tickets = this.tickets.filter(ticket => ticket.id !== id);
  }
}
