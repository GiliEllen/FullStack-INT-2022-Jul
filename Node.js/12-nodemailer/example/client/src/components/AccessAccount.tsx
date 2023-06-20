import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AccessAccount = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) requestAccess();
  }, [token]);

  async function requestAccess() {
    try {
      const { data } = await axios.post(`/api/auth/access-account`, {
        resetCode: token,
      });

      if (data?.error) {
        console.error(data.error);
      } else {
        const {userDB} = data
        console.log("Please Update Your password in Profile Page.");
        navigate("/reset-password");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      Please wait...
      <h1>Test</h1>
    </div>
  );
};

export default AccessAccount;
