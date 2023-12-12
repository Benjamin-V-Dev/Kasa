export default function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <a href="/">
        <p>Retourner sur la page d’accueil</p>
      </a>
    </div>
  )
}