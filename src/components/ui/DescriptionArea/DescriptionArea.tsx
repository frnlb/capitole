import "./DescriptionArea.scss"

export const DescriptionArea = ({children}: {children:React.ReactNode[]}) => {
  return (
    <div className="description-area">{children}</div>
  )
};