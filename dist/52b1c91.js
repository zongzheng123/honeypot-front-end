(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7],{652:function(t,r,o){var content=o(655);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("60aed5ee",content,!0,{sourceMap:!1})},654:function(t,r,o){"use strict";o(652)},655:function(t,r,o){var e=o(15)(!1);e.push([t.i,':root{--primary:#ffcd4d;--secondary:#1a1917;--accent:#574f42;--active:var(--primary);--error:#b65c58;--warning:#ffd566;--success:#38a169;--c:var(--clr);--font1:"DM Sans",sans-serif;--font2:"Segoe",sans-serif;--font3:"Inter",sans-serif;--font4:"Poppins",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#4ddaeb;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:#2d291d}:root.dark{--bg-ap:#161513;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:#574f42;--clr-bg-scroll:#292724;--clr-card:var(--secondary);--clr-btn:var(--primary);--clr-text-btn:#1f1c14;--clr-badge:var(--primary);--clr-text-badge:#1f1c14;--clr-line:#292724}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ffcd4d!important;background-color:var(--primary)!important}.clr_secondary{background-color:#1a1917!important;background-color:var(--secondary)!important}.clr_accent{background-color:#574f42!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.charts-header>div{grid-gap:4px;gap:4px}.charts-header>div span:not(span+span):not(div>div>span){--fw:700;--c:#f6f6f6;font-size:16px}.charts-header span+span{font-weight:700;font-size:21px;color:#ccc;letter-spacing:.1ch}.charts-header div>span{font-size:18px}.charts .apexcharts-canvas,.charts .apexcharts-canvas>svg{width:100%!important}.charts .apexcharts-canvas [class*=tooltip]{padding:12px;border-radius:5px;background-color:#17191c!important;border:none!important;box-shadow:none!important;display:flex;flex-direction:column;grid-gap:5px;gap:5px}.charts .apexcharts-canvas [class*=tooltip] [class*=title]{margin-bottom:0!important;padding-bottom:0!important}.charts .apexcharts-canvas .apexcharts-xaxistooltip{display:none!important}.charts-footer{background-color:transparent!important;display:flex;justify-content:flex-end;grid-gap:10px;gap:10px}.charts-footer .v-btn{--w:28px;--h:24.65px;border-radius:5px!important;background-color:#17191c!important;width:var(--w)!important;max-width:var(--w)!important;min-width:var(--w)!important;height:var(--h)!important;min-height:var(--h)!important;max-height:var(--h)!important;border:none!important}.charts-footer .v-btn span{color:#3a3c43!important;font-size:16px;font-weight:400}.charts-footer .v-btn[class*=active]{background-color:#38a169!important;background-color:var(--success)!important}.charts-footer .v-btn[class*=active] span{color:#fff!important}#swap-chart .apexcharts-canvas path{stroke:var(--c-trend)!important}#pools-chart .controls .v-tabs{--h:max(30px,3.375em)!important;--bg-active:rgba(255,204,77,0.5);--g:5px;--c:var(--accent)}@media(max-width:880px)and (fixed-width:){#pools-chart .controls .v-tabs{--h:max(30px,3.2em)!important;--b:1px solid #2d291d!important;--p:1px!important;--p-tab:0 5px!important}}@media(max-width:880px){#pools-chart .controls .v-tabs{--h:max(30px,3.2em)!important;--b:1px solid #2d291d!important;--p:1px!important;--p-tab:0 5px!important}}#pools-chart .controls .v-input{font-size:clamp(12px,1vw,16px)!important;font-size:var(--resizer)!important;--w:7.75em;--h:3.5em!important;--p:0 1.25em;--bg:#292724;--br:10px;--tt:capitalize;--fw:400}@media(max-width:880px)and (fixed-width:){#pools-chart .controls .v-input{--h:3em!important;--p:0 5px}}@media(max-width:880px){#pools-chart .controls .v-input{--h:3em!important;--p:0 5px}}@media(max-width:880px)and (fixed-width:){#pools-chart .controls .v-input,#pools-chart .controls .v-tabs{--fs:max(10px,1em)!important;--br:4.85967px}}@media(max-width:880px){#pools-chart .controls .v-input,#pools-chart .controls .v-tabs{--fs:max(10px,1em)!important;--br:4.85967px}}#pools-chart .controls>div>span{--fs:28px}@media(max-width:500px)and (fixed-width:){#pools-chart .controls>div>span{--fs:max(16px,1.75em)}}@media(max-width:500px){#pools-chart .controls>div>span{--fs:max(16px,1.75em)}}#pools-chart .controls>div>span+label{--fs:14px}@media(max-width:500px)and (fixed-width:){#pools-chart .controls>div>span+label{--fs:max(10px,.875em)}}@media(max-width:500px){#pools-chart .controls>div>span+label{--fs:max(10px,.875em)}}#pools-chart .apexcharts-canvas[\\:not-has\\(.apexcharts-tooltip-box\\)] .apexcharts-tooltip{display:none!important}#pools-chart .apexcharts-canvas:not(:has(.apexcharts-tooltip-box)) .apexcharts-tooltip{display:none!important}',""]),t.exports=e},659:function(t,r,o){var content=o(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("01907af4",content,!0,{sourceMap:!1})},660:function(t,r,o){var e=o(15)(!1);e.push([t.i,':root{--primary:#ffcd4d;--secondary:#1a1917;--accent:#574f42;--active:var(--primary);--error:#b65c58;--warning:#ffd566;--success:#38a169;--c:var(--clr);--font1:"DM Sans",sans-serif;--font2:"Segoe",sans-serif;--font3:"Inter",sans-serif;--font4:"Poppins",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#4ddaeb;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:#2d291d}:root.dark{--bg-ap:#161513;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:#574f42;--clr-bg-scroll:#292724;--clr-card:var(--secondary);--clr-btn:var(--primary);--clr-text-btn:#1f1c14;--clr-badge:var(--primary);--clr-text-badge:#1f1c14;--clr-line:#292724}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ffcd4d!important;background-color:var(--primary)!important}.clr_secondary{background-color:#1a1917!important;background-color:var(--secondary)!important}.clr_accent{background-color:#574f42!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}',""]),t.exports=e},664:function(t,r,o){var content=o(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("dc0628f2",content,!0,{sourceMap:!1})},665:function(t,r,o){var e=o(15)(!1);e.push([t.i,':root{--primary:#ffcd4d;--secondary:#1a1917;--accent:#574f42;--active:var(--primary);--error:#b65c58;--warning:#ffd566;--success:#38a169;--c:var(--clr);--font1:"DM Sans",sans-serif;--font2:"Segoe",sans-serif;--font3:"Inter",sans-serif;--font4:"Poppins",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#4ddaeb;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:#2d291d}:root.dark{--bg-ap:#161513;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:#574f42;--clr-bg-scroll:#292724;--clr-card:var(--secondary);--clr-btn:var(--primary);--clr-text-btn:#1f1c14;--clr-badge:var(--primary);--clr-text-badge:#1f1c14;--clr-line:#292724}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ffcd4d!important;background-color:var(--primary)!important}.clr_secondary{background-color:#1a1917!important;background-color:var(--secondary)!important}.clr_accent{background-color:#574f42!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}',""]),t.exports=e},669:function(t,r,o){"use strict";o.r(r);var e=o(620),n=o(685),c=o(257),l=o(12);o(27),o(280);function d(t,r,o){for(var i=0,e=[];i<r;){var n=t,c=Math.floor(Math.random()*(o.max-o.min+1))+o.min;e.push([n,c]),t+=864e5,i++}return e}var h={name:"ChartSwapComponent",props:{height:{type:String,default:void 0},closable:{type:Boolean,default:!1}},data:function(){return{dataControlsChart:["1d","1w","1y","all"],selection:3,chartSeries:[{name:"",data:d(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{defaultLocale:"en",grid:{show:!1},colors:["#4ABCA4"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:4.5},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#000"],strokeColors:["#fff"],strokeWidth:4,hover:{size:8}},tooltip:{custom:function(t){t.series;var r=t.seriesIndex,o=t.dataPointIndex,e=t.w,n=Object(l.a)(e.globals.initialSeries[r].data[o],2),c=n[0],d=n[1],h=new Date(c),v=h.getDate(),m=h.getMonth(),hr=h.getUTCHours(),f="0"+h.getUTCMinutes(),time="".concat(hr,":").concat(f.substr(-2)),x="".concat(m.toMonthName()," ").concat(v,", ").concat(time);return"<span>".concat(x,"</span>\n            <span>Price: <b>$").concat(d,"</b></span>")},marker:{show:!1},style:{fontSize:"11px"}},legend:{show:!1,position:"top",horizontalAlign:"start"},yaxis:{labels:{show:!1}},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998],labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}}}}},computed:{data:function(){return this.chartSeries[0].data},currentPrice:function(){return this.data[this.data.length-1][1]},isTrendUp:function(){return this.data[this.data.length-1][1]>this.data[this.data.length-2][1]},trendingPercent:function(){return"\n        ".concat((this.data[this.data.length-1][1]/this.data[this.data.length-2][1]*100).toFixed(0),"%\n      ")}},methods:{updateData:function(t){switch(t){case"1d":this.selection=0,this.$refs.chart.zoomX(new Date(this.data[this.data.length-2][0]).getTime());break;case"1w":this.selection=1,this.$refs.chart.zoomX(new Date(this.data[this.data.length-8][0]).getTime());break;case"1y":if(this.selection=2,this.data.length-1>this.data.length-366)return this.$alert("cancel","No data available");this.$refs.chart.zoomX(new Date(this.data[this.data.length-366][0]).getTime());break;default:this.selection=3,this.$refs.chart.resetSeries()}}}},v=(o(654),o(25)),component=Object(v.a)(h,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"charts fill",style:"--c-trend: ".concat(t.isTrendUp?"var(--success)":"var(--error)"),attrs:{id:"swap-chart"}},[r("section",{staticClass:"charts-header jspace"},[r("div",{staticClass:"divcol font2"},[r("span",[t._v("HNY/POT")]),t._v(" "),r("span",[t._v(t._s(t.currentPrice?"$".concat(t.currentPrice):""))]),t._v(" "),r("div",{staticClass:"acenter"},[r(c.a,{attrs:{color:t.isTrendUp?"var(--success)":"var(--error)"}},[t._v("mdi-trending-"+t._s(t.isTrendUp?"up":"down"))]),t._v(" "),r("span",{staticStyle:{"--c":"var(--c-trend)"}},[t._v(t._s(t.trendingPercent))])],1)]),t._v(" "),r(e.a,{staticClass:"aspect",staticStyle:{top:"-10px"},attrs:{icon:"",width:"32px",height:"32px",title:"expand chart"},on:{click:function(r){return t.$emit("model")}}},[t.closable?r(c.a,[t._v("mdi-close")]):r("img",{staticClass:"aspect",staticStyle:{"--w":"16px"},attrs:{src:o(371),alt:"expand chart"}})],1)],1),t._v(" "),r("VueApexCharts",{ref:"chart",attrs:{width:"100%",height:t.height,type:"line",options:t.chartOptions,series:t.chartSeries}}),t._v(" "),r(n.a,{staticClass:"charts-footer",attrs:{mandatory:""},model:{value:t.selection,callback:function(r){t.selection=r},expression:"selection"}},t._l(t.dataControlsChart,(function(o){return r(e.a,{key:o,on:{click:function(r){return t.updateData(o)}}},[t._v("\n      "+t._s(o)+"\n    ")])})),1)],1)}),[],!1,null,null,null);r.default=component.exports},685:function(t,r,o){"use strict";o(8),o(10),o(9),o(3),o(13),o(11),o(14);var e=o(1),n=(o(659),o(110)),c=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}}),l=o(24),d=o(4);function h(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,o)}return r}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}r.a=Object(d.a)(c,l.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return v(v({},c.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,v({},c.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},708:function(t,r,o){"use strict";var e=o(1),n=(o(22),o(664),o(114)),c=o(24),l=o(191),d=o(130),h=o(251),v=o(0),m=o(7),f=o(4);r.a=Object(f.a)(c.a,l.a,d.a,h.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,r=t.activator,content=t.content,o=!(this.bottom||this.left||this.top||this.right),e=!1!==this.attach?r.offsetLeft:r.left,n=0;return this.top||this.bottom||o?n=e+r.width/2-content.width/2:(this.left||this.right)&&(n=e+(this.right?r.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,r=t.activator,content=t.content,o=!1!==this.attach?r.offsetTop:r.top,e=0;return this.top||this.bottom?e=o+(this.bottom?r.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(e=o+r.height/2-content.height/2),this.nudgeTop&&(e-=parseInt(this.nudgeTop)),this.nudgeBottom&&(e+=parseInt(this.nudgeBottom)),!1===this.attach&&(e+=this.pageYOffset),"".concat(this.calcYOverflow(e),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(v.h)(this.maxWidth),minWidth:Object(v.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(v.t)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,r=n.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(r.focus=function(r){t.getActivator(r),t.runDelay("open")},r.blur=function(r){t.getActivator(r),t.runDelay("close")}),r.keydown=function(r){r.keyCode===v.x.esc&&(t.getActivator(r),t.runDelay("close"))},r},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(e.a)(t,this.contentClass,!0),Object(e.a)(t,"menuable__content__active",this.isActive),Object(e.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var r=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[r.genTransition()]})),this.genActivator()])}})},752:function(t,r,o){"use strict";o.r(r);var e=o(620),n=o(639),c=o(257),l=o(625),d=o(708),h={name:"ModalsSwapComponent",data:function(){return{modalSettings:!1,dataSlippage:[.5,1,2,3.5],slippageSelection:.5,deadlineSelection:void 0,modalChart:!1}},computed:{filterDataTokens:function(){return this.$store.getters.filters({items:this.dataTokens,search:this.searchToken})}},watch:{modalSettings:function(t){var r=this;t&&(this.$targetTooltip('.modalSettings img[alt="info"]'),window.addEventListener("resize",(function(){return r.$targetTooltip('.modalSettings img[alt="info"]',13)})))}},beforeDestroy:function(){window.removeEventListener("resize",this.$targetTooltip)},methods:{}},v=(o(286),o(25)),component=Object(v.a)(h,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"modals"},[r(n.a,{attrs:{"content-class":"modalSettings",width:"400px"},model:{value:t.modalSettings,callback:function(r){t.modalSettings=r},expression:"modalSettings"}},[r("section",{staticClass:"modalSettings-header space"},[r("h3",{staticClass:"p",staticStyle:{"--fw":"700"}},[t._v("Exchange Settings")]),t._v(" "),r(e.a,{staticStyle:{top:"-10px"},attrs:{icon:""},on:{click:function(r){t.modalSettings=!1}}},[r(c.a,[t._v("mdi-close")])],1)],1),t._v(" "),r("div",{staticClass:"divcol",staticStyle:{gap:"5px"}},[r("label",{staticClass:"plain"},[t._v("Slippage Tolerance\n        "),r(d.a,{attrs:{bottom:"","max-width":"174px",color:"#574F42"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,c=e.attrs;return[r("img",t._g(t._b({attrs:{src:o(368),alt:"info"}},"img",c,!1),n))]}}])},[t._v(" "),r("span",[t._v("your transaction will revert if the price changes unfavourably by more than it’s percentage")])])],1),t._v(" "),r("div",{staticClass:"space wrap",staticStyle:{gap:"10px 0"}},t._l(t.dataSlippage,(function(o){return r(e.a,{key:o,staticClass:"btn2",class:{active:o===t.slippageSelection},attrs:{plain:""},on:{click:function(r){t.slippageSelection=o}}},[t._v(t._s(o)+"%")])})),1)]),t._v(" "),r("div",{staticClass:"divcol",staticStyle:{gap:"5px"}},[r("label",{staticClass:"plain"},[t._v("Transaction Deadline")]),t._v(" "),r("div",{staticClass:"acenter",staticStyle:{gap:"inherit"}},[r(l.a,{staticClass:"btn2",attrs:{type:"number",placeholder:"-",solo:""},model:{value:t.deadlineSelection,callback:function(r){t.deadlineSelection=r},expression:"deadlineSelection"}}),t._v(" "),r("span",[t._v("Min")])],1)])]),t._v(" "),r(n.a,{attrs:{width:"496px","content-class":"modalChart"},model:{value:t.modalChart,callback:function(r){t.modalChart=r},expression:"modalChart"}},[r("ChartsSwapChart",{ref:"chart",attrs:{height:"400px",closable:""},on:{model:function(r){t.modalChart=!1}}})],1)],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{ChartsSwapChart:o(669).default})}}]);