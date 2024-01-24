import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { students as studentsData } from 'src/data/students';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { MainTemplate } from 'src/components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { AddStudent } from './AddStudent';
import { Wrapper } from './Root.styles';

export type StudentType = {
	name: string;
	attendance: string;
	average: string;
};

type StudentsContextType = {
	students: StudentType[];
	handleDeleteStudent: (name: string) => void;
	handleAddStudent: (formValues: StudentType) => void;
};

export const StudentsContext = createContext<StudentsContextType>({
	students: [],
	handleDeleteStudent: () => {},
	handleAddStudent: () => {},
});

export const Root = () => {
	const [students, setStudents] = useState(studentsData);

	const handleDeleteStudent = (name: string) => {
		const filteredStudents = students.filter(student => student.name !== name);
		setStudents(filteredStudents);
	};

	const handleAddStudent = (formValues: StudentType) => {
		const newStudent = {
			name: formValues.name,
			attendance: formValues.attendance,
			average: formValues.average,
		};
		setStudents([newStudent, ...students]);
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<StudentsContext.Provider
						value={{
							students,
							handleDeleteStudent,
							handleAddStudent,
						}}>
						<Wrapper>
							<Routes>
								<Route path='/' element={<Dashboard />} />
								<Route path='/add-student' element={<AddStudent />} />
							</Routes>
						</Wrapper>
					</StudentsContext.Provider>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};
