import React from 'react';
import './MessView.css';

import { Link } from 'react-router-dom';
import { config } from '../../services/config'; // Import config to get the server URL

const MessView = ({ messes }) => {
    return (
        <section className="most-messes">
            <div className="container" id="Mess">
                <div className="row">
                    <div className="col-md-12">
                        <h2><b>All Messes</b></h2>
                    </div>
                    <div className="messes">
                        {messes.slice(0, 10).map((mess) => (
                            <div className="mess" key={mess.messId}>
                                <Link to={`/mess/${mess.messId}`}>
                                    <img
                                        src={`${config.serverUrl}/${mess.imgPath}`}
                                        alt={mess.name}
                                        loading="lazy"
                                    />
                                </Link>
                                <div className="thumb-content">
                                    <h5>{mess.name}</h5>
                                    <p className="item-price">
                                        <strike>{mess.price}</strike> <span>25% Off</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessView;
