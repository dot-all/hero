import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="container" style={{marginTop: "6em"}}>
      <div className="row">
        <div className="col-12 col-md-4 mb-3">
          <img 
            src={`/assets/heroes/${id}.jpg`} 
            alt={hero.superhero}
            className="img-fluid img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-12 col-md-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
            <li className="list-group-item"> <b>Editor:</b> {hero.publisher} </li>
            <li className="list-group-item"> <b>Primera aparición:</b> {hero.first_appearance} </li>
          </ul>

          <h5 className="mt-3">Personajes</h5>
          <p>{hero.characters}</p>

          <button 
            className="btn btn-primary rounded-pill mb-4 px-4 py-2"
            onClick={onNavigateBack}
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  )
}
