var Stopwatch = function(elem, options) {

    var timer = createTimer(),
      startButton = createButton("start", start),
      stopButton = createButton("stop", stop),
      resetButton = createButton("reset", reset),
      offset,
      clock,
      interval;
  
    // default options
    options = options || {};
    options.delay = options.delay || 1;
  
    // append elements     
    elem.appendChild(timer);
    elem.appendChild(startButton);
    elem.appendChild(stopButton);
    elem.appendChild(resetButton);
  
    // initialize
    reset();
  
    // private functions
    function createTimer() {
      var s = document.createElement("span");
      s.style.cssText ="font-weight: bold;display: block;";
      return s;
    }
  
    function createButton(action, handler) {
      var b = document.createElement("button");
        b.innerHTML = action;
        b.addEventListener("click", function(event) {
        handler();
        event.preventDefault();
      });
      return b;
    }
  
    function start() {
      if (!interval) {
        offset = Date.now();
        interval = setInterval(update, options.delay);
      }
    }
  
    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
  
    function reset() {
      clock = 0;
      render(0);
    }
  
    function update() {
      clock += delta();
      render();
    }
  
    function render() {
      timer.innerHTML = clock / 1000;
    }
  
    function delta() {
      var now = Date.now(),
        d = now - offset;
  
      offset = now;
      return d;
    }
  };
  
  
  // basic examples
  var elems = document.getElementsByClassName("basic");
  
  for (var i = 0, len = elems.length; i < len; i++) {
    new Stopwatch(elems[i]);
  }