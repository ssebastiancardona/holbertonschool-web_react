import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";
// import Hoc from '../HOC/WithLogging';

import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
	return (
		<table className={css(styles.list)}>
			<thead>
				<CourseListRow textFirstCell="Available courses" isHeader={true} />
				<CourseListRow textFirstCell="Course name" textSecondCell="Credit" />
			</thead>
			<tbody>
				{listCourses.lenggth === 0 ? (
					<tr>
						<td>No course available yet</td>
					</tr>
				) : (
					listCourses.map((course) => {
						return (<CourseListRow
							key={course.id}
							textFirstCell={course.name}
							textSecondCell={course.credit}
							isHeader={false}
						/>)
					})
				)}
			</tbody>
		</table>
	);
}

CourseList.prototypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
	listCourses: [],
}

const cssVars = {
  borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
  list: {
    border: `1px solid ${cssVars.borderTableColor}`,
    borderCollapse: "collapse",
    width: "85%",
    margin: "20px auto 0 auto",
  }
});


export default CourseList;
