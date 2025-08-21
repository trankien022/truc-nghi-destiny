import { Award, Users, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
// Placeholder image for master
const masterImage =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces";

const Credibility = () => {
  const stats = [
    {
      icon: Award,
      number: "6",
      label: "Năm nghiên cứu Tử Vi/Bát Tự",
      description: "Từ cơ bản đến chuyên sâu",
    },
    {
      icon: Users,
      number: "500+",
      label: "Lá số đã được luận giải",
      description: "Kinh nghiệm thực tế phong phú",
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Phản hồi tích cực",
      description: "Khách hàng hài lòng và tin tưởng",
    },
  ];

  return (
    <section id="credibility" className="py-20 bg-muted scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Về <span className="text-primary">Trúc Nghi</span>
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Hành trình nghiên cứu và thực hành Tử Vi/Bát Tự với tinh thần khoa
            học, tâm huyết và trách nhiệm cao
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="text-center lg:text-left animate-scale-in">
            <img
              src={masterImage}
              alt="Thầy Trúc Nghi - Chuyên gia Tử Vi Bát Tự"
              className="w-80 h-96 object-cover rounded-2xl shadow-strong mx-auto lg:mx-0 mb-6"
            />
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Xem chứng cứ/giấy chứng nhận
            </Button>
          </div>

          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Kinh nghiệm & Thành tựu
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                Với nhiều năm nghiên cứu sâu về các hệ thống Tử Vi, Bát Tự và
                Kinh Dịch, Trúc Nghi đã phát triển phương pháp luận giải độc
                đáo, kết hợp truyền thống và tư duy hiện đại để mang lại giá trị
                thực tiễn cho khách hàng.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3"></div>
                  <p className="text-foreground font-inter leading-relaxed">
                    Một người luận giải Huyền học chân chính sẽ đóng vai trò như
                    người đồng hành cùng Quý khách hàng của mình xuyên suốt hành
                    trình, giải đáp mọi thắc mắc sau khi luận giải chứ không chỉ
                    lý thuyết suông.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3"></div>
                  <p className="text-foreground font-inter leading-relaxed">
                    6 năm Kinh nghiệm trong lĩnh vực Huyền học/Nhân tướng
                    học/Tâm lý học
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3"></div>
                  <p className="text-foreground font-inter leading-relaxed">
                    Luận giải 500+ lá số từ nhiều khách hàng khác nhau, nhiều độ
                    tuổi khác nhau
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-card rounded-xl shadow-soft animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-playfair text-2xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-sm text-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
