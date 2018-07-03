/* tslint:disable */
//  This file was automatically generated and should not be edited.

// The episodes in the Star Wars trilogy
export enum Episode {
  NEWHOPE = 'NEWHOPE', // Star Wars Episode IV: A New Hope, released in 1977.
  EMPIRE = 'EMPIRE', // Star Wars Episode V: The Empire Strikes Back, released in 1980.
  JEDI = 'JEDI', // Star Wars Episode VI: Return of the Jedi, released in 1983.
}

export interface Character {
  id: number;
  name: string;
  friends: [Character];
  appearsIn: [Episode];
}

export interface GetHeroByEpisodeQueryVariables {
  episode: Episode;
}

export interface GetHeroByEpisodeQuery {
  hero: Character;
}

export interface SearchCharacterQueryVariables {
  text: string;
}

export interface SearchCharacterQuery {
  search: [Character]
}
