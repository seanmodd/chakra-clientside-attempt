import Link from 'next/link';

const DashboardNav = () => {
  const active = typeof window !== 'undefined' ? window.location.pathname : '';
  //   console.log(active);
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className={`nav-link ${active === '/dashboard' && 'active'}`}
          href="/profile/dashboard"
        >
          Your Bookings
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${active === '/dashboard/seller' && 'active'}`}
          href="/profile/dashboard-seller"
        >
          Your Hotels
        </Link>
      </li>
    </ul>
  );
};

export default DashboardNav;
