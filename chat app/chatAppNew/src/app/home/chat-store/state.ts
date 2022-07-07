import { Chats } from 'src/app/core/models/chats';
export interface ChatSate {
  messages: Chats[];
  selectedMessaes: Chats[];
}
export const initialState: ChatSate = {
  messages: [],
  selectedMessaes: [],
};
