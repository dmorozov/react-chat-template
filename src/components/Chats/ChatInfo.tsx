import { Chat } from "@/models/chat";


interface ChatInfoProps {
  chat: Chat;
}

export function ChatInfo({ chat }: ChatInfoProps) {
  return (
    <div>
      <h1>{chat.name}</h1>
      <p>Details about the chat will go here.</p>
    </div>
  );
}