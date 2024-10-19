import { USERS } from '../../constants/users';
import UserCard from '../usercard/UserCard';
import { ListContainer } from './UserList.styles';

const UserList = ({ showActiveOnly, sortOption, searchTerm }) => {
  const filteredUsers = filterActiveUsers(USERS, showActiveOnly);
  const searchedUsers = filterByName(filteredUsers, searchTerm);
  const sortedUsers = sortUsers(searchedUsers, sortOption);

  // showActiveOnly: un valor booleano que indica si se deben mostrar solo los usuarios activos.
  // sortOption: un valor, una cadena de texto que define cómo ordenar la lista de usuarios (por ejemplo, por nombre).
  // searchTerm: una cadena de texto que contiene el término de búsqueda para filtrar los usuarios por nombre.

  return (
    <ListContainer>
      {sortedUsers.map(user => (
        <UserCard key={user.userId} user={user} />

      ))}
    </ListContainer>
  );
};

const filterActiveUsers = (users, showActiveOnly) => {
  return showActiveOnly ? users.filter(user => user.active) : users;
};

const filterByName = (users, searchTerm) => {
  return users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const sortUsers = (users, sortOption) => {
  return [...users].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
};


export default UserList;