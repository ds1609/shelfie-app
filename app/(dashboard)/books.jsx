import { StyleSheet } from 'react-native';

// Themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Books = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading} title={true}>Your Reading List</ThemedText>
      <Spacer />
    </ThemedView>
  )
}

export default Books;

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