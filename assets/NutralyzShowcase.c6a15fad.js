import{Q as s}from"./QImg.ed800fc2.js";import{b as y}from"./QLayout.4dd3ef70.js";import{_ as b}from"./feature-graphic.a75c4231.js";import{_ as r,a as x,S as v}from"./ShowcaseStatement.ae134098.js";import{B as h,C as a,D as u,E as t,F as e,X as p,L as n,I as m,Y as _,Z as g,G as w}from"./index.61911273.js";import{Q as k,a as f}from"./QCard.520e23e6.js";import{u as q}from"./use-quasar.e2d1c335.js";import"./QBtn.8d722d89.js";import"./dom.81d8b446.js";import"./use-dark.d049955a.js";import"./selection.25175149.js";var C="/assets/app-store-badge.a26fc5b3.svg",F="/assets/google-play-badge.f72611e2.png",$="/assets/screen2.6e9bd6d6.png",S="/assets/screen3.6178d4dd.png",L="/assets/screen4.60ee4588.png",B="/assets/screen1.f8b5375a.png",Q="/assets/screen5.7c02626d.png",z="/assets/screen6.dcdeffde.png",D="/assets/screen7.08ae32cc.png",G="/assets/screen8.ce76a854.png";const N=h({__name:"NutralyzCarousel",setup(o){return(i,d)=>(a(),u(x,null,{default:t(()=>[e(r,{name:0},{default:t(()=>[e(s,{src:$,class:"rounded-borders-20 shadow-2 showcase-screenshot",fit:"contain"})]),_:1}),e(r,{name:1},{default:t(()=>[e(s,{src:S,class:"rounded-borders-20 shadow-2 showcase-screenshot",fit:"contain"})]),_:1}),e(r,{name:2},{default:t(()=>[e(s,{src:L,class:"rounded-borders-20 shadow-2 showcase-screenshot",fit:"contain"})]),_:1}),e(r,{name:3},{default:t(()=>[e(s,{src:B,class:"rounded-borders-20 shadow-2 showcase-screenshot",fit:"contain"})]),_:1}),e(r,{name:4},{default:t(()=>[e(s,{src:Q,class:"rounded-borders-20 shadow-2 showcase-screenshot",fit:"contain"})]),_:1}),e(r,{name:5},{default:t(()=>[e(s,{src:z,class:"rounded-borders-20 shadow-2 showcase-screenshot",fit:"contain"})]),_:1}),e(r,{name:6},{default:t(()=>[e(s,{src:D,class:"rounded-borders-20 shadow-2 showcase-screenshot",fit:"contain"})]),_:1}),e(r,{name:7},{default:t(()=>[e(s,{src:G,class:"rounded-borders-20 shadow-2 showcase-screenshot",fit:"contain"})]),_:1})]),_:1}))}}),j={class:"row full-width text-h6 text-weight-bold"},E={class:"row full-width text-body1 rounded-borders-10"},H={style:{"margin-top":"4px","margin-bottom":"16px","padding-left":"28px"}},T=h({__name:"ShowcaseFeatureSection",props:{feature:{default:()=>({title:"Feature Title",highlights:["Feature Highlight 1","Feature Highlight 2"]})}},setup(o){return(i,d)=>(a(),p("div",null,[n("div",j,m(o.feature.title),1),n("div",E,[n("ul",H,[(a(!0),p(_,null,g(o.feature.highlights,(c,l)=>(a(),p("li",{key:l,style:{"padding-bottom":"12px"}},m(c),1))),128))])])]))}}),V=h({__name:"ShowcaseFeatureList",props:{title:{default:"Features & Highlights"},features:null},setup(o){return(i,d)=>(a(),u(k,{class:"prominence-3 text-prominence-3 shadow-2 rounded-borders-10",style:{width:"84vw","max-width":"1000px"}},{default:t(()=>[e(f,{class:"text-h5 text-weight-bold q-pb-xs",style:{"text-decoration":"underline"}},{default:t(()=>[w(m(o.title),1)]),_:1}),e(f,null,{default:t(()=>[(a(!0),p(_,null,g(o.features,(c,l)=>(a(),u(T,{key:l,feature:c},null,8,["feature"]))),128))]),_:1})]),_:1}))}}),A=h({__name:"NutralyzFeatures",setup(o){const i=[{title:"Extensive Food Database",highlights:["Detailed nutritional information for over 1 million food items, including restaurant and brand items","Search by name, category, ranges of nutrients, or diet/allergy filters"]},{title:"Create Custom Foods",highlights:["Any food not in the database can be created and used across the application with ease","Browse through your custom foods sorted by name, creation date, last logged, or quantity of any nutrient"]},{title:"Barcode Scanning",highlights:["Scan barcodes to quickly find foods in the database","615,000 unique UPC/Barcodes in the database","If a barcode is not found in the database, a custom food or supplement can be created and linked to that barcode for future scans"]},{title:"Daily Food Log",highlights:["Log foods & supplements eaten throughout the day","View daily totals for calories, nutrients, and macronutrients as they update in real-time","Totals represented as a percentage of daily goals, including a total progress bar","Calendar view to quickly navigate to past days or preview your food planned for tomorrow","Users on pro plan can freely edit any past logs if they need to make changes"]},{title:"Daily Health Log",highlights:["Rate your mood and give a rough estimate of your level of exercise/activity each day","Track how much water you consume each day, with settings for a custom goal and custom glass & bottle sizes for quick logging","All of these factors can be viewed alongside nutrition in the history chart to see how all of these factors interact in your daily life"]}];return(d,c)=>(a(),u(V,{features:i}))}}),I={class:"q-px-sm q-pt-lg q-pb-md row full-width justify-center"},P={class:"q-px-sm q-pt-md q-pb-md row full-width justify-center"},U={class:"row justify-center items-center q-pt-sm"},R={class:"q-px-sm q-pt-lg q-pb-md row full-width justify-center"},X=n("div",{class:"row justify-start text-subtitle text-prominence-3 q-px-sm"}," Google Play and the Google Play logo are trademarks of Google LLC ",-1),ne=h({__name:"NutralyzShowcase",setup(o){const i=q();function d(){window.open("https://apps.apple.com/app/id6443520011","_blank")}function c(){window.open("https://play.google.com/store/apps/details?id=com.nutralyz","_blank")}function l(){i.platform.is.ios?d():i.platform.is.android&&c()}return(Y,Z)=>(a(),u(y,{class:"gradient-prominence-1"},{default:t(()=>[n("div",I,[e(s,{class:"rounded-borders-10 shadow-2",src:b,fit:"contain",style:{width:"84vw","max-width":"800px"},onClick:l})]),n("div",P,[e(v,null,{default:t(()=>[w(" Empowering users to take charge of their mental and physical health by gaining the insights needed to improve their dietary habits! ")]),_:1})]),e(N),n("div",U,[e(s,{src:C,fit:"contain",style:{"max-width":"250px","max-height":"76px",cursor:"pointer"},onClick:d}),e(s,{src:F,fit:"contain",style:{"max-width":"300px",cursor:"pointer"},onClick:c})]),n("div",R,[e(A)]),X]),_:1}))}});export{ne as default};