import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactChild } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  btnSize?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode | ReactChild
  href?: string
}

// 扩展按钮属性，如 onClick...
// & ： typeScript 中联合类型，表示两种类型都要。 | 或：两个取其中一个
// Partial<> : typeScript 中提供，把属性变成可选的
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type IButtonProps = Partial<NativeButtonProps & AnchorButtonProps>


const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    btnType,
    disabled,
    btnSize,
    children,
    href,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: !!btnType,
    [`btn-${btnSize}`]: !!btnSize,
    disabled: btnType === 'link' && disabled,
  })
  
  // link类型按钮，是个a标签
  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  }
  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button
