import { createContext, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

import { databases } from "../lib/appwrite";
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
            console.log("Books",response.documents);

        } catch (error) {
            console.log("fetchBooks Error", error)
        }
    }

    async function fetchBookById(id) {
        try {
            
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
            
        } catch (error) {
            console.log("deleteBook Error", error)
        }
    }

    useEffect(() => {
        if(user){
            fetchBooks();
        } else {
            setBooks([]);
        }
    }, [user]);

    return (
        <BooksContext.Provider value={{books, fetchBooks, fetchBookById, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    );
}