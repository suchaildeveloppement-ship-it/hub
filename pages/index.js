import apps from "../apps.config";

export default function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Mon Hub</h1>
        <p style={styles.subtitle}>Accès rapide à mes applications</p>

        <div style={styles.grid}>
          {apps.map((app) => (
            <a
              key={app.url}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.card}
            >
              <h2 style={styles.cardTitle}>{app.name}</h2>
              <p style={styles.cardDesc}>{app.description}</p>
              <span style={styles.link}>Ouvrir →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    color: "#fafafa",
    fontFamily: "system-ui, -apple-system, sans-serif",
    padding: "48px 20px",
  },
  container: {
    maxWidth: 900,
    margin: "0 auto",
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 8,
  },
  subtitle: {
    color: "#a1a1aa",
    marginBottom: 40,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 16,
  },
  card: {
    display: "block",
    background: "#18181b",
    border: "1px solid #27272a",
    borderRadius: 12,
    padding: 20,
    textDecoration: "none",
    color: "inherit",
    transition: "border-color 0.2s ease",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    margin: "0 0 6px 0",
  },
  cardDesc: {
    fontSize: 14,
    color: "#a1a1aa",
    margin: "0 0 14px 0",
  },
  link: {
    fontSize: 14,
    color: "#3b82f6",
  },
};
