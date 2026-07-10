import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserSquare2, BarChart2, Settings } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Leads', path: '/leads', icon: UserSquare2 },
    { name: 'Clients', path: '/clients', icon: Users },
    { name: 'Analytics', path: '/analytics', icon: BarChart2 },
    { name: 'Setting', path: '/settings', icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        {/* Simple mock logo for NextGen Arts CRM */}
        <div style={{ background: 'var(--color-primary)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '8px', fontWeight: 'bold' }}>N</div>
        <span>CRM</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'sidebar-link active' : 'sidebar-link'
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="pro-banner">
        <h4 className="mb-2">Upgrade to pro</h4>
        <p className="text-sm text-muted mb-4">Unlock all features and get more power</p>
        <button 
          className="btn btn-primary w-full"
          onClick={() => alert("Upgrade to Pro feature coming soon!")}
        >
          Upgrade to pro
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
