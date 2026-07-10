import { useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const title = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <header className="header">
      <h1 className="text-2xl">{title}</h1>
      <div className="profile-section">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
          alt="User Profile" 
          className="avatar" 
        />
        <div className="flex flex-col">
          <span className="font-semibold">Sohail</span>
          <span className="text-xs text-muted">Administrator</span>
        </div>
        <ChevronDown size={16} className="text-muted ml-2 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
