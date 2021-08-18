import { useQuery } from '@apollo/client';
import Fallback from '../../components/common/Fallback/Fallback';
import Locations from '../../components/location/Locations/Locations';
import { GET_LOCATIONS_QUERY } from '../../graphql/queries';

const Location = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS_QUERY);

    return (
        <>
        {
            loading && <Fallback />
        }
        {
            error && <h1 className="text-center mt-5">Error</h1>
        }
            <Locations data={data} />
        </>
    );
};

export default Location;