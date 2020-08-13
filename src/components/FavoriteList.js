import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { deleteFavorite } from '../actions';

const FavoriteList = ({ favorites, deleteFavorite }) => {

    const renderFavorites = favorites.map((favorite, idx) => {
        return (
            <div
                className="card mb-2"
                key={`${favorite.title}_${idx}`}
            >
                <div className="wrapper">
                    <img src={favorite.thumbnail} className="card-img-top" alt="favorite" />
                    <div className="overlap">
                        <FontAwesomeIcon
                            onClick={() => deleteFavorite(favorite)}
                            className="overlap-icon"
                            icon={faMinusCircle}
                        />
                    </div>
                </div>

                <div className="card-body">
                    <p className="card-text text-center"><a href={favorite.href} target="_blank"><strong>{favorite.title}</strong></a></p>
                </div>
            </div >
        )
    })

    return (
        <div className="row favorite">
            <div className="col d-flex flex-wrap justify-content-around">
                {renderFavorites}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
}

export default connect(mapStateToProps, { deleteFavorite })(FavoriteList);