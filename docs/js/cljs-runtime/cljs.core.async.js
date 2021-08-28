goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__65674 = arguments.length;
switch (G__65674) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65687 = (function (f,blockable,meta65688){
this.f = f;
this.blockable = blockable;
this.meta65688 = meta65688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65689,meta65688__$1){
var self__ = this;
var _65689__$1 = this;
return (new cljs.core.async.t_cljs$core$async65687(self__.f,self__.blockable,meta65688__$1));
}));

(cljs.core.async.t_cljs$core$async65687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65689){
var self__ = this;
var _65689__$1 = this;
return self__.meta65688;
}));

(cljs.core.async.t_cljs$core$async65687.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async65687.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async65687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async65687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta65688","meta65688",-1843044876,null)], null);
}));

(cljs.core.async.t_cljs$core$async65687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65687");

(cljs.core.async.t_cljs$core$async65687.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async65687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65687.
 */
cljs.core.async.__GT_t_cljs$core$async65687 = (function cljs$core$async$__GT_t_cljs$core$async65687(f__$1,blockable__$1,meta65688){
return (new cljs.core.async.t_cljs$core$async65687(f__$1,blockable__$1,meta65688));
});

}

return (new cljs.core.async.t_cljs$core$async65687(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__65739 = arguments.length;
switch (G__65739) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__65759 = arguments.length;
switch (G__65759) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__65761 = arguments.length;
switch (G__65761) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_69657 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_69657) : fn1.call(null,val_69657));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_69657) : fn1.call(null,val_69657));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__65786 = arguments.length;
switch (G__65786) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___69661 = n;
var x_69662 = (0);
while(true){
if((x_69662 < n__4706__auto___69661)){
(a[x_69662] = (0));

var G__69664 = (x_69662 + (1));
x_69662 = G__69664;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__69666 = (i + (1));
i = G__69666;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65820 = (function (flag,meta65821){
this.flag = flag;
this.meta65821 = meta65821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65822,meta65821__$1){
var self__ = this;
var _65822__$1 = this;
return (new cljs.core.async.t_cljs$core$async65820(self__.flag,meta65821__$1));
}));

(cljs.core.async.t_cljs$core$async65820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65822){
var self__ = this;
var _65822__$1 = this;
return self__.meta65821;
}));

(cljs.core.async.t_cljs$core$async65820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async65820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async65820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async65820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta65821","meta65821",1850781251,null)], null);
}));

(cljs.core.async.t_cljs$core$async65820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65820");

(cljs.core.async.t_cljs$core$async65820.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async65820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65820.
 */
cljs.core.async.__GT_t_cljs$core$async65820 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async65820(flag__$1,meta65821){
return (new cljs.core.async.t_cljs$core$async65820(flag__$1,meta65821));
});

}

return (new cljs.core.async.t_cljs$core$async65820(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65834 = (function (flag,cb,meta65835){
this.flag = flag;
this.cb = cb;
this.meta65835 = meta65835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65836,meta65835__$1){
var self__ = this;
var _65836__$1 = this;
return (new cljs.core.async.t_cljs$core$async65834(self__.flag,self__.cb,meta65835__$1));
}));

(cljs.core.async.t_cljs$core$async65834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65836){
var self__ = this;
var _65836__$1 = this;
return self__.meta65835;
}));

(cljs.core.async.t_cljs$core$async65834.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async65834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async65834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async65834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta65835","meta65835",-954417231,null)], null);
}));

(cljs.core.async.t_cljs$core$async65834.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65834");

(cljs.core.async.t_cljs$core$async65834.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async65834");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65834.
 */
cljs.core.async.__GT_t_cljs$core$async65834 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async65834(flag__$1,cb__$1,meta65835){
return (new cljs.core.async.t_cljs$core$async65834(flag__$1,cb__$1,meta65835));
});

}

