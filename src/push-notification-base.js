const img = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const text = "Take a look at this brand new t-shirt!";
const title = "New Product Available";
const options = {
    body: text,
    icon: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    vibrate: [200, 100, 200],
    tag: "new-product",
    image: img,
    badge: "https://spyna.it/icons/android-icon-192x192.png",
    actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
 };

navigator.serviceWorker.ready.then(function(serviceWorker) {
  serviceWorker.showNotification(title, options);
});