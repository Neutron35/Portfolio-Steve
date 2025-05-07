import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useSession } from '@/lib/sessionContext';

export default function Avatar({ url, size, onUpload }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { session } = useSession();
  const userId = session?.user.id;

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log('Erreur lors du téléchargement de l\'image : ', error.message);
    }
  }

  async function uploadAvatar(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('Veuillez sélectionner une image à télécharger.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      // Supprimer l'ancien avatar si un chemin d'avatar existant est fourni
      if (url) {
        const { error: deleteError } = await supabase.storage.from('avatars').remove([url]);
        if (deleteError) {
          console.error('Erreur lors de la suppression de l\'ancien avatar :', deleteError.message);
        }
      }

      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Mettre à jour l'URL de l'avatar dans la table profiles
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: filePath })
        .eq('id', userId);

      if (updateError) {
        throw updateError;
      }

      onUpload(event, filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="col-span-4">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Avatar"
          style={{ height: size, width: size }}
          className="mx-auto object-cover"
        />
      ) : (
        <div style={{ height: size, width: size }} />
      )}
      <div style={{ width: size }} className="mx-auto mt-2">
        <label htmlFor="single">
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  );
}
