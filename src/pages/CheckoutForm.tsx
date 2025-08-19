import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

// Form validation schema
const checkoutSchema = z.object({
  fullName: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có ít nhất 10 số")
    .max(11, "Số điện thoại không được quá 11 số"),
  dob: z.string().min(1, "Vui lòng nhập ngày sinh"),
  birthPlace: z.string().min(2, "Nơi sinh phải có ít nhất 2 ký tự"),
  pkg: z.enum(["TEST", "BASIC", "PRO", "PREMIUM"], {
    required_error: "Vui lòng chọn gói luận giải",
  }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const PACKAGE_INFO = {
  TEST: {
    name: "Gói Test",
    price: 10000,
    description: "Gói test thanh toán - chỉ 10k",
  },
  BASIC: {
    name: "Gói Cơ Bản",
    price: 299000,
    description: "Luận giải cơ bản về tính cách và vận mệnh",
  },
  PRO: {
    name: "Gói Chuyên Nghiệp",
    price: 499000,
    description: "Luận giải chi tiết về sự nghiệp và tình duyên",
  },
  PREMIUM: {
    name: "Gói Cao Cấp",
    price: 799000,
    description: "Luận giải toàn diện và tư vấn cá nhân hóa",
  },
};

const CheckoutForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const watchedPackage = watch("pkg");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Get API URL with fallback logic
  const getApiUrl = () => {
    // Priority: Environment variable > Production detection > Local fallback
    if (import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL;
    }

    // Auto-detect production environment
    if (
      window.location.hostname === "tuvitrucnghi.online" ||
      window.location.hostname.includes("vercel.app")
    ) {
      return "https://tuvitrucnghi-api.vercel.app";
    }

    // Local development fallback
    return "http://localhost:3030";
  };

  const onSubmit = async (data: CheckoutFormData) => {
    setIsLoading(true);

    console.log("Sending request to PayOS with data:", data);

    try {
      const apiUrl = getApiUrl();
      console.log("🚀 Creating payment with API URL:", apiUrl);

      const response = await fetch(`${apiUrl}/api/payments/payos/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Có lỗi xảy ra khi tạo đơn hàng");
      }

      const result = await response.json();

      // Redirect to PayOS checkout page
      if (result.checkoutUrl) {
        window.location.href = result.checkoutUrl;
      } else {
        throw new Error("Không nhận được link thanh toán");
      }
    } catch (error) {
      console.error("Checkout error:", error);

      // More detailed error handling
      if (error instanceof TypeError && error.message.includes("fetch")) {
        toast.error(
          "Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng."
        );
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Có lỗi xảy ra khi xử lý thanh toán");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800">
              Đặt Hàng Luận Giải Trúc Nghị
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Điền thông tin để nhận luận giải tử vi cá nhân hóa
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Họ và tên *</Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="Nhập họ và tên đầy đủ"
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="example@email.com"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại *</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="0123456789"
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dob">Ngày sinh *</Label>
                <Input
                  id="dob"
                  type="date"
                  {...register("dob")}
                  className={errors.dob ? "border-red-500" : ""}
                />
                {errors.dob && (
                  <p className="text-sm text-red-500">{errors.dob.message}</p>
                )}
              </div>

              {/* Birth Place */}
              <div className="space-y-2">
                <Label htmlFor="birthPlace">Nơi sinh *</Label>
                <Input
                  id="birthPlace"
                  {...register("birthPlace")}
                  placeholder="Thành phố, tỉnh"
                  className={errors.birthPlace ? "border-red-500" : ""}
                />
                {errors.birthPlace && (
                  <p className="text-sm text-red-500">
                    {errors.birthPlace.message}
                  </p>
                )}
              </div>

              {/* Package Selection */}
              <div className="space-y-2">
                <Label>Gói luận giải *</Label>
                <Select
                  onValueChange={(value) => {
                    setValue(
                      "pkg",
                      value as "TEST" | "BASIC" | "PRO" | "PREMIUM"
                    );
                    setSelectedPackage(value);
                  }}
                >
                  <SelectTrigger className={errors.pkg ? "border-red-500" : ""}>
                    <SelectValue placeholder="Chọn gói luận giải" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(PACKAGE_INFO).map(([key, info]) => (
                      <SelectItem key={key} value={key}>
                        <div className="flex flex-col">
                          <span className="font-medium">
                            {info.name} - {formatPrice(info.price)}
                          </span>
                          <span className="text-sm text-gray-500">
                            {info.description}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.pkg && (
                  <p className="text-sm text-red-500">{errors.pkg.message}</p>
                )}
              </div>

              {/* Package Summary */}
              {watchedPackage && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-blue-800">
                          {
                            PACKAGE_INFO[
                              watchedPackage as keyof typeof PACKAGE_INFO
                            ].name
                          }
                        </h4>
                        <p className="text-sm text-blue-600">
                          {
                            PACKAGE_INFO[
                              watchedPackage as keyof typeof PACKAGE_INFO
                            ].description
                          }
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-800">
                          {formatPrice(
                            PACKAGE_INFO[
                              watchedPackage as keyof typeof PACKAGE_INFO
                            ].price
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                disabled={isLoading}
              >
                {isLoading ? "Đang xử lý..." : "Tiếp tục thanh toán"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutForm;
