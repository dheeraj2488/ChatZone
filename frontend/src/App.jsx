import { useState } from 'react';
import io from 'socket.io-client';
import ChatBox from './components/ChatBox';

const socket = io('http://localhost:7001');

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-zinc-800 to-black text-white flex flex-col">
  
    <div className="w-full py-10 px-8 backdrop-blur-sm">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-400  animate-pulse">
        Welcome to <span className="text-white">ChatZone</span>{username && <span className="text-indigo-300">, {username}</span>}
      </h1>
      <p className="text-center mt-2 text-gray-300 text-sm italic">Connect and chat</p>
    </div>
  
    <div className="flex flex-1 items-center justify-center px-4 py-12 w-full">
      <ChatBox socket={socket} setUsername={setUsername} />
    </div>
  
    <div className="py-4 text-center text-sm text-gray-500">
      Made by Dheeraj
    </div>
  </div>
  );
}

export default App;
