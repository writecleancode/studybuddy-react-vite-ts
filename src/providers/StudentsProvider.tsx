import { ReactNode, createContext, useState } from 'react';
import { students as studentsData } from 'src/data/students';

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

type StudentsProviderProps = {
    children: ReactNode
}

export const StudentsContext = createContext<StudentsContextType>({
	students: [],
	handleDeleteStudent: () => {},
	handleAddStudent: () => {},
});

export const StudentsProvider = ({ children }: StudentsProviderProps) => {
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
		<StudentsContext.Provider
			value={{
				students,
				handleDeleteStudent,
				handleAddStudent,
			}}>
			{children}
		</StudentsContext.Provider>
	);
};
