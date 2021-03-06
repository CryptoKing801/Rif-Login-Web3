// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'
import { BUTTON_CLASSNAME } from '../../constants/cssSelectors'
import { typeShared } from './Typography'

interface ButtonInterface {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const ButtonWrapper = styled.button`
  ${typeShared}
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  background: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.primaryText};
  font-size: 14px;
  cursor: pointer;
  :hover:enabled {
    background: ${props => props.theme.primaryHoverBackground};
  };
  :disabled {
    opacity: 0.4;
    cursor: auto;
  };
`

export const Button: React.FC<ButtonInterface> = ({ children, className, disabled, onClick }) => (
  <ButtonWrapper
    onClick={onClick}
    className={className ? `${BUTTON_CLASSNAME} ${className}` : BUTTON_CLASSNAME}
    disabled={disabled}
  >
    {children}
  </ButtonWrapper>
)
