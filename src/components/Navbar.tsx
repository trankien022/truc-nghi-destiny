import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "audience-fit", label: "Dành cho ai?" },
  { id: "credibility", label: "Về Trúc Nghi" },
  { id: "pricing", label: "Giá" },
  { id: "testimonials", label: "Đánh giá" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      {/* Main header */}
      <div className="sticky top-0 z-50">
        <header className="bg-white/80 backdrop-blur border-b border-gray-200">
          <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
            {/* Brand */}
            <a
              href="#top"
              className="font-playfair text-xl md:text-2xl font-bold text-primary tracking-tight"
            >
              Tử Vi Trúc Nghi
            </a>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-5">
              {navItems.map((i) => (
                <li key={i.id}>
                  <a
                    href={`#${i.id}`}
                    className="text-[15px] font-medium text-gray-800 hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-primary/10"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground shadow hover:shadow-md"
              >
                <a href="#order-form" className="font-semibold tracking-wide">
                  Đặt luận giải
                </a>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="container mx-auto px-4 py-3 space-y-2">
                {navItems.map((i) => (
                  <a
                    key={i.id}
                    href={`#${i.id}`}
                    className="block py-2 text-gray-700 hover:text-primary"
                    onClick={close}
                  >
                    {i.label}
                  </a>
                ))}
                <Button asChild className="w-full" onClick={close}>
                  <a href="#order-form">Đặt luận giải</a>
                </Button>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Navbar;
