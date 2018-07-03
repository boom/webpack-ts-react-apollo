import * as React from 'react';
import { SearchForCharacter } from '../queries';
import { Query } from 'react-apollo';

import CharacterComponent from './Character';
import {
  SearchCharacterQueryVariables,
  SearchCharacterQuery
} from '../__generated__/types';

class SearchQuery extends Query<SearchCharacterQuery, SearchCharacterQueryVariables> {}

interface HeroSearchQueryProps {
  text: string;
}

export const SearchHeroComponent: React.SFC<HeroSearchQueryProps> = (props) => {

  return (
    <SearchQuery query={SearchForCharacter} variables={{ text: props.text }}>
      {({ loading, data, error }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <h1>ERROR</h1>;
        if (!data) return <div>no data</div>;

        if (data.search && data.search.length) {
          return data.search.map((character, i) => {
            if (character.name) return <CharacterComponent key={i} character={character} />;
            return
          });
        } else {
          return <p>No Results</p>;
        }
      }}
    </SearchQuery>
  )
}

export default SearchHeroComponent;
