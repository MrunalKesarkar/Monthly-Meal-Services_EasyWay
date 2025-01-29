import { useState } from "react";
import {
    CitySelect,
    CountrySelect,
    StateSelect,
    LanguageSelect,
  } from "react-country-state-city";
  import "react-country-state-city/dist/react-country-state-city.css";
  
  function CountryState() {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    return (
        <div>
            <div className="row">
                <div className="col">
                <h6>Country</h6>
                <CountrySelect
                onChange={(e) => {
                setCountryid(e.id);
                 }}
                placeHolder="Select Country"
                />
                </div>

                <div className="col">
                <h6>State</h6>
                <StateSelect
                countryid={countryid}
                onChange={(e) => {
                setstateid(e.id);
                }}
                placeHolder="Select State"
                />
                </div>

                <div className="col">
                <h6>City</h6>
                <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(e) => {
                }}
                placeHolder="Select City"
                /></div>
            </div>
        </div>
        
    );
  }

  export default CountryState