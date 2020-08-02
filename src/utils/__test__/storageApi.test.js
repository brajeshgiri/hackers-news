import { hideNews, getHiddenComments, StorageKeys, upvoteCommentStorage, getUpVoteComments } from '../storageApi';
let setItemSpy;
let getItemsSpy;


describe('utils/storageApi', () => {
    beforeEach(() => {
        setItemSpy = jest.fn();
        getItemsSpy = jest.fn().mockReturnValue('[10,20]');
        Object.defineProperty(window, "localStorage", {
            value: {
                getItem: getItemsSpy,
                setItem: setItemSpy
            },
            writable: true
        });
    });
    test('should store hide comment in storage', () => {
        hideNews(1);
        expect(getItemsSpy).toHaveBeenCalled();
        const calledWith = '[10,20,1]'
        expect(setItemSpy).toHaveBeenCalledWith('HIDE_NEWS', calledWith);
    });

    test('recieved saved comments in local storage ', () => {
        const recievedComments = getHiddenComments();
        expect(getItemsSpy).toHaveBeenCalledWith('HIDE_NEWS');
        expect(recievedComments).toEqual([10, 20]);
    });

    test('on upvote a comment', () => {
        const comment = { story_id: 1, points: 100 };
        upvoteCommentStorage(comment);
        comment.points += 1;
        const expectedValue = JSON.stringify([...[10, 20], comment]);
        expect(getItemsSpy).toHaveBeenCalledWith(StorageKeys.UPVOTE_COMMENT);
        expect(setItemSpy).toHaveBeenCalledWith(StorageKeys.UPVOTE_COMMENT, expectedValue);
    });

    test('get upvotes count', () => {
        getUpVoteComments();
        expect(getItemsSpy).toHaveBeenCalledWith(StorageKeys.UPVOTE_COMMENT);

    })

});