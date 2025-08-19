import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Clock, Home, Mail } from 'lucide-react';

interface OrderStatus {
  orderId: string;
  status: 'success' | 'failed' | 'pending';
  message: string;
}

const ThankYou: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const orderId = searchParams.get('orderId');
  const code = searchParams.get('code');
  const id = searchParams.get('id');
  const cancel = searchParams.get('cancel');
  const status = searchParams.get('status');

  useEffect(() => {
    // Simulate order status check
    const checkOrderStatus = () => {
      if (!orderId) {
        setOrderStatus({
          orderId: 'N/A',
          status: 'failed',
          message: 'Không tìm thấy thông tin đơn hàng'
        });
        setIsLoading(false);
        return;
      }

      // Determine status based on URL parameters
      let orderStatus: OrderStatus;

      if (cancel === 'true' || status === 'CANCELLED') {
        orderStatus = {
          orderId,
          status: 'failed',
          message: 'Đơn hàng đã bị hủy bởi người dùng'
        };
      } else if (code === '00' || status === 'PAID') {
        orderStatus = {
          orderId,
          status: 'success',
          message: 'Thanh toán thành công! Chúng tôi sẽ gửi luận giải qua email trong vòng 24-48 giờ.'
        };
      } else if (status === 'PENDING') {
        orderStatus = {
          orderId,
          status: 'pending',
          message: 'Đơn hàng đang được xử lý. Vui lòng chờ xác nhận thanh toán.'
        };
      } else {
        orderStatus = {
          orderId,
          status: 'pending',
          message: 'Đang kiểm tra trạng thái thanh toán...'
        };
      }

      setOrderStatus(orderStatus);
      setIsLoading(false);
    };

    // Add a small delay to simulate API call
    const timer = setTimeout(checkOrderStatus, 1500);
    return () => clearTimeout(timer);
  }, [orderId, code, id, cancel, status]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-16 h-16 text-green-500" />;
      case 'failed':
        return <XCircle className="w-16 h-16 text-red-500" />;
      case 'pending':
        return <Clock className="w-16 h-16 text-yellow-500" />;
      default:
        return <Clock className="w-16 h-16 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'failed':
        return 'text-red-700 bg-red-50 border-red-200';
      case 'pending':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getStatusTitle = (status: string) => {
    switch (status) {
      case 'success':
        return 'Thanh toán thành công!';
      case 'failed':
        return 'Thanh toán thất bại';
      case 'pending':
        return 'Đang xử lý thanh toán';
      default:
        return 'Kiểm tra trạng thái';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Đang kiểm tra trạng thái đơn hàng...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              {orderStatus && getStatusIcon(orderStatus.status)}
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800">
              {orderStatus && getStatusTitle(orderStatus.status)}
            </CardTitle>
            <CardDescription className="text-lg">
              Mã đơn hàng: #{orderStatus?.orderId}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Status Message */}
            {orderStatus && (
              <Card className={`border-2 ${getStatusColor(orderStatus.status)}`}>
                <CardContent className="pt-4">
                  <p className="text-center font-medium">
                    {orderStatus.message}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Success Actions */}
            {orderStatus?.status === 'success' && (
              <div className="space-y-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Bước tiếp theo</h4>
                        <p className="text-sm text-blue-600 mt-1">
                          Luận giải tử vi cá nhân hóa sẽ được gửi đến email của bạn trong vòng 24-48 giờ. 
                          Vui lòng kiểm tra cả hộp thư spam/junk mail.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center space-y-3">
                  <p className="text-gray-600">
                    Cảm ơn bạn đã tin tưởng dịch vụ luận giải Trúc Nghị!
                  </p>
                </div>
              </div>
            )}

            {/* Failed Actions */}
            {orderStatus?.status === 'failed' && (
              <div className="space-y-4">
                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Bạn có thể:</h4>
                    <ul className="text-sm text-orange-600 space-y-1">
                      <li>• Thử lại với phương thức thanh toán khác</li>
                      <li>• Kiểm tra thông tin thẻ/tài khoản</li>
                      <li>• Liên hệ hỗ trợ nếu vấn đề vẫn tiếp tục</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex space-x-3">
                  <Button asChild className="flex-1">
                    <Link to="/checkout">
                      Thử lại
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Pending Actions */}
            {orderStatus?.status === 'pending' && (
              <div className="space-y-4">
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="pt-4">
                    <p className="text-sm text-yellow-600">
                      Đơn hàng của bạn đang được xử lý. Vui lòng chờ trong giây lát hoặc 
                      kiểm tra lại sau ít phút.
                    </p>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button 
                    onClick={() => window.location.reload()} 
                    variant="outline"
                  >
                    Kiểm tra lại
                  </Button>
                </div>
              </div>
            )}

            {/* Common Actions */}
            <div className="pt-6 border-t">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Về trang chủ
                  </Link>
                </Button>
                
                {orderStatus?.status !== 'failed' && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href="mailto:support@trucnghi.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Liên hệ hỗ trợ
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
