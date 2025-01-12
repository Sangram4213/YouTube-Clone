import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        alt="user"
        src="https://yt4.ggpht.com/ytc/AIdro_lF7GNPZTSN4e9ozOHVYowN3wNOYOwHWuPShzAlZNc83S1e=s32-c-k-c0x00ffffff-no-rj"
      />
      <span className="font-bold px-2 sha">{name}</span>
      <span>{message}</span>

    </div>
  );
};

export default ChatMessage;
