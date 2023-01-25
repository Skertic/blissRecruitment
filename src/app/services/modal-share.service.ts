import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalShareService {
  isOpen = false;
  private _modalSubject = new Subject<boolean>();

  open() {
    this.isOpen = true;
    this._modalSubject.next(this.isOpen);
  }

  close() {
    this.isOpen = false;
    this._modalSubject.next(this.isOpen);
  }

  get modalSubject() {
    return this._modalSubject.asObservable();
  }
}
