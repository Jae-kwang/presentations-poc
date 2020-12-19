const FeedItem = (props: any) => {
    return (
        <div className="feedItem" style={{
            backgroundColor: 'yellow',
            padding: '10px'}}
        >
           { props.children } 
        </div>
    )
};

export default FeedItem;