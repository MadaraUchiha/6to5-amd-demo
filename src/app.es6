/**
 * This is the main module.
 * Note that all modules are in strict mode by default.
 */

import question from 'myDependencies/oldFormat';
import answer from 'myDependencies/newFormat';

console.log(question, answer);

let p = document.createElement('p');
p.innerHTML = `Question: <strong>${question}</strong> and the answer is <strong>${answer}</strong>`;
document.querySelector('.container').appendChild(p);