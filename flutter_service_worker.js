'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d1626b6b13090012bad5072d97f9b798",
".git/config": "e0ac978111a802d621a8b4803ad7c283",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5ae530288752e06b1ea316720a6eff37",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ae8b6ff6049894ccb4989002cbff5a35",
".git/logs/refs/heads/main": "ac2239c185688c6c48c7bef933057449",
".git/logs/refs/remotes/origin/main": "4eb79a211a31ff3d453514e9883e3ba5",
".git/objects/00/4d44d6dccbf0645db5707834466e25c8af93b6": "5fd154421acc4837cab530e18c64561b",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/d138a00f6968f140aa552279677e3d11502944": "a4bcdf222afddadb20d328c7190fe6b2",
".git/objects/0a/4b47d82ed126b50cf1dbbb51eff7eb91fce166": "47897812631c6ad6a6e04f6621806471",
".git/objects/14/92087b57016ce7b3cf92ae2a05d747a687a594": "2da4cb856e2f0393c11dc1180dffbb70",
".git/objects/15/683b2958299b2b0e8b549fb1b2d421c07e1004": "a65aa4bd8e3bfbb072ee699e6399f022",
".git/objects/19/337f2eed280c5c8fdcb2baf15017dcd2baf0d2": "1ad9e85dcd8700da285b0d345ad5138b",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/b80ee20b81fc307df3b1bc14058e587053a987": "9c63e36f043f48f9a0e9442a354f740a",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/85dafc520ed062797b4fe6345bdc09dc484ab0": "8f3601d9a24ca3289deef18a2bc2f96b",
".git/objects/2a/c5d03704a02e29c6fba097693abb88cae11b64": "ce9adecd112b6783acbcfc1fd1b425b6",
".git/objects/2b/7c3e3a3a2f16eb853b817fe30182e5c44ff3d3": "260d15e66058d72425ec6aee74871847",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/3c79adc764770fb3332158deca1f611bd66658": "ca001c3b872223ab736eba57b230e09d",
".git/objects/34/4099605e10b8cd8413925506a2ee4d9b6ae77f": "97d408d5c0fe5cf753761507b9283e06",
".git/objects/35/742fea09da51da4d8f998e9c8dbbabe07018a8": "ba407b31ecf30e5126aa5457ff389604",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/3b/84373662a9ddcad82f26c6e4f792d03422b14b": "3ab0a34c3f2fd0d3e0c4b44a7573dd4e",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/8a94d82d4e97150ca6fd11331ffbaf20cd7197": "418c6aee47fa92c3196ab936126369d0",
".git/objects/3d/00c4b86b99b80368bbbf06e17f2ad673d1847d": "c3b96280301890c0e2823c503dd29ec1",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/53/6f8912152f025c10fcc26047da1a8b80a2b742": "d1fcdd6a3d6523ad81ebce0ddccc229e",
".git/objects/57/1e6e56c1a66d90a6a0e98396d5f4a646b7bcab": "8763f173fbbc1e3a05523a0b6dbf3751",
".git/objects/5d/4a98c0196baaf0a25848d18f346788d1d0db39": "3d3c252b1235418c5bae5e30454cdbaf",
".git/objects/5e/6ed97fcb20e70de59e8e317317ad0cd3a855d8": "a951d93b79b220b80c7698d0cd1d059b",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/86dbc30d3d47e934508cb00375c7d277652855": "c9f74b431f0089ca95edb3ce028b7c9d",
".git/objects/65/b7d26508cbc983f45c1b6b7a48e988ef9c5950": "a16961b4314b6ff77ebdad4cf7b9b5e5",
".git/objects/69/6a5b60045cbe61887d41c3db541569491e0881": "0be8c753e4829235553dc6642fe75c4f",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/9ebb075be1288b0edf25afa9a7ffe7ecc72811": "b9c7f62d22f88f78db10245643643a91",
".git/objects/70/a6c844931f314c8e0f4f71fc48dd4b40e80df6": "8c49da0c63e0fc2fef4791262d3d9be0",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/9ec2c10ac42dd6828ccdd032be4661a34a3cb9": "1d4fc288825bb0d1813d56ac88d527a5",
".git/objects/75/ba3b66597f0b68ac220c0c2294a0cf0d388a2e": "c8ea930f30233296ccacdec11a4a5fd4",
".git/objects/77/6297420cdf2ff18f9132329fe92e42be784645": "84e9e3cd54cd8cc40c520b23b433a72b",
".git/objects/79/67011558965ef3c04cfdeee42151d53cb31992": "964a30a86d90d8a5de2fd14572c86b3d",
".git/objects/7a/4b2cb376c011c08730c1aae5736d8f9e88edb1": "d142f54c2837364002e9471ca4669768",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/85/a8919c4d510a17d1ff865c27f97a9b6bc98cb3": "7e34b7eab8aa7d28dd76a01ba2a918ec",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/2137c2f82469703f10878523d24d6734513a59": "14e18a69ae2b1d0ba1ba6dcef38054e1",
".git/objects/a7/d22cd438ec163aa863a3bf31d93536fb0e16cd": "2faad6e8ddcd22542361fdd5a376cfac",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ad/12ab9169ee3f3d1cbf0815c2dfa583620c29e6": "47706b965c71a8d4a59f488f5ad0f2f1",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b4/2b83a765e87806090929037687192ef1b8d6f6": "5e3f8ee7b7727d02c4a24384848e61c3",
".git/objects/b5/84850c749f71268fc5c29b4a80169e8e377ee6": "916f459376aa15b85298b91d091e6bcc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/bc/1f01e50579ff7377621123a4eaafad08695190": "75f0414e9ec95a5debb64632c13b9dcb",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/fddf13bb71e27a85371c81aad24509a573d350": "bfbb8f53191ce20ad4bb43fad6b0d5e2",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/5cef15f74d9b96e4097091954515312c1b38f9": "9102cb8c8a2868e5a1d46c702af48c81",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cc/e06d39de5c60277832786ce533757460b7fa8d": "88c603eb411154f0644ba93cab4958a3",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/dd/ff3beb0bf263c44a3d68093f7754c4981cdceb": "333b6fa0e1bc1cc715eb318299c3a565",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/e3/b778264252179378fc15b029ec232744bd2cfd": "075e05afb04a4e9aef11706a587350a0",
".git/objects/e4/6c7c25f028b2655bd99a765c4bca1d2326153d": "5ba57c8d3380ad414d290b494f529309",
".git/objects/e5/5d1e5d0368009e241650222e1605810aa0eefe": "517883ccb9187b59e30c553b203faa26",
".git/objects/e5/8652975d316742f29e2bc0b737b15ed9557612": "861a83f48510874af75f3389faf3f05b",
".git/objects/e6/ee608d360239e556afe081a1343e10ed55a31e": "b62611268998bc01c323a5e34678d28d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/e5c21e2b9403b33ccc426778445b10adaafc6e": "0c0f074f07baa511f3c17432391d6f88",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/ee/8c17e9c74ee29bd79da84f870a5476078bc3b2": "fa101980a82ab89f9d4b0d1b3f952200",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f1/b01b914a60709f679382a0f17e22616efffb47": "1c59904b0c4565700fe41ffdcc485c9c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/bf16069f0eb191bbd8a86686669225c5c594f9": "0d6c03a85829901ad87f992615c9764d",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/refs/heads/main": "f97fa3073e9c6f5019fd984b05771c87",
".git/refs/remotes/origin/main": "f97fa3073e9c6f5019fd984b05771c87",
"assets/AssetManifest.bin": "b505440dcac702d0ad3bc54a52f62be0",
"assets/AssetManifest.bin.json": "e7ae89abae2787030f0981897c0159b0",
"assets/AssetManifest.json": "f2399c4d522b981606584fbee34d3ac7",
"assets/assets/icons/arrow-ios-back-svgrepo-com.svg": "ac611fc46ee92d3b1bac99282e2d9b56",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/copy-svgrepo-com%2520(1).svg": "099a0fed21ba0df4745cc0518388e27d",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github-svgrepo-com.svg": "2e7aebc8ab8bdb071cebba3b0b482832",
"assets/assets/icons/github-svgrepo-com_gray.svg": "202c18fff41888ef17fbbeb63b823a38",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/gmail-icon-logo-svgrepo-com.svg": "9746a0f58952712f35ce58b1c06b46ea",
"assets/assets/icons/icons8-github.png": "cfa779809b4d71692e07273434f96d99",
"assets/assets/icons/linkedin-svgrepo-com.svg": "9419e9f024acae4e057ac247710e7e2f",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/phone-svgrepo-com.svg": "a3a8af25c04633455bf7edd796e706ac",
"assets/assets/icons/whatsapp-svgrepo-com.svg": "31f1fa77dd03688919625a8a6bbc7223",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/profile.jpeg": "033bb553631741d5bbd0f7b2c075a851",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "d1414a0f0a1d1fbe4d197d1e224da4e0",
"assets/NOTICES": "eab86d326b02e3df24c6b7145866e03c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6b1c01d0918be92b52b46c44c2ec107f",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d00ed96a63f256c81873e47927547480",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "03e734d7411b7bd30ce384015046de23",
"/": "03e734d7411b7bd30ce384015046de23",
"main.dart.js": "05cc4d6878dbd46f9424649b434f68a9",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
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
