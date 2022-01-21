(this["webpackJsonpreact-countries"]=this["webpackJsonpreact-countries"]||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=(a(18),a(19),a(7)),i=a.n(c),u=a(10),s=a(1),p=a(2),d=a(3),m=a(4),f=a(5),h=a.n(f),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.country;return r.a.createElement("div",{className:h.a.card},r.a.createElement("div",{className:h.a.cardTittle},r.a.createElement("div",null,e.name," - ",e.alpha3Code)),r.a.createElement("div",{className:h.a.cardContent},r.a.createElement("img",{className:h.a.img,src:e.flag,alt:""}),r.a.createElement("ul",null,r.a.createElement("li",null,"Capital: ",r.a.createElement("strong",null,e.capital)),r.a.createElement("li",null,"Idioma: ",r.a.createElement("strong",null,e.language)),r.a.createElement("li",null,"C\xf3digo DDI: ",r.a.createElement("strong",null,e.callingCodes)),r.a.createElement("li",null,"Moeda: ",r.a.createElement("strong",null,e.currencies)))))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.countries;return r.a.createElement("div",{className:h.a.flex},e.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(g,{country:e}))})))}}]),a}(n.Component),v=a(6),E=a.n(v),b=a(11),_=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.region;return r.a.createElement(b.a,{width:"600px",height:"400px",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:e,options:{title:"Continentes"},rootProps:{"data-testid":"1"}})}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleInput=function(t){var a=t.target.value;e.props.onChangeFilter(a)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.filter,a=e.countCountries,n=e.population,l=e.region;return r.a.createElement("div",{className:E.a.header},r.a.createElement("div",{className:E.a.flexColumn},r.a.createElement("input",{style:{width:"400px"},type:"text",value:t,onChange:this.handleInput}),r.a.createElement("span",{className:E.a.country},"| Pa\xedses: ",r.a.createElement("strong",null,a)),r.a.createElement("span",{className:E.a.population},"| Popula\xe7\xe3o: ",r.a.createElement("strong",null,n))),r.a.createElement("div",null,r.a.createElement("div",{className:E.a.charts},r.a.createElement(_,{region:l}))))}}]),a}(n.Component);function O(e){var t=0,a=0,n=0,r=0,l=0,o=0;return e.find((function(e){return function(e){switch(e){case"Africa":t++;break;case"Americas":a++;break;case"Asia":n++;break;case"Europe":r++;break;case"Oceania":l++;break;default:o++}}(e.region)})),[["COntinente","Quantidade"],["Africa",t],["Americas",a],["Asia",n],["Europa",r],["Oceania",l],["Polar",o]]}var j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).countPopulation=function(e){return e.reduce((function(e,t){return e+t.population}),0)},e.handleChangeFilter=function(t){e.setState({filter:t});var a=t.toLowerCase(),n=e.state.allCountries.filter((function(e){return e.nameLowerCase.includes(a)})),r=e.countPopulation(n),l=O(n);e.setState({filteredCountries:n,totalPopulation:r,region:l})},e.state={allCountries:[],filteredCountries:[],filter:"",totalPopulation:"",region:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/all");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.map((function(e){var t=e.numericCode,a=e.translations,n=e.flag,r=e.population,l=e.capital,o=e.region,c=e.languages,i=e.callingCodes,u=e.alpha3Code,s=e.currencies;return{id:t,name:a.br,nameLowerCase:a.br.toLowerCase(),flag:n,population:r,capital:l,region:o,language:c[0].name,callingCodes:i[0],alpha3Code:u,currencies:s[0].name}})),r=this.countPopulation(n),l=O(n),this.setState({allCountries:n,filteredCountries:n,totalPopulation:r,region:l});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state,a=t.filter,n=t.filteredCountries,l=t.totalPopulation,o=t.region;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{style:{textAlign:"center"}},"React Countries"),r.a.createElement(y,{filter:a,onChangeFilter:this.handleChangeFilter,countCountries:n.length,population:(e=l,new Intl.NumberFormat("pt-BR").format(e)),region:o}),r.a.createElement(C,{countries:n}))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))},5:function(e,t,a){e.exports={flex:"country_flex__P5fGJ",card:"country_card__fpK9d",cardChild:"country_cardChild__4bYl_",cardTittle:"country_cardTittle__R1hCx",cardContent:"country_cardContent__3LDkX",img:"country_img__Ib8Fr"}},6:function(e,t,a){e.exports={header:"header_header__v9FKw",flexColumn:"header_flexColumn__3O2BI",country:"header_country__2MhPY",population:"header_population__1dNSj"}}},[[13,1,2]]]);
//# sourceMappingURL=main.e73cccd5.chunk.js.map