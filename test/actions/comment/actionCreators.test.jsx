import * as actions from '../../../src/actions/comment/actionCreators';
import * as types from '../../../src/constants/comment/actionTypes';

describe("comment/actionCreator", () => {
    it('test initComments', () => {
        const comments = { key: "key1", value: "value1" }
        const expectedAction = {
            type: types.INIT_COMMNETS,
            comments
        }
        expect(actions.initComments(comments)).toEqual(expectedAction)
    })

    it('test addComment', () => {
        const comment = { key: "key1", value: "value1" }
        const expectedAction = {
            type: types.ADD_COMMENT,
            comment
        }
        expect(actions.addComment(comment)).toEqual(expectedAction)
    })

    it('test deleteComment', () => {
        const commentIndex = 1
        const expectedAction = {
            type: types.DELETE_COMMENT,
            commentIndex
        }
        expect(actions.deleteComment(commentIndex)).toEqual(expectedAction)
    })
})