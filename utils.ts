export const makeImgPath = (img: string) => `https://test.dev.cupist.de${img}`;

export const BodyTypes = (bodytype: string) => {
  if (bodytype === "body_type_00") return "마른";
  if (bodytype === "body_type_01") return "보통";
  if (bodytype === "body_type_02") return "근육질";
  if (bodytype === "body_type_03") return "통통";
};

export const Educations = (edu: string) => {
  if (edu === "education_00") return "고등학교";
  if (edu === "education_01") return "전문대";
  if (edu === "education_02") return "대학교";
  if (edu === "education_03") return "석사";
  if (edu === "education_04") return "박사";
  if (edu === "education_05") return "기타";
  else return "선택해주세요";
};
