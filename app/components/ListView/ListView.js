import React from 'react';

const ListView = ({ restaurants, setActiveRestaurant, setDetailView }) => {
  return (
    <ul className="list">
      {restaurants.length === 0 && <li>Loading</li>}
      {restaurants.length > 0 &&
        restaurants.map((restaurant, index) => {
          const { backgroundImageURL, category, name } = restaurant;
          const count = index + 1;
          return (
            <li className="list-item" key={`restaurant-${count}`}>
              <figure className="list-item__figure">
                <img className="list-item__image" src={backgroundImageURL} alt={name} />
                <figcaption className="list-item__figcaption">
                  <h2 className="list-item__name">{name}</h2>
                  <p className="list-item__category">{category}</p>
                </figcaption>
              </figure>
              <button
                aria-label={`View details for ${name}`}
                className="list-item__button"
                type="button"
                onClick={() => {
                  setActiveRestaurant(index);
                  setDetailView('opened');
                }}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ListView;
