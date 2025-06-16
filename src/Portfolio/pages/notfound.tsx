import Banner from '@/Portfolio/components/banner.tsx';
import { bannerData } from '@/Portfolio/data/notfoundData.tsx';

// Composant affiché lorsqu'une page n'est pas trouvée
function NotFound() {
  return (
    <div>
      <Banner {...bannerData} />
    </div>
  );
}

export default NotFound;
