import { AppShell, Button, Group, Header, MantineProvider } from "@mantine/core";

function AppHeader() {
  return (
    <Group style={{
      height: '100%',
    }}>
      <Button>
        Test
      </Button>
    </Group>
  );
}

function App() {

  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        fontFamily: 'Roboto',
       // fontFamily: 'Open Sans',
      }}
      withNormalizeCSS
      withGlobalStyles
      >
    <AppShell
      header={
        <Header height={60}>
          <AppHeader />
        </Header>
      }>
        <Button>
          Test
        </Button>
      </AppShell>
    </MantineProvider>
  )
}

export default App;
