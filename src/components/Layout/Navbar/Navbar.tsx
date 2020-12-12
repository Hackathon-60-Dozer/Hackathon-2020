import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faShoppingBasket, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { Transition } from 'react-transition-group';

const Navbar: React.FC = () => {

  const [deployed, setDeployed] = useState(false);
  const transitionStyles = {
    entering: { transform: "translate3d(0, 100%, 0)" },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

  return (
    <MainContainer>
      <FontAwesomeIcon
        id={"bars"}
        icon={faBars}
        onClick={() => {
          setDeployed(!deployed)
        }}
      />

      <a href="">
        <img src="/static/resources/LOGO1.svg" alt="" />
      </a>

      <div className={"icons-container"}>
        <a href="">
          <FontAwesomeIcon icon={faUserCircle}/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faShoppingBasket}/>
        </a>
      </div>

    </MainContainer>
  )
}

const MainContainer = styled.div `
  color: #e18380;
  font-size: 25px;
  height: 100px;
  width: 100%;
  background: #d7e8e1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;

  .navbar-container {
    width: 100%;
    padding: 20px;
    z-index: 1;
  }

  img {
    width: 150px;
    height: auto;
  }

  #bars {
    color: #209d83;
  }

  .icons-container svg {
    margin: 9px;
  }
`

export default Navbar;
