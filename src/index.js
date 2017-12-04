import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CommentApp from './containers/comment/CommentApp';
import commentsReducer from './reducers/comment/comments';
import './components/comment/Comment.css';

const store = createStore(commentsReducer);

ReactDOM.render(
    <Provider store={store}>
        <CommentApp />
    </Provider>,
    document.getElementById('app')
)