// save a reference to common constants and web elements
const MILLISECONDS_IN_A_SECOND = 1000;
const clockDiv = document.querySelector('.clock');

// sets the div to the specified message
const setText = (msg) => {
  clockDiv.innerHTML = msg;
};

// a pre-defined format is needed according to the specification
const getTime = () => new Date().toLocaleTimeString('hu');

// updates the visible time
const update = () => setText(getTime());

// determine next update time
const getMillisUntilNextSecond = () => (
  MILLISECONDS_IN_A_SECOND - (Date.now() % MILLISECONDS_IN_A_SECOND)
);

// update time and set itself to be called by setTimeout
const setOurTimeout = () => {
  update();
  setTimeout(setOurTimeout, getMillisUntilNextSecond());
};

// start the "program"
setOurTimeout();
