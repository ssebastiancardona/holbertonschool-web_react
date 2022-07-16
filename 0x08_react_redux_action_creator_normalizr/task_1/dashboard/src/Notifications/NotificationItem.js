import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
	render() {
		let {id,type,value,html,markAsRead} = this.props;
		let style = (type === 'urgent') ? styles.urgentNotif : styles.defaultNotif;
		return (
		<Fragment>
			{
				html !== undefined &&
				<li
					className={css(style)}
					data-priority-type={type}
					dangerouslySetInnerHTML={html}
					onClick={() => markAsRead(id)}
				/>
			}
			{
				html === undefined &&
				<li
					className={css(style)}
					data-priority-type={type}
					onClick={() => markAsRead(id)}>
						{value}
				</li>
			}
		</Fragment>
	)}
}

const styles = StyleSheet.create({
	defaultNotif: {
		color: 'blue',
		'@media (max-width: 900px)': {
			borderBottom: '1px solid black',
			padding: '10px 8px'
		  }


	},
	urgentNotif: {
		color: 'red',
		'@media (max-width: 900px)': {
			borderBottom: '1px solid black',
			padding: '10px 8px'
		  }


	},

});


NotificationItem.propTypes = {
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
	type: "default",
};

export default NotificationItem;
