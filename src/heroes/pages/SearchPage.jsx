import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  }

  return (
    <div className="container" style={{ marginTop: "4.5em" }}>
      <h1 className='mt-4 pt-4' style={{ fontSize:"30px" }}>Busca héroes</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-md-5 mb-4">
          <form onSubmit={onSearchSubmit}>
            <div className="position-relative">
              <input
                type="text"
                placeholder="Busca un héroe"
                className="form-control ps-5 search mb-3"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
                id='search'
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                viewBox="0 0 512 512"
                className="position-absolute top-50 translate-middle-y"
                style={{ left: '15px' }}
              >
                <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/>
              </svg>
            </div>
            
            <button className="btn btn-primary mt-1 px-4 py-2 rounded-pill">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-12 col-md-7">
          <h4>Resultados</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}>
            Ingresa el nombre de un héroe para iniciar la búsqueda
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </div>
  )
}