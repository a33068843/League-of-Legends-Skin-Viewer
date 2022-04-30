import styled from 'styled-components';
import { colors, size } from '@/styles';
import {
  Navigate,
  Routes,
  Route,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { Home } from '@/pages';

const BodyContainer = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: ${colors.background};
`;

export const Base = () => {
  return (
    <BodyContainer>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BodyContainer>
  );
};
