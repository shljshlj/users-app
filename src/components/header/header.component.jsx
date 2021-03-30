import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Header = () => {
  return (
    <header>
      <h2>Users App</h2>
      <ColorModeSwitcher justifySelf="flex-end" />
    </header>
  );
}

export default Header;