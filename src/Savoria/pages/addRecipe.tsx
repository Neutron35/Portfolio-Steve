import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Banner from '@/Portfolio/components/banner.tsx';
import { useEffect, useState } from 'react';
import { supabase } from '@/Savoria/lib/supabaseClient.ts';
import { useSession } from '@/Savoria/lib/sessionContext.tsx';

export default function AddRecipe() {
  const { session } = useSession();
  const userId = session?.user.id;

  const [title, setTitle] = useState('');
  const [personCount, setPersonCount] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [customIngredient, setCustomIngredient] = useState('');
  const [predefinedIngredients, setPredefinedIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Charger les ingrédients prédéfinis depuis la base de données
  useEffect(() => {
    async function fetchIngredients() {
      const { data, error } = await supabase
        .from('recipe_ingredients_list')
        .select('*');

      if (error) {
        console.error('Erreur lors du chargement des ingrédients :', error.message);
      } else {
        setPredefinedIngredients(data);
      }
    }

    fetchIngredients();
  }, []);

  useEffect(() => {
    const filteredAndSorted = predefinedIngredients
      .filter(ing => ing.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        if (a.name.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
          !b.name.toLowerCase().startsWith(searchQuery.toLowerCase())) {
          return -1;
        }
        if (!a.name.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
          b.name.toLowerCase().startsWith(searchQuery.toLowerCase())) {
          return 1;
        }
        return a.name.localeCompare(b.name);
      });

    setFilteredIngredients(filteredAndSorted);
  }, [searchQuery, predefinedIngredients]);

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, { ...ingredient, quantity: '', unit: '' }]);
    setSearchQuery(''); // Clear the search input after adding
    setIsInputFocused(false); // Hide the dropdown after adding
  };

  const handleAddCustomIngredient = async () => {
    if (customIngredient.trim()) {
      const { error, data } = await supabase
        .from('recipe_ingredients_list')
        .insert([{ name: customIngredient.trim() }]);

      if (error) {
        alert('Erreur lors de l\'ajout de l\'ingrédient personnalisé.');
      } else {
        addIngredient({ id: data[0].id, name: customIngredient.trim() });
        setCustomIngredient('');
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = null;
    if (imageFile) {
      const filePath = `${Math.random()}.${imageFile.name.split('.').pop()}`;
      const { error: uploadError } = await supabase.storage
        .from('recipe-images')
        .upload(filePath, imageFile);

      if (uploadError) {
        alert('Erreur lors du téléchargement de l\'image.');
        return;
      }
      imageUrl = filePath;
    }

    const { error: insertError } = await supabase
      .from('user_recipes')
      .insert([{
        user_id: userId,
        title,
        person_count: personCount,
        instructions,
        image_url: imageUrl,
      }])
      .select();

    if (insertError) {
      alert('Erreur lors de l\'ajout de la recette.');
      return;
    }

    const recipeId = insertError.data[0].id;

    for (const ingredient of ingredients) {
      await supabase.from('user_recipe_ingredients').insert([{
        recipe_id: recipeId,
        ingredient_id: ingredient.id,
        quantity: ingredient.quantity,
        unit: ingredient.unit, // Ajout de l'unité
      }]);
    }

    alert('Recette ajoutée avec succès!');
  };

  return (
    <div>
      <Helmet>
        <title>Nouvelle recette - Portfolio Steve Lieuron</title>
      </Helmet>
      <NavLink to="/Savoria/myrecipes" className="ml-7 text-2xl">
        <FontAwesomeIcon icon={faArrowLeft} className="mt-12" />
      </NavLink>
      <Banner title="Nouvelle recette" />
      <div className="mx-auto max-w-lg rounded-lg p-4 shadow-md">
        <h3 className="mb-4 text-2xl font-semibold">Ajouter une Recette</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Titre</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="input w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block">Pour combien de personnes ?</label>
            <input
              type="number"
              value={personCount}
              onChange={(e) => setPersonCount(e.target.value)}
              required
              className="input w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full rounded-lg border border-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block">Ingrédients</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
                placeholder="Rechercher ou ajouter un ingrédient..."
                className="input w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {isInputFocused && (
                <ul
                  className="input absolute z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-200 shadow-md">
                  {filteredIngredients.map(ing => (
                    <li
                      key={ing.id}
                      onClick={() => addIngredient(ing)}
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100 hover:text-black"
                    >
                      {ing.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ul className="mt-2 space-y-2">
              {ingredients.map((ing, index) => (
                <li key={index} className="flex items-center justify-between space-x-2">
                  <span>{ing.name}</span>
                  <input
                    type="text"
                    value={ing.quantity}
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index].quantity = e.target.value;
                      setIngredients(newIngredients);
                    }}
                    placeholder="Quantité"
                    className="input w-16 rounded-lg border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="text"
                    value={ing.unit}
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index].unit = e.target.value;
                      setIngredients(newIngredients);
                    }}
                    placeholder="Unité"
                    className="input w-16 rounded-lg border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </li>
              ))}
            </ul>
            <div>
              <label className="block">Ou ajouter un nouvel ingrédient à la liste</label>
              <input
                type="text"
                value={customIngredient}
                onChange={(e) => setCustomIngredient(e.target.value)}
                className="input w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="button"
                onClick={handleAddCustomIngredient}
                className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Ajouter
              </button>
            </div>
          </div>
          <div>
            <label className="block">Instructions</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
              className="input h-32 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Ajouter la recette
          </button>
        </form>
      </div>
    </div>
  );
}
