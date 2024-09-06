const InputWithLabel = (props) => {
    const { id, children, ...restProps } = props;
    return (
        <>
            {id && (
                <label htmlFor={id}>
                    {children}
                    <input {...restProps} id={id} />
                </label>
            )}
            {!id && <input {...restProps} />}
        </>
    );
};

export default InputWithLabel;
