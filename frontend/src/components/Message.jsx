import { UserCircle } from 'lucide-react'; 
import React from 'react';

function Message({ msg, isSelf }) {
  return (
    <div className={`flex items-start my-2 ${isSelf ? 'justify-end' : 'justify-start'}`}>
      {!isSelf && (
        <div className="mr-2">
          <UserCircle size={32} className="text-blue-400" />
        </div>
      )}
      <div className={`${isSelf ? 'text-right' : 'text-left'}`}>
        <p className="text-sm text-black mb-1">
          {msg.user} <span className="text-xs text-gray-300">{msg.time}</span>
        </p>
        <div
          className={`inline-block p-2 rounded-xl max-w-xs ${
            isSelf ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          {msg.text}
        </div>
      </div>
    </div>
  );
}

export default Message;
