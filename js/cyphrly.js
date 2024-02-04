window.onload = function() {
   console.log("loaded");
   window.addEventListener('resize', function(){
    window.parent.postMessage({ height: document.body.scrollHeight }, '*');
   })
   window.parent.postMessage({ height: document.body.scrollHeight}, '*');
};
