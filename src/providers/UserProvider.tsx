import React, { createContext, useState } from 'react';

interface Props {}

export const UserContext = createContext<any>(null);

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
