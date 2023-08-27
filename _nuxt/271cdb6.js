(window.webpackJsonp=window.webpackJsonp||[]).push([[18,22],{332:function(t,e,n){"use strict";n.r(e);var r=n(341),o=n.n(r),l={props:["id","options","styles"],name:"highcharts",data:function(){return{chart:null}},mounted:function(){this.initChart()},watch:{options:function(){this.chart&&this.chart.update(this.options)}},methods:{initChart:function(){this.$el.style.height=(this.styles.height||400)+"px",this.chart=new o.a.Chart(this.$el,this.options)}}},c=(n(335),n(17)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"highcharts-container",attrs:{id:t.id}})}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,n){var content=n(336);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("16b76a31",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";var r=n(4),o=n(87).find,l=n(146),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},335:function(t,e,n){"use strict";n(333)},336:function(t,e,n){var r=n(46)(!1);r.push([t.i,".highcharts-container{width:100%;height:500px}",""]),t.exports=r},364:function(t,e,n){var content=n(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("5b86c595",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";n(364)},387:function(t,e,n){var r=n(46)(!1);r.push([t.i,".chart-warpper,.chart-warpper .row-2{margin-top:25px}.chart-warpper .category-tab{height:40px;line-height:40px;background-color:#f5f7fa;border:1px solid #e4e7ed}.chart-warpper .category-tab ul{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.chart-warpper .category-tab ul li{flex:1;height:100%;list-style:none;text-align:center;color:#909399;cursor:pointer;transition:all .5s linear}.chart-warpper .category-tab ul li:hover{color:#409eff}.chart-warpper .category-tab ul .active{background:#409eff;color:#fff}.chart-warpper .category-tab ul .active:hover{color:#fff}",""]),t.exports=r},396:function(t,e,n){"use strict";n.r(e);n(334),n(37),n(48);var r=n(6),o=n(332),l=n(337),c=n.n(l),d={components:{TranChart:o.default},data:function(){return{categories:[],chartdata:[],cntchartdata:[],tran:[],cate:"",cate1:"",loading:!0,xCategories:[],sexRato:null}},computed:{chartData:function(){var t=this.chartdata.map((function(a){return a.y})),e=0;return t&&t.length>0&&(e=t.reduce((function(t,e){return t+e}))),{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"销售总额:￥"+this.$ft(e)+" "+this.$rato(.05),useHTML:!0},subtitle:{text:"*按下显示分类数值"},credits:{enabled:!1},tooltip:{pointFormat:"销售额：<b>{point.y}</b>，占比<b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %",style:{color:"#333"}}}},series:[{name:"占比",colorByPoint:!0,data:this.chartdata}]}},chartDataCn:function(){var t=this.cntchartdata.map((function(a){return a.y})),e=0;return t&&t.length>0&&(e=t.reduce((function(t,e){return t+e}))),{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"销售产品数量: "+this.$ft(e)+"件 "+this.$rato(-.03),useHTML:!0},subtitle:{text:"*按下显示分类数值"},credits:{enabled:!1},tooltip:{pointFormat:"共销售<b>{point.y}</b>件，占比<b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %",style:{color:"#333"}}}},series:[{name:"分类",colorByPoint:!0,data:this.cntchartdata}]}},barAmount:function(){var t=this,e=this.tran,data=[];e.length>0&&(data=this.xCategories.map((function(n){var r=e.find((function(a){return a.QT_Category2==t.cate&&a.dweek==n}));return r?r.totalPrice:0})));var n=data;return{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"line"},title:{text:this.cate+"销售额"},xAxis:{categories:this.xCategories},yAxis:{title:{text:"销售额"}},min:0,credits:{enabled:!1},legend:{enabled:!1},tooltip:{pointFormat:"销售额：<b>{point.y}</b>"},series:[{name:this.cate,data:n}]}},barCount:function(){var t=this,e=this.tran,data=[];return e.length>0&&(data=this.xCategories.map((function(n){var r=e.find((function(a){return a.QT_Category2==t.cate1&&a.dweek==n}));return r?r.totalCount:0}))),{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"line"},title:{text:this.cate1+"销售数量"},xAxis:{categories:this.xCategories},yAxis:{title:{text:"销售量"}},credits:{enabled:!1},legend:{enabled:!1},tooltip:{pointFormat:"共销售<b>{point.y}</b>件"},series:[{name:"分类",data:data}]}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,c.a.get("/report/server/getTranData");case 4:n=e.sent,t.categories=n.data.model[0]||[],t.tran=n.data.model[1]||[],t.xCategories=(n.data.model[2]||[]).map((function(a){return a.dlist})),(r=n.data.model[3]||[])&&r.length>0&&(o=r.find((function(a){return"女士"==a.ttype})),l=r.find((function(a){return"男士"==a.ttype})),o&&l&&(d=o.cnt+l.cnt,h=o.amount+l.amount,t.sexRato={womenCnt:o.cnt/d*100,menCnt:l.cnt/d*100,womenAmount:o.amount/h*100,menAmount:l.amount/h*100})),t.categories.length>0&&(t.chartdata=t.categories.map((function(a){return{name:a.QT_Category2,y:a.totalPrice}})),t.cntchartdata=t.categories.map((function(a){return{name:a.QT_Category2,y:a.totalCount}})),t.cate=t.categories[0].QT_Category2,t.cate1=t.categories[0].QT_Category2),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t.$message({type:"error",message:"网络出错，请稍后再试"});case 16:t.loading=!1;case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))()}},h=(n(386),n(17)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"chart-warpper"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-card",[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.categories,stripe:""}},[n("el-table-column",{attrs:{prop:"QT_Category2",label:"分类"}}),t._v(" "),n("el-table-column",{attrs:{prop:"totalPrice",label:"销售总额"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                  "+t._s(t.$ft(e.row.totalPrice))+"\n                ")]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"amountRato",label:"占比"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{domProps:{innerHTML:t._s(t.$percent(e.row.amountRato))}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"cntRato",label:"＋／－"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{domProps:{innerHTML:t._s(t.$rato(e.row.arato))}})]}}])})],1),t._v(" "),t.sexRato?n("div",{staticClass:"control-rato"},[n("div",{staticClass:"label"},[t._v("女士")]),t._v(" "),n("div",{staticClass:"rato-chart"},[n("div",{staticClass:"women",style:{width:t.sexRato.womenCnt+"%"}},[t._v("\n                  "+t._s(Math.round(t.sexRato.womenCnt))+"%\n                ")]),t._v(" "),n("div",{staticClass:"men",style:{width:t.sexRato.menCnt+"%"}},[t._v("\n                  "+t._s(Math.round(t.sexRato.menCnt))+"%\n                ")])]),t._v(" "),n("div",{staticClass:"label"},[t._v("男士")])]):t._e()],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("TranChart",{attrs:{id:"amountChart",options:t.chartData,styles:{height:400}}})],1)],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-card",[n("div",{staticClass:"category-tab"},[n("ul",t._l(t.categories,(function(e){return n("li",{key:e.QT_Category2,class:{active:t.cate==e.QT_Category2},on:{click:function(n){t.cate=e.QT_Category2}}},[t._v("\n              "+t._s(e.QT_Category2)+"\n            ")])})),0)]),t._v(" "),n("TranChart",{attrs:{id:"barAmount",options:t.barAmount,styles:{height:360}}})],1)],1)],1),t._v(" "),n("el-row",{staticClass:"row-2",attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-card",[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.categories,stripe:""}},[n("el-table-column",{attrs:{prop:"QT_Category2",label:"分类"}}),t._v(" "),n("el-table-column",{attrs:{prop:"totalCount",label:"销售总额"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                  "+t._s(t.$ft(e.row.totalCount))+"\n                ")]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"cntRato",label:"占比"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{domProps:{innerHTML:t._s(t.$percent(e.row.cntRato))}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"cntRato",label:"＋／－"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{domProps:{innerHTML:t._s(t.$rato(e.row.crato))}})]}}])})],1),t._v(" "),t.sexRato?n("div",{staticClass:"control-rato"},[n("div",{staticClass:"label"},[t._v("女士")]),t._v(" "),n("div",{staticClass:"rato-chart"},[n("div",{staticClass:"women",style:{width:t.sexRato.womenAmount+"%"}},[t._v("\n                  "+t._s(Math.round(t.sexRato.womenAmount))+"%\n                ")]),t._v(" "),n("div",{staticClass:"men",style:{width:t.sexRato.menAmount+"%"}},[t._v("\n                  "+t._s(Math.round(t.sexRato.menAmount))+"%\n                ")])]),t._v(" "),n("div",{staticClass:"label"},[t._v("男士")])]):t._e()],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("TranChart",{attrs:{id:"countChart",options:t.chartDataCn,styles:{height:400}}})],1)],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-card",[n("div",{staticClass:"category-tab"},[n("ul",t._l(t.categories,(function(e){return n("li",{key:e.QT_Category2,class:{active:t.cate1==e.QT_Category2},on:{click:function(n){t.cate1=e.QT_Category2}}},[t._v("\n              "+t._s(e.QT_Category2)+"\n            ")])})),0)]),t._v(" "),n("TranChart",{attrs:{id:"barCount",options:t.barCount,styles:{height:360}}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TranChart:n(332).default})}}]);