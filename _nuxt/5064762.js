(window.webpackJsonp=window.webpackJsonp||[]).push([[70,71,72],{397:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(278),n(96);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},430:function(t,e,n){"use strict";n(22),n(29),n(36),n(38);var o=n(6),r=(n(96),n(25),n(34),n(70),n(264),n(17),n(37),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(39),n(46),n(11),n(71),n(279),n(0)),l=n(176),c=n(19);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),C=f.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),h=f.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(C),order:Object.keys(h)};function M(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var x=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},C),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var m in n)c+=String(n[m]);var d=x.get(c);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var o=n[t],r=M(e,t,o);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),r)}})},480:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("3a64b7ad",content,!0,{sourceMap:!1})},481:function(t){t.exports=JSON.parse('{"date":"2021/8/6 20:00","data":{"専門家3行コメント":[{"@ja":"デルタ株等への置き換わりが急速に進み、爆発的な感染拡大が進行している。　","@en":"The Delta variant and other variants are rapidly replacing previous strains of the virus, driving the explosive spread of infections."},{"@ja":"入院患者、自宅療養者及び入院・療養等調整中の療養者が急増している。","@en":"The number of hospitalizations, as well as the number of people recovering at home or awaiting guidance on admission to a hospital or designated facility for recovery, are rapidly increasing."},{"@ja":"入院医療、宿泊療養及び自宅療養の体制を緊急時の体制へ移行する必要がある。","@en":"There is the need to shift to emergency systems for hospital care, designated facilities for recovery, and at-home recovery."}],"(1)新規陽性者数":3820.4,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":150.9,"(3)新規陽性者における接触歴等不明者（人数）":2456,"(3)新規陽性者における接触歴等不明者（増加比）":149.3,"(4)PCR・抗原検査（陽性率）":21.3,"(4)PCR・抗原検査（検査人数）":12513.9,"(5)救急医療の東京ルールの適用件数":98.3,"(6)入院患者数":3383,"(6)入院患者確保病床数":5967,"(7)重症患者数":141,"(7)重症患者確保病床数":392,"総括コメント-感染状況":{"date":"2021-03-04","level":4,"display":{"@ja":"感染が拡大している","@en":"The infection is spreading."}},"総括コメント-医療提供体制":{"date":"2021-03-04","level":4,"display":{"@ja":"体制が逼迫している","@en":"The system is under strain."}}}}')},482:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(397),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),m=Object(o.a)(1);return{"(1)新規陽性者数":{value:m(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:m(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:m(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:m(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:m(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:m(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:m(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:c(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:c(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},505:function(t,e,n){var content=n(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("4a26bf7f",content,!0,{sourceMap:!1})},520:function(t,e,n){"use strict";n(480)},521:function(t,e,n){var o=n(32)(!1);o.push([t.i,'.MonitoringCommentFrame[data-v-5d74f5a5]{border:1px solid;text-align:center;margin-bottom:10px}.MonitoringCommentFrame>p[data-v-5d74f5a5]{margin-top:auto;margin-bottom:auto;position:relative;font-style:normal;font-weight:600;color:#4d4d4d;padding:10px 0;font-size:1.3rem}.MonitoringCommentFrameAfter[data-v-5d74f5a5]{margin-top:-11px;content:"";padding:7px;border:1px solid}',""]),t.exports=o},569:function(t,e,n){"use strict";n.r(e);n(96);var o=n(0).default.extend({props:{level:{type:Number,required:!0,default:0},comment:{type:String,required:!0,default:""}},data:function(){return{colors:["#96cd5f","#fffc4e","#fdbe40","#fa1629"]}}}),r=(n(520),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"MonitoringCommentFrame",style:{borderColor:""+t.colors[t.level]}},[n("p",[t._v(t._s(t.comment))])]),t._v(" "),n("div",{staticClass:"MonitoringCommentFrameAfter",style:{borderColor:""+t.colors[t.level],background:""+t.colors[t.level]}})])}),[],!1,null,"5d74f5a5",null);e.default=component.exports},570:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({computed:{images:function(){return this.monitoringCommentImage.data.images},monitoringCommentImage:function(){return this.$store.state.monitoringCommentImage}}}),r=n(14),l=n(63),c=n.n(l),m=n(928),d=n(946),f=n(556),v=n(647),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel",{attrs:{cycle:"",width:"240",height:"180","hide-delimiter-background":""}},t._l(t.images,(function(image,i){return n("v-carousel-item",{key:i},[n("v-sheet",{attrs:{height:"100%",color:"#fff"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"display-3"},[n("a",{attrs:{target:"_blank",href:image.href}},[n("img",{attrs:{width:"240",height:"180",src:image.src,alt:image.alt}})])])])],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCarousel:m.a,VCarouselItem:d.a,VRow:f.a,VSheet:v.a})},600:function(t,e,n){"use strict";n(505)},601:function(t,e,n){var o=n(32)(!1);o.push([t.i,".MonitoringComment{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 12px 10px;margin:0 0 10px}.MonitoringComment .MonitoringComment-heading{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.MonitoringComment .MonitoringComment-heading .MonitoringComment-title{display:flex;align-items:center;padding:8px 6px;font-size:1.9rem;color:#4d4d4d;font-weight:600}.MonitoringComment .MonitoringComment-comments{margin:0 10px;padding:2px}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col{float:left;clear:both;padding:3px;min-width:300px}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col .MonitoringComment-summary{font-size:1.2rem}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col .MonitoringCommentFrame-title{margin-bottom:1px;color:#707070;font-weight:400;font-size:1.4rem}.MonitoringComment .MonitoringComment-description{padding:6px;text-align:center;font-size:1.4rem}.MonitoringComment .MonitoringComment-description>a{font-size:1.4rem;color:#006ca8!important;text-decoration:none}.MonitoringComment .MonitoringComment-description>a:hover{text-decoration:underline}",""]),t.exports=o},635:function(t,e,n){"use strict";n.r(e);n(46),n(21);var o=n(45),r=n(0),l=n(86),c=n(569),m=n(570),d=n(481),f=n(482),v=r.default.extend({components:{AppLink:l.default,Frame:c.default,ImageSwipe:m.default},data:function(){return{monitoringComment:Object(f.a)(d.data),mdiChevronRight:o.f}},computed:{translatedMonitoringSummarizedComments:function(){var t=d.data.専門家3行コメント;return["ja","ja-basic"].includes(this.$i18n.locale)?t.map((function(t){return t["@ja"]})):t.map((function(t){return t["@en"]}))}},methods:{commentMonitoring:function(t){return["ja","ja-basic"].includes(this.$root.$i18n.locale)?this.monitoringComment[t].display["@ja"]:this.monitoringComment[t].display["@en"]}}}),C=(n(600),n(14)),h=n(63),y=n.n(h),M=n(430),x=n(380),j=n(556),component=Object(C.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MonitoringComment"},[n("div",{staticClass:"MonitoringComment-heading"},[n("h3",{staticClass:"MonitoringComment-title"},[t._v("\n      "+t._s(t.$t("感染状況・医療提供体制の分析"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"MonitoringComment-comments"},[n("v-row",{staticClass:"MonitoringComment-row"},[n("v-col",{staticClass:"MonitoringComment-col"},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"MonitoringComment-summary"},t._l(t.translatedMonitoringSummarizedComments,(function(e,i){return n("span",{key:i},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-感染状況"].level-1,comment:t.commentMonitoring("総括コメント-感染状況")}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v("\n            "+t._s(t.$t("医療提供体制"))+"\n          ")]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-医療提供体制"].level-1,comment:t.commentMonitoring("総括コメント-医療提供体制")}})],1)],1),t._v(" "),n("v-col",{staticClass:"MonitoringComment-col"},[n("div",{staticClass:"MonitoringComment-description"},[n("image-swipe"),t._v(" "),n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"}},[t._v("\n            "+t._s(t.$t("専門家による分析・総括コメントの詳細はこちら"))+"\n          ")])],1)])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;y()(component,{VCol:M.a,VIcon:x.a,VRow:j.a})}}]);