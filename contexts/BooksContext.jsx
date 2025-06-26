import { createContext, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

import { databases, client } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";

export const BooksContext = createContext();

const DATABASE_ID = "685a5327001c49079e9d";
const COLLECTION_ID = "685a539c003e1571b68a";

export function BooksProvider({ children}){
    const [books, setBooks] = useState([]);
    const { user } = useUser();

    async function fetchBooks() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.equal("userId", user.$id)
                ]
            );

            setBooks(response.documents);
            // console.log("Books",response.documents);

        } catch (error) {
            console.log("fetchBooks Error", error)
        }
    }

    async function fetchBookById(id) {
        try {
            const response = await databases.getDocument(
                DATABASE_ID,
                COLLECTION_ID,
                id
            )
            return response;
        } catch (error) {
            console.log("fetchBookById Error", error)
        }
    }

    async function createBook(data) {
        try {
            const newBook = databases.createDocument(
                DATABASE_ID, 
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            )
        } catch (error) {
            console.log("createBook Error", error);
        }
    }

    async function deleteBook(id) {
        try {
            await databases.deleteDocument(
                DATABASE_ID,
                COLLECTION_ID,
                id
            );
        } catch (error) {
            console.log("deleteBook Error", error)
        }
    }

    useEffect(() => {
        let unsubscribe;
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

        if(user){
            fetchBooks();

            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response;
                
                if(events[0].includes("create")){
                    setBooks((preBooks) => [...preBooks, payload]);
                }

                if(events[0].includes("delete")){
                    setBooks((preBooks) => preBooks.filter((book) => book.$id !== payload.$id));
                }
            })
        } else {
            setBooks([]);
        }

        return () => {
            if(unsubscribe) unsubscribe();
        }
    }, [user]);

    return (
        <BooksContext.Provider value={{books, fetchBooks, fetchBookById, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    );
}