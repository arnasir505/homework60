import { useEffect, useState } from 'react';
import { url } from './constants';
import { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const messagesData = await response.json();
      setMessages(messagesData);
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      {messages.map((msg) => (
        <div key={msg._id}>{msg.message}</div>
      ))}
    </div>
  );
}

export default App;
