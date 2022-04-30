import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '@/styles';
import dinosaurImg from '@/assets/home-dinosaur.png';

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Dinosaur = styled.div`
  width: clamp(200px, 20%, 600px);
  aspect-ratio: 1;
  background: url(${dinosaurImg}) no-repeat center / contain;
  margin-bottom: 2rem;
  animation: ${rotateAnimation} 5s infinite
    cubic-bezier(0.34, 1.56, 0.64, 1);
`;
const Title = styled.h1`
  font-size: calc(8px + 2vmin);
  color: ${colors.gray150};
  margin-bottom: 2rem;
`;
const SubTitle = styled.h2`
  font-size: calc(2px + 2vmin);
  color: ${colors.gray150};
`;
const Button = styled.div`
  color: ${colors.gray800};
  font-size: calc(-4px + 2vmin); //14px
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  background: ${colors.gray100};
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: ${colors.gray200};
  }
  &:active {
    background: ${colors.gray400};
  }
`;

export const Home = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
    setCount(count + 1);
  };
  return (
    <Container>
      <Dinosaur />
      <Title> Welcome to the Jurassic World!</Title>
      <Button onClick={handleCounter}>Add Dinosaur</Button>
      <SubTitle>There are {count} dinosaurs!</SubTitle>
    </Container>
  );
};
