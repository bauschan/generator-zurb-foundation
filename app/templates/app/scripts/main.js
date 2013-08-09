require.config({
	paths: {
		modernizr: 'libs/custom.modernizr',
		jquery: 'libs/jquery'
	},
  shim: {
	"foundation/foundation" : { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.alerts": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.clearing": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.cookie": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.dropdown": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.forms": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.joyride": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.magellan": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.orbit": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.placeholder": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.reveal": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.section": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.tooltips": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.topbar": { deps: ["jquery"], exports: 'jquery' }
  }
});

require(["modernizr",
	"jquery",
	"foundation/foundation",
	"foundation/foundation.alerts",
	"foundation/foundation.clearing",
	"foundation/foundation.cookie",
	"foundation/foundation.dropdown",   
	"foundation/foundation.forms",
	"foundation/foundation.joyride",
	"foundation/foundation.magellan",   
	"foundation/foundation.orbit",
 	"foundation/foundation.placeholder",
	"foundation/foundation.reveal",
	"foundation/foundation.section",    
	"foundation/foundation.tooltips",   
	"foundation/foundation.topbar"
], function (modernizr, $) {
  $(document).foundation();
});