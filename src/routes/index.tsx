import React, { useContext, useEffect } from 'react';
import { USER_KEY } from '../constant';
import { UserContext } from '../providers/UserProvider';

interface Props {}

const Index = (props: Props) => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem(USER_KEY)) {
      setUser(JSON.parse(localStorage.getItem(USER_KEY)!));
    }
  }, []);

  return <div>Index</div>;
};

export default Index;
