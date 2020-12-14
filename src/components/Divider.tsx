import React, { HTMLAttributes } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import MUIDivider from '@material-ui/core/Divider';

export type SectionProps = {
  color?: 'primary' | 'secondary' | 'grey' | 'white';
  disableCrop?: boolean;
  margin?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: '90%',
  },
  crop: {
    position: 'absolute',
    right: '10%',
    bottom: 0,
    height: 10,
    transform: 'translateY(100%)',
    zIndex: 100,
  },
}));

const Divider: React.FC<SectionProps & HTMLAttributes<HTMLDivElement>> = (
  props
) => {
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
    <div className={styles.root} style={{ margin: props.margin }} {...rest}>
      <MUIDivider style={{ border: '1px solid' + colors[color] }} />
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
    </div>
  );
};

export default Divider;
