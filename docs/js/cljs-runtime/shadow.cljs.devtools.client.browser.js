goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___73467 = arguments.length;
var i__4830__auto___73468 = (0);
while(true){
if((i__4830__auto___73468 < len__4829__auto___73467)){
args__4835__auto__.push((arguments[i__4830__auto___73468]));

var G__73469 = (i__4830__auto___73468 + (1));
i__4830__auto___73468 = G__73469;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq73219){
var G__73220 = cljs.core.first(seq73219);
var seq73219__$1 = cljs.core.next(seq73219);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73220,seq73219__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__73224 = cljs.core.seq(sources);
var chunk__73225 = null;
var count__73226 = (0);
var i__73227 = (0);
while(true){
if((i__73227 < count__73226)){
var map__73235 = chunk__73225.cljs$core$IIndexed$_nth$arity$2(null,i__73227);
var map__73235__$1 = cljs.core.__destructure_map(map__73235);
var src = map__73235__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73235__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73235__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73235__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73235__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e73236){var e_73471 = e73236;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73471);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73471.message)].join('')));
}

var G__73472 = seq__73224;
var G__73473 = chunk__73225;
var G__73474 = count__73226;
var G__73475 = (i__73227 + (1));
seq__73224 = G__73472;
chunk__73225 = G__73473;
count__73226 = G__73474;
i__73227 = G__73475;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73224);
if(temp__5753__auto__){
var seq__73224__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73224__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__73224__$1);
var G__73476 = cljs.core.chunk_rest(seq__73224__$1);
var G__73477 = c__4649__auto__;
var G__73478 = cljs.core.count(c__4649__auto__);
var G__73479 = (0);
seq__73224 = G__73476;
chunk__73225 = G__73477;
count__73226 = G__73478;
i__73227 = G__73479;
continue;
} else {
var map__73242 = cljs.core.first(seq__73224__$1);
var map__73242__$1 = cljs.core.__destructure_map(map__73242);
var src = map__73242__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73242__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73242__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73242__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73242__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e73243){var e_73481 = e73243;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73481);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73481.message)].join('')));
}

var G__73484 = cljs.core.next(seq__73224__$1);
var G__73485 = null;
var G__73486 = (0);
var G__73487 = (0);
seq__73224 = G__73484;
chunk__73225 = G__73485;
count__73226 = G__73486;
i__73227 = G__73487;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__73248 = cljs.core.seq(js_requires);
var chunk__73249 = null;
var count__73250 = (0);
var i__73251 = (0);
while(true){
if((i__73251 < count__73250)){
var js_ns = chunk__73249.cljs$core$IIndexed$_nth$arity$2(null,i__73251);
var require_str_73489 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73489);


var G__73490 = seq__73248;
var G__73491 = chunk__73249;
var G__73492 = count__73250;
var G__73493 = (i__73251 + (1));
seq__73248 = G__73490;
chunk__73249 = G__73491;
count__73250 = G__73492;
i__73251 = G__73493;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73248);
if(temp__5753__auto__){
var seq__73248__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73248__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__73248__$1);
var G__73494 = cljs.core.chunk_rest(seq__73248__$1);
var G__73495 = c__4649__auto__;
var G__73496 = cljs.core.count(c__4649__auto__);
var G__73497 = (0);
seq__73248 = G__73494;
chunk__73249 = G__73495;
count__73250 = G__73496;
i__73251 = G__73497;
continue;
} else {
var js_ns = cljs.core.first(seq__73248__$1);
var require_str_73499 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73499);


