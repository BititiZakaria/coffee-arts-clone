export default function Login() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Connexion</h1>
      <form className="max-w-md">
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border" />
        <input type="password" placeholder="Mot de passe" className="w-full mb-4 p-2 border" />
        <button type="submit" className="bg-amber-900 text-white px-6 py-2">Se connecter</button>
      </form>
    </div>
  )
}
