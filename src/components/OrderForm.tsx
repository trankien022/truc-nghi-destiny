import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, MapPin, Phone, Mail, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OrderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    package: ''
  });
  const [showPayment, setShowPayment] = useState(false);

  const packages = [
    { value: 'basic', label: 'Basic - 299k', price: '299.000đ' },
    { value: 'pro', label: 'Pro - 499k', price: '499.000đ' },
    { value: 'premium', label: 'Premium - 799k', price: '799.000đ' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || 
        !formData.birthDate || !formData.birthPlace || !formData.package) {
      toast({
        title: "Vui lòng điền đầy đủ thông tin",
        description: "Tất cả các trường có dấu * là bắt buộc",
        variant: "destructive"
      });
      return;
    }

    setShowPayment(true);
    toast({
      title: "Thông tin đã được ghi nhận",
      description: "Vui lòng thực hiện thanh toán để hoàn tất đặt hàng",
    });
  };

  const handlePaymentComplete = () => {
    toast({
      title: "Thanh toán thành công!",
      description: "Kết quả đang được xử lý. Bạn sẽ nhận email xác nhận trong vài phút.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
      package: ''
    });
    setShowPayment(false);
  };

  const selectedPackage = packages.find(pkg => pkg.value === formData.package);

  return (
    <section className="py-20 bg-muted" id="order-form">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Đặt luận giải ngay
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Điền thông tin chính xác để nhận bản luận giải cá nhân hóa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!showPayment ? (
            <Card className="bg-gradient-card border-0 shadow-strong animate-scale-in">
              <CardHeader className="text-center pb-6">
                <CardTitle className="font-playfair text-2xl text-foreground">
                  Thông tin đặt hàng
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-foreground font-medium">
                        Họ và tên *
                      </Label>
                      <div className="relative mt-2">
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="Nguyễn Văn A"
                          className="pl-4"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email *
                      </Label>
                      <div className="relative mt-2">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="email@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-foreground font-medium">
                        Số điện thoại *
                      </Label>
                      <div className="relative mt-2">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="0123 456 789"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="package" className="text-foreground font-medium">
                        Gói luận giải *
                      </Label>
                      <Select value={formData.package} onValueChange={(value) => setFormData({...formData, package: value})}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Chọn gói luận giải" />
                        </SelectTrigger>
                        <SelectContent>
                          {packages.map((pkg) => (
                            <SelectItem key={pkg.value} value={pkg.value}>
                              {pkg.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="birthDate" className="text-foreground font-medium">
                        Ngày sinh *
                      </Label>
                      <div className="relative mt-2">
                        <CalendarDays className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="birthDate"
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="birthTime" className="text-foreground font-medium">
                        Giờ sinh (nếu có)
                      </Label>
                      <Input
                        id="birthTime"
                        type="time"
                        value={formData.birthTime}
                        onChange={(e) => setFormData({...formData, birthTime: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="birthPlace" className="text-foreground font-medium">
                      Nơi sinh *
                    </Label>
                    <div className="relative mt-2">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="birthPlace"
                        value={formData.birthPlace}
                        onChange={(e) => setFormData({...formData, birthPlace: e.target.value})}
                        placeholder="Thành phố, Tỉnh"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <p className="text-sm text-foreground font-inter leading-relaxed">
                      <strong>Lưu ý:</strong> Thông tin càng chính xác, bản luận giải càng chi tiết. 
                      Nếu không nhớ giờ sinh chính xác, hãy ước lượng gần nhất.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-hero text-white font-semibold py-4 text-lg">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Tiếp tục thanh toán
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-gradient-card border-0 shadow-strong animate-scale-in">
              <CardHeader className="text-center pb-6">
                <CardTitle className="font-playfair text-2xl text-foreground">
                  Thanh toán đơn hàng
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="bg-white p-8 rounded-xl border border-border">
                    <h3 className="font-playfair text-xl font-semibold mb-4">
                      QR Code Thanh toán
                    </h3>
                    <div className="w-64 h-64 bg-muted mx-auto rounded-lg flex items-center justify-center mb-4">
                      <p className="text-muted-foreground">QR Code</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Quét mã QR hoặc chuyển khoản vào:
                    </p>
                    <div className="text-foreground font-medium">
                      <p>MB Bank - 0123456789</p>
                      <p>Trúc Nghi</p>
                      <p className="text-primary font-bold">
                        Số tiền: {selectedPackage?.price}
                      </p>
                    </div>
                  </div>

                  <div className="bg-warning/10 border border-warning/20 rounded-xl p-4">
                    <p className="text-sm text-foreground">
                      <strong>Quan trọng:</strong> Nhập SĐT hoặc Email khi chuyển khoản để nhận kết quả nhanh nhất
                    </p>
                  </div>

                  <Button 
                    onClick={handlePaymentComplete}
                    className="bg-success hover:bg-success/90 text-success-foreground font-semibold px-8 py-3"
                  >
                    Đã thanh toán
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderForm;