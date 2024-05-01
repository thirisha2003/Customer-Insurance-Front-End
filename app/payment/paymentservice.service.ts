import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Payment } from '../Types/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {
  url:string=environment.apibaseURL+ '/Insurance'

  getPaymentDetails(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.url}/${id}`);
  }

  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.url, payment);
  }

  updatePayment(id: number, payment: Payment): Observable<any> {
    return this.http.put(`${this.url}/${id}`, payment);
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
  constructor(private http:HttpClient) {}
}
