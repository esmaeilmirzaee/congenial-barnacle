import React, { useState, useEffect } from 'react';
import { useFetch } from 'use-http';
import { Tab } from 'semantic-ui-react';

import { CreateEpisode } from './profile/podcaster/tabs/CreateEpisode';
import { CreatePodcast } from './profile/podcaster/tabs/CreatePodcast';

const Podcaster = () => {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');

  let { get, post, response, loading, error } = useFetch(
    'http://localhost:5000',
  );

  useEffect(() => {
    let fetchKeywords = async () => {
      let keywords = await get('/api/keywords');
      let tagList = keywords.map((k) => {
        return { key: k.tag, text: k.tag, value: k.tag };
      });
      setTags(tagList);
    };
    fetchKeywords();
  }, []);

  const onSubmit = async () => {
    if (name && brand && description && selectedTags) {
      console.log(`${name} created.`);
      await post(
        '/api/keywords',
        {
          name,
          brand,
          description,
          selectedTags,
        },
        { header: { 'Content-Type': 'application/json' } },
      );
    } else {
      console.log('There is something wrong.');
    }
  };

  const panes = [
    {
      menuItem: 'Podcast',
      render: () => (
        <CreatePodcast
          styles={styles}
          tags={tags}
          value={selectedTags}
          handleTags={(e, { value }) => setSelectedTags(value)}
          handleName={(e) => setName(e.target.value)}
          handleBrand={(e) => setBrand(e.target.value)}
          handleDescription={(e) => setDescription(e.target.value)}
          handleSubmit={onSubmit}
        />
      ),
    },
    {
      menuItem: 'Episode',
      render: () => <CreateEpisode styles={styles} />,
    },
  ];

  return (
    <>
      <Tab
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={panes}
      />
    </>
  );
};

export default Podcaster;

const styles = {
  space: {
    margin: '1rem 0',
  },
};
