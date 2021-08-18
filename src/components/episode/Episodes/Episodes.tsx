import EpisodeCard from "../EpisodeCard/EpisodeCard";

const Episodes = (props: any) => {
    const episodes = props.data?.episodes?.results;

    return (
        <div className="container mt-5 mb-5 pb-5">
            <main className="row g-5 text-center d-flex justify-content-center">
                {
                    episodes && episodes.map((episode: any) => <EpisodeCard key={episode.id} episode={episode} />)
                }
            </main>
        </div>
    );
};

export default Episodes;