import React from 'react';

const Header = ({ detailView, setDetailView }) => {
  return (
    <header className="header">
      <button
        aria-label="Return to list view"
        className="header__back"
        hidden={!detailView || detailView === 'closed'}
        type="button"
        onClick={() => setDetailView('closed')}
      >
        <img
          className="chevron-left"
          src="/static/icons/chevron-left.svg"
          alt="Back to list view"
        />
      </button>
      <h1>Lunch Tyme</h1>
      <button className="header__map-toggle" type="button" onClick={() => setDetailView('opened')}>
        <img src="/static/images/icon-map.png" alt="back button" />
      </button>
    </header>
  );
};

export default Header;
