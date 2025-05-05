import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { recipesData } from '@/data/recipesData.tsx';
import { Helmet } from 'react-helmet-async'; // Gestion du head du document
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Recipe() {
  const { recipeId } = useParams(); // Récupération de l'ID du projet depuis l'URL
  const navigate = useNavigate(); // Hook pour naviguer programmaticalement
  const [idFound, setIdFound] = useState(false); // État pour vérifier si l'ID est trouvé
  const [selectedQuantity, setSelectedQuantity] = useState(1); // État pour la quantité sélectionnée

  const numericRecipeId = recipeId ? parseInt(recipeId, 10) : undefined; // Conversion de l'ID en nombre
  const recipeData = recipesData.find((recipe) => recipe.id === numericRecipeId); // Recherche des données du projet

  useEffect(() => {
    setIdFound(!!recipeData); // Mise à jour de l'état si le projet est trouvé
    if (!recipeData) {
      navigate('/notfound', { replace: true }); // Redirection si le projet n'existe pas
    } else {
      setSelectedQuantity(recipeData.portions); // Mise à jour de selectedQuantity avec portions
    }
  }, [recipeData, navigate]);

  if (!idFound || !recipeData) return null; // Affichage nul si l'ID n'est pas trouvé

  const { title, portions, ingredients, image, instructions, nb } = recipeData; // Déstructuration des données du projet

  // Définir les options en fonction de l'ID de la recette
  const quantityOptions = numericRecipeId === 1
    ? [6, 12, 18, 24, 30]
    : numericRecipeId === 4
      ? [...Array(30).keys()].map(num => (num + 1) * 2) // Options pour l'ID 4 : 2, 4, 6, ..., 30
      : [...Array(30).keys()].map(num => num + 1); // Options par défaut : 1, 2, 3, ..., 10

  // Calcul du facteur de multiplication pour la recette avec l'ID 1
  const multiplicationFactor = numericRecipeId === 1 ? selectedQuantity / 6 : selectedQuantity / portions;

  return (
    <div className="">
      <Helmet>
        <title>{title} - Recette</title>
      </Helmet>
      <NavLink to="/recipes" className="ml-7 text-2xl">
        <FontAwesomeIcon icon={faArrowLeft} className="mt-12" />
      </NavLink>
      <section>
        <div>
          <img src={image} alt="" className="mx-auto" />
          <h2 className="text-center text-2xl font-bold md:text-4xl xl:text-5xl">{title}</h2>
        </div>
        <div className="mt-16">
          <h3 className="relief-tag px-7 py-2">Ingrédients</h3>
          <div className="mt-5">
            <label>Nb de couverts :</label>
            <select
              name="selectedQuantity"
              className="ml-2 bg-black2 text-center"
              value={selectedQuantity}
              onChange={(event) => setSelectedQuantity(parseInt(event.target.value, 10))}
            >
              {quantityOptions.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <div className="mt-5">
              <ul>
                {ingredients.map((item, index) => (
                  <li key={index}>
                    {(item.quantity * multiplicationFactor)} {item.unit} {item.ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="relief-tag px-7 py-2">Instructions</h3>
          <ol className="mt-5">
            {instructions.map((instruction, index) => (
              <li key={index} className="mt-2.5">
                <p className="font-bold underline underline-offset-4">Étape {index + 1}</p>
                {instruction}
              </li>
            ))}
          </ol>
          {nb && (
            <div className="mt-12">
              <h3 className="relief-tag px-7 py-2">Note perso</h3>
              <p className="mt-5">{nb}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Recipe;
