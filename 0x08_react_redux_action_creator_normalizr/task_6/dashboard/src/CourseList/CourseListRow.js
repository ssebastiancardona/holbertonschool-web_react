import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
	const [checkboxCheck, setCheckboxCheck] = React.useState(false);
	const style = {
		backgroundColor: '',
	}

	const tableItemStyle = css(
    isHeader ? styles.CourseListTh : styles.CourseListTd
  );

	const checkToggle = () => setCheckboxCheck(!checkboxCheck);

	if (isHeader) {
		style.backgroundColor = '#deb5b545';
		if (textSecondCell == null) {
			return (
				<tr style={style}>
					<th colSpan={2} className={css(styles.CourseListThSpan2)} >{textFirstCell}</th>
				</tr>
			);
		} else {
			return (
				<tr style={styles}>
					<th className={tableItemStyle}>{textFirstCell}</th>
					<th className={tableItemStyle}>{textSecondCell}</th>
				</tr>
			);
		}
	}
	style.backgroundColor = '#f5f5f5ab';
	return (
		<tr className={css(checkboxCheck ? styles.rowChecked : '')}>
			<td className={tableItemStyle}>
				<input type="checkbox" onClick={checkToggle}/>{textFirstCell}
			</td>
			<td className={tableItemStyle}>{textSecondCell}</td>
		</tr>
	);
}

CourseListRow.protoTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

const cssVars = {
  borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
  CourseListTh: {
    borderTop: `1px solid ${cssVars.borderTableColor}`,
    borderBottom: `1px solid ${cssVars.borderTableColor}`,
    textAlign: "left",
    fontSize: "18px",
  },

  CourseListThSpan2: {
    textAlign: "center",
  },

  CourseListTd: {
    textAlign: "left",
  },

	rowChecked: {
		backgroundColor: '#e6e4e4'
	  },
});

export default CourseListRow;
