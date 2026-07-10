import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '');

export const databases = new Databases(client);

// Helper constants for easy access
export const appwriteConfig = {
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || '',
    leadsCollectionId: import.meta.env.VITE_APPWRITE_LEADS_COLLECTION_ID || '',
    clientsCollectionId: import.meta.env.VITE_APPWRITE_CLIENTS_COLLECTION_ID || '',
};

export default client;
