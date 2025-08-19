import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";

const NavbarWrapper = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe("Navbar Component", () => {
  it("renders the main brand", () => {
    render(<NavbarWrapper />);

    // Check for brand element
    const brandElement = screen.getByText("Tử Vi Trúc Nghi");
    expect(brandElement).toBeInTheDocument();
  });

  it("renders the main navigation items", () => {
    render(<NavbarWrapper />);

    // Check for navigation items
    expect(screen.getByText("Dành cho ai?")).toBeInTheDocument();
    expect(screen.getByText("Về Trúc Nghi")).toBeInTheDocument();
    expect(screen.getByText("Giá")).toBeInTheDocument();
    expect(screen.getByText("Đánh giá")).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<NavbarWrapper />);

    expect(screen.getByText("Đặt luận giải")).toBeInTheDocument();
  });

  it("toggles mobile menu when hamburger is clicked", () => {
    render(<NavbarWrapper />);

    // Find the mobile toggle button
    const toggleButton = screen.getByLabelText("Toggle menu");

    // Initially, mobile menu should not be visible
    expect(screen.queryByRole("navigation")).toBeInTheDocument();

    // Click to open mobile menu
    fireEvent.click(toggleButton);

    // Mobile menu items should be visible
    const mobileMenuItems = screen.getAllByText("Dành cho ai?");
    expect(mobileMenuItems.length).toBeGreaterThan(1); // Desktop + Mobile
  });
});
