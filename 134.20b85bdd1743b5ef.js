"use strict";(self.webpackChunkangular_base=self.webpackChunkangular_base||[]).push([[134],{4134:(h,s,A)=>{A.r(s),A.d(s,{BpmnModule:()=>b});var u=A(6895),i=A(8236),l=A(2188),d=A.n(l),p=A(9336),n=A(4650),m=A(2027);let c=(()=>{class e{constructor(){}ngOnInit(){let t=this.lf;t&&t.on("selection:selected",()=>{t.updateEditConfig({stopMoveGraph:!1})})}openSelection(){console.log("openSelection"),this.lf.updateEditConfig({stopMoveGraph:!0})}addStartNode(){this.lf.dnd.startDrag({type:"bpmn:startEvent",text:"\u5f00\u59cb",properties:{start:"\u5f00\u59cb"}})}addUserTask(){this.lf.dnd.startDrag({type:"bpmn:userTask",text:"\u7528\u6237"})}addServiceTask(){this.lf.dnd.startDrag({type:"bpmn:serviceTask",text:"\u7cfb\u7edf"})}addGateWay(){this.lf.dnd.startDrag({type:"bpmn:exclusiveGateway",text:"\u7f51\u5173"})}addEndNode(){this.lf.dnd.startDrag({type:"bpmn:endEvent",text:"\u7ed3\u675f"})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-bpmn-node-panel"]],inputs:{lf:"lf"},decls:25,vars:0,consts:[[1,"node-panel"],[1,"node-item",3,"mousedown"],[1,"node-item-icon","bpmn-selection"],[1,"node-label"],[1,"node-item-icon","bpmn-start"],[1,"node-item-icon","bpmn-user"],[1,"node-item-icon","bpmn-service"],[1,"node-item-icon","bpmn-gateway"],[1,"node-item-icon","bpmn-end"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div",1),n.NdJ("mousedown",function(){return o.openSelection()}),n._UZ(2,"div",2),n.TgZ(3,"span",3),n._uU(4,"\u9009\u533a"),n.qZA()(),n.TgZ(5,"div",1),n.NdJ("mousedown",function(){return o.addStartNode()}),n._UZ(6,"div",4),n.TgZ(7,"span",3),n._uU(8,"\u5f00\u59cb"),n.qZA()(),n.TgZ(9,"div",1),n.NdJ("mousedown",function(){return o.addUserTask()}),n._UZ(10,"div",5),n.TgZ(11,"span",3),n._uU(12,"\u7528\u6237"),n.qZA()(),n.TgZ(13,"div",1),n.NdJ("mousedown",function(){return o.addServiceTask()}),n._UZ(14,"div",6),n.TgZ(15,"span",3),n._uU(16,"\u7cfb\u7edf"),n.qZA()(),n.TgZ(17,"div",1),n.NdJ("mousedown",function(){return o.addGateWay()}),n._UZ(18,"div",7),n.TgZ(19,"span",3),n._uU(20,"\u7f51\u5173"),n.qZA()(),n.TgZ(21,"div",1),n.NdJ("mousedown",function(){return o.addEndNode()}),n._UZ(22,"div",8),n.TgZ(23,"span",3),n._uU(24,"\u7ed3\u675f"),n.qZA()()())},styles:[".node-panel[_ngcontent-%COMP%]{position:absolute;top:100px;left:10px;width:70px;padding:10px;background-color:#fff;box-shadow:0 0 10px 1px #e4e0db;border-radius:6px;text-align:center;z-index:101}.node-item[_ngcontent-%COMP%]{margin-bottom:10px}.node-item-icon[_ngcontent-%COMP%]{width:30px;height:30px;margin-left:10px;background-size:cover}.node-label[_ngcontent-%COMP%]{font-size:12px;margin-top:5px;-webkit-user-select:none;user-select:none}.bpmn-selection[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAOVJREFUOBGtVMENwzAIjKP++2026ETdpv10iy7WFbqFyyW6GBywLCv5gI+Dw2Bluj1znuSjhb99Gkn6QILDY2imo60p8nsnc9bEo3+QJ+AKHfMdZHnl78wyTnyHZD53Zzx73MRSgYvnqgCUHj6gwdck7Zsp1VOrz0Uz8NbKunzAW+Gu4fYW28bUYutYlzSa7B84Fh7d1kjLwhcSdYAYrdkMQVpsBr5XgDGuXwQfQr0y9zwLda+DUYXLaGKdd2ZTtvbolaO87pdo24hP7ov16N0zArH1ur3iwJpXxm+v7oAJNR4JEP8DoAuSFEkYH7cAAAAASUVORK5CYII=) center center no-repeat;cursor:grab}.bpmn-start[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==) center center no-repeat;cursor:grab}.bpmn-end[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAA1BJREFUOBFtVE1IVUEYPXOf+tq40Y3vPcmFIdSjIorWoRG0ERWUgnb5FwVhYQSl72oUoZAboxKNFtWiwKRN0M+jpfSzqJAQclHo001tKkjl3emc8V69igP3znzfnO/M9zcDcKT67azmjYWTwl9Vn7Vumeqzj1DVb6cleQY4oAVnIOPb+mKAGxQmKI5CWNJ2aLPatxWa3aB9K7/fB+/Z0jUF6TmMlFLQqrkECWQzOZxYGjTlOl8eeKaIY5yHnFn486xBustDjWT6dG7pmjHOJd+33t0iitTPkK6tEvjxq4h2MozQ6WFSX/LkDUGfFwfhEZj1Auz/U4pyAi5Sznd7uKzznXeVHlI/Aywmk6j7fsUsEuCGADrWARXXwjxWQsUbIupDHJI7kF5dRktg0eN81IbiZXiTESic50iwS+t1oJgL83jAiBupLDCQqwziaWSoAFSeIR3P5Xv5az00wyIn35QRYTwdSYbz8pH8fxUUAtxnFvYmEmgI0wYXUXcCCSpeEVpXlsRhBnCEATxWylL9+EKCAYhe1NGstUa6356kS9NVvt3DU2fd+Wtbm/+lSbylJqsqkSm9CRhvoJVlvKPvF1RKY/FcPn5j4UfIMLn8D4UYb54BNsilTDXKnF4CfTobA0FpoW/LSp306wkXM+XaOJhZaFkcNM82ASNAWMrhrUbRfmyeI1FvRBTpN06WKxa9BK0o2E4Pd3zfBBEwPsv9sQBnmLVbLEIZ/Xe9LYwJu/Er17W6HYVBc7vmuk0xUQ+pqxdom5Fnp55SiytXLPYoMXNM4u4SNSCFWnrVIzKG3EGyMXo6n/BQOe+bX3FClY4PwydVhthOZ9NnS+ntiLh0fxtlUJHAuGaFoVmttpVMeum0p3WEXbcll94l1wM/gZ0Ccczop77VvN2I7TlsZCsuXf1WHvWEhjO8DPtyOVg2/mvK9QqboEth+7pD6NUQC1HN/TwvydGBARi9MZSzLE4b8Ru3XhX2PBxf8E1er2A6516o0w4sIA+lwURhAON82Kwe2iDAC1Watq4XHaGQ7skLcFOtI5lDxuM2gZe6WFIotPAhbaeYlU4to5cuarF1QrcZ/lwrLaCJl66JBocYZnrNlvm2+MBCTmUymPrYZVbjdlr/BxlMjmNmNI3SAAAAAElFTkSuQmCC) center center no-repeat;cursor:grab}.bpmn-user[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==) center center no-repeat;cursor:grab}.bpmn-gateway[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAAHeEJUAAAAABGdBTUEAALGPC/xhBQAAAvVJREFUOBGNVEFrE0EU/mY3bQoiFlOkaUJrQUQoWMGePLX24EH0IIoHKQiCV0G8iE1covgLiqA/QTzVm1JPogc9tIJYFaQtlhQxqYjSpunu+L7JvmUTU3AgmTfvffPNN++9WSA1DO182f6xwILzD5btfAoQmwL5KJEwiQyVbSVZ0IgRyV6PTpIJ81E5ZvqfHQR0HUOBHW4L5Et2kQ6Zf7iAOhTFAA8s0pEP7AXO1uAA52SbqGk6h/6J45LaLhO64ByfcUzM39V7ZiAdS2yCePPEIQYvTUHqM/n7dgQNfBKWPjpF4ISk8q3J4nB11qw6X8l+FsF3EhlkEMfrjIer3wJTLwS2aCNcj4DbGxXTw00JmAuO+Ni6bBxVUCvS5d9aa04+so4pHW5jLTywuXAL7jJ+D06sl82Sgl2JuVBQn498zkc2bGKxULHjCnSMadBKYDYYHAtsby1EQ5lNGrQd4Y3v4Zo0XdGEmDno46yCM9Tk+RiJmUYHS/aXHPNTcjxcbTFna000PFJHIVZ5lFRqRpJWk9/+QtlOUYJj9HG5pVFEU7zqIYDVsw2s+AJaD8wTd2umgSCCyUxgGsS1Y6TBwXQQTFuZaHcd8gAGioE90hlsY+wMcs30RduYtxanjMGal8H5dMW67dmT1JFtYUEe8LiQLRsPZ6IIc7A4J5tqco3T0pnv/4u0kyzrYUq7gASuEyI8VXKvB9Odytv6jS/PNaZBln0nioJG/AVQRZvApOdhjj3Jt8QC8Im09SafwdBdvIpztpxWxpeKCC+EsFdS8DCyuCn2munFpL7ctHKp+Xc5cMybeIyMAN33SPL3ZR9QV1XVwLyzHm6Iv0/yeUuUb7PPlZC4D4HZkeu6dpF4v9j9MreGtMbxMMRLIcjJic9yHi7WQ3yVKzZVWUr5UrViJvn1FfUlwe/KYVfYyWRLSGNu16hR01U9IacajXPei0wx/5BqgInvJN+MMNtNme7ReU9SBbgntovn0kKHpFg7UogZvaZiOue/q1SBo9ktHzQAAAAASUVORK5CYII=) center center no-repeat;cursor:grab}.bpmn-service[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAm9JREFUSEu1lTFo1GAUx38vZ6sOooIoVsWKk23SCp1UkIrg0EHs0M5OOolY9NJz6XXpNaeidOhQB3G1oCLUTXRxK9pe7lykk7YKhdJZuDzJXXMkaXKpBd+Y7//93sv/ve/7hP8YshO2WdKiGPQ0tMpvVTaqBSlm7f0X+EQAU4/JXcNNR5/jsRoATEcnBFqVKhSrtkz6ycySDkqOKTcvF+N/sq1yy9FXwEjDAY9JMRgDDiRYsIJQQHkGdAE11xYzrIvAw+AsP1PW511bRoO1KLysIyh+5ckhfEK5AOxNEig8rNpSSoT7H62yfkQZjGxWCl4nc7Ux2egu6r6D+xnyYBY41q7JkcrPPdXje/6wFga7tqROlOXoMtAX6OPaxkazrNekTpdCtxi0Rg7htpuXuTSXrJIOYLAYrh6DH/5ZqI7LQgNuOboADMUhRgcnl8dktV1zrbIuogzENOuuLUcDeGv8WiKh4ualP2tqrGmdQbiTDk8WbLq2HM6EO/oGuBHTfXFtGWh67t8dOU6jnAKuhoTDri1v0xKcL2l33eArcGhL8wHhFx4/3XEpRCahd1r7DWEpNKdLRidXlu7JZlICq6wvUG4Ga16O3tp9+ZY656aj6wJHQrD3Rge34o21HH0CjashiPbHv/ex9hh1atuqFCpAVet8J8cZUU7E7GtuEUbdvMwnVm45qlkNzFwPJYh4bpZ0WAxehm7BFeBsG2B0vV3ljQM1rZcR5gRmKrbM9jl6HcgrXAr97megXLHlnRVcdjFw06WEMB9pX/WB+D43YuuZS32J/ARhr1OnJTFZ8w29C9SBNfV4vetnLrNpOxT8BWh07BjujplpAAAAAElFTkSuQmCC) center center no-repeat;cursor:grab}"]}),e})();const g=["bpmn"],B=[{path:"",component:(()=>{class e{constructor(t){this.router=t,this.lf=null,this.drawer=!1,this.currentNode=null}ngOnInit(){d().use(p.EV),d().use(p.t0),d().use(p.aC),d().use(p.oT),d().use(p.v2),d().use(p.Ju),this.lf=new(d())({container:this.bpmnDom.nativeElement,grid:!0,width:1e3,height:600}),this.lf.render();const{eventCenter:t}=this.lf.graphModel;this.bindEvent(t)}bindEvent(t){t.on("node:click",o=>{console.log("\u8282\u70b9\u5355\u51fb",o),this.drawer=!0,this.currentNode=o})}gotoDemo(){this.router.navigateByUrl("/demo")}gotoBpmn(){this.router.navigateByUrl("/bpmn")}gotoCustom(){this.router.navigateByUrl("/custom")}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(i.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-bpmn"]],viewQuery:function(t,o){if(1&t&&n.Gf(g,7),2&t){let r;n.iGM(r=n.CRH())&&(o.bpmnDom=r.first)}},decls:12,vars:2,consts:[[1,"text"],[1,"text",3,"click"],[1,"box"],[1,"container"],["bpmn",""],["ng-if","lf",3,"lf"]],template:function(t,o){1&t&&(n.TgZ(0,"p")(1,"span",0),n._uU(2,"BMPN\u65b9\u5f0f"),n.qZA(),n.TgZ(3,"span",1),n.NdJ("click",function(){return o.gotoBpmn()}),n._uU(4,"goto bpmn"),n.qZA(),n.TgZ(5,"span",1),n.NdJ("click",function(){return o.gotoCustom()}),n._uU(6,"goto custom"),n.qZA()(),n.TgZ(7,"div",2),n._UZ(8,"div",3,4)(10,"app-bpmn-node-panel",5)(11,"app-bpnm-data-panel",5),n.qZA()),2&t&&(n.xp6(10),n.Q6J("lf",o.lf),n.xp6(1),n.Q6J("lf",o.lf))},dependencies:[m.N,c],styles:[".box[_ngcontent-%COMP%]{width:1000px;height:600px;position:relative}.container[_ngcontent-%COMP%]{width:1000px;height:600px}.text[_ngcontent-%COMP%]{margin:0 20px;font-size:weight;cursor:pointer}"]}),e})()}];let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.ez,i.Bz.forChild(B),i.Bz]}),e})();var C=A(4466);let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[C.m,U]}),e})()}}]);