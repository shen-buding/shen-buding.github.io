"use strict";(self.webpackChunkangular_base=self.webpackChunkangular_base||[]).push([[874],{874:(pe,E,d)=>{d.r(E),d.d(E,{BpmnModule:()=>le});var y=d(6895),b=d(5263),p=d(2188),m=d.n(p),h=d(9336),e=d(4650);let U=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-metric"]],inputs:{node:"node"},decls:2,vars:0,template:function(n,t){1&n&&(e.TgZ(0,"p"),e._uU(1,"metric works!"),e.qZA())}}),s})();var l=d(433),F=d(7131),f=d(3679),g=d(7200),C=d(4606),N=d(6616),_=d(7044),w=d(1664),v=d(5635);function Z(s,o){if(1&s&&(e.TgZ(0,"nz-form-item")(1,"nz-form-label",5),e._uU(2," \u6761\u4ef6Key "),e.qZA(),e.TgZ(3,"nz-form-control",6),e._UZ(4,"input",7),e.qZA(),e.TgZ(5,"nz-form-label",5),e._uU(6," \u6761\u4ef6Val "),e.qZA(),e.TgZ(7,"nz-form-control",8)(8,"nz-select",9),e._UZ(9,"nz-option",10)(10,"nz-option",11)(11,"nz-option",12),e.qZA()(),e.TgZ(12,"nz-form-control",13),e._UZ(13,"input",7),e.qZA(),e.TgZ(14,"nz-form-label",14),e._uU(15," \u8d70-> "),e.qZA(),e.TgZ(16,"nz-form-control",13),e._UZ(17,"input",15),e.qZA()()),2&s){const n=o.$implicit;e.xp6(4),e.Q6J("formControlName",n.controlInstance.k),e.uIk("id",n.id),e.xp6(4),e.Q6J("formControlName",n.controlInstance.c),e.xp6(5),e.Q6J("formControlName",n.controlInstance.v),e.uIk("id",n.id),e.xp6(4),e.Q6J("disabled",!0)("formControlName",n.controlInstance.t),e.uIk("id",n.id)}}class T{constructor(o,n,t,r){this.k=o,this.c=n,this.v=t,this.t=r}}let z=(()=>{class s{constructor(n,t){this.drawerRef=n,this.fb=t,this.dataJsonSample="{'cpu':{'usage':100}, 'memory':{'usage':100}}",this.listOfControl=[]}ngOnInit(){if(this.validateForm=this.fb.group({}),null!=this.node.data.properties.cond&&(this.condList=this.node.data.properties.cond),console.log("\u5f53\u524d\u9884\u9009\u6761\u4ef6\u60c5\u51b5:"+JSON.stringify(this.node.data)),void 0!==this.condList&&this.condList.length>0)for(let n=0;n<this.condList.length;n++)this.addField(void 0,this.condList[n])}save(){console.log("submit",this.validateForm.getRawValue());let n=[];for(let t=0;t<100;t++){const r=this.validateForm.getRawValue()["k_"+t],i=this.validateForm.getRawValue()["v_"+t],a=this.validateForm.getRawValue()["c_"+t],u=this.validateForm.getRawValue()["t_"+t];if(null==r&&null==i&&null==u&&null==a)break;let c=new T(r,a,i,u);n.push(c)}this.drawerRef.close({cond:n})}addField(n,t){n&&n.preventDefault();const r=this.listOfControl.length>0?this.listOfControl[this.listOfControl.length-1].id+1:0;let i=new T(`k_${r}`,`c_${r}`,`v_${r}`,`t_${r}`);const u=this.listOfControl.push({id:r,controlInstance:i});console.log(this.listOfControl[this.listOfControl.length-1]),this.validateForm.addControl(this.listOfControl[u-1].controlInstance.k,new l.p4(t?.k,l.kI.required)),this.validateForm.addControl(this.listOfControl[u-1].controlInstance.c,new l.p4(t?.c,l.kI.required)),this.validateForm.addControl(this.listOfControl[u-1].controlInstance.v,new l.p4(t?.v,l.kI.required)),this.validateForm.addControl(this.listOfControl[u-1].controlInstance.t,new l.p4(t?.t,l.kI.required))}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(F.lB),e.Y36(l.QS))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-condition"]],inputs:{node:"node"},decls:30,vars:5,consts:[["nz-row",""],["nz-col","","nzSpan","24"],["nz-form","",3,"formGroup"],[4,"ngFor","ngForOf"],["nz-button","","nzType","primary",3,"click"],["nzSpan","2"],["nzSpan","12","nzErrorTip","\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u503c"],["nz-input","","placeholder","\u8bf7\u8f93\u5165\u8981\u5224\u65ad\u7684\u6761\u4ef6Key",1,"passenger-input",3,"formControlName"],["nzSpan","3","nzErrorTip","\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u503c"],[3,"formControlName"],["nzValue","1","nzLabel","="],["nzValue","2","nzLabel",">"],["nzValue","3","nzLabel","<"],["nzSpan","8","nzErrorTip","\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u503c"],["nzSpan","3"],["nz-input","","placeholder","\u8bf7\u8f93\u5165\u8981\u5224\u65ad\u7684\u6761\u4ef6Key",1,"passenger-input",3,"disabled","formControlName"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"\u6848\u4f8b\u8bf4\u660e"),e.qZA(),e.TgZ(4,"b"),e._uU(5,"`\u6761\u4ef6Key`\u6307\u4f8b\u5982\u5f53\u524d\u8f93\u5165\u6761\u4ef6\u5668\u7684\u6570\u636eKey"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"b"),e._uU(8,"`\u6761\u4ef6Val\u503c`\u8be5\u503c\u63cf\u8ff0\u8fbe\u5230\u4ec0\u4e48\u6761\u4ef6"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"b"),e._uU(11,"`\u5bf9\u5e94\u6761\u4ef6`\u6307\u5bf9\u5e94\u8d70\u7684\u5206\u652f\u7b56\u7565"),e.qZA(),e._UZ(12,"br")(13,"br"),e.TgZ(14,"div",0)(15,"pre"),e._uU(16),e.ALo(17,"json"),e.qZA()(),e.TgZ(18,"div",0)(19,"b"),e._uU(20,'\u4f8b\u5982\u53d6\u5185\u5b58 \u6761\u4ef6Key:".memory.usage" \u6761\u4ef6Val:"> 90" \u8d70->"\u67d0\u5206\u652f"'),e.qZA()()()(),e.TgZ(21,"div",0)(22,"form",2),e.YNc(23,Z,18,8,"nz-form-item",3),e.qZA()(),e._UZ(24,"br")(25,"br"),e.TgZ(26,"div",0)(27,"div",1)(28,"button",4),e.NdJ("click",function(){return t.save()}),e._uU(29,"\u786e\u5b9a"),e.qZA()()()),2&n&&(e.xp6(16),e.hij("        ",e.lcZ(17,3,t.dataJsonSample),"\n      "),e.xp6(6),e.Q6J("formGroup",t.validateForm),e.xp6(1),e.Q6J("ngForOf",t.listOfControl))},dependencies:[f.t3,f.SK,g.Lr,g.Nx,g.iK,g.Fd,C.Ip,C.Vq,l._Y,l.Fj,l.JJ,l.JL,N.ix,_.w,w.dQ,y.sg,v.Zp,l.sg,l.u,y.Ts]}),s})(),M=(()=>{class s{constructor(n){this.drawerRef=n}ngOnInit(){null!=this.node.data.properties.process_type&&(this.process_type=this.node.data.properties.process_type),null!=this.node.data.properties.process_task_id&&(this.process_task_id=this.node.data.properties.process_task_id),null!=this.node.data.properties.process_input_key&&(this.process_input_key=this.node.data.properties.process_input_key),null!=this.node.data.properties.process_output_key&&(this.process_output_key=this.node.data.properties.process_output_key)}getProcessTypeStr(){switch(this.process_type){case"1":return"web\u8c03\u7528";case"2":return"shell\u811a\u672c";case"3":return"python\u811a\u672c";case"4":return"JenkinsJob\u8c03\u7528";default:return"\u672a\u77e5"}}save(){this.drawerRef.close({process_type:this.process_type,process_task_id:this.process_task_id,process_output_key:this.process_output_key,process_input_key:this.process_input_key})}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(F.lB))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-process"]],inputs:{node:"node"},decls:47,vars:17,consts:[["nz-row",""],["nz-col","","nzSpan","24"],[3,"ngModel","ngModelChange"],["nzValue","1","nzLabel","web\u8c03\u7528"],["nzValue","2","nzLabel","shell\u811a\u672c"],["nzValue","3","nzLabel","python\u811a\u672c"],["nzValue","4","nzLabel","JenkinsJob\u8c03\u7528"],["nzErrorTip","\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u503c"],["nz-input","","placeholder","\u8bf7\u8f93\u5165\u622a\u53d6Json\u7684Key",1,"passenger-input",3,"ngModel","ngModelChange"],["nz-input","","placeholder","\u8bf7\u8f93\u5165\u4f5c\u4e1aId\u8fdb\u884c\u5904\u7406",1,"passenger-input",3,"ngModel","ngModelChange"],["nz-button","","nzType","primary",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"nz-form-label"),e._uU(3,"\u811a\u672c\u7c7b\u578b"),e.qZA(),e.TgZ(4,"nz-select",2),e.NdJ("ngModelChange",function(i){return t.process_type=i}),e._UZ(5,"nz-option",3)(6,"nz-option",4)(7,"nz-option",5)(8,"nz-option",6),e.qZA()()(),e._UZ(9,"br"),e.TgZ(10,"div",0),e._uU(11),e.ALo(12,"json"),e._UZ(13,"br"),e._uU(14,' \u5904\u7406\u5668\u53ef\u9884\u5904\u7406\u8f93\u5165\u6570\u636e\u5229\u7528"\u8f93\u5165\u6570\u636e\u53d6Key" '),e._UZ(15,"br"),e._uU(16),e.ALo(17,"json"),e._UZ(18,"br"),e._uU(19),e.ALo(20,"json"),e._UZ(21,"br"),e._uU(22),e.ALo(23,"json"),e.qZA(),e._UZ(24,"br"),e.TgZ(25,"div",0)(26,"nz-form-label"),e._uU(27," \u8f93\u5165\u6570\u636e\u53d6Key "),e.qZA(),e.TgZ(28,"nz-form-control",7)(29,"input",8),e.NdJ("ngModelChange",function(i){return t.process_input_key=i}),e.qZA()()(),e._UZ(30,"br"),e.TgZ(31,"div",0)(32,"nz-form-label"),e._uU(33," \u8f93\u51fa\u6570\u636e\u53d6Key "),e.qZA(),e.TgZ(34,"nz-form-control",7)(35,"input",8),e.NdJ("ngModelChange",function(i){return t.process_output_key=i}),e.qZA()()(),e._UZ(36,"br"),e.TgZ(37,"div",0)(38,"nz-form-label"),e._uU(39),e.qZA(),e.TgZ(40,"nz-form-control",7)(41,"input",9),e.NdJ("ngModelChange",function(i){return t.process_task_id=i}),e.qZA()()(),e._UZ(42,"br"),e.TgZ(43,"div",0)(44,"div",1)(45,"button",10),e.NdJ("click",function(){return t.save()}),e._uU(46,"\u786e\u5b9a"),e.qZA()()()),2&n&&(e.xp6(4),e.Q6J("ngModel",t.process_type),e.xp6(7),e.hij(" \u5b9e\u4f8b\u8f93\u5165\u5904\u7406\u5668\u6570\u636e\uff1a",e.lcZ(12,9,"{'cpu':{'usage':100}, 'memory':{'usage':100}}")," "),e.xp6(5),e.hij(" \u4f8b\u5982: \u8f93\u5165\u6570\u636e\u53d6Key:'.cpu' \u5904\u7406\u5668\u53ea\u5904\u7406",e.lcZ(17,11,"{'usage':100}")," "),e.xp6(3),e.hij(" \u540c\u7406\uff1a\u811a\u672c\u5904\u7406\u540e\u8f93\u51faJson: \uff1a",e.lcZ(20,13,"{'cpu':{'usage':100}, 'memory':{'usage':100}}")," "),e.xp6(3),e.hij(" \u4f8b\u5982\uff1a \u8f93\u51fa\u6570\u636e\u53d6Key:'.cpu' \u5904\u7406\u5668\u53ea\u7a81\u51fa\u4ee5\u4e0bjson ",e.lcZ(23,15,"{'usage':100}"),"\n"),e.xp6(7),e.Q6J("ngModel",t.process_input_key),e.xp6(6),e.Q6J("ngModel",t.process_output_key),e.xp6(4),e.hij(" ",t.getProcessTypeStr(),"\u4f5c\u4e1aId "),e.xp6(2),e.Q6J("ngModel",t.process_task_id))},dependencies:[f.t3,f.SK,g.iK,g.Fd,C.Ip,C.Vq,l.Fj,l.JJ,l.On,N.ix,_.w,w.dQ,v.Zp,y.Ts],styles:["nz-select[_ngcontent-%COMP%]{width:100%}"]}),s})();var S=d(2027);const k={type:"CustomRect",view:class P extends p.RectNode{},model:class x extends p.RectNodeModel{initNodeData(o){super.initNodeData(o)}getNodeStyle(){const o=super.getNodeStyle();return o.stroke="#2987ff",o}}},R={type:"CustomaPolygon",view:class J extends p.PolygonNode{},model:class O extends p.PolygonNodeModel{getNodeStyle(){const o=super.getNodeStyle();return o.stroke="#2987ff",o}}},V={type:"start",view:class I extends p.CircleNode{},model:class Q extends p.CircleNodeModel{initNodeData(o){super.initNodeData(o)}getNodeStyle(){const o=super.getNodeStyle();return o.stroke="#2987ff",o}getConnectedTargetRules(){const o=super.getConnectedTargetRules();return o.push({message:"\u7cfb\u7edf\u76d1\u63a7\u65e0\u6cd5\u4f5c\u4e3a\u8f93\u5165,\u53ea\u80fd\u4f5c\u4e3a\u8f93\u51fa",validate:()=>!1}),o}}},G={type:"end",view:class K extends p.CircleNode{getShape(){const{model:o}=this.props,{x:t,y:r,r:i}=o,{fill:a,stroke:u,strokeWidth:c}=o.getNodeStyle();return(0,p.h)("g",{},[(0,p.h)("circle",{cx:t,cy:r,r:i,fill:a,stroke:u,strokeWidth:c}),(0,p.h)("circle",{cx:t,cy:r,r:i-10,fill:a,stroke:u,strokeWidth:c})])}},model:class D extends p.CircleNodeModel{initNodeData(o){super.initNodeData(o),this.r=50}getNodeStyle(){const o=super.getNodeStyle();return o.stroke="#2987ff",o.fill="transparent",o.strokeWidth=2,o}getConnectedSourceRules(){const o=super.getConnectedSourceRules();return o.push({message:"\u7ec8\u6b62\u8282\u70b9\u4e0d\u80fd\u4f5c\u4e3a\u8fde\u7ebf\u7684\u8d77\u70b9",validate:()=>!1}),o}}},H={type:"CustomHtml",view:class L extends p.HtmlNode{setHtml(o){const{properties:n}=this.props.model,t=document.createElement("custom-element");t.className="lf-html-wrapper",t.message=n.text,o.innerHTML="",o.appendChild(t)}},model:class Y extends p.HtmlNodeModel{getNodeStyle(){const o=super.getNodeStyle();return o.stroke="#2987ff",o.fill="transparent",o.strokeWidth=2,o}initNodeData(o){super.initNodeData(o),o.text.editable=!1,this.width=100,this.height=100,this.anchorsOffset=[[50,0],[0,50],[-50,0],[0,-50]]}}},W={type:"condition",view:class X extends p.HtmlNode{setHtml(o){const{properties:n}=this.props.model,t=document.createElement("data-element");t.className="bpmn-html-wrapper";let r=n.cond,i="";if(null!=r&&r.length>0)for(let a=0;a<r.length;a++)a>0&&(i+="\n"),i+="\u952e:"+r[a].k+",\u503c:"+r[a].v+",\u5206\u652f:"+r[a].t;t.message=i,t.htmlColor="#2F8AFF",t.htmlTypeMessage="",t.htmlTitleMessage="\u6307\u6807\u6761\u4ef6",o.innerHTML="",o.appendChild(t)}},model:class j extends p.HtmlNodeModel{getNodeStyle(){const o=super.getNodeStyle();return o.stroke="rgb(24, 125, 255)",o}initNodeData(o){super.initNodeData(o),o.text.editable=!1,this.width=120,this.height=120,this.anchorsOffset=[[60,0],[0,60],[-60,0],[0,-60]]}getConnectedTargetRules(){const o=super.getConnectedTargetRules();return o.push({message:"\u6761\u4ef6\u65e0\u6cd5\u81ea\u5df1\u94fe\u63a5\u81ea\u5df1",validate:(t,r,i,a)=>t!==r}),o}getConnectedSourceRules(){const o=super.getConnectedSourceRules();return o.push({message:"\u5df2\u6709\u5206\u652f\u5bfc\u5411\u76ee\u6807,\u8bf7\u52ff\u91cd\u590d",validate:(t,r,i,a)=>{let u=r?.incoming.nodes;if(void 0!==u){let c=u?.length;if(null!=u&&void 0!==c&&c>0)for(let A=0;A<c;A++)if(u[A]===t)return!1}return!0}}),o}}};var q=d(1452);const te={type:"process",view:class $ extends p.HtmlNode{setHtml(o){const{properties:n}=this.props.model,t=document.createElement("data-element");t.className="bpmn-html-wrapper",t.htmlTitleMessage="\u5904\u7406\u811a\u672c",t.htmlColor="#ec0a0a";let r="";r+="\u4f5c\u4e1aId:"+(void 0===n.process_task_id?"\u5f85\u8bbe\u5b9a":n.process_task_id),r+=",\u8f93\u5165Key:"+(void 0===n.process_input_key?"\u5f85\u8bbe\u5b9a":n.process_input_key),r+=",\u8f93\u51faKey:"+(void 0===n.process_output_key?"\u5f85\u8bbe\u5b9a":n.process_output_key),t.message=r,t.htmlTypeMessage=this.getProcessTypeStr(n.process_type),o.innerHTML="",o.appendChild(t),console.log(t),console.log(t.htmlColor)}getProcessTypeStr(o){switch(o){case"1":return"-Web\u8c03\u7528";case"2":return"-Shell\u811a\u672c";case"3":return"-Python\u811a\u672c";case"4":return"-Jenkins\u8c03\u7528";default:return"-\u6682\u5b9a"}}},model:class ee extends p.HtmlNodeModel{getNodeStyle(){const o=super.getNodeStyle();return o.stroke="rgb(24, 125, 255)",o}initNodeData(o){super.initNodeData(o),o.text.editable=!1,this.width=120,this.height=120,this.anchorsOffset=[[60,0],[0,60],[-60,0],[0,-60]]}}};let ne=(()=>{class s{constructor(){this.htmlMessage="",this.htmlTitle="",this.htmlType="",this.htmlBorderColor=""}get htmlColor(){return this.htmlBorderColor}set htmlColor(n){this.htmlBorderColor=n}get message(){return this.htmlMessage}set message(n){this.htmlMessage=n}get htmlTitleMessage(){return this.htmlTitle}set htmlTitleMessage(n){this.htmlTitle=n}get htmlTypeMessage(){return this.htmlType}set htmlTypeMessage(n){this.htmlType=n}ngOnInit(){}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-html"]],inputs:{htmlColor:"htmlColor",message:"message",htmlTitleMessage:"htmlTitleMessage",htmlTypeMessage:"htmlTypeMessage"},decls:5,vars:6,consts:[[1,"custom-html"],[1,"custom-head",2,"text-align","center"],[1,"custom-body",2,"width","115px","word-wrap","break-word"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2),e._uU(4),e.qZA()()),2&n&&(e.Jzz("width: 120px;height: 120px; border: 2px solid ",t.htmlBorderColor,"; font-size: 11px"),e.xp6(2),e.AsE("",t.htmlTitle," ",t.htmlType,""),e.xp6(2),e.hij(" ",t.htmlMessage," "))}}),s})(),oe=(()=>{class s{constructor(n){const t=(0,q.iD)(ne,{injector:n});customElements.get("data-element")||window.customElements.define("data-element",t)}ngOnInit(){let n=this.lf;n&&n.on("selection:selected",()=>{n.updateEditConfig({stopMoveGraph:!1})}),this.registerNode()}registerNode(){let t=this.lf;t.register(k),t.register(R),t.register(V),t.register(G),t.register(H),t.register(W),t.register(te),t.on("connection:not-allowed",r=>{alert(r.msg)}),t.on("custom:button-click",r=>{console.log("custom:button-click"),t.setProperties(r.id,{body:"LogicFlow"})})}openSelection(){console.log("openSelection"),this.lf.updateEditConfig({stopMoveGraph:!0})}addStartNode(){this.lf.dnd.startDrag({type:"start",text:"\u7cfb\u7edf\u76d1\u63a7\u503c",properties:{}})}addConditionNode(){this.lf.dnd.startDrag({type:"condition",text:"",properties:{}})}addProcessNode(){this.lf.dnd.startDrag({type:"process",text:"",properties:{}})}addEndNode(){this.lf.dnd.startDrag({type:"bpmn:endEvent",text:"\u7ed3\u675f"})}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(e.zs3))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-bpmn-node-panel"]],inputs:{lf:"lf"},decls:17,vars:0,consts:[[1,"node-panel"],[1,"node-item",3,"mousedown"],[1,"node-item-icon","bpmn-selection"],[1,"node-label"],[1,"node-item-icon","bpmn-start"],[1,"node-item-icon","bpmn-gateway"],[1,"node-item-icon","bpmn-user"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("mousedown",function(){return t.openSelection()}),e._UZ(2,"div",2),e.TgZ(3,"span",3),e._uU(4,"\u9009\u533a"),e.qZA()(),e.TgZ(5,"div",1),e.NdJ("mousedown",function(){return t.addStartNode()}),e._UZ(6,"div",4),e.TgZ(7,"span",3),e._uU(8,"\u5f00\u59cb\u76d1\u63a7"),e.qZA()(),e.TgZ(9,"div",1),e.NdJ("mousedown",function(){return t.addConditionNode()}),e._UZ(10,"div",5),e.TgZ(11,"span",3),e._uU(12,"\u6307\u6807\u6761\u4ef6"),e.qZA()(),e.TgZ(13,"div",1),e.NdJ("mousedown",function(){return t.addProcessNode()}),e._UZ(14,"div",6),e.TgZ(15,"span",3),e._uU(16,"\u5904\u7406\u5668"),e.qZA()()())},styles:[".node-panel[_ngcontent-%COMP%]{position:absolute;top:100px;left:10px;width:70px;text-align:center;padding:10px;background-color:#fff;box-shadow:0 0 10px 1px #e4e0db;border-radius:6px;z-index:101}.node-item[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center}.node-item-icon[_ngcontent-%COMP%]{width:30px;height:30px;margin-left:10px;background-size:cover}.node-label[_ngcontent-%COMP%]{font-size:12px;margin-top:5px;-webkit-user-select:none;user-select:none}.bpmn-selection[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAOVJREFUOBGtVMENwzAIjKP++2026ETdpv10iy7WFbqFyyW6GBywLCv5gI+Dw2Bluj1znuSjhb99Gkn6QILDY2imo60p8nsnc9bEo3+QJ+AKHfMdZHnl78wyTnyHZD53Zzx73MRSgYvnqgCUHj6gwdck7Zsp1VOrz0Uz8NbKunzAW+Gu4fYW28bUYutYlzSa7B84Fh7d1kjLwhcSdYAYrdkMQVpsBr5XgDGuXwQfQr0y9zwLda+DUYXLaGKdd2ZTtvbolaO87pdo24hP7ov16N0zArH1ur3iwJpXxm+v7oAJNR4JEP8DoAuSFEkYH7cAAAAASUVORK5CYII=) center center no-repeat;cursor:grab}.bpmn-start[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==) center center no-repeat;cursor:grab}.bpmn-end[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAA1BJREFUOBFtVE1IVUEYPXOf+tq40Y3vPcmFIdSjIorWoRG0ERWUgnb5FwVhYQSl72oUoZAboxKNFtWiwKRN0M+jpfSzqJAQclHo001tKkjl3emc8V69igP3znzfnO/M9zcDcKT67azmjYWTwl9Vn7Vumeqzj1DVb6cleQY4oAVnIOPb+mKAGxQmKI5CWNJ2aLPatxWa3aB9K7/fB+/Z0jUF6TmMlFLQqrkECWQzOZxYGjTlOl8eeKaIY5yHnFn486xBustDjWT6dG7pmjHOJd+33t0iitTPkK6tEvjxq4h2MozQ6WFSX/LkDUGfFwfhEZj1Auz/U4pyAi5Sznd7uKzznXeVHlI/Aywmk6j7fsUsEuCGADrWARXXwjxWQsUbIupDHJI7kF5dRktg0eN81IbiZXiTESic50iwS+t1oJgL83jAiBupLDCQqwziaWSoAFSeIR3P5Xv5az00wyIn35QRYTwdSYbz8pH8fxUUAtxnFvYmEmgI0wYXUXcCCSpeEVpXlsRhBnCEATxWylL9+EKCAYhe1NGstUa6356kS9NVvt3DU2fd+Wtbm/+lSbylJqsqkSm9CRhvoJVlvKPvF1RKY/FcPn5j4UfIMLn8D4UYb54BNsilTDXKnF4CfTobA0FpoW/LSp306wkXM+XaOJhZaFkcNM82ASNAWMrhrUbRfmyeI1FvRBTpN06WKxa9BK0o2E4Pd3zfBBEwPsv9sQBnmLVbLEIZ/Xe9LYwJu/Er17W6HYVBc7vmuk0xUQ+pqxdom5Fnp55SiytXLPYoMXNM4u4SNSCFWnrVIzKG3EGyMXo6n/BQOe+bX3FClY4PwydVhthOZ9NnS+ntiLh0fxtlUJHAuGaFoVmttpVMeum0p3WEXbcll94l1wM/gZ0Ccczop77VvN2I7TlsZCsuXf1WHvWEhjO8DPtyOVg2/mvK9QqboEth+7pD6NUQC1HN/TwvydGBARi9MZSzLE4b8Ru3XhX2PBxf8E1er2A6516o0w4sIA+lwURhAON82Kwe2iDAC1Watq4XHaGQ7skLcFOtI5lDxuM2gZe6WFIotPAhbaeYlU4to5cuarF1QrcZ/lwrLaCJl66JBocYZnrNlvm2+MBCTmUymPrYZVbjdlr/BxlMjmNmNI3SAAAAAElFTkSuQmCC) center center no-repeat;cursor:grab}.bpmn-user[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==) center center no-repeat;cursor:grab}.bpmn-gateway[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAAHeEJUAAAAABGdBTUEAALGPC/xhBQAAAvVJREFUOBGNVEFrE0EU/mY3bQoiFlOkaUJrQUQoWMGePLX24EH0IIoHKQiCV0G8iE1covgLiqA/QTzVm1JPogc9tIJYFaQtlhQxqYjSpunu+L7JvmUTU3AgmTfvffPNN++9WSA1DO182f6xwILzD5btfAoQmwL5KJEwiQyVbSVZ0IgRyV6PTpIJ81E5ZvqfHQR0HUOBHW4L5Et2kQ6Zf7iAOhTFAA8s0pEP7AXO1uAA52SbqGk6h/6J45LaLhO64ByfcUzM39V7ZiAdS2yCePPEIQYvTUHqM/n7dgQNfBKWPjpF4ISk8q3J4nB11qw6X8l+FsF3EhlkEMfrjIer3wJTLwS2aCNcj4DbGxXTw00JmAuO+Ni6bBxVUCvS5d9aa04+so4pHW5jLTywuXAL7jJ+D06sl82Sgl2JuVBQn498zkc2bGKxULHjCnSMadBKYDYYHAtsby1EQ5lNGrQd4Y3v4Zo0XdGEmDno46yCM9Tk+RiJmUYHS/aXHPNTcjxcbTFna000PFJHIVZ5lFRqRpJWk9/+QtlOUYJj9HG5pVFEU7zqIYDVsw2s+AJaD8wTd2umgSCCyUxgGsS1Y6TBwXQQTFuZaHcd8gAGioE90hlsY+wMcs30RduYtxanjMGal8H5dMW67dmT1JFtYUEe8LiQLRsPZ6IIc7A4J5tqco3T0pnv/4u0kyzrYUq7gASuEyI8VXKvB9Odytv6jS/PNaZBln0nioJG/AVQRZvApOdhjj3Jt8QC8Im09SafwdBdvIpztpxWxpeKCC+EsFdS8DCyuCn2munFpL7ctHKp+Xc5cMybeIyMAN33SPL3ZR9QV1XVwLyzHm6Iv0/yeUuUb7PPlZC4D4HZkeu6dpF4v9j9MreGtMbxMMRLIcjJic9yHi7WQ3yVKzZVWUr5UrViJvn1FfUlwe/KYVfYyWRLSGNu16hR01U9IacajXPei0wx/5BqgInvJN+MMNtNme7ReU9SBbgntovn0kKHpFg7UogZvaZiOue/q1SBo9ktHzQAAAAASUVORK5CYII=) center center no-repeat;cursor:grab}.bpmn-service[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAm9JREFUSEu1lTFo1GAUx38vZ6sOooIoVsWKk23SCp1UkIrg0EHs0M5OOolY9NJz6XXpNaeidOhQB3G1oCLUTXRxK9pe7lykk7YKhdJZuDzJXXMkaXKpBd+Y7//93sv/ve/7hP8YshO2WdKiGPQ0tMpvVTaqBSlm7f0X+EQAU4/JXcNNR5/jsRoATEcnBFqVKhSrtkz6ycySDkqOKTcvF+N/sq1yy9FXwEjDAY9JMRgDDiRYsIJQQHkGdAE11xYzrIvAw+AsP1PW511bRoO1KLysIyh+5ckhfEK5AOxNEig8rNpSSoT7H62yfkQZjGxWCl4nc7Ux2egu6r6D+xnyYBY41q7JkcrPPdXje/6wFga7tqROlOXoMtAX6OPaxkazrNekTpdCtxi0Rg7htpuXuTSXrJIOYLAYrh6DH/5ZqI7LQgNuOboADMUhRgcnl8dktV1zrbIuogzENOuuLUcDeGv8WiKh4ualP2tqrGmdQbiTDk8WbLq2HM6EO/oGuBHTfXFtGWh67t8dOU6jnAKuhoTDri1v0xKcL2l33eArcGhL8wHhFx4/3XEpRCahd1r7DWEpNKdLRidXlu7JZlICq6wvUG4Ga16O3tp9+ZY656aj6wJHQrD3Rge34o21HH0CjashiPbHv/ex9hh1atuqFCpAVet8J8cZUU7E7GtuEUbdvMwnVm45qlkNzFwPJYh4bpZ0WAxehm7BFeBsG2B0vV3ljQM1rZcR5gRmKrbM9jl6HcgrXAr97megXLHlnRVcdjFw06WEMB9pX/WB+D43YuuZS32J/ARhr1OnJTFZ8w29C9SBNfV4vetnLrNpOxT8BWh07BjujplpAAAAAElFTkSuQmCC) center center no-repeat;cursor:grab}.bpmn-html-wrapper[_ngcontent-%COMP%]{width:120px;height:120px;box-sizing:border-box;background:#68fce2;border:2px solid #838382;border-radius:10px}.bpmn-html-wrapper[_ngcontent-%COMP%]   .custom-html[_ngcontent-%COMP%]{width:115px;height:115px;border:2px solid #2987ff}.bpmn-html-wrapper[_ngcontent-%COMP%]   .custom-head[_ngcontent-%COMP%]{color:red;height:26px;line-height:26px}.bpmn-html-wrapper[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]{color:#2987ff;height:50px;line-height:50px}"]}),s})();const se=["bpmn"],re=[{path:"",component:(()=>{class s{constructor(n,t){this.router=n,this.drawerService=t,this.lf=null,this.drawer=!1,this.currentNode=null,this.edgeId=1}ngOnInit(){m().use(h.EV),m().use(h.t0),m().use(h.aC),m().use(h.oT),m().use(h.v2),m().use(h.Ju),this.lf=new(m())({container:this.bpmnDom.nativeElement,grid:!0,height:670}),this.lf.render();const{eventCenter:n}=this.lf.graphModel;this.bindEvent(n)}bindEvent(n){n.on("node:click",t=>{this.drawer=!0,this.currentNode=t,"start"===this.currentNode.data.type?this.openSystemMetricEditDrawer():"condition"===this.currentNode.data.type?this.openConditionEditDrawer():"process"===this.currentNode.data.type&&this.openProcessEditDrawer()}),n.on("edge:add",t=>{let r=this.lf.getNodeDataById(t.data.sourceNodeId).type;if("condition"===r){let i="\u5206\u652f-"+this.edgeId++;this.lf.updateText(t.data.id,i);let a=this.lf.getNodeOutgoingEdge(t.data.sourceNodeId),u=this.lf.getProperties(t.data.sourceNodeId).cond;if(null==u||u.length<a.length){let A=u??[];for(let B=null==u?0:u.length;B<a.length;B++){let ae=new T("","","",i);A.push(ae)}this.lf.setProperties(t.data.sourceNodeId,{cond:A})}}else"start"===r&&this.lf.updateText(t.data.id,"\u76d1\u63a7\u6570\u636e\u8f93\u51fa")})}openSystemMetricEditDrawer(){this.drawerService.create({nzTitle:"\u7cfb\u7edf\u5ea6\u91cf\u76d1\u63a7",nzWidth:700,nzContent:U,nzContentParams:{node:this.currentNode}}).afterClose.subscribe(t=>{null!=t&&this.lf.setProperties(this.currentNode.data.id,{approve_user_id_list:t.approve_user_id_list,approve_type:t.approve_type})})}openProcessEditDrawer(){this.drawerService.create({nzTitle:"\u5904\u7406\u5668",nzWidth:700,nzContent:M,nzContentParams:{node:this.currentNode}}).afterClose.subscribe(t=>{null!=t&&this.lf.setProperties(this.currentNode.data.id,{process_type:t.process_type,process_task_id:t.process_task_id,process_output_key:t.process_output_key,process_input_key:t.process_input_key})})}openConditionEditDrawer(){this.drawerService.create({nzTitle:"\u6761\u4ef6\u7f16\u8f91\u5668",nzWidth:700,nzContent:z,nzContentParams:{node:this.currentNode}}).afterClose.subscribe(t=>{null!=t&&this.lf.setProperties(this.currentNode.data.id,{cond:t.cond})})}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(b.F0),e.Y36(F.ai))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-bpmn"]],viewQuery:function(n,t){if(1&n&&e.Gf(se,7),2&n){let r;e.iGM(r=e.CRH())&&(t.bpmnDom=r.first)}},decls:5,vars:2,consts:[[1,"box"],[1,"container"],["bpmn",""],["ng-if","lf",3,"lf"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"div",1,2)(3,"app-bpmn-node-panel",3)(4,"app-bpnm-data-panel",3),e.qZA()),2&n&&(e.xp6(3),e.Q6J("lf",t.lf),e.xp6(1),e.Q6J("lf",t.lf))},dependencies:[S.N,oe],styles:[".box[_ngcontent-%COMP%]{height:600px;position:relative}.container[_ngcontent-%COMP%]{height:600px}.text[_ngcontent-%COMP%]{margin:0 20px;font-size:weight;cursor:pointer}"]}),s})()}];let ie=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[y.ez,b.Bz.forChild(re),b.Bz]}),s})();var ue=d(4466),de=d(1102);let le=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[ue.m,ie,F.BL,g.U5,f.Jb,C.LV,l.u5,N.sL,de.PV,v.o7,l.UX]}),s})()}}]);