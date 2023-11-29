import { Link } from 'react-router-dom';
import { type FC } from 'react';

import type { IAltLinkProps } from './alt-link.props';
import s from './alt-link.module.scss';

export const AltLink: FC<IAltLinkProps> = props => {
  return (
    <p className={s.textWrapper}>
      {props.text} <Link to={props.path}>{props.linkText}</Link>
    </p>
  );
};
