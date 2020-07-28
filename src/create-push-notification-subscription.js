const pushServerPublicKey = "<A PUSH SERVER PUBLIC KEY GOES HERE>";

/**
 * 
 * using the registered service worker creates a push notification subscription and returns it
 * 
 */
function createNotificationSubscription() {
  //wait for service worker installation to be ready, and then
  return navigator.serviceWorker.ready.then(function(serviceWorker) {
    // subscribe and return the subscription
    return serviceWorker.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: pushServerPublicKey
    })
    .then(function(subscription) {
      console.log("User is subscribed.", subscription);
      return subscription;
    });
  });
}