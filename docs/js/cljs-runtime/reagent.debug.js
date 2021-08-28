goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__69670__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__69670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69673__i = 0, G__69673__a = new Array(arguments.length -  0);
while (G__69673__i < G__69673__a.length) {G__69673__a[G__69673__i] = arguments[G__69673__i + 0]; ++G__69673__i;}
  args = new cljs.core.IndexedSeq(G__69673__a,0,null);
} 
return G__69670__delegate.call(this,args);};
G__69670.cljs$lang$maxFixedArity = 0;
G__69670.cljs$lang$applyTo = (function (arglist__69675){
var args = cljs.core.seq(arglist__69675);
return G__69670__delegate(args);
});
G__69670.cljs$core$IFn$_invoke$arity$variadic = G__69670__delegate;
return G__69670;
})()
);

(o.error = (function() { 
var G__69676__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__69676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69677__i = 0, G__69677__a = new Array(arguments.length -  0);
while (G__69677__i < G__69677__a.length) {G__69677__a[G__69677__i] = arguments[G__69677__i + 0]; ++G__69677__i;}
  args = new cljs.core.IndexedSeq(G__69677__a,0,null);
} 
return G__69676__delegate.call(this,args);};
G__69676.cljs$lang$maxFixedArity = 0;
G__69676.cljs$lang$applyTo = (function (arglist__69678){
var args = cljs.core.seq(arglist__69678);
return G__69676__delegate(args);
});
G__69676.cljs$core$IFn$_invoke$arity$variadic = G__69676__delegate;
return G__69676;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
