import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});
  isEditMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if (id) {
      this.isEditMode = true;
      let reservation = this.reservationService.getReservation(id).subscribe(reservation => {

        if (reservation)
          this.reservationForm.patchValue(reservation)
      })

    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {

      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if (id) {
        // Update
        this.reservationService.updateReservation(id, reservation).subscribe(() => {
          console.log("Update Request Processed")
        })
      }
      else {
        // New
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log("Create Request Processed")
        })
      }

      this.router.navigate(['/list'])
    }
  }
}