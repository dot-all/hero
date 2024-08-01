import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>;
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <Link to={`/hero/${id}`} className="card-link text-decoration-none">
                <div className="card h-100 shadow-sm" style={{ borderRadius: "15px", overflow:"hidden" }}>
                    <div className="row g-0 h-100">
                        <div className="col-md-4">
                            <img src={heroImageUrl} className="img-fluid rounded-start h-100 object-fit-cover" alt={superhero} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column h-100">
                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alter_ego}</p>
                                {/* <CharactersByHero characters={characters} alter_ego={alter_ego} /> */}
                                <p className="card-text mt-auto">
                                    <small className="text-muted">{first_appearance}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}