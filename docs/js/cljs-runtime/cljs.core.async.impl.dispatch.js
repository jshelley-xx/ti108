goog.provide('cljs.core.async.impl.dispatch');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer((32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function cljs$core$async$impl$dispatch$process_messages(){
(cljs.core.async.impl.dispatch.running_QMARK_ = true);

(cljs.core.async.impl.dispatch.queued_QMARK_ = false);

var count_63126 = (0);
while(true){
var m_63127 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_63127 == null)){
} else {
(m_63127.cljs$core$IFn$_invoke$arity$0 ? m_63127.cljs$core$IFn$_invoke$arity$0() : m_63127.call(null));

if((count_63126 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__63128 = (count_63126 + (1));
count_63126 = G__63128;
continue;
} else {
}
}
break;
}

(cljs.core.async.impl.dispatch.running_QMARK_ = false);

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return (cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0 ? cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0() : cljs.core.async.impl.dispatch.queue_dispatcher.call(null));
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function cljs$core$async$impl$dispatch$queue_dispatcher(){
if(((cljs.core.async.impl.dispatch.queued_QMARK_) && (cljs.core.async.impl.dispatch.running_QMARK_))){
return null;
} else {
(cljs.core.async.impl.dispatch.queued_QMARK_ = true);

return goog.async.nextTick(cljs.core.async.impl.dispatch.process_messages);
}
});
cljs.core.async.impl.dispatch.run = (function cljs$core$async$impl$dispatch$run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher();
});
cljs.core.async.impl.dispatch.queue_delay = (function cljs$core$async$impl$dispatch$queue_delay(f,delay){
return setTimeout(f,delay);
});

//# sourceMappingURL=cljs.core.async.impl.dispatch.js.map
