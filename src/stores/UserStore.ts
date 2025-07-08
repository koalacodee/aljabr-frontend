import { create } from "zustand";

interface UserData {
  id?: string;
  name?: string;
  city?: string;
  phone?: string;
}

interface UserType {
  data: UserData;
  setData: (data: UserData) => void;
}

const useUserStore = create<UserType>((set) => ({
  data: {},
  setData: (data: UserData) => set({ data }),
}));

export default useUserStore;
