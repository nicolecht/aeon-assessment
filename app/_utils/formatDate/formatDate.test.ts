import { formatDate } from "@/app/_utils/formatDate";

describe("formatDate", () => {
  test("formats dates correctly", () => {
    expect(formatDate("2024-03-05")).toBe("5 Mar 2024");
    expect(formatDate("2000-12-25")).toBe("25 Dec 2000");
    expect(formatDate("1995-07-01")).toBe("1 Jul 1995");
  });

  test("handles different date formats", () => {
    expect(formatDate("2024-03-05T12:00:00Z")).toBe("5 Mar 2024");
    expect(formatDate("2023-06-15T23:59:59.999Z")).toBe("16 Jun 2023");
  });

  test("handles invalid dates", () => {
    expect(() => formatDate("invalid-date")).toThrow();
    expect(() => formatDate("")).toThrow();
  });
});
