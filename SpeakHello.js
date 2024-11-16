(function (window) {
    const speakWord = "Hello";
    const helloSpeaker = {};
  
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    window.helloSpeaker = helloSpeaker;
  })(window);
  