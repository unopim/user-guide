/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.0/attribute/attribute-family.html",
    "revision": "a249644566b2d18289aec52176e1ac70"
  },
  {
    "url": "1.0/attribute/attribute-input.html",
    "revision": "f9567c9192c8ebd112315a236ad842dd"
  },
  {
    "url": "1.0/attribute/index.html",
    "revision": "a9856e91f58371b5d2d1307f486d7210"
  },
  {
    "url": "1.0/attribute/product-attribute.html",
    "revision": "e7f586c935e6e597fed09b5889adc4a6"
  },
  {
    "url": "1.0/category/categories.html",
    "revision": "461e6c6cae922991ff6ebef7a85dc6f8"
  },
  {
    "url": "1.0/category/index.html",
    "revision": "6881b6ec86a969525b8c90cb5f8cdc7b"
  },
  {
    "url": "1.0/categoryField/category-fields.html",
    "revision": "e4ba384407603d65f5e11a50dafa21ed"
  },
  {
    "url": "1.0/categoryField/index.html",
    "revision": "7a6be79cd11a2b3a557c7babd86ab5da"
  },
  {
    "url": "1.0/configuration/index.html",
    "revision": "43ba5c704ced826010c097c1ee040b0d"
  },
  {
    "url": "1.0/configuration/integration.html",
    "revision": "6bf39f23d05ef2e01f903ab0786f18de"
  },
  {
    "url": "1.0/configuration/magic-ai.html",
    "revision": "2e7974b58e47dccb83ded734a613d87b"
  },
  {
    "url": "1.0/data-transfer/export.html",
    "revision": "086e810ee1f02d2dee25eceeaa74784e"
  },
  {
    "url": "1.0/data-transfer/import.html",
    "revision": "94e190266a5e47c93a97fa113eb343de"
  },
  {
    "url": "1.0/data-transfer/index.html",
    "revision": "b6a5bcd85c43bebea9bad96841e8081c"
  },
  {
    "url": "1.0/introduction/index.html",
    "revision": "6df0d483efff362abecfc97a1572c95a"
  },
  {
    "url": "1.0/introduction/introductions.html",
    "revision": "16cbc1673c9bb42456f2f2725bb09cf1"
  },
  {
    "url": "1.0/magic/index.html",
    "revision": "04fe7628e3af7df4bc3281650f2919fd"
  },
  {
    "url": "1.0/magic/magic-ai.html",
    "revision": "99b7c89a1fc16be09be7fa5f106d1fbd"
  },
  {
    "url": "1.0/products/configurable.html",
    "revision": "2aff6978f1507b21d47e961a2609e633"
  },
  {
    "url": "1.0/products/index.html",
    "revision": "111167c8e80e7bacf35dc73f597cfa14"
  },
  {
    "url": "1.0/products/simple.html",
    "revision": "f7eec4006ea057e116f8607050e40363"
  },
  {
    "url": "1.0/settings/channels.html",
    "revision": "baaa318f5615d56b51ea79a9a2f6a23e"
  },
  {
    "url": "1.0/settings/currencies.html",
    "revision": "4a01b3ef7aa15e6d0ae58bce0ec4fac5"
  },
  {
    "url": "1.0/settings/index.html",
    "revision": "c9ba9aabedadc76313c48a6da5fd69cd"
  },
  {
    "url": "1.0/settings/locale.html",
    "revision": "30f263b28876b42c955119110755a96f"
  },
  {
    "url": "1.0/settings/roles.html",
    "revision": "ad9ea5d6fa9ebe44472c9158a1724b19"
  },
  {
    "url": "1.0/settings/users.html",
    "revision": "873e7da4e18ad6b1e6ed3345576e6ba2"
  },
  {
    "url": "404.html",
    "revision": "42d382d62bf88eee8b1fb3fbdd3fb71f"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/action.741aa80b.png",
    "revision": "741aa80b141f484b13a4ed2bcc376352"
  },
  {
    "url": "assets/img/addVariant.e94a3cc4.png",
    "revision": "e94a3cc418669e3fb2d7b7d60f49b5f3"
  },
  {
    "url": "assets/img/AiConfiguration.e5c9bca3.png",
    "revision": "e5c9bca3f0da329ee0a4de0ab43d2405"
  },
  {
    "url": "assets/img/category.d7c27ede.png",
    "revision": "d7c27ede7ed1d93e093a0f42a393fb3b"
  },
  {
    "url": "assets/img/category.f47e7929.png",
    "revision": "f47e7929ab521285c670363f24304876"
  },
  {
    "url": "assets/img/channel.b5fc6ac6.png",
    "revision": "b5fc6ac6311158a5a86ddadfcc115295"
  },
  {
    "url": "assets/img/channelGrid.360d0e46.png",
    "revision": "360d0e464fea35a3c6af44237410952c"
  },
  {
    "url": "assets/img/configurable.6f7a20e8.png",
    "revision": "6f7a20e816a76ed9d8939a434c03bb50"
  },
  {
    "url": "assets/img/configurableAttributes.949b946f.png",
    "revision": "949b946f2eac623c6a1efc6b0dc2d6eb"
  },
  {
    "url": "assets/img/configuration.53231a14.png",
    "revision": "53231a143e51831621be77b165943636"
  },
  {
    "url": "assets/img/configuration.beedd9e9.png",
    "revision": "beedd9e9f84d58e77e3195234ccc4406"
  },
  {
    "url": "assets/img/content.087ea479.png",
    "revision": "087ea479cd6f24120bdf504ace95669a"
  },
  {
    "url": "assets/img/create.70b27afd.png",
    "revision": "70b27afd5b2b9e20506f7c4de89b3793"
  },
  {
    "url": "assets/img/createAttribute.26d11c1e.png",
    "revision": "26d11c1e75ed75eecec0d41772c5ff2d"
  },
  {
    "url": "assets/img/createChannel.eb70245f.png",
    "revision": "eb70245fc8c299f06cc08b3762a5e8f3"
  },
  {
    "url": "assets/img/createCurrency.eebe7f81.png",
    "revision": "eebe7f81cc0538af2682ce7d348897d4"
  },
  {
    "url": "assets/img/createExport.46dbf7ee.png",
    "revision": "46dbf7ee03ef90b50c2a061633fb9fa1"
  },
  {
    "url": "assets/img/createFamily.14289400.png",
    "revision": "14289400e536ec9ee988b0bca1fa5af5"
  },
  {
    "url": "assets/img/createField.8a540668.png",
    "revision": "8a5406685b71c08f16517b6bad03e16b"
  },
  {
    "url": "assets/img/createImport.8a409493.png",
    "revision": "8a40949334da7498fef839f7103ed061"
  },
  {
    "url": "assets/img/createLocale.77cbc35c.png",
    "revision": "77cbc35c80ed7bcba4c427bc4fec97da"
  },
  {
    "url": "assets/img/createRole.e9d43897.png",
    "revision": "e9d43897eeef193cb1b04f7af10a47a7"
  },
  {
    "url": "assets/img/createUser.794c3f62.png",
    "revision": "794c3f624c81f7099f848422b05d1928"
  },
  {
    "url": "assets/img/currencyGrid.eb93585c.png",
    "revision": "eb93585c63bbb1cdcf99673e10f41471"
  },
  {
    "url": "assets/img/currencyOutput.4b1072f4.png",
    "revision": "4b1072f4691db4d4e2eb16c0be1448bc"
  },
  {
    "url": "assets/img/datagrid.60924efa.png",
    "revision": "60924efaa2fbe98233fab5c102e1b158"
  },
  {
    "url": "assets/img/datagrid.8facacdc.png",
    "revision": "8facacdcba55fd0c91098fa3dfd5a8a0"
  },
  {
    "url": "assets/img/datagrid.a3bea721.png",
    "revision": "a3bea721080e6949fadf516b8698ef84"
  },
  {
    "url": "assets/img/description.3e3b71bb.png",
    "revision": "3e3b71bbb731494cb35c93b0c047cc31"
  },
  {
    "url": "assets/img/description.c8914396.png",
    "revision": "c8914396302f382f03596b2abbbddf3b"
  },
  {
    "url": "assets/img/editProduct.646ccd50.png",
    "revision": "646ccd5060ed8f769ef65a1f45cf4f04"
  },
  {
    "url": "assets/img/editProduct.8ca35f06.png",
    "revision": "8ca35f069b380b3143448c8743308935"
  },
  {
    "url": "assets/img/exportNow.d093ec16.png",
    "revision": "d093ec16cccdd22bcfb732e8de1dc631"
  },
  {
    "url": "assets/img/exportOutput.2b273696.png",
    "revision": "2b273696dbed2bfae1072550c0aaeeac"
  },
  {
    "url": "assets/img/family.9876972d.png",
    "revision": "9876972d448dea469ead7d388ee5bec1"
  },
  {
    "url": "assets/img/familyOutput.6f1d15b2.png",
    "revision": "6f1d15b297fd96aba467f3e0666f358c"
  },
  {
    "url": "assets/img/fielddataGrid.6da779b6.png",
    "revision": "6da779b6af0e6f8ece892c731e05b91c"
  },
  {
    "url": "assets/img/general.ff0779af.png",
    "revision": "ff0779af5588e5a19dec0f5ac18a11a9"
  },
  {
    "url": "assets/img/grid.1b138538.png",
    "revision": "1b13853803d63436182931e5c64cd6b6"
  },
  {
    "url": "assets/img/importNow.07e3a25d.png",
    "revision": "07e3a25d4e986088715e6790168b946f"
  },
  {
    "url": "assets/img/importOutput.2173dfaf.png",
    "revision": "2173dfaf2723f0b35fcc6477e5c3299d"
  },
  {
    "url": "assets/img/integrationOutput.6faed2ab.png",
    "revision": "6faed2ababdb0bf2ad7c1d51a43eb368"
  },
  {
    "url": "assets/img/label.9b8cd25f.png",
    "revision": "9b8cd25f0b9764a6a7efa86e2d2ef4c9"
  },
  {
    "url": "assets/img/metaDescription.bcfe5937.png",
    "revision": "bcfe5937cd31c7fad600d2a3ef78e0aa"
  },
  {
    "url": "assets/img/metaDescription.cc518e7a.png",
    "revision": "cc518e7abe4c7d9c6b52379c89e77383"
  },
  {
    "url": "assets/img/new.7ddf250f.png",
    "revision": "7ddf250fa20d55980a1febfe7d2884c6"
  },
  {
    "url": "assets/img/newLocale.82b8b2f8.png",
    "revision": "82b8b2f827e7c2225325452683676a58"
  },
  {
    "url": "assets/img/output.50bddb55.png",
    "revision": "50bddb5547bb69754b2a79520dc0bf6a"
  },
  {
    "url": "assets/img/output.6e163624.png",
    "revision": "6e163624b57c59980472e26f0453c36b"
  },
  {
    "url": "assets/img/product.40ba49d2.png",
    "revision": "40ba49d2e0a9f96a30110dae578f02e5"
  },
  {
    "url": "assets/img/related.c6ff4b5b.png",
    "revision": "c6ff4b5bd53e03019c50f8fd1b518d1e"
  },
  {
    "url": "assets/img/roleGrid.06028aca.png",
    "revision": "06028aca803b2170043878318b63d5ba"
  },
  {
    "url": "assets/img/roleOutput.08e58dde.png",
    "revision": "08e58ddef001256f589347a1fd1002c7"
  },
  {
    "url": "assets/img/roless.4fb85cca.png",
    "revision": "4fb85ccaf0b70636d8fbeee50de62d35"
  },
  {
    "url": "assets/img/save.46909fda.png",
    "revision": "46909fdad5a7d2608b8125dfa5f80e59"
  },
  {
    "url": "assets/img/save.a8e61b79.png",
    "revision": "a8e61b79aa71d7ab759415388004a5b6"
  },
  {
    "url": "assets/img/saveCategory.30ea31a2.png",
    "revision": "30ea31a25d975177819c667f6e31e218"
  },
  {
    "url": "assets/img/saveChannel.f3f3e10a.png",
    "revision": "f3f3e10a633774bbfadf5bb582347de6"
  },
  {
    "url": "assets/img/saveCurrency.7e31824b.png",
    "revision": "7e31824bf12635463caa4d7ba4db36a2"
  },
  {
    "url": "assets/img/saveExport.74e8e408.png",
    "revision": "74e8e4083b741bb02f7c3f36bd168310"
  },
  {
    "url": "assets/img/saveFamily.203d190e.png",
    "revision": "203d190e47aafde96dabd7f25435fa11"
  },
  {
    "url": "assets/img/saveImport.d4c78333.png",
    "revision": "d4c7833346a20f6d1e21b929955ce968"
  },
  {
    "url": "assets/img/saveIntegration.b9b9e346.png",
    "revision": "b9b9e346e2502fc0ab42b337e83c29cf"
  },
  {
    "url": "assets/img/saveRole.7a0e124f.png",
    "revision": "7a0e124f5c78a24a11b46bbae26d4098"
  },
  {
    "url": "assets/img/saveUser.91b03468.png",
    "revision": "91b03468145a7546056db667801f76bc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/setting.6707c4ff.png",
    "revision": "6707c4ff4c9fafeae79c93dc831aa7a1"
  },
  {
    "url": "assets/img/simple.1e9ff55d.png",
    "revision": "1e9ff55d05dda729f4ecd33d2a77b48c"
  },
  {
    "url": "assets/img/upsell.3599788e.png",
    "revision": "3599788eea024954474c521395fb7379"
  },
  {
    "url": "assets/img/upsell.7bd2d86e.png",
    "revision": "7bd2d86ef8755a1c41ef0076098ddbb7"
  },
  {
    "url": "assets/img/userGrid.8fcde8f8.png",
    "revision": "8fcde8f839696a07b4a30886f5fb5a83"
  },
  {
    "url": "assets/img/validation.8429b03b.png",
    "revision": "8429b03b933dd98c3ebae1e636827701"
  },
  {
    "url": "assets/img/variant.bc7e1b68.png",
    "revision": "bc7e1b6834719d76f583f1e474b2717b"
  },
  {
    "url": "assets/js/1.6f9bf034.js",
    "revision": "6bb7a785a2b026d0186710439a735050"
  },
  {
    "url": "assets/js/10.f0c8f83e.js",
    "revision": "aa1b39b74099e40db39504f7ae5c2a3c"
  },
  {
    "url": "assets/js/11.73fbcd37.js",
    "revision": "2d5ec483a154ab5ac456f73d9c300c25"
  },
  {
    "url": "assets/js/12.6ad71d11.js",
    "revision": "cbc0e4d1788487475a0060890900cefe"
  },
  {
    "url": "assets/js/13.c51dbd51.js",
    "revision": "a946c0deae3f2cb4acb4b0540967c49c"
  },
  {
    "url": "assets/js/14.80a3bb8a.js",
    "revision": "2aa08298d24ad1e3d70a8e083607cffd"
  },
  {
    "url": "assets/js/15.f0ed2b0b.js",
    "revision": "d91448cc8aa64855f0cbd379c769ce2e"
  },
  {
    "url": "assets/js/16.652fbb1c.js",
    "revision": "cf02654cf9833068675673257382dfa9"
  },
  {
    "url": "assets/js/17.4e2365eb.js",
    "revision": "21b285663a2ed94712fea32ee9bdd4f2"
  },
  {
    "url": "assets/js/18.2a67a250.js",
    "revision": "84d9b59030a5a30d1ae20a4537122f62"
  },
  {
    "url": "assets/js/19.5efbcdc4.js",
    "revision": "0a130058c3bb023bd971aa44e4feee36"
  },
  {
    "url": "assets/js/2.6e98279c.js",
    "revision": "ae2f0317e6f4229ffa22f9a9f4053141"
  },
  {
    "url": "assets/js/20.a7297438.js",
    "revision": "df2691632bbe7e349602422ab559186d"
  },
  {
    "url": "assets/js/21.25c82d10.js",
    "revision": "a9aaf9e15b823429bd2fd9d52c367262"
  },
  {
    "url": "assets/js/22.fc082def.js",
    "revision": "2717962d9fafe5712cd4f5c27c829a99"
  },
  {
    "url": "assets/js/23.748298e1.js",
    "revision": "f7e8ceab4202e9cce5c0639ec0411624"
  },
  {
    "url": "assets/js/24.76673257.js",
    "revision": "3cf8afd8362c6739786b4a7b32419ab3"
  },
  {
    "url": "assets/js/25.7bd7289e.js",
    "revision": "3d9ff4b2632de517b7779091db60f3d1"
  },
  {
    "url": "assets/js/26.91326e7f.js",
    "revision": "4764e19662ba18b5a8b6c672a30453ed"
  },
  {
    "url": "assets/js/27.cd90d1c8.js",
    "revision": "9ffee2dabf93984be98d21472e11fcad"
  },
  {
    "url": "assets/js/28.44dc90d7.js",
    "revision": "c064ddf4e59f405690c14dc7ce6695a0"
  },
  {
    "url": "assets/js/29.285fa978.js",
    "revision": "bec569669872ab7dcad4537bdf7e38d6"
  },
  {
    "url": "assets/js/3.dfc835f8.js",
    "revision": "a2db3cd3d52ca6982af70c6225289512"
  },
  {
    "url": "assets/js/30.0c05cd7e.js",
    "revision": "bd31aba6b05a0fda3949cdac5150d5e2"
  },
  {
    "url": "assets/js/31.1bcfc97e.js",
    "revision": "840dddd9ec11de386826b0f40b2a9d88"
  },
  {
    "url": "assets/js/32.adf3550f.js",
    "revision": "f88375fe54767a7b9fbfbf4cf673f9ff"
  },
  {
    "url": "assets/js/33.16ce51d1.js",
    "revision": "3c1a695531671cd5947e5fa81ddbe236"
  },
  {
    "url": "assets/js/34.53155c89.js",
    "revision": "ab5a85d98d73c6a463f1ab5960572b31"
  },
  {
    "url": "assets/js/35.c8d8dd62.js",
    "revision": "2dc44fa9b9e0b5cc6a29864c01d732ef"
  },
  {
    "url": "assets/js/36.0c6a23d8.js",
    "revision": "e803faf2ee31cbacf6a41f7e080cb3fd"
  },
  {
    "url": "assets/js/37.4b439acb.js",
    "revision": "c42f3a0c28ab1cbbf4e5789af33a5b40"
  },
  {
    "url": "assets/js/38.92586103.js",
    "revision": "61e5ae344c8045402c05660498429bf8"
  },
  {
    "url": "assets/js/39.a46b9c4c.js",
    "revision": "794136035d9f54a16fa498548a0c934e"
  },
  {
    "url": "assets/js/4.4a33e03a.js",
    "revision": "4c39018f2ee4c344f7de74c998c173c9"
  },
  {
    "url": "assets/js/40.e7852797.js",
    "revision": "bede1c297de7bd3b4a322280a219f4f6"
  },
  {
    "url": "assets/js/41.93ea9096.js",
    "revision": "106758b7b78d7c50a2c3147846d3ab81"
  },
  {
    "url": "assets/js/42.e968a294.js",
    "revision": "ee7fdb6f8237ebf62cf2655157584b76"
  },
  {
    "url": "assets/js/43.35ec19e1.js",
    "revision": "41c56088da2b230c5c47674d62c7a1bd"
  },
  {
    "url": "assets/js/44.93e47081.js",
    "revision": "6a10b2d0fe64dd6c44ef3a7d67a43e20"
  },
  {
    "url": "assets/js/45.a78bc470.js",
    "revision": "85108b020f47c093f8e6ddcdfaa6b70b"
  },
  {
    "url": "assets/js/46.f77b36cc.js",
    "revision": "896ec2350d51a89f516604a631680cf9"
  },
  {
    "url": "assets/js/47.8eb1bf01.js",
    "revision": "f66130c3ed4e24acb5eb73c6ac9ed2ba"
  },
  {
    "url": "assets/js/48.b8145af1.js",
    "revision": "2a0aed6944b1605eb706468c7b9faaaa"
  },
  {
    "url": "assets/js/5.024b04e1.js",
    "revision": "04bad500f6f9554fe04672b0aef35cf5"
  },
  {
    "url": "assets/js/8.35e0c6e5.js",
    "revision": "e6650eee193dc5ebe37ac5332c720bda"
  },
  {
    "url": "assets/js/9.595cdbca.js",
    "revision": "cee0e1b27719bdc863d4b36d1830baef"
  },
  {
    "url": "assets/js/app.af997ba3.js",
    "revision": "3a159c6f159f78cf3754d80e74c0b622"
  },
  {
    "url": "assets/js/vendors~docsearch.20f5e5ba.js",
    "revision": "c8a2c5a35ac10fdda5b7cb189641ed4b"
  },
  {
    "url": "index.html",
    "revision": "3573400cd0c95831a1c22f5ecdf5304a"
  },
  {
    "url": "logo.png",
    "revision": "41b8e7b249dda37b0586706e99995a76"
  },
  {
    "url": "logoBot.png",
    "revision": "efd0d8a4bfd44b3e2c264040d5529d16"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
