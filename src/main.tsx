import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from 'src/views/Root';
import 'src/assets/styles/fonts.css';

const enableMocking = async () => {
	const { worker } = await import('./mocks/browser');

	return worker.start({
		onUnhandledRequest: 'bypass',
	});
};

enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<Root />
		</React.StrictMode>
	);
});
