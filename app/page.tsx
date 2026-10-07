export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <h2>Data Analyst</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <p className="small-title">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Data Analyst
          <br />
          <span>Turning Data Into Insights</span>
        </h1>

        <p>
          I analyze data using SQL, Python, Excel and Power BI
          to discover insights and support better decisions.
        </p>

        <div className="buttons">
          <a href="#projects" className="button">
            View Projects
          </a>

          <a href="#contact" className="button secondary">
            Contact Me
          </a>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="cards">
          <div className="card">
            <h3>SQL</h3>
            <p>MySQL, Joins, CTEs and Window Functions.</p>
          </div>

          <div className="card">
            <h3>Python</h3>
            <p>Pandas, NumPy, Matplotlib and Data Analysis.</p>
          </div>

          <div className="card">
            <h3>Excel</h3>
            <p>Formulas, Pivot Tables, Data Cleaning and Dashboards.</p>
          </div>

          <div className="card">
            <h3>Power BI</h3>
            <p>Interactive dashboards, reports and visualization.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
  <h2>Projects</h2>

  <div className="cards">
    <div className="card">
      <h3>Sales Data Analysis</h3>
      <p>
        Analyzed sales data using SQL, Excel and Power BI to identify
        sales trends, top products and business insights.
      </p>
    </div>

    <div className="card">
      <h3>HR Analytics</h3>
      <p>
        Analyzed employee data using MySQL and Power BI to understand
        salary, departments and employee performance.
      </p>
    </div>

    <div className="card">
      <h3>Customer Analysis</h3>
      <p>
        Analyzed customer behavior using Python and Pandas to discover
        patterns and generate useful business insights.
      </p>
    </div>
  </div>
</section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>

        <p>Interested in data analytics? Let's connect.</p>

        <a href="mailto:your-email@example.com" className="button">
          Email Me
        </a>
      </section>

      <footer>
        <p>© 2026 Data Analyst Portfolio</p>
      </footer>
    </main>
  );
}