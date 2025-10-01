import { ReactHTMLElement } from "react"

export interface ImageComponentProps extends React.ImgHTMLAttributes<HTMLImageElement> {};



export const ImageComponent = ({alt}:React.ImgHTMLAttributes<HTMLImageElement> ) => {
  return (
    <img alt={alt} loading="lazy"/>
  )
}
