'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/package_config.json": "d47ebc8f1db1fb6d9ef25d3c940a4852",
".dart_tool/package_config_subset": "21c75cfdb5e29715fac93276a7278f4c",
".dart_tool/version": "75ff789b5e8b848a8e93e4ccad5bd447",
".git/COMMIT_EDITMSG": "837e1ae0163e7a11b6f922e64e57c15a",
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
".git/index": "db9687f0b0fa2ead6685313e83457b80",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f908cdea26b964ac96e68295bc1b7a9f",
".git/logs/refs/heads/main": "f908cdea26b964ac96e68295bc1b7a9f",
".git/logs/refs/remotes/origin/main": "92208cf90f159e7182c49c40fdb891f5",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/03/d540b1126307fda52c88e70c9ba938c31eace1": "ba4f1fd00eacd4209b0b183d161434f9",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/0f3ab3f2e8e430e19f339c92fd200bd4650ac5": "4f73c27b3822417e76b98edcc6037d6d",
".git/objects/0c/9afa11b995821c1bd83360baf0321167832849": "83798e3c297d077c95d1a28584c637f9",
".git/objects/18/999696a6a38a49db82f0985800071ee2884f24": "15ff2aaff6fa253e9eb74b984ee2a81c",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/b80ee20b81fc307df3b1bc14058e587053a987": "9c63e36f043f48f9a0e9442a354f740a",
".git/objects/21/c3fba807488aa14ff440b58967c3227bf57322": "3951f5317c1ddd88e11b1ff6207ad37d",
".git/objects/2a/c5d03704a02e29c6fba097693abb88cae11b64": "ce9adecd112b6783acbcfc1fd1b425b6",
".git/objects/2b/96ac4b75c02b556cd5829e3d9e2fa629342b12": "18e9b461987ce9a0ed410d0e376f6e24",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/3c79adc764770fb3332158deca1f611bd66658": "ca001c3b872223ab736eba57b230e09d",
".git/objects/31/9a0ad3cd9517e4df8fcfda812e0f5bcfb26e66": "cb294b0df1646aa9ddf9a31e7a0f2184",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/c2080ca3ae6fdea61d02fb6d016026d9a6196a": "a2c049464b655be49f9fe34470e0b20f",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/42/30a53ee6d5786a23c86518eb0599428e9d47fc": "c4fbe59332131fc047c5765a1e336caf",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4c/6a1591e7898c83eb7f9f958002020ce9b17fd8": "e1a57e2ef52223b2cee9d64f14338919",
".git/objects/4f/112886f1e60c8d764d904c6dbf8843f79eeeef": "aeaf8ed97dda52c78dd06387be936e08",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/20d4ae54d13a65a833d769d72dddc3ce2a8f04": "14658083959ee54b904f50aa05e2d4f6",
".git/objects/53/402ccd73c63902407704aaf6c115543ca1b21f": "4e42c45a5818392e683346f523bf79cf",
".git/objects/5b/12476b103660d46ab46ca6a10a2145e90c7ff9": "9c240b09ff9a349063cd3a8e3949e7fb",
".git/objects/5b/3388cc1afe59399989af57ab870fba219cf804": "adb93a4c8546837b314b2f863fc1d748",
".git/objects/5c/14de66eda5d92bb8a9f5b0167d6b75bd9bd5dc": "cddc93ac4047c3af4a7683577f03ae48",
".git/objects/5c/9270353b7c4336009c154092a4f4955dbbd57c": "b544416ded78d0729094e0f9a64ad355",
".git/objects/60/2049dd1a533d7954a474ce72e9c3f736de6191": "ce887c14f27f12b3ca883d1a8de5a508",
".git/objects/63/86dbc30d3d47e934508cb00375c7d277652855": "c9f74b431f0089ca95edb3ce028b7c9d",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/6a5b60045cbe61887d41c3db541569491e0881": "0be8c753e4829235553dc6642fe75c4f",
".git/objects/6b/244b9082600daf49b7ed0fb2abce46b10db78b": "ee2af4989c59e647d7380c280cf6a4d6",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/9ebb075be1288b0edf25afa9a7ffe7ecc72811": "b9c7f62d22f88f78db10245643643a91",
".git/objects/70/f257ed71493d59c490a8f066f7e855480c18c3": "ab94fa70aa0677aa3d6f3aa8ca0a4821",
".git/objects/75/87f949276efdd3215e1818f23835806d669c25": "a10002d53fb81fe0f6b117520e72aadd",
".git/objects/76/44d0838a2af0a78608be6c230190d0b3a618b4": "9cec5e5ba99fc5f4359df02af605d348",
".git/objects/7a/4b2cb376c011c08730c1aae5736d8f9e88edb1": "d142f54c2837364002e9471ca4669768",
".git/objects/7b/213817ec08f930916fd5fbccc871cf6b230ebb": "18dd499494322ae7f2fcf2a827f7dc49",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/80/7bf5ea13e149699bd39424df8821accbd125a4": "1ecec7ef6c822a13fd4659b002b90178",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/f12d626faba34d63e0ce673490b67f4533b87d": "d0a57b0216085b793d681f889ae42c4a",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/3e2a122926ee38ba1e57fd053b135f36b547c1": "3243d1ca559b7af2ae35764d20673838",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/840cde5af03f3fcf1f81552bb08de75eea6c14": "0221640030f1fbd2f54d31c1b2f01361",
".git/objects/9c/c29df81609df07f8383a36cec983d87f81b5a1": "eeb00fef8036578d978ae21b5330fbe5",
".git/objects/a5/025d541468fc6025b9e8867848ceaf72230ce3": "785f0f2eaaae1ad8270aeaf1e4bde7d0",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/b7b5cd8325696835286f195527e16ffb1f675a": "0d8d9b7eecd0a6c366a36a9db157ff8b",
".git/objects/ab/41ff5d3f543314937fdfc542cd3010eb5d5b8f": "0c0b7260691828d604e1b11df7f849fe",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/737154d02d706e1c170b3b0b9f34931e4536d2": "beb3e060dc556bf3b735862228d15a85",
".git/objects/b3/6c352ff3ed39d42daea54ad434bc28f65d3812": "a89e5dc9cc850f0a7302c30e15d43ebd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/bc/1f01e50579ff7377621123a4eaafad08695190": "75f0414e9ec95a5debb64632c13b9dcb",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c4/71148bfd43d5b01a2d1bbb3f1c2ee8bd516c45": "34ae25af063a0f081e28eae562cb9def",
".git/objects/c4/94fca2b1edd261f9cb0db5aea4bc5ed966f14f": "4e80c892bcc9bfdf7e44034c0b4ae389",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/6900a128f498ad8365270ad10eb3af7bcf4a33": "09c83ea38dfa0ac9673a788d2611c6dc",
".git/objects/cb/a38f57035d0ee1da5a0f5cdd80dbff12654ffc": "5f95cff6e7f9cc466e45dda6e63cfed2",
".git/objects/cc/e06d39de5c60277832786ce533757460b7fa8d": "88c603eb411154f0644ba93cab4958a3",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d0/56d9cbf9cd7b1565a208347742a7fb348d8762": "200fd118c3edb2f8abf438bc79c6f812",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/77c2ab67dede8421d1512ff48cfba0ddb7361f": "9a54f7cf8dc5c4f261a3dcbda316675c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/dd/380ad2baac4c078b66839ce624f89b804427a2": "685065695811930c11b5d31aa4d24c8e",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/de/bfabf19b7d802ad3d27148f6c5dcde07a6b076": "933cf483dd5584d8e25f96b59c9ca724",
".git/objects/e4/0e6e7bed5ab3b5663766a48121bcd50ab64e10": "e400314a30a9aa98adbb4750adf505c4",
".git/objects/e4/1263cc596b5f7762d989866b0f52a76c034c35": "338e6e12d20d7e086ac7f88c0f71fc6e",
".git/objects/e6/ee608d360239e556afe081a1343e10ed55a31e": "b62611268998bc01c323a5e34678d28d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/ef/fbacce9bee979c66986027d2fe64092d976f47": "dd246a30417452d120fcf86db6586573",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/6303d5303cad853ed5f0cbceeb742c6bc9a025": "7602d386264ed46f4c0c251eff8fd776",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f9/f172944d9a61854e5306f34bd47175c955bec3": "11c6ba6797958a07009f23905e31a7c1",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/546bf7f0aa717fbc5b9c2549988a3ce498f8e8": "f997f8a0af72aee39c99eed3734fd025",
".git/objects/ff/e62300cea1fe5f85ea3bf063f078ffe70ccefe": "65368c3cff39b02366e50bf5f222a08e",
".git/refs/heads/main": "3efa30367da74dadcdf130828be05140",
".git/refs/remotes/origin/main": "3efa30367da74dadcdf130828be05140",
".idea/libraries/Dart_SDK.xml": "54ad04b8a516893752a926e7326c29f5",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.bin": "7ed1ddbd1477c94db662ad01a3f2b569",
"assets/AssetManifest.bin.json": "fd6538da62fb1f85de3155134c9f3852",
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
"assets/assets/images/bookly%2520thumbnail.png": "1c4a0a7dadcd2981a5cfa0986c5442ab",
"assets/assets/images/calcy%2520thumbnail.png": "f6dc06d82eef216197211abf28aaccbf",
"assets/assets/images/chefio%2520thumbnail.png": "b41629af406f9dfcab508da41b078626",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/iron%2520pulse%2520thumbnail.png": "c4d53b720793e60e8baaf036bd3af600",
"assets/assets/images/profile.png": "ef9792f55ecc6716a5d9d8c3a7f0f783",
"assets/assets/images/vibes%2520player%2520thumbnail.png": "8d33c53392500e7464d125c38f0a46ce",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "7216e15f4d7f896954c3cb3ad83ff867",
"assets/NOTICES": "561d3af80fd4dc555dd5e4517f686fc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "3630a33f370e9a47f5928263916ab763",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "88e1ae48d7eb3f993aee183135b28376",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "130fef38b0f04786631a3b76dba9a7d8",
"/": "130fef38b0f04786631a3b76dba9a7d8",
"main.dart.js": "05ef00e7c42c52c2adcdda80dc9157e4",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796"};
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
