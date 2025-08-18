import { Mail, Phone, MapPin, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6">
              Tử Vi Trúc Nghi
            </h3>
            <p className="font-inter leading-relaxed opacity-90 mb-6">
              Chuyên gia luận giải Tử Vi/Bát Tự uy tín, mang đến sự rõ ràng 
              và định hướng cho cuộc sống của bạn.
            </p>
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Shield className="w-4 h-4" />
              <span>Cam kết bảo mật thông tin tuyệt đối</span>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6">
              Liên hệ
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-80" />
                <a href="mailto:support@trucnghi.com" className="hover:text-secondary transition-colors">
                  support@trucnghi.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-80" />
                <a href="tel:+84123456789" className="hover:text-secondary transition-colors">
                  0123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 opacity-80" />
                <span>Việt Nam</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6">
              Dịch vụ
            </h4>
            <div className="space-y-3">
              <div className="hover:text-secondary transition-colors cursor-pointer">
                Luận giải Tử Vi cá nhân
              </div>
              <div className="hover:text-secondary transition-colors cursor-pointer">
                Phân tích Bát Tự chi tiết
              </div>
              <div className="hover:text-secondary transition-colors cursor-pointer">
                Tư vấn vận hạn trực tiếp
              </div>
              <div className="hover:text-secondary transition-colors cursor-pointer">
                Hỗ trợ sau luận giải
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © 2024 Tử Vi Trúc Nghi. Bảo lưu mọi quyền.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-secondary transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Điều khoản dịch vụ
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Hỗ trợ khách hàng
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm opacity-70">
            <p>
              <strong>Disclaimer:</strong> Nội dung mang tính tham khảo/định hướng, 
              không phải tư vấn y tế/tài chính/pháp lý. Kết quả phụ thuộc vào nỗ lực cá nhân.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;