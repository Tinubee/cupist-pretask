import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import { myProfile } from "../api";
import { IProfile, setMyprofile } from "../atoms";
import Loader from "../components/Loader";
import ProfilePhoto from "../components/ProfilePhoto";
import { BodyTypes, Educations, LBodyTypes, LEducations } from "../utils";
import Modal from "react-native-modal";

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
const ModalInfoText = styled.Text`
  font-weight: 600;
`;

const EditProfile = () => {
  const [heightArr, setHeightArr] = useState<string[]>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<{
    headerTitle: string;
    children: JSX.Element;
    viewStyle?: ViewStyle;
  }>();
  const [profileInfo, setProfileInfo] = useState<IProfile>({
    introduction: "",
    height: "",
    birthday: "",
    company: "",
    body_type: "마른",
    education: "대학교",
    gender: "남성",
    id: 0,
    job: "",
    location: "",
    name: "",
    pictures: [],
  });
  const scrollRef = useRef<ScrollView>(null);
  const { isLoading: myProfileLoading, data: myProfileData } = useQuery(
    ["myProfile"],
    myProfile
  );

  const [myRProfileData, setMyRProfileData] = useRecoilState(setMyprofile);
  useEffect(() => {
    if (myProfileData?.meta.height_range) {
      let height = myProfileData?.meta.height_range.min;
      const arr: string[] = [];
      while (height < myProfileData?.meta.height_range.max + 1) {
        if (height === myProfileData?.meta.height_range.min) {
          arr.push(height.toString() + "cm 이하");
        } else if (height === myProfileData?.meta.height_range.max) {
          arr.push(height.toString() + "cm 이상");
        } else {
          arr.push(height.toString() + "cm");
        }
        height++;
      }
      setHeightArr(arr);
    }
  }, [myProfileData?.meta.height_range]);
  const changeHeight = () => {
    setModalOpen(true);
    setModalInfo({
      children: (
        <>
          {React.Children.toArray(
            heightArr?.map((heightValue, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setProfileInfo({ ...myProfileData, height: heightValue });
                    setModalOpen(false);
                  }}
                  onLayout={(event) => {
                    if (myProfileData.height === heightValue) {
                      const layout = event.nativeEvent.layout;
                      scrollRef.current?.scrollTo({
                        x: 0,
                        y: layout.y,
                      });
                    }
                  }}
                >
                  <ModalInfoText>{heightValue}</ModalInfoText>
                </TouchableOpacity>
              );
            })
          )}
        </>
      ),
      viewStyle: { height: 500 },
      headerTitle: "키",
    });
  };

  const changeBodytype = () => {
    setModalOpen(true);
    setModalInfo({
      children: (
        <>
          {React.Children.toArray(
            LBodyTypes.map((type) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setProfileInfo({ ...myProfileData, body_type: type });
                    setModalOpen(false);
                  }}
                >
                  <ModalInfoText>{type}</ModalInfoText>
                </TouchableOpacity>
              );
            })
          )}
        </>
      ),
      viewStyle: { height: 500 },
      headerTitle: "체형",
    });
  };

  const changeEducation = () => {
    setModalOpen(true);
    setModalInfo({
      children: (
        <>
          {React.Children.toArray(
            LEducations.map((education) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setProfileInfo({ ...myProfileData, education: education });
                    setModalOpen(false);
                  }}
                >
                  <ModalInfoText>{education}</ModalInfoText>
                </TouchableOpacity>
              );
            })
          )}
        </>
      ),
      viewStyle: { height: 500 },
      headerTitle: "학력",
    });
  };

  useEffect(() => {
    setMyRProfileData(myProfileData);
  }, [myProfileLoading]);

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
          onChangeText={(e) =>
            setProfileInfo({ ...myProfileData, introduction: e })
          }
        />
        <Info>
          <Label>키</Label>
          <DataChangeText onPress={changeHeight} style={Card.infoCard}>
            <DataText>
              {profileInfo.height
                ? profileInfo.height
                : myProfileData.data.height}
            </DataText>
          </DataChangeText>
        </Info>
        <Info>
          <Label>체형</Label>
          <DataChangeText onPress={changeBodytype} style={Card.infoCard}>
            <DataText>
              {profileInfo.body_type
                ? profileInfo.body_type
                : BodyTypes(myProfileData.data.body_type)}
            </DataText>
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
          <DataChangeText onPress={changeEducation} style={Card.infoCard}>
            <DataText>
              {profileInfo.education
                ? profileInfo.education
                : Educations(myProfileData.data.education)}
            </DataText>
          </DataChangeText>
        </Info>
        <Info>
          <Label>학교</Label>
          <DataText>한경대학교</DataText>
        </Info>
      </ProfileData>
      {modalOpen && (
        <Modal
          isVisible={modalOpen}
          hideModalContentWhileAnimating={true}
          animationIn="fadeIn"
          animationOut="fadeOut"
          onBackdropPress={() => setModalOpen(false)}
          onBackButtonPress={() => setModalOpen(false)}
          backdropTransitionOutTiming={0}
        >
          <View style={Card.Container}>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                paddingVertical: 20,
              }}
            >
              <Text style={{ textAlign: "center" }}>
                {modalInfo?.headerTitle}
              </Text>
            </View>
            <ScrollView
              ref={scrollRef}
              showsVerticalScrollIndicator={false}
              style={modalInfo?.viewStyle}
            >
              <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
                {modalInfo?.children}
              </View>
            </ScrollView>
          </View>
        </Modal>
      )}
    </Container>
  );
};

export default EditProfile;

const Card = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    borderRadius: 5,
    width: Dimensions.get("window").width - 120,
    alignSelf: "center",
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44,
  },
});
