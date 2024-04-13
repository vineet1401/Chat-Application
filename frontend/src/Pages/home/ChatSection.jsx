import { useCallback, useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext.jsx";
import useSendMessage from "../../Hooks/useSendMessage.js";
import useGetMessages from "../../Hooks/useGetMessages.js";
import useListenMessage from "../../Hooks/useListenMessage.js";

const convertTime = (time) => {
  const date = new Date(time);
  let hours = date.getHours(); 
  let minutes = date.getMinutes(); 
  if(hours < 10)hours = "0" + hours;
  if(minutes < 10)minutes = "0" + minutes;

  return  `${hours}:${minutes}`;
};

const ChatSection = () => {
  const { selectedUser, authUser } = useAuthContext();
  const recieverId = selectedUser._id;
  const [textMessage, setTextMessage] = useState("");

  useListenMessage(); 

  const { sendMessage } = useSendMessage();
  const { userChats } = useGetMessages();

  const handleSendMessage = (event) => {
    event.preventDefault();
    sendMessage(textMessage, recieverId);
    return setTextMessage("");
  };

  const updateMessage = useCallback((event) => {
    event.preventDefault();
    return setTextMessage(event.target.value);
  }, []);

  const lastMessage = useRef();

  useEffect(()=> {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behaviour : "smooth"})
    }, 200);
  }, [userChats])

  return (
    <>
      <div className="flex h-[90vh] p-3 flex-col w-full">
        <div className="flex py-2 card bg-base-300 rounded-box h-[10vh] place-items-center">
          <div className="flex justify-end ">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={selectedUser.profilePic} />
              </div>
            </div>
            <a className="btn btn-ghost text-2xl">{selectedUser.fullName}</a>
          </div>
        </div>
        <hr style={{ border: "2px solid blue" }} />

        <div className="flex flex-col h-[69vh]  gap-1 overflow-y-scroll py-2 no-scrollbar card bg-base-300 rounded-box ">
          {userChats.length == 0 ? (
            <>
              <h1 className="text-center text-3xl my-auto ">
                No Chats to show
              </h1>
            </>
          ) : (
            userChats.map((message) => {
              return message.receiverId !== selectedUser._id ? (
                <>
                  <div key={message._id} ref={lastMessage} className="chat h-fit chat-end">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS chat bubble component"
                          src={selectedUser.profilePic}
                        />
                      </div>
                    </div>
                    <div className="chat-header">{selectedUser.fullName}</div>
                    <div className="chat-bubble bg-gray-300">
                      {message.message}
                    </div>
                    <div className="chat-footer opacity-50">
                      {" "}
                      <time className="text-xs opacity-80">
                        {convertTime(message.updatedAt)}
                      </time>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div key={message._id} ref={lastMessage} className="chat h-fit chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS chat bubble component"
                          src={authUser.profilePic}
                        />
                      </div>
                    </div>
                    <div className="chat-header">{authUser.fullName}</div>
                    <div className="chat-bubble bg-blue-300">
                      {message.message}
                    </div>
                    <div className="chat-footer opacity-50">
                      {" "}
                      <time className="text-xs opacity-80">
                        {convertTime(message.updatedAt)}
                      </time>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>

        <div className="p-2 flex h-[9vh]">
          <input
            type="text"
            onChange={updateMessage}
            value={textMessage}
            placeholder="Send a message"
            className="input w-full overflow-wrap-break-word text-lg bg-gray-300 placeholder-gray-600 text-black input-bordered"
          />
          <button
            className="btn btn-rounded btn-outline"
            type="submit"
            onClick={handleSendMessage}
          >
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/ios-glyphs/30/filled-sent.png"
              alt="filled-sent"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatSection;
