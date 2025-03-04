import { Transaction } from "@/app/_types/Transaction";
import { formatCurrency } from "@/app/_utils/formatCurrency";
import { formatDate } from "@/app/_utils/formatDate";

export default function TransactionTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <table className="w-full rounded-lg lg:overflow-clip overflow-x-scroll">
      <thead>
        <tr className="bg-neutral-100 [&>th]:p-4 [&>th]:text-start [&>th:last-child]:text-end">
          <th>Date</th>
          <th>Reference ID</th>
          <th>To</th>
          <th>Transaction Type</th>
          <th className="text-end">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr
            key={transaction.id}
            className="[&>td]:p-4 [&>td]:border-b [&>td]:border-neutral-300 "
          >
            <td>{formatDate(transaction.date)}</td>
            <td>#{transaction.referenceId}</td>
            <td>
              <div>{transaction.to.companyName}</div>
              <div className="text-neutral-500">
                {transaction.to.recipientReference}
              </div>
            </td>
            <td>{transaction.transactionType}</td>
            <td className="text-end">
              {formatCurrency(transaction.amount, transaction.currency)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
