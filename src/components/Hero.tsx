import { Button } from "@/components/ui/button";
import { Star, Shield, FileText, Users } from "lucide-react";
import heroImage from "@/assets/hero-astrology.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const form = document.getElementById('order-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSample = () => {
    const sample = document.getElementById('sample-section');
    if (sample) {
      sample.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight mb-6">
              Bản Luận Giải Tử Vi/Bát Tự <span className="text-secondary">Trúc Nghi</span>
            </h1>
            <div className="text-xl md:text-2xl font-medium mb-4">
              Tường Tận 80 Năm Vận Hạn • <span className="text-secondary font-bold">Chỉ từ 299k</span>
            </div>
            
            <p className="text-lg md:text-xl font-inter mb-8 opacity-90 leading-relaxed">
              Hiểu mệnh – rõ vận – chủ động thời cơ: tài lộc, sự nghiệp, tình cảm, sức khỏe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold px-8 py-4 text-lg shadow-strong"
              >
                Nhận Luận Giải Cá Nhân
              </Button>
              <Button 
                onClick={scrollToSample}
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
              >
                Xem mẫu bản luận
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 opacity-90">
                <Shield className="w-4 h-4 text-secondary" />
                <span>Bảo mật thông tin</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <FileText className="w-4 h-4 text-secondary" />
                <span>Giao file PDF/Email</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <Users className="w-4 h-4 text-secondary" />
                <span>Hỗ trợ sau đọc</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Tử Vi Trúc Nghi - Luận giải tử vi chuyên nghiệp"
                className="w-full h-auto rounded-2xl shadow-strong"
                loading="eager"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;