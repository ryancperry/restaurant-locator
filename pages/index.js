import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../app/scss/styles.scss';
import Header from '../app/components/Header/Header';
import ListView from '../app/components/ListView/ListView';
import DetailView from '../app/components/DetailView/DetailView';

const Index = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [activeRestaurant, setActiveRestaurant] = useState(0);
  const [detailView, setDetailView] = useState('');

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'
      );
      setRestaurants([...data.restaurants]);
    })();
  }, []);

  return (
    <div className="layout">
      <Header detailView={detailView} setDetailView={setDetailView} />
      <ListView
        restaurants={restaurants}
        setActiveRestaurant={setActiveRestaurant}
        setDetailView={setDetailView}
      />
      <DetailView
        activeRestaurant={activeRestaurant}
        detailView={detailView}
        restaurants={restaurants}
      />
    </div>
  );
};

export default Index;
