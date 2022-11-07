import { atom } from "recoil";
export interface IProfileData {
  data: IProfile;
  meta: IProfileMeta;
}
export interface IProfile {
  birthday: string;
  body_type: "마른" | "보통" | "근육" | "통통";
  company: string;
  education?: "고등학교" | "전문대" | "대학교" | "석사" | "박사" | "기타";
  gender: "남성" | "여성";
  height: string;
  id: string;
  introduction: string;
  job: string;
  location: string;
  name: string;
  school?: string;
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
  name: "남성" | "여성";
}

export interface IBodyTypes {
  key: string;
  name: "마른" | "보통" | "근육" | "통통";
}

export interface IEducations {
  key: string;
  name: "고등학교" | "전문대" | "대학교" | "석사" | "박사" | "기타";
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
