import React from 'react';
import PropTypes from 'prop-types';
import { timeSince } from '../../utils/timeUtil';
import './style.css';

const NewsDetail = ({ created_at, author, story_title, story_url, story_id, onHide }) => (
    <div className="news-details">
        <label aria-label="News Title" className={"title"}>{story_title}</label>
        <a aria-label="Comment Url" rel="noopener" className={"url hide-on-mobile"} href={story_url} target="_blank">{`${story_url ? `(${story_url})` : ''}`}</a>
            by <span aria-label="author" className={"author"}> {author} </span>
        <span>{timeSince(created_at)} ago </span>
            [ <a aria-label="Hide Comment" onClick={() => onHide(story_id)} className={"hide"}> hide</a> ]
    </div>
);

NewsDetail.propTypes = {
    created_at: PropTypes.string,
    author: PropTypes.string,
    story_title: PropTypes.string,
    story_url: PropTypes.string,
    story_id: PropTypes.number,
    onHide: PropTypes.func
};

export default NewsDetail;