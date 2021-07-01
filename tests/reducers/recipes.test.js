import { expect } from 'chai';
import {
  findRecipe,
  getTitleFromRecipesNumber,
} from 'src/selectors/recipes';

// On test :
// - La structure comme on l'a fait pour le reducer
// - On test un retour basique
// - On teste l'execution
//   - Un cas qui fait planter la fonction mais du coups qui passe le test
//   - Au moins 2 cas bien différents qui font passer le test

// Ref la doc de Chai
// https://www.chaijs.com/api/bdd/

// On décrit les tests pour les selectors de recipes
describe('selectors for recipes', () => {
  // Et là tout ce qui concerne notre selector findRecipe
  describe('#findRecipe()', () => {
    // Déjà la structure
    describe('structure', () => {
      // Ce doit être une fonction
      it('should be a function', () => {
        expect(findRecipe).to.be.a('function');
      });
      // Doit retourner undefined si il ne trouve pas la recette
      it('should return undefined if not found', () => {
        expect(findRecipe([], '')).to.be.undefined;
      });
      // Doit retourner l'élément qu'on cherche
      it('should return an object if found', () => {
        expect(findRecipe([{ slug: 'find-me' }], 'find-me')).to.be.an('object');
      });
      // Doit lancer une exception si jamais les paramètres ne sont pas envoyés
      it('should throw error if has no parameter', () => {
        // Dans le cas de to.throw, on oublie pas de mettre la fonction findRecipe
        // dans un callback de expect ( c'est marqué dans la doc )
        // si on le fait pas l'exception n'est pas capturée
        expect(() => findRecipe()).to.throw(/recipes parameter is no an array/);
      });
    });
    describe('execution', () => {
      it('should found recipe is there was 2 element in array', () => {
        const elements = [{ slug: 'find-me' }, { slug: 'not-find-me' }];
        expect(findRecipe(elements, 'find-me')).to.be.equal(elements[0]);
      });
      it('should find first recipe in array', () => {
        const elements = [{ slug: 'not-find-me' }, { slug: 'find-me' }, { slug: 'find-me' }];
        expect(findRecipe(elements, 'find-me')).to.be.equal(elements[1]);
      });
      it('should work if an element has no slug', () => {
        const elements = [{ title: 'not-find-me' }, { title: 'find-me' }, { slug: 'find-me' }];
        expect(findRecipe(elements, 'find-me')).to.be.equal(elements[2]);
      });
    });
  });

  describe('#getTitleFromRecipesNumber', () => {
    describe('structure', () => {
      it('should be a function', () => {
        expect(getTitleFromRecipesNumber).to.be.a('function');
      });
      it('should return a string', () => {
        expect(getTitleFromRecipesNumber()).to.be.a('string');
      });
    });
    describe('execution', () => {
      it('should return "Recette à venir. Revenez bientôt" when 0 recipe given', () => {
        expect(getTitleFromRecipesNumber(0)).to.be.equal('Recette à venir. Revenez bientôt');
      });
      it('should return "Découvrez notre recette" when 1 recipe given', () => {
        expect(getTitleFromRecipesNumber(1)).to.be.equal('Découvrez notre recette');
      });
      it('should return "Découvrez toutes nos recettes" when 2 or more recipes given', () => {
        expect(getTitleFromRecipesNumber(2)).to.be.equal('Découvrez toutes nos recettes');
        expect(getTitleFromRecipesNumber(10)).to.be.equal('Découvrez toutes nos recettes');
        expect(getTitleFromRecipesNumber(100)).to.be.equal('Découvrez toutes nos recettes');
      });
    });
  });
});
