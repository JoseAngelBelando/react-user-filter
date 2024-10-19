// import Button from '../button/Button';
import UserStatus from '../userstatus/UserStatus';
import { Card, ProfileImage } from './UserCard.styles';

const UserCard = ({ user }) => {
  return (
    <Card>
      <ProfileImage src={user.profileImage} alt={user.name} />
      <div>
        <h2>{user.name}</h2>
        <p>@{user.username}</p>
      </div>

      <UserStatus active={user.active} />
      {/* <Button>Ver Detalles</Button> */}
    </Card>
  );
};

export default UserCard;