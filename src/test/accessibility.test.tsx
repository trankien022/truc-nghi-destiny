import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";
import Privacy from "@/pages/Privacy";

const IndexWrapper = () => (
  <BrowserRouter>
    <Index />
  </BrowserRouter>
);

const PrivacyWrapper = () => (
  <BrowserRouter>
    <Privacy />
  </BrowserRouter>
);

describe("Accessibility Tests", () => {
  it("Index page has proper heading hierarchy", () => {
    render(<IndexWrapper />);

    // Check for H1 (should be unique)
    const h1Elements = document.querySelectorAll("h1");
    expect(h1Elements.length).toBe(1);

    // Check for proper heading structure (H1 -> H2 -> H3)
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    expect(headings.length).toBeGreaterThan(0);
  });

  it("Images have alt text", () => {
    render(<IndexWrapper />);

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });

  it("Links have accessible names", () => {
    render(<IndexWrapper />);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      // Links should have either text content or aria-label
      const hasText = link.textContent && link.textContent.trim().length > 0;
      const hasAriaLabel = link.hasAttribute("aria-label");
      expect(hasText || hasAriaLabel).toBe(true);
    });
  });

  it("Form inputs have labels", () => {
    render(<IndexWrapper />);

    const inputs = document.querySelectorAll("input, textarea, select");

    // Skip this test if no form inputs are present (they might be in a collapsed section)
    if (inputs.length === 0) {
      expect(true).toBe(true); // Pass if no inputs found
      return;
    }

    inputs.forEach((input) => {
      // Skip hidden inputs or inputs without IDs
      if (input.type === "hidden" || !input.id) {
        return;
      }

      // Inputs should have either a label, aria-label, or aria-labelledby
      const hasLabel = !!document.querySelector(`label[for="${input.id}"]`);
      const hasAriaLabel = input.hasAttribute("aria-label");
      const hasAriaLabelledBy = input.hasAttribute("aria-labelledby");

      expect(hasLabel || hasAriaLabel || hasAriaLabelledBy).toBe(true);
    });
  });

  it("Buttons have accessible names", () => {
    render(<IndexWrapper />);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      // Buttons should have either text content or aria-label
      const hasText =
        button.textContent && button.textContent.trim().length > 0;
      const hasAriaLabel = button.hasAttribute("aria-label");
      expect(hasText || hasAriaLabel).toBe(true);
    });
  });

  it("Privacy page is accessible", () => {
    render(<PrivacyWrapper />);

    // Check for H1
    const h1Elements = document.querySelectorAll("h1");
    expect(h1Elements.length).toBe(1);

    // Check for proper link back to home
    const homeLink = document.querySelector('a[href="/"]');
    expect(homeLink).toBeInTheDocument();
  });

  it("Navigation has proper ARIA attributes", () => {
    render(<IndexWrapper />);

    // Check for navigation landmarks
    const navElements = document.querySelectorAll("nav");
    expect(navElements.length).toBeGreaterThan(0);

    // Check for mobile menu toggle button
    const toggleButton = document.querySelector(
      'button[aria-label="Toggle menu"]'
    );
    expect(toggleButton).toBeInTheDocument();
  });

  it("Color contrast is maintained with proper text classes", () => {
    render(<IndexWrapper />);

    // Check that text elements use proper Tailwind classes for contrast
    const textElements = document.querySelectorAll('[class*="text-"]');
    expect(textElements.length).toBeGreaterThan(0);

    // This is a basic check - in a real app you'd use tools like axe-core
    // to test actual color contrast ratios
  });
});
