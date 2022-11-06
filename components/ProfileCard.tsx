import React from "react";
import styled from "styled-components/native";
import { makeImgPath } from "../utils";

const Image = styled.Image`
  width: 90%;
  height: 500px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const ProfileCard = ({ image }: any) => {
  return <Image source={{ uri: makeImgPath(image) }} />;
};

export default ProfileCard;
