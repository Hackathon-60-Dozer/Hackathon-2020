import React, { useState } from 'react';
import {
  AppBar,
  Link as MUILink,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  Slide,
} from '@material-ui/core';
import Nav from '@components/Layout/Header/Nav';
import Link from 'next/link';
import routes from '@constants/routes';
import { useAuth } from '@hook/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUserCircle,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { Transition } from 'react-transition-group';

const toolbarHeight = 100;
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    height: toolbarHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    zIndex: theme.zIndex.appBar,
    padding: theme.spacing(3, 10),
    backgroundColor: theme.palette.background.paper,
  },
  logo: {
    maxWidth: 200,
    height: '100%',
  },
  user: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 56,
    height: 56,
    // color: theme.palette.secondary.main,

    '& .MuiIconButton-label': {
      width: '100%',
      height: '100%',

      '& svg': {
        width: '100%',
        height: '100%',
      },
    },
  },
}));

const duration = 700;
const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out, padding ${duration}ms ease-in-out`,
};

const transitionStyles = {
  entering: {
    transform: `translate3d(0, ${toolbarHeight}px, 0)`,
    paddingBottom: 45,
  },
  entered: {
    transform: `translate3d(0, ${toolbarHeight}px, 0)`,
    paddingBottom: 45,
  },
  exiting: { transform: `translate3d(0, 0, 0)`, paddingBottom: 20 },
  exited: { transform: `translate3d(0, 0, 0)`, paddingBottom: 20 },
};

const Header: React.FC = () => {
  const styles = useStyles();
  const { session } = useAuth();
  const phone = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const [deployed, setDeployed] = useState(false);

  return (
    <HideOnScroll>
      <AppBar className={styles.root} elevation={0} position={'sticky'}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            className={styles.icon}
            onClick={() => {
              setDeployed(!deployed);
            }}
            color={'secondary'}>
            <FontAwesomeIcon icon={faBars} />
          </IconButton>

          <Link href={routes.home.url} passHref>
            <a style={{ width: '100%', textAlign: 'center' }}>
              <img
                className={styles.logo}
                src={phone ? '/static/logo-full.svg' : '/static/logo.svg'}
                alt=""
              />
            </a>
          </Link>

          <div className={styles.user}>
            <Link
              href={(session ? routes.account : routes.signIn).url}
              passHref>
              <IconButton
                component={MUILink}
                color={'primary'}
                className={styles.icon}>
                <FontAwesomeIcon icon={faUserCircle} />
              </IconButton>
            </Link>
            <IconButton color={'primary'} className={styles.icon}>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </IconButton>
          </div>
        </Toolbar>

        <Transition in={deployed} timeout={duration}>
          {(state) => (
            <Nav
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            />
          )}
        </Transition>
      </AppBar>
    </HideOnScroll>
  );
};

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default Header;
