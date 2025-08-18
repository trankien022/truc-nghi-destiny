import { CheckCircle, Target, Lightbulb } from "lucide-react";

const AudienceFit = () => {
  const painPoints = [
    "Đang bế tắc, mất định hướng, lo về tương lai tài chính/sự nghiệp/gia đình?",
    "Muốn sáng tỏ mệnh số, am hiểu vận hạn để ứng biến thông minh?",
    "Cần roadmap rõ ràng cho 10-20 năm tới thay vì mò mẫm từng ngày?",
    "Muốn tránh rủi ro, nắm bắt thời cơ thuận lợi trong cuộc sống?",
  ];

  return (
    <section id="audience-fit" className="py-20 bg-muted scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Dành cho ai?
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Bạn có đang tìm kiếm sự rõ ràng?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-foreground font-inter leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium animate-scale-in">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-gold" />
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Hãy hình dung...
                </h3>
              </div>
              <p className="text-foreground font-inter leading-relaxed italic">
                "Mỗi sáng thức dậy với tâm thế tỉnh táo, biết xu hướng vận hạn
                để chọn đúng việc cần làm hôm nay. Không còn lo lắng mù mờ, mà
                có định hướng rõ ràng cho từng giai đoạn cuộc đời."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceFit;
