import clsx from 'clsx';
import { FaRocketchat, FaSearch } from "react-icons/fa";
import { Box, Button, List, TextInput } from '@mantine/core';
import classes from './Chats.module.css';


interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
}

interface ChatsListItemProps {
  active?: boolean;
  chat: Chat;
}

function ChatsListItem({chat, active}: ChatsListItemProps) {
  return (
    <List.Item
      className={clsx(classes.messaging_member, active && classes.messaging_member__active)}
    >
      <Box className={classes.messaging_member__wrapper}>
        <Box component="span" className={classes.messaging_member__name}>
          {chat.name}{' '}
          <Box component="span" className={classes.messaging_member__time}>
            {chat.lastMessageTime}
          </Box>
        </Box>
        <Box component="span" className={classes.messaging_member__message}>
          {chat.lastMessage}
        </Box>
      </Box>
    </List.Item>
  );
}

const chats: Chat[] = [
  { id: '1', name: 'John Doe', lastMessage: 'Hello!', lastMessageTime: '10:00 AM' },
  { id: '2', name: 'Jane Smith', lastMessage: 'How are you?', lastMessageTime: '10:05 AM' },
  { id: '3', name: 'Bob Johnson', lastMessage: 'See you later!', lastMessageTime: '10:10 AM' },
  { id: '4', name: 'Alice Brown', lastMessage: 'Goodbye!', lastMessageTime: '10:15 AM' },
  { id: '5', name: 'Charlie Davis', lastMessage: 'Nice to meet you!', lastMessageTime: '10:20 AM' },
  { id: '6', name: 'Eve Wilson', lastMessage: 'Thank you!', lastMessageTime: '10:25 AM' },
  { id: '7', name: 'Frank Miller', lastMessage: 'See you soon!', lastMessageTime: '10:30 AM' },
  { id: '8', name: 'Grace Lee', lastMessage: 'Take care!', lastMessageTime: '10:35 AM' },
  { id: '9', name: 'Hank Taylor', lastMessage: 'Have a great day!', lastMessageTime: '10:40 AM' },
  { id: '10', name: 'Ivy Anderson', lastMessage: 'Good luck!', lastMessageTime: '10:45 AM' },
  { id: '11', name: 'Jack Thomas', lastMessage: 'See you next time!', lastMessageTime: '10:50 AM' },
  { id: '12', name: 'Kathy Martinez', lastMessage: 'Take it easy!', lastMessageTime: '10:55 AM' },
  { id: '13', name: 'Leo Garcia', lastMessage: 'Have fun!', lastMessageTime: '11:00 AM' },
  { id: '14', name: 'Mia Rodriguez', lastMessage: 'Stay safe!', lastMessageTime: '11:05 AM' },
  { id: '15', name: 'Nina Hernandez', lastMessage: 'Be well!', lastMessageTime: '11:10 AM' },
  { id: '16', name: 'Oscar Lopez', lastMessage: 'See you later!', lastMessageTime: '11:15 AM' },
  { id: '17', name: 'Paul Walker', lastMessage: 'Goodbye!', lastMessageTime: '11:20 AM' },
  { id: '18', name: 'Quinn Young', lastMessage: 'Nice to see you!', lastMessageTime: '11:25 AM' },
  { id: '19', name: 'Rachel King', lastMessage: 'Thank you!', lastMessageTime: '11:30 AM' },
  { id: '20', name: 'Sam Scott', lastMessage: 'Take care!', lastMessageTime: '11:35 AM' },
  { id: '21', name: 'Tina Green', lastMessage: 'Have a great day!', lastMessageTime: '11:40 AM' },
  { id: '22', name: 'Uma Adams', lastMessage: 'Good luck!', lastMessageTime: '11:45 AM' },
  { id: '23', name: 'Victor Nelson', lastMessage: 'See you next time!', lastMessageTime: '11:50 AM' },
  { id: '24', name: 'Wendy Carter', lastMessage: 'Take it easy!', lastMessageTime: '11:55 AM' },
  { id: '25', name: 'Xander Mitchell', lastMessage: 'Have fun!', lastMessageTime: '12:00 PM' },
  { id: '26', name: 'Yara Perez', lastMessage: 'Stay safe!', lastMessageTime: '12:05 PM' },
  { id: '27', name: 'Zane Roberts', lastMessage: 'Be well!', lastMessageTime: '12:10 PM' },
  { id: '28', name: 'Aaron Turner', lastMessage: 'See you later!', lastMessageTime: '12:15 PM' },
  { id: '29', name: 'Bella Phillips', lastMessage: 'Goodbye!', lastMessageTime: '12:20 PM' },
];

export function ChatsList() {
  const activeChatId = '3';

  return (
    <>
      <Box className={classes.messages_page__header}>
        <Box component="span" className={classes.messages_page__title}>
          Chats
        </Box>
      </Box>
      <Box className={classes.messages_page__search}>
        <Box className={classes.custom_form__search_wrapper}>
          <TextInput
            classNames={{
              input: clsx(classes.form_control, classes.custom_form),
            }}
            mt="md"
            rightSectionPointerEvents="none"
            rightSection={<FaSearch size={16} />}
            placeholder="Search chats ..."
          />
        </Box>
      </Box>
      <List className={classes.messages_page__list}>
        {chats.map((chat) => (
          <ChatsListItem key={chat.id} chat={chat} active={chat.id === activeChatId} />
        ))}
      </List>
      <Box className={classes.messages_page__footer}>
        <Button leftSection={<FaRocketchat size={14} />} variant="filled">
          Add Chat
        </Button>
      </Box>
    </>
  );
}