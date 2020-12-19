import FeedItem from '../presentations/organisms/FeedItem';
import WriterInfoContainer from './WriterInfoContainer';
import MainContentContainer from './MainContentContainer';

const FeedItemContainer = (props: any) => {
    const { feed } = props
    const text = "안녕하세요 메인 컨텐츠입니다."
    return (
        <>
            <FeedItem>
                <WriterInfoContainer user={feed}/> 
                <MainContentContainer content={text} />
            </FeedItem>
        </>
    )
}

export default FeedItemContainer;