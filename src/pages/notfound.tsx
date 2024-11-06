import Banner from '@/components/banner';
import { bannerData } from '@/data/notfoundData';

function NotFound() {
  return (
    <div>
      <Banner {...bannerData} />
    </div>
  );
}

export default NotFound;
