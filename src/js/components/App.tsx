import * as React from 'react';
import styled from 'styled-components';

import HeroByEpisodeComponent from './HeroByEpisode';
import SearchHeroComponent from './SearchHero';
import { Episode } from '../__generated__/types';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

interface AppStateInterface {
  searchText: string;
}

export class App extends React.Component<{}, AppStateInterface> {
  constructor(props: any) {
    super(props);
    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
    this.state = {
      searchText: ''
    }
  }

  render() {
    let view: React.ReactNode;

    if (this.state.searchText) {
      view = <SearchHeroComponent text={this.state.searchText} />
    } else {
      view = <HeroByEpisodeComponent episode={Episode.NEWHOPE} />
    }

    return (
      <Wrapper>
        <Title>Star Wars Characters 🚀</Title>
        <form onSubmit={this.handleSearchFormSubmit}>
          <label>Search</label>
          <input type="text" name="searchText" />
          <input type="submit" value="Submit" />
        </form>
        {view}
      </Wrapper>
    )
  }

  handleSearchFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({searchText: event.currentTarget.searchText.value});
  }
}
