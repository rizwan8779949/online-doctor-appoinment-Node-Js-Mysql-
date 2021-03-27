import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  token;
  userData;
  constructor() {}

  startLoading() {
    localStorage.setItem('loader', 'Yes');
  }

  stopLoading() {
    localStorage.removeItem('loader');
  }
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getLocalStorage(key) {
    JSON.parse(localStorage.getItem(key));
  }
  removeocalStorage(key) {
    localStorage.removeItem(key);
  }
  getLoginUserDetails() {
    if (localStorage.getItem('userData')) {
      var userData = this.getLocalStorage(environment.userData);
      return userData;
    } else return false;
  }

  getToken() {
    if (localStorage.getItem(environment.userData)) {
      // this.token = JSON.parse(localStorage.getItem(environment.userData));
      return this.token?.token;
    }
  }
  getUserDetailsLogin() {
    if (localStorage.getItem(environment.userData)) {
      this.userData = JSON.parse(localStorage.getItem(environment.userData));
      return this.userData;
    }
  }
  numberConvertIndianCurrency(value) {
    var customValue;
    customValue = Number(value);
    if (!/^[a-zA-Z]+$/.test(value)) {
      if (value.length > 3) {
        customValue = value.replace(/,/g, '');
        customValue = Number(customValue);
      } else customValue = Number(value);
      return Number(customValue).toLocaleString('en-IN');
    } else {
      customValue = 0;
      return customValue;
    }
  }
}
