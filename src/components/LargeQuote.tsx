import { Quote } from "lucide-react";

const LargeQuote = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Quote className="w-16 h-16 text-primary/30 mx-auto mb-8" />
          <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed italic">
            "Tử Vi/Bát Tự hay Kinh Dịch không giải quyết thay bạn những trở ngại đó, nhưng sẽ góp phần lớn lao — tựa như Kim Chỉ Nam, giúp bạn biết khi nào nên tiến, khi nào nên lùi."
          </blockquote>
          <div className="mt-8 w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default LargeQuote;
