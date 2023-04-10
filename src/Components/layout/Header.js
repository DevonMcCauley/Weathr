import React, { useState } from 'react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	
	return (
		<nav className="navbar bg-body-tertiary fixed-top">
			<div className="container-fluid">
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
							<li>this is a test</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
