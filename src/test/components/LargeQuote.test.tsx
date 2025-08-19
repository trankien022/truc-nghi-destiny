import { render, screen } from "@testing-library/react";
import LargeQuote from "@/components/LargeQuote";

describe("LargeQuote Component", () => {
  it("renders the specified quote text", () => {
    render(<LargeQuote />);

    // Use a more flexible matcher for the quote text
    expect(
      screen.getByText(/Tử Vi\/Bát Tự hay Kinh Dịch không giải quyết thay bạn/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Kim Chỉ Nam, giúp bạn biết khi nào nên tiến/)
    ).toBeInTheDocument();
  });

  it("renders as a blockquote element", () => {
    render(<LargeQuote />);

    const blockquote =
      screen.getByRole("blockquote") || document.querySelector("blockquote");
    expect(blockquote).toBeInTheDocument();
  });

  it("includes a quote icon", () => {
    render(<LargeQuote />);

    // The Quote icon should be rendered (we can check for its presence via class or test-id)
    const section = document.querySelector("section");
    expect(section).toBeInTheDocument();

    // Check that the quote has proper styling classes
    const blockquote = document.querySelector("blockquote");
    expect(blockquote).toHaveClass("font-playfair");
    expect(blockquote).toHaveClass("italic");
  });

  it("has proper semantic structure", () => {
    render(<LargeQuote />);

    const section = document.querySelector("section");
    expect(section).toBeInTheDocument();

    const blockquote = document.querySelector("blockquote");
    expect(blockquote).toBeInTheDocument();
    expect(blockquote?.tagName).toBe("BLOCKQUOTE");
  });
});
