import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ChampionAPI } from '@/api';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CHAMPION } from '@/stores/features/champions';
import { ChampionSkin } from '@/app';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const SlideStyles = styled.div``;
const SlideThumbStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background: #080808;
  .slick-slide:not(.slick-current) {
    filter: grayscale(1);
    transition: 0.2s;
    &:hover {
      filter: grayscale(0);
    }
  }
  .slick-current {
    div:before,
    div:after {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
  }
`;

export const Skin = () => {
  const { id } = useParams();
  const championsData = useSelector(
    (state) => state.champions.championData
  );
  const dispatch = useDispatch();
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const updateChampionData = async () => {
    const data = await ChampionAPI(id);
    await dispatch(UPDATE_CHAMPION(data));
    setIsLoading(false);
  };

  useEffect(() => {
    const hasChampion = !!championsData[id];
    if (hasChampion) {
      setIsLoading(false);
    }
    if (!hasChampion) {
      updateChampionData();
    }
  }, []);

  return (
    <Container>
      {!isLoading && (
        <>
          <SlideStyles>
            <ChampionSkin
              nav={nav1}
              setNav={setNav2}
              data={championsData[id]}
              isLarge={true}
            />
          </SlideStyles>
          <SlideThumbStyles>
            <ChampionSkin
              nav={nav2}
              setNav={setNav1}
              data={championsData[id]}
            />
          </SlideThumbStyles>
        </>
      )}
    </Container>
  );
};
