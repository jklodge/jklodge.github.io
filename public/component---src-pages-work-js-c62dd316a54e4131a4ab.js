(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{209:function(e,a,t){"use strict";t.r(a);var c=t(245),i=t(0),r=t.n(i),s=t(214),n=t(225);a.default=function(){var e=c.data;return r.a.createElement("main",null,r.a.createElement(s.a,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(n.a,null))}},212:function(e,a,t){var c;e.exports=(c=t(215))&&c.default||c},213:function(e,a,t){"use strict";var c=t(0),i=t.n(c),r=t(79),s=t.n(r);t.d(a,"a",function(){return s.a});t(212),t(15).default.enqueue,i.a.createContext({})},214:function(e,a,t){"use strict";var c=t(213),i=t(0),r=t.n(i),s=function(e){var a=e.siteTitle;return r.a.createElement("header",{style:{marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0vh auto",maxWidth:"100%",padding:"9vh 6vw 6vh",textAlign:"center",display:"flex"}},r.a.createElement(c.a,{to:"/about/",className:"tab",style:{color:"#ef5d5d",textDecoration:"none",fontWeight:"bold",fontSize:"15px",flex:"1 1 0px",textAlign:"left"}},"ABOUT"),r.a.createElement("h2",{style:{margin:0}},r.a.createElement(c.a,{to:"/",className:"tab",style:{color:"#ef5d5d",textDecoration:"none",fontSize:"24px",flex:"0 0 auto"}},a)),r.a.createElement(c.a,{to:"/work/",className:"tab",style:{color:"#ef5d5d",textDecoration:"none",fontWeight:"bold",fontSize:"15px",flex:"1 1 0px",textAlign:"right"}},"WORK")),r.a.createElement("div",{className:"contact"},r.a.createElement("a",{target:"_blank",href:"https://github.com/jklodge"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/jessicalodge/"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{target:"_blank",href:"mailto:jessicaklodge@gmail.com?subject=Jess Lodge"},r.a.createElement("i",{className:"fas fa-envelope-open"}))))};s.defaultProps={siteTitle:""},a.a=s},215:function(e,a,t){"use strict";t.r(a);t(36);var c=t(0),i=t.n(c),r=t(101);a.default=function(e){var a=e.location,t=e.pageResources;return t?i.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},216:function(e,a,t){"use strict";t(5),t(6),t(2),t(47),t(100),t(222);var c=t(20);a.__esModule=!0,a.default=void 0;var i,r=c(t(80)),s=c(t(81)),n=c(t(142)),l=c(t(141)),o=c(t(0)),d=c(t(24)),f=function(e){var a=(0,l.default)({},e),t=a.resolutions,c=a.sizes,i=a.critical;return t&&(a.fixed=t,delete a.resolutions),c&&(a.fluid=c,delete a.sizes),i&&(a.loading="eager"),a.fluid&&(a.fluid=E([].concat(a.fluid))),a.fixed&&(a.fixed=E([].concat(a.fixed))),a},u=function(e){var a=e.fluid,t=e.fixed;return(a&&a[0]||t&&t[0]).src},g=Object.create({}),m=function(e){var a=f(e),t=u(a);return g[t]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,A="undefined"!=typeof window,b=A&&window.IntersectionObserver,h=new WeakMap;function w(e){return e.map(function(e){var a=e.src,t=e.srcSet,c=e.srcSetWebp,i=e.media,r=e.sizes;return o.default.createElement(o.default.Fragment,{key:a},c&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:c,sizes:r}),o.default.createElement("source",{media:i,srcSet:t,sizes:r}))})}function E(e){var a=[],t=[];return e.forEach(function(e){return(e.media?a:t).push(e)}),a.concat(t)}function S(e){return e.map(function(e){var a=e.src,t=e.media,c=e.tracedSVG;return o.default.createElement("source",{key:a,media:t,srcSet:c})})}function v(e){return e.map(function(e){var a=e.src,t=e.media,c=e.base64;return o.default.createElement("source",{key:a,media:t,srcSet:c})})}function y(e,a){var t=e.srcSet,c=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(a?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(a?c:t)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var I=function(e,a){var t=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var a=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),a())}})},{rootMargin:"200px"})),i);return t&&(t.observe(e),h.set(e,a)),function(){t.unobserve(e),h.delete(e)}},k=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",c=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",n=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?y(e,!0):"")+y(e)}).join("")+"<img "+o+s+n+t+c+a+r+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var a=e.src,t=e.imageVariants,c=e.generateSources,i=e.spreadProps,r=o.default.createElement(z,(0,l.default)({src:a},i));return t.length>1?o.default.createElement("picture",null,c(t),r):r},z=o.default.forwardRef(function(e,a){var t=e.sizes,c=e.srcSet,i=e.src,r=e.style,s=e.onLoad,d=e.onError,f=e.loading,u=e.draggable,g=(0,n.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,l.default)({sizes:t,srcSet:c,src:i},g,{onLoad:s,onError:d,ref:a,loading:f,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});z.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=A&&m(a),t.addNoScript=!(a.critical&&!a.fadeIn),t.useIOSupport=!p&&b&&!a.critical&&!t.seenBefore;var c=a.critical||A&&(p||!t.useIOSupport);return t.state={isVisible:c,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=o.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,s.default)((0,s.default)(t))),t.handleRef=t.handleRef.bind((0,s.default)((0,s.default)(t))),t}(0,r.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=m(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})})}))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=f(e),t=u(a),g[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=f(this.props),a=e.title,t=e.alt,c=e.className,i=e.style,r=void 0===i?{}:i,s=e.imgStyle,n=void 0===s?{}:s,d=e.placeholderStyle,u=void 0===d?{}:d,g=e.placeholderClassName,m=e.fluid,p=e.fixed,A=e.backgroundColor,b=e.durationFadeIn,h=e.Tag,E=e.itemProp,y=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:R?1:0,transition:O?"opacity "+b+"ms":"none"},n),N="boolean"==typeof A?"lightgray":A,U={transitionDelay:b+"ms"},W=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&U,n,u),C={title:a,alt:this.state.isVisible?"":t,style:W,className:g};if(m){var V=m,Q=V[0];return o.default.createElement(h,{className:(c||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(Q.srcSet)},o.default.createElement(h,{style:{width:"100%",paddingBottom:100/Q.aspectRatio+"%"}}),N&&o.default.createElement(h,{title:a,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&U)}),Q.base64&&o.default.createElement(x,{src:Q.base64,spreadProps:C,imageVariants:V,generateSources:v}),Q.tracedSVG&&o.default.createElement(x,{src:Q.tracedSVG,spreadProps:C,imageVariants:V,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,w(V),o.default.createElement(z,{alt:t,title:a,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:y,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:t,title:a,loading:y},Q,{imageVariants:V}))}}))}if(p){var F=p,X=F[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:X.width,height:X.height},r);return"inherit"===r.display&&delete M.display,o.default.createElement(h,{className:(c||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(X.srcSet)},N&&o.default.createElement(h,{title:a,style:(0,l.default)({backgroundColor:N,width:X.width,opacity:this.state.imgLoaded?0:1,height:X.height},O&&U)}),X.base64&&o.default.createElement(x,{src:X.base64,spreadProps:C,imageVariants:F,generateSources:v}),X.tracedSVG&&o.default.createElement(x,{src:X.tracedSVG,spreadProps:C,imageVariants:F,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,w(F),o.default.createElement(z,{alt:t,title:a,width:X.width,height:X.height,sizes:X.sizes,src:X.src,crossOrigin:this.props.crossOrigin,srcSet:X.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:y,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:t,title:a,loading:y},X,{imageVariants:F}))}}))}return null},a}(o.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:O,sizes:L,fixed:d.default.oneOfType([O,d.default.arrayOf(O)]),fluid:d.default.oneOfType([L,d.default.arrayOf(L)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var N=R;a.default=N},222:function(e,a,t){"use strict";t(143)("fixed",function(e){return function(){return e(this,"tt","","")}})},225:function(e,a,t){"use strict";var c=t(226),i=t(0),r=t.n(i),s=t(216),n=t.n(s);t(219);a.a=function(){var e=c.data;return r.a.createElement("main",null,r.a.createElement("div",{className:"workPage"}),r.a.createElement("div",{className:"cardContainer"},r.a.createElement("div",{className:"border"}),r.a.createElement("h1",{className:"title"},"Adobe Experience Manager"),r.a.createElement("div",{className:"work-container"},r.a.createElement("div",{className:"work-card"},r.a.createElement("a",{href:"https://www.selfridges.com/GB/en/features/articles/selfridges-loves/the-rolling-stones-at-selfridges/",target:"_blank"},r.a.createElement(n.a,{className:"workImage",fluid:e.rollingstonesWork.childImageSharp.fluid}))),r.a.createElement("br",null),r.a.createElement("div",{className:"work-card"},r.a.createElement("a",{href:"https://www.selfridges.com/QA/en/features/articles/radical-luxury/radical-luxury-at-selfridges/https://www.selfridges.com/QA/en/features/articles/radical-luxury/radical-luxury-at-selfridges/",target:"_blank"},r.a.createElement(n.a,{fluid:e.radicalluxWork.childImageSharp.fluid})))),r.a.createElement("br",null),r.a.createElement("h1",{className:"title"},"Technical Liasion"),r.a.createElement("div",{className:"work-container"},r.a.createElement("div",{className:"work-card"},r.a.createElement("a",{href:"https://artsexperiments.withgoogle.com/poemportraits",target:"_blank"},r.a.createElement(n.a,{fluid:e.poemportraitsWork.childImageSharp.fluid}))),r.a.createElement("div",{className:"work-card"},r.a.createElement("a",{href:"https://learndigital.withgoogle.com/activate",target:"_blank"},r.a.createElement(n.a,{fluid:e.activateWork.childImageSharp.fluid}))),r.a.createElement("br",null)),r.a.createElement("h1",{className:"title"},"React/Redux"),r.a.createElement("div",{className:"work-container"},r.a.createElement("div",{className:"work-card"},r.a.createElement("a",{href:"https://www.powwownow.co.uk/sign-in",target:"_blank"},r.a.createElement(n.a,{fluid:e.powwowWork.childImageSharp.fluid})))),r.a.createElement("br",null),r.a.createElement("h1",{className:"title"},"React/Node/Express"),r.a.createElement("div",{className:"work-container"},r.a.createElement("div",{className:"work-card"},r.a.createElement("a",{href:"http://www.crimeno.com",target:"_blank"},r.a.createElement(n.a,{fluid:e.crimenoWork.childImageSharp.fluid}))),r.a.createElement("br",null),r.a.createElement("div",{className:"work-card"},r.a.createElement("a",{href:"https://yearbook-awards.herokuapp.com/",target:"_blank"},r.a.createElement(n.a,{fluid:e.gaysWork.childImageSharp.fluid})))),r.a.createElement("br",null),r.a.createElement("h1",{className:"title"},"P5.js Canvas"),r.a.createElement("div",{className:"work-container"},r.a.createElement("div",{className:"work-card"},r.a.createElement("a",{href:"https://jesslodge.herokuapp.com/",target:"_blank"},r.a.createElement(n.a,{fluid:e.crumbsWork.childImageSharp.fluid})))),r.a.createElement("br",null)))}},226:function(e){e.exports={data:{crimenoWork:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABd0lEQVQoz31Sf0+DQAzd9/80S4wao39tH8D4jz9i4qbI5ODuOEAc3AHPtg7GjLHhpUevvL6WLkxR4z8bhgFaaxhj0Pf9yV0IAW3bwnsvvmkaLPii6we0voPvegQGvYfDuSOSoigEIyH7rusEA+XObcFBbSxe4wSxyvD+oRDtFHZ0jpMUqT4qY7VsURTh4uIS1zdXeHi8n+4YorBtPRqS3JL0z/oLNaGh2L7hWJiSR8JMp7i9e8TTyzPe1Sux8XMgFIXWkTqNKMmwSw0y48QzUm1lRnOFNjdw+g25pftUT3EhlMHSMOv6U+bknIMjX1UlqrJEs9/L8OeEVWnhzBvSLCHCGIfwseVx0IHUKlsiMYW0Ov+r85aLwkER0WbzhETFY8ZRISvL81zWQykl4LO1VuK8DlLwoJTzVRJju42QZWYim2Y47lBVVZJcUquMPbX7l/184+GDp3M4XRuu/BuyX1SNCdfrNVarFc7Oz7FcLqXgz4i6k/wR3/KLBd92P4GUAAAAAElFTkSuQmCC",aspectRatio:1.9697802197802199,src:"/static/9e9709120cc1ee628a55e48321a9cd00/54c56/crimeno.png",srcSet:"/static/9e9709120cc1ee628a55e48321a9cd00/16256/crimeno.png 175w,\n/static/9e9709120cc1ee628a55e48321a9cd00/73897/crimeno.png 350w,\n/static/9e9709120cc1ee628a55e48321a9cd00/54c56/crimeno.png 700w,\n/static/9e9709120cc1ee628a55e48321a9cd00/c0798/crimeno.png 1050w,\n/static/9e9709120cc1ee628a55e48321a9cd00/cd9a9/crimeno.png 1400w,\n/static/9e9709120cc1ee628a55e48321a9cd00/da5e4/crimeno.png 1434w",sizes:"(max-width: 700px) 100vw, 700px"}}},gaysWork:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACJUlEQVQozz2SWW/bMBCEqZO6SEqWdVmXTzmx49xn0SSt06IF+tD+/z8zXdFFHwZYkMvhN0uyP4cBH58f8HR3QBxxBNyC59rgjgXXsWEwBvZPpmHAsW1at/R+wG2owMFEuCiUizLhYNs2xqZN0BUSszTCVAVIBEkGCHwXm77D8e0NT4+PyKepXlPi1JPFISo60+YC81JgU0uwRWahSy2UykQmTAjPgO8wLdNgeO9b/P444unTC3ZnA0wi9WyGkBtIAhO5GM9a6FMb68IB27ccw4xjVXBUsY2UGlRgIfJMyMCGDD00mdQkgmpJEZVvYRLZyKWDPnO1zhsPh84Du5qfik3pok0daiLTyP5vOs5u38XYtUrXwjeRhOPFZKgcLAlkmbvYkeE1ebH3vaDCx1lNpNVISUMOic43dKwx4qZW2DZK14IuiSlqGlmoJ45OdknnLwjqfuWD/bxR+HEb434d6uht6qKa+CgSH9PYp8guUunpx1L0C8Y6jz2U1FNPXGxrD297iS8XEq+7COzbtcSvhwTvO6kJ+yLEdl5gWFT0whW6WYZ2VqCrS1KOeZNj1RU4W5RYlCH2FPV4qfD9SuF5CMGOB4Gv5P68jWiOHF0eoJ4G9Kc8ouFE5eovEkc+BD1IIjgyxYkw0L0Lmt8dpXvdCbyMhjfLU/5zQh83N02Ci6El9VjPa6wXLVFV6EnrZYdh1WG7bHC+ajCvYopt0/w9XPY+bsnrL2F7+VIrIj0xAAAAAElFTkSuQmCC",aspectRatio:1.9765840220385675,src:"/static/ead7dabcdc5fc72c58e9a51783e62359/54c56/gays.png",srcSet:"/static/ead7dabcdc5fc72c58e9a51783e62359/16256/gays.png 175w,\n/static/ead7dabcdc5fc72c58e9a51783e62359/73897/gays.png 350w,\n/static/ead7dabcdc5fc72c58e9a51783e62359/54c56/gays.png 700w,\n/static/ead7dabcdc5fc72c58e9a51783e62359/c0798/gays.png 1050w,\n/static/ead7dabcdc5fc72c58e9a51783e62359/cd9a9/gays.png 1400w,\n/static/ead7dabcdc5fc72c58e9a51783e62359/5c7ee/gays.png 1435w",sizes:"(max-width: 700px) 100vw, 700px"}}},crumbsWork:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAAEVUlEQVQ4y11U609bZRzuf2JiTDTOFSi00NPLOe2BUlou5dqBymXAUmQMUG5G5mAwZQ4rAoozyiaTERiXbc5sulucRPlgtD09vSMkIzMql23ZBxO/PP7O2wKbH5687zkn53mf5/d7n58qZLQhIhYiklOEWGElgloBslqPwMEsBlnNQU41QE7hENSYEEw3E0xP7QlpRgT0IlYKyqEKZlrx++FmhAQHgoYchMx2hEy5iBZVIn7oMMJ0WJAODfF5CGjMBNM+0pIrkQaINHRQD1WsogaPl1fw58SX2PnmBnaufYeH12/h4fd3sDW7iEd37mHn6nU8/mEZoTI3/KRUIgIp1QhJsEHicxJ75R1BJWeJiFfWI5xXigipWm17C7HXGhBr9CBaVYdYWTXWPO3YnJ6DLOTRzwZIpFQiZVJGck1CUauSybJssDEETXb4XtGRRVpNFvzGCfCTLd/LWqbMl2KAj2rs50kZWZR0AgKcSHsizLQw66qIowz/bu1ga24JW5cuY3vpGrZv3Majiwv4Z/4q/uruI0Id/EQUpR9XCWH60acQZhFJrpMRJxQmLf8xPIb1rnew1t6NB31D2Ox8F9LAacwOncFCaRVC1Ok4ES7qLZjgLLhFVuNKQ4jUrzREb923rNTE92I6fn0hFb7n1Vh57gD6XlLDpE6BRquFzmRCh86AIVGEzSFCYzJC5AUMUjl8moRav0FkdWWE0QI3Nsnug55+bPQOYuH0MN77eARnvF4Mf0AK5+fh/fQThtGRDzEx+hFcLhcyeB7VvAV3SW2EuuzfVRimGm6fm4afLI6Pj2P28hLOT32Fi3NzGB0bw7nJSUxPTWHmwgXMzsxAlmXU1NXCLPAwkOoCwYKbRBoiMoVU5aP6hA9k4oo6E0ayY+A4FGgzkZ/FwUIqsuhZa+CgoZUzm+HxeFBht8HNm9l3g2jFJZ2ZNYwRKlclUvo61l2V8FZWwV5RjvbScvyY68JdwkyeC5POYnyR7cR5hwvzohM/iwV4v8QNzulAr57IkuokZjm7EBv9Q7jf04eNjuP4un8QPQMn0dv+Jm63dWGzsRVPTnnxd30LnnSeQPz4KXzedxL9I160FhbjFyXjSmP2LjZdmxCdGDBSfim3yzQkql0lyCkpRnFREU7Y87HoLMHNIjdGrLlwWwWkWgQUc0bc0xgRVqymPZWUMBGsH+vGak0T1lp7cP9IG6ItnTjb0oaGlqOo7+zAGz3d6BocQOmRBljzbWjhrfgpg2fd9dEdDIh2lmd2sZUaxqsasFrbxDIddddhva4Z0WoPFqsb8ZnnKN4+9Cr6a+tx1tOMb5uOIUaZD1Iz/crd0/IsMVJy8qhCvAOxilqEHeVsWgTS+cRKCuK0j7HuUY3oOUaIpprY990msBynGJ8dDkEiVZTuT47EKFKSwKKlnM5Z4c+279VrDxn/ix7LozLjUpJjSZltSl1yHIn97qhSiNKMz5LtThmrPbGnd/8Bro2C7wr2aokAAAAASUVORK5CYII=",aspectRatio:1.0298245614035089,src:"/static/10be480f9f43dfc4edb1d700072ba9f0/d4228/crumbs.png",srcSet:"/static/10be480f9f43dfc4edb1d700072ba9f0/16256/crumbs.png 175w,\n/static/10be480f9f43dfc4edb1d700072ba9f0/73897/crumbs.png 350w,\n/static/10be480f9f43dfc4edb1d700072ba9f0/d4228/crumbs.png 587w",sizes:"(max-width: 587px) 100vw, 587px"}}},rollingstonesWork:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAC8UlEQVQoz4WPa0yTVxjH3w/DCwxESZQhbuoSTTQLkUXnhaXgZEQFZWK72qZiadUKCG2hb22ZTlHAS5ZIIkaXDYnGxIg3zKbBS6J+YSqJqPMWMZpeeLsCQ+QDBYw/z9sMs2+e5Jf/c/k/zzlHGhoaQmV4ePgDIyMjDAwM0N3dTW9vL319ffT09ETzwcHBaH/UOzqvEolEkMLhcNSoaigUivL/uKsrSEjpErGCoigf6mqs+kYvUuP+/n6k0VeoBb8/gM/nIxgMEggECAj1+cVSpUfU/hF9f7Sv9nw+v9CgWNgbnVcXq7+S+Oi5BpFmoQ8+buUdUs0uFy7Zi1t24/VW4XTKVFTIOBxO7HYH9q3rKS8xYC+zityJQ8UhI7s9wudGlj3U7d0n5ly0tbUhFepLsJq8zFvopaD4Mtn6c2TmbkeSEgVJgsmCZMGU/2oppGUexii38r3pNOlZDVjcV8kz/M6tm/eRqtwnONd0i8Kt97DVRag+BjbvdWI/nU/chG8ZH6+SQVyCqhqSU3Ox7QyzvRHsB4fY4FEorf2XXfUKnZ2vkYz6Omp2tqLb1I7RFcRV/xatrYVPxi0mNj6LcfFLiYnTMFYwJnYZk6bkYfa8oLj2DRt2hDFUvMTgeM56ewd/3VWQZqe5yM47id7WjrbsBZt3v0G/6SJfzbaQlOLks2QDMQnLiYnPIXFiPl/OcqKzP8ZUFcLo9ouZTnSlj9GsucGfV18hZSwoxVX0ExVlzazeeB9DpR/TxhaqjPVMndPEtC9KSEzSEDNhLSmpZmam1WAtb6fI0cnqzU/JtzykuPA42oJGWlp9SJr5VrLS87BqPegtV8i1/E1ObhPb1uygQNdIxqoGtCaZ1EW/MX1uHQmTDZw62sG+2idkrruDbG6mdVs1lfk/c+HiM6Svvymi3Gxj2XcHSM88i+aH6+RkH2L3j3vZ4zjPynUNmJ3VzFj8KwnTDzL1cyO3/+jgyP7bLFlxiV9cJzi9RUaXUcmZlke8BzhCmEF+XzhxAAAAAElFTkSuQmCC",aspectRatio:1.7258382642998027,src:"/static/2ac8e0f6df25c78d87092c947cc52870/54c56/rollingstones.png",srcSet:"/static/2ac8e0f6df25c78d87092c947cc52870/16256/rollingstones.png 175w,\n/static/2ac8e0f6df25c78d87092c947cc52870/73897/rollingstones.png 350w,\n/static/2ac8e0f6df25c78d87092c947cc52870/54c56/rollingstones.png 700w,\n/static/2ac8e0f6df25c78d87092c947cc52870/24ffc/rollingstones.png 875w",sizes:"(max-width: 700px) 100vw, 700px"}}},poemportraitsWork:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAC8UlEQVQ4y21US08TYRSdH4Qi5dHHtKUvhtIHUB4LWGiogiGgIWgMC0QDhGiQrTHxERNcaEzcaKLyWhjDykTd6MpgWttS5psptCYqm+OZb9paEhcn597vnnu/c+dLq2Tam7HX1ozvFlpPI0NkiTzzHJFtaULOcQpZR5OMfzDOEHuMM4TUdrQg235GzlD2meSIPA/ynnbs+1zY9zpxUENcg64FcRAN4yDWJbkQUFEI+VBkrRj04oC9RadDDlYEA+Fqhc6bzIEkDsfHcDg5jsP0WRxdmkRlcQE/11ZRWbqJo5lpVFaWZFyen0N57irK165AcKA1w5qlGAwkmBh0KOF3w1A7YCaiMOnO7A7B7InApEMrN+jcgjXAUJ2yX8Zk22HVZT12tshb5WCuZPAzGJ0eO7YGcTUJS1vjmsPGpO62inpjI/6nq82wHDbard/Y6KBWa8hP6Bp6jdpA+6B6I9cyYxrM3hjMeLf93aL8fnxRmVvoDvObVr+nu+2Ea0W4+Aguhz2QD2L2J2CmkigN9qE0PMCX75UoDadkXhpK2flQv4Thc9Np40B3UO5uuFhwtvHV+BB+uoz30AXdaNq/uDfOl6fzZIKaTmo9dg9NCRcfi6wYnn4GHOKOsuBl7Cd8FGt0TPaSfWEy11NV6jjI7aMmQjB2qWTrXJO5IrxpJiyqo2Te7BkkkiymYAS44ugsSiNTXHOcK5+HoZ2jK+osPXWGp8/WV3NFBOZlInyXIbwXyNPkMfJFnk9AV2fIPFenoTsnIDxTds0/S914VZ+u9o9xYOQei/z5BG9DBG6Qb5GvU7AMve8Ofm19RmX7I8obn/B79wuM9H3obpoIr1K3SP0KeYFYlv2K3vMKIrQGoT2FiDyA6H4G0UUOraM48hx/8hWUvhkQX4s4PjqGPrsF3XuXuifUP6T2MfGI/euSFb33A/ToC+iJXeixbfJ76D1vbI5uItf1FoXYaxQS28hFXvLfZgcivgE9vkP9ls1xq+8d8038BdGDJqQvx0tgAAAAAElFTkSuQmCC",aspectRatio:1.2127659574468086,src:"/static/a0165e7c5275b50855325db4820bceca/4eee0/poemportraits.png",srcSet:"/static/a0165e7c5275b50855325db4820bceca/16256/poemportraits.png 175w,\n/static/a0165e7c5275b50855325db4820bceca/73897/poemportraits.png 350w,\n/static/a0165e7c5275b50855325db4820bceca/4eee0/poemportraits.png 684w",sizes:"(max-width: 684px) 100vw, 684px"}}},radicalluxWork:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAADMklEQVQoz12Sa0zbZRTG/5808ZsmOnDZErOZmaFLjDHxyxLnyIwTlI1sQZFNNq4FQotSQYUUHS0DHBlQqJTRCyuFcWu7wWhLCx0XM4txTJZ5yzRbzAxsC6NACyv9+babRn2TJyfveU5OnvOcI91aCBHFzfmHuPUIN+eD/HFnnas/3WbI44/F6P/fNf/H77dXkDpc8xgETKN3MboXaB/5MxYNrgXMnrt0eu9xdmzxH/5vzui+8x9EeZOol9YfbPAgvMH9pQDB0BrRFwyuEd6IcG9xicX7AVZWQ7HcajBEaG2d9XAkloti9VE+EFhmaWkZKdogEgmjKFGw941ETn1Vi65Fi06nJenNt/isrAyX20nvuR4u2G04BvqxGDtwjVxkeGiIC+cd9AvuE0U+leUlSHNzc4QjG+Tly3j8sSd46smnqaurxWg0kJF2hOxjWbS1fU1D/Ul6+3rpbm2mo1qFwWDCbDiDY9DGGb0euSwTjUqJNOoeJbAcIDe/INZs65bnMJvNTEz42L07kYJCOfUaDY1qlajJI2n/XvStDbRoW+jqNDLu9cZi1pHDFBdkIzmdTm78doOUA6lseiae57e/wInqaianJtmzZx/J7xxEWaqkvPRjlPJsBrvVaBuyUchLqFF/gcM2IJS2k34oiSLZcaQh4cMP167xuvAvPm4z27btwGBs5/qP18nNK2Jw0EFFhYqM9Ax0p76kVv0Rx44eIicri6KCXHStjbQ2nyb3wxSqqxRIHo+HsXEfCbteJm7TZl56cZfwqo+ff/2FqqoTOM4P43S6sFi6aBNebd+RQMrBw5SXKak7qcEsFqQXvma+9y4VZXIku91OT08PcfFbiH92Kzt3JmDq7OTK1Vn6+vqxWs8xPuYjOolGXSOuoZTiYgVNTadxjowQ3UG35SyZacl8WlqI9K3fz+z3M7z26iscTTvA+6nJmPSNuJ3DjAvll3wTfDM9TZe1i8pKFVaLlZycPLTaphg3PTnFgJgo9e1EZMfTH97hitiyTJZPbU09kxNTzF6Zxe+fEfBz+bKfmZnv8Pku4fWO4Xa5hbpm7DabUOdm1OViQNxh8Qf7+bwwg78Axwq2IImPHkMAAAAASUVORK5CYII=",aspectRatio:1.6059602649006623,src:"/static/403222083b6cf8ef702ee3ba7e47333e/54c56/radicallux.png",srcSet:"/static/403222083b6cf8ef702ee3ba7e47333e/16256/radicallux.png 175w,\n/static/403222083b6cf8ef702ee3ba7e47333e/73897/radicallux.png 350w,\n/static/403222083b6cf8ef702ee3ba7e47333e/54c56/radicallux.png 700w,\n/static/403222083b6cf8ef702ee3ba7e47333e/81fbf/radicallux.png 970w",sizes:"(max-width: 700px) 100vw, 700px"}}},powwowWork:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABB0lEQVQoz61SwWrDMAzN///AGJRBDzussP1Dod+wHctoy1hYYsVxY8eJ/Wa5SRcyp6caHrKQ9CQ9O9u+vUM3BlprGGPQNE28s7XWwjmHvu8j+N62LZRSkFLCcE3wbbDy5RW0WiOrqI4Jdf1nR7CfQjIuBFQpkOHOJ/PeYw4+3LWq5HU9IgIJQlmWQQ4dc1K1i4RMUhRFJGBLVEVduQHruEg4HXckY/H5QWwo7LoOPvgYYvPcfyunkvhFLZNy1zE2m2g64W0N3YVEb3eQDyuo5w3k4xO6w/FCEhqlVk2uPLSN5vz1A/Gxh/o8of/O4QfdsLDqdULWKwWiM/Jcog6fnilcIFrKneIXw5UOXbVqODgAAAAASUVORK5CYII=",aspectRatio:2.007102272727273,src:"/static/d45311b03e6bad00ffec4c29ccc90cbe/54c56/powwow.png",srcSet:"/static/d45311b03e6bad00ffec4c29ccc90cbe/16256/powwow.png 175w,\n/static/d45311b03e6bad00ffec4c29ccc90cbe/73897/powwow.png 350w,\n/static/d45311b03e6bad00ffec4c29ccc90cbe/54c56/powwow.png 700w,\n/static/d45311b03e6bad00ffec4c29ccc90cbe/c0798/powwow.png 1050w,\n/static/d45311b03e6bad00ffec4c29ccc90cbe/cd9a9/powwow.png 1400w,\n/static/d45311b03e6bad00ffec4c29ccc90cbe/bfcce/powwow.png 1413w",sizes:"(max-width: 700px) 100vw, 700px"}}},activateWork:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABmklEQVQoz42RzUsbURTF55/pX+Km0E0XbuoHlCJY6MaALiwoXTSLumwC/aC4tHUtaCt+RatRK36UQptOgsaMGhOSzuRlZt4MM/Prm5e03fbC5Vweh3PPPc8QwkU4DjIIkFIShCG+QikDAvXmeT6heoMEohTRHOF29RzHCVEUk18XPF9yMPiPav9qs7Nf5OjsK6Z1Tbl6zsHpF4qHu/i+pzlRKqzacJS7y1qNVquluk29fott2wrrNJpNTXZ9ScWscHFZ46ZR5+dFmaODLXIzT6iWv2tOEscajY4QWNaV2uTrk/XZ6lTf72GSJJrYODnG/rZD+6rE5+IZa6vLvJkdY/HdHK4neqKKawSByqPr4nQEHdElXdDRs9CCaXmex972LitLC1T2CuyvbPDy7WsmJ8aZyz6lZJr9PGOMQkmSeW9zXA3/ZpFu+tNpdZX4fD7Ls6mH/Nj8SGHtE5nHo8xOZ8i9ylE6t3qCqUMvSGiKGBkmfdv/PiPu59K8sRgZuMOLiSHM1Q/ks5PcG7rP3eEHDAw+YvvwpGcmivgNA2n5pmXPENwAAAAASUVORK5CYII=",aspectRatio:2.7423076923076923,src:"/static/cfe45f6374ac5eb604f66943fc154228/54c56/activate.png",srcSet:"/static/cfe45f6374ac5eb604f66943fc154228/16256/activate.png 175w,\n/static/cfe45f6374ac5eb604f66943fc154228/73897/activate.png 350w,\n/static/cfe45f6374ac5eb604f66943fc154228/54c56/activate.png 700w,\n/static/cfe45f6374ac5eb604f66943fc154228/c0798/activate.png 1050w,\n/static/cfe45f6374ac5eb604f66943fc154228/cd9a9/activate.png 1400w,\n/static/cfe45f6374ac5eb604f66943fc154228/fcb1d/activate.png 1426w",sizes:"(max-width: 700px) 100vw, 700px"}}},laptopWork:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAADOsAAAzrAE5r9DSAAACFElEQVQ4y52TS28SURSAR8b6L7RQTU3VjYUK7ozSwQm+YioQYejKShfWpZpSTbS4MzHR36CuDNKmk84YuqmJO6qdqasxJG4KJgKBAQLTOZ5zebSmNgZv8uXOmXvul3NfXL1eB9M0beptbACwMwiWZdk4H3A+c3DdgEk/ra/D8tIyyLIM8srKLhQjyuoqKIrCUBUVx2TI5XLQbDZ70o6w1WpZ5XIZIuFI5gh/+MLo8RNB17FhkXAeHRZHRlyiy+kUx0ZPimfGTiOnRPfZ8SDmXnz04OFnrJRkVl/YxkbC2cTsC27A9jyVek/CRqPR3lshE87cmXlNScn5+SHB7+cF/yQvXJrkLwcCfEAQ+KvBK/yNa9dZ/+7N2yHKXXz6bGm/sN0XvqKkj6rq8Iy7D6zqvM/HocPRFWZ6QnL9l9Dn/aew/YfwQzrtmHB7uH14JljvPef9q5AtuVarsT0slUqQuJtgQhznkUMIdwA0xlNuajGVoeuLsk6F1WqVnXKlUoFpKf5y0FNeSCbTvQqpOI6WWiwWbcMwYO7e/R/hUESNS/E1KSZliejtaDZ0K4SEs7FojP2LRaVsXJpem7o5pT5eePJze7sAhULBpqK4UukXGMZ32NR0W9O3QN/6Bjr1CMVfNzXY2PjCoG+tO9bP0XQ2N5/PA20b28PeW0Z2sHRrF3b7EdOqm6aFeSzem9N5wyagx6bt+w3mWXheytISTAAAAABJRU5ErkJggg==",aspectRatio:1.5408320493066257,src:"/static/5014a3d3ca63e644fcc2dec816a72f1a/54c56/laptop.png",srcSet:"/static/5014a3d3ca63e644fcc2dec816a72f1a/16256/laptop.png 175w,\n/static/5014a3d3ca63e644fcc2dec816a72f1a/73897/laptop.png 350w,\n/static/5014a3d3ca63e644fcc2dec816a72f1a/54c56/laptop.png 700w,\n/static/5014a3d3ca63e644fcc2dec816a72f1a/e9c7b/laptop.png 1000w",sizes:"(max-width: 700px) 100vw, 700px"}}},site:{siteMetadata:{title:"Jess Lodge"}}}}},245:function(e){e.exports={data:{site:{siteMetadata:{title:"Jess Lodge"}}}}}}]);
//# sourceMappingURL=component---src-pages-work-js-c62dd316a54e4131a4ab.js.map