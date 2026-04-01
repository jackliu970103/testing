'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "47cad6a2bf2f5e1ce339e49d4aa7fa38",
"version.json": "db9b455094bb834fa4b58fd29e7fc261",
"index.html": "bf9085f417cf8c288db19024560af90f",
"/": "bf9085f417cf8c288db19024560af90f",
"main.dart.js": "833cd10ee6f0a12d1fc409ed43d82814",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0f33f9cb8ba20cfa1a5bf26feccdcc16",
"assets/NOTICES": "4ea0cc5f1ca25ac3f007ff1ccf7f95d6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f4357285ae9ae26f3cae8de1fe4728e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "270831b96ad6866b925e38563bec60b6",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/space2.png": "8716e92016715512f168844f6f54a331",
"assets/assets/images/space3.png": "db3c1bff27a0e2831be4a24cea084f41",
"assets/assets/images/space1.png": "d2bcfe10aa57780d63640b285c3eb53d",
"assets/assets/images/redStand.png": "6d159b8c5b8e0dece618ec43c064cc9b",
"assets/assets/images/good_food.png": "75d1abf7f512a626056cf0988c0776d9",
"assets/assets/images/grayRunning.png": "94899e81747df00cff83faaa715b8925",
"assets/assets/images/space4.png": "bb23fd7d72f21423c1af8ef61fc04c1f",
"assets/assets/images/space5.png": "d557bced32e0de536c81eeff7823c79e",
"assets/assets/images/space7.png": "c75c07cf946eae9395e29b709ab39d32",
"assets/assets/images/grayStand.png": "3bdc7c8360b030979a6223438c2a0f41",
"assets/assets/images/space6.png": "848f68a93d9394d5379330bee8dfabeb",
"assets/assets/images/bad4.png": "a70d15d399a1712425a3ad294dbe10c5",
"assets/assets/images/orGirl2.png": "8b4826702c58dabc3e5bcf34a2267824",
"assets/assets/images/good1.png": "1ba4a119bf2ce46ce2dd58819b8f40c6",
"assets/assets/images/orGirl3.png": "a65ba7e7319f2bc3d703b1703706e49c",
"assets/assets/images/bad5.png": "6ce62c395619de029767ee5f8ce205de",
"assets/assets/images/bad7.png": "e08b7552e326d819108dfe1bd23e2259",
"assets/assets/images/choseoOr1.png": "974162f13b368862bacc3b979eecc9bd",
"assets/assets/images/orGirl1.png": "f2e74371e34928ab60d8667c32bf2f52",
"assets/assets/images/good2.png": "75d1abf7f512a626056cf0988c0776d9",
"assets/assets/images/good3.png": "7bdad27d7fb47557972cd2108937c84e",
"assets/assets/images/bad6.png": "6ed85f4a73a82714e4e8114230e999ab",
"assets/assets/images/bad2.png": "e75558854c8a730cd5b0bb22cbbc89a6",
"assets/assets/images/blueRunning.png": "5bc5c31bff8ebd803ae61f22359dd523",
"assets/assets/images/orGirl4.png": "2f33ca73a4284f7076be8da425f5f39e",
"assets/assets/images/bad3.png": "18db440d562507249af39c6426560df1",
"assets/assets/images/bad1.png": "8fff1c76e8feeb7c75479782be956698",
"assets/assets/images/yellowRunning.png": "19d271f989b1bac369f625896922681b",
"assets/assets/images/good4.png": "d3fe31a9fc026260b996d463d6e59824",
"assets/assets/images/good5.png": "3c04a849589734bea46ad0875c040427",
"assets/assets/images/chatContainer.png": "eded9b3c820b584c6a611674d867add9",
"assets/assets/images/bad8.png": "9c1a7e0f3363ba2e3ed789f4f7e3a283",
"assets/assets/images/blueStand.png": "a4ed8989ee6ed8e3760b9653fb3e1ec4",
"assets/assets/images/bad_food.png": "8fff1c76e8feeb7c75479782be956698",
"assets/assets/images/choseOr2.png": "cc0468242aeb90d0a9aaf322b5acfb66",
"assets/assets/images/Start.png": "5a2bafbb0c4af80ffc13168ce57bd47d",
"assets/assets/images/backgroundOr.png": "2b6366cf3d038a3410844abc4557f663",
"assets/assets/images/player.png": "61a395539ee0bf2a24e0e2c6dbce0d90",
"assets/assets/images/redRunning.png": "b66b22d8c5762599b3886be6f70a5bea",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
