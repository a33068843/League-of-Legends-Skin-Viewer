import styled from 'styled-components';
import { colors } from '@/styles';
import { baseUrl, version } from '@/api';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: flex-end;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    div {
      opacity: 1;
    }
  }
`;
const Photo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transform: scale(1.1);
`;
const Detail = styled.div`
  position: relative;
  opacity: 0;
  height: calc(80%);
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  background: linear-gradient(
    0deg,
    rgba(12, 12, 24, 0.8) 0%,
    rgba(12, 12, 24, 0) 100%
  );
  transition: 0.2s;
`;
const Title = styled.h3`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;
const Name = styled.h2`
  color: ${colors.gray100};
  font-size: 24px;
  font-weight: 500;
`;

export const Card = ({ id, name, title, children }) => {
  const championArt = (id) => {
    return `${baseUrl}/img/champion/loading/${id}_0.jpg`;
  };

  return (
    <Link to={`/${id}`}>
      <Container>
        <Photo src={championArt(id)} />
        <Detail>
          <Title>{title}</Title>
          <Name>{name}</Name>
        </Detail>
      </Container>
    </Link>
  );
};
