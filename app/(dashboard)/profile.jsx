import { StyleSheet } from 'react-native';

// Themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading} title={true}>Your Email</ThemedText>
      <Spacer />

      <ThemedText>Time to start reading some books ...</ThemedText>
      <Spacer />
    </ThemedView>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }, 
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  }
})