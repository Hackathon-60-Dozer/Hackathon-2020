import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import { colors } from '@theme';
import { makeStyles, Theme, Link as MUILink } from '@material-ui/core';
import clsx from 'clsx';
import { SearchBox } from 'react-instantsearch-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    color: colors.gray,
    background: colors.secondary,
    padding: theme.spacing(5),
    display: 'flex',
    justifyContent: 'space-around',
    position: 'absolute',
    zIndex: theme.zIndex.appBar - 1,
  },
  navLink: {
    fontWeight: "bold",
    fontSize: 25,
    color: theme.palette.background.paper
  }
}));

export type NavProps = HTMLAttributes<HTMLDivElement>;

const Nav: React.FC<NavProps> = ({ ...props }) => {
  const styles = useStyles();

  return (
    <nav className={styles.root} {...props}>
      <Link href={''} passHref>
        <MUILink className={styles.navLink}>Mes commandes</MUILink>
      </Link>

      <Link href={''} passHref>
        <MUILink className={styles.navLink}>Liste des produits</MUILink>
      </Link>

      <Link href={''} passHref>
        <MUILink className={styles.navLink}>Liste des commerçant</MUILink>
      </Link>
    </nav>
  );
};

// const Menu = styled.div`
//   color: ${(props) => props.theme.colors.light};
//   padding: 20px;
//   padding-bottom: 45px;
//   width: 100%;
//   z-index: -1;
//   background: ${(props) => props.theme.colors.secondary};
//   position: absolute;
//   transform: translate3d(0, -100%, 0);
//   transition: 0.7s;
//   display: flex;
//   justify-content: space-around;
//
//   &.deployed {
//     transform: translate3d(0, 0, 0);
//     padding-bottom: 20px;
//   }
//
//   section {
//     margin: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;
//

export default Nav;
