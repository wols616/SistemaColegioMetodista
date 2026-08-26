import { useEffect } from 'react';
import api from '../services/api';
import { useStore } from '../store';

export default function useAuth() {
  const setUser = useStore((s) => s.setUser);

  useEffect(() => {
    // placeholder: later call to /api/user or similar
    async function check() {
      try {
        const res = await api.get('/api/auth/me');
        setUser(res.data);
      } catch (e) {
        setUser(null);
      }
    }
    check();
  }, [setUser]);
}
