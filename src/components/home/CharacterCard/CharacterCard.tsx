import './CharacterCard.css';

const CharacterCard = (props: any) => {
    const { image, name, id, status, species, type, gender, origin, location, episode, created } = props.character;
    return (
        <section className="col-xl-3 col-lg-4 col-sm-6">
            <div className="card character" style={{ width: '100%' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><strong>{name}</strong></h5>
                    <p><strong>ID:</strong> {id}</p>
                    <p><strong>Status:</strong> {status}</p>
                    <p><strong>Species:</strong> {species}</p>
                    {
                        type && <p><strong>Type:</strong> {type}</p>
                    }
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Origin:</strong> {origin.name}</p>
                    <p><strong>Location:</strong> {location.name}</p>
                    <p><strong>Episodes: </strong></p>
                    {
                        episode.map((ep: any, index: number) => <span key={index}>{ep.episode}, </span>)
                    }
                    <br /><br />
                    <p><strong>Created:</strong> {created}</p>
                </div>
            </div>
        </section>
    );
};

export default CharacterCard;