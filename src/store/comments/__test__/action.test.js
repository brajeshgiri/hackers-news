import { loadComments, onUpvoteAction, onHideAction } from '../action';
import store, { dispatch } from '../../index';
import axios from 'axios';
import { LOAD_COMMENTS, ON_UPVOTE, ON_HIDE } from '../type';

jest.mock('../../index');
jest.mock('axios');

const mockData = {
    data: {
        hits: [
            {
                objectID: '1',
                title: 'a',
            },
            {
                objectID: '2',
                title: 'b',
            },
        ],
    },
};

Object.defineProperty(window, "localStorage", {
    value: {
        getItem: jest.fn().mockReturnValue('[10,20]'),
        setItem: jest.fn()
    },
    writable: true
});


describe('Comments Action', () => {
    test('load comments', (done) => {
        axios.get.mockImplementationOnce(() => Promise.resolve(mockData));
        store.dispatch = jest.fn();
        loadComments(1).then(d => {
            expect(dispatch).toHaveBeenCalledWith({ type: LOAD_COMMENTS, value: { comments: mockData.data.hits, page: 1 } });
            done();
        });
    });

    test('on upvote', () => {
        onUpvoteAction(mockData.data.hits[0]);
        expect(dispatch).toHaveBeenCalledWith({ type: ON_UPVOTE, value: mockData.data.hits[0] });
    });


    test('on hide', () => {
        onHideAction(11);
        expect(dispatch).toHaveBeenCalledWith({ type: ON_HIDE, value: 11 });
    });
})