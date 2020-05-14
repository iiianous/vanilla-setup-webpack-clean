import './assets/scss/app.scss';
import { HelloWorld } from './modules/HelloWorld';

const body = document.querySelector('body');
body.prepend(HelloWorld('Webpack setup'));