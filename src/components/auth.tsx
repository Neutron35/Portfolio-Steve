import { useState } from 'react';
import { supabase } from '../lib/supabaseClient.ts';
import { Helmet } from 'react-helmet-async';
import Banner from '@/components/banner.tsx';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.message || error.message);
    } else {
      alert('Vérifiez votre boîte mail pour pouvoir vous connecter !');
    }
    setLoading(false);
  };

  return (
    <div>
      <Helmet>
        <title>Connexion - Portfolio Steve Lieuron</title>
      </Helmet>
      <NavLink to="/recipes" className="ml-7 text-2xl">
        <FontAwesomeIcon icon={faArrowLeft} className="mt-12" />
      </NavLink>
      <Banner title="Authentification"
              content="Créez votre compte ou connectez-vous via un lien magique en renseignant votre adresse mail" />
      <form onSubmit={handleLogin} className="mt-7 text-center md:mt-12">
        <div>
          <input
            type="email"
            placeholder="Votre adresse mail"
            value={email}
            required={true}
            className="rounded-xl border border-white bg-transparent py-0.5 pl-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-3.5">
          <button disabled={loading} className="flat-tag bg-black2 text-base">
            {loading ? <span>Chargement</span> : <span>Envoyer</span>}
          </button>
        </div>
      </form>
    </div>
  );
}