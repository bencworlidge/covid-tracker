(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{16:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},207:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),o=a(71),s=a.n(o),i=a(6),u=a.n(i),d=a(11),l=a(72),j=a(73),f=a(81),p=a(80),h=a(225),b=a(229),v=a(226),x=a(227),m=a(31),O=a.n(m),g=a(16),y=a.n(g),C=a(32),_=a.n(C),w=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(h.a,{container:!0,spacing:3,justify:"center",children:[Object(n.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:_()(y.a.card,y.a.infected),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(O.a,{start:0,end:a.value,duration:5,separator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(n.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:_()(y.a.card,y.a.recovered),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(O.a,{start:0,end:r.value,duration:5,separator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of recoveries of COVID-19"})]})}),Object(n.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:_()(y.a.card,y.a.deaths),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(O.a,{start:0,end:c.value,duration:5,separator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):"Loading..."},k=a(30),D=a(33),S=a.n(D),N="https://covid19.mathdro.id/api",I=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=a(45),A=a(78),E=a.n(A),L=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,s=e.country,i=Object(r.useState)([]),l=Object(k.a)(i,2),j=l[0],f=l[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=j.length?Object(n.jsx)(U.Line,{data:{labels:j.map((function(e){return e.date})),datasets:[{data:j.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:j.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,h=a?Object(n.jsx)(U.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:[" rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)"," rgba(255, 0, 0, 0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return Object(n.jsx)("div",{className:E.a.container,children:s?h:p})},P=a(230),z=a(228),G=a(79),J=a.n(G),M=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(k.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(n.jsx)(P.a,{className:J.a.formControl,children:Object(n.jsxs)(z.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Global"}),o.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})})},Q=a(46),R=a.n(Q),q=a.p+"static/media/image.9e5d4fc7.png",Y=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(n.jsxs)("div",{className:R.a.container,children:[Object(n.jsx)("img",{src:q,className:R.a.image,alt:"COVID-19 Logo"}),Object(n.jsx)(w,{data:t}),Object(n.jsx)(M,{handleCountryChange:this.handleCountryChange}),Object(n.jsx)(L,{data:t,country:a})]})}}]),a}(c.a.Component);s.a.render(Object(n.jsx)(Y,{}),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},78:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},79:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}}},[[207,1,2]]]);
//# sourceMappingURL=main.180fa1f7.chunk.js.map