var running = true;
var whatever = 0;

function run() {
  if (running) {
    return;
  }
}

console.log(running);

module.exports = run;
