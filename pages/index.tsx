import axios from 'axios';
import FeedHomeContainer from '../modules/FeedHomeContainer';

const feed = (props: any) => {
    const { data } = props;
    return (
       <FeedHomeContainer data={data}/>
    )
}

export async function getStaticProps() {
    const { data } = await axios.get('https://reqres.in/api/users')
    return {
        props: data
    }
}

export default feed;