import React from "react";
import SectionCourse from "@components/SectionCourse";
import { data } from "./data";
import * as S from "./section.styled";

export default function Courses() {
	return (
		<S.CoursesSection>
			<h2 className="gradient_text">Cursos e Formações</h2>

			<S.List>
				{data.map((course) => {
					return (
						<React.Fragment key={course.id}>
							<SectionCourse
								name={course.name}
								institute={course.institute}
								description={course.description}
								link={course.url}
								year={course.year}
							/>
						</React.Fragment>
					);
				})}
			</S.List>
		</S.CoursesSection>
	);
}
