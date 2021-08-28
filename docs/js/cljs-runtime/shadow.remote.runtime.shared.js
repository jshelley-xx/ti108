goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__66386,res){
var map__66387 = p__66386;
var map__66387__$1 = cljs.core.__destructure_map(map__66387);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66387__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66387__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__66398 = res;
var G__66398__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66398,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__66398);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66398__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__66398__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__66427 = arguments.length;
switch (G__66427) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__66437,msg,handlers,timeout_after_ms){
var map__66438 = p__66437;
var map__66438__$1 = cljs.core.__destructure_map(map__66438);
var runtime = map__66438__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66438__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___66773 = arguments.length;
var i__4830__auto___66774 = (0);
while(true){
if((i__4830__auto___66774 < len__4829__auto___66773)){
args__4835__auto__.push((arguments[i__4830__auto___66774]));

var G__66775 = (i__4830__auto___66774 + (1));
i__4830__auto___66774 = G__66775;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__66461,ev,args){
var map__66464 = p__66461;
var map__66464__$1 = cljs.core.__destructure_map(map__66464);
var runtime = map__66464__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66464__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__66466 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__66469 = null;
var count__66470 = (0);
var i__66471 = (0);
while(true){
if((i__66471 < count__66470)){
var ext = chunk__66469.cljs$core$IIndexed$_nth$arity$2(null,i__66471);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__66781 = seq__66466;
var G__66782 = chunk__66469;
var G__66783 = count__66470;
var G__66784 = (i__66471 + (1));
seq__66466 = G__66781;
chunk__66469 = G__66782;
count__66470 = G__66783;
i__66471 = G__66784;
continue;
} else {
var G__66785 = seq__66466;
var G__66786 = chunk__66469;
var G__66787 = count__66470;
var G__66788 = (i__66471 + (1));
seq__66466 = G__66785;
chunk__66469 = G__66786;
count__66470 = G__66787;
i__66471 = G__66788;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__66466);
if(temp__5753__auto__){
var seq__66466__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66466__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__66466__$1);
var G__66793 = cljs.core.chunk_rest(seq__66466__$1);
var G__66794 = c__4649__auto__;
var G__66795 = cljs.core.count(c__4649__auto__);
var G__66796 = (0);
seq__66466 = G__66793;
chunk__66469 = G__66794;
count__66470 = G__66795;
i__66471 = G__66796;
continue;
} else {
var ext = cljs.core.first(seq__66466__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__66798 = cljs.core.next(seq__66466__$1);
var G__66799 = null;
var G__66800 = (0);
var G__66801 = (0);
seq__66466 = G__66798;
chunk__66469 = G__66799;
count__66470 = G__66800;
i__66471 = G__66801;
continue;
} else {
var G__66802 = cljs.core.next(seq__66466__$1);
var G__66803 = null;
var G__66804 = (0);
var G__66805 = (0);
seq__66466 = G__66802;
chunk__66469 = G__66803;
count__66470 = G__66804;
i__66471 = G__66805;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq66449){
var G__66450 = cljs.core.first(seq66449);
var seq66449__$1 = cljs.core.next(seq66449);
var G__66451 = cljs.core.first(seq66449__$1);
var seq66449__$2 = cljs.core.next(seq66449__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66450,G__66451,seq66449__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__66540,p__66541){
var map__66542 = p__66540;
var map__66542__$1 = cljs.core.__destructure_map(map__66542);
var runtime = map__66542__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66542__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__66543 = p__66541;
var map__66543__$1 = cljs.core.__destructure_map(map__66543);
var msg = map__66543__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66543__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__66546 = cljs.core.deref(state_ref);
var map__66546__$1 = cljs.core.__destructure_map(map__66546);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66546__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66546__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__66555){
var map__66558 = p__66555;
var map__66558__$1 = cljs.core.__destructure_map(map__66558);
var runtime = map__66558__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66558__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__66567,msg){
var map__66569 = p__66567;
var map__66569__$1 = cljs.core.__destructure_map(map__66569);
var runtime = map__66569__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66569__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__66584,key,p__66585){
var map__66589 = p__66584;
var map__66589__$1 = cljs.core.__destructure_map(map__66589);
var state = map__66589__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66589__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__66590 = p__66585;
var map__66590__$1 = cljs.core.__destructure_map(map__66590);
var spec = map__66590__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66590__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__66612,key,spec){
var map__66613 = p__66612;
var map__66613__$1 = cljs.core.__destructure_map(map__66613);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66613__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__66621_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__66621_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__66622_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__66622_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__66624_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__66624_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__66625_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__66625_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__66626_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__66626_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__66647,key){
var map__66649 = p__66647;
var map__66649__$1 = cljs.core.__destructure_map(map__66649);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66649__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__66666,msg){
var map__66668 = p__66666;
var map__66668__$1 = cljs.core.__destructure_map(map__66668);
var runtime = map__66668__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66668__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__66676,p__66677){
var map__66678 = p__66676;
var map__66678__$1 = cljs.core.__destructure_map(map__66678);
var runtime = map__66678__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__66679 = p__66677;
var map__66679__$1 = cljs.core.__destructure_map(map__66679);
var msg = map__66679__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66679__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66679__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__66695 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__66697 = null;
var count__66698 = (0);
var i__66699 = (0);
while(true){
if((i__66699 < count__66698)){
var map__66722 = chunk__66697.cljs$core$IIndexed$_nth$arity$2(null,i__66699);
var map__66722__$1 = cljs.core.__destructure_map(map__66722);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66722__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__66855 = seq__66695;
var G__66856 = chunk__66697;
var G__66857 = count__66698;
var G__66858 = (i__66699 + (1));
seq__66695 = G__66855;
chunk__66697 = G__66856;
count__66698 = G__66857;
i__66699 = G__66858;
continue;
} else {
var G__66859 = seq__66695;
var G__66860 = chunk__66697;
var G__66861 = count__66698;
var G__66862 = (i__66699 + (1));
seq__66695 = G__66859;
chunk__66697 = G__66860;
count__66698 = G__66861;
i__66699 = G__66862;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__66695);
if(temp__5753__auto__){
var seq__66695__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66695__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__66695__$1);
var G__66864 = cljs.core.chunk_rest(seq__66695__$1);
var G__66865 = c__4649__auto__;
var G__66866 = cljs.core.count(c__4649__auto__);
var G__66867 = (0);
seq__66695 = G__66864;
chunk__66697 = G__66865;
count__66698 = G__66866;
i__66699 = G__66867;
continue;
} else {
var map__66724 = cljs.core.first(seq__66695__$1);
var map__66724__$1 = cljs.core.__destructure_map(map__66724);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66724__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__66868 = cljs.core.next(seq__66695__$1);
var G__66869 = null;
var G__66870 = (0);
var G__66871 = (0);
seq__66695 = G__66868;
chunk__66697 = G__66869;
count__66698 = G__66870;
i__66699 = G__66871;
continue;
} else {
var G__66876 = cljs.core.next(seq__66695__$1);
var G__66877 = null;
var G__66878 = (0);
var G__66879 = (0);
seq__66695 = G__66876;
chunk__66697 = G__66877;
count__66698 = G__66878;
i__66699 = G__66879;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
