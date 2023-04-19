import { useEffect } from "react";


const CurrentChatWithUser = ({}) => {
  const loggedInUser = useAppSelector(userSelector);
  const SelectedUser = useAppSelector(selectedUserSelector);
  const [messeges, setMessges] = useState()

  const dispatch = useAppDispatch();

  useEffect(() => {
    getMesseges(SelectedUser._id) // --function that get messeges from db and
    //saves them as a state setMessages(data.messegesDB)
  },[SelectedUser])

  return (
    <div className="current-chat-with-user">
        <div>
            <div>
                MESSEGES GOES HERE
            </div>
            <form>
                <input type="text" />
                <button>Send</button>
            </form>
        </div>
    </div>
  );
};

export default CurrentChatWithUser;
