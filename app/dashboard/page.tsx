"use client";

import { useEffect, useState } from "react";
import TransactionTable from "../_components/TransactionTable";

export default function Dashboard() {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const res = await fetch("/api/transaction-history");
    const data = await res.json();
    setTransactions(data);
  }

  if (!transactions)
    return (
      <div className="grid place-items-center h-dvh">
        <p>Loading...</p>
      </div>
    );

  return (
    <main className="lg:p-20 p-4 space-y-4">
      <h4 className="text-primary-500">Transaction History</h4>
      <TransactionTable transactions={transactions} />
    </main>
  );
}
