import CharacterCard from "../CharacterCard/CharacterCard";

const Characters = (props: any) => {
    const characters = props.data?.characters?.results;

    return (
        <div className="container mt-5 mb-5 pb-5">
            <main className="row g-5 text-center d-flex justify-content-center">
                {
                    characters && characters.map((character: any) => <CharacterCard key={character.id} character={character} />)
                }
            </main>
        </div>
    );
};

export default Characters;