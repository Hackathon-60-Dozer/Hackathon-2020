import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faShoppingBasket,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [deployed, setDeployed] = useState(false);

  return (
    <Wrapper>
      <MainContainer>
        <FontAwesomeIcon
          id={'bars'}
          icon={faBars}
          onClick={() => {
            setDeployed(!deployed);
          }}
        />

        <a href="">
          <img src="/static/resources/LOGO1.svg" alt="" />
        </a>

        <div className={'icons-container'}>
          <a href="">
            <FontAwesomeIcon icon={faUserCircle} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </a>
        </div>
      </MainContainer>

      <Menu className={deployed ? 'deployed' : ''}>
        <section>SEARCH BAR</section>

        <section>Client</section>

        <section>Commerçant</section>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  z-index: 2;
`;

const Menu = styled.div`
  color: ${(props) => props.theme.colors.light};
  padding: 20px;
  padding-bottom: 45px;
  width: 100%;
  z-index: -1;
  background: ${(props) => props.theme.colors.secondary};
  position: absolute;
  transform: translate3d(0, -100%, 0);
  transition: 0.7s;
  display: flex;
  justify-content: space-around;

  &.deployed {
    transform: translate3d(0, 0, 0);
    padding-bottom: 20px;
  }

  section {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MainContainer = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
  height: 100px;
  width: 100%;
  background: ${(props) => props.theme.colors.light};
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 150px;
    height: auto;
  }

  #bars {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  .icons-container svg {
    margin: 9px;
  }
`;

export default Navbar;
