# Ticket Tracker UI

A structured Angular learning project built around a **Ticket Management System** domain.

This repository captures my frontend training progression through **10 practical Angular exercises**, each adding a new layer of functionality (components, forms, routing, RxJS, shared state, etc.) on top of the previous one.

Although the data is currently mocked (no real HTTP calls yet), this project is designed as the **foundation of a future full-stack application**, where this UI will be connected to the backend API developed separately:

➡️ Backend reference: [mateimitnei/IssueTracker_Backend](https://github.com/mateimitnei/IssueTracker_Backend)

---

## Project Purpose

This is not a production app yet.  
It is a progressive implementation meant to:

- strengthen Angular fundamentals in a realistic domain
- simulate real ticket workflows (status, priority, history, filtering)
- prepare cleanly for backend integration in the next phase

In short: this repo documents how the frontend architecture was built step by step before connecting it to a real API.

---

## Tech Stack

- **Angular**
- **TypeScript**
- **HTML / CSS**
- **RxJS**
- Reactive & template-driven forms
- Angular routing and component communication patterns

---

## What was implemented (learning progression)

The implementation evolved across 10 milestones:

1. Components, interpolation, and property binding  
2. Structural directives (`*ngIf`, `*ngFor`, `trackBy`)  
3. Event binding and two-way binding (`ngModel`)  
4. Parent-child communication (`@Input`, `@Output`)  
5. Built-in and custom pipes  
6. Services, dependency injection, and mock data via `Observable`  
7. Reactive forms and validation  
8. Routing and route parameters  
9. Lifecycle hooks + RxJS operators + manual subscription management  
10. Shared state with `BehaviorSubject` + dashboard-based filtering  

---

## Current Scope

- Uses **mocked in-memory data** only
- No backend calls yet (`HttpClient` integration intentionally postponed)
- Focus is on **solid Angular fundamentals** and maintainable UI structure

---

## Next Step (planned)

Integrate this UI with the real backend API from:

- [mateimitnei/IssueTracker_Backend](https://github.com/mateimitnei/IssueTracker_Backend)

Planned integration topics include:

- API-based ticket CRUD
- real audit/history retrieval
- centralized error handling
- authentication flow alignment (if added in backend phase)

---

## Notes

This repository is intentionally kept as a clean learning baseline on `main`, while preserving development history across branches.

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.dev/tools/cli)

```bash
npm install -g @angular/cli
```

### Run locally

```bash
# 1) Clone the repository
git clone https://github.com/ovidiu-costache/Ticket-Tracker-UI.git

# 2) Navigate into the project folder
cd Ticket-Tracker-UI

# 3) Install dependencies
npm install

# 4) Start the development server
ng serve
```

Open your browser at:

`http://localhost:4200/`

### Build for production

```bash
ng build
```