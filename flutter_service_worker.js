'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f4982fd93921bfc43228948f744b2842",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7110c7da4981c8634b6f3c7c1f74a97f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "59d21cf883ea554dd458e7663c082877",
".git/logs/refs/heads/main": "7936b9fcb8f5b4449f623f4591adaa8d",
".git/objects/02/842d69ee38d5b7e4ba6ed21c124ea4dafe04e7": "dbf4a59cd13dddffb50f62aecdfd70e9",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/0a/6dce6e3b2dd348ff1ae385e178a3853e2e1291": "b936f393eef8951aa465fdd916b2aa77",
".git/objects/0a/e1dd3f13a985f4af3ca21c9060d18d4fb12c0e": "da6cf60587316b7bc8b8c655385909b6",
".git/objects/0b/c3c0b7b85d2a39ce57f3a77822dd639d1dc140": "d7a00e065e1c9581f3c6fef44198366d",
".git/objects/0d/fab30fafc34cf148c619396a4d024e71790c40": "9d9c92f13d2a7277d44a7e40e12ef634",
".git/objects/0f/0a540258beee10909d410f67133d80779caf85": "c357d7ee3def58edb4b9961945ca91cc",
".git/objects/10/ae9fa57b3d8f50f6225b6dc5bfe4ef112eb7f8": "68ff232f88622f3786848bd05bbd1863",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/9b78977fad569bd815bfb6396be05362167784": "41f19fcff2c5591e6ef65b50006e8d26",
".git/objects/16/216c621b9b4964a89497d73d89c7423009cc90": "db8104fcf80429e8ab92e8419f05b775",
".git/objects/18/a54471da3e0dd0a853071736b1a2ff48da5534": "70ea71f46f1eea433dc3662d5aaee5c1",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/d7aa2f11f912ca749fbfada4812758bfd436f3": "769ffe1635286c116a087954ef33c19f",
".git/objects/28/6b583725be3c2525b7c06d5f9f7f6b7024b8d9": "b625c75915e4f69f5f2c069215249b5b",
".git/objects/33/145fd6359c145e01f9e0d7b18da57e75c1f3cf": "0c55929c14966006ce89eabfc193db2a",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/9d532392a7347cad7c0002e68ab8fbcbab6742": "bd054b2bb2a0f304d31dd8aa55a57432",
".git/objects/3e/1d65e9446898700db0f9dabdb70756ab295327": "30c136c3ea3ace1c74700f0a64f48029",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/49/5e7fa832f6411408205d7a0a9df83ad046663f": "6054da2f33c5af2f9e83636d5580efc0",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/b96e77308c5e49a47a1f4d50b9a2cfea0566d1": "c6c494de0b84fcca5847cee2591976f9",
".git/objects/51/7bfa4192357878f9e213ee0c2b60b94703b9ce": "e16fb464172b2f03bf7be6ab4371d74c",
".git/objects/54/b2434846421b0c1398ec4c03c1fb3a0e2a93f5": "70c94729da65772c5e5dc467b79d6654",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/c553c0a6c9ed20ca5ef32a8f9e6fb1b3737385": "94cb2d95fbfe9abbd8fd3ce6809d9d96",
".git/objects/61/37f74e549be80901065f3930a4e188db20db7d": "16ab133c43690e788c4fd58283d22ff9",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/65/af1818695586a6ab8a7adef414a00667e89424": "4b66938e8bb23a22fd985ae2f96f6fe0",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/5d6f53ebdff5aec2f2b7e62bb6cf43d2241a05": "a5e34eb3e27f6535d337c17356283f15",
".git/objects/6f/9e70d615cf6cb27ca054a7cff10d48e4d53f7f": "a20494cac128393765c4c8eb1ba692e2",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/520e496cb43174923557e8258fe92256e54031": "e14a52ae3e942ba2fd83935225ab5f1e",
".git/objects/77/d3a5970b20ff4d79620a027779f5c696217ae6": "42f87a776a1d7b78aacbad160d7f3330",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/d064cdcd7982b8e43acfb7f0b84075d24c74d7": "79d55c1c49e5aae0d6c0379aa210cf61",
".git/objects/7c/74618e626fcb20f9b9d033100102db74364cd3": "40081dc736082b1dec25aa19a11c9a27",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7d/fdee1af5ffd25a70f151e1085a2b8327c41282": "a71915ef1b1e3053a351241c7f862c59",
".git/objects/82/95da4af6f9a47e9c96f710960ef22f3794fe7c": "f6e0e94eb095cde4bb1e561be7d363b4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/f753098e1a8c5fc1f5c28df2c443e715c8cc40": "3875dda5a4e789eab32382bbb0e0bed8",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/20ce625d565b0e86cb07be3c2cfa6a72d78abd": "a8a48c2c3d84e52d1b0a7e5930715224",
".git/objects/95/f6627266651d8097bf6b824452bab19dcdc240": "ce035f2b31e3489b0bccae64db06b622",
".git/objects/9b/a6983c9da0de8dc8fbb45dfe9dca5bf432108c": "19ffd7fe96b00e5067f4793fae251f43",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/b4/178a9936b5c663a80266524a9c044ef40a9817": "4e923ce67615179827130e818f80194d",
".git/objects/b6/e4db6b0804abf314292fdec4ce717d4355e9ec": "c3cd816822ddc5290785d58561333992",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/bf/405d1adf30f2ae957aacb7b7461a9b5da29282": "5e3ca79c71933c67bb56f93fcff7857a",
".git/objects/c0/249fd09b7df5d7fb08cb95ec8f51467ca5ea99": "e4f52de8ac3d2bdf7d24c379b9bdf93d",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/d3/5927f1eaca0c8e6251c43af5bc7d7f24c354d7": "f24d4871ffaff1524ffb9277722f8d4d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/667cd3c7fbe4e654083ecd5424e3442f00b54a": "b88d69dd9d56add2146fdeb949d8e613",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e3/761029704333459b1a0f242f14d8f40f880057": "a9cdf5a4bc9797b4afc012fd30223b47",
".git/objects/e4/7e09b79eccfee4b6c8d90836a5244e5b4637a9": "5dc957c2b558e107dc047a8a52e63fc6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/15346d37ba2d4b823a6172a011b8e7583fea09": "c19090b2b5244578c04bbaca62882c11",
".git/objects/f0/d28a50332f432f0b892fbf5686983cb052a539": "5578cd8d221194425e66053684293739",
".git/objects/f2/d67a314a8328fa893ea0900e6f995fcb0570cc": "e63352754561306277444d123393976b",
".git/objects/f5/1f4f2fa0e4e1461a5f17cd6eab4574a5f73ae7": "b868ee49c7e3fd8f621b70f846c0d6e3",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/ff/24b5cc2bf3c5c57b707ad005f969de1627ead9": "10a5e2f81b3ea51684c42b7b7acccb34",
".git/refs/heads/main": "8ddde265f4519a3e8de6e48dc3989559",
"assets/AssetManifest.json": "722187d117a8716236391bd06efc6482",
"assets/assets/anim/b.riv": "5066c7adcd1a56a9f9179cbac3764b6c",
"assets/assets/images/certificates/andriod%2520essential.png": "a64b3760da9031f8a530740f9360a669",
"assets/assets/images/certificates/aps%2520microtech.png": "3e0bc8cb5442868b794a900fb90573fc",
"assets/assets/images/certificates/flutter%2520beginner.png": "88cf606ebac1f12e2f26f77f8a4fe159",
"assets/assets/images/certificates/flutter%2520essential.png": "d7ab050d1a24b80d44c6cc3756549dac",
"assets/assets/images/certificates/flutter%2520vt.png": "c93c1b1495193f6ecd63d5b366452afd",
"assets/assets/images/certificates/html.png": "b3bac586d1ba09b361f491586462645a",
"assets/assets/images/certificates/iic%2520impact%2520lect.png": "16d33ec26546bfe684d8ebb617ba1c25",
"assets/assets/images/certificates/java%2520step%2520by%2520step.png": "c4b6bd91143fd57a10dc2e60e9a4e4d4",
"assets/assets/images/certificates/matpo%2520apti.png": "bd606d6b6b669acda083c261c03fd35a",
"assets/assets/images/certificates/progrmming%2520using%2520java.png": "d50b2c6e1b2a87fc3730c6dd5559b460",
"assets/assets/images/combine/chatall.png": "1b8cd2ca79e91b83a1c1a8648928cf6f",
"assets/assets/images/combine/chatgptall.png": "1838f55a43ab1b330d596a66a546e81f",
"assets/assets/images/combine/instaall.png": "fdcfc581ea6d49d72cb6df9a6b6a7f80",
"assets/assets/images/combine/luckall.png": "d580af61ff197f513986f629b407313e",
"assets/assets/images/combine/noteall.png": "7e8ccd65afa367873ee7be611b83af12",
"assets/assets/images/combine/tictocall.png": "fdd584bf474d3f1b1abfefed8da29e29",
"assets/assets/images/prof_pic.jpg": "5767e9813a5dd9e5c14c2409bcd30376",
"assets/assets/images/separate_proj/chat.jpg": "d814258cecd170c9fca94e85e661691e",
"assets/assets/images/separate_proj/chatgpt.jpg": "af3b0fef5fae8e546d4fee6bb5873c93",
"assets/assets/images/separate_proj/insta.jpg": "646c69687d27a97ec104260b1027781a",
"assets/assets/images/separate_proj/luck.jpg": "dd8438c077066ac82a6bfac92eeedf5f",
"assets/assets/images/separate_proj/note.jpg": "2de66dd144ba5f9a36bb342598a2677f",
"assets/assets/images/separate_proj/tic%2520toc.jpg": "5c1a074c859113896410515652f0b5f3",
"assets/assets/images/skill_logo/dart%2520logo.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/images/skill_logo/firebase%2520logo.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/assets/images/skill_logo/flutter%2520logo.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/skill_logo/icons8-android-os-48.png": "6887b446897af63c7e4620c124bc9478",
"assets/assets/images/skill_logo/java%2520logo.png": "45d74c066f05ee79b48a0ad44c1ff55e",
"assets/assets/images/skill_logo/uiux.png": "0c2c325edb7c6bc8cf028e5e436a0e4a",
"assets/assets/pdf/myresume.pdf": "09b9f08501e27d1af256adb4c2e205a6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "292a86d57327c01e7e1ccd726d4c690f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c37b49daaf21e12ab02936c97423171",
"/": "8c37b49daaf21e12ab02936c97423171",
"main.dart.js": "d949dede1dc3609fd1a15d84886e9950",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
