import { Friend } from "./UserCard"

interface UserListProps {
    friendsList: Friend[]
}

const UserList = ({}) => {
  const loggedInUser = useAppSelector(userSelector)
  return (
    <div className="user-list">
          <h2>My Friends</h2>
          {friendsList.map((friend:any) =>
            <UserCard
              key={friend._id}
              user={friend}
            />)}
        </div>
  )
}

export default UserList