goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__61895__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61895__auto__["add"]).call(o__61895__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__61895__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61895__auto__["delete"]).call(o__61895__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__61895__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61895__auto__["has"]).call(o__61895__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__68792 = data;
var target__61932__auto__ = G__68792;
if(cljs.core.truth_(target__61932__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68792)].join(''),"\n","target__61932__auto__"].join('')));
}

(target__61932__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__68792;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_69006 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_69006);
} else {
var seq__68831_69009 = cljs.core.seq(json_ml);
var chunk__68832_69010 = null;
var count__68833_69011 = (0);
var i__68834_69012 = (0);
while(true){
if((i__68834_69012 < count__68833_69011)){
var item_69015 = chunk__68832_69010.cljs$core$IIndexed$_nth$arity$2(null,i__68834_69012);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_69015,new_depth_budget_69006) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_69015,new_depth_budget_69006));


var G__69020 = seq__68831_69009;
var G__69021 = chunk__68832_69010;
var G__69022 = count__68833_69011;
var G__69023 = (i__68834_69012 + (1));
seq__68831_69009 = G__69020;
chunk__68832_69010 = G__69021;
count__68833_69011 = G__69022;
i__68834_69012 = G__69023;
continue;
} else {
var temp__5753__auto___69025 = cljs.core.seq(seq__68831_69009);
if(temp__5753__auto___69025){
var seq__68831_69026__$1 = temp__5753__auto___69025;
if(cljs.core.chunked_seq_QMARK_(seq__68831_69026__$1)){
var c__4649__auto___69028 = cljs.core.chunk_first(seq__68831_69026__$1);
var G__69030 = cljs.core.chunk_rest(seq__68831_69026__$1);
var G__69031 = c__4649__auto___69028;
var G__69032 = cljs.core.count(c__4649__auto___69028);
var G__69033 = (0);
seq__68831_69009 = G__69030;
chunk__68832_69010 = G__69031;
count__68833_69011 = G__69032;
i__68834_69012 = G__69033;
continue;
} else {
var item_69035 = cljs.core.first(seq__68831_69026__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_69035,new_depth_budget_69006) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_69035,new_depth_budget_69006));


var G__69038 = cljs.core.next(seq__68831_69026__$1);
var G__69039 = null;
var G__69040 = (0);
var G__69041 = (0);
seq__68831_69009 = G__69038;
chunk__68832_69010 = G__69039;
count__68833_69011 = G__69040;
i__68834_69012 = G__69041;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5751__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5751__auto__)){
var initial_hierarchy_depth_budget = temp__5751__auto__;
var remaining_depth_budget = (function (){var or__4223__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
