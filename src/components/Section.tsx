import React, { HTMLAttributes } from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import clsx from 'clsx';

export type SectionProps = {
  color?: 'primary' | 'secondary' | 'grey' | 'white';
  disableCrop?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    position: 'relative',
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(12, 0),
  },
  crop: {
    position: 'absolute',
    right: '10%',
    bottom: 0,
    height: 20,
    transform: 'translateY(100%)',
    zIndex: 100,
  },
}));

const Section: React.FC<SectionProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const styles = useStyles();
  const { color, disableCrop, ...rest } = props;
  const theme = useTheme();

  const colors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    grey: theme.palette.background.paper,
    white: theme.palette.common.white,
  };

  return (
    <section
      {...rest}
      style={{ background: colors[color], ...props.style }}
      className={clsx(styles.section, props.className)}>
      {children}
      {!disableCrop && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 30"
          style={{ fill: colors[color] }}
          className={styles.crop}>
          <g id="Calque_1-2" data-name="Calque 1">
            <polygon points="66.67 30 0 0 133.33 0 66.67 30" />
            <polygon points="200 30 133.33 0 266.67 0 200 30" />
            <polygon points="333.33 30 266.67 0 400 0 333.33 30" />
          </g>
        </svg>
      )}
    </section>
  );
};

export default Section;
