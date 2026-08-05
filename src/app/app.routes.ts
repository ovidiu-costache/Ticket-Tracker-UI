import { Routes } from '@angular/router';
import { TicketList } from './ticket-list/ticket-list';
import { TicketDetail } from './ticket-detail/ticket-detail';

export const routes: Routes = [
    { path: '', redirectTo: 'tickets', pathMatch: 'full' }, // /tickets
    { path: 'tickets', component: TicketList }, // Lista principala
    { path: 'tickets/:ticketKey', component: TicketDetail }
];
