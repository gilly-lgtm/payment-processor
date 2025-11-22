// types.ts

export type PaymentMethod = 'credit_card' | 'bank_transfer' | 'paypal';

export interface Payment {
  id: string;
  method: PaymentMethod;
  amount: number;
  currency: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentRequest {
  id: string;
  method: PaymentMethod;
  amount: number;
  currency: string;
  cardNumber?: string;
  expirationDate?: string;
  cvv?: string;
}

export interface PaymentResponse {
  payment: Payment;
  error?: string;
}

export type PaymentStatus = 'pending' | 'approved' | 'rejected';