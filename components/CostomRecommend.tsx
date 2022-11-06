import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  margin: 0px 16px;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ItemList = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

const ItemListText = styled.Text`
  font-size: 20px;
`;

const ItemListBtn = styled.TouchableOpacity`
  background-color: #4b9cff;
  border-radius: 5px;
`;

const ItemListBtnText = styled.Text`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
`;

const More = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: #bcc9da;
  border-radius: 5px;
`;

const MoreText = styled.Text`
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  color: #1a1a1a;
`;

const CostomRecommend = () => {
  return (
    <Container>
      <Section>
        <ItemList>
          <Image source={require("../assets/icon/recommendations/today.png")} />
          <ItemListText>글램추천</ItemListText>
          <Image source={require("../assets/icon/recommendations/hot.png")} />
        </ItemList>
        <ItemListBtn>
          <ItemListBtnText>선택</ItemListBtnText>
        </ItemListBtn>
      </Section>
      <Section>
        <ItemList>
          <Image source={require("../assets/icon/recommendations/dia.png")} />
          <ItemListText>최상위 매력</ItemListText>
          <Image source={require("../assets/icon/recommendations/hot.png")} />
        </ItemList>
        <ItemListBtn>
          <ItemListBtnText>선택</ItemListBtnText>
        </ItemListBtn>
      </Section>
      <Section>
        <ItemList>
          <Image
            source={require("../assets/icon/recommendations/glamour.png")}
          />
          <ItemListText>볼륨감 있는 체형</ItemListText>
          <Image source={require("../assets/icon/recommendations/hot.png")} />
        </ItemList>
        <ItemListBtn>
          <ItemListBtnText>선택</ItemListBtnText>
        </ItemListBtn>
      </Section>
      <Section>
        <ItemList>
          <Image
            source={require("../assets/icon/recommendations/withpet.png")}
          />
          <ItemListText>반려 동물을 키우는</ItemListText>
          <Image source={require("../assets/icon/recommendations/hot.png")} />
        </ItemList>
        <ItemListBtn>
          <ItemListBtnText>선택</ItemListBtnText>
        </ItemListBtn>
      </Section>
      <More>
        <MoreText>24개 항목 모두 보기</MoreText>
      </More>
    </Container>
  );
};

export default CostomRecommend;
