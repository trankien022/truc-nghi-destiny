import { TrendingUp, DollarSign, Heart, Shield, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ValueProposition = () => {
  const values = [
    {
      icon: TrendingUp,
      title: "Đại vận & Tiểu vận",
      description: "Timeline 10 năm/1 năm chi tiết",
      benefit: "Lập kế hoạch sự nghiệp, chọn thời điểm hành động tối ưu",
      example: "Biết năm nào thuận lợi để khởi nghiệp, đầu tư"
    },
    {
      icon: DollarSign,
      title: "Tài lộc – Quan lộ", 
      description: "Nguồn thu, thời cơ đầu tư, rủi ro",
      benefit: "Quản trị rủi ro, tránh 'đu đỉnh', nắm bắt cơ hội",
      example: "Thời điểm nào nên mở rộng kinh doanh, khi nào nên thận trọng"
    },
    {
      icon: Heart,
      title: "Tình cảm – Gia đạo",
      description: "Chu kỳ hợp/kị, thời điểm dễ xung đột",
      benefit: "Cách hoá giải, giữ nền hòa khí trong gia đình",
      example: "Hiểu partner, tránh tranh cãi vào thời điểm nhạy cảm"
    },
    {
      icon: Shield,
      title: "Sức khỏe – Tai ách",
      description: "Gợi ý phòng nguy theo chu kỳ",
      benefit: "Ưu tiên khám sức khỏe, phòng tránh theo mốc vận",
      example: "Giai đoạn nào cần chú ý tim mạch, tiêu hóa..."
    },
    {
      icon: BookOpen,
      title: "Phong cách hành xử",
      description: "Theo mệnh cục và giai đoạn vận",
      benefit: "Việc nên làm – việc nên tránh rõ ràng",
      example: "Cách giao tiếp, làm việc phù hợp với bản mệnh"
    }
  ];

  const openModal = (title: string) => {
    // This would open a modal with sample content
    console.log(`Opening modal for: ${title}`);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Bạn nhận được gì trong bản luận giải?
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-3xl mx-auto leading-relaxed">
            Hệ thống phân tích toàn diện 80 năm vận hạn, từ lý thuyết đến ứng dụng thực tế
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 animate-slide-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground font-inter mb-4 leading-relaxed">
                  {value.description}
                </p>
                
                <div className="bg-secondary/10 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-secondary text-sm mb-2 uppercase tracking-wide">
                    Lợi ích ứng dụng
                  </h4>
                  <p className="text-foreground font-inter text-sm leading-relaxed">
                    {value.benefit}
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-primary text-sm mb-2 uppercase tracking-wide">
                    Ví dụ cụ thể
                  </h4>
                  <p className="text-foreground font-inter text-sm leading-relaxed">
                    {value.example}
                  </p>
                </div>
                
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => openModal(value.title)}
                  className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Xem ví dụ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;