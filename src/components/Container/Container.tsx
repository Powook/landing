import { ReactNode } from "react"
import './Container.css'
import cl from 'classnames'

export type ContainerProps = {
  children: ReactNode;
  containerWidth?: number | string;
  customClassName?:string
}

export function Container ({children, containerWidth, customClassName}: ContainerProps) {
  return <div className={ customClassName ? cl(customClassName, 'container') : 'container'} style={{width: containerWidth || 'auto'}}>
    {children}
  </div>
}