import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Homepage } from './homepage';

export const SampleHomepage = () => (
  <MemoryRouter>
    <Homepage
      profile={{
        name: 'John Doe',
        bio: 'My Bio',
        tagline: 'My Tagline',
        imageUrl:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      }}
    />
  </MemoryRouter>
);
