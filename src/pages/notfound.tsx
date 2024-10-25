import Banner from '@/components/banner';
import { bannerData } from '@/data/notfoundData';

function NotFound() {
  const { title, content, tag, link } = bannerData;
  return (
    <div>
      <Banner title={title} content={content} tag={tag} link={link} />
    </div>
  );
}

export default NotFound;
