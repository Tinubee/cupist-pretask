import { atom } from "recoil";

export interface IProfile {
  id: number;
  name: string;
  age: number;
  job: string;
  height: number;
  distance: number;
  introduction: string;
  pictures: string[];
}

export const setTodayProfile = atom<IProfile[]>({
  key: "profile",
  default: [],
});

export const setAddProfile = atom<IProfile[]>({
  key: "addprofile",
  default: [],
});
