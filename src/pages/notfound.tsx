import Banner from '@/components/banner';
import { bannerData } from '@/data/notfoundData';

// Composant affiché lorsqu'une page n'est pas trouvée
function NotFound() {
  return (
    <div>
      <Banner {...bannerData} />
    </div>
  );
}

export default NotFound;
