import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  commonPostMethod(data, url) {
    return this.http.post(environment.baseUrl + url, data);
  }
  commonGetMethod(params, url) {
    return this.http.get(environment.baseUrl + url, { params: params });
  }
  commonUpdateMethod(params, data, url) {
    return this.http.put(environment.baseUrl + url, data, { params: params });
  }
  commonDeleteMethod(params, url) {
    return this.http.delete(environment.baseUrl + url, { params: params });
  }
}
