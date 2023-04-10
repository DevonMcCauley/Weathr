import React, { useEffect, useState } from 'react';
import { useStorage } from '../../hooks/use-storage';
import { CloudHail } from 'react-bootstrap-icons';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const [accessStorage, isLoading, error] = useStorage();

	// Handles the toggling of the side nav
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	// Gets the dark mode key from localstorage
	useEffect(() => {
		const storageKey = accessStorage({ key: 'weathr-dark-mode', type: 'get' });
		setDarkMode(storageKey || false);
	}, [accessStorage]);

	// Sets the current theme (light/dark) and stores the dark mode key in localstorage
	useEffect(() => {
		document.body.setAttribute(
			'data-bs-theme',
			`${darkMode ? 'dark' : 'light'}`
		);
		accessStorage({ type: 'set', key: 'weathr-dark-mode', value: darkMode });
	}, [darkMode, accessStorage]);

	return (
		<nav className="navbar bg-body-tertiary fixed-top">
			<div className="container-fluid">
				<div className="h2 d-flex align-items-center">
					Weathr
					<CloudHail className="ms-2 ms-md-3" />
				</div>
				<button className="navbar-toggler" type="button" onClick={handleToggle}>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className={`${isOpen ? 'show' : ''} offcanvas offcanvas-end w-50`}
					tabIndex="-1"
				>
					<div className="offcanvas-header">
						<h5 className="offcanvas-title">Options</h5>
						<button
							type="button"
							className="btn-close"
							onClick={handleToggle}
						></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li className="nav-item">
								<div className="nav-link">
									<div className="form-check form-switch">
										{/* Toggle-able options for the user to change  */}
										{/* Sets the theme (light/dark) of the application */}
										<input
											className="form-check-input"
											type="checkbox"
											role="switch"
											onChange={() => {
												setDarkMode(!darkMode);
											}}
											checked={darkMode}
										/>
										<label className="form-check-label">Dark Mode</label>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
