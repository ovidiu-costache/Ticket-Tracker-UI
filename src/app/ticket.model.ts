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