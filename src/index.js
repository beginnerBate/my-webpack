import {cube} from './math.js'
import './style.css'
function component () {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')
  element.classList.add('hello')
  return element; 
}

document.body.appendChild(component())
