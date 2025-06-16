import { useSession } from '@/Savoria/lib/sessionContext.tsx';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient.ts';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';
import Banner from '@/Portfolio/components/banner.tsx';

function MyRecipes() {
  const { session } = useSession();
  const [recipesCount, setRecipesCount] = useState(0);

  useEffect(() => {
    async function getMyRecipes() {
      if (!session?.user) {
        return;
      }

      const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .eq('created_by', session.user.id);

      if (error) {
        console.error('Error fetching recipes:', error);
      } else {
        console.log('My Home:', data);
        setRecipesCount(data.length);
      }
    }

    getMyRecipes();
  }, [session]);

  return (
    <div>
      <Helmet>
        <title>Mes recettes - Portfolio Steve Lieuron</title>
      </Helmet>
      <NavLink to="/Savoria/account" className="ml-7 text-2xl">
        <FontAwesomeIcon icon={faArrowLeft} className="mt-12" />
      </NavLink>
      <Banner title="Mes recettes" />
      <section>
        <div
          className="mt-20 grid auto-cols-auto justify-center gap-5 px-4 text-center text-lg md:px-8 md:text-2xl xl:text-3xl">
          <NavLink to="/Savoria/addrecipe"
                   className="rounded-2xl border border-white bg-black2 p-4 hover:bg-white hover:text-black1">
            Ajouter une recette
          </NavLink>
          {
            recipesCount > 0 &&
            <NavLink to="/editrecipe"
                     className="rounded-2xl border border-white bg-black2 p-4 hover:bg-white hover:text-black1">
            </NavLink>
          }
        </div>
      </section>
    </div>
  );
}

export default MyRecipes;