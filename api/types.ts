export type PaymentMethod = 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer';

export interface PaymentDetails {
  id: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreditCardPayment extends PaymentDetails {
  method: 'credit_card';
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

export interface DebitCardPayment extends PaymentDetails {
  method: 'debit_card';
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

export interface PayPalPayment extends PaymentDetails {
  method: 'paypal';
  email: string;
  transactionId: string;
}

export interface BankTransferPayment extends PaymentDetails {
  method: 'bank_transfer';
  accountNumber: string;
  bankName: string;
  routingNumber: string;
}

export type Payment = CreditCardPayment | DebitCardPayment | PayPalPayment | BankTransferPayment;

export interface PaymentResponse {
  success: boolean;
  transactionId: string;
  timestamp: Date;
  error?: {
    code: string;
    message: string;
  };
}

export interface PaymentRequest<T extends Payment> {
  payment: T;
  metadata?: Record<string, unknown>;
}