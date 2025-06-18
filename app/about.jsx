import { StyleSheet, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';

import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

const About = () => {
  // const colorScheme = useColorScheme();
  // const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={styles.container}>
      {/* <Text style={{fontSize:20,marginBottom:20,color:theme.text}}> About </Text>
      <Link href={"/"} style={[styles.linkStyle, {color:theme.text}]}>Home</Link> */}
      
      <ThemedText style={styles.title} title={true}>About</ThemedText>
      <Link href={"/"} style={styles.linkStyle}>
        <ThemedText>Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default About;

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