var G__73500 = cljs.core.next(seq__73248__$1);
var G__73501 = null;
var G__73502 = (0);
var G__73503 = (0);
seq__73248 = G__73500;
chunk__73249 = G__73501;
count__73250 = G__73502;
i__73251 = G__73503;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__73255){
var map__73256 = p__73255;
var map__73256__$1 = cljs.core.__destructure_map(map__73256);
var msg = map__73256__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73256__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73256__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73257(s__73258){
return (new cljs.core.LazySeq(null,(function (){
var s__73258__$1 = s__73258;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73258__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__73264 = cljs.core.first(xs__6308__auto__);
var map__73264__$1 = cljs.core.__destructure_map(map__73264);
var src = map__73264__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73264__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__73258__$1,map__73264,map__73264__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__73256,map__73256__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73257_$_iter__73259(s__73260){
return (new cljs.core.LazySeq(null,((function (s__73258__$1,map__73264,map__73264__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__73256,map__73256__$1,msg,info,reload_info){
return (function (){
var s__73260__$1 = s__73260;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__73260__$1);
if(temp__5753__auto____$1){
var s__73260__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73260__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__73260__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__73262 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__73261 = (0);
while(true){
if((i__73261 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__73261);
cljs.core.chunk_append(b__73262,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__73516 = (i__73261 + (1));
i__73261 = G__73516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73262),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73257_$_iter__73259(cljs.core.chunk_rest(s__73260__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73262),null);
}
} else {
var warning = cljs.core.first(s__73260__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73257_$_iter__73259(cljs.core.rest(s__73260__$2)));
}
} else {
return null;
}
break;
}
});})(s__73258__$1,map__73264,map__73264__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__73256,map__73256__$1,msg,info,reload_info))
,null,null));
});})(s__73258__$1,map__73264,map__73264__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__73256,map__73256__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73257(cljs.core.rest(s__73258__$1)));
} else {
var G__73521 = cljs.core.rest(s__73258__$1);
s__73258__$1 = G__73521;
continue;
}
} else {
var G__73524 = cljs.core.rest(s__73258__$1);
s__73258__$1 = G__73524;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__73267_73532 = cljs.core.seq(warnings);
var chunk__73268_73533 = null;
var count__73269_73534 = (0);
var i__73270_73535 = (0);
while(true){
if((i__73270_73535 < count__73269_73534)){
var map__73274_73537 = chunk__73268_73533.cljs$core$IIndexed$_nth$arity$2(null,i__73270_73535);
var map__73274_73538__$1 = cljs.core.__destructure_map(map__73274_73537);
var w_73539 = map__73274_73538__$1;
var msg_73540__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73274_73538__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_73541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73274_73538__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_73542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73274_73538__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_73543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73274_73538__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_73543)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_73541),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_73542),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_73540__$1)].join(''));


var G__73547 = seq__73267_73532;
var G__73548 = chunk__73268_73533;
var G__73549 = count__73269_73534;
var G__73550 = (i__73270_73535 + (1));
seq__73267_73532 = G__73547;
chunk__73268_73533 = G__73548;
count__73269_73534 = G__73549;
i__73270_73535 = G__73550;
continue;
} else {
var temp__5753__auto___73552 = cljs.core.seq(seq__73267_73532);
if(temp__5753__auto___73552){
var seq__73267_73553__$1 = temp__5753__auto___73552;
if(cljs.core.chunked_seq_QMARK_(seq__73267_73553__$1)){
var c__4649__auto___73554 = cljs.core.chunk_first(seq__73267_73553__$1);
var G__73555 = cljs.core.chunk_rest(seq__73267_73553__$1);
var G__73556 = c__4649__auto___73554;
var G__73557 = cljs.core.count(c__4649__auto___73554);
var G__73558 = (0);
seq__73267_73532 = G__73555;
chunk__73268_73533 = G__73556;
count__73269_73534 = G__73557;
i__73270_73535 = G__73558;
continue;
} else {
var map__73276_73559 = cljs.core.first(seq__73267_73553__$1);
var map__73276_73560__$1 = cljs.core.__destructure_map(map__73276_73559);
var w_73561 = map__73276_73560__$1;
var msg_73562__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73276_73560__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_73563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73276_73560__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_73564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73276_73560__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_73565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73276_73560__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_73565)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_73563),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_73564),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_73562__$1)].join(''));


