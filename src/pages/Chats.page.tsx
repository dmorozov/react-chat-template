import { Chats } from '@/components/Chats/Chats';

export function ChatsPage() {
  return (
    <div style={{position: 'absolute', top: 30, left: 30, right: 30, bottom: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Chats />
    </div>
  );
}
