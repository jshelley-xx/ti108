goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__71940,p__71941){
var map__71942 = p__71940;
var map__71942__$1 = cljs.core.__destructure_map(map__71942);
var svc = map__71942__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71942__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71942__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71942__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__71943 = p__71941;
var map__71943__$1 = cljs.core.__destructure_map(map__71943);
var msg = map__71943__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71943__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71943__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71943__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71943__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__71954,p__71955){
var map__71956 = p__71954;
var map__71956__$1 = cljs.core.__destructure_map(map__71956);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71956__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__71957 = p__71955;
var map__71957__$1 = cljs.core.__destructure_map(map__71957);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71957__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__71970,p__71971){
var map__71972 = p__71970;
var map__71972__$1 = cljs.core.__destructure_map(map__71972);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71972__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71972__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__71973 = p__71971;
var map__71973__$1 = cljs.core.__destructure_map(map__71973);
var msg = map__71973__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71973__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__71981,tid){
var map__71982 = p__71981;
var map__71982__$1 = cljs.core.__destructure_map(map__71982);
var svc = map__71982__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71982__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__71991 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__71992 = null;
var count__71993 = (0);
var i__71994 = (0);
while(true){
if((i__71994 < count__71993)){
var vec__72012 = chunk__71992.cljs$core$IIndexed$_nth$arity$2(null,i__71994);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72012,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72012,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__72043 = seq__71991;
var G__72044 = chunk__71992;
var G__72045 = count__71993;
var G__72046 = (i__71994 + (1));
seq__71991 = G__72043;
chunk__71992 = G__72044;
count__71993 = G__72045;
i__71994 = G__72046;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__71991);
if(temp__5753__auto__){
var seq__71991__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71991__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__71991__$1);
var G__72047 = cljs.core.chunk_rest(seq__71991__$1);
var G__72048 = c__4649__auto__;
var G__72049 = cljs.core.count(c__4649__auto__);
var G__72050 = (0);
seq__71991 = G__72047;
chunk__71992 = G__72048;
count__71993 = G__72049;
i__71994 = G__72050;
continue;
} else {
var vec__72017 = cljs.core.first(seq__71991__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72017,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72017,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__72052 = cljs.core.next(seq__71991__$1);
var G__72053 = null;
var G__72054 = (0);
var G__72055 = (0);
seq__71991 = G__72052;
chunk__71992 = G__72053;
count__71993 = G__72054;
i__71994 = G__72055;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__71983_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__71983_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__71984_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__71984_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__71985_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__71985_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__71986_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__71986_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__72028){
var map__72029 = p__72028;
var map__72029__$1 = cljs.core.__destructure_map(map__72029);
var svc = map__72029__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72029__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72029__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
