import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Odds = ({ eventId }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOddsData = async () => {
      const options = {
        method: 'GET',
        url: `https://bet365-api-inplay.p.rapidapi.com/bet365/get_event_with_markets/${eventId}`,
        headers: {
          'X-RapidAPI-Key': 'f9cb54070dmsh5672c93407396abp180a89jsnae1d62139861',
          'X-RapidAPI-Host': 'bet365-api-inplay.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data); // Log the fetched odds data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching odds:', error);
      }
    };

    fetchOddsData();
  }, [eventId]);

  return (
    <div>
      <h2>Odds for Event ID: {eventId}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Display odds data here */}
        </div>
      )}
    </div>
  );
};

export default Odds;
