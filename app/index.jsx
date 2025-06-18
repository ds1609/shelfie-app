import { StyleSheet, View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
// import Logo from "../assets/images/logo_light.png";

// themed components
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      {/* <Image source={Logo} /> */}
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <View>
        {/* <Link href={"/about"} style={[styles.linkStyle]}>
          <ThemedText>About</ThemedText>
        </Link>
        <Spacer height={10} />
        <Link href={"/contact"} style={styles.linkStyle}>
          <ThemedText>Contact</ThemedText>
        </Link> */}

        <Link href={"/login"} style={[styles.linkStyle]}>
          <ThemedText>Login</ThemedText>
        </Link>
        <Spacer height={10} />
        <Link href={"/RegisterScreen"} style={[styles.linkStyle]}>
          <ThemedText>Register</ThemedText>
        </Link>
      </View>
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
  linkStyle: {
    fontSize:18,
    textDecorationLine:"underline"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  }
})