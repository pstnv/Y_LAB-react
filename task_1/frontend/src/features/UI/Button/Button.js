const Button = (props) => {
    const { children, type = "button", ...restProps } = props;
    return (
        <button type={type} {...restProps}>
            {children}
        </button>
    );
};

export default Button;
