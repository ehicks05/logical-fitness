(this["webpackJsonplogical-fitness"]=this["webpackJsonplogical-fitness"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"initialUserState":{"pushups":0,"pullups":0,"bicepCurl":0,"benchPress":0,"squats":0,"deadlift":0,"oneHundredMeterDash":100,"oneMileRun":100},"columns":[{"title":"Tier","dataIndex":"tier","key":"tier","fixed":"left","biggerIsBetter":false},{"title":"Pushup","dataIndex":"pushups","key":"pushups","unit":"","biggerIsBetter":true},{"title":"Pullup","dataIndex":"pullups","key":"pullups","unit":"","biggerIsBetter":true},{"title":"Bicep Curl","dataIndex":"bicepCurl","key":"bicepCurl","unit":"lb","biggerIsBetter":true},{"title":"Bench","dataIndex":"benchPress","key":"benchPress","unit":"lb","biggerIsBetter":true},{"title":"Squat","dataIndex":"squats","key":"squats","unit":"lb","biggerIsBetter":true},{"title":"Deadlift","dataIndex":"deadlift","key":"deadlift","unit":"lb","biggerIsBetter":true},{"title":"100M Dash","dataIndex":"oneHundredMeterDash","key":"oneHundredMeterDash","unit":"s","biggerIsBetter":false},{"title":"1 Mile Run","dataIndex":"oneMileRun","key":"oneMileRun","unit":"min","biggerIsBetter":false}],"tableData":[{"tier":"You"},{"tier":"Plankton","pushups":0,"pullups":0,"bicepCurl":2,"benchPress":5,"squats":5,"deadlift":5,"oneHundredMeterDash":50,"oneMileRun":30},{"tier":"Tadpole","pushups":0,"pullups":0,"bicepCurl":5,"benchPress":10,"squats":10,"deadlift":10,"oneHundredMeterDash":45,"oneMileRun":20},{"tier":"Krill","pushups":1,"pullups":0,"bicepCurl":6,"benchPress":12,"squats":12,"deadlift":12,"oneHundredMeterDash":40,"oneMileRun":18},{"tier":"Anchovy","pushups":1,"pullups":1,"bicepCurl":8,"benchPress":16,"squats":16,"deadlift":16,"oneHundredMeterDash":35,"oneMileRun":16},{"tier":"Goldfish","pushups":3,"pullups":1,"bicepCurl":16,"benchPress":25,"squats":25,"deadlift":25,"oneHundredMeterDash":30,"oneMileRun":14},{"tier":"Jellyfish","pushups":10,"pullups":2,"bicepCurl":20,"benchPress":40,"squats":40,"deadlift":40,"oneHundredMeterDash":25,"oneMileRun":12},{"tier":"Minnow","pushups":12,"pullups":3,"bicepCurl":25,"benchPress":60,"squats":60,"deadlift":60,"oneHundredMeterDash":20,"oneMileRun":10},{"tier":"Lobster","pushups":20,"pullups":7,"bicepCurl":30,"benchPress":80,"squats":80,"deadlift":80,"oneHundredMeterDash":18,"oneMileRun":8},{"tier":"Manta Ray","pushups":25,"pullups":10,"bicepCurl":40,"benchPress":90,"squats":90,"deadlift":90,"oneHundredMeterDash":15,"oneMileRun":7},{"tier":"Dolphin","pushups":30,"pullups":15,"bicepCurl":50,"benchPress":110,"squats":110,"deadlift":110,"oneHundredMeterDash":12,"oneMileRun":6},{"tier":"Swordfish","pushups":40,"pullups":20,"bicepCurl":60,"benchPress":130,"squats":130,"deadlift":130,"oneHundredMeterDash":11,"oneMileRun":5.5},{"tier":"Shark","pushups":50,"pullups":25,"bicepCurl":130,"benchPress":250,"squats":250,"deadlift":250,"oneHundredMeterDash":10,"oneMileRun":4.5}]}')},,,,function(e,t,r){e.exports=r(14)},,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(5),l=r.n(s),u=(r(11),r(1)),i=(r(12),r(3)),c=r(2);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=function(e){var t=Object(n.useState)(c.initialUserState),r=Object(u.a)(t,2),s=r[0],l=r[1],d=c.columns,p=c.tableData,h=d.map((function(e){var t="tier"===e.key?"":"has-text-right";return a.a.createElement("th",{key:e.key,className:t},e.title)})),b="dark"===e.theme?"has-text-light has-background-dark":"",m=p.slice().reverse().map((function(e){var t=d.map((function(t){if("You"===e.tier){if("tier"===t.key)return a.a.createElement("th",{key:e.tier+" "+t.key},e.tier);var r=s[t.key];return a.a.createElement("td",{className:"has-text-right",key:e.tier+" "+t.key},a.a.createElement("input",{className:"input has-text-right "+b,inputMode:"numeric",size:5,id:t.key,value:r,name:t.title,onChange:function(e){var r=e.target.value?e.target.value:0;l((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,Object(i.a)({},t.key,r))}))}}))}var n=e[t.key];if("tier"===t.key)return a.a.createElement("th",{key:e.tier+" "+t.key},n);var u=t.biggerIsBetter?s[t.key]>=n:s[t.key]<=n,c="has-text-right ".concat(u?"is-success":"");return a.a.createElement("td",{key:e.tier+" "+t.key,className:c},n+" "+t.unit)}));return a.a.createElement("tr",{key:e.tier},t)}));return a.a.createElement("div",{style:{overflow:"auto"}},a.a.createElement("table",{className:"table is-narrow",style:{width:"100%"}},a.a.createElement("thead",null,a.a.createElement("tr",null,h)),a.a.createElement("tbody",null,m)))};r(13);var p=function(){var e=Object(n.useState)("light"),t=Object(u.a)(e,2),r=t[0],s=t[1],l="dark"===r?a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/bulma-dark@0.0.2/dist/css/cyborg.css"}):null,i="dark"===r?"                thead th, tbody th {\n                background: #363636;\n            }":"";return a.a.createElement("div",{className:"App"},l,a.a.createElement("style",null,i),a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"title"},"Logical Fitness"),a.a.createElement("h2",{className:"subtitle"},"A Guide to Balanced Fitness")))),a.a.createElement("section",{className:"section"},a.a.createElement("div",{className:"container"},a.a.createElement(d,{theme:r}))),a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"content has-text-centered"},a.a.createElement("p",null,a.a.createElement("strong",null,"Logical Fitness")," by ",a.a.createElement("a",{href:"https://ehicks.net"},"Eric Hicks"),a.a.createElement("br",null),a.a.createElement("button",{className:"button",id:"lightBulb",onClick:function(){s((function(e){return"dark"===e?"light":"dark"}))}},"\ud83d\udca1")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.9fe867a6.chunk.js.map