(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ShareLink"],{"0780":function(e,t,n){},"940f":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=n("b7e7"),a=n.n(o),l=n("16cd"),i=n.n(l),r=function(e){return Object(c["pushScopeId"])("data-v-5821cbf9"),e=e(),Object(c["popScopeId"])(),e},s={class:"shareLink-container"},d=r((function(){return Object(c["createElementVNode"])("img",{class:"bg-img",src:a.a,alt:""},null,-1)})),u={class:"shareLink-content"},b={class:"download-box"},p={class:"connect-popup-content"},m={class:"tab-container"},j={class:"tab-button"},O={for:"tab-item-mobile",class:"tab-item"},f={for:"tab-item-wallet",class:"tab-item"},V={class:"tip"},g=r((function(){return Object(c["createElementVNode"])("img",{class:"icon-wallet",src:i.a,alt:"",width:"50",srcset:""},null,-1)})),h={class:"middle"},v=r((function(){return Object(c["createElementVNode"])("div",{class:"text"}," (MetaMask / TokenPocket / imToken / Bitpie...) ",-1)})),k={class:"tip"},N=r((function(){return Object(c["createElementVNode"])("svg",{class:"iconfont icon-wallet","aria-hidden":"true"},[Object(c["createElementVNode"])("use",{"xlink:href":"#icon-Wallet"})],-1)})),w={class:"middle"},y=Object(c["createTextVNode"])("Wallet Connect "),E={class:"text"},C={class:"text"};function $(e,t,n,o,a,l){var i=Object(c["resolveComponent"])("van-button"),r=Object(c["resolveComponent"])("van-icon"),$=Object(c["resolveComponent"])("van-field"),x=Object(c["resolveComponent"])("van-form"),A=Object(c["resolveComponent"])("van-popup");return Object(c["openBlock"])(),Object(c["createElementBlock"])("section",s,[d,Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",b,[Object(c["createVNode"])(i,{round:"",block:"",type:"primary",onClick:t[0]||(t[0]=Object(c["withModifiers"])((function(t){return e.$store.state.downloadVisible=!0}),["stop"]))},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("clickDownload"))+" Android",1)]})),_:1}),Object(c["createVNode"])(i,{class:"skip-button",url:"/token",round:"",block:"",plain:"",type:"primary"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("skip")),1)]})),_:1})])]),Object(c["createVNode"])(A,{show:a.dialogVisible,"onUpdate:show":t[9]||(t[9]=function(e){return a.dialogVisible=e}),"close-on-click-overlay":!1,round:"",position:"center",teleport:"#app",class:"connect-popup"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("div",j,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"radio",id:"tab-item-mobile","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.tabActive=e}),value:"1",class:"tab-radio-input"},null,512),[[c["vModelRadio"],a.tabActive]]),Object(c["createElementVNode"])("label",O,Object(c["toDisplayString"])(e.$t("importAddress")),1),Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"radio",id:"tab-item-wallet","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.tabActive=e}),value:"2",class:"tab-radio-input"},null,512),[[c["vModelRadio"],a.tabActive]]),Object(c["createElementVNode"])("label",f,Object(c["toDisplayString"])(e.$t("walletSignup")),1)])]),Object(c["createVNode"])(x,{class:"form-container",onSubmit:l.bindReg},{default:Object(c["withCtx"])((function(){return["2"===a.tabActive?(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:0},[""===l.currentAccount?(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:0},[a.exit?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,class:"content",onClick:t[3]||(t[3]=Object(c["withModifiers"])((function(){return l.connectMetaMask&&l.connectMetaMask.apply(l,arguments)}),["stop"]))},[Object(c["createElementVNode"])("div",V,[g,Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("h5",null,Object(c["toDisplayString"])(e.$t("browserWallet")),1),v])]),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(r,{name:"arrow"})])])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",{class:"content",onClick:t[4]||(t[4]=Object(c["withModifiers"])((function(){return l.getWalletConnect&&l.getWalletConnect.apply(l,arguments)}),["stop"]))},[Object(c["createElementVNode"])("div",k,[N,Object(c["createElementVNode"])("div",w,[Object(c["createElementVNode"])("h5",null,[y,Object(c["createElementVNode"])("span",E,Object(c["toDisplayString"])(e.$t("walletMobile")),1)]),Object(c["createElementVNode"])("div",C,Object(c["toDisplayString"])(e.$t("connectWalletconnect")),1)])]),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(r,{name:"arrow"})])])],64)):(Object(c["openBlock"])(),Object(c["createBlock"])($,{key:1,class:"input-box",modelValue:l.currentAccountSplit,"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.currentAccountSplit=e}),disabled:"",label:e.$t("address")},null,8,["modelValue","label"]))],64)):(Object(c["openBlock"])(),Object(c["createBlock"])($,{key:1,class:"input-box",name:"address",modelValue:a.address,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.address=e}),label:e.$t("address"),placeholder:e.$t("enterAddress"),clearable:"",rules:[{required:!0,message:e.$t("cannotBeEmpty")},{pattern:a.addressPattern,message:e.$t("pleaseEnterCorrectAddress"),trigger:"onBlur"}]},null,8,["modelValue","label","placeholder","rules"])),Object(c["createVNode"])($,{class:"input-box",modelValue:l.regCode,"onUpdate:modelValue":t[7]||(t[7]=function(e){return l.regCode=e}),disabled:"",label:e.$t("invitationCode")},null,8,["modelValue","label"]),Object(c["createVNode"])(i,{class:"submit-button",type:"primary","native-type":"submit",disabled:""===l.currentAccount&&"2"===a.tabActive,loading:a.loading,block:""},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("confirm")),1)]})),_:1},8,["disabled","loading"]),Object(c["createVNode"])(i,{block:"",plain:"",type:"primary",class:"submit-button",onClick:t[8]||(t[8]=Object(c["withModifiers"])((function(e){return a.dialogVisible=!1}),["stop"]))},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("skip")),1)]})),_:1})]})),_:1},8,["onSubmit"])])]})),_:1},8,["show"])])}n("ac1f"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("d3b7");var x=n("ddd2"),A=n("9052"),S=n("365c"),B={name:"ShareLink",data:function(){return{exit:!!window.ethereum,dialogVisible:!0,tabActive:"1",address:"",addressPattern:/(^(T|t)[0-9a-zA-Z]{33}$)|(^[0-9a-zA-Z]{43,44}$)|(^0x[0-9a-zA-Z]{40}$)/,loading:!1}},computed:{currentAccount:function(){return this.$store.state.currentAccount||""},currentAccountSplit:function(){return this.currentAccount.replace(new RegExp("(.{6})(.+)(.{4})"),"$1...$3")},shareInfo:function(){return this.$store.state.shareInfo},regCode:function(){return this.$route.params.regCode}},watch:{},mounted:function(){},methods:{connectMetaMask:function(){Object(x["a"])().then((function(e){e&&console.log(e)})).catch((function(e){console.log(e)}))},getWalletConnect:function(){Object(A["b"])().then((function(e){e&&console.log(e)})).catch((function(e){console.log(e)}))},bindReg:function(){var e=this;this.loading=!0;var t="2"===this.tabActive?this.currentAccount:this.address;Object(S["h"])(t,this.regCode).then((function(t){t&&(e.$notify({type:"success",message:e.$t("bindSuccess")}),e.dialogVisible=!1)})).catch((function(t){e.$notify({type:"danger",message:t.response.data.msg}),console.log(t)})).finally((function(){e.loading=!1}))}}},M=(n("ff2c6"),n("6b0d")),D=n.n(M);const T=D()(B,[["render",$],["__scopeId","data-v-5821cbf9"]]);t["default"]=T},b7e7:function(e,t,n){e.exports=n.p+"static/img/邀请好友点击链接.e437a3c5.png"},ff2c6:function(e,t,n){"use strict";n("0780")}}]);