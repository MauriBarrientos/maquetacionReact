export const Header = () => {
    return (
        <header className="mb-auto">
        <div>
          <nav className="nav nav-masthead justify-content-center float-md-start">
            <a className="nav-link text-white" href="index.html">Inicio</a>
            <a className="nav-link text-white" href="./empresa/index.html">Empresa</a>
            <a className="nav-link text-white" href="./support/index.html">Soporte</a>
          </nav>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link text-white" href="./login/index.html">Ingresar</a>
            <a className="nav-link text-white" href="./registro/index.html">Registrarse</a>
          </nav>
        </div>
      </header>
    )
}