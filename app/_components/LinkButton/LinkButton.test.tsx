import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LinkButton from ".";

describe("LinkButton component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(
      <LinkButton href="/test">Click Me</LinkButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with the correct href", () => {
    render(<LinkButton href="/test">Click Me</LinkButton>);
    const linkElement = screen.getByRole("link", { name: /click me/i });
    expect(linkElement).toHaveAttribute("href", "/test");
  });

  it("accepts and applies additional className", () => {
    render(
      <LinkButton href="/test" className="custom-class">
        Click Me
      </LinkButton>
    );
    const linkElement = screen.getByRole("link", { name: /click me/i });
    expect(linkElement).toHaveClass("custom-class");
  });

  it("renders the provided child text", () => {
    render(<LinkButton href="/test">Click Me</LinkButton>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
});
