import { FormEvent, useState } from 'react';
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

const initialFormValues = {
	name: '',
	attendance: '',
	average: '',
};

export const Root = () => {
	const [students, setStudents] = useState(studentsData);
	const [formValues, setFormValues] = useState(initialFormValues);

	const handleDeleteStudent = (name: string) => {
		const filteredStudents = students.filter(student => student.name !== name);
		setStudents(filteredStudents);
	};

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleAddStudent = (e: FormEvent) => {
		e.preventDefault();

		const newStudent = {
			name: formValues.name,
			attendance: formValues.attendance,
			average: formValues.average,
		};
		setStudents([newStudent, ...students]);

		setFormValues(initialFormValues);
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<Wrapper>
						<Routes>
							<Route path='/' element={<Dashboard students={students} handleDeleteStudent={handleDeleteStudent} />} />
							<Route
								path='/add-student'
								element={
									<AddStudent
										formValues={formValues}
										handleInputChange={handleInputChange}
										handleAddStudent={handleAddStudent}
									/>
								}
							/>
						</Routes>
					</Wrapper>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};
