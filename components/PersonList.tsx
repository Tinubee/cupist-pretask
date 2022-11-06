import React from "react";
import { Text, View } from "react-native";
import { useSetRecoilState } from "recoil";
import styled from "styled-components/native";
import { setAddProfile, setTodayProfile } from "../atoms";
import ProfileCard from "./ProfileCard";

const ListContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  margin: 12px 0px;
  flex-direction: row;
`;

const ProfileInfo = styled.View`
  position: absolute;
`;

const Type = styled.Text`
  padding: 10px;
  width: 100px;
  text-align: center;
  font-weight: 600;
  color: #ffffff;
  background-color: gray;
  opacity: 0.4;
`;
const Detail = styled.View`
  flex-direction: row;
`;
const Title = styled.View`
  flex-direction: row;
`;
const Name = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
`;
const Age = styled(Name)``;
const Job = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 16px;
`;
const Distance = styled(Job)``;
const Height = styled(Job)`
  opacity: 0.6;
`;
const Introduction = styled(Job)``;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 16px;
`;
const CancleBtn = styled.TouchableOpacity`
  background-color: #333333;
  border-radius: 5px;
  width: 48px;
  height: 48px;
`;

const LikeBtn = styled(CancleBtn)`
  width: 250px;
  background-color: #4b9cff;
  margin-left: 8px;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: auto;
`;
interface IListProps {
  data: any;
  type: string;
}

const PersonList: React.FC<IListProps> = ({ data, type }) => {
  const setTodayProfileData = useSetRecoilState(setTodayProfile);
  const setAddProfileData = useSetRecoilState(setAddProfile);
  const DeleteProfile = () => {
    if (type === "today") {
      setTodayProfileData((arr) => {
        return arr.filter((item) => item.name !== data.name);
      });
    } else {
      setAddProfileData((arr) => {
        return arr.filter((item) => item.name !== data.name);
      });
    }
  };
  return (
    <ListContainer>
      <ProfileCard image={data.pictures[0]} />
      <ProfileInfo>
        {type === "today" ? <Type>오늘의추천</Type> : null}
        <View>
          <Title>
            <Name>{data.name}, </Name>
            <Age>{data.age}</Age>
          </Title>
          {data.introduction ? (
            <Introduction>{data.introduction}</Introduction>
          ) : (
            <>
              <Detail>
                <Job>{data.job}</Job>
                <Distance>{data.distance}</Distance>
              </Detail>
              <Height>{data.height}cm</Height>
            </>
          )}
        </View>
        <ButtonContainer>
          <CancleBtn onPress={DeleteProfile}>
            <BtnText>X</BtnText>
          </CancleBtn>
          <LikeBtn>
            <BtnText>좋아요</BtnText>
          </LikeBtn>
        </ButtonContainer>
      </ProfileInfo>
    </ListContainer>
  );
};

export default PersonList;
