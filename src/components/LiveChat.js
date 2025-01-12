import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "./utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "./utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20) + "🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>

      <form className="w-full p-2 ml-2 border border-black flex" onSubmit={(e)=>{
          e.preventDefault();
          dispatch(addMessage({
            name:"Sangram Wable",
            message:liveMessage
          }));  
          setLiveMessage("");  
      }}>
        <input className=" px-2 w-96" type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
