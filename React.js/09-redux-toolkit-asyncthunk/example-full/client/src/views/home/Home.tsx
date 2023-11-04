import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUserByCookie } from "../../features/user/userAPI";
import { userInformationSelector, userSelector } from "../../features/user/userSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector); // user = null or empty
  const userInfornation = useAppSelector(userInformationSelector)
  useEffect(() => {
    dispatch(getUserByCookie());
  }, []);

  if (!user) {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>hello {user.email}</p>
        <Link to={"/example"}>To example</Link>
      </div>
    );
  }
};

export default Home;
