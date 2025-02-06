import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
  loading?: boolean;
  tooltip?: string;
  ariaLabel?: string;
  dataTestId?: string;
  fullWidth?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
  form?: string;
  margin?: string;
  padding?: string;
}

const buttonVariants = {
  primary: css`
    color: white;
    border: none;
  `,
  secondary: css`
    color: white;
    border: none;
    font-weight: 600;
  `,
  tertiary: css`
    color: white;
    border: 2px solid #fff;
    font-weight: 600;
    border-radius: 5px;
  `,
  danger: css`
    color: white;
    border: none;
  `,
  success: css`
    color: white;
    border: none;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0.375rem 0.75rem'};
  font-size: ${({ size }) =>
    size === 'small' ? '0.875rem' : size === 'large' ? '1.25rem' : '1rem'}
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
  ${({ variant }) => buttonVariants[variant || 'primary']}

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  type = 'button',
  disabled = false,
  icon,
  size = 'medium',
  variant = 'primary',
  loading = false,
  tooltip,
  ariaLabel,
  dataTestId,
  fullWidth = false,
  tabIndex,
  autoFocus = false,
  form,
  margin,
  padding,
}) => {
  return (
    <StyledButton
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      data-testid={dataTestId}
      tabIndex={tabIndex}
      autoFocus={autoFocus}
      form={form}
      title={tooltip}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      margin={margin}
      padding={padding}
    >
      {loading ? 'Loading...' : icon}
      {children}
    </StyledButton>
  );
};
