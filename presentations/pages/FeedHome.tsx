const FeedHome = (props: any) => {
    return (
        <div style={{
            backgroundColor: 'red',
            padding: '10px'}}
        >
            { props.children }
        </div>
    )
};

export default FeedHome;