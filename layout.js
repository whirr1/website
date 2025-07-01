// layout.js - CORRECTED VERSION

const Layout = ({ children }) => {
    return (
        <> 
            <nav>
                <ul>
                    {/* Using relative links is the safest option */}
                    <li><a href="index.html">Home</a></li>
                    <li><a href="education.html">Education</a></li>
                    <li><a href="accomplishments.html">Accomplishments</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="projects.html">Projects</a></li>
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
