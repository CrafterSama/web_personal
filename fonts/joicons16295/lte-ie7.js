/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'joicons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'joicon-home' : '&#xe060;',
			'joicon-home-2' : '&#xe000;',
			'joicon-home-3' : '&#xe001;',
			'joicon-office' : '&#xe002;',
			'joicon-newspaper' : '&#xe003;',
			'joicon-pencil' : '&#xe004;',
			'joicon-pencil-2' : '&#xe005;',
			'joicon-quill' : '&#xe006;',
			'joicon-pen' : '&#xe007;',
			'joicon-blog' : '&#xe008;',
			'joicon-droplet' : '&#xe009;',
			'joicon-paint-format' : '&#xe00a;',
			'joicon-image' : '&#xe00b;',
			'joicon-image-2' : '&#xe00c;',
			'joicon-images' : '&#xe00d;',
			'joicon-camera' : '&#xe00e;',
			'joicon-music' : '&#xe00f;',
			'joicon-headphones' : '&#xe010;',
			'joicon-play' : '&#xe011;',
			'joicon-film' : '&#xe012;',
			'joicon-camera-2' : '&#xe013;',
			'joicon-dice' : '&#xe014;',
			'joicon-pacman' : '&#xe015;',
			'joicon-spades' : '&#xe016;',
			'joicon-clubs' : '&#xe017;',
			'joicon-diamonds' : '&#xe018;',
			'joicon-pawn' : '&#xe019;',
			'joicon-bullhorn' : '&#xe01a;',
			'joicon-connection' : '&#xe01b;',
			'joicon-podcast' : '&#xe01c;',
			'joicon-feed' : '&#xe01d;',
			'joicon-book' : '&#xe01e;',
			'joicon-books' : '&#xe01f;',
			'joicon-library' : '&#xe020;',
			'joicon-file' : '&#xe021;',
			'joicon-profile' : '&#xe022;',
			'joicon-file-2' : '&#xe023;',
			'joicon-file-3' : '&#xe024;',
			'joicon-file-4' : '&#xe025;',
			'joicon-copy' : '&#xe026;',
			'joicon-copy-2' : '&#xe027;',
			'joicon-copy-3' : '&#xe028;',
			'joicon-paste' : '&#xe029;',
			'joicon-paste-2' : '&#xe02a;',
			'joicon-paste-3' : '&#xe02b;',
			'joicon-stack' : '&#xe02c;',
			'joicon-folder' : '&#xe02d;',
			'joicon-folder-open' : '&#xe02e;',
			'joicon-tag' : '&#xe02f;',
			'joicon-tags' : '&#xe030;',
			'joicon-barcode' : '&#xe031;',
			'joicon-qrcode' : '&#xe032;',
			'joicon-ticket' : '&#xe033;',
			'joicon-cart' : '&#xe034;',
			'joicon-cart-2' : '&#xe035;',
			'joicon-cart-3' : '&#xe036;',
			'joicon-coin' : '&#xe037;',
			'joicon-credit' : '&#xe038;',
			'joicon-calculate' : '&#xe039;',
			'joicon-support' : '&#xe03a;',
			'joicon-phone' : '&#xe03b;',
			'joicon-phone-hang-up' : '&#xe03c;',
			'joicon-address-book' : '&#xe03d;',
			'joicon-notebook' : '&#xe03e;',
			'joicon-envelop' : '&#xe03f;',
			'joicon-pushpin' : '&#xe040;',
			'joicon-location' : '&#xe041;',
			'joicon-location-2' : '&#xe042;',
			'joicon-compass' : '&#xe043;',
			'joicon-map' : '&#xe044;',
			'joicon-map-2' : '&#xe045;',
			'joicon-history' : '&#xe046;',
			'joicon-clock' : '&#xe047;',
			'joicon-clock-2' : '&#xe048;',
			'joicon-alarm' : '&#xe049;',
			'joicon-alarm-2' : '&#xe04a;',
			'joicon-bell' : '&#xe04b;',
			'joicon-stopwatch' : '&#xe04c;',
			'joicon-calendar' : '&#xe04d;',
			'joicon-calendar-2' : '&#xe04e;',
			'joicon-print' : '&#xe04f;',
			'joicon-keyboard' : '&#xe050;',
			'joicon-screen' : '&#xe051;',
			'joicon-laptop' : '&#xe052;',
			'joicon-mobile' : '&#xe053;',
			'joicon-mobile-2' : '&#xe054;',
			'joicon-tablet' : '&#xe055;',
			'joicon-tv' : '&#xe056;',
			'joicon-cabinet' : '&#xe057;',
			'joicon-drawer' : '&#xe058;',
			'joicon-drawer-2' : '&#xe059;',
			'joicon-drawer-3' : '&#xe05a;',
			'joicon-box-add' : '&#xe05b;',
			'joicon-box-remove' : '&#xe05c;',
			'joicon-download' : '&#xe05d;',
			'joicon-upload' : '&#xe05e;',
			'joicon-disk' : '&#xe05f;',
			'joicon-storage' : '&#xe061;',
			'joicon-undo' : '&#xe062;',
			'joicon-redo' : '&#xe063;',
			'joicon-flip' : '&#xe064;',
			'joicon-flip-2' : '&#xe065;',
			'joicon-undo-2' : '&#xe066;',
			'joicon-redo-2' : '&#xe067;',
			'joicon-forward' : '&#xe068;',
			'joicon-reply' : '&#xe069;',
			'joicon-bubble' : '&#xe06a;',
			'joicon-bubbles' : '&#xe06b;',
			'joicon-bubbles-2' : '&#xe06c;',
			'joicon-bubble-2' : '&#xe06d;',
			'joicon-bubbles-3' : '&#xe06e;',
			'joicon-bubbles-4' : '&#xe06f;',
			'joicon-user' : '&#xe070;',
			'joicon-users' : '&#xe071;',
			'joicon-user-2' : '&#xe072;',
			'joicon-users-2' : '&#xe073;',
			'joicon-user-3' : '&#xe074;',
			'joicon-user-4' : '&#xe075;',
			'joicon-quotes-left' : '&#xe076;',
			'joicon-busy' : '&#xe077;',
			'joicon-spinner' : '&#xe078;',
			'joicon-spinner-2' : '&#xe079;',
			'joicon-spinner-3' : '&#xe07a;',
			'joicon-spinner-4' : '&#xe07b;',
			'joicon-spinner-5' : '&#xe07c;',
			'joicon-spinner-6' : '&#xe07d;',
			'joicon-binoculars' : '&#xe07e;',
			'joicon-search' : '&#xe07f;',
			'joicon-zoom-in' : '&#xe080;',
			'joicon-zoom-out' : '&#xe081;',
			'joicon-expand' : '&#xe082;',
			'joicon-contract' : '&#xe083;',
			'joicon-expand-2' : '&#xe084;',
			'joicon-contract-2' : '&#xe085;',
			'joicon-key' : '&#xe086;',
			'joicon-key-2' : '&#xe087;',
			'joicon-lock' : '&#xe088;',
			'joicon-lock-2' : '&#xe089;',
			'joicon-unlocked' : '&#xe08a;',
			'joicon-wrench' : '&#xe08b;',
			'joicon-settings' : '&#xe08c;',
			'joicon-equalizer' : '&#xe08d;',
			'joicon-cog' : '&#xe08e;',
			'joicon-cogs' : '&#xe08f;',
			'joicon-cog-2' : '&#xe090;',
			'joicon-hammer' : '&#xe091;',
			'joicon-wand' : '&#xe092;',
			'joicon-aid' : '&#xe093;',
			'joicon-bug' : '&#xe094;',
			'joicon-pie' : '&#xe095;',
			'joicon-stats' : '&#xe096;',
			'joicon-bars' : '&#xe097;',
			'joicon-bars-2' : '&#xe098;',
			'joicon-gift' : '&#xe099;',
			'joicon-trophy' : '&#xe09a;',
			'joicon-glass' : '&#xe09b;',
			'joicon-mug' : '&#xe09c;',
			'joicon-food' : '&#xe09d;',
			'joicon-leaf' : '&#xe09e;',
			'joicon-rocket' : '&#xe09f;',
			'joicon-meter' : '&#xe0a0;',
			'joicon-meter2' : '&#xe0a1;',
			'joicon-dashboard' : '&#xe0a2;',
			'joicon-hammer-2' : '&#xe0a3;',
			'joicon-fire' : '&#xe0a4;',
			'joicon-lab' : '&#xe0a5;',
			'joicon-magnet' : '&#xe0a6;',
			'joicon-remove' : '&#xe0a7;',
			'joicon-remove-2' : '&#xe0a8;',
			'joicon-briefcase' : '&#xe0a9;',
			'joicon-airplane' : '&#xe0aa;',
			'joicon-truck' : '&#xe0ab;',
			'joicon-road' : '&#xe0ac;',
			'joicon-accessibility' : '&#xe0ad;',
			'joicon-target' : '&#xe0ae;',
			'joicon-shield' : '&#xe0af;',
			'joicon-lightning' : '&#xe0b0;',
			'joicon-switch' : '&#xe0b1;',
			'joicon-power-cord' : '&#xe0b2;',
			'joicon-signup' : '&#xe0b3;',
			'joicon-list' : '&#xe0b4;',
			'joicon-list-2' : '&#xe0b5;',
			'joicon-numbered-list' : '&#xe0b6;',
			'joicon-menu' : '&#xe0b7;',
			'joicon-menu-2' : '&#xe0b8;',
			'joicon-tree' : '&#xe0b9;',
			'joicon-cloud' : '&#xe0ba;',
			'joicon-cloud-download' : '&#xe0bb;',
			'joicon-cloud-upload' : '&#xe0bc;',
			'joicon-download-2' : '&#xe0bd;',
			'joicon-upload-2' : '&#xe0be;',
			'joicon-download-3' : '&#xe0bf;',
			'joicon-upload-3' : '&#xe0c0;',
			'joicon-globe' : '&#xe0c1;',
			'joicon-earth' : '&#xe0c2;',
			'joicon-link' : '&#xe0c3;',
			'joicon-flag' : '&#xe0c4;',
			'joicon-attachment' : '&#xe0c5;',
			'joicon-eye' : '&#xe0c6;',
			'joicon-eye-blocked' : '&#xe0c7;',
			'joicon-eye-2' : '&#xe0c8;',
			'joicon-bookmark' : '&#xe0c9;',
			'joicon-bookmarks' : '&#xe0ca;',
			'joicon-brightness-medium' : '&#xe0cb;',
			'joicon-brightness-contrast' : '&#xe0cc;',
			'joicon-contrast' : '&#xe0cd;',
			'joicon-star' : '&#xe0ce;',
			'joicon-star-2' : '&#xe0cf;',
			'joicon-star-3' : '&#xe0d0;',
			'joicon-heart' : '&#xe0d1;',
			'joicon-heart-2' : '&#xe0d2;',
			'joicon-heart-broken' : '&#xe0d3;',
			'joicon-thumbs-up' : '&#xe0d4;',
			'joicon-thumbs-up-2' : '&#xe0d5;',
			'joicon-happy' : '&#xe0d6;',
			'joicon-happy-2' : '&#xe0d7;',
			'joicon-smiley' : '&#xe0d8;',
			'joicon-smiley-2' : '&#xe0d9;',
			'joicon-tongue' : '&#xe0da;',
			'joicon-tongue-2' : '&#xe0db;',
			'joicon-sad' : '&#xe0dc;',
			'joicon-sad-2' : '&#xe0dd;',
			'joicon-wink' : '&#xe0de;',
			'joicon-wink-2' : '&#xe0df;',
			'joicon-grin' : '&#xe0e0;',
			'joicon-grin-2' : '&#xe0e1;',
			'joicon-cool' : '&#xe0e2;',
			'joicon-cool-2' : '&#xe0e3;',
			'joicon-angry' : '&#xe0e4;',
			'joicon-angry-2' : '&#xe0e5;',
			'joicon-evil' : '&#xe0e6;',
			'joicon-evil-2' : '&#xe0e7;',
			'joicon-shocked' : '&#xe0e8;',
			'joicon-shocked-2' : '&#xe0e9;',
			'joicon-confused' : '&#xe0ea;',
			'joicon-confused-2' : '&#xe0eb;',
			'joicon-neutral' : '&#xe0ec;',
			'joicon-neutral-2' : '&#xe0ed;',
			'joicon-wondering' : '&#xe0ee;',
			'joicon-wondering-2' : '&#xe0ef;',
			'joicon-point-up' : '&#xe0f0;',
			'joicon-point-right' : '&#xe0f1;',
			'joicon-point-down' : '&#xe0f2;',
			'joicon-point-left' : '&#xe0f3;',
			'joicon-warning' : '&#xe0f4;',
			'joicon-notification' : '&#xe0f5;',
			'joicon-question' : '&#xe0f6;',
			'joicon-info' : '&#xe0f7;',
			'joicon-info-2' : '&#xe0f8;',
			'joicon-blocked' : '&#xe0f9;',
			'joicon-cancel-circle' : '&#xe0fa;',
			'joicon-checkmark-circle' : '&#xe0fb;',
			'joicon-spam' : '&#xe0fc;',
			'joicon-close' : '&#xe0fd;',
			'joicon-checkmark' : '&#xe0fe;',
			'joicon-checkmark-2' : '&#xe0ff;',
			'joicon-spell-check' : '&#xe100;',
			'joicon-minus' : '&#xe101;',
			'joicon-plus' : '&#xe102;',
			'joicon-enter' : '&#xe103;',
			'joicon-exit' : '&#xe104;',
			'joicon-play-2' : '&#xe105;',
			'joicon-pause' : '&#xe106;',
			'joicon-stop' : '&#xe107;',
			'joicon-backward' : '&#xe108;',
			'joicon-forward-2' : '&#xe109;',
			'joicon-play-3' : '&#xe10a;',
			'joicon-pause-2' : '&#xe10b;',
			'joicon-stop-2' : '&#xe10c;',
			'joicon-backward-2' : '&#xe10d;',
			'joicon-forward-3' : '&#xe10e;',
			'joicon-first' : '&#xe10f;',
			'joicon-last' : '&#xe110;',
			'joicon-previous' : '&#xe111;',
			'joicon-next' : '&#xe112;',
			'joicon-eject' : '&#xe113;',
			'joicon-volume-high' : '&#xe114;',
			'joicon-volume-medium' : '&#xe115;',
			'joicon-volume-low' : '&#xe116;',
			'joicon-volume-mute' : '&#xe117;',
			'joicon-volume-mute-2' : '&#xe118;',
			'joicon-volume-increase' : '&#xe119;',
			'joicon-volume-decrease' : '&#xe11a;',
			'joicon-loop' : '&#xe11b;',
			'joicon-loop-2' : '&#xe11c;',
			'joicon-loop-3' : '&#xe11d;',
			'joicon-shuffle' : '&#xe11e;',
			'joicon-arrow-up-left' : '&#xe11f;',
			'joicon-arrow-up' : '&#xe120;',
			'joicon-arrow-up-right' : '&#xe121;',
			'joicon-arrow-right' : '&#xe122;',
			'joicon-arrow-down-right' : '&#xe123;',
			'joicon-arrow-down' : '&#xe124;',
			'joicon-arrow-down-left' : '&#xe125;',
			'joicon-arrow-left' : '&#xe126;',
			'joicon-arrow-up-left-2' : '&#xe127;',
			'joicon-arrow-up-2' : '&#xe128;',
			'joicon-arrow-up-right-2' : '&#xe129;',
			'joicon-arrow-right-2' : '&#xe12a;',
			'joicon-arrow-down-right-2' : '&#xe12b;',
			'joicon-arrow-down-2' : '&#xe12c;',
			'joicon-arrow-down-left-2' : '&#xe12d;',
			'joicon-arrow-left-2' : '&#xe12e;',
			'joicon-arrow-up-left-3' : '&#xe12f;',
			'joicon-arrow-up-3' : '&#xe130;',
			'joicon-arrow-up-right-3' : '&#xe131;',
			'joicon-arrow-right-3' : '&#xe132;',
			'joicon-arrow-down-right-3' : '&#xe133;',
			'joicon-arrow-down-3' : '&#xe134;',
			'joicon-arrow-down-left-3' : '&#xe135;',
			'joicon-arrow-left-3' : '&#xe136;',
			'joicon-tab' : '&#xe137;',
			'joicon-checkbox-checked' : '&#xe138;',
			'joicon-checkbox-unchecked' : '&#xe139;',
			'joicon-checkbox-partial' : '&#xe13a;',
			'joicon-radio-checked' : '&#xe13b;',
			'joicon-radio-unchecked' : '&#xe13c;',
			'joicon-crop' : '&#xe13d;',
			'joicon-scissors' : '&#xe13e;',
			'joicon-filter' : '&#xe13f;',
			'joicon-filter-2' : '&#xe140;',
			'joicon-font' : '&#xe141;',
			'joicon-text-height' : '&#xe142;',
			'joicon-text-width' : '&#xe143;',
			'joicon-bold' : '&#xe144;',
			'joicon-underline' : '&#xe145;',
			'joicon-italic' : '&#xe146;',
			'joicon-strikethrough' : '&#xe147;',
			'joicon-omega' : '&#xe148;',
			'joicon-sigma' : '&#xe149;',
			'joicon-table' : '&#xe14a;',
			'joicon-table-2' : '&#xe14b;',
			'joicon-insert-template' : '&#xe14c;',
			'joicon-pilcrow' : '&#xe14d;',
			'joicon-left-to-right' : '&#xe14e;',
			'joicon-right-to-left' : '&#xe14f;',
			'joicon-paragraph-left' : '&#xe150;',
			'joicon-paragraph-center' : '&#xe151;',
			'joicon-paragraph-right' : '&#xe152;',
			'joicon-paragraph-justify' : '&#xe153;',
			'joicon-paragraph-left-2' : '&#xe154;',
			'joicon-paragraph-center-2' : '&#xe155;',
			'joicon-paragraph-right-2' : '&#xe156;',
			'joicon-paragraph-justify-2' : '&#xe157;',
			'joicon-indent-increase' : '&#xe158;',
			'joicon-indent-decrease' : '&#xe159;',
			'joicon-new-tab' : '&#xe15a;',
			'joicon-embed' : '&#xe15b;',
			'joicon-code' : '&#xe15c;',
			'joicon-console' : '&#xe15d;',
			'joicon-share' : '&#xe15e;',
			'joicon-mail' : '&#xe15f;',
			'joicon-mail-2' : '&#xe160;',
			'joicon-mail-3' : '&#xe161;',
			'joicon-mail-4' : '&#xe162;',
			'joicon-google' : '&#xe163;',
			'joicon-google-plus' : '&#xe164;',
			'joicon-google-plus-2' : '&#xe165;',
			'joicon-google-plus-3' : '&#xe166;',
			'joicon-google-plus-4' : '&#xe167;',
			'joicon-google-drive' : '&#xe168;',
			'joicon-facebook' : '&#xe169;',
			'joicon-facebook-2' : '&#xe16a;',
			'joicon-facebook-3' : '&#xe16b;',
			'joicon-instagram' : '&#xe16c;',
			'joicon-twitter' : '&#xe16d;',
			'joicon-twitter-2' : '&#xe16e;',
			'joicon-twitter-3' : '&#xe16f;',
			'joicon-feed-2' : '&#xe170;',
			'joicon-feed-3' : '&#xe171;',
			'joicon-feed-4' : '&#xe172;',
			'joicon-youtube' : '&#xe173;',
			'joicon-youtube-2' : '&#xe174;',
			'joicon-vimeo' : '&#xe175;',
			'joicon-vimeo2' : '&#xe176;',
			'joicon-vimeo-2' : '&#xe177;',
			'joicon-lanyrd' : '&#xe178;',
			'joicon-flickr' : '&#xe179;',
			'joicon-flickr-2' : '&#xe17a;',
			'joicon-flickr-3' : '&#xe17b;',
			'joicon-flickr-4' : '&#xe17c;',
			'joicon-picassa' : '&#xe17d;',
			'joicon-picassa-2' : '&#xe17e;',
			'joicon-dribbble' : '&#xe17f;',
			'joicon-dribbble-2' : '&#xe180;',
			'joicon-dribbble-3' : '&#xe181;',
			'joicon-forrst' : '&#xe182;',
			'joicon-forrst-2' : '&#xe183;',
			'joicon-deviantart' : '&#xe184;',
			'joicon-deviantart-2' : '&#xe185;',
			'joicon-steam' : '&#xe186;',
			'joicon-steam-2' : '&#xe187;',
			'joicon-github' : '&#xe188;',
			'joicon-github-2' : '&#xe189;',
			'joicon-github-3' : '&#xe18a;',
			'joicon-github-4' : '&#xe18b;',
			'joicon-github-5' : '&#xe18c;',
			'joicon-wordpress' : '&#xe18d;',
			'joicon-wordpress-2' : '&#xe18e;',
			'joicon-joomla' : '&#xe18f;',
			'joicon-blogger' : '&#xe190;',
			'joicon-blogger-2' : '&#xe191;',
			'joicon-tumblr' : '&#xe192;',
			'joicon-tumblr-2' : '&#xe193;',
			'joicon-yahoo' : '&#xe194;',
			'joicon-tux' : '&#xe195;',
			'joicon-apple' : '&#xe196;',
			'joicon-finder' : '&#xe197;',
			'joicon-android' : '&#xe198;',
			'joicon-windows' : '&#xe199;',
			'joicon-windows8' : '&#xe19a;',
			'joicon-soundcloud' : '&#xe19b;',
			'joicon-soundcloud-2' : '&#xe19c;',
			'joicon-skype' : '&#xe19d;',
			'joicon-reddit' : '&#xe19e;',
			'joicon-linkedin' : '&#xe19f;',
			'joicon-lastfm' : '&#xe1a0;',
			'joicon-lastfm-2' : '&#xe1a1;',
			'joicon-delicious' : '&#xe1a2;',
			'joicon-stumbleupon' : '&#xe1a3;',
			'joicon-stumbleupon-2' : '&#xe1a4;',
			'joicon-stackoverflow' : '&#xe1a5;',
			'joicon-pinterest' : '&#xe1a6;',
			'joicon-pinterest-2' : '&#xe1a7;',
			'joicon-xing' : '&#xe1a8;',
			'joicon-xing-2' : '&#xe1a9;',
			'joicon-flattr' : '&#xe1aa;',
			'joicon-foursquare' : '&#xe1ab;',
			'joicon-foursquare-2' : '&#xe1ac;',
			'joicon-paypal' : '&#xe1ad;',
			'joicon-paypal-2' : '&#xe1ae;',
			'joicon-paypal-3' : '&#xe1af;',
			'joicon-yelp' : '&#xe1b0;',
			'joicon-libreoffice' : '&#xe1b1;',
			'joicon-file-pdf' : '&#xe1b2;',
			'joicon-file-openoffice' : '&#xe1b3;',
			'joicon-file-word' : '&#xe1b4;',
			'joicon-file-excel' : '&#xe1b5;',
			'joicon-file-zip' : '&#xe1b6;',
			'joicon-file-powerpoint' : '&#xe1b7;',
			'joicon-file-xml' : '&#xe1b8;',
			'joicon-file-css' : '&#xe1b9;',
			'joicon-html5' : '&#xe1ba;',
			'joicon-html5-2' : '&#xe1bb;',
			'joicon-css3' : '&#xe1bc;',
			'joicon-chrome' : '&#xe1bd;',
			'joicon-firefox' : '&#xe1be;',
			'joicon-IE' : '&#xe1bf;',
			'joicon-opera' : '&#xe1c0;',
			'joicon-safari' : '&#xe1c1;',
			'joicon-IcoMoon' : '&#xe1c2;',
			'joicon-warning-2' : '&#xe1c3;',
			'joicon-cloud-2' : '&#xe1c4;',
			'joicon-locked' : '&#xe1c5;',
			'joicon-inbox' : '&#xe1c6;',
			'joicon-comment' : '&#xe1c7;',
			'joicon-mic' : '&#xe1c8;',
			'joicon-envelope' : '&#xe1c9;',
			'joicon-briefcase-2' : '&#xe1ca;',
			'joicon-cart-4' : '&#xe1cb;',
			'joicon-contrast-2' : '&#xe1cc;',
			'joicon-clock-3' : '&#xe1cd;',
			'joicon-user-5' : '&#xe1ce;',
			'joicon-cog-3' : '&#xe1cf;',
			'joicon-music-2' : '&#xe1d0;',
			'joicon-twitter-4' : '&#xe1d1;',
			'joicon-pencil-3' : '&#xe1d2;',
			'joicon-frame' : '&#xe1d3;',
			'joicon-switch-2' : '&#xe1d4;',
			'joicon-star-4' : '&#xe1d5;',
			'joicon-key-3' : '&#xe1d6;',
			'joicon-chart' : '&#xe1d7;',
			'joicon-apple-2' : '&#xe1d8;',
			'joicon-file-5' : '&#xe1d9;',
			'joicon-plus-2' : '&#xe1da;',
			'joicon-minus-2' : '&#xe1db;',
			'joicon-picture' : '&#xe1dc;',
			'joicon-folder-2' : '&#xe1dd;',
			'joicon-camera-3' : '&#xe1de;',
			'joicon-search-2' : '&#xe1df;',
			'joicon-dribbble-4' : '&#xe1e0;',
			'joicon-forrst-3' : '&#xe1e1;',
			'joicon-feed-5' : '&#xe1e2;',
			'joicon-blocked-2' : '&#xe1e3;',
			'joicon-target-2' : '&#xe1e4;',
			'joicon-play-4' : '&#xe1e5;',
			'joicon-pause-3' : '&#xe1e6;',
			'joicon-bug-2' : '&#xe1e7;',
			'joicon-console-2' : '&#xe1e8;',
			'joicon-film-2' : '&#xe1e9;',
			'joicon-type' : '&#xe1ea;',
			'joicon-home-4' : '&#xe1eb;',
			'joicon-earth-2' : '&#xe1ec;',
			'joicon-location-3' : '&#xe1ed;',
			'joicon-info-3' : '&#xe1ee;',
			'joicon-eye-3' : '&#xe1ef;',
			'joicon-heart-3' : '&#xe1f0;',
			'joicon-bookmark-2' : '&#xe1f1;',
			'joicon-wrench-2' : '&#xe1f2;',
			'joicon-calendar-3' : '&#xe1f3;',
			'joicon-window' : '&#xe1f4;',
			'joicon-monitor' : '&#xe1f5;',
			'joicon-mobile-3' : '&#xe1f6;',
			'joicon-droplet-2' : '&#xe1f7;',
			'joicon-mouse' : '&#xe1f8;',
			'joicon-refresh' : '&#xe1f9;',
			'joicon-location-4' : '&#xe1fa;',
			'joicon-tag-2' : '&#xe1fb;',
			'joicon-phone-2' : '&#xe1fc;',
			'joicon-star-5' : '&#xe1fd;',
			'joicon-pointer' : '&#xe1fe;',
			'joicon-thumbs-up-3' : '&#xe1ff;',
			'joicon-thumbs-down' : '&#xe200;',
			'joicon-headphones-2' : '&#xe201;',
			'joicon-move' : '&#xe202;',
			'joicon-checkmark-3' : '&#xe203;',
			'joicon-cancel' : '&#xe204;',
			'joicon-skype-2' : '&#xe205;',
			'joicon-gift-2' : '&#xe206;',
			'joicon-cone' : '&#xe207;',
			'joicon-alarm-3' : '&#xe208;',
			'joicon-coffee' : '&#xe209;',
			'joicon-basket' : '&#xe20a;',
			'joicon-flag-2' : '&#xe20b;',
			'joicon-ipod' : '&#xe20c;',
			'joicon-trashcan' : '&#xe20d;',
			'joicon-bolt' : '&#xe20e;',
			'joicon-ampersand' : '&#xe20f;',
			'joicon-compass-2' : '&#xe210;',
			'joicon-list-3' : '&#xe211;',
			'joicon-grid' : '&#xe212;',
			'joicon-volume' : '&#xe213;',
			'joicon-volume-2' : '&#xe214;',
			'joicon-stats-2' : '&#xe215;',
			'joicon-target-3' : '&#xe216;',
			'joicon-forward-4' : '&#xe217;',
			'joicon-paperclip' : '&#xe218;',
			'joicon-keyboard-2' : '&#xe219;',
			'joicon-crop-2' : '&#xe21a;',
			'joicon-floppy' : '&#xe21b;',
			'joicon-filter-3' : '&#xe21c;',
			'joicon-trophy-2' : '&#xe21d;',
			'joicon-diary' : '&#xe21e;',
			'joicon-address-book-2' : '&#xe21f;',
			'joicon-stop-3' : '&#xe220;',
			'joicon-smiley-3' : '&#xe221;',
			'joicon-shit' : '&#xe222;',
			'joicon-bookmark-3' : '&#xe223;',
			'joicon-camera-4' : '&#xe224;',
			'joicon-lamp' : '&#xe225;',
			'joicon-disk-2' : '&#xe226;',
			'joicon-button' : '&#xe227;',
			'joicon-database' : '&#xe228;',
			'joicon-credit-card' : '&#xe229;',
			'joicon-atom' : '&#xe22a;',
			'joicon-winsows' : '&#xe22b;',
			'joicon-target-4' : '&#xe22c;',
			'joicon-battery' : '&#xe22d;',
			'joicon-code-2' : '&#xe22e;',
			'joicon-sunrise' : '&#xe22f;',
			'joicon-sun' : '&#xe230;',
			'joicon-moon' : '&#xe231;',
			'joicon-sun-2' : '&#xe232;',
			'joicon-windy' : '&#xe233;',
			'joicon-wind' : '&#xe234;',
			'joicon-snowflake' : '&#xe235;',
			'joicon-cloudy' : '&#xe236;',
			'joicon-cloud-3' : '&#xe237;',
			'joicon-weather' : '&#xe238;',
			'joicon-weather-2' : '&#xe239;',
			'joicon-weather-3' : '&#xe23a;',
			'joicon-lines' : '&#xe23b;',
			'joicon-cloud-4' : '&#xe23c;',
			'joicon-lightning-2' : '&#xe23d;',
			'joicon-lightning-3' : '&#xe23e;',
			'joicon-rainy' : '&#xe23f;',
			'joicon-rainy-2' : '&#xe240;',
			'joicon-windy-2' : '&#xe241;',
			'joicon-windy-3' : '&#xe242;',
			'joicon-snowy' : '&#xe243;',
			'joicon-snowy-2' : '&#xe244;',
			'joicon-snowy-3' : '&#xe245;',
			'joicon-weather-4' : '&#xe246;',
			'joicon-cloudy-2' : '&#xe247;',
			'joicon-cloud-5' : '&#xe248;',
			'joicon-lightning-4' : '&#xe249;',
			'joicon-sun-3' : '&#xe24a;',
			'joicon-moon-2' : '&#xe24b;',
			'joicon-cloudy-3' : '&#xe24c;',
			'joicon-cloud-6' : '&#xe24d;',
			'joicon-cloud-7' : '&#xe24e;',
			'joicon-lightning-5' : '&#xe24f;',
			'joicon-rainy-3' : '&#xe250;',
			'joicon-rainy-4' : '&#xe251;',
			'joicon-windy-4' : '&#xe252;',
			'joicon-windy-5' : '&#xe253;',
			'joicon-snowy-4' : '&#xe254;',
			'joicon-snowy-5' : '&#xe255;',
			'joicon-weather-5' : '&#xe256;',
			'joicon-cloudy-4' : '&#xe257;',
			'joicon-lightning-6' : '&#xe258;',
			'joicon-thermometer' : '&#xe259;',
			'joicon-compass-3' : '&#xe25a;',
			'joicon-none' : '&#xe25b;',
			'joicon-Celsius' : '&#xe25c;',
			'joicon-Fahrenheit' : '&#xe25d;',
			'joicon-chat' : '&#xe25e;',
			'joicon-chat-alt-stroke' : '&#xe25f;',
			'joicon-chat-alt-fill' : '&#xe260;',
			'joicon-comment-alt1-stroke' : '&#xe261;',
			'joicon-comment-alt1-fill' : '&#xe262;',
			'joicon-comment-stroke' : '&#xe263;',
			'joicon-comment-fill' : '&#xe264;',
			'joicon-comment-alt2-stroke' : '&#xe265;',
			'joicon-comment-alt2-fill' : '&#xe266;',
			'joicon-checkmark-4' : '&#xe267;',
			'joicon-check-alt' : '&#xe268;',
			'joicon-x' : '&#xe269;',
			'joicon-x-altx-alt' : '&#xe26a;',
			'joicon-denied' : '&#xe26b;',
			'joicon-cursor' : '&#xe26c;',
			'joicon-rss' : '&#xe26d;',
			'joicon-rss-alt' : '&#xe26e;',
			'joicon-wrench-3' : '&#xe26f;',
			'joicon-dial' : '&#xe270;',
			'joicon-cog-4' : '&#xe271;',
			'joicon-calendar-4' : '&#xe272;',
			'joicon-calendar-alt-stroke' : '&#xe273;',
			'joicon-calendar-alt-fill' : '&#xe274;',
			'joicon-share-2' : '&#xe275;',
			'joicon-mail-5' : '&#xe276;',
			'joicon-heart-stroke' : '&#xe277;',
			'joicon-heart-fill' : '&#xe278;',
			'joicon-movie' : '&#xe279;',
			'joicon-document-alt-stroke' : '&#xe27a;',
			'joicon-document-alt-fill' : '&#xe27b;',
			'joicon-document-stroke' : '&#xe27c;',
			'joicon-document-fill' : '&#xe27d;',
			'joicon-plus-3' : '&#xe27e;',
			'joicon-plus-alt' : '&#xe27f;',
			'joicon-minus-3' : '&#xe280;',
			'joicon-minus-alt' : '&#xe281;',
			'joicon-pin' : '&#xe282;',
			'joicon-link-2' : '&#xe283;',
			'joicon-bolt-2' : '&#xe284;',
			'joicon-move-2' : '&#xe285;',
			'joicon-move-alt1' : '&#xe286;',
			'joicon-move-alt2' : '&#xe287;',
			'joicon-equalizer-2' : '&#xe288;',
			'joicon-award-fill' : '&#xe289;',
			'joicon-award-stroke' : '&#xe28a;',
			'joicon-magnifying-glass' : '&#xe28b;',
			'joicon-trash-stroke' : '&#xe28c;',
			'joicon-trash-fill' : '&#xe28d;',
			'joicon-beaker-alt' : '&#xe28e;',
			'joicon-beaker' : '&#xe28f;',
			'joicon-key-stroke' : '&#xe290;',
			'joicon-key-fill' : '&#xe291;',
			'joicon-new-window' : '&#xe292;',
			'joicon-lightbulb' : '&#xe293;',
			'joicon-spin-alt' : '&#xe294;',
			'joicon-spin' : '&#xe295;',
			'joicon-curved-arrow' : '&#xe296;',
			'joicon-undo-3' : '&#xe297;',
			'joicon-reload' : '&#xe298;',
			'joicon-reload-alt' : '&#xe299;',
			'joicon-loop-4' : '&#xe29a;',
			'joicon-loop-alt1' : '&#xe29b;',
			'joicon-loop-alt2' : '&#xe29c;',
			'joicon-loop-alt3' : '&#xe29d;',
			'joicon-loop-alt4' : '&#xe29e;',
			'joicon-transfer' : '&#xe29f;',
			'joicon-move-vertical' : '&#xe2a0;',
			'joicon-move-vertical-alt1' : '&#xe2a1;',
			'joicon-move-vertical-alt2' : '&#xe2a2;',
			'joicon-move-horizontal' : '&#xe2a3;',
			'joicon-move-horizontal-alt1' : '&#xe2a4;',
			'joicon-move-horizontal-alt2' : '&#xe2a5;',
			'joicon-arrow-left-4' : '&#xe2a6;',
			'joicon-arrow-left-alt1' : '&#xe2a7;',
			'joicon-arrow-left-alt2' : '&#xe2a8;',
			'joicon-arrow-right-4' : '&#xe2a9;',
			'joicon-arrow-right-alt1' : '&#xe2aa;',
			'joicon-arrow-right-alt2' : '&#xe2ab;',
			'joicon-arrow-up-4' : '&#xe2ac;',
			'joicon-arrow-up-alt1' : '&#xe2ad;',
			'joicon-arrow-up-alt2' : '&#xe2ae;',
			'joicon-arrow-down-4' : '&#xe2af;',
			'joicon-arrow-down-alt1' : '&#xe2b0;',
			'joicon-arrow-down-alt2' : '&#xe2b1;',
			'joicon-cd' : '&#xe2b2;',
			'joicon-steering-wheel' : '&#xe2b3;',
			'joicon-microphone' : '&#xe2b4;',
			'joicon-headphones-3' : '&#xe2b5;',
			'joicon-volume-3' : '&#xe2b6;',
			'joicon-volume-mute-3' : '&#xe2b7;',
			'joicon-play-5' : '&#xe2b8;',
			'joicon-pause-4' : '&#xe2b9;',
			'joicon-stop-4' : '&#xe2ba;',
			'joicon-eject-2' : '&#xe2bb;',
			'joicon-first-2' : '&#xe2bc;',
			'joicon-last-2' : '&#xe2bd;',
			'joicon-play-alt' : '&#xe2be;',
			'joicon-fullscreen-exit' : '&#xe2bf;',
			'joicon-fullscreen-exit-alt' : '&#xe2c0;',
			'joicon-fullscreen' : '&#xe2c1;',
			'joicon-fullscreen-alt' : '&#xe2c2;',
			'joicon-iphone' : '&#xe2c3;',
			'joicon-battery-empty' : '&#xe2c4;',
			'joicon-battery-half' : '&#xe2c5;',
			'joicon-battery-full' : '&#xe2c6;',
			'joicon-battery-charging' : '&#xe2c7;',
			'joicon-compass-4' : '&#xe2c8;',
			'joicon-box' : '&#xe2c9;',
			'joicon-folder-stroke' : '&#xe2ca;',
			'joicon-folder-fill' : '&#xe2cb;',
			'joicon-at' : '&#xe2cc;',
			'joicon-ampersand-2' : '&#xe2cd;',
			'joicon-info-4' : '&#xe2ce;',
			'joicon-question-mark' : '&#xe2cf;',
			'joicon-pilcrow-2' : '&#xe2d0;',
			'joicon-hash' : '&#xe2d1;',
			'joicon-left-quote' : '&#xe2d2;',
			'joicon-right-quote' : '&#xe2d3;',
			'joicon-left-quote-alt' : '&#xe2d4;',
			'joicon-right-quote-alt' : '&#xe2d5;',
			'joicon-article' : '&#xe2d6;',
			'joicon-read-more' : '&#xe2d7;',
			'joicon-list-4' : '&#xe2d8;',
			'joicon-list-nested' : '&#xe2d9;',
			'joicon-book-2' : '&#xe2da;',
			'joicon-book-alt' : '&#xe2db;',
			'joicon-book-alt2' : '&#xe2dc;',
			'joicon-pen-2' : '&#xe2dd;',
			'joicon-pen-alt-stroke' : '&#xe2de;',
			'joicon-pen-alt-fill' : '&#xe2df;',
			'joicon-pen-alt2' : '&#xe2e0;',
			'joicon-brush' : '&#xe2e1;',
			'joicon-brush-alt' : '&#xe2e2;',
			'joicon-eyedropper' : '&#xe2e3;',
			'joicon-layers-alt' : '&#xe2e4;',
			'joicon-layers' : '&#xe2e5;',
			'joicon-image-3' : '&#xe2e6;',
			'joicon-camera-5' : '&#xe2e7;',
			'joicon-aperture' : '&#xe2e8;',
			'joicon-aperture-alt' : '&#xe2e9;',
			'joicon-chart-2' : '&#xe2ea;',
			'joicon-chart-alt' : '&#xe2eb;',
			'joicon-bars-3' : '&#xe2ec;',
			'joicon-bars-alt' : '&#xe2ed;',
			'joicon-eye-4' : '&#xe2ee;',
			'joicon-user-6' : '&#xe2ef;',
			'joicon-home-5' : '&#xe2f0;',
			'joicon-clock-4' : '&#xe2f1;',
			'joicon-lock-stroke' : '&#xe2f2;',
			'joicon-lock-fill' : '&#xe2f3;',
			'joicon-unlock-stroke' : '&#xe2f4;',
			'joicon-unlock-fill' : '&#xe2f5;',
			'joicon-tag-stroke' : '&#xe2f6;',
			'joicon-tag-fill' : '&#xe2f7;',
			'joicon-sun-stroke' : '&#xe2f8;',
			'joicon-sun-fill' : '&#xe2f9;',
			'joicon-moon-stroke' : '&#xe2fa;',
			'joicon-moon-fill' : '&#xe2fb;',
			'joicon-cloud-8' : '&#xe2fc;',
			'joicon-rain' : '&#xe2fd;',
			'joicon-umbrella' : '&#xe2fe;',
			'joicon-star-6' : '&#xe2ff;',
			'joicon-map-pin-stroke' : '&#xe300;',
			'joicon-map-pin-fill' : '&#xe301;',
			'joicon-map-pin-alt' : '&#xe302;',
			'joicon-target-5' : '&#xe303;',
			'joicon-download-4' : '&#xe304;',
			'joicon-upload-4' : '&#xe305;',
			'joicon-cloud-download-2' : '&#xe306;',
			'joicon-cloud-upload-2' : '&#xe307;',
			'joicon-fork' : '&#xe308;',
			'joicon-paperclip-2' : '&#xe309;',
			'joicon-phone-3' : '&#xe30a;',
			'joicon-mobile-4' : '&#xe30b;',
			'joicon-mouse-2' : '&#xe30c;',
			'joicon-directions' : '&#xe30d;',
			'joicon-mail-6' : '&#xe30e;',
			'joicon-paperplane' : '&#xe30f;',
			'joicon-pencil-4' : '&#xe310;',
			'joicon-feather' : '&#xe311;',
			'joicon-paperclip-3' : '&#xe312;',
			'joicon-drawer-4' : '&#xe313;',
			'joicon-reply-2' : '&#xe314;',
			'joicon-reply-all' : '&#xe315;',
			'joicon-forward-5' : '&#xe316;',
			'joicon-user-7' : '&#xe317;',
			'joicon-users-3' : '&#xe318;',
			'joicon-user-add' : '&#xe319;',
			'joicon-vcard' : '&#xe31a;',
			'joicon-export' : '&#xe31b;',
			'joicon-location-5' : '&#xe31c;',
			'joicon-map-3' : '&#xe31d;',
			'joicon-compass-5' : '&#xe31e;',
			'joicon-location-6' : '&#xe31f;',
			'joicon-target-6' : '&#xe320;',
			'joicon-share-3' : '&#xe321;',
			'joicon-sharable' : '&#xe322;',
			'joicon-heart-4' : '&#xe323;',
			'joicon-heart-5' : '&#xe324;',
			'joicon-star-7' : '&#xe325;',
			'joicon-star-8' : '&#xe326;',
			'joicon-thumbs-up-4' : '&#xe327;',
			'joicon-thumbs-down-2' : '&#xe328;',
			'joicon-chat-2' : '&#xe329;',
			'joicon-comment-2' : '&#xe32a;',
			'joicon-quote' : '&#xe32b;',
			'joicon-house' : '&#xe32c;',
			'joicon-popup' : '&#xe32d;',
			'joicon-search-3' : '&#xe32e;',
			'joicon-flashlight' : '&#xe32f;',
			'joicon-printer' : '&#xe330;',
			'joicon-bell-2' : '&#xe331;',
			'joicon-link-3' : '&#xe332;',
			'joicon-flag-3' : '&#xe333;',
			'joicon-cog-5' : '&#xe334;',
			'joicon-tools' : '&#xe335;',
			'joicon-trophy-3' : '&#xe336;',
			'joicon-tag-3' : '&#xe337;',
			'joicon-camera-6' : '&#xe338;',
			'joicon-megaphone' : '&#xe339;',
			'joicon-moon-3' : '&#xe33a;',
			'joicon-palette' : '&#xe33b;',
			'joicon-leaf-2' : '&#xe33c;',
			'joicon-music-3' : '&#xe33d;',
			'joicon-music-4' : '&#xe33e;',
			'joicon-new' : '&#xe33f;',
			'joicon-graduation' : '&#xe340;',
			'joicon-book-3' : '&#xe341;',
			'joicon-newspaper-2' : '&#xe342;',
			'joicon-bag' : '&#xe343;',
			'joicon-airplane-2' : '&#xe344;',
			'joicon-lifebuoy' : '&#xe345;',
			'joicon-eye-5' : '&#xe346;',
			'joicon-clock-5' : '&#xe347;',
			'joicon-microphone-2' : '&#xe348;',
			'joicon-calendar-5' : '&#xe349;',
			'joicon-bolt-3' : '&#xe34a;',
			'joicon-thunder' : '&#xe34b;',
			'joicon-droplet-3' : '&#xe34c;',
			'joicon-cd-2' : '&#xe34d;',
			'joicon-briefcase-3' : '&#xe34e;',
			'joicon-air' : '&#xe34f;',
			'joicon-hourglass' : '&#xe350;',
			'joicon-gauge' : '&#xe351;',
			'joicon-language' : '&#xe352;',
			'joicon-network' : '&#xe353;',
			'joicon-key-4' : '&#xe354;',
			'joicon-battery-2' : '&#xe355;',
			'joicon-bucket' : '&#xe356;',
			'joicon-magnet-2' : '&#xe357;',
			'joicon-drive' : '&#xe358;',
			'joicon-cup' : '&#xe359;',
			'joicon-rocket-2' : '&#xe35a;',
			'joicon-brush-2' : '&#xe35b;',
			'joicon-suitcase' : '&#xe35c;',
			'joicon-cone-2' : '&#xe35d;',
			'joicon-earth-3' : '&#xe35e;',
			'joicon-keyboard-3' : '&#xe35f;',
			'joicon-browser' : '&#xe360;',
			'joicon-publish' : '&#xe361;',
			'joicon-progress-3' : '&#xe362;',
			'joicon-progress-2' : '&#xe363;',
			'joicon-brogress-1' : '&#xe364;',
			'joicon-progress-0' : '&#xe365;',
			'joicon-sun-4' : '&#xe366;',
			'joicon-sun-5' : '&#xe367;',
			'joicon-adjust' : '&#xe368;',
			'joicon-code-3' : '&#xe369;',
			'joicon-screen-2' : '&#xe36a;',
			'joicon-infinity' : '&#xe36b;',
			'joicon-light-bulb' : '&#xe36c;',
			'joicon-credit-card-2' : '&#xe36d;',
			'joicon-database-2' : '&#xe36e;',
			'joicon-voicemail' : '&#xe36f;',
			'joicon-clipboard' : '&#xe370;',
			'joicon-cart-5' : '&#xe371;',
			'joicon-box-2' : '&#xe372;',
			'joicon-ticket-2' : '&#xe373;',
			'joicon-rss-2' : '&#xe374;',
			'joicon-signal' : '&#xe375;',
			'joicon-thermometer-2' : '&#xe376;',
			'joicon-droplets' : '&#xe377;',
			'joicon-untitled' : '&#xe378;',
			'joicon-statistics' : '&#xe379;',
			'joicon-pie-2' : '&#xe37a;',
			'joicon-bars-4' : '&#xe37b;',
			'joicon-graph' : '&#xe37c;',
			'joicon-lock-3' : '&#xe37d;',
			'joicon-lock-open' : '&#xe37e;',
			'joicon-logout' : '&#xe37f;',
			'joicon-login' : '&#xe380;',
			'joicon-checkmark-5' : '&#xe381;',
			'joicon-cross' : '&#xe382;',
			'joicon-minus-4' : '&#xe383;',
			'joicon-plus-4' : '&#xe384;',
			'joicon-cross-2' : '&#xe385;',
			'joicon-minus-5' : '&#xe386;',
			'joicon-plus-5' : '&#xe387;',
			'joicon-cross-3' : '&#xe388;',
			'joicon-minus-6' : '&#xe389;',
			'joicon-plus-6' : '&#xe38a;',
			'joicon-erase' : '&#xe38b;',
			'joicon-blocked-3' : '&#xe38c;',
			'joicon-info-5' : '&#xe38d;',
			'joicon-info-6' : '&#xe38e;',
			'joicon-question-2' : '&#xe38f;',
			'joicon-help' : '&#xe390;',
			'joicon-warning-3' : '&#xe391;',
			'joicon-cycle' : '&#xe392;',
			'joicon-cw' : '&#xe393;',
			'joicon-ccw' : '&#xe394;',
			'joicon-shuffle-2' : '&#xe395;',
			'joicon-arrow' : '&#xe396;',
			'joicon-arrow-2' : '&#xe397;',
			'joicon-retweet' : '&#xe398;',
			'joicon-loop-5' : '&#xe399;',
			'joicon-history-2' : '&#xe39a;',
			'joicon-back' : '&#xe39b;',
			'joicon-switch-3' : '&#xe39c;',
			'joicon-list-5' : '&#xe39d;',
			'joicon-add-to-list' : '&#xe39e;',
			'joicon-layout' : '&#xe39f;',
			'joicon-list-6' : '&#xe3a0;',
			'joicon-text' : '&#xe3a1;',
			'joicon-text-2' : '&#xe3a2;',
			'joicon-document' : '&#xe3a3;',
			'joicon-docs' : '&#xe3a4;',
			'joicon-landscape' : '&#xe3a5;',
			'joicon-pictures' : '&#xe3a6;',
			'joicon-video' : '&#xe3a7;',
			'joicon-music-5' : '&#xe3a8;',
			'joicon-folder-3' : '&#xe3a9;',
			'joicon-archive' : '&#xe3aa;',
			'joicon-trash' : '&#xe3ab;',
			'joicon-upload-5' : '&#xe3ac;',
			'joicon-download-5' : '&#xe3ad;',
			'joicon-disk-3' : '&#xe3ae;',
			'joicon-install' : '&#xe3af;',
			'joicon-cloud-9' : '&#xe3b0;',
			'joicon-upload-6' : '&#xe3b1;',
			'joicon-bookmark-4' : '&#xe3b2;',
			'joicon-bookmarks-2' : '&#xe3b3;',
			'joicon-book-4' : '&#xe3b4;',
			'joicon-play-6' : '&#xe3b5;',
			'joicon-pause-5' : '&#xe3b6;',
			'joicon-record' : '&#xe3b7;',
			'joicon-stop-5' : '&#xe3b8;',
			'joicon-next-2' : '&#xe3b9;',
			'joicon-previous-2' : '&#xe3ba;',
			'joicon-first-3' : '&#xe3bb;',
			'joicon-last-3' : '&#xe3bc;',
			'joicon-resize-enlarge' : '&#xe3bd;',
			'joicon-resize-shrink' : '&#xe3be;',
			'joicon-volume-4' : '&#xe3bf;',
			'joicon-sound' : '&#xe3c0;',
			'joicon-mute' : '&#xe3c1;',
			'joicon-flow-cascade' : '&#xe3c2;',
			'joicon-flow-branch' : '&#xe3c3;',
			'joicon-flow-tree' : '&#xe3c4;',
			'joicon-flow-line' : '&#xe3c5;',
			'joicon-flow-parallel' : '&#xe3c6;',
			'joicon-arrow-left-5' : '&#xe3c7;',
			'joicon-arrow-down-5' : '&#xe3c8;',
			'joicon-arrow-up--upload' : '&#xe3c9;',
			'joicon-arrow-right-5' : '&#xe3ca;',
			'joicon-arrow-left-6' : '&#xe3cb;',
			'joicon-arrow-down-6' : '&#xe3cc;',
			'joicon-arrow-up-5' : '&#xe3cd;',
			'joicon-arrow-right-6' : '&#xe3ce;',
			'joicon-arrow-left-7' : '&#xe3cf;',
			'joicon-arrow-down-7' : '&#xe3d0;',
			'joicon-arrow-up-6' : '&#xe3d1;',
			'joicon-arrow-right-7' : '&#xe3d2;',
			'joicon-arrow-left-8' : '&#xe3d3;',
			'joicon-arrow-down-8' : '&#xe3d4;',
			'joicon-arrow-up-7' : '&#xe3d5;',
			'joicon-arrow-right-8' : '&#xe3d6;',
			'joicon-arrow-left-9' : '&#xe3d7;',
			'joicon-arrow-down-9' : '&#xe3d8;',
			'joicon-arrow-up-8' : '&#xe3d9;',
			'joicon-arrow-right-9' : '&#xe3da;',
			'joicon-arrow-left-10' : '&#xe3db;',
			'joicon-arrow-down-10' : '&#xe3dc;',
			'joicon-arrow-up-9' : '&#xe3dd;',
			'joicon-arrow-right-10' : '&#xe3de;',
			'joicon-arrow-left-11' : '&#xe3df;',
			'joicon-arrow-down-11' : '&#xe3e0;',
			'joicon-arrow-up-10' : '&#xe3e1;',
			'joicon-untitled-2' : '&#xe3e2;',
			'joicon-arrow-left-12' : '&#xe3e3;',
			'joicon-arrow-down-12' : '&#xe3e4;',
			'joicon-arrow-up-11' : '&#xe3e5;',
			'joicon-arrow-right-11' : '&#xe3e6;',
			'joicon-menu-3' : '&#xe3e7;',
			'joicon-ellipsis' : '&#xe3e8;',
			'joicon-dots' : '&#xe3e9;',
			'joicon-dot' : '&#xe3ea;',
			'joicon-cc' : '&#xe3eb;',
			'joicon-cc-by' : '&#xe3ec;',
			'joicon-cc-nc' : '&#xe3ed;',
			'joicon-cc-nc-eu' : '&#xe3ee;',
			'joicon-cc-nc-jp' : '&#xe3ef;',
			'joicon-cc-sa' : '&#xe3f0;',
			'joicon-cc-nd' : '&#xe3f1;',
			'joicon-cc-pd' : '&#xe3f2;',
			'joicon-cc-zero' : '&#xe3f3;',
			'joicon-cc-share' : '&#xe3f4;',
			'joicon-cc-share-2' : '&#xe3f5;',
			'joicon-daniel-bruce' : '&#xe3f6;',
			'joicon-daniel-bruce-2' : '&#xe3f7;',
			'joicon-github-6' : '&#xe3f8;',
			'joicon-github-7' : '&#xe3f9;',
			'joicon-flickr-5' : '&#xe3fa;',
			'joicon-flickr-6' : '&#xe3fb;',
			'joicon-vimeo-3' : '&#xe3fc;',
			'joicon-vimeo-4' : '&#xe3fd;',
			'joicon-twitter-5' : '&#xe3fe;',
			'joicon-twitter-6' : '&#xe3ff;',
			'joicon-facebook-4' : '&#xe400;',
			'joicon-facebook-5' : '&#xe401;',
			'joicon-facebook-6' : '&#xe402;',
			'joicon-googleplus' : '&#xe403;',
			'joicon-googleplus-2' : '&#xe404;',
			'joicon-pinterest-3' : '&#xe405;',
			'joicon-pinterest-4' : '&#xe406;',
			'joicon-tumblr-3' : '&#xe407;',
			'joicon-tumblr-4' : '&#xe408;',
			'joicon-linkedin-2' : '&#xe409;',
			'joicon-linkedin-3' : '&#xe40a;',
			'joicon-dribbble-5' : '&#xe40b;',
			'joicon-dribbble-6' : '&#xe40c;',
			'joicon-stumbleupon-3' : '&#xe40d;',
			'joicon-stumbleupon-4' : '&#xe40e;',
			'joicon-lastfm-3' : '&#xe40f;',
			'joicon-lastfm-4' : '&#xe410;',
			'joicon-rdio' : '&#xe411;',
			'joicon-rdio-2' : '&#xe412;',
			'joicon-spotify' : '&#xe413;',
			'joicon-spotify-2' : '&#xe414;',
			'joicon-qq' : '&#xe415;',
			'joicon-instagram-2' : '&#xe416;',
			'joicon-dropbox' : '&#xe417;',
			'joicon-evernote' : '&#xe418;',
			'joicon-flattr-2' : '&#xe419;',
			'joicon-skype-3' : '&#xe41a;',
			'joicon-skype-4' : '&#xe41b;',
			'joicon-renren' : '&#xe41c;',
			'joicon-sina-weibo' : '&#xe41d;',
			'joicon-paypal-4' : '&#xe41e;',
			'joicon-picasa' : '&#xe41f;',
			'joicon-soundcloud-3' : '&#xe420;',
			'joicon-mixi' : '&#xe421;',
			'joicon-behance' : '&#xe422;',
			'joicon-circles' : '&#xe423;',
			'joicon-vk' : '&#xe424;',
			'joicon-smashing' : '&#xe425;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/joicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};