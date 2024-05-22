import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SoccerEvents = () => {
  const [soccerEvents, setSoccerEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSoccerEvents = async () => {
      const options = {
        method: 'GET',
        url: 'https://bet365-api-inplay.p.rapidapi.com/bet365/get_sport_events/soccer',
        headers: {
          'X-RapidAPI-Key': 'f9cb54070dmsh5672c93407396abp180a89jsnae1d62139861',
          'X-RapidAPI-Host': 'bet365-api-inplay.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data); // Log the fetched data
        setSoccerEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching soccer events:', error);
      }
    };

    fetchSoccerEvents();
  }, []);

  return (
    <div>
      <h1>Betting Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {soccerEvents.map(match => (
            <div key={match.eventId}>
              <h2>{match.eventName}</h2>
              <p>League: {match.liga}</p>
              <p>Score: {match.score}</p>
              <p>Timer: {match.timer}</p>
              <p>Team 1: {match.team1}</p>
              <p>Team 2: {match.team2}</p>
              <p>
                <a href={match.evLink} target="_blank" rel="noopener noreferrer">
                  Place a bet
                </a>
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SoccerEvents;
