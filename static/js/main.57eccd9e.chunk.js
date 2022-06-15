(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{24:function(e,n,t){"use strict";t.r(n);var c,a,r=t(1),o=t.n(r),i=t(8),s=t.n(i),d=t(2),l=t(3),b=Object(d.b)(c||(c=Object(l.a)(["\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\nul,\nol {\n  margin: 0;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n"]))),u={backgrounds:{primary:"lavender",buttonPrimary:"aqua"}},j=t(12),h=t(13),g=t(14),O=t(16),f=t(15),m=d.c.div(a||(a=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  padding: 20px;\n  background-color: ",";\n"])),(function(e){return e.theme.backgrounds.primary})),x=t(0);var p,v,k,y,F=function(e){var n=e.children;return Object(x.jsx)(m,{children:n})},P=function(e){var n=e.good,t=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(x.jsx)("div",{children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["Good: ",n]}),Object(x.jsxs)("li",{children:["Neutral: ",t]}),Object(x.jsxs)("li",{children:["Bad: ",c]}),Object(x.jsxs)("li",{children:["Total: ",a]}),Object(x.jsxs)("li",{children:["Positive feedback: ",Math.round(r),"%"]})]})})},w=d.c.div(p||(p=Object(l.a)([""]))),S=d.c.button(v||(v=Object(l.a)(["\n  padding: 10px 20px;\n  border: none;\n  outline: none;\n  background-color: ",";\n  border-radius: 5px;\n\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"])),(function(e){return e.theme.backgrounds.buttonPrimary})),T=function(e){var n=e.options,t=e.onLeaveFeedback;return Object(x.jsx)(w,{children:n.map((function(e){return Object(x.jsx)(S,{type:"button",onClick:function(){return t(e)},children:e},e)}))})},C=d.c.h2(k||(k=Object(l.a)(["\n  font-size: 3rem;\n"]))),M=function(e){var n=e.title,t=e.children;return Object(x.jsxs)(x.Fragment,{children:[n&&Object(x.jsx)(C,{children:n}),t]})},I=d.c.p(y||(y=Object(l.a)(["\n  font-size: 1.2rem;\n"]))),z=function(e){var n=e.message;return Object(x.jsx)(I,{children:n})},B=function(e){Object(O.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(h.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrementFeedback=function(n){e.setState((function(e){return Object(j.a)({},n,e[n]+1)}))},e}return Object(g.a)(t,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return this.state.good/this.countTotalFeedback()*100}},{key:"render",value:function(){var e=this.state,n=e.good,t=e.neutral,c=e.bad;return Object(x.jsxs)(F,{children:[Object(x.jsxs)(M,{title:"Please leave feedback",children:[" ",Object(x.jsx)(T,{options:Object.keys(this.state),onLeaveFeedback:this.handleIncrementFeedback})]}),Object(x.jsx)(M,{title:"Statistics",children:0===this.countTotalFeedback()?Object(x.jsx)(z,{message:"There is no feedback"}):Object(x.jsx)(P,{good:n,neutral:t,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),t}(r.Component);s.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsxs)(d.a,{theme:u,children:[Object(x.jsx)(b,{}),Object(x.jsx)(B,{})]})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.57eccd9e.chunk.js.map