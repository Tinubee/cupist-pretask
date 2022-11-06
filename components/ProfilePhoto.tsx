import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { makeImgPath } from "../utils";

const ListContainer = styled.View``;

const Image = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const ProfilePhoto = ({ photo }: any) => {
  const numColumns = 3;
  return (
    <ListContainer>
      <FlatList
        data={photo}
        renderItem={({ item, index }) => (
          <Image source={{ uri: makeImgPath(photo[index]) }} />
        )}
        numColumns={numColumns}
      />
    </ListContainer>
  );
};

export default ProfilePhoto;
