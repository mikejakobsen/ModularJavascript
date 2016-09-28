// scoreboard.js
export function addResult(newResult) {
    // add new result to list 
}
export function updateScoreboard() {
    // update the scoreboard here 
}
function somePrivateFunctino() {
    // not part of the api
    // Dosen't export the method
}
export var homeTeam = 'FCK';

// game.js
import * as scoreboard from './scoreboard.js';
// The * start specifies, that you want everything within the object
// sccoreboard is then the name you later on refferences. Fx. scoreboard.update();
scoreboard.updateScoreboard();

// game.js
// If you don't want to import everything
import { addResult, updateScoreboard } from './scoreboard.js';
// No import alias/name
updateScoreboard();

// With an individual alias
import { updateScoreboard as update } from './scoreboard.js';
update();



