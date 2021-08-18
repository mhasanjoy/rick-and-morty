import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_QUERY } from '../../graphql/queries';
import Characters from '../../components/home/Characters/Characters';
import Fallback from '../../components/common/Fallback/Fallback';

const Home = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY);

    return (
        <>
        {
            loading && <Fallback />
        }
        {
            error && <h1 className="text-center">Error</h1>
        }
            <Characters data={data} />
        </>
    );
};

export default Home;