import { createElement, type FC } from 'react';

import type { ITitleProps } from './title.props';
import s from './title.module.scss';
import clsx from 'clsx';

export const Title: FC<ITitleProps> = props => {
  return createElement(
    props.tag || 'h2',
    {
      className: clsx(s.title, props.className),
      style: { color: `var(--${props.color})` },
    },
    props.children
  );
};
