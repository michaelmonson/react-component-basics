// import keyConceptsImage from '../../../images/key-concepts.png';
import keyConceptsImage from './key-concepts.png';

function Header() {
  return (
    <header>
      <img src={keyConceptsImage} alt="Medal badge with a star" />
      <h1>Key ReactJS Concepts</h1>
      <br />
      <p>Selected key React concepts you should know about and understand!</p>
    </header>
  );
}

export default Header;
