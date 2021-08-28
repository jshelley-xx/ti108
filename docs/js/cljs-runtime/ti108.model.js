goog.provide('ti108.model');
ti108.model.empty_register = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer","buffer",617295198),null,new cljs.core.Keyword(null,"dp","dp",-1761626539),false,new cljs.core.Keyword(null,"malleable","malleable",-881036749),true], null);
ti108.model.other = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
ti108.model.op = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
ti108.model.memory = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ti108.model.empty_register);
ti108.model.register = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ti108.model.empty_register);
ti108.model.reset = (function ti108$model$reset(){
cljs.core.reset_BANG_(ti108.model.register,ti108.model.empty_register);

cljs.core.reset_BANG_(ti108.model.op,null);

return cljs.core.reset_BANG_(ti108.model.other,null);
});
ti108.model.reset_if_not_malleable = (function ti108$model$reset_if_not_malleable(){
if(cljs.core.not(new cljs.core.Keyword(null,"malleable","malleable",-881036749).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register)))){
return ti108.model.reset();
} else {
return null;
}
});
ti108.model.add_digit = (function ti108$model$add_digit(n){
return (function (){
if(reagent.debug.has_console){
console.log(["mealleable: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"malleable","malleable",-881036749).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register)))].join(''));
} else {
}

ti108.model.reset_if_not_malleable();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ti108.model.register,cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});
});
ti108.model.add_dp = (function ti108$model$add_dp(){
ti108.model.reset_if_not_malleable();

if(cljs.core.not(new cljs.core.Keyword(null,"dp","dp",-1761626539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ti108.model.register,cljs.core.assoc,new cljs.core.Keyword(null,"dp","dp",-1761626539),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"buffer","buffer",617295198),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register))),"."].join('')], 0));
} else {
return null;
}
});
ti108.model.plus_minus = (function ti108$model$plus_minus(){
ti108.model.reset_if_not_malleable();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ti108.model.register,cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),((clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register)),"-"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register)),(1)):["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register)))].join('')));
});
ti108.model.prep_2op = (function ti108$model$prep_2op(o){
return (function (){
cljs.core.reset_BANG_(ti108.model.other,cljs.core.deref(ti108.model.register));

cljs.core.reset_BANG_(ti108.model.register,ti108.model.empty_register);

return cljs.core.reset_BANG_(ti108.model.op,o);
});
});
ti108.model.tonum = (function ti108$model$tonum(n){
return decimal.core.decimal(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(n));
});
ti108.model.fromnum = (function ti108$model$fromnum(n){
if(reagent.debug.has_console){
console.log(decimal.core.to_string(n));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer","buffer",617295198),decimal.core.to_string(n),new cljs.core.Keyword(null,"dp","dp",-1761626539),(!(decimal.core.integer_QMARK_(n))),new cljs.core.Keyword(null,"malleable","malleable",-881036749),false], null);
});
ti108.model.do_EQ_ = (function ti108$model$do_EQ_(){
return cljs.core.reset_BANG_(ti108.model.register,ti108.model.fromnum((function (){var G__62125 = ti108.model.tonum(cljs.core.deref(ti108.model.other));
var G__62126 = ti108.model.tonum(cljs.core.deref(ti108.model.register));
var fexpr__62124 = cljs.core.deref(ti108.model.op);
return (fexpr__62124.cljs$core$IFn$_invoke$arity$2 ? fexpr__62124.cljs$core$IFn$_invoke$arity$2(G__62125,G__62126) : fexpr__62124.call(null,G__62125,G__62126));
})()));
});
ti108.model.sqrt = (function ti108$model$sqrt(){
return cljs.core.reset_BANG_(ti108.model.register,ti108.model.fromnum(decimal.core.sqrt(ti108.model.tonum(cljs.core.deref(ti108.model.register)))));
});
ti108.model.as_string = (function ti108$model$as_string(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register)) == null))?"0":new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register)))),((cljs.core.not(new cljs.core.Keyword(null,"dp","dp",-1761626539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.register))))?".":null)].join('');
});
ti108.model.percent = (function ti108$model$percent(){
cljs.core.reset_BANG_(ti108.model.register,ti108.model.fromnum((ti108.model.tonum(cljs.core.deref(ti108.model.register)) / (100))));

return ti108.model.do_EQ_();
});
ti108.model.mrc = (function ti108$model$mrc(){
cljs.core.reset_BANG_(ti108.model.register,cljs.core.deref(ti108.model.memory));

return cljs.core.reset_BANG_(ti108.model.memory,ti108.model.empty_register);
});
ti108.model.m_PLUS_ = (function ti108$model$m_PLUS_(){
cljs.core.reset_BANG_(ti108.model.memory,((cljs.core.not(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.memory))))?cljs.core.deref(ti108.model.register):ti108.model.fromnum((function (){var G__62127 = ti108.model.tonum(cljs.core.deref(ti108.model.memory));
var G__62128 = ti108.model.tonum(cljs.core.deref(ti108.model.register));
return (decimal.core._PLUS_.cljs$core$IFn$_invoke$arity$2 ? decimal.core._PLUS_.cljs$core$IFn$_invoke$arity$2(G__62127,G__62128) : decimal.core._PLUS_.call(null,G__62127,G__62128));
})())));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ti108.model.register,cljs.core.assoc,new cljs.core.Keyword(null,"malleable","malleable",-881036749),false);
});
ti108.model.m_ = (function ti108$model$m_(){
cljs.core.reset_BANG_(ti108.model.memory,((cljs.core.not(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ti108.model.memory))))?cljs.core.deref(ti108.model.register):ti108.model.fromnum((function (){var G__62129 = ti108.model.tonum(cljs.core.deref(ti108.model.memory));
var G__62130 = ti108.model.tonum(cljs.core.deref(ti108.model.register));
return (decimal.core._.cljs$core$IFn$_invoke$arity$2 ? decimal.core._.cljs$core$IFn$_invoke$arity$2(G__62129,G__62130) : decimal.core._.call(null,G__62129,G__62130));
})())));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ti108.model.register,cljs.core.assoc,new cljs.core.Keyword(null,"malleable","malleable",-881036749),false);
});
ti108.model.add = decimal.core._PLUS_;
ti108.model.sub = decimal.core._;
ti108.model.mul = decimal.core._STAR_;
ti108.model.div = decimal.core.div;

//# sourceMappingURL=ti108.model.js.map
