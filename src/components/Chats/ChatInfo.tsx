import { ChatDto } from '@/models/chat';


interface ChatInfoProps {
  chat: ChatDto;
}

export function ChatInfo({ chat }: ChatInfoProps) {
  return (
    <div>
      <h1>{chat.name}</h1>
      <p>Details about the chat will go here.</p>
    </div>
  );
}