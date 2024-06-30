import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	const { query, setQuery } = props;
	const handleChange = (event) => {
		setQuery(...query, event.value)
	}
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">FoodBuddy</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item"><Link className="nav-link" to="/indian">Indian</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/american">American</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/british">British</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/canadian">Canadian</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/chinese">Chinese</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/croatian">Croatian	</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/dutch">Dutch</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/egyptian">Egyptian</Link></li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									More Cuisines
								</a>
								<ul className="dropdown-menu">
							<li className="nav-item"><Link className="nav-link" to="/filipino">Filipino</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/french">French</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/greek">Greek</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/irish">Irish</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/italian">Italian</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/jamaican">Jamaican</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/japanese">Japanese</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/kenyan">Kenyan</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/malaysian">Malaysian</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/moroccan">Moroccan</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/polish">Polish</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/portuguese">Portuguese</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/russian">Russian</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/spanish">Spanish</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/thai">Thai</Link></li>
									

								</ul>
							</li>
						</ul>
						<Link type="button" className="btn btn-primary" to='/search'>Search Reciepes</Link>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
