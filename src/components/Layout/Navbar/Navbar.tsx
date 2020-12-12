import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faShoppingBasket, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { Transition } from 'react-transition-group';
import { colors } from "@theme";

const Navbar: React.FC = () => {

  const [deployed, setDeployed] = useState(false);
  const transitionStyles = {
    entering: { transform: "translate3d(12px, 50%, 3em)" },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

  const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          I'm a fade Transition!
        </div>
      )}
    </Transition>
  );

  return (
    <Wrapper>

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

      <Menu className={deployed ? "deployed" : ""}>

        <section>
          SEARCH BAR
        </section>

        <section>
          Client
        </section>

        <section>
          Commerçant
        </section>

      </Menu>

    </Wrapper>
  )
}

const Wrapper = styled.div `
  width: 100%;
  position: sticky;
  z-index: 2;
`

const Menu = styled.div `
  color: ${colors.light};
  width: 100%;
  padding: 20px;
  z-index: -1;
  background: ${colors.secondary};
  position: absolute;
  transform: translate3d(0,-100%,0);
  transition: 0.7s;
  padding-bottom: 45px;
  display: flex;
  justify-content: space-around;

  &.deployed {
    transform: translate3d(0,0,0);
    padding-bottom: 20px;
  }

  section {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const MainContainer = styled.div `
  color: ${colors.primary};
  font-size: 25px;
  height: 100px;
  width: 100%;
  background: ${colors.light};
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 150px;
    height: auto;
  }

  #bars {
    color: ${colors.secondary};
    cursor: pointer;
  }

  .icons-container svg {
    margin: 9px;
  }
`

export default Navbar;
