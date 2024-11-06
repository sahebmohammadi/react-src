function Header({ title }) {
  return (
    <div>
      <h1 title="header">{title}</h1>
      <h2 data-testid="header-2">header 2</h2>
    </div>
  );
}
export default Header;
