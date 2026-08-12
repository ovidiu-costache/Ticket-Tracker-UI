import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IAuditEntry, ITicket, ITicketCounts } from './ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: ITicket[] = [
    { id: 1, ticketKey: 'TK-101', title: 'Eroare de login', description: 'Nu ma pot loga', createdAt: new Date(), statusId: 1, priorityId: 3 },
    { id: 2, ticketKey: 'TK-1002', title: 'Buton stricat', description: 'Butonul de save nu merge', createdAt: new Date(), statusId: 1, priorityId: 2 },
    { id: 3, ticketKey: 'TK-103', title: 'Baza de date', description: 'Nu se incarca lista', createdAt: new Date(), statusId: 2, priorityId: 3 },
    { id: 4, ticketKey: 'TK-104', title: 'Interfata', description: 'Culoare gresita', createdAt: new Date(), statusId: 3, priorityId: 1 },
    { id: 5, ticketKey: 'TK-105', title: 'Pagina 404', description: 'Primesc eroare la accesarea profilului', createdAt: new Date(), statusId: 4, priorityId: 2 },
    { id: 6, ticketKey: 'TK-106', title: 'Export PDF', description: '?', createdAt: new Date(), statusId: 1, priorityId: 1 }
  ];

  private nextId = this.tickets.length + 1;
  private nextKeyNumber = this.tickets.length + 201;

  private auditHistoryByTicketKey: Record<string, IAuditEntry[]> = {
    'TK-101': [
      { date: new Date('2026-07-21T11:03:21'), oldStatus: 1, newStatus: 1, comment: 'Modificare titlu' },
      { date: new Date('2026-07-26T09:00:01'), oldStatus: 1, newStatus: 2, comment: 'Trecere in progres' },
      { date: new Date('2026-08-01T13:11:20'), oldStatus: 2, newStatus: 3, comment: 'Finalizat' }
    ],
    'TK-1002': [
      { date: new Date('2026-07-20T08:15:00'), oldStatus: 1, newStatus: 1, comment: 'Ticket creat' },
      { date: new Date('2026-07-23T14:30:00'), oldStatus: 1, newStatus: 2, comment: 'Preluat de echipa' },
      { date: new Date('2026-07-29T16:45:00'), oldStatus: 2, newStatus: 3, comment: 'Asteapta validare' }
    ],
    'TK-103': [
      { date: new Date('2026-07-22T10:05:00'), oldStatus: 2, newStatus: 2, comment: 'Actualizare descriere' },
      { date: new Date('2026-07-25T12:10:00'), oldStatus: 2, newStatus: 3, comment: 'Testare finala' },
      { date: new Date('2026-08-02T09:20:00'), oldStatus: 3, newStatus: 4, comment: 'Rezolvat' }
    ],
    'TK-104': [
      { date: new Date('2026-07-18T09:00:00'), oldStatus: 1, newStatus: 1, comment: 'Ticket creat' },
      { date: new Date('2026-07-24T11:40:00'), oldStatus: 1, newStatus: 2, comment: 'In analiza' },
      { date: new Date('2026-07-31T15:00:00'), oldStatus: 2, newStatus: 2, comment: 'Ajustare prioritate' }
    ],
    'TK-105': [
      { date: new Date('2026-07-19T13:30:00'), oldStatus: 1, newStatus: 2, comment: 'Lucrat de dev' },
      { date: new Date('2026-07-27T10:00:00'), oldStatus: 2, newStatus: 3, comment: 'Verificare QA' },
      { date: new Date('2026-08-03T17:10:00'), oldStatus: 3, newStatus: 4, comment: 'Inchis' }
    ],
    'TK-106': [
      { date: new Date('2026-07-17T08:45:00'), oldStatus: 1, newStatus: 1, comment: 'Ticket creat' },
      { date: new Date('2026-07-28T14:15:00'), oldStatus: 1, newStatus: 2, comment: 'In lucru' },
      { date: new Date('2026-08-04T11:35:00'), oldStatus: 2, newStatus: 3, comment: 'Aproape gata' }
    ]
  };

  // Daca e null nu are niciun filtru
  private currentFilterSubject = new BehaviorSubject<number | null>(null);

  // Observable public la care sa se poata abona oricine
  public currentFilter$ = this.currentFilterSubject.asObservable();

  constructor() {}

  getTickets(): Observable<ITicket[]> {
    return of(this.tickets);
  }

  getTicketByKey(key: string): Observable<ITicket | undefined> {
    const foundTicket = this.tickets.find(t => t.ticketKey === key);
    return of(foundTicket); 
  }

  addTicket(ticket: Omit<ITicket, 'id' | 'ticketKey'>) {
    const createdTicket: ITicket = {
      ...ticket,
      id: this.nextId,
      ticketKey: 'TK-' + this.nextKeyNumber
    };

    this.tickets.push(createdTicket);
    this.nextId++;
    this.nextKeyNumber++;
  }

  deleteTicket(id: number) {
    this.tickets = this.tickets.filter(t => t.id !== id);
  }

  getAuditForTicket(ticketKey: string): Observable<IAuditEntry[]> {
    const mockAudit = this.auditHistoryByTicketKey[ticketKey] ?? [];

    return of(mockAudit).pipe(delay(500));
  }

  updateFilter(statusId: number | null) {
    this.currentFilterSubject.next(statusId);
  }

  // Cate tichete sunt in fiecare status
  getTicketCount(): Observable<ITicketCounts> {
    const counts: ITicketCounts = {
      todo: this.tickets.filter(t => t.statusId === 1).length,
      inProgress: this.tickets.filter(t => t.statusId === 2).length,
      inReview: this.tickets.filter(t => t.statusId === 3).length,
      done: this.tickets.filter(t => t.statusId == 4).length,
      total: this.tickets.length
    };

    return of(counts);
  }
}
