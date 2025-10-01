import "./DisplayWrapper.scss";

export interface DisplayWrapperProps {
  children: React.ReactNode[] | React.ReactNode;
}

export const DisplayWrapper = ({children}: {children:React.ReactNode[]}) => {
    return (
    <div className="description-area">{children}</div>
  )
};