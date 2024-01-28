import { useEffect, useState } from 'react';
import { url } from './constants';
import { Message, UserMsg } from './types';
import MessageForm from './components/MessageForm/MessageForm';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userMessage, setUserMessage] = useState<UserMsg>({
    author: '',
    message: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const messagesData = await response.json();
      setMessages(messagesData);
    };
    fetchData();
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className='container pt-3'>
      <div className='row'>
        <div className='col'>
          <MessageForm
            author={userMessage.author}
            message={userMessage.message}
            handleChange={handleFormChange}
          />
        </div>
        <div className='col'>
          {messages.map((msg) => (
            <div key={msg._id}>{msg.message}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
