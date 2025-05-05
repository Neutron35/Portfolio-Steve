import Auth from '@/components/auth.tsx';
import { Navigate } from 'react-router-dom';
import { useSession } from '@/lib/sessionContext.tsx';

function Sign() {
  const { session } = useSession();
  return (
    <div>
      {!session ? <Auth /> : <Navigate to="/account" replace />}
    </div>
  );

}

export default Sign;