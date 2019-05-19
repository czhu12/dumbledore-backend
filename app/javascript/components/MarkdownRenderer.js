import React from "react"
import PropTypes from "prop-types"
class MarkdownRenderer extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.body}
      </React.Fragment>
    );
  }
}

MarkdownRenderer.propTypes = {
  body: PropTypes.string
};
export default MarkdownRenderer
