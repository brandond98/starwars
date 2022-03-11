import { useRouter } from 'next/router';
import Link from 'next/link';

const BreadCrumbs = () => {
  const router = useRouter();
  const splitPath = router.asPath.split('/');

  return (
    <div className="breadcrumbs">
      <Link href="/">
        <a>Home</a>
      </Link>
      {splitPath.map((path) => {
        return <span>{path}/</span>;
      })}
    </div>
  );
};

export default BreadCrumbs;
