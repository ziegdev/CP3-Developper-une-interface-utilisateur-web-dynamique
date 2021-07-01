import { expect } from 'chai';
import recipesReducer, { initialState } from 'src/reducers/recipes';
import {
  setRecipes,
} from 'src/actions/recipes';
// via describe je décris un chapitre de tests
// ça permet de s'organiser
// on passe en arguments 2 choses :
// - une chaîne de caractères descriptive
// - une fonction de callback contenant le contenu de ce chapitre
// ( avec les sous-chapitres + les tests )
describe('reducer for recipes', () => {
  // la structure du reducer
  describe('structure', () => {
    // je décris un tests
    // on passe en argument 2 choses :
    // - une chaîne de caractères descriptive
    // - une fonction de callback contenant la liste des assertions
    it('should be a function', () => {
      // On créé notre assertion, pour vérifier que le reducer
      // et non pas son retour ( c'est pour ça qu'on ne l'execute pas )
      // est une fonction
      expect(recipesReducer).to.be.a('function');
    });

    it('should return an object', () => {
      expect(recipesReducer()).to.be.an('object');
    });
    it('should return initial state', () => {
      // On compare la référence de l'objet avec equal
      // l'équivalent du ===
      expect(recipesReducer()).to.be.equal(initialState);
    });
  });

  // execution avec action
  describe('with actions', () => {
    it('should return a modified state  where receive SET_RECIPES action', () => {
      const recipes = [{ title: 'Recette 1' }, { title: 'Recette 2' }];
      const action = setRecipes(recipes);
      const modifiedState = recipesReducer(initialState, action);
      // On construit le state attendu afin de le tester après
      const expectedState = {
        ...initialState,
        list: recipes,
      };
      // On compare l'objet de facon profonde, c'est à dire que même si
      // c'est pas la même ref, on va quand même vérifier qu'il a la même
      // structure
      expect(modifiedState).to.be.eql(expectedState);
    });
  });
});
