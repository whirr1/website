function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', color: 'white' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#282c34', padding: '10px', textAlign: 'center', color: 'white' }}>
      <p>&copy; 2024 My Website</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <header style={{ backgroundColor: '#282c34', padding: '20px', textAlign: 'center', color: 'white' }}>
        <h1>Welcome to My Website</h1>
        <p>This is a simple React component rendering the header.</p>
      </header>
      <main style={{ padding: '20px' }}>
        <h2>About Us</h2>
        <p>Our website is powered by React for a dynamic user experience.</p>
      </main>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
