self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
    //  self.skipWaiting().then(console.log("normal"))
     // workbox.skipWaiting().then(console.log("workbox"))
    }
  });

  self.addEventListener('install', function (event) {

    self.skipWaiting().then(console.log("installed version"));
    //window.location.reload();

});