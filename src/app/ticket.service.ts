import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets = [
    { id: 1, ticketKey: 'TK-101', title: 'Eroare de login', description: 'Nu ma pot loga', createdAt: new Date(), statusId: 1, priorityId: 3 },
    { id: 2, ticketKey: 'TK-1002', title: 'Buton stricat', description: 'Butonul de save nu merge', createdAt: new Date(), statusId: 1, priorityId: 2 },
    { id: 3, ticketKey: 'TK-103', title: 'Baza de date', description: 'Nu se incarca lista', createdAt: new Date(), statusId: 2, priorityId: 3 },
    { id: 4, ticketKey: 'TK-104', title: 'Interfata', description: 'Culoare gresita', createdAt: new Date(), statusId: 3, priorityId: 1 },
    { id: 5, ticketKey: 'TK-105', title: 'Pagina 404', description: 'Primesc eroare la accesarea profilului', createdAt: new Date(), statusId: 4, priorityId: 2 },
    { id: 6, ticketKey: 'TK-106', title: 'Export PDF', description: '?', createdAt: new Date(), statusId: 1, priorityId: 1 }
  ];

  constructor() {}

  getTickets(): Observable<any[]> {
    return of(this.tickets);
  }

  getTicketByKey(key: string): Observable<any> {
    const foundTicket = this.tickets.find(t => t.ticketKey === key);
    return of(foundTicket); 
  }

  addTicket(ticket: any) {
    this.tickets.push(ticket);
  }

  deleteTicket(id: number) {
    this.tickets = this.tickets.filter(t => t.id !== id);
  }
}
