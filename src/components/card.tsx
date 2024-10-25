import { cardType } from '@/types/card.types'; // Un type pour un item unique de la galerie

interface CardProps {
  content: cardType; // Le type exact pour un item
}

function Card({ content }: CardProps) {
  return (
    <div>
      <img src={content.image} alt={content.title} />
      <h4>{content.title}</h4>
      <ul>
        {content.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
