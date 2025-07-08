import useAssetsStore, { AssetName } from "../stores/AssetsStore";
import { useScreenStore } from "../stores/ScreenStore";
import useUserStore from "../stores/UserStore";
import Logo from "./Header";

export default function Success() {
  const { assets } = useAssetsStore();
  const { setCurrentScreen } = useScreenStore();
  const { data } = useUserStore();
  return (
    <div className="flex flex-col items-center">
      <Logo />
      <div className="relative my-8 h-32 w-32 animate-scale-in rounded-full border flex items-center justify-center text-8xl">
        ✔
      </div>
      <h1 className="mb-12 text-4xl font-bold ">
        مبروك <wbr /> {data.name?.split(" ")[0]}
      </h1>
      <p className="mb-12 text-xl ">تم تسجيلك في المسابقة بنجاح</p>
      <p className="text-lg">بالتوفيق</p>
      <div>
        <button
          type="button"
          onClick={() => setCurrentScreen("FORM")}
          className="px-4 py-2 rounded-md mt-8 border cursor-pointer bg-white text-blue-600 hover:text-white hover:bg-blue-600/50"
        >
          اضف رمز جديد
        </button>
      </div>

      <audio
        autoPlay
        className="w-full m-auto"
        src={assets[AssetName.END_AUDIO]}
        crossOrigin="anonymous"
      ></audio>
    </div>
  );
}
