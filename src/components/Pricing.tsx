import { Check, Star, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState, useEffect } from "react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [showAllPackages, setShowAllPackages] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 22,
    minutes: 56,
    seconds: 57,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
    delay: 100,
  });

  const { containerRef: cardsRef, visibleItems: cardsVisible } =
    useStaggeredAnimation(
      6, // Total number of packages
      { threshold: 0.2, staggerDelay: 150 }
    );

  const packages = [
    // First 4 packages (shown by default)
    {
      id: "tong-quat",
      name: "Luận Tổng Quát",
      price: "299k",
      originalPrice: null,
      description: "Xem Đại Vận 10 năm - Tình duyên, Công việc, Tài chính",
      badge: "Tốt cho người mới",
      features: [
        "Phân tích Đại Vận 10 năm",
        "Luận giải tình duyên cơ bản",
        "Hướng nghiệp phù hợp",
        "Tài lộc và cơ hội",
        "File PDF 25-30 trang",
        "Hỗ trợ giải đáp qua email",
      ],
      priority: 1,
    },
    {
      id: "tron-doi",
      name: "Tử Vi Trọn Đời",
      price: "599k",
      originalPrice: null,
      description: "Xem từng Đại Vận trọn đời chi tiết nhất",
      badge: "Phổ biến",
      isPopular: true,
      features: [
        "Phân tích trọn đời 80 năm",
        "12 cung mệnh chi tiết",
        "Luận từng Đại Vận 10 năm",
        "Tiểu vận hàng năm",
        "Khuyến nghị hành động",
        "File PDF 40-50 trang",
        "Hỗ trợ Q&A trực tiếp",
        "Cập nhật vận hạn định kỳ",
      ],
      priority: 2,
    },
    {
      id: "bat-tu",
      name: "Bát Tự Trọn Đời",
      price: "499k",
      originalPrice: "699k",
      description: "Nhận biết Quý Nhân + Thuật phong thủy Chiêu Tài",
      badge: "Tiết kiệm",
      features: [
        "Phân tích Bát Tự đầy đủ",
        "Nhận diện Quý Nhân của bạn",
        "Thuật phong thủy chiêu tài",
        "Dụng thần - Kỵ thần",
        "Hướng phát triển tối ưu",
        "File PDF 35-45 trang",
        "Tư vấn phong thủy cá nhân",
      ],
      priority: 3,
    },
    {
      id: "tinh-duyen",
      name: "Tình Duyên",
      price: "199k",
      originalPrice: null,
      description: "Luận tuổi hợp, xem năm cưới dựa trên Tử Vi/Bát Tự",
      features: [
        "Phân tích tương hợp đôi lứa",
        "Tuổi hợp - kỵ chi tiết",
        "Thời điểm kết hôn tốt",
        "Cách hóa giải xung khắc",
        "Lời khuyên tình cảm",
        "File PDF 20-25 trang",
      ],
      priority: 4,
    },
    // Additional 2 packages (shown when expanded)
    {
      id: "ban-do-sao",
      name: "Bản Đồ Sao - Chiêm Tinh",
      price: "399k",
      originalPrice: "499k",
      description: "2 lá số của bạn và người thương - Insight mối quan hệ",
      features: [
        "Natal Chart cá nhân",
        "Synastry Chart đôi lứa",
        "12 Houses chi tiết",
        "Aspects quan trọng",
        "Tương thích tình cảm",
        "File PDF 30-35 trang",
      ],
      priority: 5,
    },
    {
      id: "kinh-dich",
      name: "Gieo Quẻ Kinh Dịch",
      price: "199k",
      originalPrice: "250k",
      description: "Giải đáp thắc mắc, quyết định nhanh qua Kinh Dịch",
      features: [
        "Bốc quẻ theo câu hỏi",
        "Giải thích quẻ chính - biến",
        "Lời phán từng hào",
        "Khuyến nghị hành động",
        "Thời điểm thuận lợi",
        "File PDF 10-15 trang",
      ],
      priority: 6,
    },
  ];

  // Get packages to display based on showAllPackages state
  const displayedPackages = showAllPackages
    ? packages
    : packages.filter((pkg) => pkg.priority <= 4);

  const scrollToForm = () => {
    const form = document.getElementById("order-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  const togglePackages = () => {
    setShowAllPackages(!showAllPackages);
  };

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={cn(
            "text-center mb-16",
            "transition-all duration-600 ease-out-expo",
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="font-inter text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chọn gói phù hợp
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Không phí ẩn. Bảo mật dữ liệu. Giao file PDF trong 24 giờ.
          </p>

          <div
            className={cn(
              "inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-8",
              "transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg",
              "animate-pulse"
            )}
          >
            <Star
              className={cn(
                "w-4 h-4 fill-yellow-400 text-yellow-400",
                "transition-all duration-200 ease-out hover:scale-110 hover:rotate-12"
              )}
            />
            TUẦN NÀY GIẢM GIÁ -50% OFF
            <Star
              className={cn(
                "w-4 h-4 fill-yellow-400 text-yellow-400",
                "transition-all duration-200 ease-out hover:scale-110 hover:-rotate-12"
              )}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Pricing Cards Grid */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {displayedPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={cn(
                  "relative border-2 rounded-2xl shadow-sm bg-white",
                  "transition-all duration-300 ease-out transform-gpu",
                  "hover:scale-[1.02] hover:shadow-xl hover:border-primary/20",
                  cardsVisible[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                  pkg.isPopular && "ring-2 ring-primary/20 border-primary/30"
                )}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold",
                        pkg.isPopular
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      )}
                    >
                      {pkg.badge}
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>

                  <div className="mb-3">
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-4xl font-extrabold text-primary">
                        {pkg.price.replace("k", "")}
                        <span className="text-lg">k</span>
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToForm}
                    className={cn(
                      "w-full font-semibold py-3 rounded-lg",
                      "transition-all duration-200 ease-out",
                      "hover:translate-y-[-2px] hover:shadow-lg",
                      pkg.isPopular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary hover:bg-secondary/90"
                    )}
                  >
                    Chọn gói này
                  </Button>

                  {/* Sub-note */}
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Giao file PDF trong 24 giờ
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="text-center mb-8">
            <Button
              onClick={togglePackages}
              variant="outline"
              className={cn(
                "px-6 py-3 rounded-lg font-medium",
                "transition-all duration-200 ease-out",
                "hover:bg-primary/5 hover:border-primary/30"
              )}
              aria-expanded={showAllPackages}
            >
              {showAllPackages ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Thu gọn
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Xem thêm 2 gói
                </>
              )}
            </Button>
          </div>

          {/* Countdown Timer */}
          <div className="bg-gray-100 rounded-lg p-6 mt-8">
            <p className="text-center text-sm text-gray-600 mb-4">
              ƯU ĐÃI CÓ HẠN KẾT THÚC VÀO NGÀY 24 THÁNG 8
            </p>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-500">NGÀY</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-500">GIỜ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-500">PHÚT</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-500">GIÂY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
