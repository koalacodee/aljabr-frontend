import useAssetsStore, { AssetName } from "../stores/AssetsStore";

function LandingVideo() {
  const { assets } = useAssetsStore();

  return (
    <div className="w-9/12 overflow-hidden m-auto rounded-t-2xl my-4 px-4x bg-gray-400x flex justify-center items-center">
      {assets[AssetName.LANDING_VIDEO] && (
        <video
          autoPlay
          loop
          playsInline
          muted
          crossOrigin="anonymous"
          src={assets[AssetName.LANDING_VIDEO]}
        ></video>
      )}
    </div>
  );
}

export default LandingVideo;
