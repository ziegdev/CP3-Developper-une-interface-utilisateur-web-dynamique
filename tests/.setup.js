require("@babel/register")();
require("ignore-styles");
const enzyme = require("enzyme");
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
enzyme.configure({ adapter: new Adapter() });

// Ce truc est sale mais il fait le job
// c'est ce qu'on appel un workaround
// Son boulot c'est de supprimer les errors qu'on veut pas
const originalError = console.error.bind(console.error);
console.error = function () {
    !arguments[0].toString().includes('Warning: Failed %s type: %s%s')
    && !arguments[0].toString().includes('Not implemented')
    && originalError(...arguments);
};
