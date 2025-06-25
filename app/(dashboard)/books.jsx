import { useBooks } from "../../hooks/useBooks";
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';

// Themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from "../../components/ThemedCard";
import Spacer from '../../components/Spacer';

import { Colors } from "../../constants/Colors";

const Books = () => {
  const { books } = useBooks();

  const renderItem = ({item}) => {
    return(
      <Pressable>
        <ThemedCard style={styles.card}>
          <ThemedText style={styles.title}>{item.title}</ThemedText>
          <ThemedText>Written By: {item.author}</ThemedText>
        </ThemedCard>
      </Pressable>
    )
  }

  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer />
      <ThemedText style={styles.heading} title={true}>Your Reading List</ThemedText>

      <Spacer height={10} />
      <FlatList 
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={renderItem}
      />
    </ThemedView>
  )
}

export default Books;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"stretch",
    // justifyContent:"center"
  }, 
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  list: {
    marginTop: 40
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
})