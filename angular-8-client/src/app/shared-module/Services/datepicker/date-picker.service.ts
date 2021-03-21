import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatePickerService {
  constructor() {}
  dateToEpoch(date) {
    return new Date(date.year, date.month - 1, date.day);
  }

  getDateMonthBefore(noOfMonth) {
    let dateValue = new Date();
    dateValue.setMonth(dateValue.getMonth() - noOfMonth);
    // dateValue.setMonth(dateValue.getMonth());
    return {
      year: dateValue.getFullYear(),
      month: dateValue.getMonth() + 1,
      day: dateValue.getDate(),
    };
  }

  setElectricityBillEditDate(paramsMonth, paramsYear) {
    let dateValue = new Date();
    return {
      year: Number(paramsYear),
      month: Number(paramsMonth),
      day: dateValue.getDate(),
    };
  }

  setCurrentDate() {
    let dateValue = new Date();
    return {
      year: dateValue.getFullYear(),
      month: dateValue.getMonth() + 1,
      day: dateValue.getDate(),
    };
  }
  setYesterDayDate() {
    let dateValue = new Date();
    return {
      year: dateValue.getFullYear(),
      month: dateValue.getMonth() + 1,
      day: dateValue.getDate() - 1,
    };
  }
  setLastWeekDate() {
    let dateValue = new Date();
    return {
      year: dateValue.getFullYear(),
      month: dateValue.getMonth() + 1,
      day: dateValue.getDate() - 7,
    };
  }
  getDateAsDob(getByApi) {
    var date = new Date(getByApi);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
  }
  dobTimeStamp(date) {
    if (date == null) return date;
    else {
      var dateObj = new Date(date.year, date.month - 1, date.day).valueOf();
      return dateObj;
    }
  }
  materialDatePickerConvert(date) {
    let dateConvert;
    if (date) {
      dateConvert =
        date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    }
    return dateConvert;
  }
}
