import Nav from './Nav'
export default function Layout({ children }) {
  return (
    <div>
      <header className="container flex justify-between items-center py-6">
        <div className="header-hex">
          <img src="/images/hex-bee.png" alt="hex bee"/>
          <div>
            <div className="text-xl font-mono">ML&nbsp;&nbsp;Mondays</div>
            <div className="text-xs">NeuralHive PESU ECC • 2025</div>
          </div>
        </div>
        <Nav />
      </header>

      <main className="container">{children}</main>

      <footer className="container text-center py-8">
        <div className="hr-dotted"></div>
        <p className="mt-4 text-sm">Neuralhive PESU ECC © 2025</p>
      </footer>
    </div>
  )
}