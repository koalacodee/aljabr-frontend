import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAssetsStore, { AssetName } from "../stores/AssetsStore";
import useUserStore from "../stores/UserStore";
import { useScreenStore } from "../stores/ScreenStore";
import api from "../lib/api";

// Define Zod schema matching the DTO
const registerSchema = z.object({
  name: z
    .string()
    .min(1, { message: "يجب إدخال الأسم" })
    .max(50, { message: "الأسم طويل جداً" }),
  city: z
    .string()
    .min(1, { message: "يجب إدخال المدينة" })
    .max(70, { message: "أسم المدينة طويل جداً" }),
  phone: z
    .string()
    .min(1, { message: "يجب إدخال رقم الهاتف" })
    .regex(/^05\d{8}$/, {
      message: "يجب ان يبدأ رقم الهاتف ب 05 و ان يبلغ طوله 10 ارقام",
    }),
  code: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9A-Z]{8,20}$/.test(val), {
      message: "الكود غير صحيح",
    }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { assets } = useAssetsStore();
  const { setData, data } = useUserStore();
  const { setCurrentScreen } = useScreenStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      city: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      console.log(data);

      const res = await api.post("/api/v1/registration", {
        ...data,
        code: data.code || undefined,
      });
      // Handle successful registration
      setCurrentScreen("SUCCESS");
      setData(res.data.data);
      console.log("Registration successful:", res.data.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        const errors: Record<string, string> = err.response?.data.data;
        console.log(errors);

        if (err.status === 409) {
          if (errors.phone == "single_registration") {
            setError("لا يمكنك التسجيل اكثر من مرة بنفس رقم الهاتف");
          } else if (errors.code == "code_already_taken") {
            setError("هذا الرمز مستخدم بالفعل");
          }
        } else if (err.status === 404) {
          if (errors.code == "code_not_found") {
            setError("الكود غير صحيح");
          }
        }
      } else {
        setError(err instanceof Error ? err.message : "حدث خطأ أثناء التسجيل");
        console.log(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit(onSubmit)} className="p-12 grid gap-12">
        <div className="space-y-2">
          <label htmlFor="name" className="text-lg flex justify-between">
            <span>الأسم</span>
            <span>Name</span>
          </label>
          <input
            id="name"
            placeholder="أدخل الأسم"
            className={`w-full py-2 px-4 rounded-lg text-black/80 bg-white ${
              errors.name ? "border-red-500" : ""
            }`}
            type="text"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="city" className="text-lg flex justify-between">
            <span>المدينة</span>
            <span>City</span>
          </label>
          <input
            id="city"
            placeholder="أدخل المدينة"
            className={`w-full py-2 px-4 rounded-lg text-black/80 bg-white ${
              errors.city ? "border-red-500" : ""
            }`}
            type="text"
            {...register("city")}
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-lg flex justify-between">
            <span>الجوال</span>
            <span>Phone</span>
          </label>
          <input
            id="phone"
            placeholder="أدخل الجوال"
            className={`w-full py-2 px-4 rounded-lg text-black/80 bg-white ${
              errors.phone ? "border-red-500" : ""
            }`}
            type="text"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="code" className="text-lg flex justify-between">
            <span>الرمز</span>
            <span>Code</span>
          </label>
          <input
            id="code"
            placeholder="أدخل الرمز"
            className={`w-full py-2 px-4 rounded-lg text-black/80 bg-white ${
              errors.code ? "border-red-500" : ""
            }`}
            type="text"
            {...register("code")}
          />
          {errors.code && (
            <p className="text-red-500 text-sm">{errors.code.message}</p>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 rounded-lg bg-blue-500 text-white  disabled:opacity-50"
        >
          {isLoading ? "جارى التسجيل..." : "التسجيل"}
        </button>

        <audio
          autoPlay
          className="w-full m-auto"
          src={assets[AssetName.START_AUDIO]}
          crossOrigin="anonymous"
        ></audio>
      </form>
    </div>
  );
}
