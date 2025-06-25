import { useState, useEffect } from 'react';
import Message from './Message';
import InputBar from './InputBar';

function ChatBox({ socket, setUsername }) {
  const [messages, setMessages] = useState([]);
  const [username, setLocalUsername] = useState('');
  const [inputName, setInputName] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.on('chat_history', (history) => {
      setMessages(history);
    });

    socket.on('receive_message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on('online_users', (users) => {
      setOnlineUsers(users);
    });

    return () => socket.off();
  }, [socket]);

  const handleSend = (text) => {
    const msg = {
      user: username,
      text,
      time: new Date().toLocaleTimeString(),
    };
    socket.emit('send_message', msg);
  };


  if (!username) {
    return (
      <div className="w-full max-w-xl bg-white bg-opacity-10 rounded-2xl shadow-2xl p-10 text-center border border-gray-300">
        <h2 className="text-3xl font-bold text-indigo-200 mb-6">
          Enter Your Name to start chatting
        </h2>
        <input
          className="text-black w-full px-5 py-3 rounded-lg text-lg border border-gray-400 bg-zinc-100 focus:outline-none mb-6"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="e.g., Dheeraj"
        />
        <button
          className="w-full bg-indigo-600 text-white py-3 text-lg font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
          onClick={() => {
            setLocalUsername(inputName);
            setUsername(inputName);
            socket.emit('new_user', inputName);
          }}
        >
          Join Chat
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-300 flex gap-6">
      

      <div className="w-1/4 bg-white bg-opacity-20 p-4 rounded-xl border border-gray-300 h-[70vh] overflow-y-auto">
        <h3 className="text-lg font-semibold text-indigo-300 mb-4 text-center">
          Online Users ({onlineUsers.length})
        </h3>
        <ul className="space-y-2">
          {onlineUsers.map((user, idx) => (
            <li
              key={idx}
              className={`text-white bg-zinc-700 px-3 py-2 rounded-lg text-sm ${
                user === username ? 'font-bold text-indigo-300' : ''
              }`}
            >
              {user === username ? 'You' : user}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="h-[60vh] overflow-y-auto space-y-3 p-4 bg-white bg-opacity-20 rounded-xl border border-gray-300 mb-4 scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-zinc-300">
          {messages.map((msg, idx) => (
            <Message key={idx} msg={msg} isSelf={msg.user === username} />
          ))}
        </div>
        <InputBar onSend={handleSend} />
      </div>
    </div>
  );
}

export default ChatBox;
