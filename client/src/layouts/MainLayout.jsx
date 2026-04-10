import { Link } from "react-router-dom";
import styled from "styled-components";

/* WRAPPER */
const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

/* NAVBAR */
const Navbar = styled.nav`
  position: sticky;
  top: 0;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 12px 16px;
  z-index: 10;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  font-size: 18px;
`;

const NavLinks = styled.div`
  a {
    margin-left: 16px;
    font-size: 14px;
    color: var(--text-secondary);
  }

  a:hover {
    color: var(--text);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

/* LAYOUT */
const Layout = styled.div`
  display: flex;
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/* SIDEBAR */
const Sidebar = styled.aside`
  width: 220px;
  padding: 20px 10px;
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    color: var(--text-secondary);
    font-size: 15px;
  }

  a:hover {
    color: var(--text);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

/* CONTENT */
const Content = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px;

  @media (max-width: 900px) {
    padding: 12px;
  }
`;

/* FLOATING BUTTON */
const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  background: white;
  color: black;
  font-size: 28px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
`;

/* FOOTER */
const Footer = styled.footer`
  border-top: 1px solid var(--border);
  text-align: center;
  padding: 16px;
  color: var(--text-secondary);
  font-size: 14px;
`;

export default function MainLayout({ children }) {
  return (
    <AppWrapper>
      <Navbar>
        <NavContent>
          <Logo>social-ntw-v2</Logo>

          <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </NavLinks>
        </NavContent>
      </Navbar>

      <Layout>
        <Sidebar>
          <Link to="/">🏠 Home</Link>
          <Link to="/profile">🙍 Profile</Link>
          <Link to="/users">👥 Users</Link>
          <Link to="/login">🔐 Login</Link>
          <Link to="/register">📝 Register</Link>
        </Sidebar>

        <Content>
          {children}
        </Content>
      </Layout>

      <FloatingButton>+</FloatingButton>

      <Footer>
        © 2026 Iliyan Nikolaev Matsin — SoftUni, React September 2026, Final Project
      </Footer>
    </AppWrapper>
  );
}