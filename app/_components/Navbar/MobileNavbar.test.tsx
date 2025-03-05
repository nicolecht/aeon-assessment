import { render, screen, fireEvent } from "@testing-library/react";
import MobileNavbar from "./MobileNavbar";
import { navLinks } from "./constants";

describe("MobileNavbar component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<MobileNavbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders mobile navbar with correct elements", () => {
    render(<MobileNavbar />);

    expect(screen.getByTestId("mobile-navbar")).toBeInTheDocument();
    expect(screen.getByText("Aeon Bank Assessment")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /toggle search/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /toggle navigation menu/i })
    ).toBeInTheDocument();
  });

  test("toggles mobile menu when clicking menu button", () => {
    render(<MobileNavbar />);

    const menuButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });

    fireEvent.click(menuButton);
    const menuContainer = screen.getByTestId("mobile-menu");
    expect(menuContainer).toHaveClass("max-h-screen opacity-100");

    fireEvent.click(menuButton);
    expect(menuContainer).toHaveClass("max-h-0 opacity-0");
  });

  test("toggles search bar when clicking search button", () => {
    render(<MobileNavbar />);

    const searchButton = screen.getByRole("button", { name: /toggle search/i });

    fireEvent.click(searchButton);
    const searchContainer = screen
      .getByPlaceholderText("Search...")
      .closest("div");
    expect(searchContainer).toHaveClass("max-h-screen opacity-100");

    fireEvent.click(searchButton);
    expect(searchContainer).toHaveClass("max-h-0 opacity-0");
  });

  test("closes menu when a menu link is clicked", () => {
    render(<MobileNavbar />);

    const menuButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });
    fireEvent.click(menuButton);

    const firstNavLink = screen.getByText(navLinks[0].name);
    fireEvent.click(firstNavLink);

    const menuContainer = screen.getByTestId("mobile-menu");
    expect(menuContainer).toHaveClass("max-h-0 opacity-0");
  });

  test("closes mobile menu when clicking Aeon Bank Assessment", () => {
    render(<MobileNavbar />);

    const menuButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });

    fireEvent.click(menuButton);

    const menuContainer = screen.getByTestId("mobile-menu");

    expect(menuContainer).toHaveClass("max-h-screen opacity-100");

    fireEvent.click(screen.getByText("Aeon Bank Assessment"));

    expect(menuContainer).toHaveClass("max-h-0 opacity-0");
  });

  test("closes search bar when clicking Aeon Bank Assessment", () => {
    render(<MobileNavbar />);

    const searchButton = screen.getByRole("button", { name: /toggle search/i });

    fireEvent.click(searchButton);

    const searchContainer = screen
      .getByPlaceholderText("Search...")
      .closest("div");

    expect(searchContainer).toHaveClass("max-h-screen opacity-100");

    fireEvent.click(screen.getByText("Aeon Bank Assessment"));

    expect(searchContainer).toHaveClass("max-h-0 opacity-0");
  });
});
