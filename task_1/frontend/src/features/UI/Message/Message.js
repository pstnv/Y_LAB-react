
const Message = ({ children, ...otherProps }) => {
    return <div {...otherProps}>{children}</div>;
};

export default Message;
