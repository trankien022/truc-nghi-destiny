import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Tôi cần giờ sinh chính xác không?",
      answer:
        "Giờ sinh chính xác sẽ giúp luận giải chi tiết và chính xác hơn. Nếu không nhớ chính xác, hãy ước lượng gần nhất hoặc hỏi người thân. Trong trường hợp không có giờ sinh, chúng tôi vẫn có thể luận giải dựa trên ngày sinh nhưng sẽ có một số hạn chế về độ chi tiết.",
    },
    {
      question: "Bao lâu tôi sẽ nhận được file luận giải?",
      answer:
        "Thông thường bạn sẽ nhận được bản luận giải trong vòng 24-48 giờ sau khi thanh toán thành công. Đối với gói Premium có tư vấn trực tiếp, thời gian có thể lâu hơn tùy vào lịch hẹn với chuyên gia.",
    },
    {
      question: "Nếu nội dung không phù hợp, có hỗ trợ sau khi đọc không?",
      answer:
        "Có, chúng tôi cung cấp hỗ trợ sau khi giao file. Bạn có thể gửi câu hỏi qua email hoặc đặt lịch tư vấn thêm nếu cần làm rõ nội dung luận giải. Đối với gói Pro và Premium, bạn được hỗ trợ trực tiếp qua Q&A session.",
    },
    {
      question: "Bản luận giải gồm những gì cụ thể? Có ví dụ không?",
      answer:
        "Bản luận giải bao gồm: phân tích mệnh cục, đại vận 80 năm, tiểu vận chi tiết, tài lộc-quan lộ, tình cảm-gia đạo, sức khỏe-tai ách, và khuyến nghị hành động. Bạn có thể xem mẫu chi tiết ở phần 'Mẫu bản luận' trên trang này.",
    },
    {
      question: "Dữ liệu cá nhân của tôi có được bảo mật không?",
      answer:
        "Hoàn toàn. Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của khách hàng. Dữ liệu chỉ được sử dụng cho mục đích luận giải và không chia sẻ với bên thứ ba. Sau khi hoàn thành dịch vụ, thông tin sẽ được lưu trữ an toàn theo quy định.",
    },
    {
      question: "Luận giải có chính xác 100% không?",
      answer:
        "Tử Vi/Bát Tự là nghệ thuật định hướng dựa trên quy luật thiên văn và kinh nghiệm thực tế, không phải khoa học dự đoán tuyệt đối. Chúng tôi cung cấp phân tích và khuyến nghị dựa trên hệ thống lý thuyết, nhưng kết quả cuối cùng vẫn phụ thuộc vào nỗ lực và quyết định của bạn.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Câu hỏi thường gặp
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Giải đáp những thắc mắc phổ biến về dịch vụ luận giải
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-card border border-border rounded-xl px-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="font-playfair text-lg font-semibold text-foreground hover:text-primary text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-inter leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                Vẫn còn thắc mắc?
              </h3>
              <p className="text-muted-foreground font-inter mb-4">
                Liên hệ với chúng tôi qua email hoặc hotline để được hỗ trợ trực
                tiếp
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@trucnghi.com"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  support@trucnghi.com
                </a>
                <a
                  href="tel:+84123456789"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  0123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
