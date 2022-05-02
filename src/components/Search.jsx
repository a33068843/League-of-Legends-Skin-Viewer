import styled from 'styled-components';
import { colors } from '@/styles';

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 20px 40px;
  background: ${colors.black}${colors.opacity80};
  backdrop-filter: blur(4px);
  z-index: 99;
`;
const Input = styled.input`
  all: unset;
  padding: 10px 16px 8px;
  background: ${colors.white}${colors.opacity10};
  border: 1px solid ${colors.white}${colors.opacity20};
  border-radius: 4px;
  color: ${colors.white};
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
`;

export const Search = ({ setSearchText }) => {
  return (
    <Container>
      <Input
        placeholder={`請搜尋英雄`}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </Container>
  );
};
