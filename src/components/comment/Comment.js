import React from 'react';
import PropTypes from 'prop-types';

export default class Comment extends React.Component {
    constructor () {
        super();
        this.state = {timeString: ''};
    }

    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(this._updateTimeString.bind(this),5000);
    }

    componentWillUnmount () {
        clearInterval(this._timer);
    }

    handleDeleteComment () {
        if (this.props.onDeleteComment) {
        this.props.onDeleteComment(this.props.index)
        }
    }

    render(){
        const { comment } = this.props
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.userName} :&nbsp;</span>
                </div>
                <p dangerouslySetInnerHTML={{
                __html: this._getProcessedContent(comment.content)
                }} />
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>Delete</span>
            </div>
        );
    }

    _updateTimeString () {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
        timeString: duration > 60
            ? `${Math.round(duration / 60)} Mins ago`
            : `${Math.round(Math.max(duration, 1))} Secs ago`
        })
    }

    _getProcessedContent (content) {
        return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

}

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
}