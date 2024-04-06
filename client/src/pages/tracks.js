import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";
import  TrackCard from '../containers/track-card';

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {loading, error, data} = useQuery(TRACKS);

  if (error) return `ERRor! ${error.message}`;
  if(loading) return <LoadingSpinner/>;
  return (
    <Layout grid>
      {" "}
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>
  );
};

export default Tracks;
