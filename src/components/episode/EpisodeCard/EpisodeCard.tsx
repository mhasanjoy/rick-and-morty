import './EpisodeCard.css';

const EpisodeCard = (props: any) => {
    const { id, name, air_date, episode, characters, created } = props.episode;

    return (
        <section className="col-xl-3 col-lg-4 col-sm-6">
            <div className="card episode" style={{ width: '100%' }}>
                <div className="card-body">
                    <p><strong>ID:</strong> {id}</p>
                    <p><strong>Name: </strong>{name}</p>
                    <p><strong>Air Date: </strong>{air_date}</p>
                    <p><strong>Episode: </strong>{episode}</p>
                    <p><strong>Characters: </strong></p>
                    {
                        characters.map((character: any, index: number) => <span key={index}>{character.name}, </span>)
                    }
                    <br /><br />
                    <p><strong>Created:</strong> {created}</p>
                </div>
            </div>
        </section>
    );
};

export default EpisodeCard;