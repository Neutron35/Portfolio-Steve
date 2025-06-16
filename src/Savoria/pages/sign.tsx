import Auth from '@/Savoria/components/auth.tsx';
import { Navigate } from 'react-router-dom';
import { useSession } from '@/Savoria/lib/sessionContext.tsx';

function Sign() {
  const { session } = useSession();
  return (
    <div>
      {!session ? <Auth /> : <Navigate to="/Savoria/account" />}
    </div>
  );

}

export default Sign;