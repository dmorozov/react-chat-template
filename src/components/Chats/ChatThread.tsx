import clsx from 'clsx';
import { FaArrowLeft, FaCog, FaFileUpload } from 'react-icons/fa';
import { FiSend } from "react-icons/fi";
import { ActionIcon, Box, Input, List, TextInput } from '@mantine/core';
import { Chat } from '@/models/chat';
import classes from './ChatThread.module.css';


interface ChatThreadProps {
  chat: Chat;
}

export function ChatThread({ chat }: ChatThreadProps) {
  return (
    <Box className={classes.chat__container}>
      <Box className={classes.chat__wrapper}>
        <Box className={clsx(classes.chat__messaging)}>
          <Box className={classes.chat__previous}>
            <FaArrowLeft />
          </Box>
          <Box className={classes.chat__infos}>
            <Box className={classes.chat_member__wrapper} data-online="true">
              <Box className={classes.chat_member__details}>
                <Box component="span" className={classes.chat_member__name}>
                  {chat.name}
                </Box>
                <Box component="span" className={classes.chat_member__status}>
                  Online
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.chat__actions}>
            <List>
              <List.Item>
                <ActionIcon variant="filled" size="md" radius="xl">
                  <FaCog style={{ width: '70%', height: '70%' }} />
                </ActionIcon>
              </List.Item>
            </List>
          </Box>
        </Box>
        <Box className={classes.chat__content}>
          <List
            classNames={{
              root: classes.chat__list_messages,
              itemLabel: classes.chat__list_messages__label,
            }}
          >
            <List.Item>
              <Box className={classes.chat__time}>{chat.lastMessageTime}</Box>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__you)}>
                Hey, I bought something yesterdat but haven't gotten any confirmation. Do you know I
                if the order went through?
              </Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__me)}>
                Hi! I just checked, your order went through and is on it's way home. Enjoy your new
                computer! 😃
              </Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__me)}>Ping? 😃</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__you)}>Pong!</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__me)}>Ping? 😃</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__you)}>Pong!</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__me)}>Ping? 😃</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__you)}>Pong!</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__me)}>Ping? 😃</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__you)}>Pong!</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__me)}>Ping? 😃</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__you)}>Pong!</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__me)}>Ping? 😃</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__you)}>Pong!</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__me)}>Ping? 😃</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__you)}>Pong!</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__me)}>Ping? 😃</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__you)}>Pong!</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__me)}>Ping? 😃</Box>
            </List.Item>
            <List.Item>
              <Box className={clsx(classes.chat__bubble, classes.chat__bubble__you)}>Pong!</Box>
            </List.Item>
          </List>
        </Box>

        <Box className={classes.chat__send_container}>
          <Box className={classes.custom_form__send_wrapper}>
            <Input
              type="text"
              id="message"
              placeholder="Enter a question ..."
              classNames={{
                input: clsx(classes.form_control, classes.custom_form),
              }}
            />

            <Box className={classes.custom_form__send_img}>
              <FaFileUpload style={{ width: '70%', height: '70%' }} />
            </Box>

            <ActionIcon
              variant="filled"
              size="lg"
              radius="xl"
              className={classes.custom_form__send_submit}
            >
              <FiSend style={{ width: '70%', height: '70%' }} />
            </ActionIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}