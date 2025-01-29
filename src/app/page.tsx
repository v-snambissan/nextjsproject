export default function Home() {
  return (
    // Main container for the homepage content
    <main style={{ textAlign: "center", padding: "20px" }}>
      {/* Container for the greeting */}
      <div>
        {/* Heading with a greeting message */}
        <h1>Welcome to My Website</h1>
        <h3>
          {/* Greeting message with a link */}
          Hello world
        </h3>
      </div>
      {/* Additional content section */}
      <section style={{ marginTop: "30px" }}>
        {/* Subheading for additional content */}
        <h2>Explore More:</h2>
        {/* List of features */}
        <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
          <li style={{ marginBottom: "10px" }}>Learn about JavaScript</li>
          <li style={{ marginBottom: "10px" }}>Discover React.js</li>
          <li style={{ marginBottom: "10px" }}>Master Web Development</li>
        </ul>
      </section>
    </main>
  );
}