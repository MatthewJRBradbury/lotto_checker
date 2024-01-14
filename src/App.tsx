import { ThemeProvider } from './context/themeProvider';
import ScreenLayout from './components/Layout';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ScreenLayout />
    </ThemeProvider>
  );
}

export default App;
