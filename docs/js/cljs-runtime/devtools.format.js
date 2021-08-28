goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_62521 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._header[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._header["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_62521(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_62533 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._has_body[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._has_body["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_62533(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_62541 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._body[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._body["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_62541(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o62264 = temp__5751__auto__;
var temp__5751__auto____$1 = (o62264["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o62265 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o62265["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o62266 = temp__5751__auto____$2;
return (o62266["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o62283 = temp__5751__auto__;
var temp__5751__auto____$1 = (o62283["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o62284 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o62284["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o62285 = temp__5751__auto____$2;
return (o62285["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o62290 = temp__5751__auto__;
var temp__5751__auto____$1 = (o62290["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o62291 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o62291["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o62292 = temp__5751__auto____$2;
return (o62292["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o62301 = temp__5751__auto__;
var temp__5751__auto____$1 = (o62301["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o62302 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o62302["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o62303 = temp__5751__auto____$2;
return (o62303["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o62309 = temp__5751__auto__;
var temp__5751__auto____$1 = (o62309["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o62310 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o62310["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o62311 = temp__5751__auto____$2;
return (o62311["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o62318 = temp__5751__auto__;
var temp__5751__auto____$1 = (o62318["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o62319 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o62319["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o62320 = temp__5751__auto____$2;
return (o62320["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o62330 = temp__5751__auto__;
var temp__5751__auto____$1 = (o62330["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o62331 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o62331["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o62332 = temp__5751__auto____$2;
return (o62332["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62564 = arguments.length;
var i__4830__auto___62565 = (0);
while(true){
if((i__4830__auto___62565 < len__4829__auto___62564)){
args__4835__auto__.push((arguments[i__4830__auto___62565]));

var G__62566 = (i__4830__auto___62565 + (1));
i__4830__auto___62565 = G__62566;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq62348){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62348));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62569 = arguments.length;
var i__4830__auto___62570 = (0);
while(true){
if((i__4830__auto___62570 < len__4829__auto___62569)){
args__4835__auto__.push((arguments[i__4830__auto___62570]));

var G__62572 = (i__4830__auto___62570 + (1));
i__4830__auto___62570 = G__62572;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq62369){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62369));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62579 = arguments.length;
var i__4830__auto___62580 = (0);
while(true){
if((i__4830__auto___62580 < len__4829__auto___62579)){
args__4835__auto__.push((arguments[i__4830__auto___62580]));

var G__62581 = (i__4830__auto___62580 + (1));
i__4830__auto___62580 = G__62581;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq62383){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62383));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62582 = arguments.length;
var i__4830__auto___62583 = (0);
while(true){
if((i__4830__auto___62583 < len__4829__auto___62582)){
args__4835__auto__.push((arguments[i__4830__auto___62583]));

var G__62584 = (i__4830__auto___62583 + (1));
i__4830__auto___62583 = G__62584;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq62403){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62403));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62585 = arguments.length;
var i__4830__auto___62586 = (0);
while(true){
if((i__4830__auto___62586 < len__4829__auto___62585)){
args__4835__auto__.push((arguments[i__4830__auto___62586]));

var G__62587 = (i__4830__auto___62586 + (1));
i__4830__auto___62586 = G__62587;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq62413){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62413));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62592 = arguments.length;
var i__4830__auto___62593 = (0);
while(true){
if((i__4830__auto___62593 < len__4829__auto___62592)){
args__4835__auto__.push((arguments[i__4830__auto___62593]));

var G__62595 = (i__4830__auto___62593 + (1));
i__4830__auto___62593 = G__62595;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq62422){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62422));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62597 = arguments.length;
var i__4830__auto___62598 = (0);
while(true){
if((i__4830__auto___62598 < len__4829__auto___62597)){
args__4835__auto__.push((arguments[i__4830__auto___62598]));

var G__62599 = (i__4830__auto___62598 + (1));
i__4830__auto___62598 = G__62599;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq62441){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62441));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62600 = arguments.length;
var i__4830__auto___62601 = (0);
while(true){
if((i__4830__auto___62601 < len__4829__auto___62600)){
args__4835__auto__.push((arguments[i__4830__auto___62601]));

var G__62602 = (i__4830__auto___62601 + (1));
i__4830__auto___62601 = G__62602;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__62470){
var vec__62471 = p__62470;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62471,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__62455_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__62455_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq62457){
var G__62458 = cljs.core.first(seq62457);
var seq62457__$1 = cljs.core.next(seq62457);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62458,seq62457__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__62481 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__62482 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__62483 = (function (){var G__62485 = new cljs.core.Keyword(null,"li","li",723558921);
var G__62489 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__62490 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__62485,G__62489,G__62490) : devtools.format.make_template_fn.call(null,G__62485,G__62489,G__62490));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__62481,G__62482,G__62483) : devtools.format.make_template_fn.call(null,G__62481,G__62482,G__62483));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62615 = arguments.length;
var i__4830__auto___62616 = (0);
while(true){
if((i__4830__auto___62616 < len__4829__auto___62615)){
args__4835__auto__.push((arguments[i__4830__auto___62616]));

var G__62621 = (i__4830__auto___62616 + (1));
i__4830__auto___62616 = G__62621;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq62492){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62492));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62622 = arguments.length;
var i__4830__auto___62623 = (0);
while(true){
if((i__4830__auto___62623 < len__4829__auto___62622)){
args__4835__auto__.push((arguments[i__4830__auto___62623]));

var G__62625 = (i__4830__auto___62623 + (1));
i__4830__auto___62623 = G__62625;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq62502){
var G__62503 = cljs.core.first(seq62502);
var seq62502__$1 = cljs.core.next(seq62502);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62503,seq62502__$1);
}));


//# sourceMappingURL=devtools.format.js.map
