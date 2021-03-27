import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor() {}
  specialistTypeArrayList = [
    { value: 'EYE', viewValue: 'Eye' },
    { value: 'DENTAL', viewValue: 'Dental' },
    { value: 'NEUROLOGY', viewValue: 'Neurology' },
    { value: 'CARDIOLOGY', viewValue: 'Cardiology' },
  ];
  allTimes = [
    { label: '12:00', placeholder: '12:00 AM' },
    { label: '12:30', placeholder: '12:30 AM' },
    { label: '1:00', placeholder: '1:00 AM' },
    { label: '1:30', placeholder: '1:30 AM' },
    { label: '2:00', placeholder: '2:00 AM' },
    { label: '2:30', placeholder: '2:30 AM' },
    { label: '3:00', placeholder: '3:00 AM' },
    { label: '3:30', placeholder: '3:30 AM' },
    { label: '4:00', placeholder: '4:00 AM' },
    { label: '4:30', placeholder: '4:30 AM' },
    { label: '5:00', placeholder: '5:00 AM' },
    { label: '5:30', placeholder: '5:30 AM' },
    { label: '6:00', placeholder: '6:00 AM' },
    { label: '6:30', placeholder: '6:30 AM' },
    { label: '7:00', placeholder: '7:00 AM' },
    { label: '7:30', placeholder: '7:30 AM' },
    { label: '8:00', placeholder: '8:00 AM' },
    { label: '8:30', placeholder: '8:30 AM' },
    { label: '9:00', placeholder: '9:00 AM' },
    { label: '9:30', placeholder: '9:30 AM' },
    { label: '10:00', placeholder: '10:00 AM' },
    { label: '10:30', placeholder: '10:30 AM' },
    { label: '11:00', placeholder: '11:00 AM' },
    { label: '11:30', placeholder: '11:30 AM' },
    { label: '12:00', placeholder: '12:00 NOON' },
    { label: '12:30', placeholder: '12:30 PM' },
    { label: '13:00', placeholder: '1:00 PM' },
    { label: '13:30', placeholder: '1:30 PM' },
    { label: '14:00', placeholder: '2:00 PM' },
    { label: '14:30', placeholder: '2:30 PM' },
    { label: '15:00', placeholder: '3:00 PM' },
    { label: '15:30', placeholder: '3:30 PM' },
    { label: '16:00', placeholder: '4:00 PM' },
    { label: '16:30', placeholder: '4:30 PM' },
    { label: '17:00', placeholder: '5:00 PM' },
    { label: '17:30', placeholder: '5:30 PM' },
    { label: '18:00', placeholder: '6:00 PM' },
    { label: '18:30', placeholder: '6:30 PM' },
    { label: '19:00', placeholder: '7:00 PM' },
    { label: '19:30', placeholder: '7:30 PM' },
    { label: '20:00', placeholder: '8:00 PM' },
    { label: '20:30', placeholder: '8:30 PM' },
    { label: '21:00', placeholder: '9:00 PM' },
    { label: '21:30', placeholder: '9:30 PM' },
    { label: '22:00', placeholder: '10:00 PM' },
    { label: '22:30', placeholder: '10:30 PM' },
    { label: '23:00', placeholder: '11:00 PM' },
    { label: '23:30', placeholder: '11:30 PM' },
  ];
}
