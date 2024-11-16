(function (window) {
    const speakWord = "Goodbye";
    const byeSpeaker = {};
  
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    window.byeSpeaker = byeSpeaker;
  })(window);
  