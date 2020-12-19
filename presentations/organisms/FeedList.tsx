import { cloneElement } from 'react';

const FeedList = (props: any) => {
    return (
        <div className="feedList" style={{
            backgroundColor: 'orange',
            padding: '10px'}}
        >
            { props.children }
        </div>
    )
};

export default FeedList;