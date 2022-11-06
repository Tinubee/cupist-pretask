import React from "react";
import { Text, View } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { myProfile } from "../api";
import Loader from "../components/Loader";
import ProfilePhoto from "../components/ProfilePhoto";
import { Color } from "../theme";
import { BodyTypes, Educations } from "../utils";

const Container = styled.ScrollView``;

const ProfileData = styled.View`
  margin: 0px 16px;
`;
const Info = styled.View`
  margin: 10px;
  flex-direction: row;
`;
const Label = styled.Text`
  width: 35%;
  font-size: 16px;
`;

const DataText = styled.Text`
  width: 65%;
  font-size: 16px;
  color: #4b9cff;
`;

const DataChangeText = styled.TouchableOpacity`
  width: 65%;
  font-size: 16px;
  color: #4b9cff;
`;

const TextInput = styled.TextInput`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 15px 8px;
  margin-bottom: 8px;
  border-radius: 5px;
  color: gray;
`;

const TextInfo = styled.View`
  justify-content: center;
  margin: 16px;
  height: 44px;
  flex-direction: row;
`;

const TextOne = styled.Text`
  margin: 0px 10px;
  font-size: 12px;
  color: gray;
`;
const TextTwo = styled(TextOne)`
  font-weight: 900;
`;

const EditProfile = () => {
  const { isLoading: myProfileLoading, data: myProfileData } = useQuery(
    ["myProfile"],
    myProfile
  );

  return myProfileLoading ? (
    <Loader />
  ) : (
    <Container>
      <ProfilePhoto photo={myProfileData.data.pictures} />
      <TextInfo>
        <TextOne>다양한 매력을 보여줄 수 있는 사진을 올려주세요</TextOne>
        <TextTwo>더 알아보기</TextTwo>
      </TextInfo>
      <ProfileData>
        <Info>
          <Label>닉네임</Label>
          <DataText>{myProfileData.data.name}</DataText>
        </Info>
        <Info>
          <Label>성별</Label>
          <DataText>
            {myProfileData.data.gender === "F" ? "여성" : "남성"}
          </DataText>
        </Info>
        <Info>
          <Label>생일</Label>
          <DataText>{myProfileData.data.birthday}</DataText>
        </Info>
        <Info>
          <Label>위치</Label>
          <DataText>{myProfileData.data.location}</DataText>
        </Info>
        <Info>
          <Label>소개</Label>
        </Info>
        <TextInput
          placeholder="회원님의 매력을 간단하게 소개해주세요"
          returnKeyType="done"
          autoCapitalize="none"
          placeholderTextColor={"rgba(98, 94, 94, 0.8)"}
        />
        <Info>
          <Label>키</Label>
          <DataChangeText>
            <DataText>{myProfileData.data.height}</DataText>
          </DataChangeText>
        </Info>
        <Info>
          <Label>체형</Label>
          <DataChangeText>
            <DataText>{BodyTypes(myProfileData.data.body_type)}</DataText>
          </DataChangeText>
        </Info>
        <Info>
          <Label>직장</Label>
          <TextInput
            placeholder="입력해주세요"
            returnKeyType="done"
            autoCapitalize="none"
            placeholderTextColor={"rgba(98, 94, 94, 0.8)"}
          />
        </Info>
        <Info>
          <Label>직업</Label>
          <DataText>{myProfileData.data.job}</DataText>
        </Info>
        <Info>
          <Label>학력</Label>
          <DataChangeText>
            <DataText>{Educations(myProfileData.data.education)}</DataText>
          </DataChangeText>
        </Info>
        <Info>
          <Label>학교</Label>
          <DataText>한경대학교</DataText>
        </Info>
      </ProfileData>
    </Container>
  );
};

export default EditProfile;
