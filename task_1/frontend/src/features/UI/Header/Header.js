const Header = (props) => {
    const { children, ...restProps } = props;
    return <header {...restProps}>{children}</header>;
};

export default Header;
