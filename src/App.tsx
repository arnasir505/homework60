import { useEffect, useRef, useState } from 'react';
import { url } from './constants';
import { Message, UserMsg } from './types';
import MessageForm from './components/MessageForm/MessageForm';
import MessageCard from './components/MessageCard/MessageCard';
import './App.css';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userMessage, setUserMessage] = useState<UserMsg>({
    author: '',
    message: '',
  });
  const [lastMsgDate, setLastMsgDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const messagesData = await response.json();
      setLastMsgDate(messagesData[messagesData.length - 1].datetime);
      setMessages(messagesData);
    };
    fetchData();
    scrollToLastMsg();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch(`${url}/?datetime=${lastMsgDate}`);
      const newMessagesData = await response.json();
      setMessages(newMessagesData);
    }, 2000);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = new URLSearchParams();
    data.set('message', userMessage.message);
    data.set('author', userMessage.author);
    const response = await fetch(url, {
      method: 'post',
      body: data,
    });
  };

  const ref = useRef<HTMLDivElement>(null);

  const scrollToLastMsg = () => {
    const lastChildEl = ref.current?.lastElementChild;
    lastChildEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='container pt-3'>
      <div className='row messages'>
        <div className='col' ref={ref}>
          {messages.map((msg) => (
            <MessageCard
              author={msg.author}
              message={msg.message}
              datetime={msg.datetime}
              key={msg._id}
            />
          ))}
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <MessageForm
            author={userMessage.author}
            message={userMessage.message}
            handleChange={handleFormChange}
            handleSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
