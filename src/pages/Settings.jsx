const Settings = () => {
  return (
    <div className="grid grid-cols-2 gap-8 max-w-4xl">
      {/* Profile Setting */}
      <div className="card flex flex-col gap-6">
        <h3 className="text-xl font-semibold mb-2">Profile Setting</h3>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Full Name</label>
          <input 
            type="text" 
            className="input" 
            defaultValue="Sohail Abbas" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email Address</label>
          <input 
            type="email" 
            className="input" 
            defaultValue="SohailAbbas@13425" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Password</label>
          <input 
            type="password" 
            className="input" 
            defaultValue="...................." 
          />
        </div>
      </div>

      {/* Preferences */}
      <div className="card flex flex-col gap-6">
        <h3 className="text-xl font-semibold mb-2">Preferences</h3>
        
        <div className="flex flex-col gap-4">
          <label className="checkbox-container">
            <input type="checkbox" className="checkbox-input" defaultChecked />
            <span className="text-sm font-medium">Email Notification</span>
          </label>

          <label className="checkbox-container">
            <input type="checkbox" className="checkbox-input" defaultChecked />
            <span className="text-sm font-medium">SMS Notification</span>
          </label>

          <label className="checkbox-container">
            <input type="checkbox" className="checkbox-input" />
            <span className="text-sm font-medium">Dark Mode</span>
          </label>
        </div>

        <div className="mt-auto pt-6 flex justify-center">
          <button 
            className="btn btn-primary px-8 py-3"
            onClick={() => alert("Settings saved successfully!")}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
