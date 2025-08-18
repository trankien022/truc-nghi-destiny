import { Check, Star, Crown, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Pricing = () => {
  const packages = [
    {
      name: "Basic",
      price: "299k",
      originalPrice: "399k",
      icon: Zap,
      features: [
        "Tổng quan mệnh cục cá nhân",
        "Đại vận 10 năm gần nhất",
        "3 khuyến nghị hành động",
        "File PDF chi tiết",
        "Giao kết quả trong 24h"
      ],
      isPopular: false,
      description: "Phù hợp để bắt đầu hiểu mình"
    },
    {
      name: "Pro",
      price: "499k", 
      originalPrice: "699k",
      icon: Star,
      features: [
        "Tất cả tính năng Basic",
        "Roadmap chi tiết 20 năm",
        "Phân tích tài lộc/quan lộ sâu",
        "1 buổi Q&A 20 phút", 
        "Cập nhật vận hạn hàng năm",
        "Hỗ trợ qua email 3 tháng"
      ],
      isPopular: true,
      description: "Được chọn nhiều nhất"
    },
    {
      name: "Premium",
      price: "799k",
      originalPrice: "999k", 
      icon: Crown,
      features: [
        "Tất cả tính năng Pro",
        "Luận giải toàn diện 80 năm",
        "Tình cảm–gia đạo–sức khỏe mở rộng",
        "Checklist hành động theo từng giai đoạn",
        "Q&A 40 phút với chuyên gia",
        "Tư vấn cá nhân hóa trọn đời"
      ],
      isPopular: false,
      description: "Giải pháp toàn diện nhất"
    }
  ];

  const scrollToForm = () => {
    const form = document.getElementById('order-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Đầu tư cho sự rõ ràng
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            So với khoá học thường 20–60 triệu và tốn nhiều tháng, bạn nhận ngay lộ trình 
            vận hạn trong 1 file PDF, đi thẳng vào việc áp dụng.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            Bảo đảm minh bạch - Không cam kết làm giàu/đoán trúng 100%
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 animate-slide-up ${
                pkg.isPopular ? 'ring-2 ring-secondary scale-105' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Được chọn nhiều nhất
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                    pkg.isPopular ? 'bg-secondary/20' : 'bg-primary/10'
                  }`}>
                    <pkg.icon className={`w-8 h-8 ${pkg.isPopular ? 'text-secondary' : 'text-primary'}`} />
                  </div>
                  
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.isPopular ? 'text-secondary' : 'text-primary'
                      }`} />
                      <span className="text-foreground font-inter text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToForm}
                  className={`w-full ${
                    pkg.isPopular 
                      ? 'bg-secondary hover:bg-secondary-light text-secondary-foreground' 
                      : 'bg-primary hover:bg-primary-dark text-primary-foreground'
                  }`}
                  size="lg"
                >
                  Chọn gói {pkg.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-hero text-white font-semibold px-12 py-4 text-lg shadow-glow hover:shadow-strong transition-all duration-300"
          >
            Đặt Luận Giải Ngay – Chỉ từ 299k
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;