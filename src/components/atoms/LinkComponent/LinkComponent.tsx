import { Link } from "react-router-dom";

export interface LinkComponentProps {
    name: string;
    to: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
};

export const LinkComponent = ({name, to}: LinkComponentProps) => {
    const styles = {}; 
    
    return (
        <Link to={to} className={`linkComponent ${styles}`}>{name}</Link>
    );
}