import React from "react"
import PropTypes from "prop-types"
const ReactMarkdown = require('react-markdown')

class MarkdownRenderer extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ReactMarkdown source={this.props.body}/>
      </React.Fragment>
    );
  }
}

MarkdownRenderer.propTypes = {
  body: PropTypes.string
};
export default MarkdownRenderer
