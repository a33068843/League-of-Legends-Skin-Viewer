import styled from 'styled-components';
import { colors } from '@/styles';
import { useParams } from 'react-router-dom';
import { config } from '@/api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SkinWrapper = styled.div`
  all: unset;
`;
const SkinBackground = styled.img`
  position: absolute;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  filter: blur(5px) brightness(0.3);
`;
const SkinLarge = styled.img`
  position: relative;
  width: 100vw;
  max-width: 1100px;
  padding: 20px;
  margin: 0 auto;
  z-index: 1;
`;
const SkinThumbWrapper = styled.div`
  padding: 20px 0;
  &:hover {
    div:before,
    div:after {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    div {
      opacity: 1;
    }
  }
`;
const SkinSmallBorder = styled.div`
  position: relative;
  width: 200px;
  margin: 0 auto;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 0%;
    z-index: 1;
    transition: 0.3s;
    opacity: 0;
  }
  &:before {
    top: 0;
    left: 0;
    border-top: 2px solid ${colors.primary};
    border-left: 2px solid ${colors.primary};
    box-shadow: -1px -1px 4px ${colors.primary}${colors.opacity40};
  }
  &:after {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid ${colors.primary};
    border-right: 2px solid ${colors.primary};
    box-shadow: 1px 1px 4px ${colors.primary}${colors.opacity40};
  }
`;
const SkinSmall = styled.img`
  width: 200px;
  margin: 0 auto;
  border-radius: 4px;
`;
const SkinMask = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: ${colors.black}${colors.opacity70};
  opacity: 0;
  color: ${colors.gray150};
  transition: 0.2s;
`;
const SkinTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 1px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ChampionSkin = ({
  nav,
  setNav,
  data = {},
  isLarge = false,
}) => {
  const { id } = useParams();
  const getSkinArray = () => {
    if (data[id] === undefined) return [];
    return data[id].skins.map((item) => {
      if (item.num === 0) {
        return { id: item.num, name: data[id].name };
      }
      return { id: item.num, name: item.name };
    });
  };
  const skinArray = getSkinArray();
  const slidesCount = () => {
    return skinArray.length < 5 ? skinArray.length : 5;
  };
  const slideConfig = (isLarge) => {
    if (isLarge) {
      return {
        asNavFor: nav,
        speed: 400,
        ref: (slider1) => setNav(slider1),
      };
    }
    return {
      asNavFor: nav,
      ref: (slider2) => setNav(slider2),
      slidesToShow: slidesCount(),
      swipeToSlide: true,
      focusOnSelect: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: skinArray.length < 4 ? skinArray.length : 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: skinArray.length < 3 ? skinArray.length : 3,
          },
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: skinArray.length < 2 ? skinArray.length : 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  };

  return (
    <Slider {...slideConfig(isLarge)}>
      {isLarge &&
        skinArray.length > 0 &&
        skinArray.map((item, index) => {
          const skinId = item.id;
          const skinSrc = `${config.championSkinUrl}${id}_${skinId}.jpg`;
          return (
            <SkinWrapper data-index={index} key={skinId}>
              <SkinBackground src={skinSrc} />
              <SkinLarge src={skinSrc} />
            </SkinWrapper>
          );
        })}
      {!isLarge &&
        skinArray.length > 0 &&
        skinArray.map((item, index) => {
          const skinId = item.id;
          const skinName = item.name;
          const skinSrc = `${config.championSkinUrl}${id}_${skinId}.jpg`;
          return (
            <SkinThumbWrapper data-index={index} key={skinId}>
              <SkinSmallBorder>
                <SkinSmall src={skinSrc} />
                <SkinMask>
                  <SkinTitle>{skinName}</SkinTitle>
                </SkinMask>
              </SkinSmallBorder>
            </SkinThumbWrapper>
          );
        })}
    </Slider>
  );
};
