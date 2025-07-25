import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useBooks } from "../../hooks/useBooks";

import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

// Themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedTextInput from '../../components/ThemedTextInput';
import ThemedButton from '../../components/ThemedButton';

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const { createBook } = useBooks();
  const router = useRouter();

  const handleSubmit = async() => {
    // console.log("create book submit");

    if(!title.trim() || !author.trim() || !description.trim()) return;

    setLoading(true);

    await createBook({ title, author, description });

    // Reset fields
    setTitle("");
    setAuthor("");
    setDescription("");

    // Reset loading state
    setLoading(false);

    // Redirect
    router.replace("/books");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>Add a new book</ThemedText>
        <Spacer />

        <ThemedTextInput 
          style={styles.input}
          placeholder={"Book Title"}
          value={title}
          onChangeText={setTitle}
        />
        <Spacer />

        <ThemedTextInput 
          style={styles.input}
          placeholder={"Author"}
          value={author}
          onChangeText={setAuthor}
        />
        <Spacer />

        <ThemedTextInput 
          style={styles.multiline}
          placeholder={"Book Description"}
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <Spacer />

        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{color:"#fff"}}>
            {loading ? "Saving" : "Create Book"}
          </Text>
        </ThemedButton>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Create;

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
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
})