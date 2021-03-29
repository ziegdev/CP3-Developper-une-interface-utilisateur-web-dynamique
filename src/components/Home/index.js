import React from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import Loading from 'src/components/Loading';
import './styles.scss';

const Home = ({ recipes, loading }) => (
  <Page>
    <AppHeader />
    {loading ? (
      <Loading />
    ) : (
      <Content
        title="Les recettes oRecipes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    )}
  </Page>
);

Home.propTypes = {
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

Home.defaultProps = {
  loading: false,
};

export default Home;
