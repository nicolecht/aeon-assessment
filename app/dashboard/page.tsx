import TransactionTable from "../_components/TransactionTable";

export default async function Dashboard() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction-history`
  );
  const transactions = await data.json();

  return (
    <main className="lg:p-20 p-4 space-y-4">
      <h4 className="text-primary-500">Transaction History</h4>
      <TransactionTable transactions={transactions} />
    </main>
  );
}
