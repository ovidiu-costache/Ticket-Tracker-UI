export interface ITicket {
  id: number;
  ticketKey: string;
  title: string;
  description: string;
  createdAt: Date;
  statusId: number;
  priorityId: number;
}

export interface IAuditEntry {
  date: Date;
  oldStatus: number;
  newStatus: number;
  comment: string;
}

export interface ITicketCounts {
  todo: number;
  inProgress: number;
  inReview: number;
  done: number;
  total: number;
}

export interface IAuditEntry {
  date: Date;
  oldStatus: number;
  newStatus: number;
  comment: string;
}