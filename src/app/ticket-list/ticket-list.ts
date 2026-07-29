import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketCard } from "../ticket-card/ticket-card";

@Component({
  selector: 'app-ticket-list',
  imports: [TicketCard, FormsModule],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList {
  tichete = [
    { id: 1, ticketKey: 'TK-101', title: 'Eroare de login', description: 'Nu ma pot loga', createdAt: new Date(), statusId: 1, priorityId: 3 },
    { id: 2, ticketKey: 'TK-1002', title: 'Buton stricat', description: 'Butonul de save nu merge', createdAt: new Date(), statusId: 1, priorityId: 2 },
    { id: 3, ticketKey: 'TK-103', title: 'Baza de date', description: 'Nu se incarca lista', createdAt: new Date(), statusId: 2, priorityId: 3 },
    { id: 4, ticketKey: 'TK-104', title: 'Interfata', description: 'Culoare gresita', createdAt: new Date(), statusId: 3, priorityId: 1 },
    { id: 5, ticketKey: 'TK-105', title: 'Pagina 404', description: 'Primesc eroare la accesarea profilului', createdAt: new Date(), statusId: 4, priorityId: 2 },
    { id: 6, ticketKey: 'TK-106', title: 'Export PDF', description: '?', createdAt: new Date(), statusId: 1, priorityId: 1 }
  ];

  searchText = '';
  titlu = '';
  prioritate = 1;

  get ticheteFiltrate() {
    if (this.searchText == '') {
      return this.tichete;
    }

    return this.tichete.filter(t => t.title.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  adaugaTichet() {
    const nou = {
      id: this.tichete.length + 1,
      ticketKey: 'TK-' + (this.tichete.length + 201),
      title: this.titlu,
      description: '',
      createdAt: new Date(),
      statusId: 1,
      priorityId: Number(this.prioritate)
    };

    this.tichete.push(nou);

    this.titlu = '';
    this.prioritate = 1;
  }

  curataLista() {
    this.tichete = [];
  }

  // Redundant, pentru testare
  populeazaLista() {
    this.tichete = [
      { id: 1, ticketKey: 'TK-101', title: 'Eroare de login', description: 'Nu ma pot loga', createdAt: new Date(), statusId: 1, priorityId: 3 },
      { id: 2, ticketKey: 'TK-1002', title: 'Buton stricat', description: 'Butonul de save nu merge', createdAt: new Date(), statusId: 1, priorityId: 2 },
      { id: 3, ticketKey: 'TK-103', title: 'Baza de date', description: 'Nu se incarca lista', createdAt: new Date(), statusId: 2, priorityId: 3 },
      { id: 4, ticketKey: 'TK-104', title: 'Interfata', description: 'Culoare gresita', createdAt: new Date(), statusId: 3, priorityId: 1 },
      { id: 5, ticketKey: 'TK-105', title: 'Pagina 404', description: 'Primesc eroare la accesarea profilului', createdAt: new Date(), statusId: 4, priorityId: 2 },
      { id: 6, ticketKey: 'TK-106', title: 'Export PDF', description: '?', createdAt: new Date(), statusId: 1, priorityId: 1 }
    ];
  }

  stergeTichetDinLista(id: number) {
    this.tichete = this.tichete.filter(t => t.id !== id);
  }
}
