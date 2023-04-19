import React, { FC } from "react";
import io from "socket.io-client";

interface UserCardProps {
    friend: Friend
}

export interface Friend {
    _id: string,
    name: string
}

const UserCard:FC<UserCardProps> = ({friend}) => {
  const dispatch = useAppDispatch();

  function handleClickUser() {
    dispatch(setCurrentFriend(friend))
  }

    return (
      <div className="user-card" onClick={handleClickUser}>
        <img src="" alt=""/>
        <p>
          {friend.name}
        </p>
      </div>
    );
};

export default UserCard;
