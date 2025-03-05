import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

describe("Input component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Input placeholder="Enter text" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with provided className", () => {
    render(<Input className="custom-class" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("custom-class");
  });

  it("accepts user input", async () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");

    await userEvent.type(inputElement, "Hello World");

    expect(inputElement).toHaveValue("Hello World");
  });

  it("calls onChange when typing", async () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");

    await userEvent.type(inputElement, "test");

    expect(handleChange).toHaveBeenCalledTimes(4); // "t", "e", "s", "t"
  });
});
