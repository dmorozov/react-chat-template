import clsx from 'clsx';
import { Anchor, Box, Grid, Text, Title } from '@mantine/core';
import classes from './Chats.module.css';


export function Chats() {
  return (
    <Box className={classes.chatsContainer}>
      <Box className={clsx(classes.containerFluid, classes.h100)} >
        <Grid.Col className={classes.h100} span={{ base: 12, md: 4, lg: 5, xl: 3 }}>
          1
        </Grid.Col>
        <Grid.Col className={classes.h100} span={{ base: 12, md: 8, lg: 7, xl: 6 }}>
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
        <Grid.Col className={classes.h100} span={{ base: 12, md: 5, lg: 4, xl: 3 }}>
          3
        </Grid.Col>
      </Box>
    </Box>
  );
}