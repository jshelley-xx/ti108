goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_70868 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_70868(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_70869 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_70869(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__69737 = coll;
var G__69738 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__69737,G__69738) : shadow.dom.lazy_native_coll_seq.call(null,G__69737,G__69738));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__69822 = arguments.length;
switch (G__69822) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__69836 = arguments.length;
switch (G__69836) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__69851 = arguments.length;
switch (G__69851) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__69857 = arguments.length;
switch (G__69857) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__69876 = arguments.length;
switch (G__69876) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__69892 = arguments.length;
switch (G__69892) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e69911){if((e69911 instanceof Object)){
var e = e69911;
return console.log("didnt support attachEvent",el,e);
} else {
throw e69911;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__69927 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__69928 = null;
var count__69929 = (0);
var i__69930 = (0);
while(true){
if((i__69930 < count__69929)){
var el = chunk__69928.cljs$core$IIndexed$_nth$arity$2(null,i__69930);
var handler_70946__$1 = ((function (seq__69927,chunk__69928,count__69929,i__69930,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__69927,chunk__69928,count__69929,i__69930,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_70946__$1);


var G__70947 = seq__69927;
var G__70948 = chunk__69928;
var G__70949 = count__69929;
var G__70950 = (i__69930 + (1));
seq__69927 = G__70947;
chunk__69928 = G__70948;
count__69929 = G__70949;
i__69930 = G__70950;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69927);
if(temp__5753__auto__){
var seq__69927__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69927__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69927__$1);
var G__70959 = cljs.core.chunk_rest(seq__69927__$1);
var G__70960 = c__4649__auto__;
var G__70961 = cljs.core.count(c__4649__auto__);
var G__70962 = (0);
seq__69927 = G__70959;
chunk__69928 = G__70960;
count__69929 = G__70961;
i__69930 = G__70962;
continue;
} else {
var el = cljs.core.first(seq__69927__$1);
var handler_70965__$1 = ((function (seq__69927,chunk__69928,count__69929,i__69930,el,seq__69927__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__69927,chunk__69928,count__69929,i__69930,el,seq__69927__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_70965__$1);


var G__70980 = cljs.core.next(seq__69927__$1);
var G__70981 = null;
var G__70982 = (0);
var G__70983 = (0);
seq__69927 = G__70980;
chunk__69928 = G__70981;
count__69929 = G__70982;
i__69930 = G__70983;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__69957 = arguments.length;
switch (G__69957) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__69975 = cljs.core.seq(events);
var chunk__69976 = null;
var count__69977 = (0);
var i__69978 = (0);
while(true){
if((i__69978 < count__69977)){
var vec__69998 = chunk__69976.cljs$core$IIndexed$_nth$arity$2(null,i__69978);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69998,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69998,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__70992 = seq__69975;
var G__70993 = chunk__69976;
var G__70994 = count__69977;
var G__70995 = (i__69978 + (1));
seq__69975 = G__70992;
chunk__69976 = G__70993;
count__69977 = G__70994;
i__69978 = G__70995;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69975);
if(temp__5753__auto__){
var seq__69975__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69975__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69975__$1);
var G__71003 = cljs.core.chunk_rest(seq__69975__$1);
var G__71004 = c__4649__auto__;
var G__71005 = cljs.core.count(c__4649__auto__);
var G__71006 = (0);
seq__69975 = G__71003;
chunk__69976 = G__71004;
count__69977 = G__71005;
i__69978 = G__71006;
continue;
} else {
var vec__70007 = cljs.core.first(seq__69975__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70007,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__71014 = cljs.core.next(seq__69975__$1);
var G__71015 = null;
var G__71016 = (0);
var G__71017 = (0);
seq__69975 = G__71014;
chunk__69976 = G__71015;
count__69977 = G__71016;
i__69978 = G__71017;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__70028 = cljs.core.seq(styles);
var chunk__70029 = null;
var count__70030 = (0);
var i__70031 = (0);
while(true){
if((i__70031 < count__70030)){
var vec__70064 = chunk__70029.cljs$core$IIndexed$_nth$arity$2(null,i__70031);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70064,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70064,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__71026 = seq__70028;
var G__71027 = chunk__70029;
var G__71028 = count__70030;
var G__71029 = (i__70031 + (1));
seq__70028 = G__71026;
chunk__70029 = G__71027;
count__70030 = G__71028;
i__70031 = G__71029;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__70028);
if(temp__5753__auto__){
var seq__70028__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70028__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__70028__$1);
var G__71030 = cljs.core.chunk_rest(seq__70028__$1);
var G__71031 = c__4649__auto__;
var G__71032 = cljs.core.count(c__4649__auto__);
var G__71033 = (0);
seq__70028 = G__71030;
chunk__70029 = G__71031;
count__70030 = G__71032;
i__70031 = G__71033;
continue;
} else {
var vec__70084 = cljs.core.first(seq__70028__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70084,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__71038 = cljs.core.next(seq__70028__$1);
var G__71039 = null;
var G__71040 = (0);
var G__71041 = (0);
seq__70028 = G__71038;
chunk__70029 = G__71039;
count__70030 = G__71040;
i__70031 = G__71041;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__70097_71042 = key;
var G__70097_71043__$1 = (((G__70097_71042 instanceof cljs.core.Keyword))?G__70097_71042.fqn:null);
switch (G__70097_71043__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_71045 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_71045,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_71045,"aria-");
}
})())){
el.setAttribute(ks_71045,value);
} else {
(el[ks_71045] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__70111){
var map__70112 = p__70111;
var map__70112__$1 = cljs.core.__destructure_map(map__70112);
var props = map__70112__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70112__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__70113 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70113,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70113,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70113,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__70117 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__70117,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__70117;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__70120 = arguments.length;
switch (G__70120) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__70142){
var vec__70143 = p__70142;
var seq__70144 = cljs.core.seq(vec__70143);
var first__70145 = cljs.core.first(seq__70144);
var seq__70144__$1 = cljs.core.next(seq__70144);
var nn = first__70145;
var first__70145__$1 = cljs.core.first(seq__70144__$1);
var seq__70144__$2 = cljs.core.next(seq__70144__$1);
var np = first__70145__$1;
var nc = seq__70144__$2;
var node = vec__70143;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70149 = nn;
var G__70150 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__70149,G__70150) : create_fn.call(null,G__70149,G__70150));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70153 = nn;
var G__70154 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__70153,G__70154) : create_fn.call(null,G__70153,G__70154));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__70159 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70159,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70159,(1),null);
var seq__70162_71061 = cljs.core.seq(node_children);
var chunk__70163_71062 = null;
var count__70164_71063 = (0);
var i__70165_71064 = (0);
while(true){
if((i__70165_71064 < count__70164_71063)){
var child_struct_71065 = chunk__70163_71062.cljs$core$IIndexed$_nth$arity$2(null,i__70165_71064);
var children_71066 = shadow.dom.dom_node(child_struct_71065);
if(cljs.core.seq_QMARK_(children_71066)){
var seq__70204_71068 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_71066));
var chunk__70206_71069 = null;
var count__70207_71070 = (0);
var i__70208_71071 = (0);
while(true){
if((i__70208_71071 < count__70207_71070)){
var child_71072 = chunk__70206_71069.cljs$core$IIndexed$_nth$arity$2(null,i__70208_71071);
if(cljs.core.truth_(child_71072)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71072);


var G__71074 = seq__70204_71068;
var G__71075 = chunk__70206_71069;
var G__71076 = count__70207_71070;
var G__71077 = (i__70208_71071 + (1));
seq__70204_71068 = G__71074;
chunk__70206_71069 = G__71075;
count__70207_71070 = G__71076;
i__70208_71071 = G__71077;
continue;
} else {
var G__71078 = seq__70204_71068;
var G__71079 = chunk__70206_71069;
var G__71080 = count__70207_71070;
var G__71081 = (i__70208_71071 + (1));
seq__70204_71068 = G__71078;
chunk__70206_71069 = G__71079;
count__70207_71070 = G__71080;
i__70208_71071 = G__71081;
continue;
}
} else {
var temp__5753__auto___71082 = cljs.core.seq(seq__70204_71068);
if(temp__5753__auto___71082){
var seq__70204_71083__$1 = temp__5753__auto___71082;
if(cljs.core.chunked_seq_QMARK_(seq__70204_71083__$1)){
var c__4649__auto___71085 = cljs.core.chunk_first(seq__70204_71083__$1);
var G__71086 = cljs.core.chunk_rest(seq__70204_71083__$1);
var G__71087 = c__4649__auto___71085;
var G__71088 = cljs.core.count(c__4649__auto___71085);
var G__71089 = (0);
seq__70204_71068 = G__71086;
chunk__70206_71069 = G__71087;
count__70207_71070 = G__71088;
i__70208_71071 = G__71089;
continue;
} else {
var child_71090 = cljs.core.first(seq__70204_71083__$1);
if(cljs.core.truth_(child_71090)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71090);


var G__71091 = cljs.core.next(seq__70204_71083__$1);
var G__71092 = null;
var G__71093 = (0);
var G__71094 = (0);
seq__70204_71068 = G__71091;
chunk__70206_71069 = G__71092;
count__70207_71070 = G__71093;
i__70208_71071 = G__71094;
continue;
} else {
var G__71095 = cljs.core.next(seq__70204_71083__$1);
var G__71096 = null;
var G__71097 = (0);
var G__71098 = (0);
seq__70204_71068 = G__71095;
chunk__70206_71069 = G__71096;
count__70207_71070 = G__71097;
i__70208_71071 = G__71098;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_71066);
}


var G__71101 = seq__70162_71061;
var G__71102 = chunk__70163_71062;
var G__71103 = count__70164_71063;
var G__71104 = (i__70165_71064 + (1));
seq__70162_71061 = G__71101;
chunk__70163_71062 = G__71102;
count__70164_71063 = G__71103;
i__70165_71064 = G__71104;
continue;
} else {
var temp__5753__auto___71106 = cljs.core.seq(seq__70162_71061);
if(temp__5753__auto___71106){
var seq__70162_71108__$1 = temp__5753__auto___71106;
if(cljs.core.chunked_seq_QMARK_(seq__70162_71108__$1)){
var c__4649__auto___71109 = cljs.core.chunk_first(seq__70162_71108__$1);
var G__71110 = cljs.core.chunk_rest(seq__70162_71108__$1);
var G__71111 = c__4649__auto___71109;
var G__71112 = cljs.core.count(c__4649__auto___71109);
var G__71113 = (0);
seq__70162_71061 = G__71110;
chunk__70163_71062 = G__71111;
count__70164_71063 = G__71112;
i__70165_71064 = G__71113;
continue;
} else {
var child_struct_71114 = cljs.core.first(seq__70162_71108__$1);
var children_71115 = shadow.dom.dom_node(child_struct_71114);
if(cljs.core.seq_QMARK_(children_71115)){
var seq__70226_71116 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_71115));
var chunk__70228_71117 = null;
var count__70229_71118 = (0);
var i__70230_71119 = (0);
while(true){
if((i__70230_71119 < count__70229_71118)){
var child_71120 = chunk__70228_71117.cljs$core$IIndexed$_nth$arity$2(null,i__70230_71119);
if(cljs.core.truth_(child_71120)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71120);


var G__71124 = seq__70226_71116;
var G__71125 = chunk__70228_71117;
var G__71126 = count__70229_71118;
var G__71127 = (i__70230_71119 + (1));
seq__70226_71116 = G__71124;
chunk__70228_71117 = G__71125;
count__70229_71118 = G__71126;
i__70230_71119 = G__71127;
continue;
} else {
var G__71128 = seq__70226_71116;
var G__71129 = chunk__70228_71117;
var G__71130 = count__70229_71118;
var G__71131 = (i__70230_71119 + (1));
seq__70226_71116 = G__71128;
chunk__70228_71117 = G__71129;
count__70229_71118 = G__71130;
i__70230_71119 = G__71131;
continue;
}
} else {
var temp__5753__auto___71132__$1 = cljs.core.seq(seq__70226_71116);
if(temp__5753__auto___71132__$1){
var seq__70226_71133__$1 = temp__5753__auto___71132__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70226_71133__$1)){
var c__4649__auto___71135 = cljs.core.chunk_first(seq__70226_71133__$1);
var G__71136 = cljs.core.chunk_rest(seq__70226_71133__$1);
var G__71137 = c__4649__auto___71135;
var G__71138 = cljs.core.count(c__4649__auto___71135);
var G__71139 = (0);
seq__70226_71116 = G__71136;
chunk__70228_71117 = G__71137;
count__70229_71118 = G__71138;
i__70230_71119 = G__71139;
continue;
} else {
var child_71140 = cljs.core.first(seq__70226_71133__$1);
if(cljs.core.truth_(child_71140)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_71140);


var G__71141 = cljs.core.next(seq__70226_71133__$1);
var G__71142 = null;
var G__71143 = (0);
var G__71144 = (0);
seq__70226_71116 = G__71141;
chunk__70228_71117 = G__71142;
count__70229_71118 = G__71143;
i__70230_71119 = G__71144;
continue;
} else {
var G__71145 = cljs.core.next(seq__70226_71133__$1);
var G__71146 = null;
var G__71147 = (0);
var G__71148 = (0);
seq__70226_71116 = G__71145;
chunk__70228_71117 = G__71146;
count__70229_71118 = G__71147;
i__70230_71119 = G__71148;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_71115);
}


var G__71149 = cljs.core.next(seq__70162_71108__$1);
var G__71150 = null;
var G__71151 = (0);
var G__71152 = (0);
seq__70162_71061 = G__71149;
chunk__70163_71062 = G__71150;
count__70164_71063 = G__71151;
i__70165_71064 = G__71152;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__70274 = cljs.core.seq(node);
var chunk__70275 = null;
var count__70276 = (0);
var i__70277 = (0);
while(true){
if((i__70277 < count__70276)){
var n = chunk__70275.cljs$core$IIndexed$_nth$arity$2(null,i__70277);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__71161 = seq__70274;
var G__71162 = chunk__70275;
var G__71163 = count__70276;
var G__71164 = (i__70277 + (1));
seq__70274 = G__71161;
chunk__70275 = G__71162;
count__70276 = G__71163;
i__70277 = G__71164;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__70274);
if(temp__5753__auto__){
var seq__70274__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70274__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__70274__$1);
var G__71166 = cljs.core.chunk_rest(seq__70274__$1);
var G__71167 = c__4649__auto__;
var G__71168 = cljs.core.count(c__4649__auto__);
var G__71169 = (0);
seq__70274 = G__71166;
chunk__70275 = G__71167;
count__70276 = G__71168;
i__70277 = G__71169;
continue;
} else {
var n = cljs.core.first(seq__70274__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__71170 = cljs.core.next(seq__70274__$1);
var G__71171 = null;
var G__71172 = (0);
var G__71173 = (0);
seq__70274 = G__71170;
chunk__70275 = G__71171;
count__70276 = G__71172;
i__70277 = G__71173;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__70308 = arguments.length;
switch (G__70308) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__70326 = arguments.length;
switch (G__70326) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__70356 = arguments.length;
switch (G__70356) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71195 = arguments.length;
var i__4830__auto___71196 = (0);
while(true){
if((i__4830__auto___71196 < len__4829__auto___71195)){
args__4835__auto__.push((arguments[i__4830__auto___71196]));

var G__71197 = (i__4830__auto___71196 + (1));
i__4830__auto___71196 = G__71197;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__70401_71198 = cljs.core.seq(nodes);
var chunk__70402_71199 = null;
var count__70403_71200 = (0);
var i__70404_71201 = (0);
while(true){
if((i__70404_71201 < count__70403_71200)){
var node_71202 = chunk__70402_71199.cljs$core$IIndexed$_nth$arity$2(null,i__70404_71201);
fragment.appendChild(shadow.dom._to_dom(node_71202));


var G__71203 = seq__70401_71198;
var G__71204 = chunk__70402_71199;
var G__71205 = count__70403_71200;
var G__71206 = (i__70404_71201 + (1));
seq__70401_71198 = G__71203;
chunk__70402_71199 = G__71204;
count__70403_71200 = G__71205;
i__70404_71201 = G__71206;
continue;
} else {
var temp__5753__auto___71208 = cljs.core.seq(seq__70401_71198);
if(temp__5753__auto___71208){
var seq__70401_71209__$1 = temp__5753__auto___71208;
if(cljs.core.chunked_seq_QMARK_(seq__70401_71209__$1)){
var c__4649__auto___71210 = cljs.core.chunk_first(seq__70401_71209__$1);
var G__71211 = cljs.core.chunk_rest(seq__70401_71209__$1);
var G__71212 = c__4649__auto___71210;
var G__71213 = cljs.core.count(c__4649__auto___71210);
var G__71214 = (0);
seq__70401_71198 = G__71211;
chunk__70402_71199 = G__71212;
count__70403_71200 = G__71213;
i__70404_71201 = G__71214;
continue;
} else {
var node_71219 = cljs.core.first(seq__70401_71209__$1);
fragment.appendChild(shadow.dom._to_dom(node_71219));


var G__71220 = cljs.core.next(seq__70401_71209__$1);
var G__71221 = null;
var G__71222 = (0);
var G__71223 = (0);
seq__70401_71198 = G__71220;
chunk__70402_71199 = G__71221;
count__70403_71200 = G__71222;
i__70404_71201 = G__71223;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq70392){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70392));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__70423_71230 = cljs.core.seq(scripts);
var chunk__70424_71231 = null;
var count__70425_71232 = (0);
var i__70426_71233 = (0);
while(true){
if((i__70426_71233 < count__70425_71232)){
var vec__70441_71234 = chunk__70424_71231.cljs$core$IIndexed$_nth$arity$2(null,i__70426_71233);
var script_tag_71235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70441_71234,(0),null);
var script_body_71236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70441_71234,(1),null);
eval(script_body_71236);


var G__71237 = seq__70423_71230;
var G__71238 = chunk__70424_71231;
var G__71239 = count__70425_71232;
var G__71240 = (i__70426_71233 + (1));
seq__70423_71230 = G__71237;
chunk__70424_71231 = G__71238;
count__70425_71232 = G__71239;
i__70426_71233 = G__71240;
continue;
} else {
var temp__5753__auto___71241 = cljs.core.seq(seq__70423_71230);
if(temp__5753__auto___71241){
var seq__70423_71242__$1 = temp__5753__auto___71241;
if(cljs.core.chunked_seq_QMARK_(seq__70423_71242__$1)){
var c__4649__auto___71243 = cljs.core.chunk_first(seq__70423_71242__$1);
var G__71245 = cljs.core.chunk_rest(seq__70423_71242__$1);
var G__71246 = c__4649__auto___71243;
var G__71247 = cljs.core.count(c__4649__auto___71243);
var G__71248 = (0);
seq__70423_71230 = G__71245;
chunk__70424_71231 = G__71246;
count__70425_71232 = G__71247;
i__70426_71233 = G__71248;
continue;
} else {
var vec__70449_71249 = cljs.core.first(seq__70423_71242__$1);
var script_tag_71250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70449_71249,(0),null);
var script_body_71251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70449_71249,(1),null);
eval(script_body_71251);


var G__71257 = cljs.core.next(seq__70423_71242__$1);
var G__71258 = null;
var G__71259 = (0);
var G__71260 = (0);
seq__70423_71230 = G__71257;
chunk__70424_71231 = G__71258;
count__70425_71232 = G__71259;
i__70426_71233 = G__71260;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__70453){
var vec__70454 = p__70453;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70454,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70454,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__70482 = arguments.length;
switch (G__70482) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__70532 = cljs.core.seq(style_keys);
var chunk__70533 = null;
var count__70534 = (0);
var i__70535 = (0);
while(true){
if((i__70535 < count__70534)){
var it = chunk__70533.cljs$core$IIndexed$_nth$arity$2(null,i__70535);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__71294 = seq__70532;
var G__71295 = chunk__70533;
var G__71296 = count__70534;
var G__71297 = (i__70535 + (1));
seq__70532 = G__71294;
chunk__70533 = G__71295;
count__70534 = G__71296;
i__70535 = G__71297;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__70532);
if(temp__5753__auto__){
var seq__70532__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70532__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__70532__$1);
var G__71298 = cljs.core.chunk_rest(seq__70532__$1);
var G__71299 = c__4649__auto__;
var G__71300 = cljs.core.count(c__4649__auto__);
var G__71301 = (0);
seq__70532 = G__71298;
chunk__70533 = G__71299;
count__70534 = G__71300;
i__70535 = G__71301;
continue;
} else {
var it = cljs.core.first(seq__70532__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__71302 = cljs.core.next(seq__70532__$1);
var G__71303 = null;
var G__71304 = (0);
var G__71305 = (0);
seq__70532 = G__71302;
chunk__70533 = G__71303;
count__70534 = G__71304;
i__70535 = G__71305;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k70556,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__70570 = k70556;
var G__70570__$1 = (((G__70570 instanceof cljs.core.Keyword))?G__70570.fqn:null);
switch (G__70570__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70556,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__70581){
var vec__70582 = p__70581;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70582,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70582,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70555){
var self__ = this;
var G__70555__$1 = this;
return (new cljs.core.RecordIter((0),G__70555__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70557,other70558){
var self__ = this;
var this70557__$1 = this;
return (((!((other70558 == null)))) && ((((this70557__$1.constructor === other70558.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70557__$1.x,other70558.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70557__$1.y,other70558.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70557__$1.__extmap,other70558.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k70556){
var self__ = this;
var this__4479__auto____$1 = this;
var G__70621 = k70556;
var G__70621__$1 = (((G__70621 instanceof cljs.core.Keyword))?G__70621.fqn:null);
switch (G__70621__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k70556);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__70555){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__70627 = cljs.core.keyword_identical_QMARK_;
var expr__70628 = k__4481__auto__;
if(cljs.core.truth_((pred__70627.cljs$core$IFn$_invoke$arity$2 ? pred__70627.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__70628) : pred__70627.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__70628)))){
return (new shadow.dom.Coordinate(G__70555,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__70627.cljs$core$IFn$_invoke$arity$2 ? pred__70627.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__70628) : pred__70627.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__70628)))){
return (new shadow.dom.Coordinate(self__.x,G__70555,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__70555),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__70555){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__70555,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__70562){
var extmap__4512__auto__ = (function (){var G__70646 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__70562,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__70562)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__70646);
} else {
return G__70646;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__70562),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__70562),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k70657,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__70669 = k70657;
var G__70669__$1 = (((G__70669 instanceof cljs.core.Keyword))?G__70669.fqn:null);
switch (G__70669__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70657,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__70674){
var vec__70675 = p__70674;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70675,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70675,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70656){
var self__ = this;
var G__70656__$1 = this;
return (new cljs.core.RecordIter((0),G__70656__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70658,other70659){
var self__ = this;
var this70658__$1 = this;
return (((!((other70659 == null)))) && ((((this70658__$1.constructor === other70659.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70658__$1.w,other70659.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70658__$1.h,other70659.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70658__$1.__extmap,other70659.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k70657){
var self__ = this;
var this__4479__auto____$1 = this;
var G__70691 = k70657;
var G__70691__$1 = (((G__70691 instanceof cljs.core.Keyword))?G__70691.fqn:null);
switch (G__70691__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k70657);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__70656){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__70692 = cljs.core.keyword_identical_QMARK_;
var expr__70693 = k__4481__auto__;
if(cljs.core.truth_((pred__70692.cljs$core$IFn$_invoke$arity$2 ? pred__70692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__70693) : pred__70692.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__70693)))){
return (new shadow.dom.Size(G__70656,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__70692.cljs$core$IFn$_invoke$arity$2 ? pred__70692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__70693) : pred__70692.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__70693)))){
return (new shadow.dom.Size(self__.w,G__70656,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__70656),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__70656){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__70656,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__70662){
var extmap__4512__auto__ = (function (){var G__70699 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__70662,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__70662)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__70699);
} else {
return G__70699;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__70662),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__70662),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__71451 = (i + (1));
var G__71452 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__71451;
ret = G__71452;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70719){
var vec__70720 = p__70719;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70720,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70720,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__70726 = arguments.length;
switch (G__70726) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__71480 = ps;
var G__71481 = (i + (1));
el__$1 = G__71480;
i = G__71481;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__70743 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70743,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70743,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70743,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__70747_71493 = cljs.core.seq(props);
var chunk__70748_71494 = null;
var count__70749_71495 = (0);
var i__70750_71496 = (0);
while(true){
if((i__70750_71496 < count__70749_71495)){
var vec__70761_71497 = chunk__70748_71494.cljs$core$IIndexed$_nth$arity$2(null,i__70750_71496);
var k_71498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70761_71497,(0),null);
var v_71499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70761_71497,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_71498);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_71498),v_71499);


var G__71501 = seq__70747_71493;
var G__71502 = chunk__70748_71494;
var G__71503 = count__70749_71495;
var G__71504 = (i__70750_71496 + (1));
seq__70747_71493 = G__71501;
chunk__70748_71494 = G__71502;
count__70749_71495 = G__71503;
i__70750_71496 = G__71504;
continue;
} else {
var temp__5753__auto___71506 = cljs.core.seq(seq__70747_71493);
if(temp__5753__auto___71506){
var seq__70747_71508__$1 = temp__5753__auto___71506;
if(cljs.core.chunked_seq_QMARK_(seq__70747_71508__$1)){
var c__4649__auto___71511 = cljs.core.chunk_first(seq__70747_71508__$1);
var G__71512 = cljs.core.chunk_rest(seq__70747_71508__$1);
var G__71513 = c__4649__auto___71511;
var G__71514 = cljs.core.count(c__4649__auto___71511);
var G__71515 = (0);
seq__70747_71493 = G__71512;
chunk__70748_71494 = G__71513;
count__70749_71495 = G__71514;
i__70750_71496 = G__71515;
continue;
} else {
var vec__70765_71516 = cljs.core.first(seq__70747_71508__$1);
var k_71517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70765_71516,(0),null);
var v_71518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70765_71516,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_71517);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_71517),v_71518);


var G__71523 = cljs.core.next(seq__70747_71508__$1);
var G__71524 = null;
var G__71525 = (0);
var G__71526 = (0);
seq__70747_71493 = G__71523;
chunk__70748_71494 = G__71524;
count__70749_71495 = G__71525;
i__70750_71496 = G__71526;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__70769 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70769,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70769,(1),null);
var seq__70772_71531 = cljs.core.seq(node_children);
var chunk__70774_71532 = null;
var count__70775_71533 = (0);
var i__70776_71534 = (0);
while(true){
if((i__70776_71534 < count__70775_71533)){
var child_struct_71535 = chunk__70774_71532.cljs$core$IIndexed$_nth$arity$2(null,i__70776_71534);
if((!((child_struct_71535 == null)))){
if(typeof child_struct_71535 === 'string'){
var text_71536 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_71536),child_struct_71535].join(''));
} else {
var children_71539 = shadow.dom.svg_node(child_struct_71535);
if(cljs.core.seq_QMARK_(children_71539)){
var seq__70793_71543 = cljs.core.seq(children_71539);
var chunk__70795_71544 = null;
var count__70796_71545 = (0);
var i__70797_71546 = (0);
while(true){
if((i__70797_71546 < count__70796_71545)){
var child_71549 = chunk__70795_71544.cljs$core$IIndexed$_nth$arity$2(null,i__70797_71546);
if(cljs.core.truth_(child_71549)){
node.appendChild(child_71549);


var G__71552 = seq__70793_71543;
var G__71553 = chunk__70795_71544;
var G__71554 = count__70796_71545;
var G__71555 = (i__70797_71546 + (1));
seq__70793_71543 = G__71552;
chunk__70795_71544 = G__71553;
count__70796_71545 = G__71554;
i__70797_71546 = G__71555;
continue;
} else {
var G__71557 = seq__70793_71543;
var G__71558 = chunk__70795_71544;
var G__71559 = count__70796_71545;
var G__71560 = (i__70797_71546 + (1));
seq__70793_71543 = G__71557;
chunk__70795_71544 = G__71558;
count__70796_71545 = G__71559;
i__70797_71546 = G__71560;
continue;
}
} else {
var temp__5753__auto___71562 = cljs.core.seq(seq__70793_71543);
if(temp__5753__auto___71562){
var seq__70793_71563__$1 = temp__5753__auto___71562;
if(cljs.core.chunked_seq_QMARK_(seq__70793_71563__$1)){
var c__4649__auto___71564 = cljs.core.chunk_first(seq__70793_71563__$1);
var G__71565 = cljs.core.chunk_rest(seq__70793_71563__$1);
var G__71566 = c__4649__auto___71564;
var G__71567 = cljs.core.count(c__4649__auto___71564);
var G__71568 = (0);
seq__70793_71543 = G__71565;
chunk__70795_71544 = G__71566;
count__70796_71545 = G__71567;
i__70797_71546 = G__71568;
continue;
} else {
var child_71569 = cljs.core.first(seq__70793_71563__$1);
if(cljs.core.truth_(child_71569)){
node.appendChild(child_71569);


var G__71570 = cljs.core.next(seq__70793_71563__$1);
var G__71571 = null;
var G__71572 = (0);
var G__71573 = (0);
seq__70793_71543 = G__71570;
chunk__70795_71544 = G__71571;
count__70796_71545 = G__71572;
i__70797_71546 = G__71573;
continue;
} else {
var G__71574 = cljs.core.next(seq__70793_71563__$1);
var G__71575 = null;
var G__71576 = (0);
var G__71577 = (0);
seq__70793_71543 = G__71574;
chunk__70795_71544 = G__71575;
count__70796_71545 = G__71576;
i__70797_71546 = G__71577;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_71539);
}
}


var G__71578 = seq__70772_71531;
var G__71579 = chunk__70774_71532;
var G__71580 = count__70775_71533;
var G__71581 = (i__70776_71534 + (1));
seq__70772_71531 = G__71578;
chunk__70774_71532 = G__71579;
count__70775_71533 = G__71580;
i__70776_71534 = G__71581;
continue;
} else {
var G__71582 = seq__70772_71531;
var G__71583 = chunk__70774_71532;
var G__71584 = count__70775_71533;
var G__71585 = (i__70776_71534 + (1));
seq__70772_71531 = G__71582;
chunk__70774_71532 = G__71583;
count__70775_71533 = G__71584;
i__70776_71534 = G__71585;
continue;
}
} else {
var temp__5753__auto___71586 = cljs.core.seq(seq__70772_71531);
if(temp__5753__auto___71586){
var seq__70772_71587__$1 = temp__5753__auto___71586;
if(cljs.core.chunked_seq_QMARK_(seq__70772_71587__$1)){
var c__4649__auto___71588 = cljs.core.chunk_first(seq__70772_71587__$1);
var G__71589 = cljs.core.chunk_rest(seq__70772_71587__$1);
var G__71590 = c__4649__auto___71588;
var G__71591 = cljs.core.count(c__4649__auto___71588);
var G__71592 = (0);
seq__70772_71531 = G__71589;
chunk__70774_71532 = G__71590;
count__70775_71533 = G__71591;
i__70776_71534 = G__71592;
continue;
} else {
var child_struct_71593 = cljs.core.first(seq__70772_71587__$1);
if((!((child_struct_71593 == null)))){
if(typeof child_struct_71593 === 'string'){
var text_71594 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_71594),child_struct_71593].join(''));
} else {
var children_71595 = shadow.dom.svg_node(child_struct_71593);
if(cljs.core.seq_QMARK_(children_71595)){
var seq__70809_71596 = cljs.core.seq(children_71595);
var chunk__70813_71597 = null;
var count__70814_71598 = (0);
var i__70815_71599 = (0);
while(true){
if((i__70815_71599 < count__70814_71598)){
var child_71600 = chunk__70813_71597.cljs$core$IIndexed$_nth$arity$2(null,i__70815_71599);
if(cljs.core.truth_(child_71600)){
node.appendChild(child_71600);


var G__71601 = seq__70809_71596;
var G__71602 = chunk__70813_71597;
var G__71603 = count__70814_71598;
var G__71604 = (i__70815_71599 + (1));
seq__70809_71596 = G__71601;
chunk__70813_71597 = G__71602;
count__70814_71598 = G__71603;
i__70815_71599 = G__71604;
continue;
} else {
var G__71605 = seq__70809_71596;
var G__71606 = chunk__70813_71597;
var G__71607 = count__70814_71598;
var G__71608 = (i__70815_71599 + (1));
seq__70809_71596 = G__71605;
chunk__70813_71597 = G__71606;
count__70814_71598 = G__71607;
i__70815_71599 = G__71608;
continue;
}
} else {
var temp__5753__auto___71609__$1 = cljs.core.seq(seq__70809_71596);
if(temp__5753__auto___71609__$1){
var seq__70809_71610__$1 = temp__5753__auto___71609__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70809_71610__$1)){
var c__4649__auto___71611 = cljs.core.chunk_first(seq__70809_71610__$1);
var G__71612 = cljs.core.chunk_rest(seq__70809_71610__$1);
var G__71613 = c__4649__auto___71611;
var G__71614 = cljs.core.count(c__4649__auto___71611);
var G__71615 = (0);
seq__70809_71596 = G__71612;
chunk__70813_71597 = G__71613;
count__70814_71598 = G__71614;
i__70815_71599 = G__71615;
continue;
} else {
var child_71616 = cljs.core.first(seq__70809_71610__$1);
if(cljs.core.truth_(child_71616)){
node.appendChild(child_71616);


var G__71617 = cljs.core.next(seq__70809_71610__$1);
var G__71618 = null;
var G__71619 = (0);
var G__71620 = (0);
seq__70809_71596 = G__71617;
chunk__70813_71597 = G__71618;
count__70814_71598 = G__71619;
i__70815_71599 = G__71620;
continue;
} else {
var G__71621 = cljs.core.next(seq__70809_71610__$1);
var G__71622 = null;
var G__71623 = (0);
var G__71624 = (0);
seq__70809_71596 = G__71621;
chunk__70813_71597 = G__71622;
count__70814_71598 = G__71623;
i__70815_71599 = G__71624;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_71595);
}
}


var G__71625 = cljs.core.next(seq__70772_71587__$1);
var G__71626 = null;
var G__71627 = (0);
var G__71628 = (0);
seq__70772_71531 = G__71625;
chunk__70774_71532 = G__71626;
count__70775_71533 = G__71627;
i__70776_71534 = G__71628;
continue;
} else {
var G__71629 = cljs.core.next(seq__70772_71587__$1);
var G__71630 = null;
var G__71631 = (0);
var G__71632 = (0);
seq__70772_71531 = G__71629;
chunk__70774_71532 = G__71630;
count__70775_71533 = G__71631;
i__70776_71534 = G__71632;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71641 = arguments.length;
var i__4830__auto___71642 = (0);
while(true){
if((i__4830__auto___71642 < len__4829__auto___71641)){
args__4835__auto__.push((arguments[i__4830__auto___71642]));

var G__71643 = (i__4830__auto___71642 + (1));
i__4830__auto___71642 = G__71643;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq70826){
var G__70827 = cljs.core.first(seq70826);
var seq70826__$1 = cljs.core.next(seq70826);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70827,seq70826__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__70833 = arguments.length;
switch (G__70833) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__65555__auto___71651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_70842){
var state_val_70843 = (state_70842[(1)]);
if((state_val_70843 === (1))){
var state_70842__$1 = state_70842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70842__$1,(2),once_or_cleanup);
} else {
if((state_val_70843 === (2))){
var inst_70839 = (state_70842[(2)]);
var inst_70840 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_70842__$1 = (function (){var statearr_70845 = state_70842;
(statearr_70845[(7)] = inst_70839);

return statearr_70845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_70842__$1,inst_70840);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__65222__auto__ = null;
var shadow$dom$state_machine__65222__auto____0 = (function (){
var statearr_70847 = [null,null,null,null,null,null,null,null];
(statearr_70847[(0)] = shadow$dom$state_machine__65222__auto__);

(statearr_70847[(1)] = (1));

return statearr_70847;
});
var shadow$dom$state_machine__65222__auto____1 = (function (state_70842){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_70842);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e70850){if((e70850 instanceof Object)){
var ex__65226__auto__ = e70850;
var statearr_70851_71652 = state_70842;
(statearr_70851_71652[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71653 = state_70842;
state_70842 = G__71653;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
shadow$dom$state_machine__65222__auto__ = function(state_70842){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__65222__auto____0.call(this);
case 1:
return shadow$dom$state_machine__65222__auto____1.call(this,state_70842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__65222__auto____0;
shadow$dom$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__65222__auto____1;
return shadow$dom$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_70859 = f__65556__auto__();
(statearr_70859[(6)] = c__65555__auto___71651);

return statearr_70859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
