import React, { HTMLAttributes } from 'react';
import { makeStyles, useTheme } from '@material-ui/core';

export type SectionProps = {
  color?: 'primary' | 'secondary' | 'grey' | 'white';
  crop: boolean;
};

const useStyles = makeStyles({
  section: {
    position: 'relative',
  },
});

const Section: React.FC<SectionProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const { color, crop, ...rest } = props;
  const theme = useTheme();

  const colors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    grey: theme.palette.background.paper,
    white: theme.palette.common.white,
  };

  return (
    <section style={{ background: colors[color] }} {...rest}>
      {children}
      {crop && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 30"
          style={{ fill: colors[color] }}>
          <g id="Calque_2" data-name="Calque 2">
            <g id="Calque_1-2" data-name="Calque 1">
              <polygon points="50 30 0 0 100 0 50 30" />
              <polygon points="150 30 100 0 200 0 150 30" />
              <polygon points="250 30 200 0 300 0 250 30" />
            </g>
          </g>
        </svg>
      )}
    </section>
  );
};

export default Section;
