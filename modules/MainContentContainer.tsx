import MainContent from '../presentations/organisms/MainContent';

const MainContentContainer = (props:any) => {
    const { content } = props
    return (
        <>
            <MainContent content={content}/>
        </>
    )
}

export default MainContentContainer;