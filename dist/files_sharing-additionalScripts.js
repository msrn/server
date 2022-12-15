/*! For license information please see files_sharing-additionalScripts.js.LICENSE.txt */
!function(){var e,a={5972:function(e,a,r){"use strict";var i,n=r(95573),s=r.n(n),o=r(41922),l=r(42515);_.extend(OC.Files.Client,{PROPERTY_SHARE_TYPES:"{"+OC.Files.Client.NS_OWNCLOUD+"}share-types",PROPERTY_OWNER_ID:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-id",PROPERTY_OWNER_DISPLAY_NAME:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-display-name"}),OCA.Sharing||(OCA.Sharing={}),OCA.Sharing.Util={_REMOTE_OWNER_REGEXP:new RegExp("^(([^@]*)@(([^@^/\\s]*)@)?)((https://)?[^[\\s/]*)([/](.*))?$"),attach:function(e){var a;if(null!==(a=(0,l.getCapabilities)().files_sharing)&&void 0!==a&&a.api_enabled&&"trashbin"!==e.id&&"files.public"!==e.id){var r=e.fileActions,i=e._createRow;e._createRow=function(e){var a=i.apply(this,arguments),t=OCA.Sharing.Util.getSharePermissions(e);return 0===e.permissions&&(delete r.actions.all.Comment,delete r.actions.all.Details,delete r.actions.all.Goto),_.isFunction(e.canDownload)&&!e.canDownload()&&(delete r.actions.all.Download,e.permissions&0===OC.PERMISSION_UPDATE&&delete r.actions.all.MoveCopy),a.attr("data-share-permissions",t),a.attr("data-share-attributes",JSON.stringify(e.shareAttributes)),e.shareOwner&&(a.attr("data-share-owner",e.shareOwner),a.attr("data-share-owner-id",e.shareOwnerId),"shared-root"===e.mountType&&a.attr("data-permissions",e.permissions|OC.PERMISSION_UPDATE)),e.recipientData&&!_.isEmpty(e.recipientData)&&a.attr("data-share-recipient-data",JSON.stringify(e.recipientData)),e.shareTypes&&a.attr("data-share-types",e.shareTypes.join(",")),a};var n=e.elementToFile;e.elementToFile=function(e){var a=n.apply(this,arguments);if(a.shareAttributes=JSON.parse(e.attr("data-share-attributes")||"[]"),a.sharePermissions=e.attr("data-share-permissions")||void 0,a.shareOwner=e.attr("data-share-owner")||void 0,a.shareOwnerId=e.attr("data-share-owner-id")||void 0,e.attr("data-share-types")&&(a.shareTypes=e.attr("data-share-types").split(",")),e.attr("data-expiration")){var t=parseInt(e.attr("data-expiration"));a.shares=[],a.shares.push({expiration:t})}return a};var s=e._getWebdavProperties;e._getWebdavProperties=function(){var e=s.apply(this,arguments);return e.push(OC.Files.Client.PROPERTY_OWNER_ID),e.push(OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME),e.push(OC.Files.Client.PROPERTY_SHARE_TYPES),e},e.filesClient.addFileInfoParser((function(e){var a={},t=e.propStat[0].properties,r=t[OC.Files.Client.PROPERTY_PERMISSIONS];r&&r.indexOf("S")>=0&&(a.shareOwner=t[OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME],a.shareOwnerId=t[OC.Files.Client.PROPERTY_OWNER_ID]);var i=t[OC.Files.Client.PROPERTY_SHARE_TYPES];return i&&(a.shareTypes=_.chain(i).filter((function(e){return e.namespaceURI===OC.Files.Client.NS_OWNCLOUD&&"share-type"===e.nodeName.split(":")[1]})).map((function(e){return parseInt(e.textContent||e.text,10)})).value()),a})),e.$el.on("fileActionsReady",(function(e){var a=e.$files;_.each(a,(function(e){var a=$(e),t=a.attr("data-share-types")||"",r=a.attr("data-share-owner");if(t||r){var i=!1,n=!1;_.each(t.split(",")||[],(function(e){var a=parseInt(e,10);a===o.D.SHARE_TYPE_LINK||a===o.D.SHARE_TYPE_EMAIL?i=!0:(a===o.D.SHARE_TYPE_USER||a===o.D.SHARE_TYPE_GROUP||a===o.D.SHARE_TYPE_REMOTE||a===o.D.SHARE_TYPE_REMOTE_GROUP||a===o.D.SHARE_TYPE_CIRCLE||a===o.D.SHARE_TYPE_ROOM||a===o.D.SHARE_TYPE_DECK)&&(n=!0)})),OCA.Sharing.Util._updateFileActionIcon(a,n,i)}}))})),e.$el.on("changeDirectory",(function(){OCA.Sharing.sharesLoaded=!1})),r.registerAction({name:"Share",displayName:function(e){if(e&&e.$file){var a=parseInt(e.$file.data("share-types"),10),r=e.$file.data("share-owner-id");if(a>=0||r)return t("files_sharing","Shared")}return t("files_sharing","Share")},altText:t("files_sharing","Share"),mime:"all",order:-150,permissions:OC.PERMISSION_ALL,iconClass:function(e,a){var t=parseInt(a.$file.data("share-types"),10);return t===o.D.SHARE_TYPE_EMAIL||t===o.D.SHARE_TYPE_LINK?"icon-public":"icon-shared"},icon:function(e,a){var t=a.$file.data("share-owner-id");if(t)return OC.generateUrl("/avatar/".concat(t,"/32"))},type:OCA.Files.FileActions.TYPE_INLINE,actionHandler:function(a,t){if(e._detailsView){var r=parseInt(t.$file.data("share-permissions"),10);(isNaN(r)||r>0)&&e.showDetailsView(a,"sharing")}},render:function(e,a,t){return 0!=(parseInt(t.$file.data("permissions"),10)&OC.PERMISSION_SHARE)||t.$file.attr("data-share-owner")?r._defaultRenderAction.call(r,e,a,t):null}});var d=new OCA.Sharing.ShareBreadCrumbView;e.registerBreadCrumbDetailView(d)}},_updateFileListDataAttributes:function(e,a,t){if("files"!==e.id)if(_.pluck(t.get("shares"),"share_with_displayname").length){var r=_.mapObject(t.get("shares"),(function(e){return{shareWith:e.share_with,shareWithDisplayName:e.share_with_displayname}}));a.attr("data-share-recipient-data",JSON.stringify(r))}else a.removeAttr("data-share-recipient-data")},_updateFileActionIcon:function(e,a,t){return!!(a||t||e.attr("data-share-recipient-data")||e.attr("data-share-owner"))&&(OCA.Sharing.Util._markFileAsShared(e,!0,t),!0)},_markFileAsShared:function(e,a,r){var i,n,s,o,l=e.find('.fileactions .action[data-action="Share"]'),d=e.data("type"),h=l.find(".icon"),c=e.attr("data-share-owner-id"),u=e.attr("data-share-owner"),p=e.attr("data-mounttype"),f="icon-shared";l.removeClass("shared-style"),"dir"===d&&(a||r||c)?(o=void 0!==p&&"shared-root"!==p&&"shared"!==p?OC.MimeType.getIconUrl("dir-"+p):r?OC.MimeType.getIconUrl("dir-public"):OC.MimeType.getIconUrl("dir-shared"),e.find(".filename .thumbnail").css("background-image","url("+o+")"),e.attr("data-icon",o)):"dir"===d&&("true"===e.attr("data-e2eencrypted")?(o=OC.MimeType.getIconUrl("dir-encrypted"),e.attr("data-icon",o)):p&&0===p.indexOf("external")?(o=OC.MimeType.getIconUrl("dir-external"),e.attr("data-icon",o)):(o=OC.MimeType.getIconUrl("dir"),e.removeAttr("data-icon")),e.find(".filename .thumbnail").css("background-image","url("+o+")")),a||c?(n=e.data("share-recipient-data"),l.addClass("shared-style"),s="<span>"+t("files_sharing","Shared")+"</span>",c?(i=t("files_sharing","Shared by"),s=OCA.Sharing.Util._formatRemoteShare(c,u,i)):n&&(s=OCA.Sharing.Util._formatShareList(n)),l.html(s).prepend(h),(c||n)&&l.find(".avatar").each((function(){$(this).avatar($(this).data("username"),32)}))):l.html('<span class="hidden-visually">'+t("files_sharing","Shared")+"</span>").prepend(h),r&&(f="icon-public"),h.removeClass("icon-shared icon-public").addClass(f)},_formatRemoteShare:function(e,a,t){var r=OCA.Sharing.Util._REMOTE_OWNER_REGEXP.exec(e);if(!r||!r[7])return'<span class="avatar" data-username="'+s()(e)+'" title="'+t+" "+s()(a)+'"></span><span class="hidden-visually">'+t+" "+s()(a)+"</span> ";var i=r[2],n=r[4],o=r[5],l=r[6],d=r[8]?r[7]:"",h=t+" "+i;n&&(h+="@"+n),o&&(h+="@"+o.replace(l,"")+d);var c='<span class="remoteAddress" title="'+s()(h)+'">';return c+='<span class="username">'+s()(i)+"</span>",n&&(c+='<span class="userDomain">@'+s()(n)+"</span>"),c+"</span> "},_formatShareList:function(e){var a=this;return(e=_.toArray(e)).sort((function(e,a){return e.shareWithDisplayName.localeCompare(a.shareWithDisplayName)})),$.map(e,(function(e){return a._formatRemoteShare(e.shareWith,e.shareWithDisplayName,t("files_sharing","Shared with"))}))},markFileAsShared:function(e,a,r){var i,n,s,o,l=e.find('.fileactions .action[data-action="Share"]'),d=e.data("type"),h=l.find(".icon"),c=e.attr("data-share-owner-id"),u=e.attr("data-share-owner"),p=e.attr("data-mounttype"),f="icon-shared";l.removeClass("shared-style"),"dir"===d&&(a||r||c)?(o=void 0!==p&&"shared-root"!==p&&"shared"!==p?OC.MimeType.getIconUrl("dir-"+p):r?OC.MimeType.getIconUrl("dir-public"):OC.MimeType.getIconUrl("dir-shared"),e.find(".filename .thumbnail").css("background-image","url("+o+")"),e.attr("data-icon",o)):"dir"===d&&("true"===e.attr("data-e2eencrypted")?(o=OC.MimeType.getIconUrl("dir-encrypted"),e.attr("data-icon",o)):p&&0===p.indexOf("external")?(o=OC.MimeType.getIconUrl("dir-external"),e.attr("data-icon",o)):(o=OC.MimeType.getIconUrl("dir"),e.removeAttr("data-icon")),e.find(".filename .thumbnail").css("background-image","url("+o+")")),a||c?(n=e.data("share-recipient-data"),l.addClass("shared-style"),s="<span>"+t("files_sharing","Shared")+"</span>",c?(i=t("files_sharing","Shared by"),s=this._formatRemoteShare(c,u,i)):n&&(s=this._formatShareList(n)),l.html(s).prepend(h),(c||n)&&l.find(".avatar").each((function(){$(this).avatar($(this).data("username"),32)}))):l.html('<span class="hidden-visually">'+t("files_sharing","Shared")+"</span>").prepend(h),r&&(f="icon-public"),h.removeClass("icon-shared icon-public").addClass(f)},getSharePermissions:function(e){return e.sharePermissions}},OC.Plugins.register("OCA.Files.FileList",OCA.Sharing.Util),i=OC.Backbone.View.extend({tagName:"span",events:{click:"_onClick"},_dirInfo:void 0,render:function(e){if(this._dirInfo=e.dirInfo||null,null===this._dirInfo||"/"===this._dirInfo.path&&""===this._dirInfo.name)this.$el.removeClass("shared icon-public icon-shared"),this.$el.hide();else{var a=e.dirInfo&&e.dirInfo.shareTypes&&e.dirInfo.shareTypes.length>0;this.$el.removeClass("shared icon-public icon-shared"),a?(this.$el.addClass("shared"),-1!==e.dirInfo.shareTypes.indexOf(o.D.SHARE_TYPE_LINK)?this.$el.addClass("icon-public"):this.$el.addClass("icon-shared")):this.$el.addClass("icon-shared"),this.$el.show(),this.delegateEvents()}return this},_onClick:function(e){e.preventDefault(),e.stopPropagation();var a=new OCA.Files.FileInfoModel(this._dirInfo),t=this;a.on("change",(function(){t.render({dirInfo:t._dirInfo})}));var r=a.attributes.path+"/"+a.attributes.name;OCA.Files.Sidebar.open(r),OCA.Files.Sidebar.setActiveTab("sharing")}}),OCA.Sharing.ShareBreadCrumbView=i;var d=r(93379),h=r.n(d),c=r(7795),u=r.n(c),p=r(90569),f=r.n(p),m=r(3565),O=r.n(m),C=r(19216),g=r.n(C),A=r(44589),v=r.n(A),y=r(89216),S={};S.styleTagTransform=v(),S.setAttributes=O(),S.insert=f().bind(null,"head"),S.domAPI=u(),S.insertStyleElement=g(),h()(y.Z,S),y.Z&&y.Z.locals&&y.Z.locals,r(18730),r.nc=btoa(OC.requestToken),window.OCA.Sharing=OCA.Sharing},18730:function(e,a,r){r.nc=btoa(OC.requestToken),window.OCP.Collaboration.registerType("file",{action:function(){return new Promise((function(e,a){OC.dialogs.filepicker(t("files_sharing","Link to a file"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(a,t){e(t.id)})).fail((function(){a(new Error("Cannot get fileinfo"))}))}),!1,null,!1,OC.dialogs.FILEPICKER_TYPE_CHOOSE,"",{allowDirectoryChooser:!0})}))},typeString:t("files_sharing","Link to a file"),typeIconClass:"icon-files-dark"})},89216:function(e,a,t){"use strict";var r=t(87537),i=t.n(r),n=t(23645),s=t.n(n)()(i());s.push([e.id,"div.crumb span.icon-shared,div.crumb span.icon-public{display:inline-block;cursor:pointer;opacity:.2;margin-right:6px}div.crumb span.icon-shared.shared,div.crumb span.icon-public.shared{opacity:.7}","",{version:3,sources:["webpack://./apps/files_sharing/src/style/sharebreadcrumb.scss"],names:[],mappings:"AAsBA,sDAEC,oBAAA,CACA,cAAA,CACA,UAAA,CACA,gBAAA,CAGD,oEAEC,UAAA",sourcesContent:["/**\n * @copyright 2016 Christoph Wurst <christoph@winzerhof-wurst.at>\n *\n * @author 2016 Christoph Wurst <christoph@winzerhof-wurst.at>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program.  If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\ndiv.crumb span.icon-shared,\ndiv.crumb span.icon-public {\n\tdisplay: inline-block;\n\tcursor: pointer;\n\topacity: 0.2;\n\tmargin-right: 6px;\n}\n\ndiv.crumb span.icon-shared.shared,\ndiv.crumb span.icon-public.shared {\n\topacity: 0.7;\n}\n"],sourceRoot:""}]),a.Z=s}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=a,i.amdD=function(){throw new Error("define cannot be used indirect")},i.amdO={},e=[],i.O=function(a,t,r,n){if(!t){var s=1/0;for(h=0;h<e.length;h++){t=e[h][0],r=e[h][1],n=e[h][2];for(var o=!0,l=0;l<t.length;l++)(!1&n||s>=n)&&Object.keys(i.O).every((function(e){return i.O[e](t[l])}))?t.splice(l--,1):(o=!1,n<s&&(s=n));if(o){e.splice(h--,1);var d=r();void 0!==d&&(a=d)}}return a}n=n||0;for(var h=e.length;h>0&&e[h-1][2]>n;h--)e[h]=e[h-1];e[h]=[t,r,n]},i.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(a,{a:a}),a},i.d=function(e,a){for(var t in a)i.o(a,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.j=6200,function(){i.b=document.baseURI||self.location.href;var e={6200:0,5438:0};i.O.j=function(a){return 0===e[a]};var a=function(a,t){var r,n,s=t[0],o=t[1],l=t[2],d=0;if(s.some((function(a){return 0!==e[a]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(l)var h=l(i)}for(a&&a(t);d<s.length;d++)n=s[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(h)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}(),i.nc=void 0;var n=i.O(void 0,[7874],(function(){return i(5972)}));n=i.O(n)}();
//# sourceMappingURL=files_sharing-additionalScripts.js.map?v=33d67093f5add194ed7b