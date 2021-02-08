import React from 'react';
import Podcast from '../components/Podcast';
import episodes from '../tmp/episodes';

const PodcastScreen = ({ match }) => {
  // Note to myself -> Be careful here for type of _id and id
  let podcast = episodes.find((p) => p._id === Number(match.params.id));

  return (
    <>
      {podcast.episodes.map((p) => (
        <Podcast key={p._eid} podcast={p} />
      ))}
    </>
  );
};

export default PodcastScreen;
