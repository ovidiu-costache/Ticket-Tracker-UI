import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TicketCardComponent } from "../ticket-card/ticket-card";
import { TicketService } from '../ticket.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { ITicket } from '../ticket.model';

@Component({
  selector: 'app-ticket-list',
  imports: [TicketCardComponent, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList implements OnInit {
  tickets: ITicket[] = [];
  searchText = ''; // Ramane ngModel pt search
  
  // Formularul FormGroup si campurile FormControl
  ticketForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(100)  
    ]),
    description: new FormControl('', [
      Validators.maxLength(1000)
    ]),
    priorityId: new FormControl(1, [
      Validators.required,
      Validators.pattern('^[1-3]$') // Ca sa accepte doar 1, 2 sau 3
    ])
  });

  currentStatusFilter: number | null = null;
  filterSub!: Subscription;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.loadTickets();

    this.filterSub = this.ticketService.currentFilter$.subscribe(filterValue => {
      this.currentStatusFilter = filterValue;
    });
  }

  ngOnDestroy() {
    if (this.filterSub) {
      this.filterSub.unsubscribe();
    }
  }

  loadTickets() {
    this.ticketService.getTickets().subscribe((data) => {
      this.tickets = data;
    });
  }

  get filteredTickets(): ITicket[] {
    let result = this.tickets;

    if (this.currentStatusFilter !== null) {
      result = result.filter(t => t.statusId === this.currentStatusFilter);
    }

    if (this.searchText == '') {
      return result;
    }
  
    return result.filter(ticket => ticket.title.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  // Refactor
  addTicket() {
    if (this.ticketForm.invalid) {
      return; 
    }

    this.ticketService.addTicket({
      title: this.ticketForm.value.title ?? '',
      description: this.ticketForm.value.description ?? '',
      createdAt: new Date(),
      statusId: 1,
      priorityId: Number(this.ticketForm.value.priorityId ?? 1)
    });
    this.loadTickets();

    // Resetare
    this.ticketForm.reset({ priorityId: 1, title: '', description: '' });
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
