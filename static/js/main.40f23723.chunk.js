(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Captain America",image:"./images/CaptainAmerica109.jpg",count:0},{id:2,name:"Thor",image:"./images/Thor-272.jpg",count:0},{id:3,name:"Hulk",image:"./images/Hulk_1_cover.jpg",count:0},{id:4,name:"Black Widow",image:"./images/Black_Widow_1.jpg",count:0},{id:5,name:"Hawkeye",image:"./images/hawkeye.jpg",count:0},{id:6,name:"Vision",image:"./images/vision.jpg",count:0},{id:7,name:"Iron Man",image:"./images/ironman.jpg",count:0},{id:8,name:"The Sentry",image:"./images/sentry.jpeg",count:0},{id:9,name:"Spider-Man",image:"./images/spiderman.jpg",count:0},{id:10,name:"Wolverine",image:"./images/wolverine.jpeg",count:0},{id:11,name:"Scarlet Witch",image:"./images/scarletwitch.jpeg",count:0},{id:12,name:"Ant Man",image:"./images/antman.jpeg",count:0}]},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(3),o=t.n(c),r=(t(15),t(4)),s=t(5),m=t(7),l=t(6),g=t(8),u=(t(16),function(e){return i.a.createElement("div",{className:"App-header bg-danger"},"Avengers Memory Game",i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"scores"},"Score: ",e.score," | High Score: ",e.highScore))}),d=t(1);t(17);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};var p=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{onClick:function(){return e.handleClick(e.id)},alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("strong",null,e.name)))},v=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={Data:d,score:0,highScore:0},t.handleClick=function(e){t.state.Data.find(function(a,n){if(a.id===e){if(0===d[n].count)return d[n].count+=1,t.setState({score:t.state.score+1},function(){console.log(this.state.score)}),t.state.Data.sort(function(){return Math.random()-.5}),!0;t.gameOver()}})},t.gameOver=function(){t.state.score>t.state.highScore&&t.setState({highScore:t.state.score},function(){console.log(this.state.highScore)}),t.state.Data.forEach(function(e){e.count=0}),alert("Game Over! Please try again. \nScore: ".concat(t.state.score)),t.setState({score:0})},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(u,{score:this.state.score,highScore:this.state.highScore}),i.a.createElement("p",null,"Click on a comic book cover to earn a point. Click the same one twice and you lose!"),i.a.createElement(h,{className:"wrapper"},this.state.Data.map(function(a){return i.a.createElement(p,{id:a.id,key:a.id,name:a.name,image:a.image,handleClick:e.handleClick})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.40f23723.chunk.js.map