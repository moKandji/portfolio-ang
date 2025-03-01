
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 907, hash: 'b340620dcbb6b4a771f730e226adf20c0b4b00bfa46db64affcf654aaf2dc314', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1157, hash: '61bf78a43aa90024d8b785c70795c7ee3f3b5a4a27e9f05725860dfbbe3ea6ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20759, hash: 'f2e734e92d92da0060eafa2e56ea0e5a76cf771f0bf6c545576347a2bdcae839', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IFGEHQHN.css': {size: 138, hash: 'Xc4lYbP9Yuc', text: () => import('./assets-chunks/styles-IFGEHQHN_css.mjs').then(m => m.default)}
  },
};
