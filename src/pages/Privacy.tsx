import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-playfair text-xl md:text-2xl font-bold text-primary">
            Tử Vi Trúc Nghi
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Về trang chủ
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Chính sách bảo mật
            </h1>
            <p className="text-muted-foreground font-inter text-lg leading-relaxed">
              Cam kết bảo vệ thông tin cá nhân của khách hàng một cách tuyệt đối
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-playfair text-xl">
                  <Lock className="w-6 h-6 text-primary" />
                  Thu thập thông tin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground font-inter leading-relaxed">
                <p>
                  Chúng tôi chỉ thu thập những thông tin cần thiết để thực hiện dịch vụ luận giải:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Họ tên, email, số điện thoại</li>
                  <li>Ngày, giờ, nơi sinh (để luận giải)</li>
                  <li>Thông tin thanh toán (được xử lý qua cổng thanh toán bảo mật)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-playfair text-xl">
                  <Eye className="w-6 h-6 text-primary" />
                  Sử dụng thông tin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground font-inter leading-relaxed">
                <p>Thông tin của bạn được sử dụng cho các mục đích sau:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Thực hiện luận giải tử vi/bát tự theo yêu cầu</li>
                  <li>Gửi kết quả luận giải qua email</li>
                  <li>Hỗ trợ khách hàng sau khi nhận kết quả</li>
                  <li>Liên hệ khi cần thiết về dịch vụ</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-playfair text-xl">
                  <FileText className="w-6 h-6 text-primary" />
                  Bảo mật & Lưu trữ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground font-inter leading-relaxed">
                <p>
                  <strong>Cam kết bảo mật tuyệt đối:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Không chia sẻ thông tin với bên thứ ba</li>
                  <li>Dữ liệu được mã hóa và lưu trữ an toàn</li>
                  <li>Chỉ nhân viên được ủy quyền mới có quyền truy cập</li>
                  <li>Thông tin được lưu trữ theo quy định pháp luật</li>
                  <li>Khách hàng có quyền yêu cầu xóa dữ liệu cá nhân</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                  Liên hệ về bảo mật
                </h3>
                <p className="text-foreground font-inter leading-relaxed mb-4">
                  Nếu bạn có thắc mắc về chính sách bảo mật hoặc muốn yêu cầu xóa dữ liệu cá nhân, 
                  vui lòng liên hệ:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              Chính sách này có hiệu lực từ ngày 19/08/2025 và có thể được cập nhật khi cần thiết.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
