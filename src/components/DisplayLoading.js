import { useState, useEffect } from 'react';
import { Hourglass } from 'react-bootstrap-icons';
import Modal from 'react-modal';

const DisplayLoading = ({ label }) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			transform: 'translate(-50%, -50%)',
			height: '25vh',
			width: '25vh',
			overflow: 'hidden',
			display: 'flex',
			alignContent: 'center',
			justifyContent: 'center',
		},
	};

	Modal.setAppElement('#loadingModal');

	useEffect(() => {
		setIsOpen(true);
	}, []);

	return (
		<Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Loading">
			<div className="row align-items-center justify-content-center">
				<Hourglass className="text-primary rotate" size={100} />
				{label}
			</div>
		</Modal>
	);
};

export default DisplayLoading;
