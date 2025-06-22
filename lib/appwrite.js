import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
                .setEndpoint('https://fra.cloud.appwrite.io/v1')
                .setProject('68554024003b7071b116')
                .setPlatform('com.practicelab.shelfieapp');

export const account = new Account(client);
export const avatars = new Avatars(client);