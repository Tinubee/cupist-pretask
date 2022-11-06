import { atom } from "recoil";
export interface IProfileData {
  data: IProfile;
  meta: IProfileMeta;
}
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

export interface IProfileMeta {
  genders: IGenders[];
  body_types: IBodyTypes[];
  educations: IEducations[];
  height_range: IHeight;
}

export interface IGenders {
  key: string;
  name: string;
}

export interface IBodyTypes {
  key: string;
  name: string;
}

export interface IEducations {
  key: string;
  name: string;
}

export interface IHeight {
  min: number;
  max: number;
}

export const setTodayProfile = atom<IProfile[]>({
  key: "profile",
  default: [],
});

export const setAddProfile = atom<IProfile[]>({
  key: "addprofile",
  default: [],
});

export const setMyprofile = atom<IProfileData[]>({
  key: "myProfile",
  default: [],
});
