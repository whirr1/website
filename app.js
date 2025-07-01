const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/education.html">Education</a></li>
                    <li><a href="/accomplishments.html">Accomplishments</a></li>
                    <li><a href="/blog.html">Blog</a></li>
                    <li><a href="/projects.html">Projects</a></li>
                </ul>
            </nav>

            <header>
                <h1>Noah Krull's Awesome Website!</h1>
                <p>Digital Resume and Blog</p>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <p>&copy; 2025 Noah Krull</p>
            </footer>
        </>
    );
};

const HomePage = () => {
    return (
        <Layout>
            <h2>Welcome!</h2>
            <p>This is the main page of my website. It's great to have you here!</p>
            <p>Feel free to look around at my accomplishments, projects, and my personal blog.</p>
        </Layout>
    );
};

// This renders the HomePage component to the 'root' div
ReactDOM.render(<HomePage />, document.getElementById('root'));
