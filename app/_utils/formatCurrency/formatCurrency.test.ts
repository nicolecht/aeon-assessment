import { formatCurrency } from "@/app/_utils/formatCurrency";

describe("formatCurrency", () => {
  test("formats positive numbers correctly", () => {
    expect(formatCurrency(1000, "MYR")).toBe("MYR 1,000.00");
    expect(formatCurrency(99.5, "USD")).toBe("$99.50");
    expect(formatCurrency(1234567.89, "EUR")).toBe("€1,234,567.89");
  });

  test("formats negative numbers correctly", () => {
    expect(formatCurrency(-500, "MYR")).toBe("-MYR 500.00");
    expect(formatCurrency(-1234.56, "USD")).toBe("-$1,234.56");
  });

  test("formats zero correctly", () => {
    expect(formatCurrency(0, "MYR")).toBe("MYR 0.00");
    expect(formatCurrency(0, "USD")).toBe("$0.00");
  });

  test("handles different currencies", () => {
    expect(formatCurrency(100, "GBP")).toBe("£100.00");
    expect(formatCurrency(2500, "JPY")).toBe("¥2,500.00");
  });
});
