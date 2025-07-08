import { create } from "zustand";
import api from "../lib/api";

export const AssetName = {
  HEADER_LOGO: "HEADER_LOGO" as const,
  LANDING_VIDEO: "LANDING_VIDEO" as const,
  TERMS_LOGO: "TERMS_LOGO" as const,
  START_AUDIO: "START_AUDIO" as const,
  END_AUDIO: "END_AUDIO" as const,
  SPONSORS_LOGOS: "SPONSORS_LOGOS" as const,
} as const;

type AssetsType = {
  assets: Record<string, string>;
  fetchAssets: () => Promise<void>;
};

const useAssetsStore = create<AssetsType>((set) => ({
  assets: {
    [AssetName.HEADER_LOGO]: "",
    [AssetName.LANDING_VIDEO]: "",
    [AssetName.TERMS_LOGO]: "",
    [AssetName.START_AUDIO]: "",
    [AssetName.END_AUDIO]: "",
  },

  fetchAssets: async () => {
    try {
      const res = await api.get("/api/v1/media/all");
      set({ assets: res.data.data });
    } catch (err) {
      console.error("Failed to fetch assets", err);
    }
  },
}));

export default useAssetsStore;
