import { StyleSheet, Text } from 'react-native';

// themed components
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';
import ThemedButton from '../components/ThemedButton';

import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <ThemedButton onPress={() => router.navigate("/login")}>
        <Text style={{color:"#f2f2f2"}}>Get Started</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  }
})