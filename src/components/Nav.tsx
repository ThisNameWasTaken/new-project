import { Link } from 'react-router-dom';

const NavItem: React.FC<{ path: string; text: string }> = ({ path, text }) => (
  <li>
    <Link
      to={path}
      className="text-sky-700 font-medium px-8 py-4 hover:bg-sky-100 focus-visible:bg-sky-100 rounded-md focus-visible:outline-none capitalize"
    >
      {text}
    </Link>
  </li>
);

const Nav = () => {
  const items = [
    { text: 'home', path: '/' },
    { text: 'superheroes', path: '/superheroes' },
  ];

  return (
    <nav>
      <ul className="flex gap-2 px-4 py-8">
        {items.map((item) => (
          <NavItem key={item.path} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
