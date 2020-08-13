import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { nextPage, prevPage, setPage } from '../actions';

const PaginationBar = ({ page, nextPage, prevPage, setPage }) => {
    let leftDisabled = (page === 1) ? 'disabled' : '';
    let rightDisabled = (page === 3) ? 'disabled' : '';

    return (
        <div className="row mt-3">
            <div className="col text-center">

                <nav>
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <button className="btn btn-light" disabled={leftDisabled}>
                                <FontAwesomeIcon
                                    onClick={() => { prevPage() }}
                                    className="overlap-icon"
                                    icon={faChevronLeft}
                                />
                            </button>
                        </li>
                        <li className="page-item"><span className={`page-link ${page === 1 ? 'active' : ''}`} onClick={() => { setPage(1) }}>1</span></li>
                        <li className="page-item"><span className={`page-link ${page === 2 ? 'active' : ''}`} onClick={() => { setPage(2) }}>2</span></li>
                        <li className="page-item"><span className={`page-link ${page === 3 ? 'active' : ''}`} onClick={() => { setPage(3) }}>3</span></li>
                        <li className="page-item">
                            <button className="btn btn-light" disabled={rightDisabled}>
                                <FontAwesomeIcon
                                    onClick={() => { nextPage() }}
                                    className="overlap-icon"
                                    icon={faChevronRight}
                                />
                            </button>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        page: state.page
    };
}

export default connect(mapStateToProps, { nextPage, prevPage, setPage })(PaginationBar);