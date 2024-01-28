export interface Message {
  _id: string;
  message: string;
  author: string;
  datetime: string;
}

export interface UserMsg {
  author: string;
  message: string;
}
