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
    "revision": "b9bf56ecee785960f2d0876b48ad591a"
  },
  {
    "url": "1.0/attribute/attribute-groups.html",
    "revision": "ccb47525545fd9fe631ead4b324d62ca"
  },
  {
    "url": "1.0/attribute/attribute-input.html",
    "revision": "584d100b1836f1eb45c8b61d4e7a2084"
  },
  {
    "url": "1.0/attribute/index.html",
    "revision": "9843e55cd9fb9c1cf0906e51754a8833"
  },
  {
    "url": "1.0/attribute/product-attribute.html",
    "revision": "fba10f7bed6b898251f7ddc3a45bee66"
  },
  {
    "url": "1.0/category/categories.html",
    "revision": "c400e484ba41b512caa25d4886ef7efb"
  },
  {
    "url": "1.0/categoryField/category-fields.html",
    "revision": "313ab1c62beafe90345dcf9b6b9cab32"
  },
  {
    "url": "1.0/configuration/index.html",
    "revision": "428f030bf63d7dea25d16715d31cbd04"
  },
  {
    "url": "1.0/configuration/integration.html",
    "revision": "0cb383dd8530821cd78c81c8603e37af"
  },
  {
    "url": "1.0/configuration/magic-ai.html",
    "revision": "c793ad90106609d8ba5235c1dd790bce"
  },
  {
    "url": "1.0/data-transfer/export.html",
    "revision": "6ee7384329573a628851fdb20b8328d1"
  },
  {
    "url": "1.0/data-transfer/import.html",
    "revision": "42adcb3c98d1b7bf736847517ad54b18"
  },
  {
    "url": "1.0/data-transfer/index.html",
    "revision": "4afe3fd77a54e9d23bd2c9076b5024ef"
  },
  {
    "url": "1.0/introduction/index.html",
    "revision": "28f2bce2ee64e3e975ff63d308aaed07"
  },
  {
    "url": "1.0/introduction/introductions.html",
    "revision": "c660c3c24ab89feffdb8ad2198c6cec2"
  },
  {
    "url": "1.0/magic/magic-ai.html",
    "revision": "f001915d950d905e4aa5a0ea89f1a50c"
  },
  {
    "url": "1.0/products/configurable.html",
    "revision": "2ad9233208f6662217839efddb501f70"
  },
  {
    "url": "1.0/products/index.html",
    "revision": "1b2dfd20d4cf4c1dd196af533f377114"
  },
  {
    "url": "1.0/products/simple.html",
    "revision": "38ba59d9a16f4d39ad6d2441ce30d339"
  },
  {
    "url": "1.0/settings/channels.html",
    "revision": "6ca4553822687714c35f2fc65b24fcb7"
  },
  {
    "url": "1.0/settings/currencies.html",
    "revision": "0c84915a7f53aabf251800fbc29817c5"
  },
  {
    "url": "1.0/settings/index.html",
    "revision": "33f4c2a9c489224655ccab117324a995"
  },
  {
    "url": "1.0/settings/locale.html",
    "revision": "3fed7155e7392e8cffbf092dccd496ec"
  },
  {
    "url": "1.0/settings/roles.html",
    "revision": "486d00bc68e2bc6ab1d8adb19fc7e51d"
  },
  {
    "url": "1.0/settings/users.html",
    "revision": "7e68fbf1b9f6dc6b86771081bc3ea08d"
  },
  {
    "url": "404.html",
    "revision": "bd7a67b0b2c8fb99b3cbc2d65b8674b4"
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
    "url": "assets/img/boolean.f3ead6fe.png",
    "revision": "f3ead6fe2b5fa38bb9babb66989185e6"
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
    "url": "assets/img/checkbox.b5ac610c.png",
    "revision": "b5ac610ca63132be903345dedebd0ffb"
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
    "url": "assets/img/date.ea3f0057.png",
    "revision": "ea3f005795c5e1553e377d532f780d64"
  },
  {
    "url": "assets/img/datetime.5416007d.png",
    "revision": "5416007d558c3fc977559fe0522deadc"
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
    "url": "assets/img/file.4502008e.png",
    "revision": "4502008ec685d2d7849f5e1dca9992a4"
  },
  {
    "url": "assets/img/final.5984bbb0.png",
    "revision": "5984bbb0ef0db478d8e351e37cc9b8d7"
  },
  {
    "url": "assets/img/gallery.6857b0fd.png",
    "revision": "6857b0fd60c339027f3924562618a260"
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
    "url": "assets/img/image.bc84c4b1.png",
    "revision": "bc84c4b1668695464b1c156316322f77"
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
    "url": "assets/img/multiselect.80c547d5.png",
    "revision": "80c547d5bc3e92288d7a0030ac1d1f8f"
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
    "url": "assets/img/price.3917b51f.png",
    "revision": "3917b51f4c299c71dfa4db886ef8fc1a"
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
    "url": "assets/img/select.e1702453.png",
    "revision": "e1702453bf860f9490c2afef3566774b"
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
    "url": "assets/img/text.c0a11e69.png",
    "revision": "c0a11e699efe1634ae0b723598a65557"
  },
  {
    "url": "assets/img/textarea.d73fb125.png",
    "revision": "d73fb125ed41d0e73602c7940fedf2b5"
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
    "url": "assets/js/1.03f9d834.js",
    "revision": "d8f7f680aa6d2bbf75e3b52976dcf547"
  },
  {
    "url": "assets/js/10.9b224733.js",
    "revision": "796e8f07e5414b48a951ac45b60fe5da"
  },
  {
    "url": "assets/js/11.6091e940.js",
    "revision": "37be1dd93bfd023e69a42269b1690483"
  },
  {
    "url": "assets/js/12.e833780e.js",
    "revision": "271a36d61ea3f80e28f55eaf1acfb968"
  },
  {
    "url": "assets/js/13.36f3af56.js",
    "revision": "0d4ed33f4f40d7c73896f8a8211d4856"
  },
  {
    "url": "assets/js/14.ea2a4895.js",
    "revision": "72fd86203cda38a00967621ef0e160a8"
  },
  {
    "url": "assets/js/15.cfda0435.js",
    "revision": "10aefc557fa900936e55edb5a084c9fd"
  },
  {
    "url": "assets/js/16.0f38276f.js",
    "revision": "6e929b89cf5f1d0adbecb00ebc8287f2"
  },
  {
    "url": "assets/js/17.5e93aa1e.js",
    "revision": "74c4a7f24eabbf5c16f9dec434b61f34"
  },
  {
    "url": "assets/js/18.91fa0470.js",
    "revision": "e35567cce5c528eb99270b76e1dbc2ef"
  },
  {
    "url": "assets/js/19.2b5cca9b.js",
    "revision": "3bf588a7431892266aa8892bedf61bea"
  },
  {
    "url": "assets/js/2.b7a8189f.js",
    "revision": "f2f733bd943bc9f9cc060ec7e0b89fe7"
  },
  {
    "url": "assets/js/20.055881d5.js",
    "revision": "25cac1dc7ac365cd7f27daae7f2fd1cc"
  },
  {
    "url": "assets/js/21.d2a6ae13.js",
    "revision": "b5a31823fbe942753d5276f684b18d6a"
  },
  {
    "url": "assets/js/22.df6f7619.js",
    "revision": "c4f7fa8164403eea87528503bf66c394"
  },
  {
    "url": "assets/js/23.48ae7e4d.js",
    "revision": "9c02af4d0a4c146747807f7e53a435d5"
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
    "url": "assets/js/26.5431c5bf.js",
    "revision": "0a1790189e577149680e2fa5e975333f"
  },
  {
    "url": "assets/js/27.41ca5f5b.js",
    "revision": "909baca23e1a4cd522471b9523dd8b17"
  },
  {
    "url": "assets/js/28.c3229a83.js",
    "revision": "0f216cd8d79dd39fbd3cd156cee0cefa"
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
    "url": "assets/js/30.b4fbacc7.js",
    "revision": "a813ff716673ea73c35fbf79cc627263"
  },
  {
    "url": "assets/js/31.6be9f062.js",
    "revision": "62780cc39dc947f46c2c6e9c2bfdbb14"
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
    "url": "assets/js/35.1e2827cd.js",
    "revision": "0be68bbd7d4196b55792450c203ed6e0"
  },
  {
    "url": "assets/js/36.d12873d9.js",
    "revision": "185cd93b5f8977d0ef0066b2e49dd9d0"
  },
  {
    "url": "assets/js/37.b5f33ccf.js",
    "revision": "1d36d5b0e2d2fd82028d32fd9b73e62d"
  },
  {
    "url": "assets/js/38.41ccf4ea.js",
    "revision": "46b91892c369177f59b745a7c0e40dd1"
  },
  {
    "url": "assets/js/39.77e5e6c7.js",
    "revision": "05c4f1830fb61e79f9c1919a541259af"
  },
  {
    "url": "assets/js/4.5dec3b09.js",
    "revision": "8cf90effd6f765235db25a88663eecfe"
  },
  {
    "url": "assets/js/40.71f0e9c2.js",
    "revision": "b6990073e3f485f6f8162419662341c5"
  },
  {
    "url": "assets/js/41.344b6490.js",
    "revision": "32478de42c297c60f7314c5ebb618504"
  },
  {
    "url": "assets/js/42.62475379.js",
    "revision": "a9bff3b2a4a727464b11c2d6dd2030b0"
  },
  {
    "url": "assets/js/43.ed15e520.js",
    "revision": "63ebb0a664471c48f443924a19b4ea77"
  },
  {
    "url": "assets/js/44.2b460a34.js",
    "revision": "dee5679731e548ddc941c693a8d286ce"
  },
  {
    "url": "assets/js/45.8dde1af5.js",
    "revision": "b961b86feae99f3b1fb2289e857d9f44"
  },
  {
    "url": "assets/js/46.168a3a65.js",
    "revision": "25d6377b287b01e209cca7402492e76f"
  },
  {
    "url": "assets/js/5.23655a0f.js",
    "revision": "6b27bff08d06da1430d0cea2645a7899"
  },
  {
    "url": "assets/js/8.09906a86.js",
    "revision": "67849c5d8c2da0553a80abca62ebd17a"
  },
  {
    "url": "assets/js/9.11158608.js",
    "revision": "8aa069c134a03a1c7e6ff489e0dd8179"
  },
  {
    "url": "assets/js/app.5d3ffdd2.js",
    "revision": "084d922204dbede19b2fec35927f6298"
  },
  {
    "url": "assets/js/vendors~docsearch.a2297aec.js",
    "revision": "a2fc8d020eda77fa4e08ab3bdd10ef92"
  },
  {
    "url": "index.html",
    "revision": "ca856e8c84e1ef4ac7a01c3731dd45be"
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
