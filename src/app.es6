/**
 * This is the main module.
 * Note that all modules are in strict mode by default.
 *
 * The .es6 extension is used by gulp to warp in an AMD module.
 */

// The question comes from the old format module. This is an "existing" module.
// The module has a .js extension, it's already defined with AMD, and gulp won't try to wrap it again.
import question from 'myDependencies/oldFormat';

// The answer comes from a new format module. This is a "new" module that you'd write after the change.
// The module has a .es6 extension, just like this file. It will be converted to an AMD module by 6to5.
import answer from 'myDependencies/newFormat';

// Multiple imports! Sometimes you need more than one value from a module,
// in that case, multiple exports for the rescue!
import {Storage, Magic} from 'myDependencies/classes';

// This file doesn't care where the modules come from, and it can import both the same way.

let storage = new Storage();
let magic = new Magic();

storage.store.unicorns = magic.areUnicornsReal;

storage.saveStore();

console.log(question, answer);

let h1 = document.createElement('h1');
h1.innerHTML = `Question: <strong>${question}</strong> and the answer is <strong>${answer}</strong>`;

let p = document.createElement('p');
p.innerHTML = `Are unicorns real? ${storage.store.unicorns}`;

let container = document.querySelector('.container');

container.appendChild(h1);
container.appendChild(p);