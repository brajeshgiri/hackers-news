import React from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import './style.css';

const Pagination = ({ page }) => (
  <div className={'pagination'}>
    <Link role="button" data-testid="previous" aria-label="Previous page" className={'pagination btn'} to={`/app/${page - 1}`}>Previous</Link> |
    <Link role="button" data-testid="next" aria-label="Next page" className={'pagination btn'} to={`/app/${page + 1}`}>Next</Link>
  </div>
);

Pagination.propTypes = {
  page: PropTypes.number
};

export default Pagination;