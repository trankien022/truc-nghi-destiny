import { CheckCircle, Target, Lightbulb } from "lucide-react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const AudienceFit = () => {
  const painPoints = [
    "Đang bế tắc, mất định hướng, lo về tương lai tài chính/sự nghiệp/gia đình?",
    "Muốn sáng tỏ mệnh số, am hiểu vận hạn để ứng biến thông minh?",
    "Cần roadmap rõ ràng cho 10-20 năm tới thay vì mò mẫm từng ngày?",
    "Muốn tránh rủi ro, nắm bắt thời cơ thuận lợi trong cuộc sống?",
  ];

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
    delay: 100,
  });

  const { containerRef: painPointsRef, visibleItems: painPointsVisible } =
    useStaggeredAnimation(painPoints.length, {
      threshold: 0.2,
      staggerDelay: 150,
    });

  const { containerRef: benefitsRef, visibleItems: benefitsVisible } =
    useStaggeredAnimation(
      3, // Number of benefit items
      { threshold: 0.2, staggerDelay: 200, delay: 300 }
    );

  return (
    <section id="audience-fit" className="py-20 bg-muted scroll-mt-24">
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
          <div
            className={cn(
              "inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4",
              "transition-all duration-300 ease-out hover:scale-105 hover:bg-primary/15"
            )}
          >
            <Target className="w-4 h-4" />
            Dành cho ai?
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase">
            DÀNH CHO AI?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div ref={painPointsRef} className="space-y-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3",
                    "transition-all duration-600 ease-out-expo",
                    painPointsVisible[index]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  )}
                >
                  <CheckCircle
                    className={cn(
                      "w-6 h-6 text-secondary flex-shrink-0 mt-1",
                      "transition-all duration-200 ease-out hover:scale-110 hover:rotate-3"
                    )}
                  />
                  <p className="text-foreground font-inter leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div
              ref={benefitsRef}
              className={cn(
                "bg-gradient-card rounded-2xl p-8 shadow-medium",
                "transition-all duration-600 ease-out-expo",
                benefitsVisible[0]
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-8 scale-95",
                "hover:scale-[1.02] hover:shadow-strong"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb
                  className={cn(
                    "w-6 h-6 text-gold",
                    "transition-all duration-200 ease-out hover:scale-110 hover:rotate-12"
                  )}
                />
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Hãy hình dung...
                </h3>
              </div>
              <p
                className={cn(
                  "text-foreground font-inter leading-relaxed italic",
                  "transition-all duration-600 ease-out-expo delay-200",
                  benefitsVisible[1]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                )}
              >
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
