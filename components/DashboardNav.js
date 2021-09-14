
import Link from 'next/link'

const DashboardNav = () => {
  const active = window.location.pathname;
  //   console.log(active);
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className={`nav-link ${active === '/dashboard' && 'active'}`}
          href="/dashboard"
        >
          Your Bookings
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${active === '/dashboard/seller' && 'active'}`}
          href="/dashboard/seller"
        >
          Your Hotels
        </Link>
      </li>
    </ul>
  );
};

export default DashboardNav;
