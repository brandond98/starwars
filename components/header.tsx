import dayjs from 'dayjs';

const Header = () => {
  const now = dayjs().format('DD/MM/YYYY');
  return <header>{now}</header>;
};

export default Header;
