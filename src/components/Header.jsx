import globe from '../assets/globe.png';

export default function Header() {
  return (
    <header>
      <img src={globe} alt="Globe icon" />
      <span>my travel journal.</span>
    </header>
  );
}
