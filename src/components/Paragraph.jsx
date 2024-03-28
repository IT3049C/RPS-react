import { Button } from "./Button2";

export const Paragraph = ({ children, color }) => {
    
    return <div style={{ color: color }}>
        {children}
        <Button />
    </div>;
};
