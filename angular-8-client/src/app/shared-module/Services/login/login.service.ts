import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  getEditDto=new BehaviorSubject<any>(null);
  editDto=this.getEditDto.asObservable()
  
  setEditData(dto){
    this.getEditDto.next(dto);
  } 
}