var G__73566 = cljs.core.next(seq__73267_73553__$1);
var G__73567 = null;
var G__73568 = (0);
var G__73569 = (0);
seq__73267_73532 = G__73566;
chunk__73268_73533 = G__73567;
count__73269_73534 = G__73568;
i__73270_73535 = G__73569;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__73254_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__73254_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__73284){
var map__73286 = p__73284;
var map__73286__$1 = cljs.core.__destructure_map(map__73286);
var msg = map__73286__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73286__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__73287 = cljs.core.seq(updates);
var chunk__73289 = null;
var count__73290 = (0);
var i__73291 = (0);
while(true){
if((i__73291 < count__73290)){
var path = chunk__73289.cljs$core$IIndexed$_nth$arity$2(null,i__73291);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73340_73572 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73344_73573 = null;
var count__73345_73574 = (0);
var i__73346_73575 = (0);
while(true){
if((i__73346_73575 < count__73345_73574)){
var node_73576 = chunk__73344_73573.cljs$core$IIndexed$_nth$arity$2(null,i__73346_73575);
if(cljs.core.not(node_73576.shadow$old)){
var path_match_73577 = shadow.cljs.devtools.client.browser.match_paths(node_73576.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73577)){
var new_link_73578 = (function (){var G__73355 = node_73576.cloneNode(true);
G__73355.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73577),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73355;
})();
(node_73576.shadow$old = true);

(new_link_73578.onload = ((function (seq__73340_73572,chunk__73344_73573,count__73345_73574,i__73346_73575,seq__73287,chunk__73289,count__73290,i__73291,new_link_73578,path_match_73577,node_73576,path,map__73286,map__73286__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_73576);
});})(seq__73340_73572,chunk__73344_73573,count__73345_73574,i__73346_73575,seq__73287,chunk__73289,count__73290,i__73291,new_link_73578,path_match_73577,node_73576,path,map__73286,map__73286__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73577], 0));

goog.dom.insertSiblingAfter(new_link_73578,node_73576);


var G__73582 = seq__73340_73572;
var G__73583 = chunk__73344_73573;
var G__73584 = count__73345_73574;
var G__73585 = (i__73346_73575 + (1));
seq__73340_73572 = G__73582;
chunk__73344_73573 = G__73583;
count__73345_73574 = G__73584;
i__73346_73575 = G__73585;
continue;
} else {
var G__73586 = seq__73340_73572;
var G__73587 = chunk__73344_73573;
var G__73588 = count__73345_73574;
var G__73589 = (i__73346_73575 + (1));
seq__73340_73572 = G__73586;
chunk__73344_73573 = G__73587;
count__73345_73574 = G__73588;
i__73346_73575 = G__73589;
continue;
}
} else {
var G__73590 = seq__73340_73572;
var G__73591 = chunk__73344_73573;
var G__73592 = count__73345_73574;
var G__73593 = (i__73346_73575 + (1));
seq__73340_73572 = G__73590;
chunk__73344_73573 = G__73591;
count__73345_73574 = G__73592;
i__73346_73575 = G__73593;
continue;
}
} else {
var temp__5753__auto___73594 = cljs.core.seq(seq__73340_73572);
if(temp__5753__auto___73594){
var seq__73340_73595__$1 = temp__5753__auto___73594;
if(cljs.core.chunked_seq_QMARK_(seq__73340_73595__$1)){
var c__4649__auto___73596 = cljs.core.chunk_first(seq__73340_73595__$1);
var G__73597 = cljs.core.chunk_rest(seq__73340_73595__$1);
var G__73598 = c__4649__auto___73596;
var G__73599 = cljs.core.count(c__4649__auto___73596);
var G__73600 = (0);
seq__73340_73572 = G__73597;
chunk__73344_73573 = G__73598;
count__73345_73574 = G__73599;
i__73346_73575 = G__73600;
continue;
} else {
var node_73601 = cljs.core.first(seq__73340_73595__$1);
if(cljs.core.not(node_73601.shadow$old)){
var path_match_73602 = shadow.cljs.devtools.client.browser.match_paths(node_73601.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73602)){
var new_link_73603 = (function (){var G__73362 = node_73601.cloneNode(true);
G__73362.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73602),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73362;
})();
(node_73601.shadow$old = true);

(new_link_73603.onload = ((function (seq__73340_73572,chunk__73344_73573,count__73345_73574,i__73346_73575,seq__73287,chunk__73289,count__73290,i__73291,new_link_73603,path_match_73602,node_73601,seq__73340_73595__$1,temp__5753__auto___73594,path,map__73286,map__73286__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_73601);
});})(seq__73340_73572,chunk__73344_73573,count__73345_73574,i__73346_73575,seq__73287,chunk__73289,count__73290,i__73291,new_link_73603,path_match_73602,node_73601,seq__73340_73595__$1,temp__5753__auto___73594,path,map__73286,map__73286__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73602], 0));

goog.dom.insertSiblingAfter(new_link_73603,node_73601);


var G__73609 = cljs.core.next(seq__73340_73595__$1);
var G__73610 = null;
var G__73611 = (0);
var G__73612 = (0);
seq__73340_73572 = G__73609;
chunk__73344_73573 = G__73610;
count__73345_73574 = G__73611;
i__73346_73575 = G__73612;
continue;
} else {
var G__73620 = cljs.core.next(seq__73340_73595__$1);
var G__73621 = null;
var G__73622 = (0);
var G__73623 = (0);
seq__73340_73572 = G__73620;
chunk__73344_73573 = G__73621;
count__73345_73574 = G__73622;
i__73346_73575 = G__73623;
continue;
}
} else {
var G__73624 = cljs.core.next(seq__73340_73595__$1);
var G__73625 = null;
var G__73626 = (0);
var G__73627 = (0);
seq__73340_73572 = G__73624;
chunk__73344_73573 = G__73625;
count__73345_73574 = G__73626;
i__73346_73575 = G__73627;
continue;
}
}
} else {
}
}
break;
}


