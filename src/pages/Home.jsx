import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles';
import { ChampionsAPI } from '@/api';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CHAMPIONS } from '@/stores/features/champions';
import { ChampionCard } from '@/app';
import { Search } from '@/components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 40px;
  padding: 0 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Home = () => {
  const championsData = useSelector((state) => state.champions);
  const dispatch = useDispatch();
  const championObject = championsData.championList.data;
  const [searchText, setSearchText] = useState('');

  const updateChampionsData = async () => {
    const data = await ChampionsAPI();
    dispatch(UPDATE_CHAMPIONS(data));
  };

  useEffect(() => {
    const hasData = championsData.hasData;
    if (!hasData) {
      updateChampionsData();
    }
  }, []);

  return (
    <Container>
      <Search setSearchText={setSearchText} />
      <Wrapper>
        <ChampionCard searchText={searchText} data={championObject} />
      </Wrapper>
    </Container>
  );
};
