import gql from 'graphql-tag';

export const CharacterFragment = gql`
  fragment CharacterFragment on Character {
    name
    id
    friends {
      name
      id
      appearsIn
    }
  }
`;

export const GetEpisodeHero = gql`
  query GetEpisodeHero($episode: Episode!) {
    hero(episode: $episode) {
      ...CharacterFragment
    }
  }

  ${CharacterFragment}
`;

export const SearchForCharacter = gql`
  query SearchForCharacter($text: String!) {
    search(text: $text) {
      ...CharacterFragment
    }
  }

  ${CharacterFragment}
`;