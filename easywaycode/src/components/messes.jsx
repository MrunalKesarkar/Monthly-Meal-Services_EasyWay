import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { config } from '../services/config';
import { cutString } from '../utils';
import { addToCart } from '../features/cartSlice';
//import messService from '../../services/mess';


function Messes({ messes }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddToCart = (mess) => {
    dispatch(addToCart(mess));
    navigate(`/mess-details/${mess.id}`);
  };

  if (!messes || messes.length === 0) {
    return <div>No messes available.</div>;
  }

  const renderMess = (mess) => (
    <div className="col-md-3" key={mess.id}>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-12">
            <img
              onClick={() => navigate(`/mess-details/${mess.id}`)}
              style={{ height: 200, cursor: 'pointer', objectFit: 'cover', width: '100%' }}
              src={`${config.serverUrl}/image/${mess.profileImage || 'default.jpg'}`}
              className="card-img"
              alt={mess.name || 'Mess'}
            />
          </div>
          <div className="col-md-12">
            <div className="card-body">
              <div className="card-text">
                <span style={{ fontWeight: 'bold', fontSize: 18 }}>
                  ₹{mess.pricePerMeal || 'N/A'}
                </span>
              </div>
              <h5 style={{ fontWeight: 'bold' }} className="card-title">
                {cutString(mess.name || 'No Name')}
              </h5>
              <div className="card-text">
                <span>{mess.owner || 'Unknown Owner'}</span>
              </div>
              <div>
                <button onClick={() => onAddToCart(mess)} className="btn btn-success">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const rows = [];
  for (let i = 0; i < messes.length; i += 4) {
    const rowMesses = messes.slice(i, i + 4);
    rows.push(
      <div className="row" key={i}>
        {rowMesses.map((mess) => renderMess(mess))}
      </div>
    );
  }

  return (
    <div className="container-fluid">
      {rows}
    </div>
  );
}

export default Messes;
