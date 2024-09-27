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
    "revision": "e4a137258ee7b3f8922310483a9ea2c6"
  },
  {
    "url": "1.0/attribute/attribute-groups.html",
    "revision": "8c02277bf5eda3ef6f6c12bf1d30e49a"
  },
  {
    "url": "1.0/attribute/attribute-input.html",
    "revision": "931dd63a79e11ee36f5380e3e4152629"
  },
  {
    "url": "1.0/attribute/index.html",
    "revision": "46550c04d6754ba85a5ec45fd56b1e7c"
  },
  {
    "url": "1.0/attribute/product-attribute.html",
    "revision": "c0f2f1dce870a7edca114dd8efd05d2a"
  },
  {
    "url": "1.0/category/categories.html",
    "revision": "57f5702e7e270587d9d75174b75ac2fb"
  },
  {
    "url": "1.0/categoryField/category-fields.html",
    "revision": "5652b3c833b35f707d853f2df1c9d307"
  },
  {
    "url": "1.0/configuration/index.html",
    "revision": "94b7c734a9b0307b14e9918f64b78099"
  },
  {
    "url": "1.0/configuration/integration.html",
    "revision": "343fd67215ca583c40fbbe7fb319dc75"
  },
  {
    "url": "1.0/configuration/magic-ai.html",
    "revision": "d5c4e94b689d87d3f9a8827ebd654ebf"
  },
  {
    "url": "1.0/data-transfer/export.html",
    "revision": "2c0ee0ec0dacaef9f64553ce42925483"
  },
  {
    "url": "1.0/data-transfer/import.html",
    "revision": "dace7508273b95224ebec2ec038afc1d"
  },
  {
    "url": "1.0/data-transfer/index.html",
    "revision": "fa77847fb7c3b84da83d2eada170032f"
  },
  {
    "url": "1.0/introduction/index.html",
    "revision": "acb9b1d95617d5020f03f43f1f665fb0"
  },
  {
    "url": "1.0/introduction/introductions.html",
    "revision": "d4dd4fdaca9e9d9eb60c97ee1073747f"
  },
  {
    "url": "1.0/magic/magic-ai.html",
    "revision": "766c1ca9998faef0f5eb7747cc199b8b"
  },
  {
    "url": "1.0/products/configurable.html",
    "revision": "7784329419c98e8fdca6009a0a487a20"
  },
  {
    "url": "1.0/products/index.html",
    "revision": "2522122d2d5241c13ed034e0f9a57767"
  },
  {
    "url": "1.0/products/simple.html",
    "revision": "15f5ed0599922faa4ed4e80658294714"
  },
  {
    "url": "1.0/settings/channels.html",
    "revision": "41debb5845944edbf8710357916d1a59"
  },
  {
    "url": "1.0/settings/currencies.html",
    "revision": "925c20d50541f2396f47c10738578858"
  },
  {
    "url": "1.0/settings/index.html",
    "revision": "0efdee1524b9036fa73d3a8f5ebd5788"
  },
  {
    "url": "1.0/settings/locale.html",
    "revision": "018f6dc97d9847c47a40da33d27c6413"
  },
  {
    "url": "1.0/settings/roles.html",
    "revision": "af78dc741a75e028544a44f1339bc375"
  },
  {
    "url": "1.0/settings/users.html",
    "revision": "639c4be4d6945f9315fbef1cd8ec3327"
  },
  {
    "url": "404.html",
    "revision": "e380f2210b07fd1d46617aefd2a1bc9f"
  },
  {
    "url": "assets/css/0.styles.fe711f34.css",
    "revision": "a6995234181194db6ac7eaecb67daeb4"
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
    "url": "assets/img/apiKey.530fc37b.png",
    "revision": "530fc37b5c01405e35da6781e2290bc7"
  },
  {
    "url": "assets/img/assignGroup.b7156482.png",
    "revision": "b715648283e5a32ff8b1ec53b9a33e42"
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
    "url": "assets/img/createGroups.8855b91f.png",
    "revision": "8855b91f6abf2ebff5df86efe884844d"
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
    "url": "assets/img/currencyGrid.e4037a28.png",
    "revision": "e4037a28c11aa374d45ebc13594ace61"
  },
  {
    "url": "assets/img/currencyOutput.110a646c.png",
    "revision": "110a646c0750ecf38c40639f3f028ba4"
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
    "url": "assets/img/editGroup.dda97398.png",
    "revision": "dda97398fbecdb09b0f4856cd22fb963"
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
    "url": "assets/img/export.246e0a54.png",
    "revision": "246e0a54a2819538728678be59e6802f"
  },
  {
    "url": "assets/img/export.83037dd5.png",
    "revision": "83037dd5a01efbaf6a4175092e954121"
  },
  {
    "url": "assets/img/exportNow.d093ec16.png",
    "revision": "d093ec16cccdd22bcfb732e8de1dc631"
  },
  {
    "url": "assets/img/exportOutput.188040a4.png",
    "revision": "188040a4304f6584f6b4b40fd164fe7d"
  },
  {
    "url": "assets/img/exportOutput.2b273696.png",
    "revision": "2b273696dbed2bfae1072550c0aaeeac"
  },
  {
    "url": "assets/img/exportOutput.b9b1fd85.png",
    "revision": "b9b1fd8540072e060937ec208d0aba5e"
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
    "url": "assets/img/final.5984bbb0.png",
    "revision": "5984bbb0ef0db478d8e351e37cc9b8d7"
  },
  {
    "url": "assets/img/general.ff0779af.png",
    "revision": "ff0779af5588e5a19dec0f5ac18a11a9"
  },
  {
    "url": "assets/img/generate.63faefc6.png",
    "revision": "63faefc6c374f54f21efa8c2251c30bf"
  },
  {
    "url": "assets/img/grid.1b138538.png",
    "revision": "1b13853803d63436182931e5c64cd6b6"
  },
  {
    "url": "assets/img/groupGrid.d0ccaec5.png",
    "revision": "d0ccaec50a8795bab068446d908e7c80"
  },
  {
    "url": "assets/img/groupOutput.53ac31f6.png",
    "revision": "53ac31f6aca0537b68710de2438fcd39"
  },
  {
    "url": "assets/img/history.7c446b97.png",
    "revision": "7c446b9736ff2278eb008013b594713e"
  },
  {
    "url": "assets/img/history.f189ac76.png",
    "revision": "f189ac76cc444f123dc9b03c8dc7d409"
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
    "url": "assets/img/integrationOutput.1566d880.png",
    "revision": "1566d8808dc96dd6cc421395cda0119e"
  },
  {
    "url": "assets/img/label.9b8cd25f.png",
    "revision": "9b8cd25f0b9764a6a7efa86e2d2ef4c9"
  },
  {
    "url": "assets/img/new.7ddf250f.png",
    "revision": "7ddf250fa20d55980a1febfe7d2884c6"
  },
  {
    "url": "assets/img/newGroup.b4cf6205.png",
    "revision": "b4cf62050f00e0fa782b641b3e52d83f"
  },
  {
    "url": "assets/img/newLocale.82b8b2f8.png",
    "revision": "82b8b2f827e7c2225325452683676a58"
  },
  {
    "url": "assets/img/output.3b651334.png",
    "revision": "3b6513345af9d9d30f7aa540710ded35"
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
    "url": "assets/img/outputGroup.71ddbf21.png",
    "revision": "71ddbf2157bb8920f234d3fabc60b3db"
  },
  {
    "url": "assets/img/preview.784ae444.png",
    "revision": "784ae444c18d989a286bdd59bd72f777"
  },
  {
    "url": "assets/img/preview.908f163a.png",
    "revision": "908f163a34b31f0200126c16e6dd0524"
  },
  {
    "url": "assets/img/product.40ba49d2.png",
    "revision": "40ba49d2e0a9f96a30110dae578f02e5"
  },
  {
    "url": "assets/img/productCurrency.4721fadc.png",
    "revision": "4721fadcf3ada12888bb270236523e71"
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
    "url": "assets/img/saveCurrency.cedb4a97.png",
    "revision": "cedb4a97e51f213f84812f279b9f9d06"
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
    "url": "assets/img/switcher.75a6bdce.png",
    "revision": "75a6bdce18a90d25b8d3d8b111763d63"
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
    "url": "assets/js/1.465dc571.js",
    "revision": "cf2d8df1e83f237234a0a4aed17fa104"
  },
  {
    "url": "assets/js/10.0ab255bd.js",
    "revision": "254f2ed7f0249cb803a98138fb9f1e22"
  },
  {
    "url": "assets/js/11.9aa60268.js",
    "revision": "770796734598922f9abc98019f6ca16e"
  },
  {
    "url": "assets/js/12.2bf5ea87.js",
    "revision": "64e847d802b25a74413ee3bd68c18176"
  },
  {
    "url": "assets/js/13.13b59b29.js",
    "revision": "691dfc66c78d2d768eb314cbed5fe5b1"
  },
  {
    "url": "assets/js/14.66548021.js",
    "revision": "9974f2bf42483cf3ca9663a0b22cee26"
  },
  {
    "url": "assets/js/15.734e7df6.js",
    "revision": "3952184a94a815bfd273eb44d9c2101e"
  },
  {
    "url": "assets/js/16.0f38276f.js",
    "revision": "6e929b89cf5f1d0adbecb00ebc8287f2"
  },
  {
    "url": "assets/js/17.e6baba9e.js",
    "revision": "dc33fb267f2c5d0512aeb87e5c53cfbd"
  },
  {
    "url": "assets/js/18.91fa0470.js",
    "revision": "e35567cce5c528eb99270b76e1dbc2ef"
  },
  {
    "url": "assets/js/19.18068991.js",
    "revision": "2fc25bbb492324353ed847dca57b742c"
  },
  {
    "url": "assets/js/2.42ecce3b.js",
    "revision": "fa945ac3865ff86618ed7dd913d49083"
  },
  {
    "url": "assets/js/20.3aacbcc6.js",
    "revision": "2f72b271e387c47943dc8fc10ec909f0"
  },
  {
    "url": "assets/js/21.e77e1db3.js",
    "revision": "1ed8cf58936ed2f1f3620c120948acd8"
  },
  {
    "url": "assets/js/22.875d0f41.js",
    "revision": "b579d8e6dcdb63fb3a33a8fbc0cd87c9"
  },
  {
    "url": "assets/js/23.54e66a08.js",
    "revision": "c7f8b3169bf43f2f5a9ffc0159b6d3ce"
  },
  {
    "url": "assets/js/24.992e960f.js",
    "revision": "80df735bdc19b693d9b92b4abe82ac8b"
  },
  {
    "url": "assets/js/25.35dfffd3.js",
    "revision": "4209bff3b729f78e9eb7f2209a1ce03c"
  },
  {
    "url": "assets/js/26.a43fe516.js",
    "revision": "85705dc31aca5c0f26318f016742d6fa"
  },
  {
    "url": "assets/js/27.adf770f6.js",
    "revision": "c819db182cbaddac440b80ab1788d0e3"
  },
  {
    "url": "assets/js/28.0d7cacc2.js",
    "revision": "cd61450d6ca36b1997be31c83e8cfb12"
  },
  {
    "url": "assets/js/29.7275435d.js",
    "revision": "4807f77e22bc828fe0fe1a7782b3e914"
  },
  {
    "url": "assets/js/3.4d85b181.js",
    "revision": "b5c91eef550153a4ddcc50b641fa6226"
  },
  {
    "url": "assets/js/30.4815443e.js",
    "revision": "ea30c07eb1084d406fa42e5c3fd607cb"
  },
  {
    "url": "assets/js/31.e54aba25.js",
    "revision": "a20732d68f5bd73773035b1b1edc3d38"
  },
  {
    "url": "assets/js/32.517706a8.js",
    "revision": "68460e01adbf0a35115c7d7d351b0742"
  },
  {
    "url": "assets/js/33.db67545d.js",
    "revision": "80cde780ef984cc6e1e4f32e1e86c9e8"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.916c1361.js",
    "revision": "4c0e24a91379b2950aabe536abc3f123"
  },
  {
    "url": "assets/js/36.9c0add2f.js",
    "revision": "3f613a825da90abf7e2591749986c042"
  },
  {
    "url": "assets/js/37.82d2a0a3.js",
    "revision": "aeacdb695d100d3a2f12bb5ded9361cd"
  },
  {
    "url": "assets/js/38.b34250af.js",
    "revision": "1f3b94482290c1cc14b141b0064ff922"
  },
  {
    "url": "assets/js/39.1c1d5143.js",
    "revision": "278a490af342c0d1734a06cf09045e24"
  },
  {
    "url": "assets/js/4.da4614df.js",
    "revision": "df3a6b0b6da37feca0d938e4bff59c9e"
  },
  {
    "url": "assets/js/40.23c039c4.js",
    "revision": "4f50c01d9c96f986ae528f4e54ece852"
  },
  {
    "url": "assets/js/41.b38df9ce.js",
    "revision": "c5378ae7582c337f33b5308d2d403a4a"
  },
  {
    "url": "assets/js/42.0e584834.js",
    "revision": "022a4a5c7e7cbea6304637a6536caec0"
  },
  {
    "url": "assets/js/43.52cd7f3e.js",
    "revision": "58c963a96aaee32acb4b1566c711ee98"
  },
  {
    "url": "assets/js/44.4bc59673.js",
    "revision": "c2d8795828c22194c57fb58e55013230"
  },
  {
    "url": "assets/js/45.07d11abb.js",
    "revision": "2f4389796e785ff78fa511496bf2159d"
  },
  {
    "url": "assets/js/46.0941ba2e.js",
    "revision": "0d24e89d2e2fd2f990d3779ab147e2f8"
  },
  {
    "url": "assets/js/5.b6d5824a.js",
    "revision": "1361976aff622923cf2f933c5dfd0abc"
  },
  {
    "url": "assets/js/8.4c9c0ce0.js",
    "revision": "4d75e96336beea913909e6df8ffe0742"
  },
  {
    "url": "assets/js/9.840be5ee.js",
    "revision": "7471abdfe3a3c1c7428c60555e475880"
  },
  {
    "url": "assets/js/app.d66f1e68.js",
    "revision": "66ab63733ad063dcf797ff542d7ff1af"
  },
  {
    "url": "assets/js/vendors~docsearch.5f209946.js",
    "revision": "38c92d3b23be3ead4e3cbe9d33550a20"
  },
  {
    "url": "index.html",
    "revision": "36dfe09b479279f28bb5ff7b1fabeb5c"
  },
  {
    "url": "logo.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
  },
  {
    "url": "logoBot.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
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
