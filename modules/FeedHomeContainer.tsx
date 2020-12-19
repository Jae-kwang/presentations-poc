import FeedHome from '../presentations/pages/FeedHome';
import PostWriterContainer from '../modules/PostWriterContainer';
import FeedListContainer from '../modules/FeedListContainer';

const FeedHomeContainer = (props: any) => {
    const { data: feeds } = props
    return (
        <>
            <FeedHome>
                <PostWriterContainer />
                <FeedListContainer feeds={feeds}/>
            </FeedHome>
        </>
    )
}

export default FeedHomeContainer;