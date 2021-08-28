goog.provide('reagent.session');
if((typeof reagent !== 'undefined') && (typeof reagent.session !== 'undefined') && (typeof reagent.session.state !== 'undefined')){
} else {
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72958 = arguments.length;
var i__4830__auto___72959 = (0);
while(true){
if((i__4830__auto___72959 < len__4829__auto___72958)){
args__4835__auto__.push((arguments[i__4830__auto___72959]));

var G__72960 = (i__4830__auto___72959 + (1));
i__4830__auto___72959 = G__72960;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__72833){
var vec__72834 = p__72833;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72834,(0),null);
var temp_a = cljs.core.deref(reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
}));

(reagent.session.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get.cljs$lang$applyTo = (function (seq72828){
var G__72829 = cljs.core.first(seq72828);
var seq72828__$1 = cljs.core.next(seq72828);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72829,seq72828__$1);
}));

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72967 = arguments.length;
var i__4830__auto___72968 = (0);
while(true){
if((i__4830__auto___72968 < len__4829__auto___72967)){
args__4835__auto__.push((arguments[i__4830__auto___72968]));

var G__72969 = (i__4830__auto___72968 + (1));
i__4830__auto___72968 = G__72969;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__72858){
var vec__72859 = p__72858;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72859,(0),null);
var result = cljs.core.deref(reagent.session.cursor(ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
}));

(reagent.session.get_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in.cljs$lang$applyTo = (function (seq72843){
var G__72844 = cljs.core.first(seq72843);
var seq72843__$1 = cljs.core.next(seq72843);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72844,seq72843__$1);
}));

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72973 = arguments.length;
var i__4830__auto___72974 = (0);
while(true){
if((i__4830__auto___72974 < len__4829__auto___72973)){
args__4835__auto__.push((arguments[i__4830__auto___72974]));

var G__72975 = (i__4830__auto___72974 + (1));
i__4830__auto___72974 = G__72975;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
}));

(reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq72871){
var G__72872 = cljs.core.first(seq72871);
var seq72871__$1 = cljs.core.next(seq72871);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72872,seq72871__$1);
}));

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_(reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_(reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72976 = arguments.length;
var i__4830__auto___72977 = (0);
while(true){
if((i__4830__auto___72977 < len__4829__auto___72976)){
args__4835__auto__.push((arguments[i__4830__auto___72977]));

var G__72978 = (i__4830__auto___72977 + (1));
i__4830__auto___72977 = G__72978;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__72909){
var vec__72910 = p__72909;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72910,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
}));

(reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq72896){
var G__72897 = cljs.core.first(seq72896);
var seq72896__$1 = cljs.core.next(seq72896);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72897,seq72896__$1);
}));

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72981 = arguments.length;
var i__4830__auto___72982 = (0);
while(true){
if((i__4830__auto___72982 < len__4829__auto___72981)){
args__4835__auto__.push((arguments[i__4830__auto___72982]));

var G__72983 = (i__4830__auto___72982 + (1));
i__4830__auto___72982 = G__72983;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__72918){
var vec__72919 = p__72918;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72919,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
}));

(reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq72916){
var G__72917 = cljs.core.first(seq72916);
var seq72916__$1 = cljs.core.next(seq72916);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72917,seq72916__$1);
}));

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72984 = arguments.length;
var i__4830__auto___72985 = (0);
while(true){
if((i__4830__auto___72985 < len__4829__auto___72984)){
args__4835__auto__.push((arguments[i__4830__auto___72985]));

var G__72986 = (i__4830__auto___72985 + (1));
i__4830__auto___72985 = G__72986;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__72925_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__72925_SHARP_,k,f),args);
}));
}));

(reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq72927){
var G__72928 = cljs.core.first(seq72927);
var seq72927__$1 = cljs.core.next(seq72927);
var G__72929 = cljs.core.first(seq72927__$1);
var seq72927__$2 = cljs.core.next(seq72927__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72928,G__72929,seq72927__$2);
}));

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72988 = arguments.length;
var i__4830__auto___72989 = (0);
while(true){
if((i__4830__auto___72989 < len__4829__auto___72988)){
args__4835__auto__.push((arguments[i__4830__auto___72989]));

var G__72992 = (i__4830__auto___72989 + (1));
i__4830__auto___72989 = G__72992;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__72945_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__72945_SHARP_,ks,f),args);
}));
}));

(reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq72946){
var G__72947 = cljs.core.first(seq72946);
var seq72946__$1 = cljs.core.next(seq72946);
var G__72948 = cljs.core.first(seq72946__$1);
var seq72946__$2 = cljs.core.next(seq72946__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72947,G__72948,seq72946__$2);
}));


//# sourceMappingURL=reagent.session.js.map
