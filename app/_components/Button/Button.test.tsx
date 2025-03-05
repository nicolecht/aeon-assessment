import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button component", () => {
  it("renders correctly and matches the snapshot", () => {
    const { asFragment } = render(<Button>Click Me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with provided className", () => {
    render(<Button className="custom-class" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("custom-class");
  });

  it("renders a button with the correct text", () => {
    render(<Button>Click Me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    await userEvent.click(screen.getByRole("button", { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
