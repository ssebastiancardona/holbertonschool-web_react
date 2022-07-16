import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite"

import BodySection from './BodySection';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection title={this.props.title}>
          {this.props.children}
        </BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
    width: "100%",
  },
});

export default BodySectionWithMarginBottom;
