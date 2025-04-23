import { Injectable, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService implements OnInit{

  private reservations: Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

ngOnInit(): void {
    console.log(localStorage.getItem("reservations"), "local data");
    
}

  //CRUD Operations

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {

    reservation.id = Date.now().toString();

    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updateReservation: Reservation): void {
    debugger
    const index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      updateReservation.id = id;
      this.reservations[index] = updateReservation;
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
    }
  }
  
}
