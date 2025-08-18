import { Check, Star, Crown, Zap, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState("bat-tu");
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

  const packages = [
    {
      id: "tong-quat",
      name: "Luận Tổng Quát",
      price: "299k",
      originalPrice: null,
      description: "Xem Đại Vận 10 năm (Tình duyên - Công việc - Tài chính)",
      features: {
        "Xem Đại Vận 10 năm": true,
        "Phân tích tình duyên": true,
        "Phân tích công việc": true,
        "Phân tích tài chính": true,
        "Xem từng Đại Vận trọn đời": false,
        "Nhận biết Quý Nhân": false,
        "Thuật phong thuỷ Chiêu Tài": false,
        "Luận tuổi hợp": false,
        "Xem năm cưới": false,
        "Bản đồ sao chiêm tinh": false,
        "Gieo quẻ Kinh Dịch": false,
      },
    },
    {
      id: "tron-doi",
      name: "Tử Vi Trọn Đời",
      price: "599k",
      originalPrice: null,
      description: "Xem từng Đại Vận trọn đời chi tiết",
      features: {
        "Xem Đại Vận 10 năm": true,
        "Phân tích tình duyên": true,
        "Phân tích công việc": true,
        "Phân tích tài chính": true,
        "Xem từng Đại Vận trọn đời": true,
        "Nhận biết Quý Nhân": false,
        "Thuật phong thuỷ Chiêu Tài": false,
        "Luận tuổi hợp": false,
        "Xem năm cưới": false,
        "Bản đồ sao chiêm tinh": false,
        "Gieo quẻ Kinh Dịch": false,
      },
    },
    {
      id: "bat-tu",
      name: "Bát Tự Trọn Đời",
      price: "499k",
      originalPrice: "699k",
      description: "Nhận biết Quý Nhân + Dùng thuật phong thuỷ để Chiêu Tài",
      isPopular: true,
      features: {
        "Xem Đại Vận 10 năm": true,
        "Phân tích tình duyên": true,
        "Phân tích công việc": true,
        "Phân tích tài chính": true,
        "Xem từng Đại Vận trọn đời": true,
        "Nhận biết Quý Nhân": true,
        "Thuật phong thuỷ Chiêu Tài": true,
        "Luận tuổi hợp": false,
        "Xem năm cưới": false,
        "Bản đồ sao chiêm tinh": false,
        "Gieo quẻ Kinh Dịch": false,
      },
    },
    {
      id: "tinh-duyen",
      name: "Tình Duyên",
      price: "199k",
      originalPrice: null,
      description: "Luận Tuổi hợp dựa trên Tử Vi/Bát tự - Xem năm cưới",
      features: {
        "Xem Đại Vận 10 năm": false,
        "Phân tích tình duyên": true,
        "Phân tích công việc": false,
        "Phân tích tài chính": false,
        "Xem từng Đại Vận trọn đời": false,
        "Nhận biết Quý Nhân": false,
        "Thuật phong thuỷ Chiêu Tài": false,
        "Luận tuổi hợp": true,
        "Xem năm cưới": true,
        "Bản đồ sao chiêm tinh": false,
        "Gieo quẻ Kinh Dịch": false,
      },
    },
    {
      id: "ban-do-sao",
      name: "Bản Đồ Sao - Chiêm Tinh",
      price: "399k",
      originalPrice: "499k",
      description: "2 lá số của Quý khách và Người thương",
      features: {
        "Xem Đại Vận 10 năm": false,
        "Phân tích tình duyên": true,
        "Phân tích công việc": false,
        "Phân tích tài chính": false,
        "Xem từng Đại Vận trọn đời": false,
        "Nhận biết Quý Nhân": false,
        "Thuật phong thuỷ Chiêu Tài": false,
        "Luận tuổi hợp": true,
        "Xem năm cưới": false,
        "Bản đồ sao chiêm tinh": true,
        "Gieo quẻ Kinh Dịch": false,
      },
    },
    {
      id: "kinh-dich",
      name: "Gieo Quẻ Kinh Dịch",
      price: "199k",
      originalPrice: "250k",
      description: "Giải đáp thắc mắc qua Kinh Dịch",
      features: {
        "Xem Đại Vận 10 năm": false,
        "Phân tích tình duyên": false,
        "Phân tích công việc": false,
        "Phân tích tài chính": false,
        "Xem từng Đại Vận trọn đời": false,
        "Nhận biết Quý Nhân": false,
        "Thuật phong thuỷ Chiêu Tài": false,
        "Luận tuổi hợp": false,
        "Xem năm cưới": false,
        "Bản đồ sao chiêm tinh": false,
        "Gieo quẻ Kinh Dịch": true,
      },
    },
  ];

  const allFeatures = [
    "Xem Đại Vận 10 năm",
    "Phân tích tình duyên",
    "Phân tích công việc",
    "Phân tích tài chính",
    "Xem từng Đại Vận trọn đời",
    "Nhận biết Quý Nhân",
    "Thuật phong thuỷ Chiêu Tài",
    "Luận tuổi hợp",
    "Xem năm cưới",
    "Bản đồ sao chiêm tinh",
    "Gieo quẻ Kinh Dịch",
  ];

  const scrollToForm = () => {
    const form = document.getElementById("order-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-inter text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tham gia cùng 45.346 người yêu thích
            <br />
            Tử Vi Trúc Nghi
          </h2>

          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            TUẦN NÀY GIẢM GIÁ -50% OFF
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Half - Package Selection */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-6">
                Chọn Gói Luận Giải
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPackage === pkg.id
                        ? "border-green-500 bg-green-50 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    } ${pkg.isPopular ? "ring-2 ring-yellow-400" : ""}`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                          Phổ biến
                        </div>
                      </div>
                    )}

                    <div className="flex items-center mb-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          selectedPackage === pkg.id
                            ? "border-green-500 bg-green-500"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedPackage === pkg.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <h4 className="font-bold text-base">{pkg.name}</h4>
                    </div>

                    <div className="text-center mb-3">
                      <div className="text-2xl font-bold text-green-600">
                        {pkg.price}
                      </div>
                      {pkg.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {pkg.originalPrice}
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-gray-600 text-center">
                      {pkg.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Half - Features Comparison */}
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="bg-gray-50 px-4 py-3 border-b">
                  <h3 className="text-xl font-bold text-center">
                    Tính năng gói "
                    {packages.find((p) => p.id === selectedPackage)?.name}"
                  </h3>
                </div>

                <div className="p-4 max-h-96 overflow-y-auto">
                  <div className="space-y-3">
                    {allFeatures.map((feature, index) => {
                      const selectedPkg = packages.find(
                        (p) => p.id === selectedPackage
                      );
                      const hasFeature = selectedPkg?.features[feature];

                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                        >
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                          <div className="flex items-center">
                            {hasFeature ? (
                              <Check className="w-5 h-5 text-green-600" />
                            ) : (
                              <X className="w-5 h-5 text-red-500" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={scrollToForm}
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg font-semibold rounded-lg"
            >
              Chọn gói {packages.find((p) => p.id === selectedPackage)?.name} -{" "}
              {packages.find((p) => p.id === selectedPackage)?.price}
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
