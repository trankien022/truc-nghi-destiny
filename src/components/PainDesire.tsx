import { AlertTriangle, Star, Quote } from "lucide-react";
import masterImage from "@/assets/master-truong-nghi.jpg";

const PainDesire = () => {
  const painPoints = [
    "Lặp lại những sai lầm cũ trong quyết định quan trọng",
    "Chần chờ, bỏ lỡ thời cơ vì không biết khi nào là thời điểm thích hợp", 
    "Tốn thời gian mà không tiến triển, cảm giác đi vòng quanh",
    "Lo lắng về tương lai mà không biết chuẩn bị như thế nào"
  ];

  const desires = [
    "Rõ ưu điểm và nhược điểm trong mệnh để phát huy/khắc phục",
    "Nắm được thời điểm thuận lợi cho việc đầu tư, thay đổi nghề nghiệp",
    "Biết cách ứng xử trong các mối quan hệ theo chu kỳ vận",
    "Cảm giác an tâm và chủ động hơn trong mọi quyết định"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 text-destructive mb-4">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold text-sm uppercase tracking-wide">Nỗi đau hiện tại</span>
              </div>
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Vẫn đang quay cuồng, mơ hồ?
              </h2>
              <div className="space-y-4">
                {painPoints.map((pain, index) => (
                  <div key={index} className="flex items-start gap-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0 mt-3"></div>
                    <p className="text-muted-foreground font-inter leading-relaxed">{pain}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <Star className="w-5 h-5" />
                <span className="font-semibold text-sm uppercase tracking-wide">Sau khi luận giải</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Rõ ràng, tự tin, chủ động
              </h3>
              <div className="space-y-4">
                {desires.map((desire, index) => (
                  <div key={index} className="flex items-start gap-3 animate-slide-up" style={{animationDelay: `${index * 0.1 + 0.4}s`}}>
                    <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-3"></div>
                    <p className="text-foreground font-inter leading-relaxed">{desire}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={masterImage} 
                  alt="Thầy Trúc Nghi" 
                  className="w-16 h-16 rounded-full object-cover shadow-soft"
                />
                <div>
                  <h4 className="font-playfair text-lg font-semibold text-foreground">Thầy Trúc Nghi</h4>
                  <p className="text-muted-foreground text-sm">Chuyên gia Tử Vi/Bát Tự</p>
                </div>
              </div>
              
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <blockquote className="text-foreground font-inter text-lg leading-relaxed italic">
                "Luận giải tốt giúp bạn bớt va đập – không phải mê tín, mà là quy tắc hành xử theo chu kỳ vận. 
                Hiểu mình, hiểu vận, bạn sẽ sống nhẹ nhàng và thông minh hơn."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainDesire;