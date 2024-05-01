import { Component } from '@angular/core';
import { Payment } from '../Types/payment';
import { PaymentserviceService } from './paymentservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  payment: Payment = {
    PaymentId: 0,
    cus_Name: '',
    cardNumber: 0,
    ExpirationDate: 0,
    SecurityCode: ''
  }
  paymentList: Payment[]=[];

  constructor(private paymentService:PaymentserviceService) { }

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments(): void {
    this.paymentService.getPaymentDetails(this.payment.PaymentId).subscribe(data => {
      this.paymentList = data;
    });
  }

  savePayment(): void {
    this.paymentService.createPayment(this.payment).subscribe(() => {
      this.loadPayments();
   
    });
  }

  updatePayment(payment: Payment): void {
    this.paymentService.updatePayment(payment.PaymentId, payment).subscribe(() => {
      this.loadPayments();
    });
  }

  deletePayment(id: number): void {
    this.paymentService.deletePayment(id).subscribe(() => {
      this.loadPayments();
    });
  }

}
