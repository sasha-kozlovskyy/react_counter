(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),u=n(2),r=n.n(u),o=n(3),d=n(4),s=n(6),i=n(5),l=(n(12),n(13),function(t){var e=t.count,n=t.addOne,a=t.addOneHundred,u=t.increase;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Count:",e),c.a.createElement("button",{type:"button",className:"button",onClick:n},"AddOne"),c.a.createElement("button",{type:"button",className:"button",onClick:a},"AddOneHundred"),c.a.createElement("button",{type:"button",className:"button",onClick:u},"Increase"))}),m=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(t=e.call.apply(e,[this].concat(c))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.state.count%5===0&&t.add100(),t.addOne()},t}return Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(l,{count:this.state.count,addOne:this.addOne,addOneHundred:this.add100,increase:this.increase}))}}]),n}(c.a.Component);r.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.3330fd21.chunk.js.map