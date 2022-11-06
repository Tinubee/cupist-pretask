import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import { addRecommend, todayRecommend } from "../api";
import { setAddProfile, setTodayProfile } from "../atoms";
import Loader from "../components/Loader";
import PersonList from "../components/PersonList";

const Container = styled.View``;

const Home = () => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const [more, setMore] = useState(false);
  const [todayProfileData, setTodayProfileData] =
    useRecoilState(setTodayProfile);
  const [addProfileData, setAddProfileData] = useRecoilState(setAddProfile);

  const { isLoading: todayRecommendLoading, data: todayRecommendData } =
    useQuery(["todayRecommend"], todayRecommend);

  const { isLoading: addRecommendLoading, data: addRecommendData } = useQuery(
    ["addRecommend"],
    addRecommend
  );
  const loading = todayRecommendLoading || addRecommendLoading;
  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["todayRecommend"]);
    setRefreshing(false);
  };

  const loadMore = () => {
    setMore(true);
  };

  useEffect(() => {
    setTodayProfileData(todayRecommendData?.data);
    setAddProfileData(addRecommendData?.data);
  }, [loading]);

  return loading ? (
    <Loader />
  ) : (
    <FlatList
      onEndReachedThreshold={0.02}
      onEndReached={loadMore}
      onRefresh={onRefresh}
      refreshing={refreshing}
      renderItem={({ item }) => (
        <View>
          <PersonList key={item.id} data={item} type="today" />
          {more ? (
            <FlatList
              renderItem={({ item }) => (
                <PersonList key={item.id} data={item} type="add" />
              )}
              data={addProfileData}
            />
          ) : null}
        </View>
      )}
      data={todayProfileData}
    />
  );
};

export default Home;
