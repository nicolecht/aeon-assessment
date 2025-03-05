export interface Transaction {
  id: number;
  date: string;
  referenceId: string;
  to: {
    companyName: string;
    recipientReference: string;
  };
  transactionType: string;
  amount: number;
  currency: string;
}
