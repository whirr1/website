const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#accomplishments">Accomplishments</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>

            <header>
                <h1>Noah Krull's Awesome Website!</h1>
                <p>Digital Resume and Blog</p>
            </header>

            <main>
                <section id="education">
                    <h2>My Education</h2>
                    {/* Add your education details here */}
                </section>

                <section id="accomplishments">
                    <h2>My Accomplishments</h2>
                    {/* Add your accomplishments here */}
                </section>

                <section id="blog">
                    <h2>My Blog</h2>
                    {/* Your blog posts will go here */}
                </section>

                <section id="projects">
                    <h2>My Projects</h2>
                    {/* Add your project details here */}
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Noah Krull</p>
            </footer>
        </div>
    );
};

const Blog = () => {
    const [markdown, setMarkdown] = React.useState('');

    React.useEffect(() => {
        // Replace 'posts/my-first-post.md' with the path to your markdown file
        fetch('posts/my-first-post.md')
            .then(response => response.text())
            .then(text => setMarkdown(marked.parse(text)));
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: markdown }} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
