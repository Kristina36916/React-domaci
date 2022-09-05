import React from 'react'


function Meni() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="#!">Živite zdravo!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a class="nav-link active"  href="./index.php">Početna</a></li>
                        <li className="nav-item"><a class="nav-link" href="./onama.html">Proizvodi</a></li>
                        <li className="nav-item"><a class="nav-link" href="./kontakt.html">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
        
  )
}

export default Meni