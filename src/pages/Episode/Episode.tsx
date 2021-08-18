import { useQuery } from '@apollo/client';
import Fallback from '../../components/common/Fallback/Fallback';
import Episodes from '../../components/episode/Episodes/Episodes';
import { GET_EPISODES_QUERY } from '../../graphql/queries';

const Episode = () => {
    const { loading, error, data } = useQuery(GET_EPISODES_QUERY);

    return (
        <>
        {
            loading && <Fallback />
        }
        {
            error && <h1 className="text-center">Error</h1>
        }
            <Episodes data={data} />
        </>
    );
};

export default Episode;