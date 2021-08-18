import LocationCard from "../LocationCard/LocationCard";

const Locations = (props: any) => {
    const locations = props.data?.locations?.results;

    return (
        <div className="container mt-5 mb-5 pb-5">
            <main className="row g-5 text-center d-flex justify-content-center">
                {
                    locations && locations.map((location: any) => <LocationCard key={location.id} location={location} />)
                }
            </main>
        </div>
    );
};

export default Locations;