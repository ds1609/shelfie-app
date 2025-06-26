import { useEffect, useState } from "react";
import { useBooks } from "../../../hooks/useBooks";

import { StyleSheet } from "react-native";

import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";

import { useLocalSearchParams } from "expo-router";
import Spacer from "../../../components/Spacer";
import ThemedCard from "../../../components/ThemedCard";
import { Colors } from "../../../constants/Colors";
import ThemedLoader from "../../../components/ThemedLoader";

const BookDetails = () => {
    const [ book, setBook ] = useState(null);

    const { id } = useLocalSearchParams();

    const { fetchBookById } = useBooks();

    useEffect(() => {
        async function loadBook() {
            const bookData = await fetchBookById(id);
            setBook(bookData);
            // console.log("bookData",bookData.title);
        }

        loadBook();
    }, [id])

    if(!book){
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
            </ThemedView>
        );
    }

    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedCard style={styles.card}>
            <ThemedText style={styles.title}>{book.title}</ThemedText>
            <ThemedText>Written By: {book.author}</ThemedText>
            <Spacer />

            <ThemedText title={true}>Book Description</ThemedText>
            <Spacer height={10} />
            <ThemedText>{book.description}</ThemedText>
        </ThemedCard>
      </ThemedView>  
    );
}

export default BookDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
    card: {
        margin: 20
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
});