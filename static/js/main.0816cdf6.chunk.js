(this.webpackJsonpdoffindata=this.webpackJsonpdoffindata||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var i=a(31),d=a(0),n=a.n(d),r=a(14),o=a.n(r),s=(a(124),a(10)),c=(a.p,a(125),a(9)),b=a(91);a(131),a(133);var f=function(){var e,t=Object(d.useState)(null),a=Object(s.a)(t,2),n=a[0],r=a[1];return c.b.apps.length||c.b.initializeApp({apiKey:"AIzaSyCMDIwwubzh4Xt6nujcK65akULxjgHnT3E",authDomain:"doffin-bach.firebaseapp.com",databaseURL:"https://doffin-bach-default-rtdb.europe-west1.firebasedatabase.app",projectId:"doffin-bach",storageBucket:"doffin-bach.appspot.com",messagingSenderId:"16468608817",appId:"1:16468608817:web:f708022a44a453b4ca1210",measurementId:"G-QXSYS06S5N"}),Object(d.useEffect)((function(){c.b.database().ref("formattedData/F02_2014").limitToFirst(100).once("value").then((function(e){var t=[];t.push(e.val()),r(t.map((function(e){return Object.values(e)}))[0])}))}),[]),e=n?n.map((function(e,t){return{id:t,bedrift:e.bedrift,beskrivelse:e.beskrivelse,cpv:e.cpv,dato:e.dato,kategori:e.kategorier,subkategori:e.subkategori}})):[{id:520982058,bedrift:"Loading...",beskrivelse:"Loading...",cpv:"Loading...",dato:"Loading...",kategori:"Loading...",subkategori:"Loading..."}],Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Form: F02_2014"}),Object(i.jsx)("div",{style:{height:800,width:"100%"},children:Object(i.jsx)(b.a,{idProperty:"id",rowHeight:100,columns:[{field:"bedrift",headerName:"Bedrift",width:200},{field:"beskrivelse",headerName:"Beskrivelse",width:700},{field:"cpv",headerName:"CPV",width:200},{field:"dato",headerName:"Dato",width:120},{field:"kategori",headerName:"Kategori",width:200},{field:"subkategori",headerName:"Sub kategori",width:300}],rows:e,multiline:!0,style:{minHeight:550}})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(t){var a=t.getCLS,i=t.getFID,d=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),i(e),d(e),n(e),r(e)}))};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),u()}},[[136,1,2]]]);
//# sourceMappingURL=main.0816cdf6.chunk.js.map