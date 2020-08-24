import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactChild } from 'react';
export declare type ButtonSize = 'lg' | 'sm';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    btnSize?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode | ReactChild;
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type IButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: FC<IButtonProps>;
export default Button;
