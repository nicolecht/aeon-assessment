import { NextResponse } from "next/server";

export async function GET() {
  const transactions = [
    {
      id: 1,
      date: "2025-03-01",
      referenceId: "REF123456",
      to: { companyName: "Bank ABC", recipientReference: "John Doe" },
      transactionType: "DuitNow payment",
      amount: 1200,
      currency: "MYR",
    },
    {
      id: 2,
      date: "2025-03-02",
      referenceId: "REF789012",
      to: { companyName: "E-Wallet XYZ", recipientReference: "Jane Smith" },
      transactionType: "DuitNow payment",
      amount: 54810.16,
      currency: "MYR",
    },
    {
      id: 3,
      date: "2025-03-03",
      referenceId: "REF345678",
      to: {
        companyName: "Investment Firm QRS",
        recipientReference: "Alice Brown",
      },
      transactionType: "DuitNow payment",
      amount: 100,
      currency: "MYR",
    },
  ];

  return NextResponse.json(transactions);
}
