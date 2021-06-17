const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const Numberbaseball = require('./Numberbaseball');
const Hot = hot(Numberbaseball);

ReactDom.render(<Numberbaseball />, documnet.querySelector("#root"));