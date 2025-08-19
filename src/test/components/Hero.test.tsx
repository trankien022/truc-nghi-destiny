import { render, screen, fireEvent } from "@testing-library/react";
import Hero from "@/components/Hero";

// Mock scrollIntoView
Object.defineProperty(Element.prototype, "scrollIntoView", {
  value: vi.fn(),
  writable: true,
});

describe("Hero Component", () => {
  beforeEach(() => {
    // Create mock elements for scroll targets
    const mockOrderForm = document.createElement("div");
    mockOrderForm.id = "order-form";
    document.body.appendChild(mockOrderForm);

    const mockSampleSection = document.createElement("div");
    mockSampleSection.id = "sample-section";
    document.body.appendChild(mockSampleSection);
  });

  afterEach(() => {
    // Clean up mock elements
    const orderForm = document.getElementById("order-form");
    const sampleSection = document.getElementById("sample-section");
    if (orderForm) document.body.removeChild(orderForm);
    if (sampleSection) document.body.removeChild(sampleSection);
  });

  it("renders the new hero heading", () => {
    render(<Hero />);

    expect(
      screen.getByText("Liệu bạn có đang tìm kiếm sự rõ ràng?")
    ).toBeInTheDocument();
  });

  it("renders the updated bullet points", () => {
    render(<Hero />);

    expect(
      screen.getByText(
        /Muốn nắm rõ điều gì sắp xảy ra trong Công danh\/Tình cảm\/Gia đạo/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Mong cầu một con đường sáng tỏ cho 10–20 năm tới/)
    ).toBeInTheDocument();
  });

  it("renders the CTA buttons", () => {
    render(<Hero />);

    expect(screen.getByText("Nhận Luận Giải Cá Nhân")).toBeInTheDocument();
    expect(screen.getByText("Xem mẫu bản luận")).toBeInTheDocument();
  });

  it("renders the trust indicators", () => {
    render(<Hero />);

    expect(screen.getByText("Bảo mật thông tin")).toBeInTheDocument();
    expect(screen.getByText("Giao file PDF/Email")).toBeInTheDocument();
    expect(screen.getByText("Hỗ trợ sau đọc")).toBeInTheDocument();
  });

  it("scrolls to order form when CTA button is clicked", () => {
    render(<Hero />);

    const ctaButton = screen.getByText("Nhận Luận Giải Cá Nhân");
    fireEvent.click(ctaButton);

    const mockOrderForm = document.getElementById("order-form");
    expect(mockOrderForm?.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });

  it("scrolls to sample section when sample button is clicked", () => {
    render(<Hero />);

    const sampleButton = screen.getByText("Xem mẫu bản luận");
    fireEvent.click(sampleButton);

    const mockSampleSection = document.getElementById("sample-section");
    expect(mockSampleSection?.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });

  it("renders the hero image with correct alt text", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText(
      "Tử Vi Trúc Nghi - Luận giải tử vi chuyên nghiệp"
    );
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("loading", "eager");
  });
});
