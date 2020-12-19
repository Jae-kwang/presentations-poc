import WriterInfo from '../presentations/organisms/WriterInfo';

const WriterInfoContainer = (props:any) => {
    const { user } = props
    return (
        <>
            <WriterInfo user={user}/>
        </>
    )
}

export default WriterInfoContainer;