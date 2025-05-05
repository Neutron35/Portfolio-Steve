import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Banner from '@/components/banner.tsx';

function AddRecipe() {
  const quantityOptions = [...Array(30).keys()].map(num => num + 1); // Options par défaut : 1, 2, 3, ..., 10
  return (
    <div>
      <Helmet>
        <title>Nouvelle recette - Portfolio Steve Lieuron</title>
      </Helmet>
      <NavLink to="/myrecipes" className="ml-7 text-2xl">
        <FontAwesomeIcon icon={faArrowLeft} className="mt-12" />
      </NavLink>
      <Banner title="Nouvelle recette" />
      <form>
        <label htmlFor="title">Titre de la recette</label>
        <input
          id="title"
          type="text"
          required
        />
        <label htmlFor="portions">Pour combien de personnes ?</label>
        <select
          name="portions"
          className="ml-2 bg-black2 text-center"
        >
          {quantityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default AddRecipe;