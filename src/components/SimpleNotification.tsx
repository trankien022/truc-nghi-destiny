import React, { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import "./SimpleNotification.css";

interface SimpleNotificationProps {
  isActive?: boolean;
}

const SimpleNotification: React.FC<SimpleNotificationProps> = ({
  isActive = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    name: "NGUYEN THI MAI",
    amount: "199,000 VND",
    service: "XEM TU VI TRON DOI",
    bank: "VIETCOMBANK",
  });

  // Danh sách tên không dấu
  const names = [
    "NGUYEN THI MAI",
    "TRAN VAN NAM",
    "LE THI HOA",
    "PHAM MINH TUAN",
    "HOANG THI LAN",
    "VU DINH KHOA",
    "DO THI NGA",
    "BUI VAN HUNG",
    "NGUYEN VAN DUC",
    "TRAN THI LINH",
    "LE VAN MINH",
    "PHAM THI THAO",
    "HOANG VAN LONG",
    "VU THI HUONG",
    "DO VAN CUONG",
    "BUI THI HONG",
    "NGUYEN MINH QUAN",
    "TRAN THI OANH",
    "LE VAN TUNG",
    "PHAM VAN HAI",
  ];

  // Danh sách dịch vụ không dấu
  const services = [
    "XEM TU VI TRON DOI",
    "XEM BAT TU",
    "XEM BAN DO SAO",
    "XEM DAI VAN",
    "XEM TAI LOC",
    "XEM TINH DUYEN",
    "XEM MENH SO",
    "XEM VAN MENH",
    "XEM TUONG LAI",
    "XEM CUNG MENH",
    "XEM VI TRI SAO",
    "XEM ANH HUONG SAO",
  ];

  // Danh sách số tiền
  const amounts = [
    "199,000 VND",
    "299,000 VND",
    "399,000 VND",
    "499,000 VND",
    "599,000 VND",
    "799,000 VND",
  ];

  // Danh sách ngân hàng
  const banks = [
    "VIETCOMBANK",
    "TECHCOMBANK",
    "BIDV",
    "AGRIBANK",
    "SACOMBANK",
    "MB BANK",
    "ACB",
    "VPBank",
  ];

  // Hàm tạo dữ liệu ngẫu nhiên
  const generateRandomNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomService = services[Math.floor(Math.random() * services.length)];
    const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
    const randomBank = banks[Math.floor(Math.random() * banks.length)];

    return {
      name: randomName,
      service: randomService,
      amount: randomAmount,
      bank: randomBank,
    };
  };

  useEffect(() => {
    if (!isActive) return;

    const showNotification = () => {
      // Tạo notification ngẫu nhiên
      const newNotification = generateRandomNotification();
      setCurrentNotification(newNotification);
      setIsVisible(true);

      // Ẩn sau 4 giây
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Hiển thị ngay lập tức
    showNotification();

    // Lặp lại mỗi 30 giây
    const interval = setInterval(() => {
      showNotification();
    }, 30000); // 30 giây

    return () => clearInterval(interval);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      className={`fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div
        className={`transfer-notification bg-white rounded-lg shadow-xl border border-gray-200 p-2 w-48 ${
          !isVisible ? "hiding" : ""
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500 success-icon" />
            <span className="font-semibold text-gray-800 text-sm">
              {currentNotification.bank}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 close-button"
            aria-label="Đóng thông báo"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-600 font-medium text-sm">
              GIAO DICH THANH CONG
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600 text-xs">NGUOI CHUYEN:</span>
              <span className="font-medium text-xs text-gray-800">
                {currentNotification.name}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 text-xs">NOI DUNG:</span>
              <span className="font-medium text-xs text-gray-800">
                {currentNotification.service}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 text-xs">SO TIEN:</span>
              <span className="font-bold text-sm text-green-600 amount-highlight">
                {currentNotification.amount}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 text-xs">THOI GIAN:</span>
              <span className="font-medium text-xs text-gray-800">
                {new Date().toLocaleTimeString("vi-VN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>

          <div className="text-center pt-2">
            <span className="text-xs text-gray-500">
              Giao dich duoc thuc hien tu dong
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleNotification;
