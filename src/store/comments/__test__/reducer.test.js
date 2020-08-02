import { commentReducer } from '../reducer';
import { LOAD_COMMENTS, ON_UPVOTE, ON_HIDE } from '../type';

describe('Comments Reducer', () => {
  const inialState = { comments: [], page: 1 };
  const comments = [{ points: 10, story_id: 1, title: 'this is test' }];

  test('load comments', () => {

    expect(commentReducer(inialState, {
      type: LOAD_COMMENTS, value: {
        comments: comments,
        page: 1
      }
    })).toEqual({
      comments: comments,
      page: 1
    });
  });


  test('on unvote', () => {
    const newState = commentReducer({ ...inialState, comments: comments }, {
      type: ON_UPVOTE, value: comments[0]
    });
    expect(newState.comments[0].points).toBe(11);
  });


  test('on hide', () => {
    const newState = commentReducer({ ...inialState, comments: comments }, {
      type: ON_HIDE, value: 1
    });
    expect(newState.comments.length).toBe(0);
  });

});
