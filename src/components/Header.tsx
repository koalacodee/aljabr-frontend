import useAssetsStore, { AssetName } from "../stores/AssetsStore";

function Logo() {
  const { assets } = useAssetsStore();

  return (
    <header className="flex items-center justify-center mt-8">
      {assets[AssetName.HEADER_LOGO] && (
        <img
          className="w-52"
          src={assets[AssetName.HEADER_LOGO]}
          alt="Aljabr Logo White"
          crossOrigin="anonymous"
          loading="lazy"
          decoding="async"
        />
      )}
    </header>
  );
}

export default Logo;
