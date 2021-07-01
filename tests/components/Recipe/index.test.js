import 'jsdom-global/register';
import { expect } from 'chai';
import recipesData from 'src/data';
// On import React car on écrit du JSX
import React from 'react';
import { MemoryRouter, Redirect } from 'react-router-dom';

// On importe le composant à tester
import Recipe from 'src/components/Recipe';
import Loading from 'src/components/Loading';

// équivalent du render de react-dom,
// permet de simuler un rendu de composant pendant nos tests
import { shallow, mount } from 'enzyme';

describe('Composant Recipe', () => {
  describe('structure', () => {
    it('should redirect if has no recipe and no loading', () => {
      const wrapper = shallow(
        <Recipe loading={false} />,
      );
      expect(wrapper.find(Redirect)).to.have.lengthOf(1);
    });
    it('should show <Loading> component if is loading and no recipes', () => {
      const wrapper = shallow(
        <Recipe loading />,
      );
      expect(wrapper.find(Loading)).to.have.lengthOf(1);
    });
  });
  describe('normal use', () => {
    it('should have .presentation element if recipe is given', () => {
      const wrapper = mount(
        <MemoryRouter>
          <Recipe recipe={recipesData[0]} />
        </MemoryRouter>,
      );
      expect(wrapper.find('.presentation')).to.have.lengthOf(1);
    });
  });
});
