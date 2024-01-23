import { FormEvent, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { students as studentsData } from 'src/data/students';
import { StudentsList } from 'src/components/organisms/StudentsList/StudentsList';
import { Form } from 'src/components/organisms/Form/Form';
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
				<Wrapper>
					<nav>
						<Link to='/'>Home</Link>
						<Link to='/add-student'>Add student</Link>
					</nav>
					<Routes>
						<Route path='/' element={<StudentsList students={students} handleDeleteStudent={handleDeleteStudent} />} />
						<Route
							path='/add-student'
							element={
								<Form
									formValues={formValues}
									handleInputChange={handleInputChange}
									handleAddStudent={handleAddStudent}
								/>
							}
						/>
					</Routes>
				</Wrapper>
			</ThemeProvider>
		</Router>
	);
};
