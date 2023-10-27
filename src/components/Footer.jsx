const Footer = () => {
  const today = new Date();
  return (
    <footer className="text-center text-2xl py-4 bg-blue-300">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
