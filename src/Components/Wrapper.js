const Wrapper = ({components}) => {
    return (
        <>
            {components.map((component) => {
                return component;
            })}
        </>
    );
}

export default Wrapper;