return (new cljs.core.async.t_cljs$core$async65834(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__65874_SHARP_){
var G__65889 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__65874_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__65889) : fret.call(null,G__65889));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__65875_SHARP_){
var G__65892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__65875_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__65892) : fret.call(null,G__65892));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__69679 = (i + (1));
i = G__69679;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___69683 = arguments.length;
var i__4830__auto___69684 = (0);
while(true){
if((i__4830__auto___69684 < len__4829__auto___69683)){
args__4835__auto__.push((arguments[i__4830__auto___69684]));

var G__69685 = (i__4830__auto___69684 + (1));
i__4830__auto___69684 = G__69685;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__65903){
var map__65904 = p__65903;
var map__65904__$1 = cljs.core.__destructure_map(map__65904);
var opts = map__65904__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq65897){
var G__65898 = cljs.core.first(seq65897);
var seq65897__$1 = cljs.core.next(seq65897);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65898,seq65897__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__65924 = arguments.length;
switch (G__65924) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__65555__auto___69694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_65993){
var state_val_65995 = (state_65993[(1)]);
if((state_val_65995 === (7))){
var inst_65984 = (state_65993[(2)]);
var state_65993__$1 = state_65993;
var statearr_65999_69695 = state_65993__$1;
(statearr_65999_69695[(2)] = inst_65984);

(statearr_65999_69695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65995 === (1))){
var state_65993__$1 = state_65993;
var statearr_66000_69696 = state_65993__$1;
(statearr_66000_69696[(2)] = null);

(statearr_66000_69696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65995 === (4))){
var inst_65964 = (state_65993[(7)]);
var inst_65964__$1 = (state_65993[(2)]);
var inst_65965 = (inst_65964__$1 == null);
var state_65993__$1 = (function (){var statearr_66004 = state_65993;
(statearr_66004[(7)] = inst_65964__$1);

return statearr_66004;
})();
if(cljs.core.truth_(inst_65965)){
var statearr_66006_69697 = state_65993__$1;
(statearr_66006_69697[(1)] = (5));

} else {
var statearr_66007_69698 = state_65993__$1;
(statearr_66007_69698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65995 === (13))){
var state_65993__$1 = state_65993;
var statearr_66009_69699 = state_65993__$1;
(statearr_66009_69699[(2)] = null);

(statearr_66009_69699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65995 === (6))){
var inst_65964 = (state_65993[(7)]);
var state_65993__$1 = state_65993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65993__$1,(11),to,inst_65964);
} else {
if((state_val_65995 === (3))){
var inst_65986 = (state_65993[(2)]);
var state_65993__$1 = state_65993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65993__$1,inst_65986);
} else {
if((state_val_65995 === (12))){
var state_65993__$1 = state_65993;
var statearr_66011_69700 = state_65993__$1;
(statearr_66011_69700[(2)] = null);

(statearr_66011_69700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65995 === (2))){
var state_65993__$1 = state_65993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65993__$1,(4),from);
} else {
if((state_val_65995 === (11))){
var inst_65977 = (state_65993[(2)]);
var state_65993__$1 = state_65993;
if(cljs.core.truth_(inst_65977)){
var statearr_66012_69701 = state_65993__$1;
(statearr_66012_69701[(1)] = (12));

} else {
var statearr_66013_69703 = state_65993__$1;
(statearr_66013_69703[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65995 === (9))){
var state_65993__$1 = state_65993;
var statearr_66014_69704 = state_65993__$1;
(statearr_66014_69704[(2)] = null);

(statearr_66014_69704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65995 === (5))){
var state_65993__$1 = state_65993;
if(cljs.core.truth_(close_QMARK_)){
var statearr_66019_69705 = state_65993__$1;
(statearr_66019_69705[(1)] = (8));

} else {
var statearr_66020_69706 = state_65993__$1;
(statearr_66020_69706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65995 === (14))){
var inst_65982 = (state_65993[(2)]);
var state_65993__$1 = state_65993;
var statearr_66029_69707 = state_65993__$1;
(statearr_66029_69707[(2)] = inst_65982);

(statearr_66029_69707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65995 === (10))){
var inst_65974 = (state_65993[(2)]);
var state_65993__$1 = state_65993;
var statearr_66030_69708 = state_65993__$1;
(statearr_66030_69708[(2)] = inst_65974);

(statearr_66030_69708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65995 === (8))){
var inst_65969 = cljs.core.async.close_BANG_(to);
var state_65993__$1 = state_65993;
var statearr_66032_69712 = state_65993__$1;
(statearr_66032_69712[(2)] = inst_65969);

(statearr_66032_69712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_66036 = [null,null,null,null,null,null,null,null];
(statearr_66036[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_66036[(1)] = (1));

return statearr_66036;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_65993){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_65993);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e66037){if((e66037 instanceof Object)){
var ex__65226__auto__ = e66037;
var statearr_66038_69713 = state_65993;
(statearr_66038_69713[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69714 = state_65993;
state_65993 = G__69714;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_65993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_65993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_66045 = f__65556__auto__();
(statearr_66045[(6)] = c__65555__auto___69694);

return statearr_66045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__66052){
var vec__66053 = p__66052;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66053,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66053,(1),null);
var job = vec__66053;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__65555__auto___69716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_66067){
var state_val_66068 = (state_66067[(1)]);
if((state_val_66068 === (1))){
var state_66067__$1 = state_66067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66067__$1,(2),res,v);
} else {
if((state_val_66068 === (2))){
var inst_66064 = (state_66067[(2)]);
var inst_66065 = cljs.core.async.close_BANG_(res);
var state_66067__$1 = (function (){var statearr_66070 = state_66067;
(statearr_66070[(7)] = inst_66064);

return statearr_66070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66067__$1,inst_66065);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0 = (function (){
var statearr_66076 = [null,null,null,null,null,null,null,null];
(statearr_66076[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__);

(statearr_66076[(1)] = (1));

return statearr_66076;
});
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1 = (function (state_66067){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_66067);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e66081){if((e66081 instanceof Object)){
var ex__65226__auto__ = e66081;
var statearr_66086_69723 = state_66067;
(statearr_66086_69723[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69726 = state_66067;
state_66067 = G__69726;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__ = function(state_66067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1.call(this,state_66067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_66090 = f__65556__auto__();
(statearr_66090[(6)] = c__65555__auto___69716);

return statearr_66090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__66097){
var vec__66100 = p__66097;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66100,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66100,(1),null);
var job = vec__66100;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___69727 = n;
var __69728 = (0);
while(true){
if((__69728 < n__4706__auto___69727)){
var G__66119_69729 = type;
var G__66119_69730__$1 = (((G__66119_69729 instanceof cljs.core.Keyword))?G__66119_69729.fqn:null);
switch (G__66119_69730__$1) {
case "compute":
var c__65555__auto___69735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__69728,c__65555__auto___69735,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async){
return (function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = ((function (__69728,c__65555__auto___69735,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async){
return (function (state_66145){
var state_val_66146 = (state_66145[(1)]);
if((state_val_66146 === (1))){
var state_66145__$1 = state_66145;
var statearr_66147_69736 = state_66145__$1;
(statearr_66147_69736[(2)] = null);

(statearr_66147_69736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66146 === (2))){
var state_66145__$1 = state_66145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66145__$1,(4),jobs);
} else {
if((state_val_66146 === (3))){
var inst_66143 = (state_66145[(2)]);
var state_66145__$1 = state_66145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66145__$1,inst_66143);
} else {
if((state_val_66146 === (4))){
var inst_66133 = (state_66145[(2)]);
var inst_66136 = process(inst_66133);
var state_66145__$1 = state_66145;
if(cljs.core.truth_(inst_66136)){
var statearr_66149_69739 = state_66145__$1;
(statearr_66149_69739[(1)] = (5));

} else {
var statearr_66152_69740 = state_66145__$1;
(statearr_66152_69740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66146 === (5))){
var state_66145__$1 = state_66145;
var statearr_66156_69741 = state_66145__$1;
(statearr_66156_69741[(2)] = null);

(statearr_66156_69741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66146 === (6))){
var state_66145__$1 = state_66145;
var statearr_66157_69742 = state_66145__$1;
(statearr_66157_69742[(2)] = null);

(statearr_66157_69742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66146 === (7))){
var inst_66141 = (state_66145[(2)]);
var state_66145__$1 = state_66145;
var statearr_66158_69743 = state_66145__$1;
(statearr_66158_69743[(2)] = inst_66141);

(statearr_66158_69743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__69728,c__65555__auto___69735,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async))
;
return ((function (__69728,switch__65221__auto__,c__65555__auto___69735,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0 = (function (){
var statearr_66166 = [null,null,null,null,null,null,null];
(statearr_66166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__);

(statearr_66166[(1)] = (1));

return statearr_66166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1 = (function (state_66145){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_66145);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e66167){if((e66167 instanceof Object)){
var ex__65226__auto__ = e66167;
var statearr_66168_69744 = state_66145;
(statearr_66168_69744[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69745 = state_66145;
state_66145 = G__69745;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__ = function(state_66145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1.call(this,state_66145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__;
})()
;})(__69728,switch__65221__auto__,c__65555__auto___69735,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async))
})();
var state__65557__auto__ = (function (){var statearr_66171 = f__65556__auto__();
(statearr_66171[(6)] = c__65555__auto___69735);

return statearr_66171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
});})(__69728,c__65555__auto___69735,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async))
);


break;
case "async":
var c__65555__auto___69746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__69728,c__65555__auto___69746,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async){
return (function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = ((function (__69728,c__65555__auto___69746,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async){
return (function (state_66189){
var state_val_66190 = (state_66189[(1)]);
if((state_val_66190 === (1))){
var state_66189__$1 = state_66189;
var statearr_66214_69748 = state_66189__$1;
(statearr_66214_69748[(2)] = null);

(statearr_66214_69748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66190 === (2))){
var state_66189__$1 = state_66189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66189__$1,(4),jobs);
} else {
if((state_val_66190 === (3))){
var inst_66187 = (state_66189[(2)]);
var state_66189__$1 = state_66189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66189__$1,inst_66187);
} else {
if((state_val_66190 === (4))){
var inst_66175 = (state_66189[(2)]);
var inst_66176 = async(inst_66175);
var state_66189__$1 = state_66189;
if(cljs.core.truth_(inst_66176)){
var statearr_66215_69750 = state_66189__$1;
(statearr_66215_69750[(1)] = (5));

} else {
var statearr_66216_69751 = state_66189__$1;
(statearr_66216_69751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66190 === (5))){
var state_66189__$1 = state_66189;
var statearr_66221_69752 = state_66189__$1;
(statearr_66221_69752[(2)] = null);

(statearr_66221_69752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66190 === (6))){
var state_66189__$1 = state_66189;
var statearr_66225_69753 = state_66189__$1;
(statearr_66225_69753[(2)] = null);

(statearr_66225_69753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66190 === (7))){
var inst_66182 = (state_66189[(2)]);
var state_66189__$1 = state_66189;
var statearr_66238_69754 = state_66189__$1;
(statearr_66238_69754[(2)] = inst_66182);

(statearr_66238_69754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__69728,c__65555__auto___69746,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async))
;
return ((function (__69728,switch__65221__auto__,c__65555__auto___69746,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0 = (function (){
var statearr_66245 = [null,null,null,null,null,null,null];
(statearr_66245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__);

(statearr_66245[(1)] = (1));

return statearr_66245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1 = (function (state_66189){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_66189);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e66246){if((e66246 instanceof Object)){
var ex__65226__auto__ = e66246;
var statearr_66247_69755 = state_66189;
(statearr_66247_69755[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69756 = state_66189;
state_66189 = G__69756;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__ = function(state_66189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1.call(this,state_66189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__;
})()
;})(__69728,switch__65221__auto__,c__65555__auto___69746,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async))
})();
var state__65557__auto__ = (function (){var statearr_66262 = f__65556__auto__();
(statearr_66262[(6)] = c__65555__auto___69746);

return statearr_66262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
});})(__69728,c__65555__auto___69746,G__66119_69729,G__66119_69730__$1,n__4706__auto___69727,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66119_69730__$1)].join('')));

}

var G__69757 = (__69728 + (1));
__69728 = G__69757;
continue;
} else {
}
break;
}

var c__65555__auto___69758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_66295){
var state_val_66296 = (state_66295[(1)]);
if((state_val_66296 === (7))){
var inst_66291 = (state_66295[(2)]);
var state_66295__$1 = state_66295;
var statearr_66298_69768 = state_66295__$1;
(statearr_66298_69768[(2)] = inst_66291);

(statearr_66298_69768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66296 === (1))){
var state_66295__$1 = state_66295;
var statearr_66299_69775 = state_66295__$1;
(statearr_66299_69775[(2)] = null);

(statearr_66299_69775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66296 === (4))){
var inst_66274 = (state_66295[(7)]);
var inst_66274__$1 = (state_66295[(2)]);
var inst_66275 = (inst_66274__$1 == null);
var state_66295__$1 = (function (){var statearr_66302 = state_66295;
(statearr_66302[(7)] = inst_66274__$1);

return statearr_66302;
})();
if(cljs.core.truth_(inst_66275)){
var statearr_66303_69776 = state_66295__$1;
(statearr_66303_69776[(1)] = (5));

} else {
var statearr_66304_69777 = state_66295__$1;
(statearr_66304_69777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66296 === (6))){
var inst_66274 = (state_66295[(7)]);
var inst_66279 = (state_66295[(8)]);
var inst_66279__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_66281 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66283 = [inst_66274,inst_66279__$1];
var inst_66284 = (new cljs.core.PersistentVector(null,2,(5),inst_66281,inst_66283,null));
var state_66295__$1 = (function (){var statearr_66305 = state_66295;
(statearr_66305[(8)] = inst_66279__$1);

return statearr_66305;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66295__$1,(8),jobs,inst_66284);
} else {
if((state_val_66296 === (3))){
var inst_66293 = (state_66295[(2)]);
var state_66295__$1 = state_66295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66295__$1,inst_66293);
} else {
if((state_val_66296 === (2))){
var state_66295__$1 = state_66295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66295__$1,(4),from);
} else {
if((state_val_66296 === (9))){
var inst_66288 = (state_66295[(2)]);
var state_66295__$1 = (function (){var statearr_66312 = state_66295;
(statearr_66312[(9)] = inst_66288);

return statearr_66312;
})();
var statearr_66317_69786 = state_66295__$1;
(statearr_66317_69786[(2)] = null);

(statearr_66317_69786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66296 === (5))){
var inst_66277 = cljs.core.async.close_BANG_(jobs);
var state_66295__$1 = state_66295;
var statearr_66322_69788 = state_66295__$1;
(statearr_66322_69788[(2)] = inst_66277);

(statearr_66322_69788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66296 === (8))){
var inst_66279 = (state_66295[(8)]);
var inst_66286 = (state_66295[(2)]);
var state_66295__$1 = (function (){var statearr_66327 = state_66295;
(statearr_66327[(10)] = inst_66286);

return statearr_66327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66295__$1,(9),results,inst_66279);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0 = (function (){
var statearr_66329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__);

(statearr_66329[(1)] = (1));

return statearr_66329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1 = (function (state_66295){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_66295);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e66330){if((e66330 instanceof Object)){
var ex__65226__auto__ = e66330;
var statearr_66331_69799 = state_66295;
(statearr_66331_69799[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69806 = state_66295;
state_66295 = G__69806;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__ = function(state_66295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1.call(this,state_66295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_66334 = f__65556__auto__();
(statearr_66334[(6)] = c__65555__auto___69758);

return statearr_66334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


var c__65555__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_66376){
var state_val_66377 = (state_66376[(1)]);
if((state_val_66377 === (7))){
var inst_66372 = (state_66376[(2)]);
var state_66376__$1 = state_66376;
var statearr_66379_69814 = state_66376__$1;
(statearr_66379_69814[(2)] = inst_66372);

(statearr_66379_69814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (20))){
var state_66376__$1 = state_66376;
var statearr_66380_69815 = state_66376__$1;
(statearr_66380_69815[(2)] = null);

(statearr_66380_69815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (1))){
var state_66376__$1 = state_66376;
var statearr_66381_69817 = state_66376__$1;
(statearr_66381_69817[(2)] = null);

(statearr_66381_69817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (4))){
var inst_66341 = (state_66376[(7)]);
var inst_66341__$1 = (state_66376[(2)]);
var inst_66342 = (inst_66341__$1 == null);
var state_66376__$1 = (function (){var statearr_66382 = state_66376;
(statearr_66382[(7)] = inst_66341__$1);

return statearr_66382;
})();
if(cljs.core.truth_(inst_66342)){
var statearr_66383_69821 = state_66376__$1;
(statearr_66383_69821[(1)] = (5));

} else {
var statearr_66385_69823 = state_66376__$1;
(statearr_66385_69823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (15))){
var inst_66354 = (state_66376[(8)]);
var state_66376__$1 = state_66376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66376__$1,(18),to,inst_66354);
} else {
if((state_val_66377 === (21))){
var inst_66367 = (state_66376[(2)]);
var state_66376__$1 = state_66376;
var statearr_66388_69826 = state_66376__$1;
(statearr_66388_69826[(2)] = inst_66367);

(statearr_66388_69826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (13))){
var inst_66369 = (state_66376[(2)]);
var state_66376__$1 = (function (){var statearr_66390 = state_66376;
(statearr_66390[(9)] = inst_66369);

return statearr_66390;
})();
var statearr_66391_69828 = state_66376__$1;
(statearr_66391_69828[(2)] = null);

(statearr_66391_69828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (6))){
var inst_66341 = (state_66376[(7)]);
var state_66376__$1 = state_66376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66376__$1,(11),inst_66341);
} else {
if((state_val_66377 === (17))){
var inst_66362 = (state_66376[(2)]);
var state_66376__$1 = state_66376;
if(cljs.core.truth_(inst_66362)){
var statearr_66399_69829 = state_66376__$1;
(statearr_66399_69829[(1)] = (19));

} else {
var statearr_66404_69830 = state_66376__$1;
(statearr_66404_69830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (3))){
var inst_66374 = (state_66376[(2)]);
var state_66376__$1 = state_66376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66376__$1,inst_66374);
} else {
if((state_val_66377 === (12))){
var inst_66351 = (state_66376[(10)]);
var state_66376__$1 = state_66376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66376__$1,(14),inst_66351);
} else {
if((state_val_66377 === (2))){
var state_66376__$1 = state_66376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66376__$1,(4),results);
} else {
if((state_val_66377 === (19))){
var state_66376__$1 = state_66376;
var statearr_66408_69832 = state_66376__$1;
(statearr_66408_69832[(2)] = null);

(statearr_66408_69832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (11))){
var inst_66351 = (state_66376[(2)]);
var state_66376__$1 = (function (){var statearr_66409 = state_66376;
(statearr_66409[(10)] = inst_66351);

return statearr_66409;
})();
var statearr_66412_69834 = state_66376__$1;
(statearr_66412_69834[(2)] = null);

(statearr_66412_69834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (9))){
var state_66376__$1 = state_66376;
var statearr_66415_69835 = state_66376__$1;
(statearr_66415_69835[(2)] = null);

(statearr_66415_69835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (5))){
var state_66376__$1 = state_66376;
if(cljs.core.truth_(close_QMARK_)){
var statearr_66416_69837 = state_66376__$1;
(statearr_66416_69837[(1)] = (8));

} else {
var statearr_66417_69838 = state_66376__$1;
(statearr_66417_69838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (14))){
var inst_66356 = (state_66376[(11)]);
var inst_66354 = (state_66376[(8)]);
var inst_66354__$1 = (state_66376[(2)]);
var inst_66355 = (inst_66354__$1 == null);
var inst_66356__$1 = cljs.core.not(inst_66355);
var state_66376__$1 = (function (){var statearr_66425 = state_66376;
(statearr_66425[(11)] = inst_66356__$1);

(statearr_66425[(8)] = inst_66354__$1);

return statearr_66425;
})();
if(inst_66356__$1){
var statearr_66426_69839 = state_66376__$1;
(statearr_66426_69839[(1)] = (15));

} else {
var statearr_66428_69840 = state_66376__$1;
(statearr_66428_69840[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (16))){
var inst_66356 = (state_66376[(11)]);
var state_66376__$1 = state_66376;
var statearr_66429_69841 = state_66376__$1;
(statearr_66429_69841[(2)] = inst_66356);

(statearr_66429_69841[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (10))){
var inst_66348 = (state_66376[(2)]);
var state_66376__$1 = state_66376;
var statearr_66430_69842 = state_66376__$1;
(statearr_66430_69842[(2)] = inst_66348);

(statearr_66430_69842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (18))){
var inst_66359 = (state_66376[(2)]);
var state_66376__$1 = state_66376;
var statearr_66431_69846 = state_66376__$1;
(statearr_66431_69846[(2)] = inst_66359);

(statearr_66431_69846[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66377 === (8))){
var inst_66345 = cljs.core.async.close_BANG_(to);
var state_66376__$1 = state_66376;
var statearr_66432_69847 = state_66376__$1;
(statearr_66432_69847[(2)] = inst_66345);

(statearr_66432_69847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0 = (function (){
var statearr_66433 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__);

(statearr_66433[(1)] = (1));

return statearr_66433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1 = (function (state_66376){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_66376);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e66434){if((e66434 instanceof Object)){
var ex__65226__auto__ = e66434;
var statearr_66435_69849 = state_66376;
(statearr_66435_69849[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69850 = state_66376;
state_66376 = G__69850;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__ = function(state_66376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1.call(this,state_66376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__65222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_66439 = f__65556__auto__();
(statearr_66439[(6)] = c__65555__auto__);

return statearr_66439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));

return c__65555__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__66447 = arguments.length;
switch (G__66447) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__66457 = arguments.length;
switch (G__66457) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__66485 = arguments.length;
switch (G__66485) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__65555__auto___69859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_66518){
var state_val_66519 = (state_66518[(1)]);
if((state_val_66519 === (7))){
var inst_66514 = (state_66518[(2)]);
var state_66518__$1 = state_66518;
var statearr_66529_69860 = state_66518__$1;
(statearr_66529_69860[(2)] = inst_66514);

(statearr_66529_69860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (1))){
var state_66518__$1 = state_66518;
var statearr_66531_69861 = state_66518__$1;
(statearr_66531_69861[(2)] = null);

(statearr_66531_69861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (4))){
var inst_66494 = (state_66518[(7)]);
var inst_66494__$1 = (state_66518[(2)]);
var inst_66495 = (inst_66494__$1 == null);
var state_66518__$1 = (function (){var statearr_66532 = state_66518;
(statearr_66532[(7)] = inst_66494__$1);

return statearr_66532;
})();
if(cljs.core.truth_(inst_66495)){
var statearr_66534_69863 = state_66518__$1;
(statearr_66534_69863[(1)] = (5));

} else {
var statearr_66535_69864 = state_66518__$1;
(statearr_66535_69864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (13))){
var state_66518__$1 = state_66518;
var statearr_66536_69866 = state_66518__$1;
(statearr_66536_69866[(2)] = null);

(statearr_66536_69866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (6))){
var inst_66494 = (state_66518[(7)]);
var inst_66501 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_66494) : p.call(null,inst_66494));
var state_66518__$1 = state_66518;
if(cljs.core.truth_(inst_66501)){
var statearr_66537_69867 = state_66518__$1;
(statearr_66537_69867[(1)] = (9));

} else {
var statearr_66539_69868 = state_66518__$1;
(statearr_66539_69868[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (3))){
var inst_66516 = (state_66518[(2)]);
var state_66518__$1 = state_66518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66518__$1,inst_66516);
} else {
if((state_val_66519 === (12))){
var state_66518__$1 = state_66518;
var statearr_66545_69869 = state_66518__$1;
(statearr_66545_69869[(2)] = null);

(statearr_66545_69869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (2))){
var state_66518__$1 = state_66518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66518__$1,(4),ch);
} else {
if((state_val_66519 === (11))){
var inst_66494 = (state_66518[(7)]);
var inst_66505 = (state_66518[(2)]);
var state_66518__$1 = state_66518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66518__$1,(8),inst_66505,inst_66494);
} else {
if((state_val_66519 === (9))){
var state_66518__$1 = state_66518;
var statearr_66549_69871 = state_66518__$1;
(statearr_66549_69871[(2)] = tc);

(statearr_66549_69871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (5))){
var inst_66498 = cljs.core.async.close_BANG_(tc);
var inst_66499 = cljs.core.async.close_BANG_(fc);
var state_66518__$1 = (function (){var statearr_66551 = state_66518;
(statearr_66551[(8)] = inst_66498);

return statearr_66551;
})();
var statearr_66552_69872 = state_66518__$1;
(statearr_66552_69872[(2)] = inst_66499);

(statearr_66552_69872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (14))){
var inst_66512 = (state_66518[(2)]);
var state_66518__$1 = state_66518;
var statearr_66553_69874 = state_66518__$1;
(statearr_66553_69874[(2)] = inst_66512);

(statearr_66553_69874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (10))){
var state_66518__$1 = state_66518;
var statearr_66554_69875 = state_66518__$1;
(statearr_66554_69875[(2)] = fc);

(statearr_66554_69875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (8))){
var inst_66507 = (state_66518[(2)]);
var state_66518__$1 = state_66518;
if(cljs.core.truth_(inst_66507)){
var statearr_66559_69877 = state_66518__$1;
(statearr_66559_69877[(1)] = (12));

} else {
var statearr_66560_69878 = state_66518__$1;
(statearr_66560_69878[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_66563 = [null,null,null,null,null,null,null,null,null];
(statearr_66563[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_66563[(1)] = (1));

return statearr_66563;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_66518){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_66518);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e66565){if((e66565 instanceof Object)){
var ex__65226__auto__ = e66565;
var statearr_66568_69879 = state_66518;
(statearr_66568_69879[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69880 = state_66518;
state_66518 = G__69880;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_66518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_66518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_66570 = f__65556__auto__();
(statearr_66570[(6)] = c__65555__auto___69859);

return statearr_66570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__65555__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_66601){
var state_val_66602 = (state_66601[(1)]);
if((state_val_66602 === (7))){
var inst_66597 = (state_66601[(2)]);
var state_66601__$1 = state_66601;
var statearr_66609_69881 = state_66601__$1;
(statearr_66609_69881[(2)] = inst_66597);

(statearr_66609_69881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66602 === (1))){
var inst_66575 = init;
var state_66601__$1 = (function (){var statearr_66610 = state_66601;
(statearr_66610[(7)] = inst_66575);

return statearr_66610;
})();
var statearr_66611_69882 = state_66601__$1;
(statearr_66611_69882[(2)] = null);

(statearr_66611_69882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66602 === (4))){
var inst_66578 = (state_66601[(8)]);
var inst_66578__$1 = (state_66601[(2)]);
var inst_66579 = (inst_66578__$1 == null);
var state_66601__$1 = (function (){var statearr_66620 = state_66601;
(statearr_66620[(8)] = inst_66578__$1);

return statearr_66620;
})();
if(cljs.core.truth_(inst_66579)){
var statearr_66623_69883 = state_66601__$1;
(statearr_66623_69883[(1)] = (5));

} else {
var statearr_66627_69884 = state_66601__$1;
(statearr_66627_69884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66602 === (6))){
var inst_66575 = (state_66601[(7)]);
var inst_66586 = (state_66601[(9)]);
var inst_66578 = (state_66601[(8)]);
var inst_66586__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_66575,inst_66578) : f.call(null,inst_66575,inst_66578));
var inst_66587 = cljs.core.reduced_QMARK_(inst_66586__$1);
var state_66601__$1 = (function (){var statearr_66631 = state_66601;
(statearr_66631[(9)] = inst_66586__$1);

return statearr_66631;
})();
if(inst_66587){
var statearr_66632_69885 = state_66601__$1;
(statearr_66632_69885[(1)] = (8));

} else {
var statearr_66633_69886 = state_66601__$1;
(statearr_66633_69886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66602 === (3))){
var inst_66599 = (state_66601[(2)]);
var state_66601__$1 = state_66601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66601__$1,inst_66599);
} else {
if((state_val_66602 === (2))){
var state_66601__$1 = state_66601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66601__$1,(4),ch);
} else {
if((state_val_66602 === (9))){
var inst_66586 = (state_66601[(9)]);
var inst_66575 = inst_66586;
var state_66601__$1 = (function (){var statearr_66637 = state_66601;
(statearr_66637[(7)] = inst_66575);

return statearr_66637;
})();
var statearr_66639_69887 = state_66601__$1;
(statearr_66639_69887[(2)] = null);

(statearr_66639_69887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66602 === (5))){
var inst_66575 = (state_66601[(7)]);
var state_66601__$1 = state_66601;
var statearr_66644_69888 = state_66601__$1;
(statearr_66644_69888[(2)] = inst_66575);

(statearr_66644_69888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66602 === (10))){
var inst_66595 = (state_66601[(2)]);
var state_66601__$1 = state_66601;
var statearr_66648_69889 = state_66601__$1;
(statearr_66648_69889[(2)] = inst_66595);

(statearr_66648_69889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66602 === (8))){
var inst_66586 = (state_66601[(9)]);
var inst_66591 = cljs.core.deref(inst_66586);
var state_66601__$1 = state_66601;
var statearr_66650_69891 = state_66601__$1;
(statearr_66650_69891[(2)] = inst_66591);

(statearr_66650_69891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__65222__auto__ = null;
var cljs$core$async$reduce_$_state_machine__65222__auto____0 = (function (){
var statearr_66660 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66660[(0)] = cljs$core$async$reduce_$_state_machine__65222__auto__);

(statearr_66660[(1)] = (1));

return statearr_66660;
});
var cljs$core$async$reduce_$_state_machine__65222__auto____1 = (function (state_66601){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_66601);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e66665){if((e66665 instanceof Object)){
var ex__65226__auto__ = e66665;
var statearr_66667_69893 = state_66601;
(statearr_66667_69893[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69896 = state_66601;
state_66601 = G__69896;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__65222__auto__ = function(state_66601){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__65222__auto____1.call(this,state_66601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__65222__auto____0;
cljs$core$async$reduce_$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__65222__auto____1;
return cljs$core$async$reduce_$_state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_66669 = f__65556__auto__();
(statearr_66669[(6)] = c__65555__auto__);

return statearr_66669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));

return c__65555__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__65555__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_66685){
var state_val_66686 = (state_66685[(1)]);
if((state_val_66686 === (1))){
var inst_66680 = cljs.core.async.reduce(f__$1,init,ch);
var state_66685__$1 = state_66685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66685__$1,(2),inst_66680);
} else {
if((state_val_66686 === (2))){
var inst_66682 = (state_66685[(2)]);
var inst_66683 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_66682) : f__$1.call(null,inst_66682));
var state_66685__$1 = state_66685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66685__$1,inst_66683);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__65222__auto__ = null;
var cljs$core$async$transduce_$_state_machine__65222__auto____0 = (function (){
var statearr_66694 = [null,null,null,null,null,null,null];
(statearr_66694[(0)] = cljs$core$async$transduce_$_state_machine__65222__auto__);

(statearr_66694[(1)] = (1));

return statearr_66694;
});
var cljs$core$async$transduce_$_state_machine__65222__auto____1 = (function (state_66685){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_66685);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e66702){if((e66702 instanceof Object)){
var ex__65226__auto__ = e66702;
var statearr_66703_69906 = state_66685;
(statearr_66703_69906[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69907 = state_66685;
state_66685 = G__69907;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__65222__auto__ = function(state_66685){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__65222__auto____1.call(this,state_66685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__65222__auto____0;
cljs$core$async$transduce_$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__65222__auto____1;
return cljs$core$async$transduce_$_state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_66710 = f__65556__auto__();
(statearr_66710[(6)] = c__65555__auto__);

return statearr_66710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));

return c__65555__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__66717 = arguments.length;
switch (G__66717) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__65555__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_66754){
var state_val_66755 = (state_66754[(1)]);
if((state_val_66755 === (7))){
var inst_66735 = (state_66754[(2)]);
var state_66754__$1 = state_66754;
var statearr_66757_69909 = state_66754__$1;
(statearr_66757_69909[(2)] = inst_66735);

(statearr_66757_69909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66755 === (1))){
var inst_66727 = cljs.core.seq(coll);
var inst_66728 = inst_66727;
var state_66754__$1 = (function (){var statearr_66760 = state_66754;
(statearr_66760[(7)] = inst_66728);

return statearr_66760;
})();
var statearr_66761_69910 = state_66754__$1;
(statearr_66761_69910[(2)] = null);

(statearr_66761_69910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66755 === (4))){
var inst_66728 = (state_66754[(7)]);
var inst_66733 = cljs.core.first(inst_66728);
var state_66754__$1 = state_66754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66754__$1,(7),ch,inst_66733);
} else {
if((state_val_66755 === (13))){
var inst_66748 = (state_66754[(2)]);
var state_66754__$1 = state_66754;
var statearr_66766_69912 = state_66754__$1;
(statearr_66766_69912[(2)] = inst_66748);

(statearr_66766_69912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66755 === (6))){
var inst_66738 = (state_66754[(2)]);
var state_66754__$1 = state_66754;
if(cljs.core.truth_(inst_66738)){
var statearr_66769_69913 = state_66754__$1;
(statearr_66769_69913[(1)] = (8));

} else {
var statearr_66770_69914 = state_66754__$1;
(statearr_66770_69914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66755 === (3))){
var inst_66752 = (state_66754[(2)]);
var state_66754__$1 = state_66754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66754__$1,inst_66752);
} else {
if((state_val_66755 === (12))){
var state_66754__$1 = state_66754;
var statearr_66772_69915 = state_66754__$1;
(statearr_66772_69915[(2)] = null);

(statearr_66772_69915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66755 === (2))){
var inst_66728 = (state_66754[(7)]);
var state_66754__$1 = state_66754;
if(cljs.core.truth_(inst_66728)){
var statearr_66776_69916 = state_66754__$1;
(statearr_66776_69916[(1)] = (4));

} else {
var statearr_66777_69917 = state_66754__$1;
(statearr_66777_69917[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66755 === (11))){
var inst_66744 = cljs.core.async.close_BANG_(ch);
var state_66754__$1 = state_66754;
var statearr_66780_69918 = state_66754__$1;
(statearr_66780_69918[(2)] = inst_66744);

(statearr_66780_69918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66755 === (9))){
var state_66754__$1 = state_66754;
if(cljs.core.truth_(close_QMARK_)){
var statearr_66789_69919 = state_66754__$1;
(statearr_66789_69919[(1)] = (11));

} else {
var statearr_66790_69920 = state_66754__$1;
(statearr_66790_69920[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66755 === (5))){
var inst_66728 = (state_66754[(7)]);
var state_66754__$1 = state_66754;
var statearr_66797_69921 = state_66754__$1;
(statearr_66797_69921[(2)] = inst_66728);

(statearr_66797_69921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66755 === (10))){
var inst_66750 = (state_66754[(2)]);
var state_66754__$1 = state_66754;
var statearr_66807_69922 = state_66754__$1;
(statearr_66807_69922[(2)] = inst_66750);

(statearr_66807_69922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66755 === (8))){
var inst_66728 = (state_66754[(7)]);
var inst_66740 = cljs.core.next(inst_66728);
var inst_66728__$1 = inst_66740;
var state_66754__$1 = (function (){var statearr_66808 = state_66754;
(statearr_66808[(7)] = inst_66728__$1);

return statearr_66808;
})();
var statearr_66810_69923 = state_66754__$1;
(statearr_66810_69923[(2)] = null);

(statearr_66810_69923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_66815 = [null,null,null,null,null,null,null,null];
(statearr_66815[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_66815[(1)] = (1));

return statearr_66815;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_66754){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_66754);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e66816){if((e66816 instanceof Object)){
var ex__65226__auto__ = e66816;
var statearr_66819_69924 = state_66754;
(statearr_66819_69924[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69925 = state_66754;
state_66754 = G__69925;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_66754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_66754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_66824 = f__65556__auto__();
(statearr_66824[(6)] = c__65555__auto__);

return statearr_66824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));

return c__65555__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_69926 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_69926(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_69931 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_69931(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_69937 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_69937(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_69938 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_69938(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66899 = (function (ch,cs,meta66900){
this.ch = ch;
this.cs = cs;
this.meta66900 = meta66900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66901,meta66900__$1){
var self__ = this;
var _66901__$1 = this;
return (new cljs.core.async.t_cljs$core$async66899(self__.ch,self__.cs,meta66900__$1));
}));

(cljs.core.async.t_cljs$core$async66899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66901){
var self__ = this;
var _66901__$1 = this;
return self__.meta66900;
}));

(cljs.core.async.t_cljs$core$async66899.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async66899.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66899.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async66899.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async66899.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async66899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta66900","meta66900",-1520678753,null)], null);
}));

(cljs.core.async.t_cljs$core$async66899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66899");

(cljs.core.async.t_cljs$core$async66899.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async66899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66899.
 */
cljs.core.async.__GT_t_cljs$core$async66899 = (function cljs$core$async$mult_$___GT_t_cljs$core$async66899(ch__$1,cs__$1,meta66900){
return (new cljs.core.async.t_cljs$core$async66899(ch__$1,cs__$1,meta66900));
});

}

return (new cljs.core.async.t_cljs$core$async66899(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__65555__auto___69945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_67077){
var state_val_67078 = (state_67077[(1)]);
if((state_val_67078 === (7))){
var inst_67071 = (state_67077[(2)]);
var state_67077__$1 = state_67077;
var statearr_67080_69946 = state_67077__$1;
(statearr_67080_69946[(2)] = inst_67071);

(statearr_67080_69946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (20))){
var inst_66966 = (state_67077[(7)]);
var inst_66978 = cljs.core.first(inst_66966);
var inst_66979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66978,(0),null);
var inst_66980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66978,(1),null);
var state_67077__$1 = (function (){var statearr_67081 = state_67077;
(statearr_67081[(8)] = inst_66979);

return statearr_67081;
})();
if(cljs.core.truth_(inst_66980)){
var statearr_67082_69947 = state_67077__$1;
(statearr_67082_69947[(1)] = (22));

} else {
var statearr_67083_69948 = state_67077__$1;
(statearr_67083_69948[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (27))){
var inst_67016 = (state_67077[(9)]);
var inst_66934 = (state_67077[(10)]);
var inst_67021 = (state_67077[(11)]);
var inst_67014 = (state_67077[(12)]);
var inst_67021__$1 = cljs.core._nth(inst_67014,inst_67016);
var inst_67022 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_67021__$1,inst_66934,done);
var state_67077__$1 = (function (){var statearr_67086 = state_67077;
(statearr_67086[(11)] = inst_67021__$1);

return statearr_67086;
})();
if(cljs.core.truth_(inst_67022)){
var statearr_67087_69951 = state_67077__$1;
(statearr_67087_69951[(1)] = (30));

} else {
var statearr_67088_69952 = state_67077__$1;
(statearr_67088_69952[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (1))){
var state_67077__$1 = state_67077;
var statearr_67089_69953 = state_67077__$1;
(statearr_67089_69953[(2)] = null);

(statearr_67089_69953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (24))){
var inst_66966 = (state_67077[(7)]);
var inst_66990 = (state_67077[(2)]);
var inst_66991 = cljs.core.next(inst_66966);
var inst_66943 = inst_66991;
var inst_66944 = null;
var inst_66945 = (0);
var inst_66946 = (0);
var state_67077__$1 = (function (){var statearr_67096 = state_67077;
(statearr_67096[(13)] = inst_66945);

(statearr_67096[(14)] = inst_66944);

(statearr_67096[(15)] = inst_66990);

(statearr_67096[(16)] = inst_66946);

(statearr_67096[(17)] = inst_66943);

return statearr_67096;
})();
var statearr_67097_69954 = state_67077__$1;
(statearr_67097_69954[(2)] = null);

(statearr_67097_69954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (39))){
var state_67077__$1 = state_67077;
var statearr_67102_69956 = state_67077__$1;
(statearr_67102_69956[(2)] = null);

(statearr_67102_69956[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (4))){
var inst_66934 = (state_67077[(10)]);
var inst_66934__$1 = (state_67077[(2)]);
var inst_66935 = (inst_66934__$1 == null);
var state_67077__$1 = (function (){var statearr_67103 = state_67077;
(statearr_67103[(10)] = inst_66934__$1);

return statearr_67103;
})();
if(cljs.core.truth_(inst_66935)){
var statearr_67104_69958 = state_67077__$1;
(statearr_67104_69958[(1)] = (5));

} else {
var statearr_67105_69959 = state_67077__$1;
(statearr_67105_69959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (15))){
var inst_66945 = (state_67077[(13)]);
var inst_66944 = (state_67077[(14)]);
var inst_66946 = (state_67077[(16)]);
var inst_66943 = (state_67077[(17)]);
var inst_66962 = (state_67077[(2)]);
var inst_66963 = (inst_66946 + (1));
var tmp67099 = inst_66945;
var tmp67100 = inst_66944;
var tmp67101 = inst_66943;
var inst_66943__$1 = tmp67101;
var inst_66944__$1 = tmp67100;
var inst_66945__$1 = tmp67099;
var inst_66946__$1 = inst_66963;
var state_67077__$1 = (function (){var statearr_67110 = state_67077;
(statearr_67110[(13)] = inst_66945__$1);

(statearr_67110[(14)] = inst_66944__$1);

(statearr_67110[(18)] = inst_66962);

(statearr_67110[(16)] = inst_66946__$1);

(statearr_67110[(17)] = inst_66943__$1);

return statearr_67110;
})();
var statearr_67111_69960 = state_67077__$1;
(statearr_67111_69960[(2)] = null);

(statearr_67111_69960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (21))){
var inst_66994 = (state_67077[(2)]);
var state_67077__$1 = state_67077;
var statearr_67117_69961 = state_67077__$1;
(statearr_67117_69961[(2)] = inst_66994);

(statearr_67117_69961[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (31))){
var inst_67021 = (state_67077[(11)]);
var inst_67025 = done(null);
var inst_67026 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_67021);
var state_67077__$1 = (function (){var statearr_67118 = state_67077;
(statearr_67118[(19)] = inst_67025);

return statearr_67118;
})();
var statearr_67119_69962 = state_67077__$1;
(statearr_67119_69962[(2)] = inst_67026);

(statearr_67119_69962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (32))){
var inst_67016 = (state_67077[(9)]);
var inst_67015 = (state_67077[(20)]);
var inst_67013 = (state_67077[(21)]);
var inst_67014 = (state_67077[(12)]);
var inst_67028 = (state_67077[(2)]);
var inst_67029 = (inst_67016 + (1));
var tmp67113 = inst_67015;
var tmp67114 = inst_67013;
var tmp67115 = inst_67014;
var inst_67013__$1 = tmp67114;
var inst_67014__$1 = tmp67115;
var inst_67015__$1 = tmp67113;
var inst_67016__$1 = inst_67029;
var state_67077__$1 = (function (){var statearr_67121 = state_67077;
(statearr_67121[(9)] = inst_67016__$1);

(statearr_67121[(20)] = inst_67015__$1);

(statearr_67121[(22)] = inst_67028);

(statearr_67121[(21)] = inst_67013__$1);

(statearr_67121[(12)] = inst_67014__$1);

return statearr_67121;
})();
var statearr_67122_69968 = state_67077__$1;
(statearr_67122_69968[(2)] = null);

(statearr_67122_69968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (40))){
var inst_67042 = (state_67077[(23)]);
var inst_67046 = done(null);
var inst_67047 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_67042);
var state_67077__$1 = (function (){var statearr_67124 = state_67077;
(statearr_67124[(24)] = inst_67046);

return statearr_67124;
})();
var statearr_67126_69969 = state_67077__$1;
(statearr_67126_69969[(2)] = inst_67047);

(statearr_67126_69969[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (33))){
var inst_67033 = (state_67077[(25)]);
var inst_67035 = cljs.core.chunked_seq_QMARK_(inst_67033);
var state_67077__$1 = state_67077;
if(inst_67035){
var statearr_67127_69970 = state_67077__$1;
(statearr_67127_69970[(1)] = (36));

} else {
var statearr_67128_69971 = state_67077__$1;
(statearr_67128_69971[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (13))){
var inst_66956 = (state_67077[(26)]);
var inst_66959 = cljs.core.async.close_BANG_(inst_66956);
var state_67077__$1 = state_67077;
var statearr_67129_69972 = state_67077__$1;
(statearr_67129_69972[(2)] = inst_66959);

(statearr_67129_69972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (22))){
var inst_66979 = (state_67077[(8)]);
var inst_66987 = cljs.core.async.close_BANG_(inst_66979);
var state_67077__$1 = state_67077;
var statearr_67130_69973 = state_67077__$1;
(statearr_67130_69973[(2)] = inst_66987);

(statearr_67130_69973[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (36))){
var inst_67033 = (state_67077[(25)]);
var inst_67037 = cljs.core.chunk_first(inst_67033);
var inst_67038 = cljs.core.chunk_rest(inst_67033);
var inst_67039 = cljs.core.count(inst_67037);
var inst_67013 = inst_67038;
var inst_67014 = inst_67037;
var inst_67015 = inst_67039;
var inst_67016 = (0);
var state_67077__$1 = (function (){var statearr_67135 = state_67077;
(statearr_67135[(9)] = inst_67016);

(statearr_67135[(20)] = inst_67015);

(statearr_67135[(21)] = inst_67013);

(statearr_67135[(12)] = inst_67014);

return statearr_67135;
})();
var statearr_67140_69974 = state_67077__$1;
(statearr_67140_69974[(2)] = null);

(statearr_67140_69974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (41))){
var inst_67033 = (state_67077[(25)]);
var inst_67049 = (state_67077[(2)]);
var inst_67050 = cljs.core.next(inst_67033);
var inst_67013 = inst_67050;
var inst_67014 = null;
var inst_67015 = (0);
var inst_67016 = (0);
var state_67077__$1 = (function (){var statearr_67146 = state_67077;
(statearr_67146[(27)] = inst_67049);

(statearr_67146[(9)] = inst_67016);

(statearr_67146[(20)] = inst_67015);

(statearr_67146[(21)] = inst_67013);

(statearr_67146[(12)] = inst_67014);

return statearr_67146;
})();
var statearr_67147_69979 = state_67077__$1;
(statearr_67147_69979[(2)] = null);

(statearr_67147_69979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (43))){
var state_67077__$1 = state_67077;
var statearr_67148_69983 = state_67077__$1;
(statearr_67148_69983[(2)] = null);

(statearr_67148_69983[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (29))){
var inst_67058 = (state_67077[(2)]);
var state_67077__$1 = state_67077;
var statearr_67149_69984 = state_67077__$1;
(statearr_67149_69984[(2)] = inst_67058);

(statearr_67149_69984[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (44))){
var inst_67068 = (state_67077[(2)]);
var state_67077__$1 = (function (){var statearr_67150 = state_67077;
(statearr_67150[(28)] = inst_67068);

return statearr_67150;
})();
var statearr_67151_69988 = state_67077__$1;
(statearr_67151_69988[(2)] = null);

(statearr_67151_69988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (6))){
var inst_67005 = (state_67077[(29)]);
var inst_67004 = cljs.core.deref(cs);
var inst_67005__$1 = cljs.core.keys(inst_67004);
var inst_67006 = cljs.core.count(inst_67005__$1);
var inst_67007 = cljs.core.reset_BANG_(dctr,inst_67006);
var inst_67012 = cljs.core.seq(inst_67005__$1);
var inst_67013 = inst_67012;
var inst_67014 = null;
var inst_67015 = (0);
var inst_67016 = (0);
var state_67077__$1 = (function (){var statearr_67159 = state_67077;
(statearr_67159[(9)] = inst_67016);

(statearr_67159[(20)] = inst_67015);

(statearr_67159[(21)] = inst_67013);

(statearr_67159[(29)] = inst_67005__$1);

(statearr_67159[(30)] = inst_67007);

(statearr_67159[(12)] = inst_67014);

return statearr_67159;
})();
var statearr_67164_69989 = state_67077__$1;
(statearr_67164_69989[(2)] = null);

(statearr_67164_69989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (28))){
var inst_67013 = (state_67077[(21)]);
var inst_67033 = (state_67077[(25)]);
var inst_67033__$1 = cljs.core.seq(inst_67013);
var state_67077__$1 = (function (){var statearr_67170 = state_67077;
(statearr_67170[(25)] = inst_67033__$1);

return statearr_67170;
})();
if(inst_67033__$1){
var statearr_67171_69993 = state_67077__$1;
(statearr_67171_69993[(1)] = (33));

} else {
var statearr_67172_69994 = state_67077__$1;
(statearr_67172_69994[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (25))){
var inst_67016 = (state_67077[(9)]);
var inst_67015 = (state_67077[(20)]);
var inst_67018 = (inst_67016 < inst_67015);
var inst_67019 = inst_67018;
var state_67077__$1 = state_67077;
if(cljs.core.truth_(inst_67019)){
var statearr_67173_69995 = state_67077__$1;
(statearr_67173_69995[(1)] = (27));

} else {
var statearr_67174_69996 = state_67077__$1;
(statearr_67174_69996[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (34))){
var state_67077__$1 = state_67077;
var statearr_67177_69997 = state_67077__$1;
(statearr_67177_69997[(2)] = null);

(statearr_67177_69997[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (17))){
var state_67077__$1 = state_67077;
var statearr_67179_70001 = state_67077__$1;
(statearr_67179_70001[(2)] = null);

(statearr_67179_70001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (3))){
var inst_67073 = (state_67077[(2)]);
var state_67077__$1 = state_67077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67077__$1,inst_67073);
} else {
if((state_val_67078 === (12))){
var inst_67000 = (state_67077[(2)]);
var state_67077__$1 = state_67077;
var statearr_67188_70002 = state_67077__$1;
(statearr_67188_70002[(2)] = inst_67000);

(statearr_67188_70002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (2))){
var state_67077__$1 = state_67077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67077__$1,(4),ch);
} else {
if((state_val_67078 === (23))){
var state_67077__$1 = state_67077;
var statearr_67189_70005 = state_67077__$1;
(statearr_67189_70005[(2)] = null);

(statearr_67189_70005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (35))){
var inst_67056 = (state_67077[(2)]);
var state_67077__$1 = state_67077;
var statearr_67190_70006 = state_67077__$1;
(statearr_67190_70006[(2)] = inst_67056);

(statearr_67190_70006[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (19))){
var inst_66966 = (state_67077[(7)]);
var inst_66970 = cljs.core.chunk_first(inst_66966);
var inst_66971 = cljs.core.chunk_rest(inst_66966);
var inst_66972 = cljs.core.count(inst_66970);
var inst_66943 = inst_66971;
var inst_66944 = inst_66970;
var inst_66945 = inst_66972;
var inst_66946 = (0);
var state_67077__$1 = (function (){var statearr_67192 = state_67077;
(statearr_67192[(13)] = inst_66945);

(statearr_67192[(14)] = inst_66944);

(statearr_67192[(16)] = inst_66946);

(statearr_67192[(17)] = inst_66943);

return statearr_67192;
})();
var statearr_67193_70013 = state_67077__$1;
(statearr_67193_70013[(2)] = null);

(statearr_67193_70013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (11))){
var inst_66943 = (state_67077[(17)]);
var inst_66966 = (state_67077[(7)]);
var inst_66966__$1 = cljs.core.seq(inst_66943);
var state_67077__$1 = (function (){var statearr_67194 = state_67077;
(statearr_67194[(7)] = inst_66966__$1);

return statearr_67194;
})();
if(inst_66966__$1){
var statearr_67195_70018 = state_67077__$1;
(statearr_67195_70018[(1)] = (16));

} else {
var statearr_67199_70022 = state_67077__$1;
(statearr_67199_70022[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (9))){
var inst_67002 = (state_67077[(2)]);
var state_67077__$1 = state_67077;
var statearr_67202_70023 = state_67077__$1;
(statearr_67202_70023[(2)] = inst_67002);

(statearr_67202_70023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (5))){
var inst_66941 = cljs.core.deref(cs);
var inst_66942 = cljs.core.seq(inst_66941);
var inst_66943 = inst_66942;
var inst_66944 = null;
var inst_66945 = (0);
var inst_66946 = (0);
var state_67077__$1 = (function (){var statearr_67203 = state_67077;
(statearr_67203[(13)] = inst_66945);

(statearr_67203[(14)] = inst_66944);

(statearr_67203[(16)] = inst_66946);

(statearr_67203[(17)] = inst_66943);

return statearr_67203;
})();
var statearr_67205_70027 = state_67077__$1;
(statearr_67205_70027[(2)] = null);

(statearr_67205_70027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (14))){
var state_67077__$1 = state_67077;
var statearr_67206_70032 = state_67077__$1;
(statearr_67206_70032[(2)] = null);

(statearr_67206_70032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (45))){
var inst_67065 = (state_67077[(2)]);
var state_67077__$1 = state_67077;
var statearr_67209_70033 = state_67077__$1;
(statearr_67209_70033[(2)] = inst_67065);

(statearr_67209_70033[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (26))){
var inst_67005 = (state_67077[(29)]);
var inst_67060 = (state_67077[(2)]);
var inst_67062 = cljs.core.seq(inst_67005);
var state_67077__$1 = (function (){var statearr_67218 = state_67077;
(statearr_67218[(31)] = inst_67060);

return statearr_67218;
})();
if(inst_67062){
var statearr_67221_70037 = state_67077__$1;
(statearr_67221_70037[(1)] = (42));

} else {
var statearr_67222_70038 = state_67077__$1;
(statearr_67222_70038[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (16))){
var inst_66966 = (state_67077[(7)]);
var inst_66968 = cljs.core.chunked_seq_QMARK_(inst_66966);
var state_67077__$1 = state_67077;
if(inst_66968){
var statearr_67223_70040 = state_67077__$1;
(statearr_67223_70040[(1)] = (19));

} else {
var statearr_67224_70041 = state_67077__$1;
(statearr_67224_70041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (38))){
var inst_67053 = (state_67077[(2)]);
var state_67077__$1 = state_67077;
var statearr_67231_70046 = state_67077__$1;
(statearr_67231_70046[(2)] = inst_67053);

(statearr_67231_70046[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (30))){
var state_67077__$1 = state_67077;
var statearr_67234_70050 = state_67077__$1;
(statearr_67234_70050[(2)] = null);

(statearr_67234_70050[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (10))){
var inst_66944 = (state_67077[(14)]);
var inst_66946 = (state_67077[(16)]);
var inst_66955 = cljs.core._nth(inst_66944,inst_66946);
var inst_66956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66955,(0),null);
var inst_66957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66955,(1),null);
var state_67077__$1 = (function (){var statearr_67238 = state_67077;
(statearr_67238[(26)] = inst_66956);

return statearr_67238;
})();
if(cljs.core.truth_(inst_66957)){
var statearr_67241_70054 = state_67077__$1;
(statearr_67241_70054[(1)] = (13));

} else {
var statearr_67242_70055 = state_67077__$1;
(statearr_67242_70055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (18))){
var inst_66997 = (state_67077[(2)]);
var state_67077__$1 = state_67077;
var statearr_67243_70059 = state_67077__$1;
(statearr_67243_70059[(2)] = inst_66997);

(statearr_67243_70059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (42))){
var state_67077__$1 = state_67077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67077__$1,(45),dchan);
} else {
if((state_val_67078 === (37))){
var inst_66934 = (state_67077[(10)]);
var inst_67042 = (state_67077[(23)]);
var inst_67033 = (state_67077[(25)]);
var inst_67042__$1 = cljs.core.first(inst_67033);
var inst_67043 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_67042__$1,inst_66934,done);
var state_67077__$1 = (function (){var statearr_67247 = state_67077;
(statearr_67247[(23)] = inst_67042__$1);

return statearr_67247;
})();
if(cljs.core.truth_(inst_67043)){
var statearr_67249_70060 = state_67077__$1;
(statearr_67249_70060[(1)] = (39));

} else {
var statearr_67250_70062 = state_67077__$1;
(statearr_67250_70062[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67078 === (8))){
var inst_66945 = (state_67077[(13)]);
var inst_66946 = (state_67077[(16)]);
var inst_66948 = (inst_66946 < inst_66945);
var inst_66949 = inst_66948;
var state_67077__$1 = state_67077;
if(cljs.core.truth_(inst_66949)){
var statearr_67254_70063 = state_67077__$1;
(statearr_67254_70063[(1)] = (10));

} else {
var statearr_67257_70067 = state_67077__$1;
(statearr_67257_70067[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__65222__auto__ = null;
var cljs$core$async$mult_$_state_machine__65222__auto____0 = (function (){
var statearr_67263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67263[(0)] = cljs$core$async$mult_$_state_machine__65222__auto__);

(statearr_67263[(1)] = (1));

return statearr_67263;
});
var cljs$core$async$mult_$_state_machine__65222__auto____1 = (function (state_67077){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_67077);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e67268){if((e67268 instanceof Object)){
var ex__65226__auto__ = e67268;
var statearr_67269_70079 = state_67077;
(statearr_67269_70079[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67268;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70080 = state_67077;
state_67077 = G__70080;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__65222__auto__ = function(state_67077){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__65222__auto____1.call(this,state_67077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__65222__auto____0;
cljs$core$async$mult_$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__65222__auto____1;
return cljs$core$async$mult_$_state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_67283 = f__65556__auto__();
(statearr_67283[(6)] = c__65555__auto___69945);

return statearr_67283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__67298 = arguments.length;
switch (G__67298) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_70093 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_70093(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_70098 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_70098(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_70102 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_70102(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_70103 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_70103(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_70104 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_70104(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___70105 = arguments.length;
var i__4830__auto___70106 = (0);
while(true){
if((i__4830__auto___70106 < len__4829__auto___70105)){
args__4835__auto__.push((arguments[i__4830__auto___70106]));

var G__70107 = (i__4830__auto___70106 + (1));
i__4830__auto___70106 = G__70107;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__67353){
var map__67354 = p__67353;
var map__67354__$1 = cljs.core.__destructure_map(map__67354);
var opts = map__67354__$1;
var statearr_67355_70108 = state;
(statearr_67355_70108[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_67368_70109 = state;
(statearr_67368_70109[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_67373_70110 = state;
(statearr_67373_70110[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq67346){
var G__67347 = cljs.core.first(seq67346);
var seq67346__$1 = cljs.core.next(seq67346);
var G__67348 = cljs.core.first(seq67346__$1);
var seq67346__$2 = cljs.core.next(seq67346__$1);
var G__67349 = cljs.core.first(seq67346__$2);
var seq67346__$3 = cljs.core.next(seq67346__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67347,G__67348,G__67349,seq67346__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67383 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta67384){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta67384 = meta67384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67385,meta67384__$1){
var self__ = this;
var _67385__$1 = this;
return (new cljs.core.async.t_cljs$core$async67383(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta67384__$1));
}));

(cljs.core.async.t_cljs$core$async67383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67385){
var self__ = this;
var _67385__$1 = this;
return self__.meta67384;
}));

(cljs.core.async.t_cljs$core$async67383.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67383.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async67383.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67383.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async67383.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async67383.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async67383.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async67383.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async67383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta67384","meta67384",1094083533,null)], null);
}));

(cljs.core.async.t_cljs$core$async67383.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67383");

(cljs.core.async.t_cljs$core$async67383.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async67383");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67383.
 */
cljs.core.async.__GT_t_cljs$core$async67383 = (function cljs$core$async$mix_$___GT_t_cljs$core$async67383(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta67384){
return (new cljs.core.async.t_cljs$core$async67383(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta67384));
});

}

return (new cljs.core.async.t_cljs$core$async67383(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__65555__auto___70119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_67556){
var state_val_67557 = (state_67556[(1)]);
if((state_val_67557 === (7))){
var inst_67507 = (state_67556[(2)]);
var state_67556__$1 = state_67556;
if(cljs.core.truth_(inst_67507)){
var statearr_67560_70121 = state_67556__$1;
(statearr_67560_70121[(1)] = (8));

} else {
var statearr_67562_70123 = state_67556__$1;
(statearr_67562_70123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (20))){
var inst_67500 = (state_67556[(7)]);
var state_67556__$1 = state_67556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67556__$1,(23),out,inst_67500);
} else {
if((state_val_67557 === (1))){
var inst_67479 = calc_state();
var inst_67482 = cljs.core.__destructure_map(inst_67479);
var inst_67483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67482,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_67484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67482,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_67486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67482,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_67487 = inst_67479;
var state_67556__$1 = (function (){var statearr_67572 = state_67556;
(statearr_67572[(8)] = inst_67484);

(statearr_67572[(9)] = inst_67483);

(statearr_67572[(10)] = inst_67487);

(statearr_67572[(11)] = inst_67486);

return statearr_67572;
})();
var statearr_67573_70125 = state_67556__$1;
(statearr_67573_70125[(2)] = null);

(statearr_67573_70125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (24))){
var inst_67490 = (state_67556[(12)]);
var inst_67487 = inst_67490;
var state_67556__$1 = (function (){var statearr_67574 = state_67556;
(statearr_67574[(10)] = inst_67487);

return statearr_67574;
})();
var statearr_67575_70126 = state_67556__$1;
(statearr_67575_70126[(2)] = null);

(statearr_67575_70126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (4))){
var inst_67502 = (state_67556[(13)]);
var inst_67500 = (state_67556[(7)]);
var inst_67499 = (state_67556[(2)]);
var inst_67500__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67499,(0),null);
var inst_67501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67499,(1),null);
var inst_67502__$1 = (inst_67500__$1 == null);
var state_67556__$1 = (function (){var statearr_67579 = state_67556;
(statearr_67579[(14)] = inst_67501);

(statearr_67579[(13)] = inst_67502__$1);

(statearr_67579[(7)] = inst_67500__$1);

return statearr_67579;
})();
if(cljs.core.truth_(inst_67502__$1)){
var statearr_67580_70128 = state_67556__$1;
(statearr_67580_70128[(1)] = (5));

} else {
var statearr_67583_70129 = state_67556__$1;
(statearr_67583_70129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (15))){
var inst_67491 = (state_67556[(15)]);
var inst_67525 = (state_67556[(16)]);
var inst_67525__$1 = cljs.core.empty_QMARK_(inst_67491);
var state_67556__$1 = (function (){var statearr_67588 = state_67556;
(statearr_67588[(16)] = inst_67525__$1);

return statearr_67588;
})();
if(inst_67525__$1){
var statearr_67591_70140 = state_67556__$1;
(statearr_67591_70140[(1)] = (17));

} else {
var statearr_67592_70141 = state_67556__$1;
(statearr_67592_70141[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (21))){
var inst_67490 = (state_67556[(12)]);
var inst_67487 = inst_67490;
var state_67556__$1 = (function (){var statearr_67595 = state_67556;
(statearr_67595[(10)] = inst_67487);

return statearr_67595;
})();
var statearr_67598_70146 = state_67556__$1;
(statearr_67598_70146[(2)] = null);

(statearr_67598_70146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (13))){
var inst_67516 = (state_67556[(2)]);
var inst_67517 = calc_state();
var inst_67487 = inst_67517;
var state_67556__$1 = (function (){var statearr_67602 = state_67556;
(statearr_67602[(17)] = inst_67516);

(statearr_67602[(10)] = inst_67487);

return statearr_67602;
})();
var statearr_67603_70147 = state_67556__$1;
(statearr_67603_70147[(2)] = null);

(statearr_67603_70147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (22))){
var inst_67548 = (state_67556[(2)]);
var state_67556__$1 = state_67556;
var statearr_67606_70148 = state_67556__$1;
(statearr_67606_70148[(2)] = inst_67548);

(statearr_67606_70148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (6))){
var inst_67501 = (state_67556[(14)]);
var inst_67505 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67501,change);
var state_67556__$1 = state_67556;
var statearr_67609_70152 = state_67556__$1;
(statearr_67609_70152[(2)] = inst_67505);

(statearr_67609_70152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (25))){
var state_67556__$1 = state_67556;
var statearr_67610_70155 = state_67556__$1;
(statearr_67610_70155[(2)] = null);

(statearr_67610_70155[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (17))){
var inst_67501 = (state_67556[(14)]);
var inst_67492 = (state_67556[(18)]);
var inst_67529 = (inst_67492.cljs$core$IFn$_invoke$arity$1 ? inst_67492.cljs$core$IFn$_invoke$arity$1(inst_67501) : inst_67492.call(null,inst_67501));
var inst_67530 = cljs.core.not(inst_67529);
var state_67556__$1 = state_67556;
var statearr_67614_70156 = state_67556__$1;
(statearr_67614_70156[(2)] = inst_67530);

(statearr_67614_70156[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (3))){
var inst_67553 = (state_67556[(2)]);
var state_67556__$1 = state_67556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67556__$1,inst_67553);
} else {
if((state_val_67557 === (12))){
var state_67556__$1 = state_67556;
var statearr_67622_70158 = state_67556__$1;
(statearr_67622_70158[(2)] = null);

(statearr_67622_70158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (2))){
var inst_67490 = (state_67556[(12)]);
var inst_67487 = (state_67556[(10)]);
var inst_67490__$1 = cljs.core.__destructure_map(inst_67487);
var inst_67491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67490__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_67492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67490__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_67493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67490__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_67556__$1 = (function (){var statearr_67624 = state_67556;
(statearr_67624[(12)] = inst_67490__$1);

(statearr_67624[(15)] = inst_67491);

(statearr_67624[(18)] = inst_67492);

return statearr_67624;
})();
return cljs.core.async.ioc_alts_BANG_(state_67556__$1,(4),inst_67493);
} else {
if((state_val_67557 === (23))){
var inst_67538 = (state_67556[(2)]);
var state_67556__$1 = state_67556;
if(cljs.core.truth_(inst_67538)){
var statearr_67627_70166 = state_67556__$1;
(statearr_67627_70166[(1)] = (24));

} else {
var statearr_67628_70167 = state_67556__$1;
(statearr_67628_70167[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (19))){
var inst_67533 = (state_67556[(2)]);
var state_67556__$1 = state_67556;
var statearr_67631_70174 = state_67556__$1;
(statearr_67631_70174[(2)] = inst_67533);

(statearr_67631_70174[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (11))){
var inst_67501 = (state_67556[(14)]);
var inst_67513 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_67501);
var state_67556__$1 = state_67556;
var statearr_67638_70175 = state_67556__$1;
(statearr_67638_70175[(2)] = inst_67513);

(statearr_67638_70175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (9))){
var inst_67501 = (state_67556[(14)]);
var inst_67491 = (state_67556[(15)]);
var inst_67522 = (state_67556[(19)]);
var inst_67522__$1 = (inst_67491.cljs$core$IFn$_invoke$arity$1 ? inst_67491.cljs$core$IFn$_invoke$arity$1(inst_67501) : inst_67491.call(null,inst_67501));
var state_67556__$1 = (function (){var statearr_67643 = state_67556;
(statearr_67643[(19)] = inst_67522__$1);

return statearr_67643;
})();
if(cljs.core.truth_(inst_67522__$1)){
var statearr_67644_70176 = state_67556__$1;
(statearr_67644_70176[(1)] = (14));

} else {
var statearr_67645_70177 = state_67556__$1;
(statearr_67645_70177[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (5))){
var inst_67502 = (state_67556[(13)]);
var state_67556__$1 = state_67556;
var statearr_67646_70178 = state_67556__$1;
(statearr_67646_70178[(2)] = inst_67502);

(statearr_67646_70178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (14))){
var inst_67522 = (state_67556[(19)]);
var state_67556__$1 = state_67556;
var statearr_67653_70179 = state_67556__$1;
(statearr_67653_70179[(2)] = inst_67522);

(statearr_67653_70179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (26))){
var inst_67544 = (state_67556[(2)]);
var state_67556__$1 = state_67556;
var statearr_67657_70180 = state_67556__$1;
(statearr_67657_70180[(2)] = inst_67544);

(statearr_67657_70180[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (16))){
var inst_67535 = (state_67556[(2)]);
var state_67556__$1 = state_67556;
if(cljs.core.truth_(inst_67535)){
var statearr_67661_70181 = state_67556__$1;
(statearr_67661_70181[(1)] = (20));

} else {
var statearr_67662_70182 = state_67556__$1;
(statearr_67662_70182[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (10))){
var inst_67550 = (state_67556[(2)]);
var state_67556__$1 = state_67556;
var statearr_67663_70183 = state_67556__$1;
(statearr_67663_70183[(2)] = inst_67550);

(statearr_67663_70183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (18))){
var inst_67525 = (state_67556[(16)]);
var state_67556__$1 = state_67556;
var statearr_67665_70184 = state_67556__$1;
(statearr_67665_70184[(2)] = inst_67525);

(statearr_67665_70184[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67557 === (8))){
var inst_67500 = (state_67556[(7)]);
var inst_67510 = (inst_67500 == null);
var state_67556__$1 = state_67556;
if(cljs.core.truth_(inst_67510)){
var statearr_67667_70185 = state_67556__$1;
(statearr_67667_70185[(1)] = (11));

} else {
var statearr_67668_70186 = state_67556__$1;
(statearr_67668_70186[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__65222__auto__ = null;
var cljs$core$async$mix_$_state_machine__65222__auto____0 = (function (){
var statearr_67677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67677[(0)] = cljs$core$async$mix_$_state_machine__65222__auto__);

(statearr_67677[(1)] = (1));

return statearr_67677;
});
var cljs$core$async$mix_$_state_machine__65222__auto____1 = (function (state_67556){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_67556);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e67678){if((e67678 instanceof Object)){
var ex__65226__auto__ = e67678;
var statearr_67679_70187 = state_67556;
(statearr_67679_70187[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70188 = state_67556;
state_67556 = G__70188;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__65222__auto__ = function(state_67556){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__65222__auto____1.call(this,state_67556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__65222__auto____0;
cljs$core$async$mix_$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__65222__auto____1;
return cljs$core$async$mix_$_state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_67680 = f__65556__auto__();
(statearr_67680[(6)] = c__65555__auto___70119);

return statearr_67680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_70195 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_70195(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_70197 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_70197(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_70200 = (function() {
var G__70201 = null;
var G__70201__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__70201__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__70201 = function(p,v){
switch(arguments.length){
case 1:
return G__70201__1.call(this,p);
case 2:
return G__70201__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__70201.cljs$core$IFn$_invoke$arity$1 = G__70201__1;
G__70201.cljs$core$IFn$_invoke$arity$2 = G__70201__2;
return G__70201;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__67722 = arguments.length;
switch (G__67722) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_70200(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_70200(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__67730 = arguments.length;
switch (G__67730) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__67727_SHARP_){
if(cljs.core.truth_((p1__67727_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__67727_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__67727_SHARP_.call(null,topic)))){
return p1__67727_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__67727_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67741 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta67742){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta67742 = meta67742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67743,meta67742__$1){
var self__ = this;
var _67743__$1 = this;
return (new cljs.core.async.t_cljs$core$async67741(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta67742__$1));
}));

(cljs.core.async.t_cljs$core$async67741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67743){
var self__ = this;
var _67743__$1 = this;
return self__.meta67742;
}));

(cljs.core.async.t_cljs$core$async67741.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async67741.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67741.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async67741.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async67741.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async67741.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async67741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta67742","meta67742",594685558,null)], null);
}));

(cljs.core.async.t_cljs$core$async67741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67741");

(cljs.core.async.t_cljs$core$async67741.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async67741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67741.
 */
cljs.core.async.__GT_t_cljs$core$async67741 = (function cljs$core$async$__GT_t_cljs$core$async67741(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta67742){
return (new cljs.core.async.t_cljs$core$async67741(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta67742));
});

}

return (new cljs.core.async.t_cljs$core$async67741(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__65555__auto___70234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_67854){
var state_val_67855 = (state_67854[(1)]);
if((state_val_67855 === (7))){
var inst_67850 = (state_67854[(2)]);
var state_67854__$1 = state_67854;
var statearr_67856_70237 = state_67854__$1;
(statearr_67856_70237[(2)] = inst_67850);

(statearr_67856_70237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (20))){
var state_67854__$1 = state_67854;
var statearr_67858_70238 = state_67854__$1;
(statearr_67858_70238[(2)] = null);

(statearr_67858_70238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (1))){
var state_67854__$1 = state_67854;
var statearr_67859_70239 = state_67854__$1;
(statearr_67859_70239[(2)] = null);

(statearr_67859_70239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (24))){
var inst_67832 = (state_67854[(7)]);
var inst_67842 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_67832);
var state_67854__$1 = state_67854;
var statearr_67861_70240 = state_67854__$1;
(statearr_67861_70240[(2)] = inst_67842);

(statearr_67861_70240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (4))){
var inst_67777 = (state_67854[(8)]);
var inst_67777__$1 = (state_67854[(2)]);
var inst_67778 = (inst_67777__$1 == null);
var state_67854__$1 = (function (){var statearr_67862 = state_67854;
(statearr_67862[(8)] = inst_67777__$1);

return statearr_67862;
})();
if(cljs.core.truth_(inst_67778)){
var statearr_67864_70241 = state_67854__$1;
(statearr_67864_70241[(1)] = (5));

} else {
var statearr_67865_70242 = state_67854__$1;
(statearr_67865_70242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (15))){
var inst_67824 = (state_67854[(2)]);
var state_67854__$1 = state_67854;
var statearr_67866_70243 = state_67854__$1;
(statearr_67866_70243[(2)] = inst_67824);

(statearr_67866_70243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (21))){
var inst_67847 = (state_67854[(2)]);
var state_67854__$1 = (function (){var statearr_67867 = state_67854;
(statearr_67867[(9)] = inst_67847);

return statearr_67867;
})();
var statearr_67869_70244 = state_67854__$1;
(statearr_67869_70244[(2)] = null);

(statearr_67869_70244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (13))){
var inst_67806 = (state_67854[(10)]);
var inst_67808 = cljs.core.chunked_seq_QMARK_(inst_67806);
var state_67854__$1 = state_67854;
if(inst_67808){
var statearr_67872_70245 = state_67854__$1;
(statearr_67872_70245[(1)] = (16));

} else {
var statearr_67874_70246 = state_67854__$1;
(statearr_67874_70246[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (22))){
var inst_67838 = (state_67854[(2)]);
var state_67854__$1 = state_67854;
if(cljs.core.truth_(inst_67838)){
var statearr_67875_70249 = state_67854__$1;
(statearr_67875_70249[(1)] = (23));

} else {
var statearr_67876_70250 = state_67854__$1;
(statearr_67876_70250[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (6))){
var inst_67777 = (state_67854[(8)]);
var inst_67834 = (state_67854[(11)]);
var inst_67832 = (state_67854[(7)]);
var inst_67832__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_67777) : topic_fn.call(null,inst_67777));
var inst_67833 = cljs.core.deref(mults);
var inst_67834__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67833,inst_67832__$1);
var state_67854__$1 = (function (){var statearr_67877 = state_67854;
(statearr_67877[(11)] = inst_67834__$1);

(statearr_67877[(7)] = inst_67832__$1);

return statearr_67877;
})();
if(cljs.core.truth_(inst_67834__$1)){
var statearr_67879_70251 = state_67854__$1;
(statearr_67879_70251[(1)] = (19));

} else {
var statearr_67880_70252 = state_67854__$1;
(statearr_67880_70252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (25))){
var inst_67844 = (state_67854[(2)]);
var state_67854__$1 = state_67854;
var statearr_67882_70254 = state_67854__$1;
(statearr_67882_70254[(2)] = inst_67844);

(statearr_67882_70254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (17))){
var inst_67806 = (state_67854[(10)]);
var inst_67815 = cljs.core.first(inst_67806);
var inst_67816 = cljs.core.async.muxch_STAR_(inst_67815);
var inst_67817 = cljs.core.async.close_BANG_(inst_67816);
var inst_67818 = cljs.core.next(inst_67806);
var inst_67787 = inst_67818;
var inst_67788 = null;
var inst_67789 = (0);
var inst_67790 = (0);
var state_67854__$1 = (function (){var statearr_67883 = state_67854;
(statearr_67883[(12)] = inst_67789);

(statearr_67883[(13)] = inst_67787);

(statearr_67883[(14)] = inst_67817);

(statearr_67883[(15)] = inst_67788);

(statearr_67883[(16)] = inst_67790);

return statearr_67883;
})();
var statearr_67884_70258 = state_67854__$1;
(statearr_67884_70258[(2)] = null);

(statearr_67884_70258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (3))){
var inst_67852 = (state_67854[(2)]);
var state_67854__$1 = state_67854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67854__$1,inst_67852);
} else {
if((state_val_67855 === (12))){
var inst_67826 = (state_67854[(2)]);
var state_67854__$1 = state_67854;
var statearr_67885_70261 = state_67854__$1;
(statearr_67885_70261[(2)] = inst_67826);

(statearr_67885_70261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (2))){
var state_67854__$1 = state_67854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67854__$1,(4),ch);
} else {
if((state_val_67855 === (23))){
var state_67854__$1 = state_67854;
var statearr_67886_70262 = state_67854__$1;
(statearr_67886_70262[(2)] = null);

(statearr_67886_70262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (19))){
var inst_67777 = (state_67854[(8)]);
var inst_67834 = (state_67854[(11)]);
var inst_67836 = cljs.core.async.muxch_STAR_(inst_67834);
var state_67854__$1 = state_67854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67854__$1,(22),inst_67836,inst_67777);
} else {
if((state_val_67855 === (11))){
var inst_67787 = (state_67854[(13)]);
var inst_67806 = (state_67854[(10)]);
var inst_67806__$1 = cljs.core.seq(inst_67787);
var state_67854__$1 = (function (){var statearr_67893 = state_67854;
(statearr_67893[(10)] = inst_67806__$1);

return statearr_67893;
})();
if(inst_67806__$1){
var statearr_67894_70264 = state_67854__$1;
(statearr_67894_70264[(1)] = (13));

} else {
var statearr_67895_70265 = state_67854__$1;
(statearr_67895_70265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (9))){
var inst_67828 = (state_67854[(2)]);
var state_67854__$1 = state_67854;
var statearr_67896_70266 = state_67854__$1;
(statearr_67896_70266[(2)] = inst_67828);

(statearr_67896_70266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (5))){
var inst_67784 = cljs.core.deref(mults);
var inst_67785 = cljs.core.vals(inst_67784);
var inst_67786 = cljs.core.seq(inst_67785);
var inst_67787 = inst_67786;
var inst_67788 = null;
var inst_67789 = (0);
var inst_67790 = (0);
var state_67854__$1 = (function (){var statearr_67928 = state_67854;
(statearr_67928[(12)] = inst_67789);

(statearr_67928[(13)] = inst_67787);

(statearr_67928[(15)] = inst_67788);

(statearr_67928[(16)] = inst_67790);

return statearr_67928;
})();
var statearr_67931_70268 = state_67854__$1;
(statearr_67931_70268[(2)] = null);

(statearr_67931_70268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (14))){
var state_67854__$1 = state_67854;
var statearr_67938_70269 = state_67854__$1;
(statearr_67938_70269[(2)] = null);

(statearr_67938_70269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (16))){
var inst_67806 = (state_67854[(10)]);
var inst_67810 = cljs.core.chunk_first(inst_67806);
var inst_67811 = cljs.core.chunk_rest(inst_67806);
var inst_67812 = cljs.core.count(inst_67810);
var inst_67787 = inst_67811;
var inst_67788 = inst_67810;
var inst_67789 = inst_67812;
var inst_67790 = (0);
var state_67854__$1 = (function (){var statearr_67944 = state_67854;
(statearr_67944[(12)] = inst_67789);

(statearr_67944[(13)] = inst_67787);

(statearr_67944[(15)] = inst_67788);

(statearr_67944[(16)] = inst_67790);

return statearr_67944;
})();
var statearr_67946_70270 = state_67854__$1;
(statearr_67946_70270[(2)] = null);

(statearr_67946_70270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (10))){
var inst_67789 = (state_67854[(12)]);
var inst_67787 = (state_67854[(13)]);
var inst_67788 = (state_67854[(15)]);
var inst_67790 = (state_67854[(16)]);
var inst_67798 = cljs.core._nth(inst_67788,inst_67790);
var inst_67801 = cljs.core.async.muxch_STAR_(inst_67798);
var inst_67802 = cljs.core.async.close_BANG_(inst_67801);
var inst_67803 = (inst_67790 + (1));
var tmp67933 = inst_67789;
var tmp67934 = inst_67787;
var tmp67935 = inst_67788;
var inst_67787__$1 = tmp67934;
var inst_67788__$1 = tmp67935;
var inst_67789__$1 = tmp67933;
var inst_67790__$1 = inst_67803;
var state_67854__$1 = (function (){var statearr_67961 = state_67854;
(statearr_67961[(12)] = inst_67789__$1);

(statearr_67961[(13)] = inst_67787__$1);

(statearr_67961[(15)] = inst_67788__$1);

(statearr_67961[(16)] = inst_67790__$1);

(statearr_67961[(17)] = inst_67802);

return statearr_67961;
})();
var statearr_67964_70272 = state_67854__$1;
(statearr_67964_70272[(2)] = null);

(statearr_67964_70272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (18))){
var inst_67821 = (state_67854[(2)]);
var state_67854__$1 = state_67854;
var statearr_67966_70273 = state_67854__$1;
(statearr_67966_70273[(2)] = inst_67821);

(statearr_67966_70273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67855 === (8))){
var inst_67789 = (state_67854[(12)]);
var inst_67790 = (state_67854[(16)]);
var inst_67793 = (inst_67790 < inst_67789);
var inst_67794 = inst_67793;
var state_67854__$1 = state_67854;
if(cljs.core.truth_(inst_67794)){
var statearr_67969_70278 = state_67854__$1;
(statearr_67969_70278[(1)] = (10));

} else {
var statearr_67970_70279 = state_67854__$1;
(statearr_67970_70279[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_67977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67977[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_67977[(1)] = (1));

return statearr_67977;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_67854){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_67854);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e67981){if((e67981 instanceof Object)){
var ex__65226__auto__ = e67981;
var statearr_67983_70287 = state_67854;
(statearr_67983_70287[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67981;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70288 = state_67854;
state_67854 = G__70288;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_67854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_67854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_67987 = f__65556__auto__();
(statearr_67987[(6)] = c__65555__auto___70234);

return statearr_67987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__67996 = arguments.length;
switch (G__67996) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__68015 = arguments.length;
switch (G__68015) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__68035 = arguments.length;
switch (G__68035) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__65555__auto___70307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_68115){
var state_val_68116 = (state_68115[(1)]);
if((state_val_68116 === (7))){
var state_68115__$1 = state_68115;
var statearr_68133_70309 = state_68115__$1;
(statearr_68133_70309[(2)] = null);

(statearr_68133_70309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (1))){
var state_68115__$1 = state_68115;
var statearr_68139_70310 = state_68115__$1;
(statearr_68139_70310[(2)] = null);

(statearr_68139_70310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (4))){
var inst_68062 = (state_68115[(7)]);
var inst_68064 = (inst_68062 < cnt);
var state_68115__$1 = state_68115;
if(cljs.core.truth_(inst_68064)){
var statearr_68143_70311 = state_68115__$1;
(statearr_68143_70311[(1)] = (6));

} else {
var statearr_68144_70312 = state_68115__$1;
(statearr_68144_70312[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (15))){
var inst_68109 = (state_68115[(2)]);
var state_68115__$1 = state_68115;
var statearr_68147_70320 = state_68115__$1;
(statearr_68147_70320[(2)] = inst_68109);

(statearr_68147_70320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (13))){
var inst_68101 = cljs.core.async.close_BANG_(out);
var state_68115__$1 = state_68115;
var statearr_68148_70321 = state_68115__$1;
(statearr_68148_70321[(2)] = inst_68101);

(statearr_68148_70321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (6))){
var state_68115__$1 = state_68115;
var statearr_68155_70322 = state_68115__$1;
(statearr_68155_70322[(2)] = null);

(statearr_68155_70322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (3))){
var inst_68111 = (state_68115[(2)]);
var state_68115__$1 = state_68115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68115__$1,inst_68111);
} else {
if((state_val_68116 === (12))){
var inst_68097 = (state_68115[(8)]);
var inst_68097__$1 = (state_68115[(2)]);
var inst_68098 = cljs.core.some(cljs.core.nil_QMARK_,inst_68097__$1);
var state_68115__$1 = (function (){var statearr_68170 = state_68115;
(statearr_68170[(8)] = inst_68097__$1);

return statearr_68170;
})();
if(cljs.core.truth_(inst_68098)){
var statearr_68171_70328 = state_68115__$1;
(statearr_68171_70328[(1)] = (13));

} else {
var statearr_68172_70329 = state_68115__$1;
(statearr_68172_70329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (2))){
var inst_68058 = cljs.core.reset_BANG_(dctr,cnt);
var inst_68062 = (0);
var state_68115__$1 = (function (){var statearr_68176 = state_68115;
(statearr_68176[(7)] = inst_68062);

(statearr_68176[(9)] = inst_68058);

return statearr_68176;
})();
var statearr_68178_70330 = state_68115__$1;
(statearr_68178_70330[(2)] = null);

(statearr_68178_70330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (11))){
var inst_68062 = (state_68115[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68115,(10),Object,null,(9));
var inst_68084 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_68062) : chs__$1.call(null,inst_68062));
var inst_68085 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_68062) : done.call(null,inst_68062));
var inst_68086 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_68084,inst_68085);
var state_68115__$1 = state_68115;
var statearr_68183_70333 = state_68115__$1;
(statearr_68183_70333[(2)] = inst_68086);


cljs.core.async.impl.ioc_helpers.process_exception(state_68115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (9))){
var inst_68062 = (state_68115[(7)]);
var inst_68088 = (state_68115[(2)]);
var inst_68089 = (inst_68062 + (1));
var inst_68062__$1 = inst_68089;
var state_68115__$1 = (function (){var statearr_68188 = state_68115;
(statearr_68188[(7)] = inst_68062__$1);

(statearr_68188[(10)] = inst_68088);

return statearr_68188;
})();
var statearr_68190_70336 = state_68115__$1;
(statearr_68190_70336[(2)] = null);

(statearr_68190_70336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (5))){
var inst_68095 = (state_68115[(2)]);
var state_68115__$1 = (function (){var statearr_68191 = state_68115;
(statearr_68191[(11)] = inst_68095);

return statearr_68191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68115__$1,(12),dchan);
} else {
if((state_val_68116 === (14))){
var inst_68097 = (state_68115[(8)]);
var inst_68104 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_68097);
var state_68115__$1 = state_68115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68115__$1,(16),out,inst_68104);
} else {
if((state_val_68116 === (16))){
var inst_68106 = (state_68115[(2)]);
var state_68115__$1 = (function (){var statearr_68196 = state_68115;
(statearr_68196[(12)] = inst_68106);

return statearr_68196;
})();
var statearr_68197_70342 = state_68115__$1;
(statearr_68197_70342[(2)] = null);

(statearr_68197_70342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (10))){
var inst_68072 = (state_68115[(2)]);
var inst_68077 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_68115__$1 = (function (){var statearr_68200 = state_68115;
(statearr_68200[(13)] = inst_68072);

return statearr_68200;
})();
var statearr_68206_70345 = state_68115__$1;
(statearr_68206_70345[(2)] = inst_68077);


cljs.core.async.impl.ioc_helpers.process_exception(state_68115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68116 === (8))){
var inst_68093 = (state_68115[(2)]);
var state_68115__$1 = state_68115;
var statearr_68211_70346 = state_68115__$1;
(statearr_68211_70346[(2)] = inst_68093);

(statearr_68211_70346[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_68220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68220[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_68220[(1)] = (1));

return statearr_68220;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_68115){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_68115);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e68222){if((e68222 instanceof Object)){
var ex__65226__auto__ = e68222;
var statearr_68223_70350 = state_68115;
(statearr_68223_70350[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70352 = state_68115;
state_68115 = G__70352;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_68115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_68115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_68233 = f__65556__auto__();
(statearr_68233[(6)] = c__65555__auto___70307);

return statearr_68233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__68249 = arguments.length;
switch (G__68249) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65555__auto___70360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_68308){
var state_val_68309 = (state_68308[(1)]);
if((state_val_68309 === (7))){
var inst_68275 = (state_68308[(7)]);
var inst_68282 = (state_68308[(8)]);
var inst_68275__$1 = (state_68308[(2)]);
var inst_68282__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68275__$1,(0),null);
var inst_68283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68275__$1,(1),null);
var inst_68284 = (inst_68282__$1 == null);
var state_68308__$1 = (function (){var statearr_68327 = state_68308;
(statearr_68327[(7)] = inst_68275__$1);

(statearr_68327[(8)] = inst_68282__$1);

(statearr_68327[(9)] = inst_68283);

return statearr_68327;
})();
if(cljs.core.truth_(inst_68284)){
var statearr_68328_70362 = state_68308__$1;
(statearr_68328_70362[(1)] = (8));

} else {
var statearr_68335_70363 = state_68308__$1;
(statearr_68335_70363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68309 === (1))){
var inst_68262 = cljs.core.vec(chs);
var inst_68263 = inst_68262;
var state_68308__$1 = (function (){var statearr_68340 = state_68308;
(statearr_68340[(10)] = inst_68263);

return statearr_68340;
})();
var statearr_68342_70364 = state_68308__$1;
(statearr_68342_70364[(2)] = null);

(statearr_68342_70364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68309 === (4))){
var inst_68263 = (state_68308[(10)]);
var state_68308__$1 = state_68308;
return cljs.core.async.ioc_alts_BANG_(state_68308__$1,(7),inst_68263);
} else {
if((state_val_68309 === (6))){
var inst_68302 = (state_68308[(2)]);
var state_68308__$1 = state_68308;
var statearr_68346_70365 = state_68308__$1;
(statearr_68346_70365[(2)] = inst_68302);

(statearr_68346_70365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68309 === (3))){
var inst_68304 = (state_68308[(2)]);
var state_68308__$1 = state_68308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68308__$1,inst_68304);
} else {
if((state_val_68309 === (2))){
var inst_68263 = (state_68308[(10)]);
var inst_68265 = cljs.core.count(inst_68263);
var inst_68266 = (inst_68265 > (0));
var state_68308__$1 = state_68308;
if(cljs.core.truth_(inst_68266)){
var statearr_68356_70366 = state_68308__$1;
(statearr_68356_70366[(1)] = (4));

} else {
var statearr_68357_70368 = state_68308__$1;
(statearr_68357_70368[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68309 === (11))){
var inst_68263 = (state_68308[(10)]);
var inst_68295 = (state_68308[(2)]);
var tmp68350 = inst_68263;
var inst_68263__$1 = tmp68350;
var state_68308__$1 = (function (){var statearr_68368 = state_68308;
(statearr_68368[(10)] = inst_68263__$1);

(statearr_68368[(11)] = inst_68295);

return statearr_68368;
})();
var statearr_68369_70371 = state_68308__$1;
(statearr_68369_70371[(2)] = null);

(statearr_68369_70371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68309 === (9))){
var inst_68282 = (state_68308[(8)]);
var state_68308__$1 = state_68308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68308__$1,(11),out,inst_68282);
} else {
if((state_val_68309 === (5))){
var inst_68300 = cljs.core.async.close_BANG_(out);
var state_68308__$1 = state_68308;
var statearr_68380_70373 = state_68308__$1;
(statearr_68380_70373[(2)] = inst_68300);

(statearr_68380_70373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68309 === (10))){
var inst_68298 = (state_68308[(2)]);
var state_68308__$1 = state_68308;
var statearr_68382_70375 = state_68308__$1;
(statearr_68382_70375[(2)] = inst_68298);

(statearr_68382_70375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68309 === (8))){
var inst_68275 = (state_68308[(7)]);
var inst_68282 = (state_68308[(8)]);
var inst_68263 = (state_68308[(10)]);
var inst_68283 = (state_68308[(9)]);
var inst_68288 = (function (){var cs = inst_68263;
var vec__68271 = inst_68275;
var v = inst_68282;
var c = inst_68283;
return (function (p1__68238_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__68238_SHARP_);
});
})();
var inst_68290 = cljs.core.filterv(inst_68288,inst_68263);
var inst_68263__$1 = inst_68290;
var state_68308__$1 = (function (){var statearr_68386 = state_68308;
(statearr_68386[(10)] = inst_68263__$1);

return statearr_68386;
})();
var statearr_68389_70385 = state_68308__$1;
(statearr_68389_70385[(2)] = null);

(statearr_68389_70385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_68394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68394[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_68394[(1)] = (1));

return statearr_68394;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_68308){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_68308);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e68395){if((e68395 instanceof Object)){
var ex__65226__auto__ = e68395;
var statearr_68397_70386 = state_68308;
(statearr_68397_70386[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70387 = state_68308;
state_68308 = G__70387;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_68308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_68308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_68405 = f__65556__auto__();
(statearr_68405[(6)] = c__65555__auto___70360);

return statearr_68405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__68417 = arguments.length;
switch (G__68417) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65555__auto___70395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_68452){
var state_val_68453 = (state_68452[(1)]);
if((state_val_68453 === (7))){
var inst_68434 = (state_68452[(7)]);
var inst_68434__$1 = (state_68452[(2)]);
var inst_68435 = (inst_68434__$1 == null);
var inst_68436 = cljs.core.not(inst_68435);
var state_68452__$1 = (function (){var statearr_68461 = state_68452;
(statearr_68461[(7)] = inst_68434__$1);

return statearr_68461;
})();
if(inst_68436){
var statearr_68464_70396 = state_68452__$1;
(statearr_68464_70396[(1)] = (8));

} else {
var statearr_68470_70397 = state_68452__$1;
(statearr_68470_70397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68453 === (1))){
var inst_68428 = (0);
var state_68452__$1 = (function (){var statearr_68474 = state_68452;
(statearr_68474[(8)] = inst_68428);

return statearr_68474;
})();
var statearr_68475_70398 = state_68452__$1;
(statearr_68475_70398[(2)] = null);

(statearr_68475_70398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68453 === (4))){
var state_68452__$1 = state_68452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68452__$1,(7),ch);
} else {
if((state_val_68453 === (6))){
var inst_68447 = (state_68452[(2)]);
var state_68452__$1 = state_68452;
var statearr_68482_70405 = state_68452__$1;
(statearr_68482_70405[(2)] = inst_68447);

(statearr_68482_70405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68453 === (3))){
var inst_68449 = (state_68452[(2)]);
var inst_68450 = cljs.core.async.close_BANG_(out);
var state_68452__$1 = (function (){var statearr_68488 = state_68452;
(statearr_68488[(9)] = inst_68449);

return statearr_68488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68452__$1,inst_68450);
} else {
if((state_val_68453 === (2))){
var inst_68428 = (state_68452[(8)]);
var inst_68430 = (inst_68428 < n);
var state_68452__$1 = state_68452;
if(cljs.core.truth_(inst_68430)){
var statearr_68490_70406 = state_68452__$1;
(statearr_68490_70406[(1)] = (4));

} else {
var statearr_68493_70407 = state_68452__$1;
(statearr_68493_70407[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68453 === (11))){
var inst_68428 = (state_68452[(8)]);
var inst_68439 = (state_68452[(2)]);
var inst_68440 = (inst_68428 + (1));
var inst_68428__$1 = inst_68440;
var state_68452__$1 = (function (){var statearr_68495 = state_68452;
(statearr_68495[(8)] = inst_68428__$1);

(statearr_68495[(10)] = inst_68439);

return statearr_68495;
})();
var statearr_68496_70410 = state_68452__$1;
(statearr_68496_70410[(2)] = null);

(statearr_68496_70410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68453 === (9))){
var state_68452__$1 = state_68452;
var statearr_68498_70411 = state_68452__$1;
(statearr_68498_70411[(2)] = null);

(statearr_68498_70411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68453 === (5))){
var state_68452__$1 = state_68452;
var statearr_68503_70412 = state_68452__$1;
(statearr_68503_70412[(2)] = null);

(statearr_68503_70412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68453 === (10))){
var inst_68444 = (state_68452[(2)]);
var state_68452__$1 = state_68452;
var statearr_68506_70414 = state_68452__$1;
(statearr_68506_70414[(2)] = inst_68444);

(statearr_68506_70414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68453 === (8))){
var inst_68434 = (state_68452[(7)]);
var state_68452__$1 = state_68452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68452__$1,(11),out,inst_68434);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_68513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68513[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_68513[(1)] = (1));

return statearr_68513;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_68452){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_68452);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e68515){if((e68515 instanceof Object)){
var ex__65226__auto__ = e68515;
var statearr_68520_70418 = state_68452;
(statearr_68520_70418[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70421 = state_68452;
state_68452 = G__70421;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_68452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_68452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_68530 = f__65556__auto__();
(statearr_68530[(6)] = c__65555__auto___70395);

return statearr_68530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async68537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68537 = (function (f,ch,meta68538){
this.f = f;
this.ch = ch;
this.meta68538 = meta68538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68539,meta68538__$1){
var self__ = this;
var _68539__$1 = this;
return (new cljs.core.async.t_cljs$core$async68537(self__.f,self__.ch,meta68538__$1));
}));

(cljs.core.async.t_cljs$core$async68537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68539){
var self__ = this;
var _68539__$1 = this;
return self__.meta68538;
}));

(cljs.core.async.t_cljs$core$async68537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async68537.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async68537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async68556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68556 = (function (f,ch,meta68538,_,fn1,meta68557){
this.f = f;
this.ch = ch;
this.meta68538 = meta68538;
this._ = _;
this.fn1 = fn1;
this.meta68557 = meta68557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68558,meta68557__$1){
var self__ = this;
var _68558__$1 = this;
return (new cljs.core.async.t_cljs$core$async68556(self__.f,self__.ch,self__.meta68538,self__._,self__.fn1,meta68557__$1));
}));

(cljs.core.async.t_cljs$core$async68556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68558){
var self__ = this;
var _68558__$1 = this;
return self__.meta68557;
}));

(cljs.core.async.t_cljs$core$async68556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async68556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async68556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__68532_SHARP_){
var G__68575 = (((p1__68532_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__68532_SHARP_) : self__.f.call(null,p1__68532_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__68575) : f1.call(null,G__68575));
});
}));

(cljs.core.async.t_cljs$core$async68556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta68538","meta68538",103383450,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async68537","cljs.core.async/t_cljs$core$async68537",-950354099,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta68557","meta68557",-922449202,null)], null);
}));

(cljs.core.async.t_cljs$core$async68556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68556");

(cljs.core.async.t_cljs$core$async68556.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async68556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68556.
 */
cljs.core.async.__GT_t_cljs$core$async68556 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async68556(f__$1,ch__$1,meta68538__$1,___$2,fn1__$1,meta68557){
return (new cljs.core.async.t_cljs$core$async68556(f__$1,ch__$1,meta68538__$1,___$2,fn1__$1,meta68557));
});

}

return (new cljs.core.async.t_cljs$core$async68556(self__.f,self__.ch,self__.meta68538,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__68577 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__68577) : self__.f.call(null,G__68577));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async68537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async68537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta68538","meta68538",103383450,null)], null);
}));

(cljs.core.async.t_cljs$core$async68537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68537");

(cljs.core.async.t_cljs$core$async68537.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async68537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68537.
 */
cljs.core.async.__GT_t_cljs$core$async68537 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async68537(f__$1,ch__$1,meta68538){
return (new cljs.core.async.t_cljs$core$async68537(f__$1,ch__$1,meta68538));
});

}

return (new cljs.core.async.t_cljs$core$async68537(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async68593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68593 = (function (f,ch,meta68594){
this.f = f;
this.ch = ch;
this.meta68594 = meta68594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68595,meta68594__$1){
var self__ = this;
var _68595__$1 = this;
return (new cljs.core.async.t_cljs$core$async68593(self__.f,self__.ch,meta68594__$1));
}));

(cljs.core.async.t_cljs$core$async68593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68595){
var self__ = this;
var _68595__$1 = this;
return self__.meta68594;
}));

(cljs.core.async.t_cljs$core$async68593.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68593.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async68593.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68593.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async68593.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68593.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async68593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta68594","meta68594",1477139492,null)], null);
}));

(cljs.core.async.t_cljs$core$async68593.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68593");

(cljs.core.async.t_cljs$core$async68593.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async68593");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68593.
 */
cljs.core.async.__GT_t_cljs$core$async68593 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async68593(f__$1,ch__$1,meta68594){
return (new cljs.core.async.t_cljs$core$async68593(f__$1,ch__$1,meta68594));
});

}

return (new cljs.core.async.t_cljs$core$async68593(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async68617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68617 = (function (p,ch,meta68618){
this.p = p;
this.ch = ch;
this.meta68618 = meta68618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68619,meta68618__$1){
var self__ = this;
var _68619__$1 = this;
return (new cljs.core.async.t_cljs$core$async68617(self__.p,self__.ch,meta68618__$1));
}));

(cljs.core.async.t_cljs$core$async68617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68619){
var self__ = this;
var _68619__$1 = this;
return self__.meta68618;
}));

(cljs.core.async.t_cljs$core$async68617.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async68617.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async68617.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async68617.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async68617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta68618","meta68618",551397645,null)], null);
}));

(cljs.core.async.t_cljs$core$async68617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68617");

(cljs.core.async.t_cljs$core$async68617.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async68617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68617.
 */
cljs.core.async.__GT_t_cljs$core$async68617 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async68617(p__$1,ch__$1,meta68618){
return (new cljs.core.async.t_cljs$core$async68617(p__$1,ch__$1,meta68618));
});

}

return (new cljs.core.async.t_cljs$core$async68617(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__68669 = arguments.length;
switch (G__68669) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65555__auto___70475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_68744){
var state_val_68745 = (state_68744[(1)]);
if((state_val_68745 === (7))){
var inst_68739 = (state_68744[(2)]);
var state_68744__$1 = state_68744;
var statearr_68754_70477 = state_68744__$1;
(statearr_68754_70477[(2)] = inst_68739);

(statearr_68754_70477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68745 === (1))){
var state_68744__$1 = state_68744;
var statearr_68760_70481 = state_68744__$1;
(statearr_68760_70481[(2)] = null);

(statearr_68760_70481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68745 === (4))){
var inst_68719 = (state_68744[(7)]);
var inst_68719__$1 = (state_68744[(2)]);
var inst_68724 = (inst_68719__$1 == null);
var state_68744__$1 = (function (){var statearr_68768 = state_68744;
(statearr_68768[(7)] = inst_68719__$1);

return statearr_68768;
})();
if(cljs.core.truth_(inst_68724)){
var statearr_68769_70484 = state_68744__$1;
(statearr_68769_70484[(1)] = (5));

} else {
var statearr_68772_70489 = state_68744__$1;
(statearr_68772_70489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68745 === (6))){
var inst_68719 = (state_68744[(7)]);
var inst_68728 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_68719) : p.call(null,inst_68719));
var state_68744__$1 = state_68744;
if(cljs.core.truth_(inst_68728)){
var statearr_68778_70491 = state_68744__$1;
(statearr_68778_70491[(1)] = (8));

} else {
var statearr_68779_70492 = state_68744__$1;
(statearr_68779_70492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68745 === (3))){
var inst_68742 = (state_68744[(2)]);
var state_68744__$1 = state_68744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68744__$1,inst_68742);
} else {
if((state_val_68745 === (2))){
var state_68744__$1 = state_68744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68744__$1,(4),ch);
} else {
if((state_val_68745 === (11))){
var inst_68731 = (state_68744[(2)]);
var state_68744__$1 = state_68744;
var statearr_68791_70493 = state_68744__$1;
(statearr_68791_70493[(2)] = inst_68731);

(statearr_68791_70493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68745 === (9))){
var state_68744__$1 = state_68744;
var statearr_68797_70494 = state_68744__$1;
(statearr_68797_70494[(2)] = null);

(statearr_68797_70494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68745 === (5))){
var inst_68726 = cljs.core.async.close_BANG_(out);
var state_68744__$1 = state_68744;
var statearr_68803_70495 = state_68744__$1;
(statearr_68803_70495[(2)] = inst_68726);

(statearr_68803_70495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68745 === (10))){
var inst_68734 = (state_68744[(2)]);
var state_68744__$1 = (function (){var statearr_68810 = state_68744;
(statearr_68810[(8)] = inst_68734);

return statearr_68810;
})();
var statearr_68812_70499 = state_68744__$1;
(statearr_68812_70499[(2)] = null);

(statearr_68812_70499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68745 === (8))){
var inst_68719 = (state_68744[(7)]);
var state_68744__$1 = state_68744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68744__$1,(11),out,inst_68719);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_68823 = [null,null,null,null,null,null,null,null,null];
(statearr_68823[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_68823[(1)] = (1));

return statearr_68823;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_68744){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_68744);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e68828){if((e68828 instanceof Object)){
var ex__65226__auto__ = e68828;
var statearr_68830_70508 = state_68744;
(statearr_68830_70508[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70509 = state_68744;
state_68744 = G__70509;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_68744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_68744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_68841 = f__65556__auto__();
(statearr_68841[(6)] = c__65555__auto___70475);

return statearr_68841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__68854 = arguments.length;
switch (G__68854) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__65555__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_68951){
var state_val_68952 = (state_68951[(1)]);
if((state_val_68952 === (7))){
var inst_68945 = (state_68951[(2)]);
var state_68951__$1 = state_68951;
var statearr_68954_70518 = state_68951__$1;
(statearr_68954_70518[(2)] = inst_68945);

(statearr_68954_70518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (20))){
var inst_68912 = (state_68951[(7)]);
var inst_68925 = (state_68951[(2)]);
var inst_68926 = cljs.core.next(inst_68912);
var inst_68888 = inst_68926;
var inst_68889 = null;
var inst_68891 = (0);
var inst_68892 = (0);
var state_68951__$1 = (function (){var statearr_68956 = state_68951;
(statearr_68956[(8)] = inst_68925);

(statearr_68956[(9)] = inst_68892);

(statearr_68956[(10)] = inst_68888);

(statearr_68956[(11)] = inst_68891);

(statearr_68956[(12)] = inst_68889);

return statearr_68956;
})();
var statearr_68960_70521 = state_68951__$1;
(statearr_68960_70521[(2)] = null);

(statearr_68960_70521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (1))){
var state_68951__$1 = state_68951;
var statearr_68968_70522 = state_68951__$1;
(statearr_68968_70522[(2)] = null);

(statearr_68968_70522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (4))){
var inst_68876 = (state_68951[(13)]);
var inst_68876__$1 = (state_68951[(2)]);
var inst_68877 = (inst_68876__$1 == null);
var state_68951__$1 = (function (){var statearr_68971 = state_68951;
(statearr_68971[(13)] = inst_68876__$1);

return statearr_68971;
})();
if(cljs.core.truth_(inst_68877)){
var statearr_68973_70523 = state_68951__$1;
(statearr_68973_70523[(1)] = (5));

} else {
var statearr_68976_70524 = state_68951__$1;
(statearr_68976_70524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (15))){
var state_68951__$1 = state_68951;
var statearr_68982_70525 = state_68951__$1;
(statearr_68982_70525[(2)] = null);

(statearr_68982_70525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (21))){
var state_68951__$1 = state_68951;
var statearr_68986_70527 = state_68951__$1;
(statearr_68986_70527[(2)] = null);

(statearr_68986_70527[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (13))){
var inst_68892 = (state_68951[(9)]);
var inst_68888 = (state_68951[(10)]);
var inst_68891 = (state_68951[(11)]);
var inst_68889 = (state_68951[(12)]);
var inst_68904 = (state_68951[(2)]);
var inst_68907 = (inst_68892 + (1));
var tmp68978 = inst_68888;
var tmp68979 = inst_68891;
var tmp68980 = inst_68889;
var inst_68888__$1 = tmp68978;
var inst_68889__$1 = tmp68980;
var inst_68891__$1 = tmp68979;
var inst_68892__$1 = inst_68907;
var state_68951__$1 = (function (){var statearr_68998 = state_68951;
(statearr_68998[(9)] = inst_68892__$1);

(statearr_68998[(10)] = inst_68888__$1);

(statearr_68998[(14)] = inst_68904);

(statearr_68998[(11)] = inst_68891__$1);

(statearr_68998[(12)] = inst_68889__$1);

return statearr_68998;
})();
var statearr_68999_70536 = state_68951__$1;
(statearr_68999_70536[(2)] = null);

(statearr_68999_70536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (22))){
var state_68951__$1 = state_68951;
var statearr_69003_70537 = state_68951__$1;
(statearr_69003_70537[(2)] = null);

(statearr_69003_70537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (6))){
var inst_68876 = (state_68951[(13)]);
var inst_68886 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_68876) : f.call(null,inst_68876));
var inst_68887 = cljs.core.seq(inst_68886);
var inst_68888 = inst_68887;
var inst_68889 = null;
var inst_68891 = (0);
var inst_68892 = (0);
var state_68951__$1 = (function (){var statearr_69008 = state_68951;
(statearr_69008[(9)] = inst_68892);

(statearr_69008[(10)] = inst_68888);

(statearr_69008[(11)] = inst_68891);

(statearr_69008[(12)] = inst_68889);

return statearr_69008;
})();
var statearr_69017_70538 = state_68951__$1;
(statearr_69017_70538[(2)] = null);

(statearr_69017_70538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (17))){
var inst_68912 = (state_68951[(7)]);
var inst_68918 = cljs.core.chunk_first(inst_68912);
var inst_68919 = cljs.core.chunk_rest(inst_68912);
var inst_68920 = cljs.core.count(inst_68918);
var inst_68888 = inst_68919;
var inst_68889 = inst_68918;
var inst_68891 = inst_68920;
var inst_68892 = (0);
var state_68951__$1 = (function (){var statearr_69029 = state_68951;
(statearr_69029[(9)] = inst_68892);

(statearr_69029[(10)] = inst_68888);

(statearr_69029[(11)] = inst_68891);

(statearr_69029[(12)] = inst_68889);

return statearr_69029;
})();
var statearr_69037_70544 = state_68951__$1;
(statearr_69037_70544[(2)] = null);

(statearr_69037_70544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (3))){
var inst_68947 = (state_68951[(2)]);
var state_68951__$1 = state_68951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68951__$1,inst_68947);
} else {
if((state_val_68952 === (12))){
var inst_68934 = (state_68951[(2)]);
var state_68951__$1 = state_68951;
var statearr_69048_70545 = state_68951__$1;
(statearr_69048_70545[(2)] = inst_68934);

(statearr_69048_70545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (2))){
var state_68951__$1 = state_68951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68951__$1,(4),in$);
} else {
if((state_val_68952 === (23))){
var inst_68942 = (state_68951[(2)]);
var state_68951__$1 = state_68951;
var statearr_69060_70551 = state_68951__$1;
(statearr_69060_70551[(2)] = inst_68942);

(statearr_69060_70551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (19))){
var inst_68929 = (state_68951[(2)]);
var state_68951__$1 = state_68951;
var statearr_69063_70552 = state_68951__$1;
(statearr_69063_70552[(2)] = inst_68929);

(statearr_69063_70552[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (11))){
var inst_68888 = (state_68951[(10)]);
var inst_68912 = (state_68951[(7)]);
var inst_68912__$1 = cljs.core.seq(inst_68888);
var state_68951__$1 = (function (){var statearr_69069 = state_68951;
(statearr_69069[(7)] = inst_68912__$1);

return statearr_69069;
})();
if(inst_68912__$1){
var statearr_69070_70553 = state_68951__$1;
(statearr_69070_70553[(1)] = (14));

} else {
var statearr_69072_70554 = state_68951__$1;
(statearr_69072_70554[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (9))){
var inst_68936 = (state_68951[(2)]);
var inst_68937 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_68951__$1 = (function (){var statearr_69075 = state_68951;
(statearr_69075[(15)] = inst_68936);

return statearr_69075;
})();
if(cljs.core.truth_(inst_68937)){
var statearr_69077_70559 = state_68951__$1;
(statearr_69077_70559[(1)] = (21));

} else {
var statearr_69079_70560 = state_68951__$1;
(statearr_69079_70560[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (5))){
var inst_68879 = cljs.core.async.close_BANG_(out);
var state_68951__$1 = state_68951;
var statearr_69083_70561 = state_68951__$1;
(statearr_69083_70561[(2)] = inst_68879);

(statearr_69083_70561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (14))){
var inst_68912 = (state_68951[(7)]);
var inst_68916 = cljs.core.chunked_seq_QMARK_(inst_68912);
var state_68951__$1 = state_68951;
if(inst_68916){
var statearr_69090_70563 = state_68951__$1;
(statearr_69090_70563[(1)] = (17));

} else {
var statearr_69092_70564 = state_68951__$1;
(statearr_69092_70564[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (16))){
var inst_68932 = (state_68951[(2)]);
var state_68951__$1 = state_68951;
var statearr_69097_70565 = state_68951__$1;
(statearr_69097_70565[(2)] = inst_68932);

(statearr_69097_70565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68952 === (10))){
var inst_68892 = (state_68951[(9)]);
var inst_68889 = (state_68951[(12)]);
var inst_68902 = cljs.core._nth(inst_68889,inst_68892);
var state_68951__$1 = state_68951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68951__$1,(13),out,inst_68902);
} else {
if((state_val_68952 === (18))){
var inst_68912 = (state_68951[(7)]);
var inst_68923 = cljs.core.first(inst_68912);
var state_68951__$1 = state_68951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68951__$1,(20),out,inst_68923);
} else {
if((state_val_68952 === (8))){
var inst_68892 = (state_68951[(9)]);
var inst_68891 = (state_68951[(11)]);
var inst_68897 = (inst_68892 < inst_68891);
var inst_68898 = inst_68897;
var state_68951__$1 = state_68951;
if(cljs.core.truth_(inst_68898)){
var statearr_69108_70567 = state_68951__$1;
(statearr_69108_70567[(1)] = (10));

} else {
var statearr_69110_70568 = state_68951__$1;
(statearr_69110_70568[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__65222__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__65222__auto____0 = (function (){
var statearr_69119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69119[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__65222__auto__);

(statearr_69119[(1)] = (1));

return statearr_69119;
});
var cljs$core$async$mapcat_STAR__$_state_machine__65222__auto____1 = (function (state_68951){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_68951);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e69123){if((e69123 instanceof Object)){
var ex__65226__auto__ = e69123;
var statearr_69124_70571 = state_68951;
(statearr_69124_70571[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70572 = state_68951;
state_68951 = G__70572;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__65222__auto__ = function(state_68951){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__65222__auto____1.call(this,state_68951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__65222__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__65222__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_69134 = f__65556__auto__();
(statearr_69134[(6)] = c__65555__auto__);

return statearr_69134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));

return c__65555__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__69144 = arguments.length;
switch (G__69144) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__69162 = arguments.length;
switch (G__69162) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__69182 = arguments.length;
switch (G__69182) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65555__auto___70587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_69230){
var state_val_69231 = (state_69230[(1)]);
if((state_val_69231 === (7))){
var inst_69220 = (state_69230[(2)]);
var state_69230__$1 = state_69230;
var statearr_69238_70588 = state_69230__$1;
(statearr_69238_70588[(2)] = inst_69220);

(statearr_69238_70588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69231 === (1))){
var inst_69199 = null;
var state_69230__$1 = (function (){var statearr_69244 = state_69230;
(statearr_69244[(7)] = inst_69199);

return statearr_69244;
})();
var statearr_69246_70589 = state_69230__$1;
(statearr_69246_70589[(2)] = null);

(statearr_69246_70589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69231 === (4))){
var inst_69203 = (state_69230[(8)]);
var inst_69203__$1 = (state_69230[(2)]);
var inst_69206 = (inst_69203__$1 == null);
var inst_69207 = cljs.core.not(inst_69206);
var state_69230__$1 = (function (){var statearr_69253 = state_69230;
(statearr_69253[(8)] = inst_69203__$1);

return statearr_69253;
})();
if(inst_69207){
var statearr_69254_70590 = state_69230__$1;
(statearr_69254_70590[(1)] = (5));

} else {
var statearr_69256_70591 = state_69230__$1;
(statearr_69256_70591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69231 === (6))){
var state_69230__$1 = state_69230;
var statearr_69263_70592 = state_69230__$1;
(statearr_69263_70592[(2)] = null);

(statearr_69263_70592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69231 === (3))){
var inst_69222 = (state_69230[(2)]);
var inst_69223 = cljs.core.async.close_BANG_(out);
var state_69230__$1 = (function (){var statearr_69264 = state_69230;
(statearr_69264[(9)] = inst_69222);

return statearr_69264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69230__$1,inst_69223);
} else {
if((state_val_69231 === (2))){
var state_69230__$1 = state_69230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69230__$1,(4),ch);
} else {
if((state_val_69231 === (11))){
var inst_69203 = (state_69230[(8)]);
var inst_69214 = (state_69230[(2)]);
var inst_69199 = inst_69203;
var state_69230__$1 = (function (){var statearr_69269 = state_69230;
(statearr_69269[(10)] = inst_69214);

(statearr_69269[(7)] = inst_69199);

return statearr_69269;
})();
var statearr_69270_70597 = state_69230__$1;
(statearr_69270_70597[(2)] = null);

(statearr_69270_70597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69231 === (9))){
var inst_69203 = (state_69230[(8)]);
var state_69230__$1 = state_69230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69230__$1,(11),out,inst_69203);
} else {
if((state_val_69231 === (5))){
var inst_69203 = (state_69230[(8)]);
var inst_69199 = (state_69230[(7)]);
var inst_69209 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_69203,inst_69199);
var state_69230__$1 = state_69230;
if(inst_69209){
var statearr_69275_70598 = state_69230__$1;
(statearr_69275_70598[(1)] = (8));

} else {
var statearr_69276_70599 = state_69230__$1;
(statearr_69276_70599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69231 === (10))){
var inst_69217 = (state_69230[(2)]);
var state_69230__$1 = state_69230;
var statearr_69281_70600 = state_69230__$1;
(statearr_69281_70600[(2)] = inst_69217);

(statearr_69281_70600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69231 === (8))){
var inst_69199 = (state_69230[(7)]);
var tmp69271 = inst_69199;
var inst_69199__$1 = tmp69271;
var state_69230__$1 = (function (){var statearr_69291 = state_69230;
(statearr_69291[(7)] = inst_69199__$1);

return statearr_69291;
})();
var statearr_69301_70601 = state_69230__$1;
(statearr_69301_70601[(2)] = null);

(statearr_69301_70601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_69308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69308[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_69308[(1)] = (1));

return statearr_69308;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_69230){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_69230);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e69309){if((e69309 instanceof Object)){
var ex__65226__auto__ = e69309;
var statearr_69310_70602 = state_69230;
(statearr_69310_70602[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70603 = state_69230;
state_69230 = G__70603;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_69230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_69230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_69312 = f__65556__auto__();
(statearr_69312[(6)] = c__65555__auto___70587);

return statearr_69312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__69324 = arguments.length;
switch (G__69324) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65555__auto___70618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_69365){
var state_val_69367 = (state_69365[(1)]);
if((state_val_69367 === (7))){
var inst_69361 = (state_69365[(2)]);
var state_69365__$1 = state_69365;
var statearr_69368_70619 = state_69365__$1;
(statearr_69368_70619[(2)] = inst_69361);

(statearr_69368_70619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69367 === (1))){
var inst_69328 = (new Array(n));
var inst_69329 = inst_69328;
var inst_69330 = (0);
var state_69365__$1 = (function (){var statearr_69373 = state_69365;
(statearr_69373[(7)] = inst_69329);

(statearr_69373[(8)] = inst_69330);

return statearr_69373;
})();
var statearr_69374_70620 = state_69365__$1;
(statearr_69374_70620[(2)] = null);

(statearr_69374_70620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69367 === (4))){
var inst_69333 = (state_69365[(9)]);
var inst_69333__$1 = (state_69365[(2)]);
var inst_69334 = (inst_69333__$1 == null);
var inst_69335 = cljs.core.not(inst_69334);
var state_69365__$1 = (function (){var statearr_69376 = state_69365;
(statearr_69376[(9)] = inst_69333__$1);

return statearr_69376;
})();
if(inst_69335){
var statearr_69377_70623 = state_69365__$1;
(statearr_69377_70623[(1)] = (5));

} else {
var statearr_69378_70624 = state_69365__$1;
(statearr_69378_70624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69367 === (15))){
var inst_69355 = (state_69365[(2)]);
var state_69365__$1 = state_69365;
var statearr_69379_70625 = state_69365__$1;
(statearr_69379_70625[(2)] = inst_69355);

(statearr_69379_70625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69367 === (13))){
var state_69365__$1 = state_69365;
var statearr_69382_70626 = state_69365__$1;
(statearr_69382_70626[(2)] = null);

(statearr_69382_70626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69367 === (6))){
var inst_69330 = (state_69365[(8)]);
var inst_69351 = (inst_69330 > (0));
var state_69365__$1 = state_69365;
if(cljs.core.truth_(inst_69351)){
var statearr_69393_70630 = state_69365__$1;
(statearr_69393_70630[(1)] = (12));

} else {
var statearr_69394_70631 = state_69365__$1;
(statearr_69394_70631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69367 === (3))){
var inst_69363 = (state_69365[(2)]);
var state_69365__$1 = state_69365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69365__$1,inst_69363);
} else {
if((state_val_69367 === (12))){
var inst_69329 = (state_69365[(7)]);
var inst_69353 = cljs.core.vec(inst_69329);
var state_69365__$1 = state_69365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69365__$1,(15),out,inst_69353);
} else {
if((state_val_69367 === (2))){
var state_69365__$1 = state_69365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69365__$1,(4),ch);
} else {
if((state_val_69367 === (11))){
var inst_69345 = (state_69365[(2)]);
var inst_69346 = (new Array(n));
var inst_69329 = inst_69346;
var inst_69330 = (0);
var state_69365__$1 = (function (){var statearr_69400 = state_69365;
(statearr_69400[(10)] = inst_69345);

(statearr_69400[(7)] = inst_69329);

(statearr_69400[(8)] = inst_69330);

return statearr_69400;
})();
var statearr_69402_70632 = state_69365__$1;
(statearr_69402_70632[(2)] = null);

(statearr_69402_70632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69367 === (9))){
var inst_69329 = (state_69365[(7)]);
var inst_69343 = cljs.core.vec(inst_69329);
var state_69365__$1 = state_69365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69365__$1,(11),out,inst_69343);
} else {
if((state_val_69367 === (5))){
var inst_69329 = (state_69365[(7)]);
var inst_69333 = (state_69365[(9)]);
var inst_69338 = (state_69365[(11)]);
var inst_69330 = (state_69365[(8)]);
var inst_69337 = (inst_69329[inst_69330] = inst_69333);
var inst_69338__$1 = (inst_69330 + (1));
var inst_69339 = (inst_69338__$1 < n);
var state_69365__$1 = (function (){var statearr_69407 = state_69365;
(statearr_69407[(12)] = inst_69337);

(statearr_69407[(11)] = inst_69338__$1);

return statearr_69407;
})();
if(cljs.core.truth_(inst_69339)){
var statearr_69409_70638 = state_69365__$1;
(statearr_69409_70638[(1)] = (8));

} else {
var statearr_69410_70639 = state_69365__$1;
(statearr_69410_70639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69367 === (14))){
var inst_69358 = (state_69365[(2)]);
var inst_69359 = cljs.core.async.close_BANG_(out);
var state_69365__$1 = (function (){var statearr_69412 = state_69365;
(statearr_69412[(13)] = inst_69358);

return statearr_69412;
})();
var statearr_69414_70640 = state_69365__$1;
(statearr_69414_70640[(2)] = inst_69359);

(statearr_69414_70640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69367 === (10))){
var inst_69349 = (state_69365[(2)]);
var state_69365__$1 = state_69365;
var statearr_69415_70641 = state_69365__$1;
(statearr_69415_70641[(2)] = inst_69349);

(statearr_69415_70641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69367 === (8))){
var inst_69329 = (state_69365[(7)]);
var inst_69338 = (state_69365[(11)]);
var tmp69411 = inst_69329;
var inst_69329__$1 = tmp69411;
var inst_69330 = inst_69338;
var state_69365__$1 = (function (){var statearr_69417 = state_69365;
(statearr_69417[(7)] = inst_69329__$1);

(statearr_69417[(8)] = inst_69330);

return statearr_69417;
})();
var statearr_69418_70642 = state_69365__$1;
(statearr_69418_70642[(2)] = null);

(statearr_69418_70642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_69419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69419[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_69419[(1)] = (1));

return statearr_69419;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_69365){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_69365);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e69420){if((e69420 instanceof Object)){
var ex__65226__auto__ = e69420;
var statearr_69421_70643 = state_69365;
(statearr_69421_70643[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70644 = state_69365;
state_69365 = G__70644;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_69365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_69365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_69423 = f__65556__auto__();
(statearr_69423[(6)] = c__65555__auto___70618);

return statearr_69423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__69425 = arguments.length;
switch (G__69425) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65555__auto___70647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65556__auto__ = (function (){var switch__65221__auto__ = (function (state_69477){
var state_val_69478 = (state_69477[(1)]);
if((state_val_69478 === (7))){
var inst_69470 = (state_69477[(2)]);
var state_69477__$1 = state_69477;
var statearr_69479_70648 = state_69477__$1;
(statearr_69479_70648[(2)] = inst_69470);

(statearr_69479_70648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (1))){
var inst_69428 = [];
var inst_69429 = inst_69428;
var inst_69430 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_69477__$1 = (function (){var statearr_69480 = state_69477;
(statearr_69480[(7)] = inst_69429);

(statearr_69480[(8)] = inst_69430);

return statearr_69480;
})();
var statearr_69481_70649 = state_69477__$1;
(statearr_69481_70649[(2)] = null);

(statearr_69481_70649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (4))){
var inst_69433 = (state_69477[(9)]);
var inst_69433__$1 = (state_69477[(2)]);
var inst_69434 = (inst_69433__$1 == null);
var inst_69435 = cljs.core.not(inst_69434);
var state_69477__$1 = (function (){var statearr_69482 = state_69477;
(statearr_69482[(9)] = inst_69433__$1);

return statearr_69482;
})();
if(inst_69435){
var statearr_69483_70650 = state_69477__$1;
(statearr_69483_70650[(1)] = (5));

} else {
var statearr_69484_70651 = state_69477__$1;
(statearr_69484_70651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (15))){
var inst_69429 = (state_69477[(7)]);
var inst_69462 = cljs.core.vec(inst_69429);
var state_69477__$1 = state_69477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69477__$1,(18),out,inst_69462);
} else {
if((state_val_69478 === (13))){
var inst_69456 = (state_69477[(2)]);
var state_69477__$1 = state_69477;
var statearr_69485_70652 = state_69477__$1;
(statearr_69485_70652[(2)] = inst_69456);

(statearr_69485_70652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (6))){
var inst_69429 = (state_69477[(7)]);
var inst_69459 = inst_69429.length;
var inst_69460 = (inst_69459 > (0));
var state_69477__$1 = state_69477;
if(cljs.core.truth_(inst_69460)){
var statearr_69486_70653 = state_69477__$1;
(statearr_69486_70653[(1)] = (15));

} else {
var statearr_69487_70654 = state_69477__$1;
(statearr_69487_70654[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (17))){
var inst_69467 = (state_69477[(2)]);
var inst_69468 = cljs.core.async.close_BANG_(out);
var state_69477__$1 = (function (){var statearr_69488 = state_69477;
(statearr_69488[(10)] = inst_69467);

return statearr_69488;
})();
var statearr_69490_70655 = state_69477__$1;
(statearr_69490_70655[(2)] = inst_69468);

(statearr_69490_70655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (3))){
var inst_69472 = (state_69477[(2)]);
var state_69477__$1 = state_69477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69477__$1,inst_69472);
} else {
if((state_val_69478 === (12))){
var inst_69429 = (state_69477[(7)]);
var inst_69449 = cljs.core.vec(inst_69429);
var state_69477__$1 = state_69477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69477__$1,(14),out,inst_69449);
} else {
if((state_val_69478 === (2))){
var state_69477__$1 = state_69477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69477__$1,(4),ch);
} else {
if((state_val_69478 === (11))){
var inst_69437 = (state_69477[(11)]);
var inst_69433 = (state_69477[(9)]);
var inst_69429 = (state_69477[(7)]);
var inst_69446 = inst_69429.push(inst_69433);
var tmp69494 = inst_69429;
var inst_69429__$1 = tmp69494;
var inst_69430 = inst_69437;
var state_69477__$1 = (function (){var statearr_69498 = state_69477;
(statearr_69498[(7)] = inst_69429__$1);

(statearr_69498[(12)] = inst_69446);

(statearr_69498[(8)] = inst_69430);

return statearr_69498;
})();
var statearr_69500_70660 = state_69477__$1;
(statearr_69500_70660[(2)] = null);

(statearr_69500_70660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (9))){
var inst_69430 = (state_69477[(8)]);
var inst_69442 = cljs.core.keyword_identical_QMARK_(inst_69430,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_69477__$1 = state_69477;
var statearr_69503_70661 = state_69477__$1;
(statearr_69503_70661[(2)] = inst_69442);

(statearr_69503_70661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (5))){
var inst_69437 = (state_69477[(11)]);
var inst_69433 = (state_69477[(9)]);
var inst_69438 = (state_69477[(13)]);
var inst_69430 = (state_69477[(8)]);
var inst_69437__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_69433) : f.call(null,inst_69433));
var inst_69438__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_69437__$1,inst_69430);
var state_69477__$1 = (function (){var statearr_69508 = state_69477;
(statearr_69508[(11)] = inst_69437__$1);

(statearr_69508[(13)] = inst_69438__$1);

return statearr_69508;
})();
if(inst_69438__$1){
var statearr_69509_70663 = state_69477__$1;
(statearr_69509_70663[(1)] = (8));

} else {
var statearr_69511_70664 = state_69477__$1;
(statearr_69511_70664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (14))){
var inst_69437 = (state_69477[(11)]);
var inst_69433 = (state_69477[(9)]);
var inst_69451 = (state_69477[(2)]);
var inst_69452 = [];
var inst_69453 = inst_69452.push(inst_69433);
var inst_69429 = inst_69452;
var inst_69430 = inst_69437;
var state_69477__$1 = (function (){var statearr_69515 = state_69477;
(statearr_69515[(7)] = inst_69429);

(statearr_69515[(14)] = inst_69453);

(statearr_69515[(15)] = inst_69451);

(statearr_69515[(8)] = inst_69430);

return statearr_69515;
})();
var statearr_69518_70665 = state_69477__$1;
(statearr_69518_70665[(2)] = null);

(statearr_69518_70665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (16))){
var state_69477__$1 = state_69477;
var statearr_69522_70666 = state_69477__$1;
(statearr_69522_70666[(2)] = null);

(statearr_69522_70666[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (10))){
var inst_69444 = (state_69477[(2)]);
var state_69477__$1 = state_69477;
if(cljs.core.truth_(inst_69444)){
var statearr_69524_70667 = state_69477__$1;
(statearr_69524_70667[(1)] = (11));

} else {
var statearr_69525_70668 = state_69477__$1;
(statearr_69525_70668[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (18))){
var inst_69464 = (state_69477[(2)]);
var state_69477__$1 = state_69477;
var statearr_69526_70670 = state_69477__$1;
(statearr_69526_70670[(2)] = inst_69464);

(statearr_69526_70670[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69478 === (8))){
var inst_69438 = (state_69477[(13)]);
var state_69477__$1 = state_69477;
var statearr_69527_70671 = state_69477__$1;
(statearr_69527_70671[(2)] = inst_69438);

(statearr_69527_70671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__65222__auto__ = null;
var cljs$core$async$state_machine__65222__auto____0 = (function (){
var statearr_69538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69538[(0)] = cljs$core$async$state_machine__65222__auto__);

(statearr_69538[(1)] = (1));

return statearr_69538;
});
var cljs$core$async$state_machine__65222__auto____1 = (function (state_69477){
while(true){
var ret_value__65223__auto__ = (function (){try{while(true){
var result__65224__auto__ = switch__65221__auto__(state_69477);
if(cljs.core.keyword_identical_QMARK_(result__65224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__65224__auto__;
}
break;
}
}catch (e69541){if((e69541 instanceof Object)){
var ex__65226__auto__ = e69541;
var statearr_69545_70672 = state_69477;
(statearr_69545_70672[(5)] = ex__65226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__65223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70673 = state_69477;
state_69477 = G__70673;
continue;
} else {
return ret_value__65223__auto__;
}
break;
}
});
cljs$core$async$state_machine__65222__auto__ = function(state_69477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__65222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__65222__auto____1.call(this,state_69477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__65222__auto____0;
cljs$core$async$state_machine__65222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__65222__auto____1;
return cljs$core$async$state_machine__65222__auto__;
})()
})();
var state__65557__auto__ = (function (){var statearr_69549 = f__65556__auto__();
(statearr_69549[(6)] = c__65555__auto___70647);

return statearr_69549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65557__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
