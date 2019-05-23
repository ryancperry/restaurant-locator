import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const ActiveMapMarker = () => <div className="map__marker--active" />;

const DetailView = ({ activeRestaurant, detailView, restaurants }) => {
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  useEffect(() => {
    if (restaurants.length > 0) {
      setCurrentRestaurant(restaurants[activeRestaurant]);
    }
  }, [activeRestaurant, restaurants]);
  const { category = '', contact = {}, location = {}, name = '' } = currentRestaurant;
  const { lat, lng, address, city, state, postalCode } = location;

  return (
    <div className={`details__container ${detailView}`}>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB9M99vON3aX3mHy5Z_ltmGMcOgH3lXNDk' }}
          center={{ lat, lng }}
          defaultCenter={{ lat: 32.950787, lng: -96.821118 }}
          defaultZoom={16}
        >
          <ActiveMapMarker lat={lat} lng={lng} text={name} />
        </GoogleMapReact>
      </div>
      <section className="details">
        <header className="details__header">
          <h2>{name}</h2>
          <p>{category}</p>
        </header>
        <address className="details__address">
          <ul className="details__list">
            <li className="details__street">{address}</li>
            <li className="details__city">
              {city}, {state} {postalCode}
            </li>
            <li className="details__phone">
              {contact && contact.formattedPhone ? contact.formattedPhone : ''}
            </li>
            <li>{contact && contact.twitter ? `@${contact.twitter}` : ''}</li>
          </ul>
        </address>
      </section>
    </div>
  );
};

export default DetailView;
