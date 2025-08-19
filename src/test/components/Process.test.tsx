import { render, screen } from "@testing-library/react";
import Process from "@/components/Process";

describe("Process Component", () => {
  it("renders the section title and description", () => {
    render(<Process />);

    expect(screen.getByText("Quy trình 3 bước đơn giản")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Nhanh chóng, thuận tiện, minh bạch - nhận luận giải trong vòng 24 giờ/
      )
    ).toBeInTheDocument();
  });

  it("renders all three process steps", () => {
    render(<Process />);

    // Step 1
    expect(screen.getByText("Điền form thông tin")).toBeInTheDocument();
    expect(
      screen.getByText("Họ tên, Email, SĐT, Ngày/Giờ sinh, Nơi sinh")
    ).toBeInTheDocument();

    // Step 2
    expect(screen.getByText("Thanh toán nhanh")).toBeInTheDocument();
    expect(
      screen.getByText("QR Code hiển thị ngay, chuyển khoản đơn giản")
    ).toBeInTheDocument();

    // Step 3
    expect(screen.getByText("Nhận luận giải")).toBeInTheDocument();
    expect(
      screen.getByText("Email xác nhận tự động + file PDF trong 24 giờ")
    ).toBeInTheDocument();
  });

  it("displays consistent 24-hour SLA messaging", () => {
    render(<Process />);

    // Check for 24-hour messaging in multiple places
    expect(screen.getByText(/trong vòng 24 giờ/)).toBeInTheDocument();
    expect(screen.getByText(/file PDF trong 24 giờ/)).toBeInTheDocument();
  });

  it("renders step numbers correctly", () => {
    render(<Process />);

    // Check for step numbers (they should be visible as text content)
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renders the confirmation message", () => {
    render(<Process />);

    expect(
      screen.getByText(
        "Sau thanh toán: Nhận email xác nhận tự động ngay lập tức"
      )
    ).toBeInTheDocument();
  });

  it("has the correct section id for navigation", () => {
    render(<Process />);

    // Check for the section with id="process"
    const section = document.querySelector("#process");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "process");
  });
});
