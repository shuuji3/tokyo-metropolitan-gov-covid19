(window.webpackJsonp=window.webpackJsonp||[]).push([[69,52,64,77],{489:function(t,e,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("b35a52c0",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{iconPath:{type:String,required:!1,default:""}}}),r=(n(505),n(9)),c=n(47),l=n.n(c),d=n(358),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h2",{staticClass:"pageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v(" "),t._t("default")],2)])}),[],!1,null,"d5283664",null);e.default=component.exports;l()(component,{VIcon:d.a})},505:function(t,e,n){"use strict";n(489)},506:function(t,e,n){var o=n(29)(!1);o.push([t.i,".header[data-v-d5283664]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-d5283664]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.pageTitle[data-v-d5283664]{font-size:2rem}}",""]),t.exports=o},552:function(t,e,n){var content=n(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("f3138556",content,!0,{sourceMap:!1})},554:function(t,e,n){var content=n(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("47e390bd",content,!0,{sourceMap:!1})},555:function(t,e,n){var content=n(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("0ffcf5da",content,!0,{sourceMap:!1})},556:function(t,e,n){var content=n(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("00e52b5e",content,!0,{sourceMap:!1})},597:function(t,e,n){"use strict";n.r(e);var o=n(55),r=n(0),c=n(67),l=n(9),d=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({staticClass:"vaccine_svg__svg-inline--fa vaccine_svg__fa-syringe vaccine_svg__fa-w-16",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},t.$listeners),[n("path",{attrs:{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"}})])}),[],!1,null,null,null).exports,f=n(132),h=r.default.extend({components:{AppLink:c.default,VaccineIcon:d},props:{items:{type:Array,required:!0},isEmergency:{type:Boolean,required:!1,default:!1}},data:function(){return{mdiInformation:o.j}},methods:{formattedDate:function(t){return Object(f.a)(t)},formattedDateForDisplay:function(t){return this.$d(new Date(t),"date")}}}),v=(n(610),n(47)),m=n.n(v),_=n(358),w=Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("div",{staticClass:"WhatsNew-heading"},[n("h3",{staticClass:"WhatsNew-title"},[n("v-icon",{staticClass:"WhatsNew-title-icon",attrs:{size:"2.4rem"}},[t._v("\n        "+t._s(t.mdiInformation)+"\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),n("div",{staticClass:"WhatsNew-linkGroup"},[t.isEmergency?n("lazy-link-to-information-about-emergency-measure"):t._e(),t._v(" "),n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronavaccine.html"}},[n("VaccineIcon",{staticClass:"WhatsNew-linkButton-icon",attrs:{"aria-hidden":"true"}}),t._v("\n        "+t._s(t.$t("ワクチン情報"))+"\n      ")],1)],1)]),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("app-link",{staticClass:"WhatsNew-list-item-anchor",attrs:{to:e.url}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n        ")])])],1)})),0)])}),[],!1,null,null,null);e.default=w.exports;m()(w,{AppLink:n(67).default}),m()(w,{VIcon:_.a})},598:function(t,e,n){"use strict";n.r(e);n(46),n(31),n(22);var o=n(55),r=n(0).default.extend({data:function(){return{mdiChevronRight:o.f}},computed:{date:function(){return this.$d(new Date(this.stayingPopulationData.date),"date")},enddate:function(){var t=new Date(this.stayingPopulationData.date);return t.setDate(t.getDate()+6),this.$d(t,"dateWithoutYear")},placeName:function(){var t=this.stayingPopulationData.place.display;return["ja","ja-basic"].includes(this.$i18n.locale)?t.ja:t.en},formattedData:function(){var t=this;return this.stayingPopulationDatasets.map((function(e){var n=e.referenceDate,o=e.increaseRate,r=t.$d(n,"dateWithoutDay"),c="0";0!==o&&(c="".concat(o>0?"↑":"↓").concat(Math.abs(o)," %"));return{formattedMonth:r,increaseRateWithArrow:c}}))},stayingPopulationDatasets:function(){return this.stayingPopulationData.data},stayingPopulationData:function(){return this.stayingPopulation.data},stayingPopulation:function(){return this.$store.state.stayingPopulation}}}),c=(n(608),n(9)),l=n(47),d=n.n(l),f=n(477),h=n(358),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"StayingPopulation"},[n("div",{staticClass:"StayingPopulation-title"},[t._v("\n      "+t._s(t.$t("都内の滞在人口の増減状況（毎週月曜日更新）"))),n("br"),t._v(" "),n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html#nav1"}},[t._v(t._s(t.$t("詳細はこちら"))+"\n      ")])],1),t._v(" "),n("div",{staticClass:"StayingPopulation-place"},[t._v("\n      "+t._s(t.placeName)+"\n    ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-state"},[t._v("\n      [ "+t._s(t.date)+"〜"+t._s(t.enddate)+" ]"),n("br"),t._v(" "),t._l(t.formattedData,(function(e,o){return n("span",{key:o},[t._v("\n        "+t._s(e.formattedMonth)+t._s(t.$t("比"))+"\n        "+t._s(e.increaseRateWithArrow)),n("br")])}))],2)])])}),[],!1,null,"f1d7ff52",null);e.default=component.exports;d()(component,{AppLink:n(67).default}),d()(component,{VCol:f.a,VIcon:h.a})},602:function(t,e,n){"use strict";n.r(e);n(603);var o=n(9),r=n(47),c=n.n(r),l=n(477),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("lazy-static-info",{staticClass:"Consultation",attrs:{url:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html",text:t.$t("自分や家族の症状に不安や心配があれば\nまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}})],1)}),[],!1,null,"11f2114e",null);e.default=component.exports;c()(component,{VCol:l.a})},603:function(t,e,n){"use strict";n(552)},604:function(t,e,n){var o=n(29)(!1);o.push([t.i,".Consultation[data-v-11f2114e]{padding:3px 18px;min-height:5.5em}",""]),t.exports=o},608:function(t,e,n){"use strict";n(554)},609:function(t,e,n){var o=n(29)(!1);o.push([t.i,".StayingPopulation[data-v-f1d7ff52]{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:3px;min-height:5em;display:flex;align-items:center}.StayingPopulation .StayingPopulation-title[data-v-f1d7ff52]{padding:2px 15px;text-align:left;font-size:1.9rem;color:#4d4d4d;font-weight:600;font-size:1.2rem}.StayingPopulation .StayingPopulation-place[data-v-f1d7ff52]{padding:5px;margin:2px 5px 2px 10px;background-color:#008830;color:#fff;vertical-align:middle;text-align:center;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;font-weight:600;font-size:1.2rem}.StayingPopulation .StayingPopulation-state[data-v-f1d7ff52]{flex:1;padding:2px;margin:2px 5px;border:2px solid #008830;text-align:center;vertical-align:middle;min-width:15em;font-size:1.1rem}",""]),t.exports=o},610:function(t,e,n){"use strict";n(555)},611:function(t,e,n){var o=n(29)(!1);o.push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 18px;margin-bottom:10px}.WhatsNew .WhatsNew-heading{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:8px}.WhatsNew .WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;margin:8px 12px 8px 0;font-size:1.9rem;color:#4d4d4d;font-weight:600}.WhatsNew .WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end}@media screen and (max-width:768px){.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{justify-content:flex-start}}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton{padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover{background-color:#008830;color:#fff}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover>i{color:#fff!important}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-icon{width:1em;height:1em}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{text-decoration:none;margin:5px;font-size:1.4rem}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:1.4rem;color:#006ca8!important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=o},612:function(t,e,n){var content=n(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("78c1f3a0",content,!0,{sourceMap:!1})},613:function(t,e,n){"use strict";n(556)},614:function(t,e,n){var o=n(29)(!1);o.push([t.i,".InfectionMedicalcareprovisionStatus{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:8px 18px;margin-bottom:10px}.InfectionMedicalcareprovisionStatus .InfectionMedicalcareprovisionStatus-heading{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.InfectionMedicalcareprovisionStatus .InfectionMedicalcareprovisionStatus-heading .InfectionMedicalcareprovisionStatus-title{display:flex;align-items:center;padding:0 0 4px;font-size:1.9rem;color:#4d4d4d;font-weight:600;font-size:1.4rem}.InfectionMedicalcareprovisionStatus .InfectionMedicalcareprovisionStatus-Box{overflow:hidden}.InfectionMedicalcareprovisionStatus .InfectionMedicalcareprovisionStatus-Box .InfectionMedicalcareprovisionStatus-Headline{float:left;text-align:center;width:10em;border:1px solid #000;margin:0 4px 1px 0;color:#707070;font-size:1.2rem}.InfectionMedicalcareprovisionStatus .InfectionMedicalcareprovisionStatus-Box .InfectionMedicalcareprovisionStatus-description{font-size:1.2rem;padding:3px 0 0;margin:0}.InfectionMedicalcareprovisionStatus .InfectionMedicalcareprovisionStatus-Box .InfectionMedicalcareprovisionStatus-description>span{color:#008830}.InfectionMedicalcareprovisionStatus .InfectionMedicalcareprovisionStatus-Box .InfectionMedicalcareprovisionStatus-description>a{font-size:1.4rem;color:#006ca8!important;text-decoration:none}.InfectionMedicalcareprovisionStatus .InfectionMedicalcareprovisionStatus-Box .InfectionMedicalcareprovisionStatus-description>a:hover{text-decoration:underline}",""]),t.exports=o},650:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({computed:{statuses:function(){return this.infectionMedicalCareProvisionStatus.data},date:function(){return new Date(this.infectionMedicalCareProvisionStatus.date)},statisticDate:function(){return this.infectionMedicalCareProvisionStatus.data["検査統計日時"]},infectionMedicalCareProvisionStatus:function(){return this.$store.state.infectionMedicalCareProvisionStatus}},methods:{formatDate:function(t){return this.$d(t,"date")}}}),r=(n(613),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"InfectionMedicalcareprovisionStatus"},[n("div",{staticClass:"InfectionMedicalcareprovisionStatus-heading"},[n("h3",{staticClass:"InfectionMedicalcareprovisionStatus-title"},[t._v("\n      "+t._s(t.$t("感染状況・医療提供体制（サマリ）"))+"\n      "+t._s(t.formatDate(t.date))+"時点\n    ")])]),t._v(" "),n("div",{staticClass:"InfectionMedicalcareprovisionStatus-Box"},[n("div",{staticClass:"InfectionMedicalcareprovisionStatus-Headline"},[n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/hodo/saishin/hassei.html"}},[t._v("\n        "+t._s(t.$t("感染状況"))+"\n      ")])],1),t._v(" "),n("div",{staticClass:"InfectionMedicalcareprovisionStatus-description"},[t._v("\n      "+t._s(t.$t("新規陽性者"))),n("span",[t._v(t._s(t.statuses["新規陽性者"].toLocaleString())+"人")]),t._v(" /\n      "+t._s(t.$t("検査数"))),n("span",[t._v(t._s(t.statuses["検査数"].toLocaleString())+"件")]),t._v("（"+t._s(t.formatDate(t.statisticDate))+t._s(t.$t("参考値"))+"）、 "+t._s(t.$t("うち65歳以上の高齢者数"))),n("span",[t._v(t._s(t.statuses["うち65歳以上の高齢者数"].toLocaleString())+"人")]),t._v("、 "+t._s(t.$t("死亡者数"))),n("span",[t._v(t._s(t.statuses["死亡者数"].toLocaleString())+"人")]),t._v("、\n      "+t._s(t.$t("都外からの持込検体による陽性数"))),n("span",[t._v(t._s(t.statuses["都外からの持込検体による陽性数"].toLocaleString()))])])]),t._v(" "),n("div",{staticClass:"InfectionMedicalcareprovisionStatus-Box"},[n("div",{staticClass:"InfectionMedicalcareprovisionStatus-Headline"},[n("app-link",{attrs:{to:"https://stopcovid19.metro.tokyo.lg.jp/cards/details-of-confirmed-cases/"}},[t._v("\n        "+t._s(t.$t("医療提供体制"))+"\n      ")])],1),t._v(" "),n("div",{staticClass:"InfectionMedicalcareprovisionStatus-description"},[t._v("\n      "+t._s(t.$t("入院数"))),n("span",[t._v(t._s(t.statuses["入院数"].toLocaleString())+"人")]),t._v(" （"+t._s(t.$t("確保病床数"))),n("span",[t._v(t._s(t.statuses["確保病床数"].toLocaleString())+"床")]),t._v("）、\n      "+t._s(t.$t("うち重症者数"))),n("span",[t._v(t._s(t.statuses["うち重症者数"].toLocaleString())+"人")]),t._v(" （"+t._s(t.$t("うち重症病床数"))),n("span",[t._v(t._s(t.statuses["うち重症病床数"].toLocaleString())+"床")]),t._v("）\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(67).default})},664:function(t,e,n){"use strict";n(612)},665:function(t,e,n){var o=n(29)(!1);o.push([t.i,".MainPage .Header[data-v-17c2b86c]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.MainPage .Header[data-v-17c2b86c]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-17c2b86c]{font-size:1.4rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-17c2b86c]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.MainPage .Annotation[data-v-17c2b86c]{margin:0 0 0 auto}}",""]),t.exports=o},783:function(t,e,n){"use strict";n.r(e);var o=n(55),r=n(0),c=n(602),l=n(649),d=n(490),f=n(598),h=n(597),v=n(132),m=r.default.extend({components:{PageHeader:d.default,WhatsNew:h.default,MonitoringCommentCard:l.default,Consultation:c.default,StayingPopulation:f.default},data:function(){return{headerItem:{iconPath:o.d,title:this.$t("都内の最新感染動向")}}},computed:{lastUpdate:function(){return new Date(this.lastUpdateAsString)},lastUpdateAsString:function(){return this.data.lastUpdate},newsItems:function(){return this.news.newsItems},data:function(){return this.$store.state.data},news:function(){return this.$store.state.news}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(v.c)(t)}}}),_=(n(664),n(9)),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath}},[t._v(t._s(t.headerItem.title))]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.lastUpdateAsString)}},[t._v(t._s(t.formatDate(t.lastUpdate)))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])],1),t._v(" "),n("whats-new",{attrs:{items:t.newsItems,"is-emergency":!1}}),t._v(" "),n("infection-medicalcareprovision-status"),t._v(" "),n("monitoring-comment-card"),t._v(" "),n("div",{staticClass:"row mb-4"},[n("staying-population"),t._v(" "),n("consultation")],1)],1)}),[],!1,null,"17c2b86c",null);e.default=component.exports;installComponents(component,{PageHeader:n(490).default,WhatsNew:n(597).default,InfectionMedicalcareprovisionStatus:n(650).default,MonitoringCommentCard:n(649).default,StayingPopulation:n(598).default,Consultation:n(602).default})}}]);