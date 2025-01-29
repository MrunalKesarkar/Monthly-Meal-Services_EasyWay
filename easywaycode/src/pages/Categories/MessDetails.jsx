import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMessDetails } from "../../services/mess"; // API for fetching mess details
import Navbar from "../../components/Navbar/navbar";

function MessDetails() {
  const [details, setDetails] = useState(undefined);
  const location = useLocation();

  const loadMessDetails = async (id) => {
    try {
      const result = await getMessDetails(id);
      if (result.status === "success") {
        setDetails(result.data);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Failed to load mess details.");
    }
  };

  useEffect(() => {
    loadMessDetails(location.state.id);
  }, [location.state.id]);

  const onSubscribe = () => {
    toast.success("Subscribed to this mess!");
  };

  return (
    <div>
      <Navbar />
      {details && (
        <div className="mess-details-container">
          <div className="mess-image-container">
            <img
              className="mess-image"
              src={`${details.imageUrl}`}
              alt={details.name}
            />
          </div>
          <div className="mess-info-container">
            <h2>{details.name}</h2>
            <h3>Location: {details.location}</h3>
            <div className="mess-pricing">Price: ₹{details.price}/month</div>
            <button onClick={onSubscribe} className="subscribe-btn">
              Subscribe
            </button>
            <hr />
            <div className="mess-description">
              <h4>About this mess</h4>
              <p>{details.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessDetails;




/* //make new folder for this
.mess-details-container {
    display: flex;
    gap: 20px;
    margin: 40px auto;
    padding: 20px;
    max-width: 1200px;
  }
  
  .mess-image-container {
    flex: 1;
  }
  
  .mess-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  
  .mess-info-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .mess-info-container h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .mess-info-container h3 {
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 15px;
  }
  
  .mess-pricing {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
    color: #28a745;
  }
  
  .subscribe-btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  .subscribe-btn:hover {
    background-color: #0056b3;
  }
  
  .mess-description {
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
  }
*/  