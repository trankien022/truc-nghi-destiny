import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const faqs = [
    {
      question: "Có cần phải đúng giờ sinh không?",
      answer: (
        <>
          <p className="mb-3">
            Giờ sinh càng chính xác thì bản luận giải càng đúng. Trong Tử Vi –
            Bát Tự, mỗi giờ sinh ứng với một “trụ giờ” riêng, và chỉ cần lệch
            qua 1 giờ (ví dụ từ giờ Ngọ sang giờ Mùi) là toàn bộ cục mệnh, vận
            hạn và lá số sẽ thay đổi hoàn toàn.
          </p>
          <p className="mb-3">
            ➡️ Tuy nhiên, nếu lệch trong cùng một giờ – khoảng 10 đến 15 phút –
            thì vẫn có thể chấp nhận được.
          </p>
          <p className="mb-3">
            Ví dụ: Sinh khoảng <strong>11h05 – 11h55</strong> đều tính là giờ
            Ngọ, không sao. Nhưng nếu sinh lúc
            <strong> 12h05</strong> thì đã sang giờ Mùi →{" "}
            <em>lá số sẽ khác hoàn toàn.</em>
          </p>
          <p className="mb-2 font-medium">
            📌 Nếu bạn không chắc giờ sinh, vui lòng:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>
              Ghi lại khoảng thời gian bạn nhớ (ví dụ: “khoảng 10–11h30”).
            </li>
          </ul>
          <p>
            Tử Vi Trúc Nghi sẽ hỗ trợ so sánh các lá số gần nhau và chọn ra lá
            số khớp nhất với cuộc sống thực tế hiện tại của bạn.
          </p>
        </>
      ),
    },
    {
      question: "Bao lâu tôi sẽ nhận được bản luận giải?",
      answer: (
        <>
          <p>
            Thông thường, bạn sẽ nhận bản luận qua email trong{" "}
            <strong>12–36 giờ</strong> sau khi thanh toán. Trong những ngày cao
            điểm hoặc có số lượng đơn tăng đột biến, thời gian xử lý có thể chậm
            hơn một chút, nhưng sẽ <strong>không quá 72 giờ</strong>.
          </p>
        </>
      ),
    },
    {
      question: "Bản luận giải tôi nhận được sẽ có hình thức như thế nào?",
      answer: (
        <>
          <p className="mb-3">
            Tùy theo dịch vụ mà Quý Khách chọn (Tử Vi – Bát Tự – Kinh Dịch – Bản
            Đồ Sao), sẽ nhận được một file PDF từ{" "}
            <strong>30 đến 50 trang</strong>, với nội dung được viết thủ công,
            cá nhân hóa hoàn toàn theo giờ sinh, giới tính, ngày tháng năm sinh.
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">🔮 a. Nếu là Tử Vi</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Tổng khí mệnh số: Diễn giải về mệnh chủ theo cung Mệnh, Thân,
                  Phúc Đức…
                </li>
                <li>
                  Luận 12 cung: Tài Bạch – Quan Lộc – Phu Thê – Điền Trạch –
                  Huynh Đệ, v.v.
                </li>
                <li>Phân tích các sao chính tinh – sát tinh – cát tinh</li>
                <li>
                  Luận Đại vận; Luận vận hạn 12 tháng âm lịch của năm hiện tại
                </li>
              </ul>
              <p className="mt-1">
                ✅ Hình thức: trình bày theo cục – sao – cung, có chia phần rõ
                ràng
              </p>
            </div>
            <div>
              <p className="font-semibold">🪙 b. Nếu là Bát Tự (Tứ Trụ)</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Tám chữ sinh trụ tạo thành Tứ Trụ: Năm – Tháng – Ngày – Giờ
                </li>
                <li>Phân tích dụng thần – kỵ thần; Phân tích Quý nhân</li>
                <li>Giải thích khí vận theo ngũ hành sinh – khắc</li>
                <li>Luận đại vận và lưu niên; So sánh thiên can – địa chi</li>
              </ul>
              <p className="mt-1">
                ✅ Hình thức: bảng mệnh số học phương Đông – mô tả rõ ngũ hành
                từng trụ
              </p>
            </div>
            <div>
              <p className="font-semibold">
                🧿 c. Nếu là Kinh Dịch (bốc quẻ thời điểm)
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>1–2 trang tóm tắt lá số (nếu phối hợp với Tử Vi/Bát Tự)</li>
                <li>
                  Giải thích quẻ Dịch: quẻ chính, quẻ biến; Lời phán theo từng
                  hào động
                </li>
                <li>
                  Luận giải ứng với thời điểm cụ thể đang hỏi (ví dụ: chuyển
                  việc tháng này?)
                </li>
              </ul>
              <p className="mt-1">
                ✅ Hình thức: ngắn hơn – khoảng 5–10 trang, tập trung vào quyết
                định ngay lúc đó
              </p>
              <p className="text-sm text-muted-foreground">
                ⚠️ Không phân tích trọn đời, chỉ hỗ trợ ra quyết định thời điểm.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                🌌 d. Nếu là Bản Đồ Sao (Chiêm tinh học)
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Biểu đồ Natal Chart – vị trí các hành tinh lúc sinh</li>
                <li>
                  Phân tích các hành tinh chính: Mặt trời – Mặt trăng –
                  Ascendant – Sao Kim – Sao Hỏa – Sao Mộc…
                </li>
                <li>
                  Phân tích Houses (1–12); các khía cạnh (aspects): hợp – vuông
                  – đối góc…
                </li>
              </ul>
              <p className="mt-1">
                ✅ Hình thức: hiện đại – có bản đồ sao màu và bảng mô tả
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      question: "Nếu bản luận không giống như tôi kỳ vọng thì sao?",
      answer: (
        <>
          <p className="mb-3">
            Tử Vi và Bát Tự là hệ thống huyền học cổ, không dùng để “tiên đoán
            chính xác từng sự kiện”, mà để hiểu bản thân – nhận diện vận khí –
            lựa chọn thông minh hơn.
          </p>
          <p className="mb-3">
            Nếu bạn cảm thấy luận giải chưa đúng với hiện tại, hãy đọc lại sau
            vài tháng – nhiều khách hàng chia sẻ rằng họ ngộ ra nhiều điều sau
            khi sống qua các tình huống đó.
          </p>
          <p>
            Tử Vi Trúc Nghi luôn mở hỗ trợ để làm rõ các điểm khó hiểu – chỉ cần
            nhắn tin, bạn sẽ được giải đáp tận tình.
          </p>
        </>
      ),
    },
    {
      question:
        "Nếu mọi thứ xảy ra không đúng như bản luận giải, tôi có được đền bù không?",
      answer: (
        <>
          <p className="mb-3">
            Nếu có bất kỳ sai sót nào từ phía Tử Vi Trúc Nghi – như nhầm giờ
            sinh, sai thông tin, thiếu trang hoặc lỗi kỹ thuật – chắc chắn bạn
            sẽ được đền bù: <strong>viết lại</strong>, <strong>bổ sung</strong>{" "}
            hoặc <strong>hoàn tiền một phần</strong> tùy mức độ.
          </p>
          <p>
            Trong trường hợp bản luận đã được cá nhân hóa đúng, đầy đủ và đúng
            phương pháp, nhưng cuộc sống diễn ra khác mong đợi, xin được chia
            sẻ: luận giải là <em>tấm bản đồ vận khí</em> – giúp bạn biết khi nào
            nên tiến/lùi và giữ tâm thế bình thản.
          </p>
        </>
      ),
    },
    {
      question: "Tôi có thể hỏi thêm nếu không hiểu bản luận giải?",
      answer: (
        <>
          <p className="mb-3">
            Hoàn toàn có thể – Tử Vi Trúc Nghi rất hoan nghênh điều đó. Mỗi bản
            luận mang nội dung chuyên sâu, cá nhân hóa theo giờ sinh, mệnh lý và
            thời vận, nên đôi khi sẽ có thuật ngữ chuyên môn.
          </p>
          <p className="mb-3">
            Nếu có phần nào chưa rõ – về từ ngữ, ý nghĩa, hoặc điều đang được
            nói đến – Tử Vi Trúc Nghi luôn sẵn sàng giải thích thêm, thậm chí
            trình bày lại theo cách dễ hiểu hơn. Chỉ cần bạn gửi câu hỏi qua
            fanpage chính thức hoặc email.
          </p>
          <div>
            <p className="font-medium mb-2">📩 Các hình thức liên hệ hỗ trợ:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Fanpage Tử Vi Trúc Nghi: trả lời nhanh trong vòng 1–2 ngày
              </li>
              <li>
                Email cá nhân hóa (gửi kèm file luận): bạn có thể phản hồi trực
                tiếp để hỏi tiếp
              </li>
              <li>
                Trong một số trường hợp, có thể gửi file bổ sung hoặc làm rõ
                bằng văn bản nếu cần thiết
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ];

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
    delay: 100,
  });

  const { containerRef: faqsRef, visibleItems: faqsVisible } =
    useStaggeredAnimation(faqs.length, { threshold: 0.2, staggerDelay: 100 });

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
          <Accordion
            ref={faqsRef}
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={cn(
                  "bg-gradient-card border border-border rounded-xl px-6",
                  "transition-all duration-600 ease-out-expo",
                  "hover:bg-primary/5 hover:border-primary/20",
                  faqsVisible[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                <AccordionTrigger
                  className={cn(
                    "font-playfair text-lg font-semibold text-foreground text-left py-6",
                    "transition-all duration-300 ease-out hover:text-primary",
                    "hover:no-underline"
                  )}
                >
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
                <Link
                  to="/privacy"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Chính sách bảo mật
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
