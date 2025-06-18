import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      {/* <Text style={{fontSize:20,marginBottom:20}}> Contact </Text>
      <Link href={"/"} style={styles.linkStyle}>Home</Link> */}

      <ThemedText style={styles.title} title={true}>Contact</ThemedText>
      <Link href={"/"} style={styles.linkStyle}>
        <ThemedText>Home</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Contact;

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