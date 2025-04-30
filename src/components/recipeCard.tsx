import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { memo, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RecipeBase } from '@/types/recipe.types.ts';

const RecipeCard = memo(({ content }: { content: RecipeBase }) => {
  const [hover, setHover] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { id, title, image } = content;

  // Définition des classes conditionnelles basées sur l'état de survol
  const classes = useMemo(
    () => ({
      hoverClass: hover ? 'scale-[1.07]' : '',
      buttonClass: `transition-transform ${hover ? 'bg-white text-[#1c1c1c]' : ''} h-fit rounded-[100px] border px-3.5 py-1.5 hover:bg-white`,
      iconClass: `transition-transform ${hover ? 'rotate-[-30deg]' : ''}`,
    }),
    [hover],
  );

  return (
    <NavLink to={`/recipe/${id}`}>
      <article
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex min-h-[300px] flex-col gap-3.5 rounded-[24px] bg-black2 pb-5" // Définir une hauteur minimale
      >
        {/* Image de prévisualisation du projet */}
        <div className="w-full grow rounded-[24px]">
          <img
            src={image}
            alt={`Aperçu de la page de ${title}`}
            className={`mx-auto size-auto transition-transform ${classes.hoverClass} ${isImageLoaded ? 'block' : 'hidden'}`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        {/* Informations du projet avec tags et bouton */}
        <div className="flex items-center justify-between px-5">
          <div className="title2 truncate">{title}</div>
          {/* Bouton de navigation vers le projet */}
          <Button className={classes.buttonClass} aria-label={`Accéder à la recette ${title}`}>
            <FontAwesomeIcon icon={faArrowRight} className={classes.iconClass} />
          </Button>
        </div>
      </article>
    </NavLink>
  );
});

export default RecipeCard;
