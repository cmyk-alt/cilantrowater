import matter from "gray-matter";

function App() {
  const content = fetch("/content/home.md")
    .then(res => res.text())
    .then(text => matter(text));

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Cilantro</h1>
      <p>Address: R-680 Rabale MIDC, TTC Industrial Area, Rd Number 19, Navi Mumbai</p>
    </div>
  );
}

export default App;
