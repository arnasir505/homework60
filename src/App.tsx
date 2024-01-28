import { useEffect, useState } from 'react';
import { url } from './constants';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const messagesData = await response.json();
      console.log(messagesData);
    };
    fetchData();
  }, []);

  return <></>;
}

export default App;
