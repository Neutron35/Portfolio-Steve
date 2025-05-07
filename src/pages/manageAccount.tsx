import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useSession } from '../lib/sessionContext';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Banner from '@/components/banner.tsx';

export default function ManageAccount() {
  const { session } = useSession();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [fullname, setFullName] = useState('');
  const [avatar_url, setAvatarUrl] = useState('');

  useEffect(() => {
    let ignore = false;

    async function getProfile() {
      setLoading(true);
      if (!session?.user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select(`username, full_name, avatar_url`)
        .eq('id', session.user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setUsername(data.username || '');
          setFullName(data.full_name || '');
          setAvatarUrl(data.avatar_url || '');
        }
      }

      setLoading(false);
    }

    getProfile();

    return () => {
      ignore = true;
    };
  }, [session]);

  async function updateProfile(event: React.FormEvent, avatarUrl) {
    event.preventDefault();

    if (!session?.user) {
      alert('User not authenticated');
      return;
    }

    setLoading(true);

    const updates = {
      id: session.user.id,
      username,
      full_name: fullname,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    };

    const { error } = await supabase.from('profiles').upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      setAvatarUrl(avatarUrl);
    }
    setLoading(false);
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    window.open('/sign', '_self'); // Redirection vers la page d'accueil
    if (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <Helmet>
        <title>Informations du compte - Portfolio Steve Lieuron</title>
      </Helmet>
      <NavLink to="/account" className="ml-7 text-2xl">
        <FontAwesomeIcon icon={faArrowLeft} className="mt-12" />
      </NavLink>
      <Banner title="Informations" />
      <form onSubmit={updateProfile} className="mx-auto mt-7 w-1/3 text-center md:mt-12">
        <div className="grid grid-cols-4 gap-3.5">
          {/*
            <Avatar
            url={avatar_url}
            size={150}
            onUpload={(event, url) => {
              updateProfile(event, url);
            }}
          />
          */}
          <label htmlFor="email" className="text-right">Email</label>
          <input id="email" type="text" value={session?.user?.email || ''} disabled
                 className="col-span-3 ml-2 rounded-xl border border-white bg-transparent py-0.5 pl-2" />
          <label htmlFor="username" className="text-right">Pseudo</label>
          <input
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="col-span-3 ml-2 rounded-xl border border-white bg-transparent py-0.5 pl-2"
          />
          <label htmlFor="fullname" className="text-right">Prénom</label>
          <input
            id="fullname"
            type="text"
            required
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            className="col-span-3 ml-2 rounded-xl border border-white bg-transparent py-0.5 pl-2"
          />
        </div>
        <div className="mt-7">
          <button type="submit" disabled={loading}
                  className="flat-tag bg-black2 text-base hover:bg-white hover:text-black1">
            {loading ? 'Chargement ...' : 'Mettre à jour'}
          </button>
        </div>

        <div className="mt-3.5">
          <button type="button" onClick={() => signOut()}
                  className="flat-tag bg-black2 text-base hover:bg-white hover:text-black1">
            Se déconnecter
          </button>
        </div>
      </form>
    </div>
  );
}
