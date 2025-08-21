import { Button } from "@/components/ui/button";
import { Star, Shield, FileText, Users } from "lucide-react";
// Placeholder image for hero section
const heroImage =
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
    delay: 200,
  });

  const { elementRef: subtitleRef, isVisible: subtitleVisible } =
    useScrollAnimation({
      threshold: 0.3,
      delay: 400,
    });

  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({
    threshold: 0.3,
    delay: 600,
  });

  const scrollToForm = () => {
    const form = document.getElementById("order-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSample = () => {
    const sample = document.getElementById("sample-section");
    if (sample) {
      sample.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1
              ref={titleRef}
              className={cn(
                "font-playfair text-4xl md:text-6xl font-bold leading-tight mb-6",
                "transition-all duration-800 ease-out-expo",
                titleVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              )}
            >
              Liệu bạn có đang tìm kiếm sự rõ ràng?
            </h1>

            <ul
              ref={subtitleRef}
              className={cn(
                "space-y-3 text-lg md:text-xl font-inter mb-8 opacity-90 leading-relaxed list-disc list-inside",
                "transition-all duration-600 ease-out-expo",
                subtitleVisible
                  ? "opacity-90 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              <li
                className={cn(
                  "transition-all duration-600 ease-out-expo delay-100",
                  subtitleVisible
                    ? "opacity-90 translate-x-0"
                    : "opacity-0 -translate-x-4"
                )}
              >
                Muốn nắm rõ điều gì sắp xảy ra trong Công danh/Tình cảm/Gia đạo
                để dễ bề tuỳ cơ ứng biến
              </li>
              <li
                className={cn(
                  "transition-all duration-600 ease-out-expo delay-200",
                  subtitleVisible
                    ? "opacity-90 translate-x-0"
                    : "opacity-0 -translate-x-4"
                )}
              >
                Mong cầu một con đường sáng tỏ cho 10–20 năm tới thay vì đau đáu
                trong lòng câu hỏi ‘Tại sao mình sống tốt nhưng vẫn gặp chuyện
                không may, còn người khác sống tệ thì lại hạnh phúc hơn mình?’
              </li>
            </ul>

            <div
              ref={ctaRef}
              className={cn(
                "flex flex-col sm:flex-row gap-4 mb-8",
                "transition-all duration-600 ease-out-expo",
                ctaVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              )}
            >
              <Button
                onClick={scrollToForm}
                size="lg"
                className={cn(
                  "bg-secondary text-secondary-foreground font-semibold px-8 py-4 text-lg shadow-strong",
                  "transition-all duration-300 ease-out",
                  "hover:bg-secondary-light hover:scale-105 hover:shadow-xl hover:shadow-secondary/25",
                  "hover:-translate-y-1",
                  "transform-gpu"
                )}
              >
                Nhận Luận Giải Cá Nhân
              </Button>
              <Button
                onClick={scrollToSample}
                variant="outline"
                size="lg"
                className={cn(
                  "border-white text-white font-semibold px-8 py-4 text-lg",
                  "transition-all duration-300 ease-out",
                  "hover:bg-white hover:text-primary hover:scale-105",
                  "hover:-translate-y-1 hover:shadow-lg",
                  "transform-gpu"
                )}
              >
                Xem mẫu bản luận
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 opacity-90">
                <Shield className="w-4 h-4 text-secondary" />
                <span>Bảo mật thông tin</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <FileText className="w-4 h-4 text-secondary" />
                <span>Giao file PDF/Email</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <Users className="w-4 h-4 text-secondary" />
                <span>Hỗ trợ sau đọc</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Tử Vi Trúc Nghi - Luận giải tử vi chuyên nghiệp"
                className="w-full h-auto rounded-2xl shadow-strong"
                loading="eager"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 animate-float delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