var G__73628 = seq__73287;
var G__73629 = chunk__73289;
var G__73630 = count__73290;
var G__73631 = (i__73291 + (1));
seq__73287 = G__73628;
chunk__73289 = G__73629;
count__73290 = G__73630;
i__73291 = G__73631;
continue;
} else {
var G__73632 = seq__73287;
var G__73633 = chunk__73289;
var G__73634 = count__73290;
var G__73635 = (i__73291 + (1));
seq__73287 = G__73632;
chunk__73289 = G__73633;
count__73290 = G__73634;
i__73291 = G__73635;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73287);
if(temp__5753__auto__){
var seq__73287__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73287__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__73287__$1);
var G__73639 = cljs.core.chunk_rest(seq__73287__$1);
var G__73640 = c__4649__auto__;
var G__73641 = cljs.core.count(c__4649__auto__);
var G__73642 = (0);
seq__73287 = G__73639;
chunk__73289 = G__73640;
count__73290 = G__73641;
i__73291 = G__73642;
continue;
} else {
var path = cljs.core.first(seq__73287__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73368_73645 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73372_73646 = null;
var count__73373_73647 = (0);
var i__73374_73648 = (0);
while(true){
if((i__73374_73648 < count__73373_73647)){
var node_73650 = chunk__73372_73646.cljs$core$IIndexed$_nth$arity$2(null,i__73374_73648);
if(cljs.core.not(node_73650.shadow$old)){
var path_match_73651 = shadow.cljs.devtools.client.browser.match_paths(node_73650.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73651)){
var new_link_73652 = (function (){var G__73384 = node_73650.cloneNode(true);
G__73384.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73651),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73384;
})();
(node_73650.shadow$old = true);

(new_link_73652.onload = ((function (seq__73368_73645,chunk__73372_73646,count__73373_73647,i__73374_73648,seq__73287,chunk__73289,count__73290,i__73291,new_link_73652,path_match_73651,node_73650,path,seq__73287__$1,temp__5753__auto__,map__73286,map__73286__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_73650);
});})(seq__73368_73645,chunk__73372_73646,count__73373_73647,i__73374_73648,seq__73287,chunk__73289,count__73290,i__73291,new_link_73652,path_match_73651,node_73650,path,seq__73287__$1,temp__5753__auto__,map__73286,map__73286__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73651], 0));

goog.dom.insertSiblingAfter(new_link_73652,node_73650);


var G__73655 = seq__73368_73645;
var G__73656 = chunk__73372_73646;
var G__73657 = count__73373_73647;
var G__73658 = (i__73374_73648 + (1));
seq__73368_73645 = G__73655;
chunk__73372_73646 = G__73656;
count__73373_73647 = G__73657;
i__73374_73648 = G__73658;
continue;
} else {
var G__73659 = seq__73368_73645;
var G__73660 = chunk__73372_73646;
var G__73661 = count__73373_73647;
var G__73662 = (i__73374_73648 + (1));
seq__73368_73645 = G__73659;
chunk__73372_73646 = G__73660;
count__73373_73647 = G__73661;
i__73374_73648 = G__73662;
continue;
}
} else {
var G__73664 = seq__73368_73645;
var G__73665 = chunk__73372_73646;
var G__73666 = count__73373_73647;
var G__73667 = (i__73374_73648 + (1));
seq__73368_73645 = G__73664;
chunk__73372_73646 = G__73665;
count__73373_73647 = G__73666;
i__73374_73648 = G__73667;
continue;
}
} else {
var temp__5753__auto___73668__$1 = cljs.core.seq(seq__73368_73645);
if(temp__5753__auto___73668__$1){
var seq__73368_73669__$1 = temp__5753__auto___73668__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73368_73669__$1)){
var c__4649__auto___73670 = cljs.core.chunk_first(seq__73368_73669__$1);
var G__73671 = cljs.core.chunk_rest(seq__73368_73669__$1);
var G__73672 = c__4649__auto___73670;
var G__73673 = cljs.core.count(c__4649__auto___73670);
var G__73674 = (0);
seq__73368_73645 = G__73671;
chunk__73372_73646 = G__73672;
count__73373_73647 = G__73673;
i__73374_73648 = G__73674;
continue;
} else {
var node_73675 = cljs.core.first(seq__73368_73669__$1);
if(cljs.core.not(node_73675.shadow$old)){
var path_match_73677 = shadow.cljs.devtools.client.browser.match_paths(node_73675.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73677)){
var new_link_73678 = (function (){var G__73385 = node_73675.cloneNode(true);
G__73385.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73677),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73385;
})();
(node_73675.shadow$old = true);

(new_link_73678.onload = ((function (seq__73368_73645,chunk__73372_73646,count__73373_73647,i__73374_73648,seq__73287,chunk__73289,count__73290,i__73291,new_link_73678,path_match_73677,node_73675,seq__73368_73669__$1,temp__5753__auto___73668__$1,path,seq__73287__$1,temp__5753__auto__,map__73286,map__73286__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_73675);
});})(seq__73368_73645,chunk__73372_73646,count__73373_73647,i__73374_73648,seq__73287,chunk__73289,count__73290,i__73291,new_link_73678,path_match_73677,node_73675,seq__73368_73669__$1,temp__5753__auto___73668__$1,path,seq__73287__$1,temp__5753__auto__,map__73286,map__73286__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73677], 0));

