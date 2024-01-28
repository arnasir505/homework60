import React from 'react';

interface Props {
  author: string;
  message: string;
  datetime: string;
}

const MessageCard: React.FC<Props> = ({ author, message, datetime }) => {
  const formatISODate = (ISODate: string) => {
    const date = new Date(ISODate);
    date.toDateString();
    const stringDate = date.toString();
    const newStringDate = stringDate.slice(4, 21);
    return newStringDate;
  };

  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <h5 className='card-title'>{author}</h5>
        <h6 className='card-subtitle mb-2 text-body-secondary'>
          {formatISODate(datetime)}
        </h6>
        <p className='card-text'>{message}</p>
      </div>
    </div>
  );
};

export default MessageCard;
