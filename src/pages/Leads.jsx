import { useState, useEffect } from 'react';
import { Edit2, Trash2, Loader2, AlertCircle } from 'lucide-react';
import { databases, appwriteConfig } from '../lib/appwrite';

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        if (!appwriteConfig.databaseId || !appwriteConfig.leadsCollectionId) {
          throw new Error("Appwrite credentials missing in .env.local");
        }
        
        const response = await databases.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.leadsCollectionId
        );
        
        setLeads(response.documents);
      } catch (err) {
        console.error("Failed to fetch leads:", err);
        setError(err.message || "Failed to load leads from database.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <button 
          className="btn btn-primary"
          onClick={() => alert("Open Add New Lead Modal")}
        >
          + Add New lead
        </button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-8">
                  <Loader2 className="animate-spin mx-auto text-primary" size={24} />
                  <p className="text-sm text-muted mt-2">Loading leads...</p>
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="4" className="text-center py-8 text-danger">
                  <AlertCircle className="mx-auto mb-2" size={24} />
                  <p className="text-sm">{error}</p>
                </td>
              </tr>
            ) : leads.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-8 text-muted">
                  No leads found. Add one to get started!
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.$id}>
                  <td className="font-medium">{lead.name}</td>
                  <td className="text-muted">{lead.email}</td>
                  <td>
                    <span className="badge badge-primary bg-orange-100">{lead.status || 'new'}</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-3 text-muted">
                      <Edit2 
                        size={16} 
                        className="cursor-pointer hover:text-primary transition-colors" 
                        onClick={() => alert(`Edit lead: ${lead.name}`)}
                      />
                      <Trash2 
                        size={16} 
                        className="cursor-pointer hover:text-danger transition-colors" 
                        onClick={() => alert(`Delete lead: ${lead.name}`)}
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
