const { default: styled } = require("styled-components");

// Utilisation de `shouldForwardProp` pour filtrer les props personnalisées
const StyledHeader = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'isMenuOpen' && prop !== 'isVisible',
})`
  padding: 25px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 4%);
  position: fixed;
  top: ${(props) => (props.isVisible ? '0px' : '-100px')}; /* Cache le menu quand on scrolle vers le bas */
  left: 0;
  width: 100%;
  background: white; /* Couleur temporaire */
  z-index: 1000;
  transition: top 0.3s ease-in-out;

  .name {
    h4 {
      font-weight: 800;
      font-size: 18px;
      font-family: 'Poppins';
    }
  }

  .menu {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    align-items: baseline;
    transition: transform 0.3s ease;

    .nav-container {
      display: flex;
      gap: 25px;

      a {
        font-weight: 400;
        font-size: 18px;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
      }
    }

    button {
      background-color: var(--orange);
      border: none;
      border-radius: 25px;
      padding: 10px 25px;
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
    position: relative;

    span {
      width: 25px;
      height: 3px;
      background-color: var(--orange);
      border-radius: 3px;
    }

    .close-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;
      color: var(--orange);
      font-weight: bold;
      display: none; /* Masqué par défaut */
    }
  }

  @media (max-width: 670px) {
    padding: 15px 10%;

    .menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      transform: translateY(-100%);
      z-index: 100;
    }

    .menu.open {
      transform: translateY(0);
    }

    .menu-toggle {
      display: flex;
      z-index: 999;

      span {
        display: ${(props) => (props.isMenuOpen ? 'none' : 'block')};
      }

      .close-icon {
        display: ${(props) => (props.isMenuOpen ? 'block' : 'none')};
      }
    }

    .name {
      order: 1;
    }
  }
`;

export default StyledHeader;
