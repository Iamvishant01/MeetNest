import React from 'react'
import { Link } from 'react-scroll';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src="https://cdn-icons-png.flaticon.com/128/3735/3735362.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>&nbsp;
    <a className="navbar-brand name" href="/">MeetNest<span className='dot'>.</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="../notfound/NotFound.html">Docs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="../notfound/NotFound.html">Libraries</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="../notfound/NotFound.html">Components</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" rel="noreferrer" href="https://linktr.ee/iamvishant02" target='_blank'>Devloper's contact</a>
        </li>
      </ul>
      <div className="btns1 d-flex grid gap-2">
      <a href="../notfound/NotFound.html"><button type="button" class="btn btn-outline-primary">Sign up</button></a>
      <Link to="lobby" spy={true} smooth={true} duration={500}><button type="button" class="btn btn-success">Join Meet ?</button></Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
