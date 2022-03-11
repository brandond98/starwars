import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/starwarslogo.png';

const Nav = () => {
  return (
    <nav className="navigation">
      <Image
        src={logo}
        width="130px"
        height="130px"
        className="logo"
        priority
      />
      <ul className="nav-links">
        <li>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/characters" passHref>
            <a className="accordian">Star Wars</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
