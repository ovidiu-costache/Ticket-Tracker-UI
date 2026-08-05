import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TicketService } from '../ticket.service';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { StatusLabelPipe } from '../status-label-pipe'; 
import { PriorityLabelPipe } from '../priority-label-pipe';

@Component({
  selector: 'app-ticket-detail',
  imports: [RouterLink, DatePipe, TitleCasePipe, StatusLabelPipe, PriorityLabelPipe],
  templateUrl: './ticket-detail.html',
  styleUrl: './ticket-detail.css',
})
export class TicketDetail implements OnInit {
  ticket: any;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    // ticketKey din URL
    const key = this.route.snapshot.paramMap.get('ticketKey');
    
    if (key) {
      this.ticketService.getTicketByKey(key).subscribe(data => {
        if (data) {
          this.ticket = data;
        } else {
          this.notFound = true;
        }
      });
    }
  }
}
