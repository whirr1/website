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
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <header style={{ backgroundColor: '#282c34', padding: '20px', textAlign: 'center', color: 'white' }}>
        <h1>Noah Krull</h1>
        <p>Welcome to my Website!</p>
      </header>
      <main style={{ padding: '20px' }}>
        <h2>About Us</h2>
        <p>Test.</p>
      </main>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
