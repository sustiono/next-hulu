import Image from "next/image";

const Header = () => {
  return (
    <header>
      <h1>This is a header</h1>
      <Image
        className='object-content'
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
