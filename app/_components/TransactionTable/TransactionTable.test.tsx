import { render, screen } from "@testing-library/react";
import TransactionTable from ".";
import { formatDate } from "@/app/_utils/formatDate";

const mockTransactions = [
  {
    id: 1,
    date: "2024-03-01T12:00:00Z",
    referenceId: "ABC123",
    to: {
      companyName: "Aeon Bank",
      recipientReference: "Account 1234",
    },
    transactionType: "Deposit",
    amount: 1000,
    currency: "MYR",
  },
  {
    id: 2,
    date: "2024-03-02T15:30:00Z",
    referenceId: "DEF456",
    to: {
      companyName: "Tech Corp",
      recipientReference: "Invoice 5678",
    },
    transactionType: "Payment",
    amount: 250,
    currency: "MYR",
  },
];

describe("TransactionTable", () => {
  test("renders table headers correctly", () => {
    render(<TransactionTable transactions={mockTransactions} />);

    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Reference ID")).toBeInTheDocument();
    expect(screen.getByText("To")).toBeInTheDocument();
    expect(screen.getByText("Transaction Type")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
  });

  test("renders transactions correctly", () => {
    render(<TransactionTable transactions={mockTransactions} />);

    mockTransactions.forEach((transaction) => {
      expect(
        screen.getByText(formatDate(transaction.date))
      ).toBeInTheDocument();
      expect(
        screen.getByText(`#${transaction.referenceId}`)
      ).toBeInTheDocument();
      expect(screen.getByText(transaction.to.companyName)).toBeInTheDocument();
      expect(
        screen.getByText(transaction.to.recipientReference)
      ).toBeInTheDocument();
      expect(screen.getByText(transaction.transactionType)).toBeInTheDocument();
      expect(
        screen.getByText(
          new RegExp(
            `${transaction.currency}\\s?${transaction.amount.toLocaleString(
              "en-US"
            )}`
          )
        )
      ).toBeInTheDocument();
    });
  });

  test("renders empty state when there are no transactions", () => {
    render(<TransactionTable transactions={[]} />);

    expect(screen.getByRole("table")).toBeInTheDocument();

    expect(screen.queryByTestId("transaction-row")).not.toBeInTheDocument();
  });
});
