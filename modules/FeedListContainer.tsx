import FeedList from '../presentations/organisms/FeedList';
import FeedItemContainer from '../modules/FeedItemContainer';

const FeedListContainer = (props: any) => {
    const { feeds } = props
    return (
        <>
            <FeedList>
                { feeds.map((feed: any) => <FeedItemContainer key={feed.id} feed={feed} />) }
            </FeedList>
        </>
    )
}

export default FeedListContainer;