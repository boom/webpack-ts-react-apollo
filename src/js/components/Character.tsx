import * as React from 'react';

import {Character} from '../__generated__/types';

interface CharacterProps {
  character: Character;
}

export class CharacterComponent extends React.Component<CharacterProps> {

  render() {
    let friends;

    if (this.props.character.friends) {
      friends = this.props.character.friends.map(friend => {
        return (
          <li key={friend.id}>
            {friend.name}: {friend.appearsIn.map(x => x && x.toLowerCase()).join(', ')}
          </li>
        )
      })
    } else {
      friends = 'No friends';
    }

    return (
      <div>
        <h3>{this.props.character.name}</h3>
        <ul>
          { friends }
        </ul>
      </div>
    )
  }
}

export default CharacterComponent;
