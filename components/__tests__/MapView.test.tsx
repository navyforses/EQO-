import { render, waitFor } from '@testing-library/react';
import React from 'react';
import MapView from '../MapView';
import type { MapLocation } from '../MapView';

const locations: MapLocation[] = [
  { name: 'Tbilisi', description: 'Capital', lat: 41.7151, lng: 44.8271 },
  { name: 'Kvareli', description: 'Birthplace', lat: 41.951, lng: 45.811 },
];

test('renders all markers', async () => {
  const { container } = render(<MapView locations={locations} />);
  await waitFor(() => {
    const markers = container.querySelectorAll('.leaflet-marker-icon');
    expect(markers.length).toBe(locations.length);
  });
});
