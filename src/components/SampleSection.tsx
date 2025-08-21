import { Eye, Download, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// Placeholder image for sample chart
const sampleChart =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center";

const SampleSection = () => {
  const checklist = [
    "Phân tích mệnh cục và đặc điểm tính cách cá nhân",
    "Lịch trình đại vận 80 năm với từng giai đoạn chi tiết",
    "Tiểu vận hàng năm trong 10 năm gần nhất",
    "Phân tích tài lộc: nguồn thu nhập, cơ hội đầu tư, rủi ro tài chính",
    "Quan lộ sự nghiệp: thời điểm thuận lợi thăng tiến, chuyển nghề",
    "Tình cảm gia đạo: chu kỳ hợp kị, cách xử lý xung đột",
    "Sức khỏe và tai ách: dự báo giai đoạn cần chú ý",
    "Khuyến nghị hành động cụ thể cho từng giai đoạn vận",
    "Timeline hành động theo tháng/năm cho 3 năm tới",
  ];

  const handleDownloadPDF = () => {
    // This would trigger PDF download - for now show placeholder
    alert(
      "Tính năng tải PDF đang được cập nhật. Vui lòng liên hệ để nhận mẫu qua email."
    );
  };

  return (
    <section className="py-20 bg-muted" id="sample-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mẫu bản luận giải
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Xem trước nội dung và cách trình bày trong bản luận giải hoàn chỉnh
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="animate-scale-in">
            <Card className="bg-gradient-card border-0 shadow-strong overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={sampleChart}
                    alt="Mẫu bản luận giải Tử Vi Trúc Nghi"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-white/90 hover:bg-white text-primary font-semibold">
                          <Eye className="w-4 h-4 mr-2" />
                          Xem mẫu chi tiết
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="font-playfair text-xl">
                            Mẫu bản luận giải Tử Vi
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="relative">
                            <img
                              src={sampleChart}
                              alt="Mẫu bản luận giải chi tiết"
                              className="w-full h-auto rounded-lg shadow-medium"
                            />
                          </div>
                          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                            <h4 className="font-playfair text-lg font-semibold text-primary mb-3">
                              Bản PDF hoàn chỉnh bao gồm:
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li>• 15-25 trang nội dung chi tiết</li>
                              <li>• Biểu đồ và timeline trực quan</li>
                              <li>• Khuyến nghị hành động cụ thể</li>
                              <li>• Định dạng PDF chất lượng cao</li>
                            </ul>
                            <Button
                              onClick={handleDownloadPDF}
                              className="w-full mt-4 bg-primary hover:bg-primary/90"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Tải mẫu PDF (Đang cập nhật)
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Nội dung bạn sẽ nhận được
              </h3>
              <p className="text-muted-foreground font-inter mb-8 leading-relaxed">
                Bản luận giải PDF hoàn chỉnh từ 15-25 trang, được trình bày rõ
                ràng với biểu đồ, timeline và khuyến nghị hành động cụ thể.
              </p>
            </div>

            <div className="space-y-3">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-inter leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6 animate-fade-in">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h4 className="font-playfair text-lg font-semibold text-primary mb-3">
                  Định dạng giao hàng
                </h4>
                <div className="flex items-center gap-3 text-foreground">
                  <Download className="w-5 h-5 text-primary" />
                  <span className="font-inter">
                    File PDF chất lượng cao, có thể in và lưu trữ vĩnh viễn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleSection;
