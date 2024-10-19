import { StatusText } from './UserStatus.style';

const UserStatus = ({ active }) => {
  return (
    <StatusText active={active}>{active ? 'Active' : 'Inactive'}</StatusText>
  );
};

export default UserStatus;