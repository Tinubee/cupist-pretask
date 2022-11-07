import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import { addRecommend, todayRecommend } from "../api";
import { setAddProfile, setTodayProfile } from "../atoms";
import CostomRecommend from "../components/CostomRecommend";
import Loader from "../components/Loader";
import PersonList from "../components/PersonList";

const CustomText = styled.Text`
  margin: 16px;
  font-size: 20px;
  font-weight: 600;
`;

const Home = () => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const [more, setMore] = useState(false);
  const [todayProfileData, setTodayProfileData] =
    useRecoilState(setTodayProfile);
  const [addProfileData, setAddProfileData] = useRecoilState(setAddProfile);

  const {
    isLoading: todayRecommendLoading,
    data: todayRecommendData,
    refetch: todayRecommendDataRefetch,
  } = useQuery(["todayRecommend"], todayRecommend);

  const {
    isLoading: addRecommendLoading,
    data: addRecommendData,
    refetch: addRecommendDataRefetch,
  } = useQuery(["addRecommend"], addRecommend);
  const loading = todayRecommendLoading || addRecommendLoading;
  const onRefresh = async () => {
    setRefreshing(true);
    await todayRecommendDataRefetch();
    await addRecommendDataRefetch();
    setRefreshing(false);
  };

  const loadMore = () => {
    setMore(true);
  };

  useEffect(() => {
    setTodayProfileData(todayRecommendData?.data);
    setAddProfileData(addRecommendData?.data);
  }, [loading, refreshing]);

  return loading ? (
    <Loader />
  ) : (
    <FlatList
      onEndReachedThreshold={0.02}
      onEndReached={loadMore}
      onRefresh={onRefresh}
      refreshing={refreshing}
      renderItem={({ item }) => (
        <>
          <PersonList key={item.id} data={item} type="today" />
          {more ? (
            <FlatList
              renderItem={({ item }) => (
                <PersonList key={item.id} data={item} type="add" />
              )}
              data={addProfileData}
              keyExtractor={(item) => item.id}
            />
          ) : null}
          <CustomText>맞춤 추천</CustomText>
          <CostomRecommend />
        </>
      )}
      data={todayProfileData}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Home;
