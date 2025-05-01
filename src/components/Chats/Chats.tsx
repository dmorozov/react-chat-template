import clsx from 'clsx';
import { Box, Grid } from '@mantine/core';
import { Chat } from '@/models/chat';
import { ChatInfo } from './ChatInfo';
import { ChatMessages } from './ChatMessages';
import { ChatsList } from './ChatsList';
import classes from './Chats.module.css';


const currentChat: Chat = {
  id: '1',
  name: 'John Doe',
  lastMessage: 'Hello!',
  lastMessageTime: '10:00 AM',
};

export function Chats() {
  return (
    <Box className={clsx(classes.chatsContainer, classes.dark_mode)}>
      <Grid className={clsx(classes.h100, classes.chatsGrid)} gutter={0}>
        <Grid.Col
          className={clsx(classes.h100, classes.messages_page__list_scroll)}
          span={{ base: 12, sm: 4, md: 5, lg: 3, xl: 3 }}
        >
          <ChatsList />
        </Grid.Col>
        <Grid.Col
          className={clsx(classes.h100, classes.chat)}
          span={{ base: 12, sm: 8, md: 7, lg: 6, xl: 6 }}
        >
          <ChatMessages chat={currentChat} />
        </Grid.Col>
        <Grid.Col className={classes.h100} span={{ base: 12, sm: 12, md: 5, lg: 3, xl: 3 }}>
          <ChatInfo chat={currentChat} />
        </Grid.Col>
      </Grid>
    </Box>
  );
}