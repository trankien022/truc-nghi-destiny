import { AlertTriangle, X } from "lucide-react";

const NotFor = () => {
  const notForList = [
    "Người chỉ muốn an toàn hiện tại, không sẵn sàng thay đổi hoặc cải thiện bản thân",
    "Người tiêu cực, phủ định bản thân và không tin mình có thể cải thiện tình hình",
    "Người mong đợi 'ma thuật' thay đổi vận mệnh mà không cần nỗ lực cá nhân",
    "Người tìm kiếm dự đoán 100% chính xác về tương lai thay vì hướng dẫn định hướng"
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card border-l-4 border-l-warning rounded-xl p-8 shadow-medium animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  Lọc khách hàng phù hợp
                </h3>
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  Để đảm bảo chất lượng dịch vụ và hiệu quả cho khách hàng, 
                  luận giải này <strong>không dành cho</strong>:
                </p>
                
                <div className="space-y-4">
                  {notForList.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 animate-slide-up"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-foreground font-inter leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-primary font-inter text-sm leading-relaxed">
                    <strong>Lưu ý:</strong> Luận giải Tử Vi/Bát Tự là công cụ định hướng và tham khảo. 
                    Thành công cuối cùng vẫn phụ thuộc vào nỗ lực, thái độ và hành động của bạn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFor;