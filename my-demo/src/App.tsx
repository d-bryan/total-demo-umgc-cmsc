import React from 'react';
import './App.css';

type PropType = {
  item?: string
  itemList?: string[]
}

interface User {
  uid: string | undefined;
  email: string | undefined;
  displayName: string | undefined;
}

function App() {
  const loggedInRoutes = ['item1', 'item2', 'item3'];
  const loggedOutRoutes = ['item4', 'item5', 'item6'];
  return (
    <div className="App">
      <HeaderComponent item="This is a heading" />
    </div>
  );
}


const HeaderComponent: React.FC<PropType> = ({ item }): JSX.Element => {
  return (
    <div>
      <h1>{item}</h1>
    </div>
  );
}

const ListItem: React.FC<PropType> = ({ item }): JSX.Element => {
  return <li>{item}</li>
}

export default App;
