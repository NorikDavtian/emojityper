importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0-rc.0/workbox-sw.js"),workbox.precaching.precacheAndRoute([{url:"index.html",revision:"4506867f5596bc449467fe587f274e75"},{url:"92f9d18d.js",revision:"59ae5518ef81c93e0b641255257d1d1c"},{url:"96f9d092.js",revision:"e484e4477058112574aba8ce40813450"},{url:"d317572b.js",revision:"e58e34ead592694541f9f9689e2bb1cf"},{url:"e8138ddd.js",revision:"66e51b362682334712de82231acf0a95"},{url:"manifest.json",revision:"a7bcbda51ef70d13cbbb4f5ee78c4827"},{url:"res/icon-100.png",revision:"d823ac9463adf2fc4c5895d14e0ad937"},{url:"res/icon-128.png",revision:"4ede97c725914d6b563ecbebc79ab65f"},{url:"res/icon-150.png",revision:"22ab89a69fc4ecdf44c1cd172d0338dd"},{url:"res/icon-192.png",revision:"78015ecb19c885bbda9739f3bdd23a19"},{url:"res/icon-256.png",revision:"86f6d723d862012ab85535108000ef25"},{url:"res/icon-44.png",revision:"ceb30aaf55029d8c8fb484c0d38108b8"},{url:"res/icon-50.png",revision:"862f57ffa8b958c5a26805ab5e3a8b81"},{url:"res/icon-512.png",revision:"0b23c85f71f7a57e28cc9e897f9ffbe0"}]),workbox.googleAnalytics.initialize();const realURLs=["https://fonts.googleapis.com/","https://fonts.gstatic.com/","https://cdn.jsdelivr.net/npm/"];function escape(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}realURLs.forEach(e=>{const i=new RegExp("^"+escape(e)+".*");workbox.routing.registerRoute(i,new workbox.strategies.CacheFirst)}),self.addEventListener("install",e=>{e.waitUntil(self.skipWaiting())}),self.addEventListener("activate",e=>self.clients.claim());