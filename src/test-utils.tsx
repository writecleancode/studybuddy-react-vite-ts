import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppProviders } from './providers/AppProviders';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
	return <AppProviders>{children}</AppProviders>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
	render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
