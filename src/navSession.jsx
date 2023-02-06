import "./assets/css/nav.css";

export default function NavSession() {
  return (
    <header>
      <nav>
        <h1 className="h1-nav">Simple Blog</h1>

        <div className="nav-container">
          <a href="/">Home</a>
          <a placeholder="hola" href="/post">
            Publicar post
          </a>
        </div>
      </nav>
    </header>
  );
}
