import { useState } from 'react';

function InputBar({ onSend }) {
  const [text, setText] = useState('');

  const send = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="flex mt-2">
      <input
        className="text-black flex-1 border p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && send()}
        placeholder="Type a message..."
      />
      <button className="bg-blue-500 text-white px-4" onClick={send}>
        Send
      </button>
    </div>
  );
}

export default InputBar;
