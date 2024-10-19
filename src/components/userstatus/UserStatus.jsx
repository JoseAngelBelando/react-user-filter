import { StatusText } from './UserStatus.styles';

const UserStatus = ({ active }) => {
  return (
    <StatusText active={active}>{active ? 'Active' : 'Inactive'}</StatusText>
  );
};

export default UserStatus;