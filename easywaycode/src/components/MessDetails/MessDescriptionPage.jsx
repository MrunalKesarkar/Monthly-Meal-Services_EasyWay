// MessDescriptionPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { config } from '../../services/config';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import { Link } from 'react-router-dom';

const MessDescriptionPage = () => {
  const { id } = useParams();
  const [mess, setMess] = useState(null);

  useEffect(() => {
    const getMess = async () => {
      if (!id) {
        console.error('No mess ID provided');
        return;
      }

      try {
        const foundMess = await axios.get(`${config.serverUrl}/messes/mess/${id}`);
        setMess(foundMess.data);
      } catch (error) {
        console.error('Error fetching mess details:', error);
      }
    };

    getMess();
  }, [id]);

  if (!mess) {
    return <div>Mess not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.messImageContainer}>
          <img
            src={`${config.serverUrl}/${mess.imgPath}`}
            alt={`Image of ${mess.name}`}
            style={styles.image}
          />
        </div>
        <div style={styles.detailsContainer}>
          <h1 style={styles.name}>{mess.name}</h1>
          <h2 style={styles.address}>{mess.address}</h2>
          <p style={styles.description}>{mess.description}</p>
          <p style={styles.price}>Price per meal: Rs. {mess.price}</p>
          <Link
            to={`/shoppingcart/mess/${mess.messId}`}
            style={styles.purchaseLink}
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  messImageContainer: {
    flex: '1',
    marginRight: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  detailsContainer: {
    flex: '2',
  },
  name: {
    fontSize: '2em',
    margin: '0',
  },
  address: {
    fontSize: '1.2em',
    color: '#555',
    margin: '0 0 20px 0',
  },
  description: {
    fontSize: '1em',
    lineHeight: '1.5',
    color: '#333',
    margin: '0 0 20px 0',
  },
  price: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 0 20px 0',
  },
  purchaseLink: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
};

export default MessDescriptionPage;
