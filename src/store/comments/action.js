import axios from 'axios';
import { LOAD_COMMENTS, ON_UPVOTE, ON_HIDE } from './type';
import { dispatch } from '..';
import { hideNews, getHiddenComments, getUpVoteComments, upvoteCommentStorage } from '../../utils/storageApi';
const uri = "https://hn.algolia.com/api/v1/search"

const loadComments = (page = 1) => {
    const params = {
        tags: 'comment',
        query: '',
        page
    }
    try {
        return axios.get(uri, { params }).then(({ data }) => {
            dispatch({ type: LOAD_COMMENTS, value: { comments: rectificationComments(data.hits), page } });
        });
    } catch (error) {

    }
};

const onPageChange = (page) => {
    location.replace('/' + page)
}

const rectificationComments = (originalComments) => {
    const hiddenComments = getHiddenComments();
    const rectComments = originalComments.filter(oc => hiddenComments.indexOf(oc.story_id) === -1);
    const upVoteComments = getUpVoteComments();
    return rectComments.map((comment) => {
        const storageComment = upVoteComments.find(uvc => uvc.story_id === comment.story_id) || {};
        return mergeComments(comment, storageComment);
    });
};

const mergeComments = (defaultComments, storageComment = defaultComments) => ({ ...defaultComments, ...storageComment });

const onUpvoteAction = (newsObj) => {
    // we can integrate upvote api at here
    upvoteCommentStorage(newsObj);
    dispatch({ type: ON_UPVOTE, value: newsObj });
}

const onHideAction = (storyId) => {
    // we can integrate hide api at here
    hideNews(storyId);
    dispatch({ type: ON_HIDE, value: storyId });
}

export { loadComments, onUpvoteAction, onHideAction };