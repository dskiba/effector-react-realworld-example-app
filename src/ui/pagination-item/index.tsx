import React from 'react';
import { ButtonProps } from '../button';
import './index.css';

type Props = ButtonProps &
  Readonly<{
    active: boolean;
  }>;

export const PatinationItem: React.FC<Props> = ({
  active,
  onClick,
  children,
}) => (
  <button
    className="pagination-item"
    data-active={active}
    type="button"
    onClick={onClick}>
    <span className="page-link">{children}</span>
  </button>
);
