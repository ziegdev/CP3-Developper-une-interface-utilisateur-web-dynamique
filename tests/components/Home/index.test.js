import { expect } from 'chai';
// On import React car on écrit du JSX
import React from 'react';

// On importe le composant à tester
import Content from 'src/components/Content';
import Card from 'src/components/Card';

// équivalent du render de react-dom,
// permet de simuler un rendu de composant pendant nos tests
import { shallow } from 'enzyme';

describe('Composant Content', () => {
  const recipes = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];
  const wrapper = shallow(<Content recipes={recipes} title="Lorem ispum" />);

  it('render 5 <Card> when 5 recipes given', () => {
    expect(wrapper.find(Card)).to.have.lengthOf(5);
  });

  it('contains an element with .content-list class', () => {
    expect(wrapper.find('.content-list')).to.have.lengthOf(1);
  });
});
