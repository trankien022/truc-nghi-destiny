import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FAQ from "@/components/FAQ";

const FAQWrapper = () => (
  <BrowserRouter>
    <FAQ />
  </BrowserRouter>
);

describe("FAQ Component", () => {
  it("renders the section title and description", () => {
    render(<FAQWrapper />);

    expect(screen.getByText("Câu hỏi thường gặp")).toBeInTheDocument();
    expect(
      screen.getByText("Giải đáp những thắc mắc phổ biến về dịch vụ luận giải")
    ).toBeInTheDocument();
  });

  it("renders key FAQ questions", () => {
    render(<FAQWrapper />);

    expect(
      screen.getByText("Có cần phải đúng giờ sinh không?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Bao lâu tôi sẽ nhận được bản luận giải?")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Bản luận giải tôi nhận được sẽ có hình thức như thế nào?"
      )
    ).toBeInTheDocument();
  });

  it("displays consistent SLA messaging in timing answer", () => {
    render(<FAQWrapper />);

    // Click on the timing question to expand it
    const timingQuestion = screen.getByText(
      "Bao lâu tôi sẽ nhận được bản luận giải?"
    );
    fireEvent.click(timingQuestion);

    // Check for SLA messaging: 12–36 hours and max 72 hours
    expect(screen.getByText(/12–36 giờ/)).toBeInTheDocument();
    expect(screen.getByText(/không quá 72 giờ/)).toBeInTheDocument();
  });

  it("includes privacy policy reference", () => {
    render(<FAQWrapper />);

    // Check that privacy policy reference exists in the contact box
    const privacyElements = screen.getAllByText(/Chính sách bảo mật/);
    expect(privacyElements.length).toBeGreaterThan(0);
  });

  it("renders contact information", () => {
    render(<FAQWrapper />);

    expect(screen.getByText("support@trucnghi.com")).toBeInTheDocument();
    expect(screen.getByText("0123 456 789")).toBeInTheDocument();
  });

  it("includes link to privacy page", () => {
    render(<FAQWrapper />);

    const privacyLink = screen.getByRole("link", {
      name: "Chính sách bảo mật",
    });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute("href", "/privacy");
  });

  it("has correct contact links", () => {
    render(<FAQWrapper />);

    const emailLink = screen.getByRole("link", {
      name: "support@trucnghi.com",
    });
    const phoneLink = screen.getByRole("link", { name: "0123 456 789" });

    expect(emailLink).toHaveAttribute("href", "mailto:support@trucnghi.com");
    expect(phoneLink).toHaveAttribute("href", "tel:+84123456789");
  });

  it("can expand and collapse FAQ items", () => {
    render(<FAQWrapper />);

    const firstQuestion = screen.getByText("Có cần phải đúng giờ sinh không?");

    // Initially, the answer should not be visible
    expect(
      screen.queryByText(/Giờ sinh càng chính xác thì bản luận giải càng đúng/)
    ).not.toBeInTheDocument();

    // Click to expand
    fireEvent.click(firstQuestion);

    // Now the answer should be visible
    expect(
      screen.getByText(/Giờ sinh càng chính xác thì bản luận giải càng đúng/)
    ).toBeInTheDocument();
  });
});
