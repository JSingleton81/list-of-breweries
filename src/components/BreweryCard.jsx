import React,{useState} from "react";
import Heart from "react-animated-heart";


const BreweryCard = ({brewery}) => {
  const [isClick, setClick] = useState(false);

  // const {brewery} = props 
  return (
    <div>
      <h2>{brewery.name}</h2>
      <iframe src={brewery.website_url} />
      <p>{brewery.phone}</p>
      <p>{brewery.address_1}</p>
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />

    </div>
  );
};

export default BreweryCard;
