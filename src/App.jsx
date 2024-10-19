import { useState } from 'react';
import Inputs from './components/inputs/Inputs';
import Title from './components/title/Title';
import UserList from './components/userlist/Userlist';

function App() {
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [sortOption, setSortOption] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='App'>
      <Title>Listado de Usuarios</Title>
      <Inputs
        setShowActiveOnly={setShowActiveOnly}
        setSortOption={setSortOption}
        setSearchTerm={setSearchTerm}
      />
      <UserList
        showActiveOnly={showActiveOnly}
        sortOption={sortOption}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
