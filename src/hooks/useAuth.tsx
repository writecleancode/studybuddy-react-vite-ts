import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

type AuthProviderProps = {
	children: ReactNode;
};

export type authDataType = {
	login: string;
	password: string;
};

type AuthContextType = {
	user: null | authDataType;
	handleSignIn: ({ login, password }: authDataType) => void;
	handleSignOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
	user: null,
	handleSignIn: () => {},
	handleSignOut: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState(null);

	const handleSignIn = async ({ login, password }: authDataType) => {
		try {
			const response = await axios.post('/login', { login, password });
			setUser(response.data);
			localStorage.setItem('token', response.data.token);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSignOut = () => {
		setUser(null);
		localStorage.removeItem('token');
	};

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			(async () => {
				try {
					const response = await axios.get('/me', {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					setUser(response.data);
				} catch (error) {
					console.log(error);
				}
			})();
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				handleSignIn,
				handleSignOut,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const auth = useContext(AuthContext);

	if (!auth) {
		throw Error('useAuth needs to be used inside AuthContext');
	}

	return auth;
};