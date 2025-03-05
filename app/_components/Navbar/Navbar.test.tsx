import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { navLinks } from "./constants";

describe("Navbar component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders desktop navbar with correct elements", () => {
    render(<Navbar />);

    expect(screen.getByTestId("desktop-navbar")).toBeInTheDocument();

    navLinks.forEach(({ name }) => {
      expect(screen.getAllByText(name)[0]).toBeInTheDocument();
    });

    expect(screen.getAllByPlaceholderText("Search...")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Login")[0]).toBeInTheDocument();
  });
});
