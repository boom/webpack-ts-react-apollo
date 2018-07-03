import * as React from 'react';

import CharacterComponent from './Character';
import { GetEpisodeHero } from '../queries';
import { Query } from 'react-apollo';
import {
  GetHeroByEpisodeQueryVariables,
  GetHeroByEpisodeQuery,
  Episode,
} from '../__generated__/types';

class HeroByEpisodeQuery extends Query<GetHeroByEpisodeQuery, GetHeroByEpisodeQueryVariables> {}

interface HeroByEpisodeQueryProps {
  episode: Episode;
}

export class HeroByEpisodeComponent extends React.Component<HeroByEpisodeQueryProps> {

  render() {
    return (
      <HeroByEpisodeQuery query={GetEpisodeHero} variables={{ episode: this.props.episode }}>
        {({ loading, data, error }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <h1>ERROR</h1>;
          if (!data) return <div>no data</div>;
          return <CharacterComponent character={data.hero} />;
        }}
      </HeroByEpisodeQuery>
    )
  }
}

export default HeroByEpisodeComponent;
