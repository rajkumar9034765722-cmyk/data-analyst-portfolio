export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <h2>Rajkumar Kushwaha</h2>
        
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certification">Certification</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
        
      <section id="home" className="hero">
        <p className="small-title">WELCOME TO MY PORTFOLIO</p>

        <h2 className="profile-name">Rajkumar Kushwaha</h2>

        <p className="profile-role">
        Aspiring Data Analyst | SQL | Python | Excel | Power BI
        </p>

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
          <a
           href="/Rajkumar-Kushwaha-Resume.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="button"
          >
           Download Resume
          </a>
        </div>
      </section>

      <section id="about" className="section">
  <h2>About Me</h2>

  <p>
    I am an aspiring Data Analyst with hands-on experience in SQL,
    Python, Excel and Power BI. I enjoy cleaning, analyzing and
    visualizing data to discover meaningful insights and support
    better business decisions.
  </p>
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

      ```tsx
<section id="projects" className="section">
  <h2>My Data Analytics Projects</h2>

  <div className="cards">
    <div className="card">
      <h3>1. Sales Data Analysis — SQL</h3>
      <p>
        Used SQL queries to analyze sales data, calculate total revenue,
        identify top-selling products and discover sales trends.
      </p>
      <p><strong>Tools:</strong> MySQL, SQL</p>
    </div>

    <div className="card">
      <h3>2. Excel Sales Dashboard</h3>
      <p>
        Cleaned and analyzed sales data using Excel, PivotTables,
        charts and formulas to summarize business performance.
      </p>
      <p><strong>Tools:</strong> Microsoft Excel</p>
    </div>

    <div className="card">
      <h3>3. Customer Data Analysis — Python</h3>
      <p>
        Used Python and Pandas to clean customer data, explore patterns
        and generate useful business insights.
      </p>
      <p><strong>Tools:</strong> Python, Pandas</p>
    </div>

    <div className="card">
      <h3>4. Power BI Sales Dashboard</h3>
      <p>
        Designed an interactive dashboard to track sales, revenue,
        product performance and key business metrics.
      </p>
      <p><strong>Tools:</strong> Power BI, DAX</p>
    </div>
  </div>
</section>
```
  
      <section id="education" className="section">
  <h2>Education</h2>

  <div className="card">
    <h3>+2 Commerce</h3>
    <p>Nav Pargati Sen. Sec. School</p>
    <p>2021 | 88%</p>
  </div>
</section>

      <section id="certification" className="section">
  <h2>Certification</h2>

  <div className="card">
    <h3>Patient Care Assistant</h3>
    <p>Healthcare Sector Skill Council</p>
    <p>National Skill Development Corporation (NSDC)</p>
  </div>
</section>

      <section id="contact" className="section contact">
  <h2>Contact</h2>

  <p>Interested in data analytics? Let's connect.</p>

  <div className="buttons">
    <a
      href="https://github.com/rajkumar9034765722-cmyk"
      target="_blank"
      rel="noopener noreferrer"
      className="button"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/rajkumar-kushwaha-data-analyst/"
      target="_blank"
      rel="noopener noreferrer"
      className="button secondary"
    >
      LinkedIn
    </a>
  </div>
</section>

 <footer>
  <p>© 2026 Rajkumar Kushwaha | Aspiring Data Analyst</p>
</footer>
</main>
);
}   
    
 