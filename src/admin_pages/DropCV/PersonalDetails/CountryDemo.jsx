import React, { useState, useEffect } from "react";

function CountryDemo() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  const handleCountryChange = (event) => {
    const countryValue = event.target.value;
    setSelectedCountry(countryValue);
    setSelectedCity("");
  };

  return (
    <>
      <div className="form-section">
        <label className="SetLabel-Name">
          <span>*</span>Country
        </label>
        <select
          name="country"
          className="set-dropdown"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option key="" value="">
            Select a country
          </option>
          {countries.map((countryData) => (
            <option key={countryData.iso2} value={countryData.country}>
              {countryData.country}
            </option>
          ))}
        </select>
      </div>

      <div className="form-section">
        <label className="SetLabel-Name">
          <span>*</span>City
        </label>
        <select
          name="city"
          className="set-dropdown"
          value={selectedCity}
          onChange={(event) => setSelectedCity(event.target.value)}
        >
          <option key="" value="">
            Select a city
          </option>
          {(
            countries.find((country) => country.country === selectedCountry)
              ?.cities || []
          ).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default CountryDemo;