goog.dom.insertSiblingAfter(new_link_73678,node_73675);


var G__73679 = cljs.core.next(seq__73368_73669__$1);
var G__73680 = null;
var G__73681 = (0);
var G__73682 = (0);
seq__73368_73645 = G__73679;
chunk__73372_73646 = G__73680;
count__73373_73647 = G__73681;
i__73374_73648 = G__73682;
continue;
} else {
var G__73683 = cljs.core.next(seq__73368_73669__$1);
var G__73684 = null;
var G__73685 = (0);
var G__73686 = (0);
seq__73368_73645 = G__73683;
chunk__73372_73646 = G__73684;
count__73373_73647 = G__73685;
i__73374_73648 = G__73686;
continue;
}
} else {
var G__73687 = cljs.core.next(seq__73368_73669__$1);
var G__73688 = null;
var G__73689 = (0);
var G__73690 = (0);
seq__73368_73645 = G__73687;
chunk__73372_73646 = G__73688;
count__73373_73647 = G__73689;
i__73374_73648 = G__73690;
continue;
}
}
} else {
}
}
break;
}


var G__73691 = cljs.core.next(seq__73287__$1);
var G__73692 = null;
var G__73693 = (0);
var G__73694 = (0);
seq__73287 = G__73691;
chunk__73289 = G__73692;
count__73290 = G__73693;
i__73291 = G__73694;
continue;
} else {
var G__73696 = cljs.core.next(seq__73287__$1);
var G__73697 = null;
var G__73698 = (0);
var G__73699 = (0);
seq__73287 = G__73696;
chunk__73289 = G__73697;
count__73290 = G__73698;
i__73291 = G__73699;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__73393){
var map__73394 = p__73393;
var map__73394__$1 = cljs.core.__destructure_map(map__73394);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__73403){
var map__73404 = p__73403;
var map__73404__$1 = cljs.core.__destructure_map(map__73404);
var _ = map__73404__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73404__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__73406,done,error){
var map__73407 = p__73406;
var map__73407__$1 = cljs.core.__destructure_map(map__73407);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73407__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__73414,done,error){
var map__73415 = p__73414;
var map__73415__$1 = cljs.core.__destructure_map(map__73415);
var msg = map__73415__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73415__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73415__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73415__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__73420){
var map__73421 = p__73420;
var map__73421__$1 = cljs.core.__destructure_map(map__73421);
var src = map__73421__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73421__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__73425 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__73425) : done.call(null,G__73425));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__73429){
var map__73430 = p__73429;
var map__73430__$1 = cljs.core.__destructure_map(map__73430);
var msg__$1 = map__73430__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73430__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e73431){var ex = e73431;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__73432){
var map__73433 = p__73432;
var map__73433__$1 = cljs.core.__destructure_map(map__73433);
var env = map__73433__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73433__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__73443){
var map__73444 = p__73443;
var map__73444__$1 = cljs.core.__destructure_map(map__73444);
var msg = map__73444__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73444__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__73449){
var map__73450 = p__73449;
var map__73450__$1 = cljs.core.__destructure_map(map__73450);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73450__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73450__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__73453){
var map__73457 = p__73453;
var map__73457__$1 = cljs.core.__destructure_map(map__73457);
var svc = map__73457__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73457__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
