(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i,r=n(0),o=n.n(r),a=n(17),s=n.n(a),l=n(10),c=n(1),u=n(2),h=n(7),d=n(6),v=n(8),f=n(3),p=n(13);!function(e){e[e.Up=1]="Up",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.Right=4]="Right"}(i||(i={}));var g,m=Object.keys(i).filter(function(e){return isNaN(Number(e))}).map(function(e){return i[e]}),b=function(){function e(t,n,i){Object(c.a)(this,e),this.point=void 0,this.points=void 0,this.moves=void 0,this.point=t,this.points=n,this.moves=i}return Object(u.a)(e,[{key:"addMove",value:function(e,t){this.points.push(this.point),this.moves.push(t),this.point=e}},{key:"getNextMoves",value:function(){var e=this;return m.map(function(t){return{move:t,history:e.clone()}})}},{key:"clone",value:function(){return new e(this.point,Object(p.a)(this.points),Object(p.a)(this.moves))}},{key:"printMoves",value:function(){return this.moves.map(function(e){return i[e]}).join(", ")}}]),e}();!function(e){e[e.Start=1]="Start",e[e.Win=2]="Win",e[e.Block=3]="Block"}(g||(g={}));var w=function(){function e(t,n,i,r,o){Object(c.a)(this,e),this.width=void 0,this.height=void 0,this.start=void 0,this.win=void 0,this.blocks=void 0,this.blocksByKey={},this.width=t,this.height=n,this.start=i,this.win=r,this.blocks=o,this.blocksByKey=this.blocks.reduce(function(e,t){return e[t.toString()]=g.Block,e},{})}return Object(u.a)(e,[{key:"isWinningPoint",value:function(e){return this.win.equals(e)}},{key:"isIllegalPoint",value:function(e){var t=this.blocksByKey,n=this.width,i=this.height;return!!t[e.toString()]||e.x<0||e.x>=n||e.y<0||e.y>=i}},{key:"applyMove",value:function(e,t){for(var n=e,r=[{move:t,point:n}];;){var o=n.clone();if(t===i.Left)o.x--;else if(t===i.Right)o.x++;else if(t===i.Up)o.y--;else{if(t!==i.Down)throw new Error("unexpected move: ".concat(t));o.y++}if(this.isIllegalPoint(o))break;if(r.push({move:t,point:o}),n=o,this.isWinningPoint(n))break}return{point:n,traveled:r}}},{key:"solve",value:function(){for(var e=this,t={},n=[new b(this.start,[],[])];n.length;){var i=n.shift(),r=i.point.toString();if(!t[r]){if(t[r]=!0,this.isWinningPoint(i.point))return i;i.getNextMoves().forEach(function(t){var i=t.move,r=t.history,o=e.applyMove(r.point,i).point;r.addMove(o,i),n.push(r)})}}return null}},{key:"print",value:function(){for(var e=this.width,t=this.height,n=this.start,i=this.win,r=this.blocks,o=[],a=function(t){for(var a=[],s=function(e){var o="_";i.x===e&&i.y===t&&(o="W"),n.x===e&&n.y===t&&(o="S"),r.forEach(function(n){n.x===e&&n.y===t&&(o="0")}),a.push(o)},l=0;l<e;l++)s(l);o.push(a)},s=0;s<t;s++)a(s);return o.map(function(e){return e.join("")}).join("\n")}}]),e}(),y=function e(t,n){Object(c.a)(this,e),this.level=void 0,this.soln=void 0,this.level=t,this.soln=n},k=function(){function e(t){Object(c.a)(this,e),this.level=void 0,this.soln=void 0,this.hero=void 0,this.level=t.level,this.soln=t.soln,this.hero=new b(this.level.start,[],[])}return Object(u.a)(e,[{key:"reset",value:function(){this.hero=new b(this.level.start,[],[])}},{key:"moveHero",value:function(e){var t=this.level,n=this.hero,i=t.applyMove(n.point,e);return n.addMove(i.point,e),i}}]),e}(),O=function(){function e(t,n){Object(c.a)(this,e),this.x=void 0,this.y=void 0,this.x=t,this.y=n}return Object(u.a)(e,[{key:"clone",value:function(){return new e(this.x,this.y)}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}},{key:"equals",value:function(e){return this.toString()===e.toString()}}],[{key:"fromString",value:function(t){var n=t.split(",");return new e(parseFloat(n[0]),parseFloat(n[1]))}}]),e}();function j(e){for(var t=[],n=0;n<e;n++)t.push(n);return t}function x(e,t){return e+Math.random()*(t-e)}var E,L,M,S=function(){function e(t,n){Object(c.a)(this,e),this.spaces=[];for(var i=0;i<n;i++)for(var r=0;r<t;r++)this.spaces.push(new O(r,i))}return Object(u.a)(e,[{key:"pop",value:function(){var e=Math.floor(Math.random()*this.spaces.length);return this.spaces.splice(e,1)[0]}}]),e}(),I=function(){function e(t){Object(c.a)(this,e),this.settings=void 0,this.settings=t}return Object(u.a)(e,[{key:"tryGenerateLevel",value:function(e){var t=this.settings,n=t.width,i=t.height,r=t.minMovesOptions,o=new S(n,i),a=o.pop(),s=o.pop(),l=j(e).map(function(e){return o.pop()}),c=new w(n,i,s,a,l),u=c.solve();return u&&r.includes(u.moves.length)?new y(c,u):null}},{key:"generateLevels",value:function(e,t){for(var n=this.settings,i=n.width,r=n.height,o=n.blockPercentMin,a=n.blockPercentMax,s=[],l=0,c=Math.min(t/10,100);s.length<e&&l<t;)for(var u=i*r*x(o,a),h=0;s.length<e&&h<c;h++){l+=1;var d=this.tryGenerateLevel(u);d&&s.push(d)}return s}}]),e}(),R=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(c.a)(this,e),this.started=void 0,this.milliseconds=void 0,this.started=new Date,this.milliseconds=t}return Object(u.a)(e,[{key:"getElapsed",value:function(){return(new Date).getTime()-this.started.getTime()}},{key:"getRemaining",value:function(){return this.milliseconds-this.getElapsed()}},{key:"getPercent",value:function(){return this.getRemaining()/this.milliseconds}},{key:"addTime",value:function(e){this.milliseconds+=e}},{key:"formatElapsed",value:function(){return Math.floor(this.getElapsed()/1e3).toString(10)}},{key:"formatRemaining",value:function(){return Math.floor(this.getRemaining()/1e3).toString(10)}}]),e}(),_=n(11),D=n.n(_),P=n(15),T=n(5);!function(e){e[e.Easy=1]="Easy",e[e.Medium=2]="Medium",e[e.Hard=3]="Hard",e[e.Infinite=4]="Infinite"}(M||(M={}));var A=(E={},Object(T.a)(E,M.Easy,"music/visager_village_dreaming.mp3"),Object(T.a)(E,M.Medium,"music/visager_the_final_road.mp3"),Object(T.a)(E,M.Hard,"music/visager_the_great_forest.mp3"),Object(T.a)(E,M.Infinite,"music/visager_dark_sanctum.mp3"),E),B=(L={},Object(T.a)(L,M.Easy,{gridSize:1,minMoves:7,levelsPerTier:1,totalLevels:5}),Object(T.a)(L,M.Medium,{gridSize:1.5,minMoves:12,levelsPerTier:1,totalLevels:10}),Object(T.a)(L,M.Hard,{gridSize:2,minMoves:12,levelsPerTier:2,totalLevels:15}),Object(T.a)(L,M.Infinite,{gridSize:1.5,minMoves:7,levelsPerTier:3,totalLevels:20,secondsPerLevel:5}),L),z=function(){function e(t,n){var i=this;Object(c.a)(this,e),this.dimensions=void 0,this.difficulty=void 0,this.totalLevels=void 0,this.progression=void 0,this.loaded=!1,this.onLoad=void 0,this.registerLoaded=function(){},this.dimensions=t,this.difficulty=n,this.progression=B[n],this.onLoad=new Promise(function(e,t){i.registerLoaded=function(){return e(i)}}),this.totalLevels=this.progression.totalLevels}return Object(u.a)(e,[{key:"displayName",value:function(){return M[this.difficulty]}},{key:"isInfinite",value:function(){return this.difficulty===M.Infinite}},{key:"createStopwatch",value:function(){var e=1e3*(60-(this.progression.secondsPerLevel||0));return new R(this.isInfinite()?e:void 0)}},{key:"generateLevels",value:function(){throw new Error("base class")}},{key:"loadLevel",value:function(e){throw new Error("base class")}}]),e}(),G=function(e){function t(e,n){var i;return Object(c.a)(this,t),(i=Object(h.a)(this,Object(d.a)(t).call(this,e,n))).levelsByMoves=void 0,i.levelsByMoves=j(i.progression.totalLevels/i.progression.levelsPerTier).reduce(function(e,t){return e[t+i.progression.minMoves]=[],e},{}),i}return Object(v.a)(t,e),Object(u.a)(t,[{key:"getLevelKeys",value:function(){return Object.keys(this.levelsByMoves).map(parseFloat).sort(function(e,t){return e<t?-1:e>t?1:0})}},{key:"generateLevels",value:function(){var e=this.dimensions,t=this.levelsByMoves,n=this.progression,i=n.gridSize,r=n.levelsPerTier,o=this.getLevelKeys().filter(function(e){return t[e].length<r});if(0===o.length)return this.loaded=!0,void this.registerLoaded();var a=new O(e.x*i,e.y*i);new I({width:a.x,height:a.y,blockPercentMin:.05,blockPercentMax:.3,minMovesOptions:o}).generateLevels(500,500).forEach(function(e){var n=t[e.soln.moves.length];n&&n.length<r&&n.push(e)})}},{key:"loadLevel",value:function(){var e=Object(P.a)(D.a.mark(function e(t){var n,i=this;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(;!this.loaded;)this.generateLevels();return n=this.getLevelKeys().reduce(function(e,t){return e.push.apply(e,Object(p.a)(i.levelsByMoves[t])),e},[]),e.abrupt("return",n[t]);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(z),W=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e,M.Infinite))).levels=[],n.lastIndex=0,n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"generateLevels",value:function(){var e,t=this.dimensions,n=this.levels,i=this.progression,r=this.lastIndex,o=i.gridSize;if(n.length>r+10)return this.loaded=!0,void this.registerLoaded();var a,s,l=new O(t.x*o,t.y*o),c=new I({width:l.x,height:l.y,blockPercentMin:.05,blockPercentMax:.3,minMovesOptions:(a=i.minMoves,s=10,j(s).map(function(e){return e+a}))});(e=this.levels).push.apply(e,Object(p.a)(c.generateLevels(10,10))),n.length>r+10&&console.log("infinite loaded!")}},{key:"loadLevel",value:function(){var e=Object(P.a)(D.a.mark(function e(t){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(;t>this.levels.length;)this.generateLevels();return this.lastIndex=t,e.abrupt("return",this.levels[t]);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(z),C=function(){function e(t){Object(c.a)(this,e),this.loaders=void 0,this.loaders=[new W(t)].concat(Object(p.a)([M.Easy,M.Medium,M.Hard].map(function(e){return new G(t,e)})))}return Object(u.a)(e,[{key:"getLoaderByDifficulty",value:function(e){return this.loaders.filter(function(t){return t.difficulty===e})[0]}},{key:"loadInBackground",value:function(){var e=this.loaders.filter(function(e){return!e.loaded})[0];e&&(e.generateLevels(),e.loaded&&console.log("loaded:",M[e.difficulty]))}}]),e}(),H=function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).elmsByDiff={},n.desiredVolume=.5,n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.elmsByDiff,n=this.desiredVolume,i=this.props.store,r=i.audio,o=i.world;if(r.playing||(this.elmsByDiff={}),o){o!==e.store.world&&this.stopAll();var a=t[o.difficulty];a&&(a.volume!==n&&(a.volume=n),a.play())}}},{key:"stopElm",value:function(e){e.pause(),e.currentTime=0}},{key:"stopAll",value:function(){var e=this,t=this.elmsByDiff;Object.keys(t).forEach(function(n){return e.stopElm(t[n])})}},{key:"render",value:function(){var e=this;return this.props.store.audio.playing&&Object.keys(A).map(function(t){return o.a.createElement("audio",{key:t,loop:!0,src:A[t],ref:function(n){return e.elmsByDiff[t]=n}})})}}]),t}(o.a.Component),U=Object(l.b)(function(e){return{store:e}})(H),K=n(4),q=n(18),F=n(9),N="SET_GAME_OVER",V="SET_LEVEL",J="SET_TIMER",Y="SET_WORLD",X="TOGGLE_MUSIC",Q=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},Z={audio:{playing:!Q()},isMobile:Q(),secondsRemaining:0,secondsElapsed:0,level:0,world:void 0,isGameOver:!1};var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(F.a)({},e,{isGameOver:!0});case V:var n=t.payload.level;return Object(F.a)({},e,{level:n});case J:var i=t.payload.stopwatch;return Object(F.a)({},e,{secondsElapsed:i&&i.formatElapsed(),secondsRemaining:i&&i.formatRemaining()});case Y:var r=t.payload.world;return Object(F.a)({},e,{isGameOver:!1,world:r,audio:Object(F.a)({},e.audio)});case X:return Object(F.a)({},e,{audio:Object(F.a)({},e.audio,{playing:!e.audio.playing})});default:return e}},ee=function(e){return{type:J,payload:{stopwatch:e}}},te=function(e){return{type:Y,payload:{world:e}}},ne=function(){return{type:X,payload:{}}},ie=Object(q.b)($);function re(){var e=Object(f.a)(["\n  height: 4vh;\n  width: auto;\n  min-width: 2em;\n  padding: 0 0.75em;\n  margin: 0 0.3em;\n"]);return re=function(){return e},e}function oe(){var e=Object(f.a)(["\n  cursor: pointer;\n\n  border-color: var(--foreground);\n  font-style: normal;\n  color: var(--foreground);\n\n  &:hover {\n    color: var(--background);\n    background-color: var(--foreground);\n  }\n"]);return oe=function(){return e},e}function ae(){var e=Object(f.a)(["\n  width: 4em;\n  padding: 0.5em;\n  border-radius: 1em;\n\n  border: 2px solid grey;\n  font-style: italic;\n  color: grey;\n  background-color: var(--background);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n\n"]);return ae=function(){return e},e}function se(){var e=Object(f.a)(["\n  flex-direction: column;\n"]);return se=function(){return e},e}function le(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: stretch;\n  flex-wrap: nowrap;\n"]);return le=function(){return e},e}function ce(){var e=Object(f.a)(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n  height: 100vh;\n\n  background-color: var(--background);\n"]);return ce=function(){return e},e}var ue=K.a.div(ce()),he=K.a.div(le()),de=Object(K.a)(he)(se()),ve=K.a.div(ae()),fe=Object(K.a)(ve)(oe()),pe=Object(K.a)(fe)(re());function ge(){var e=Object(f.a)(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: url('img/snow_loose.gif');\n  background-size: contain;\n  background-repeat: none;\n"]);return ge=function(){return e},e}function me(){var e=Object(f.a)(["\n  position: relative;\n"]);return me=function(){return e},e}function be(){var e=Object(f.a)(["\n  height: 10vh;\n"]);return be=function(){return e},e}function we(){var e=Object(f.a)(["\n  height: 10vh;\n  font-family: monospace;\n  font-size: 1.2em;\n  font-weight: bold;\n"]);return we=function(){return e},e}function ye(){var e=Object(f.a)(["\n  width: 100%;\n  margin: 0px;\n"]);return ye=function(){return e},e}function ke(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: nowrap;\n"]);return ke=function(){return e},e}var Oe=K.a.div(ke()),je=Object(K.a)(he)(ye()),xe=Object(K.a)(je)(we()),Ee=Object(K.a)(je)(be()),Le=K.a.div(me()),Me=K.a.div(ge()),Se=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.gm,n=e.toggleMusic,i=this.props.store,r=i.isMobile,a=i.world,s=i.level,l=i.secondsRemaining,c=i.secondsElapsed;return o.a.createElement(Oe,null,o.a.createElement(xe,null,o.a.createElement(de,null,o.a.createElement("div",null,"Level ",s+1)),o.a.createElement(de,null,o.a.createElement("div",null,a&&a.isInfinite()?l:c,"s"))),o.a.createElement(Le,{onClick:t.mouseMove},this.props.children,o.a.createElement(Me,null)),o.a.createElement(Ee,null,o.a.createElement(de,null,o.a.createElement(pe,{onClick:t.clickReset},"reset level")),!r&&o.a.createElement(de,null,o.a.createElement(pe,{onClick:n},"music is ",this.props.store.audio.playing?"on":"off")),o.a.createElement(de,null,o.a.createElement(pe,{onClick:t.clickToggleGrid},"toggle grid"))))}}]),t}(o.a.Component),Ie=Object(l.b)(function(e){return{store:e}},{toggleMusic:ne})(Se);function Re(e){var t=new Image,n={image:t,loaded:new Promise(function(e,n){t.onload=function(){return e(!0)}})};return t.src=e,n}var _e,De={heroLeft:Re("sprite/snowman_left.png"),heroRight:Re("sprite/snowman_right.png"),groundIce1:Re("sprite/ground_ice_1.png"),groundIce2:Re("sprite/ground_ice_2.png"),groundIce3:Re("sprite/ground_ice_3.png"),groundIce4:Re("sprite/ground_ice_4.png"),groundIce5:Re("sprite/ground_ice_5.png"),groundIce6:Re("sprite/ground_ice_6.png"),groundIce7:Re("sprite/ground_ice_7.png"),groundIce8:Re("sprite/ground_ice_8.png"),groundIce9:Re("sprite/ground_ice_9.png"),treeLight:Re("sprite/tree_light.png"),treeHeavy:Re("sprite/tree_heavy.png"),igloo:Re("sprite/igloo.png")},Pe=Object(F.a)({},De,{loaded:Promise.all(Object.values(De).map(function(e){return e.loaded})).then(function(){return!0})});function Te(){var e=Object(f.a)(["\n  margin: 0px;\n  margin-top: 0.5em;\n"]);return Te=function(){return e},e}function Ae(){var e=Object(f.a)(["\n  margin: 0.5rem;\n"]);return Ae=function(){return e},e}function Be(){var e=Object(f.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: nowrap;\n\n  background-color: var(--offset);\n  border-radius: 1em;\n"]);return Be=function(){return e},e}function ze(){var e=Object(f.a)(["\n  margin-bottom: 0px;\n"]);return ze=function(){return e},e}function Ge(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return Ge=function(){return e},e}window.Sprites=Pe;var We=K.a.div(Ge()),Ce=K.a.h1(ze()),He=K.a.div(Be()),Ue=K.a.h2(Ae()),Ke=K.a.h3(Te()),qe=(_e={spritesLoaded:!1},Object(T.a)(_e,M.Easy,!1),Object(T.a)(_e,M.Medium,!1),Object(T.a)(_e,M.Hard,!1),Object(T.a)(_e,M.Infinite,!1),_e),Fe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state=Object(F.a)({},qe),n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.reset(),Pe.loaded.then(function(){e.setState({spritesLoaded:!0}),console.log("sprites loaded")})}},{key:"reset",value:function(){var e=this;this.setState(Object(F.a)({},qe),function(){e.props.gm.worldLoader.loaders.forEach(function(t){t.onLoad.then(function(){e.setState(Object(T.a)({},t.difficulty,!0))})})})}},{key:"loadWorld",value:function(e){e.loaded&&(this.props.gm.setWorld(e),this.reset())}},{key:"render",value:function(){var e=this,t=this.props.store,n=this.state,i=this.props.gm.worldLoader;if(t.world)return"";var r=[M.Easy,M.Medium,M.Hard,M.Infinite];return o.a.createElement(ue,null,o.a.createElement(Ce,null,o.a.createElement("em",null,"ice slide puzzle"),o.a.createElement("br",null),o.a.createElement("img",{alt:"",src:"sprite/igloo.png"}),o.a.createElement("img",{alt:"",src:"sprite/snowman_left.png"})),o.a.createElement(We,null,r.map(function(e){return i.getLoaderByDifficulty(e)}).map(function(t){return o.a.createElement(He,{key:t.difficulty},o.a.createElement(Ue,null,t.displayName()),o.a.createElement("div",null,t.isInfinite()?"\u221e":t.totalLevels," levels"),o.a.createElement(Ke,null,n[t.difficulty]?o.a.createElement(fe,{onClick:function(){return e.loadWorld(t)}},"PLAY"):o.a.createElement(ve,null,"loading")))})),o.a.createElement("br",null),o.a.createElement(he,null,o.a.createElement(pe,{onClick:function(){return e.props.toggleMusic()}},"music is ",this.props.store.audio.playing?"on":"off")),o.a.createElement("br",null),o.a.createElement("div",null,"made by ",o.a.createElement("a",{href:"https://twitter.com/mpaulweeks"},"@mpaulweeks"),o.a.createElement("br",null),"assets by ",o.a.createElement("a",{href:"https://www.kenney.nl"},"Kenney"),o.a.createElement("br",null),"music by ",o.a.createElement("a",{href:"https://visager.bandcamp.com/album/songs-from-an-unmade-world"},"Visager")))}}]),t}(o.a.Component),Ne=Object(l.b)(function(e){return{store:e}},{toggleMusic:ne})(Fe),Ve=function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onReset=function(){n.props.gm.unsetWorld()},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.gm,n=e.store,i=n.world,r=n.isGameOver;return i&&r?o.a.createElement(ue,null,o.a.createElement(he,null,o.a.createElement("h1",null,i.isInfinite()?"\n              game over! you managed to complete ".concat(t.currentLevelIndex-1," levels\n            "):"\n              you win! your score is ".concat(n.secondsElapsed,". try to get it lower!\n            "))),o.a.createElement(he,null,o.a.createElement(fe,{onClick:this.onReset},"RESET"))):""}}]),t}(o.a.Component),Je=Object(l.b)(function(e){return{store:e}})(Ve),Ye="white",Xe="black",Qe="rgba(0, 0, 0, 0.5)",Ze={ArrowLeft:i.Left,ArrowRight:i.Right,ArrowUp:i.Up,ArrowDown:i.Down},$e=function(){function e(){var t=this;Object(c.a)(this,e),this.dispatch=ie.dispatch,this.worldLoader=void 0,this.worldDimensions=void 0,this.canvasDimensions=void 0,this.canvasElm=void 0,this.ctx=void 0,this.world=void 0,this.stopwatch=new R,this.currentLevel=void 0,this.currentLevelIndex=0,this.spriteFacing=void 0,this.loadedAssets=void 0,this.pendingAnimations=[],this.shouldDrawGrid=!1,this.clickReset=function(){t.currentLevel&&t.currentLevel.reset()},this.clickToggleGrid=function(){t.shouldDrawGrid=!t.shouldDrawGrid},this.mouseMove=function(e){var n=e.target.getBoundingClientRect(),r=e.clientX-n.left,o=e.clientY-n.top,a=r/n.width,s=o/n.height,l=a>s,c=a+s<1,u=c&&l&&i.Up||!c&&l&&i.Right||!c&&!l&&i.Down||c&&!l&&i.Left;u&&t.handleMove(u)},this.clickUp=function(){t.handleMove(i.Up)},this.clickDown=function(){t.handleMove(i.Down)},this.clickLeft=function(){t.handleMove(i.Left)},this.clickRight=function(){t.handleMove(i.Right)};for(var n=document.body.clientHeight,r=document.body.clientWidth,o=n>r?new O(8,10):new O(10,8),a=.8*document.body.clientHeight,s=a*o.x/o.y;s>r;)o.x-=1,s=a*o.x/o.y;this.worldDimensions=o,this.worldLoader=new C(this.worldDimensions),this.canvasDimensions=new O(s,a),window.addEventListener("keydown",function(e){var n=Ze[e.code]||void 0;n&&t.handleMove(n),"KeyR"===e.code&&t.clickReset(),"KeyN"===e.code&&t.nextLevel()}),this.loop()}return Object(u.a)(e,[{key:"loop",value:function(){var e=Object(P.a)(D.a.mark(function e(){var t,n,i=this;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.world,n=this.stopwatch,!t){e.next=7;break}return e.next=4,this.draw();case 4:t.isInfinite()?(t.generateLevels(),n.getRemaining()!==ie.getState().secondsRemaining&&this.dispatch(ee(n)),n.getRemaining()<0&&this.triggerGameOver()):n.getElapsed()!==ie.getState().secondsElapsed&&this.dispatch(ee(n)),e.next=8;break;case 7:ie.getState().isGameOver||this.worldLoader.loadInBackground();case 8:window.requestAnimationFrame(function(){return i.loop()});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setup",value:function(e){this.canvasElm=e,e.width=this.canvasDimensions.x,e.height=this.canvasDimensions.y,this.ctx=e.getContext("2d")}},{key:"setWorld",value:function(e){this.worldLoader=new C(this.worldDimensions),this.world=e,this.currentLevelIndex=0,this.stopwatch=e.createStopwatch(),this.nextLevel(),this.dispatch(te(e))}},{key:"unsetWorld",value:function(){this.world=void 0,this.dispatch(te(void 0))}},{key:"triggerGameOver",value:function(){this.world=void 0,this.dispatch({type:N,payload:{}})}},{key:"handleMove",value:function(e){var t=this.currentLevel;if(t){var n=t.moveHero(e);this.spriteFacing=[i.Left,i.Right].includes(e)?e:this.spriteFacing===i.Right?i.Left:i.Right,this.animateMove(n),t.level.isWinningPoint(n.point)&&this.nextLevel()}}},{key:"nextLevel",value:function(){var e=Object(P.a)(D.a.mark(function e(){var t,n,i;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.currentLevelIndex,n=this.world){e.next=3;break}throw new Error("todo this should be impossible");case 3:return e.next=5,n.loadLevel(t);case 5:i=e.sent,this.currentLevel=i&&new k(i),this.currentLevel?(console.log(this.currentLevel.soln.printMoves()),this.dispatch((r=this.currentLevelIndex,{type:V,payload:{level:r}})),this.currentLevelIndex+=1,this.stopwatch.addTime(1e3*(n.progression.secondsPerLevel||0))):this.triggerGameOver();case 8:case"end":return e.stop()}var r},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"animateMove",value:function(e){var t,n=e.traveled.slice(0,-1).map(function(e,t,n){return{traveled:e,stopwatch:new R(1e3*(1+t/n.length))}});(t=this.pendingAnimations).push.apply(t,Object(p.a)(n))}},{key:"drawSprite",value:function(e,t,n,i){var r=this.canvasElm,o=this.ctx,a=this.currentLevel,s=r.width,l=r.height,c=s/a.level.width,u=l/a.level.height;i=i||1,o.drawImage(e.image,t*c+c*(1-i)/2,n*u+u*(1-i)/2,c*i,u*i)}},{key:"drawSpriteWithOpacity",value:function(e,t,n,i,r){var o=this.ctx,a=o.globalAlpha;o.globalAlpha=e,this.drawSprite(t,n,i,r),o.globalAlpha=a}},{key:"draw",value:function(){var e=Object(P.a)(D.a.mark(function e(){var t,n,r,o,a,s,l,c,u,h,d,v=this;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.canvasElm,n=this.ctx,r=this.currentLevel,t&&n){e.next=3;break}return e.abrupt("return");case 3:return o=t.width,a=t.height,e.next=6,Pe.loaded;case 6:if(r){e.next=8;break}return e.abrupt("return");case 8:for(s=o/r.level.width,l=a/r.level.height,n.fillStyle=Ye,n.fillRect(0,0,o,a),c=0;c<r.level.height;c++)for(u=0;u<r.level.width;u++)this.drawSprite(Pe.groundIce5,u,c);if(this.shouldDrawGrid){for(n.strokeStyle=Xe,h=1;h<r.level.height;h++)n.beginPath(),n.moveTo(0,h*l),n.lineTo(o,h*l),n.stroke();for(d=1;d<r.level.width;d++)n.beginPath(),n.moveTo(d*s,0),n.lineTo(d*s,a),n.stroke()}this.pendingAnimations=this.pendingAnimations.filter(function(e){return e.stopwatch.getRemaining()>0}),this.pendingAnimations.forEach(function(e){var t=e.traveled,n=e.stopwatch.getPercent();v.drawSpriteWithOpacity(n,t.move===i.Left?Pe.heroLeft:Pe.heroRight,t.point.x,t.point.y,1.2)}),this.drawSprite(Pe.igloo,r.level.win.x,r.level.win.y),r.level.blocks.forEach(function(e){var t=(e.x+e.y)%2===0?Pe.treeLight:Pe.treeHeavy;v.drawSprite(t,e.x,e.y)}),n.fillStyle=Qe,n.beginPath(),n.arc((r.hero.point.x+.5)*s,(r.hero.point.y+.5)*l,s/2,0,2*Math.PI),n.fill(),this.drawSprite(this.spriteFacing===i.Left?Pe.heroLeft:Pe.heroRight,r.hero.point.x,r.hero.point.y,1.2);case 23:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}();function et(){var e=Object(f.a)(["\n  height: 80vh;\n"]);return et=function(){return e},e}function tt(){var e=Object(f.a)(["\n  max-width: 50vh;\n  margin: 0px auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: nowrap;\n"]);return tt=function(){return e},e}var nt=K.a.div(tt()),it=K.a.canvas(et()),rt=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).canvasRef=void 0,n.gm=new $e,n.canvasRef=o.a.createRef(),n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.canvasRef.current;e&&this.gm.setup(e)}},{key:"render",value:function(){var e=this.gm;return o.a.createElement(nt,null,o.a.createElement(U,null),o.a.createElement(Ie,{gm:e},o.a.createElement(it,{ref:this.canvasRef})),o.a.createElement(Ne,{gm:e}),o.a.createElement(Je,{gm:e}))}}]),t}(o.a.Component),ot=Object(l.b)(function(e){return{store:e}})(rt);n(41);var at={testLevelGen:function(){var e=new w(5,5,new O(1,1),new O(3,3),[new O(2,4)]);console.log(e.print()),console.log(e.solve());var t=new w(5,5,new O(1,1),new O(3,3),[new O(4,0)]);console.log(t.print()),console.log(t.solve()),new I(5,5,.1,5).generateLevels(10,1e3).forEach(function(e){console.log(e.level.print()),console.log("Solution:",e.soln.printMoves()),console.log("\n")})}};window.scripts=at,s.a.render(o.a.createElement(l.a,{store:ie},o.a.createElement(ot,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.f813ddc3.chunk.js.map