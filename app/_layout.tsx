
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import store, { useAppDispatch } from "./redux/store"
import { theme } from "./styles/theme"
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import Route from './index';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

declare global {
  interface Window {
    electron?: {
      sendMessage: (channel: string, data: any) => void;
      onMessage: (channel: string, callback: (data: any) => void) => void;
    };
  }
}

export default function RootLayout() {


  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }



  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}> 
          <StatusBar style="dark" />
          <Route />
      </ThemeProvider>
    </Provider>
  );
}
