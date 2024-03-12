import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [user, setUser] = useState([
    { id: 0, username: "subham", city: "USA" },
    { id: 1, username: "gitu", city: "USA" },
    { id: 2, username: "shreyansh", city: "USA" },
  ]);

  console.log(props);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
 