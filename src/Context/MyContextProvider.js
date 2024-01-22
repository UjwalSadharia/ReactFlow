// MyContextProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {

  const minX = 0;
  const maxX = 100;

  const [initialNodes, setInitialNodes] = useState([
    {
      id: (Math.floor(Math.random() * (maxX - minX + 1)) + minX).toString(),
      type: 'textUpdater',
      position: { x: 0, y: 0 },
      data: {
        tableName: 'user', fields: [
          { id: 1, name: "id", type: "int" },
          { id: 2, name: "name", type: "varchar" },
          { id: 3, name: "gender", type: "int" },
        ]
      },
    },
    {
      id: (Math.floor(Math.random() * (maxX - minX + 1)) + minX).toString(),
      type: 'textUpdater',
      position: { x: 20, y: 40 },
      data: {
        tableName: 'gender', fields: [
          { id: 1, name: "id", type: "int" },
          { id: 2, name: "gender", type: "varchar" }
        ]
      },
    }
  ]);

  const [showTableDrawer, setShowTableDrawer] = useState(false);

  const contextValue = {
    initialNodes,
    setInitialNodes,
    showTableDrawer,
    setShowTableDrawer
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
