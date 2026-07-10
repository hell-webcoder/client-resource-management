import { useState, useEffect } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { databases, appwriteConfig } from '../lib/appwrite';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        if (!appwriteConfig.databaseId || !appwriteConfig.clientsCollectionId) {
          throw new Error("Appwrite credentials missing in .env.local");
        }
        
        const response = await databases.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.clientsCollectionId
        );
        
        setClients(response.documents);
      } catch (err) {
        console.error("Failed to fetch clients:", err);
        setError(err.message || "Failed to load clients from database.");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Clients</h2>
        <button 
          className="btn btn-primary"
          onClick={() => alert("Open Add Clients Modal")}
        >
          + Add Clients
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="animate-spin text-primary mb-4" size={32} />
          <p className="text-muted">Loading clients...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-12 text-danger">
          <AlertCircle className="mb-4" size={32} />
          <p>{error}</p>
        </div>
      ) : clients.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-muted">
          <p>No clients found. Add one to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {clients.map((client) => (
            <div key={client.$id} className="card flex flex-col items-center justify-center p-8 gap-4 text-center">
              <h3 className="text-lg font-bold">{client.name}</h3>
              <p className="text-sm text-muted font-medium mb-2">{client.domain}</p>
              <button 
                className="btn btn-primary w-full" 
                style={{ opacity: 0.8 }}
                onClick={() => alert(`Viewing details for ${client.name}`)}
              >
                view
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Clients;
