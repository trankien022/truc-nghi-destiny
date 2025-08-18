import { FileText, CreditCard, Mail, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: FileText,
      title: "Điền form thông tin",
      description: "Họ tên, Email, SĐT, Ngày/Giờ sinh, Nơi sinh",
      details: "Thông tin chính xác giúp luận giải chính xác hơn"
    },
    {
      icon: CreditCard, 
      title: "Thanh toán nhanh",
      description: "QR Code hiển thị ngay, chuyển khoản đơn giản",
      details: "Nhập SĐT/Email khi chuyển khoản để nhận kết quả"
    },
    {
      icon: Mail,
      title: "Nhận luận giải",
      description: "Email xác nhận tự động + file PDF trong {{SLA_giao_file}}",
      details: "File PDF chi tiết, dễ đọc và lưu trữ"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quy trình 3 bước đơn giản
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Nhanh chóng, thuận tiện, minh bạch - nhận luận giải trong vòng 24 giờ
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-foreground font-inter mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full z-10">
                    <ArrowRight className="w-6 h-6 text-primary mx-auto animate-float" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-full">
              <Mail className="w-5 h-5" />
              <span className="font-medium">
                Sau thanh toán: Nhận email xác nhận tự động ngay lập tức
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;