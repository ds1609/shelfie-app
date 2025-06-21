import { StyleSheet, View, Text, useColorScheme } from 'react-native';
import { Link, Slot, Stack } from 'expo-router';
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  // console.log("colorScheme",colorScheme);
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
    {/* <Slot />    // doesn't support navigation behaviour */}
    {/* <Stack /> */}

    <StatusBar value="auto" />
    <Stack screenOptions={{
      headerStyle:{ backgroundColor: theme.navBackground },
      headerTintColor: theme.title
    }}>
      <Stack.Screen name='index' options={{ headerShown:false }} />
      <Stack.Screen name='(auth)' options={{headerShown: false}} />
      <Stack.Screen name='(dashboard)' options={{headerShown: false}} />
      
      {/* <Stack.Screen name='about' options={{ title: "About" }} />
      <Stack.Screen name='contact' options={{ title: "Contact" }} /> */}
    </Stack>

    </>
  )
}

export default RootLayout;