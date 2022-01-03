import React, { createContext, useState } from 'react';

interface Props {}

export const NotificationContext = createContext<any>(null);

const NotificationProvider: React.FC<Props> = ({ children }) => {
  const [showNotif, setShowNotif] = useState(false);

  return (
    <NotificationContext.Provider value={[showNotif, setShowNotif]}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
