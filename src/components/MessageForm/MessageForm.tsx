import React from 'react';

interface Props {
  author: string;
  message: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MessageForm: React.FC<Props> = ({author, message, handleChange}) => {
  return (
    <form>
      <label htmlFor='author'>Author:</label>
      <input
        type='text'
        className='form-control'
        name='author'
        id='author'
        value={author}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor='message'>Message:</label>
      <input
        type='text'
        className='form-control'
        name='message'
        id='message'
        value={message}
        onChange={(e) => handleChange(e)}
      />
      <button type='submit' className='btn btn-primary mt-2'>
        Send message
      </button>
    </form>
  );
};

export default MessageForm;
