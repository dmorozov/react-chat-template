import clsx from 'clsx';
import { Box, Grid,Text, Title, Anchor } from '@mantine/core';
import classes from './Chats.module.css';

export function Chats() {
  return (
    <Box className={classes.chatsContainer}>
      <Grid className={clsx(classes.h100, classes.chatsGrid)} gutter={0}>
        <Grid.Col className={classes.h100} span={{ base: 12, sm: 4, md: 5, lg: 3, xl: 3 }}>
          1
        </Grid.Col>
        <Grid.Col className={clsx(classes.h100, classes.chat)} span={{ base: 12, sm: 8, md: 7, lg: 6, xl: 6 }}>
          <Title className={classes.title} ta="center" mt={100}>
            Welcome to{' '}
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: 'pink', to: 'yellow' }}
            >
              Mantine
            </Text>
          </Title>
          <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
            This starter Vite project includes a minimal setup, if you want to learn more on Mantine
            + Vite integration follow{' '}
            <Anchor href="https://mantine.dev/guides/vite/" size="lg">
              this guide
            </Anchor>
            . To get started edit pages/Home.page.tsx file.
          </Text>
        </Grid.Col>
        <Grid.Col className={classes.h100} span={{ base: 12, sm: 12, md: 5, lg: 3, xl: 3 }}>
          3
        </Grid.Col>
      </Grid>
    </Box>
  );
}