import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  background: white;
  position: fixed;
  top: 10vh;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;

  a {
    padding: 0.5rem 0.8rem;
    text-decoration: none;
    font-size: 24px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
