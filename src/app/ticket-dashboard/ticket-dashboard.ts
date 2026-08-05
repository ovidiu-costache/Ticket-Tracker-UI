import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-dashboard',
  imports: [],
  templateUrl: './ticket-dashboard.html',
  styleUrl: './ticket-dashboard.css',
})
export class TicketDashboard implements OnInit {
  counts: any = {};

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.ticketService.getTicketCount().subscribe(data => {this.counts = data});
  }

  setFilter(statusId: number | null) {
    this.ticketService.updateFilter(statusId);
  }
}
