import React from 'react';

interface Props {
  author: string;
  message: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MessageForm: React.FC<Props> = ({
  author,
  message,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form className='d-flex align-items-center gap-2 mt-2'>
      <label htmlFor='author' className='text-white'>
        Author:
      </label>
      <input
        type='text'
        className='form-control bg-dark text-white'
        name='author'
        id='author'
        value={author}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor='message' className='text-white'>
        Message:
      </label>
      <input
        type='text'
        className='form-control bg-dark text-white'
        name='message'
        id='message'
        value={message}
        onChange={(e) => handleChange(e)}
      />
      <button
        type='submit'
        className='btn btn-primary'
        onClick={(e) => handleSubmit(e)}
      >
        SEND
      </button>
    </form>
  );
};

export default MessageForm;
