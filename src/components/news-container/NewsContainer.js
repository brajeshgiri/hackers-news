import React, { useEffect } from 'react';
import { loadComments, onUpvoteAction, onHideAction } from '../../store/comments/action';
import { useSelector } from 'react-redux';
import { NewsDetail, Pagination, LineChart } from '../shared-components';
import { useParams } from "react-router"
import './NewsContainer.css'

const NewsContainer = () => {
  const params = useParams();
  const data = useSelector(state => state.comments);
  const { comments } = data;
  const pageNo = isNaN(params.pageNo) ? 1 : Number(params.pageNo);
  console.log('page no.', params);

  useEffect(() => {
    loadComments(pageNo);
  }, [pageNo]);

  const onUpvote = (commentObject) => {
    onUpvoteAction(commentObject);
  }

  const tableBody = comments.map(row => (
    <div className={'row'} key={row.objectID}>
      <div aria-label="comments count" className={'col hide-on-mobile'}>{row.num_comments}</div>
      <div aria-label="votes count" className={'col'}>{row.points}</div>
      <div className={'col'}>
        <a aria-label="Upvotes" rel="noopener" onClick={() => onUpvote(row)}><div className={'voteLink'}></div></a>
      </div>
      <div aria-label="News details" className={'col4'}>
        <NewsDetail {...row} onHide={onHideAction} />
      </div>
    </div>
  ));

  return (
    <div aria-label="table container" className={'root'}>
      <header aria-label="table header" className={'header'}>
        <div aria-label="Comment header" className={'col hide-on-mobile'}>Comments</div>
        <div aria-label="Vote count header" className={'col'}>Vote Count</div>
        <div aria-label="Up vote header" className={'col'}>Up Vote</div>
        <div aria-label="News details heaer" className={'col4'}>News Details</div>
      </header>
      {
        tableBody
      }
      <Pagination page={pageNo} />
      <hr className={'divder'} />
      <LineChart data={comments} />
    </div>
  )
};

export default NewsContainer;
