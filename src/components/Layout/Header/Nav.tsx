import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import { colors } from '@src/theme';
import {
  makeStyles,
  Theme,
  Link as MUILink,
  InputAdornment,
} from '@material-ui/core';
import routes from '@src/constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';

const AddressField = dynamic(
  () => import('@src/components/Form/Field/Address'),
  {
    ssr: false,
  }
);

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
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',

      '& > *': {
        marginBottom: theme.spacing(2),
      },
    },
  },
  navLink: {
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    color: theme.palette.background.paper,
  },
}));

export type NavProps = HTMLAttributes<HTMLDivElement>;

const Nav: React.FC<NavProps> = ({ ...props }) => {
  const styles = useStyles();

  return (
    <nav className={styles.root} {...props}>
      <AddressField
        placeholder={'Saisissez votre recherche'}
        variant={'outlined'}
        color={'primary'}
        id={'address-search-input'}
        name={'address-search-input'}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon icon={faSearch} />
            </InputAdornment>
          ),
        }}
      />

      <Link href={routes.accountCommands.url} passHref>
        <MUILink className={styles.navLink}>Mes commandes</MUILink>
      </Link>

      <Link href={routes.productList.url} passHref>
        <MUILink className={styles.navLink}>Liste des produits</MUILink>
      </Link>

      <Link href={routes.shopList.url} passHref>
        <MUILink className={styles.navLink}>Liste des commerçant</MUILink>
      </Link>
    </nav>
  );
};

export default Nav;
