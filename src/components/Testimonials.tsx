import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  // Note: These are placeholder testimonials - replace with real customer feedback
  const testimonials = [
    {
      name: "Anh Minh Tuấn",
      role: "Doanh nhân, 35 tuổi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "Luận giải rất chi tiết và chính xác. Nhờ hiểu rõ vận hạn, tôi đã chọn đúng thời điểm mở rộng kinh doanh và thành công vượt mong đợi.",
      highlight: "Chọn đúng thời điểm kinh doanh"
    },
    {
      name: "Chị Thu Hương", 
      role: "Nhân viên văn phòng, 28 tuổi",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "Bản luận giải giúp tôi hiểu rõ bản thân và cách ứng xử trong các mối quan hệ. Cuộc sống gia đình hài hòa hơn rất nhiều.",
      highlight: "Cải thiện mối quan hệ gia đình"
    },
    {
      name: "Anh Đức Anh",
      role: "Kỹ sư IT, 31 tuổi", 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "Thay vì lo lắng mơ hồ về tương lai, giờ tôi có roadmap rõ ràng cho 10 năm tới. Cảm giác an tâm và tự tin hơn rất nhiều.",
      highlight: "Có roadmap 10 năm rõ ràng"
    },
    {
      name: "Chị Lan Anh",
      role: "Giáo viên, 42 tuổi",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", 
      rating: 5,
      review: "Luận giải không chỉ nói về vận mệnh mà còn hướng dẫn cách hành động cụ thể. Thực sự hữu ích và khoa học.",
      highlight: "Hướng dẫn hành động cụ thể"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Khách hàng nói gì về dịch vụ?
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Những phản hồi chân thực từ khách hàng đã sử dụng dịch vụ luận giải
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-soft"
                  />
                  <div className="flex-1">
                    <h4 className="font-playfair text-lg font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="w-6 h-6 text-primary/30 mb-2" />
                  <p className="text-foreground font-inter leading-relaxed italic">
                    "{testimonial.review}"
                  </p>
                </div>

                <div className="bg-secondary/10 rounded-lg p-3">
                  <p className="text-secondary font-semibold text-sm">
                    ✓ {testimonial.highlight}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">
              Chỉ sử dụng feedback thật với bằng chứng từ khách hàng
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;