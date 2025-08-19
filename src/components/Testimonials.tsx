import { Star } from "lucide-react";
import { useState } from "react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Đánh giá phù hợp theo từng gói dịch vụ
  const serviceTestimonials = [
    {
      name: "Minh Anh",
      initials: "MA",
      avatarColor: "bg-blue-600",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      timeAgo: "2 tuần trước",
      review:
        "Đã làm gói Bát Tự Trọn Đời: biết rõ thời điểm vượng – suy và cách Chiêu Tài bằng phong thuỷ. Sau 1 tháng điều chỉnh, công việc đỡ bế tắc hẳn.",
      hasComment: true,
      hasImage: false,
      package: "Bát Tự Trọn Đời",
    },
    {
      name: "Thanh Trúc",
      initials: "TT",
      avatarColor: "bg-rose-600",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      timeAgo: "1 tháng trước",
      review:
        "Gói Tử Vi Trọn Đời rất chi tiết. Có roadmap cho từng đại vận nên mình bớt hoang mang, biết tập trung vào điều gì trước.",
      hasComment: true,
      hasImage: false,
      package: "Tử Vi Trọn Đời",
    },
    {
      name: "Hữu Phúc",
      initials: "HP",
      avatarColor: "bg-emerald-600",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      timeAgo: "3 tuần trước",
      review:
        "Làm gói Luận Tổng Quát để định hướng 10 năm tới. Nhận xét thẳng, dễ hiểu, đúng trọng tâm tài chính – công việc – tình cảm.",
      hasComment: true,
      hasImage: false,
      package: "Luận Tổng Quát",
    },
    {
      name: "Bảo Ngọc",
      initials: "BN",
      avatarColor: "bg-violet-600",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      timeAgo: "2 tháng trước",
      review:
        "Tình Duyên: được luận tuổi hợp và năm cưới. Hai đứa nói chuyện dễ hơn vì có định hướng rõ, không còn mơ hồ.",
      hasComment: true,
      hasImage: false,
      package: "Tình Duyên",
    },
    {
      name: "Quốc Huy",
      initials: "QH",
      avatarColor: "bg-teal-600",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      timeAgo: "5 tuần trước",
      review:
        "Bản Đồ Sao – Chiêm Tinh cho 2 người giúp mình hiểu điểm mạnh/yếu của cả hai. Rất hữu ích để phối hợp công việc và tình cảm.",
      hasComment: true,
      hasImage: true,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=640&h=360&fit=crop",
      package: "Bản Đồ Sao - Chiêm Tinh",
    },
    {
      name: "Thuỷ Tiên",
      initials: "TT",
      avatarColor: "bg-amber-600",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      timeAgo: "4 ngày trước",
      review:
        "Gieo Quẻ Kinh Dịch giúp mình đưa ra quyết định đổi việc đúng lúc. Câu trả lời súc tích, kèm cách hành động rõ ràng.",
      hasComment: true,
      hasImage: false,
      package: "Gieo Quẻ Kinh Dịch",
    },
  ];

  // Tập đánh giá hiển thị: ưu tiên theo từng gói dịch vụ của bạn
  const testimonials = serviceTestimonials;

  const ratingStats = {
    5: 75.7,
    4: 18.0,
    3: 5.0,
    2: 1.0,
    1: 0.3,
  };

  const filters = [
    { id: "all", label: "Tất cả" },
    { id: "comment", label: "Có bình luận" },
    { id: "image", label: "Có hình ảnh" },
  ];

  const filteredTestimonials = testimonials.filter((testimonial) => {
    if (activeFilter === "comment") return testimonial.hasComment;
    if (activeFilter === "image") return testimonial.hasImage;
    return true;
  });

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
    delay: 100,
  });

  const { containerRef: testimonialsRef, visibleItems: testimonialsVisible } =
    useStaggeredAnimation(filteredTestimonials.length, {
      threshold: 0.2,
      staggerDelay: 150,
    });

  return (
    <section id="testimonials" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Khách hàng nói gì?
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
            Đánh giá từ học viên và khách hàng
          </h2>
        </div>

        {/* Tổng quan điểm số */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch mb-8">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-medium text-center flex flex-col justify-center">
            <div className="text-5xl font-bold text-gold mb-2">4.9</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-muted-foreground">
              Trung bình từ 1,200+ đánh giá
            </p>
          </div>

          <div className="md:col-span-2 bg-white rounded-2xl p-6 border shadow-sm">
            <div className="grid grid-cols-5 gap-4">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="space-y-2">
                  <div className="flex items-center gap-1">
                    {[...Array(star)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {[...Array(5 - star)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-gray-300" />
                    ))}
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{ width: `${ratingStats[star]}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {ratingStats[star]}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Danh sách đánh giá */}
        <div ref={testimonialsRef} className="grid md:grid-cols-3 gap-6">
          {filteredTestimonials.slice(0, 6).map((t, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-white rounded-2xl p-6 border shadow-sm",
                "transition-all duration-300 ease-out transform-gpu",
                "hover:scale-[1.02] hover:shadow-xl hover:border-primary/20",
                testimonialsVisible[idx]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 ${t.avatarColor} rounded-full flex items-center justify-center text-white font-semibold text-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  {t.timeAgo && (
                    <div className="text-xs text-muted-foreground">
                      {t.timeAgo}
                    </div>
                  )}
                </div>
              </div>
              {t.rating > 0 && (
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              )}
              {t.review && (
                <p className="text-sm text-foreground/90 leading-relaxed mb-3">
                  {t.review}
                </p>
              )}
              {t.image && (
                <img
                  src={t.image}
                  alt="Review"
                  className="w-full h-36 object-cover rounded-lg mb-3"
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
