export const StorageKeys = {
    HIDE_NEWS: 'HIDE_NEWS',
    UPVOTE_COMMENT: 'UPVOTE_COMMENT'
}
export const hideNews = (storyId) => {
    const hideStories = JSON.parse(localStorage.getItem(StorageKeys.HIDE_NEWS)) || [];
    if (hideStories.indexOf(storyId) === -1) {
        hideStories.push(storyId);
    }
    localStorage.setItem(StorageKeys.HIDE_NEWS, JSON.stringify(hideStories));
}

export const getHiddenComments = () => {
    const hideStories = JSON.parse(localStorage.getItem(StorageKeys.HIDE_NEWS)) || [];
    return hideStories;
}

export const upvoteCommentStorage = ({ story_id, points }) => {
    const updatedPoints = (points || 0) + 1;
    const votedComments = JSON.parse(localStorage.getItem(StorageKeys.UPVOTE_COMMENT)) || [];
    const index = votedComments.findIndex(news => news.story_id === story_id);
    if (index === -1) {
        votedComments.push({ story_id, points: updatedPoints });
    } else {
        // votedNews.splic
        votedComments.splice(index, 1, { story_id, points: updatedPoints });
    }
    localStorage.setItem(StorageKeys.UPVOTE_COMMENT, JSON.stringify(votedComments));
}

export const getUpVoteComments = () => {
    const upVotesComment = JSON.parse(localStorage.getItem(StorageKeys.UPVOTE_COMMENT)) || [];
    return upVotesComment;
}