(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33cbd7b1"],{"0bee":function(t,e,a){"use strict";a("8f38")},"20cd":function(t,e,a){"use strict";a("d2d3")},"216f":function(t,e,a){},"2fbe":function(t,e,a){"use strict";a("216f")},"32c9":function(t,e,a){"use strict";a("dad6")},"8f38":function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"category"}},[a("nav-bar",{staticClass:"category-bar"},[a("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),a("div",{staticClass:"category-content"},[a("div",{staticClass:"category-side-bar"},[a("category-side-bar",{attrs:{categoryList:t.categoryList},on:{handleCategoryClick:t.handleCategoryClick}})],1),a("scroll",{ref:"scroll",staticClass:"category-side-content"},[a("category-side-content",{attrs:{subCategoryList:t.subCategoryList}})],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("ul",t._l(t.categoryList,(function(e,n){return a("li",{key:n,class:{active:t.currentIndex===n},on:{click:function(a){return t.handleCategoryClick(n,e)}}},[t._v(t._s(e.title))])})),0)])},o=[],s={name:"CategorySideBar",data:function(){return{currentIndex:0,maitKey:""}},props:{categoryList:{type:Array,default:function(){return[]}}},components:{},watch:{maitKey:function(t){this.$emit("handleCategoryClick",t)}},methods:{handleCategoryClick:function(t,e){this.currentIndex=t,this.maitKey=e.maitKey}}},c=s,u=(a("0bee"),a("2877")),l=Object(u["a"])(c,i,o,!1,null,"22193781",null),y=l.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidecontent"},t._l(t.subCategoryList,(function(t,e){return a("category-side-content-item",{key:e,attrs:{subCategoryItem:t}})})),1)},g=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidecontent-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.subCategoryItem.image,expression:"subCategoryItem.image"}],attrs:{alt:"subcategory"},on:{load:t.imgLoad}}),a("p",[t._v(t._s(t.subCategoryItem.title))])])},b=[],C={name:"CategorySideContentItem",props:{subCategoryItem:{type:Object,default:function(){return{}}}},methods:{imgLoad:function(){this.$bus.$emit("itemImgLoad")}}},m=C,h=(a("2fbe"),Object(u["a"])(m,f,b,!1,null,"c6287934",null)),v=h.exports,p={name:"CategorySideContent",props:{subCategoryList:{type:Array,default:function(){return[]}}},components:{CategorySideContentItem:v}},L=p,_=(a("32c9"),Object(u["a"])(L,d,g,!1,null,"85be276a",null)),I=_.exports,k=a("a7ac"),S=a("5d17"),$=a("1bab");function w(){return Object($["a"])({url:"/category"})}function x(t){return Object($["a"])({url:"/subcategory",params:{maitKey:t}})}var K=a("eecb"),j={name:"Category",data:function(){return{categoryList:[],subCategoryMaitKey:"",subCategoryList:[]}},components:{NavBar:k["a"],CategorySideBar:y,CategorySideContent:I,Scroll:S["a"]},mixins:[K["b"]],created:function(){var t=this;w().then((function(e){return t.categoryList=e.data.category.list,t.subCategoryMaitKey=e.data.category.list[0].maitKey,t.subCategoryMaitKey})).then((function(e){t.getSubCategory(e)}))},deactivated:function(){this.$bus.$off("itemImgLoad",this.imgItemListener)},watch:{},methods:{handleCategoryClick:function(t){this.getSubCategory(t)},getSubCategory:function(t){var e=this;x(t).then((function(t){e.subCategoryList=t.data.list,e.$refs.scroll.scrollTo(0,0,500)}))}}},O=j,E=(a("20cd"),Object(u["a"])(O,n,r,!1,null,"69c7fc56",null));e["default"]=E.exports},d2d3:function(t,e,a){},dad6:function(t,e,a){}}]);
//# sourceMappingURL=chunk-33cbd7b1.b8f44380.js.map