var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181221_syb_scopedata*/window.__wcc_version__='v0.5vv_20181221_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'_cpimg'])
Z([3,'_myCanvas'])
Z(z[2])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[7],[3,'cWidth']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'cHeight']],[1,'px']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'loading_box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switch_loading']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'is_loading']]])
Z([3,'loading'])
Z([3,'../static/a.gif'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'mix-load-more'])
Z([3,'mix-load-icon'])
Z([[2,'!'],[[2,'==='],[[7],[3,'status']],[1,1]]])
Z([3,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJCRjNGOEQ1RDNBMTFFOUFERjY5MEU0MTg5MjY0NDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJCRjNGOEU1RDNBMTFFOUFERjY5MEU0MTg5MjY0NDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkJGM0Y4QjVEM0ExMUU5QURGNjkwRTQxODkyNjQ0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkJGM0Y4QzVEM0ExMUU5QURGNjkwRTQxODkyNjQ0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkf/QQsAAAHYSURBVHjavFfRcYJAEOVu8h87SFJBSAUJNGCsIKQCsQK1AkkHpAKwAaUE7YB0kFRg3prFcWAPTziyM+uJHPvuvV32TuVZ2na79TG8wWkc8Ui2g3/z+BkEwc4mnrIAXGCYMpiN0SISLGDZCRiArxhW8Huvm5XwGRaQSzd1C8usB6jHz2aINbdijIkp59KlpWD+bmTMTNtA13AK8IRAipy+82/rlucijt1kzDnNWgBjAJUXCpHkTeBjw5RJlfMT8GazKZVSd8JkKpDkGl2xgJgLs1FwiPVwkppkcAVKxs/MpIKrJD8CHw6HWJK3C2gNXMr79AhMHQlsb4UJsYNqlmKMCJMYRwa2ZV9UjiGxjjRk9oUbucN3uBGLMLWhB+8cAjdiUWo1Ph4FiZwBG2L52vsHg7Q/9WvK8d6w9zozqJrUrzXvnw0pXAJDbmoaAXz5dxksboBOOXiuzaW+nToGLzAU57uTBDDmhj+Yaaq6evLZVoMCS8mv5OZdZhCz2RZpH/4YhDGzNrFLwDxznXMlHH3mF/ou+b5vd+t72LM6Q1ufqy2YC69pUHTKsdBpJnjNvizjvHQuLgE8D8OQCmppeM/PrXAidcuftogPDiPaTmlB1ANYoavsV4ABAGz+xJ8bzHJJAAAAAElFTkSuQmCC'])
Z([3,'mix-load-text'])
Z([a,[[6],[[7],[3,'text']],[[7],[3,'status']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z(z[1])
Z([3,'mix-refresh-content'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'translateY('],[[7],[3,'pageDeviation']]],[1,'px)']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[2,'+'],[[7],[3,'pageTransition']],[1,'s']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[2,'+'],[1,'calc(100vh - '],[[7],[3,'pageTop']]],[1,'px)']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'max-height:'],[[2,'+'],[[2,'+'],[1,'calc(100vh - '],[[7],[3,'pageTop']]],[1,'px)']]],[1,';']]])
Z([3,'mix-loading-wrapper'])
Z([[4],[[5],[[5],[[5],[1,'mix-loading-icon']],[[2,'?:'],[[7],[3,'refreshing']],[1,'active'],[1,'']]],[[2,'?:'],[[7],[3,'refreshReady']],[1,'ready'],[1,'']]]])
Z([3,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABRCAYAAABBuPE1AAAOyElEQVR4Xu1ce1hU1RZfe0aQmQHlfopC+cBHiXJvoaafoBXd1Ozh86qFfipXpRTfDxS73StYX/nKa93U8nED+wIrS7CypK6hKZgaoAahSSJcZQBN5DHDa2bfb+3hHM8M8zjncEC63+x/FNh77bV/81trr7322kPA3RRBgCgixS0E3EAqRAI3kG4gFUJAITFuRrqBVAgBhcS4GekGUiEEFBLjZmR7AdI/eMQcAiSEAoTwOlFSSCnNMavI8fLcjByFdG2RGL/gsBCVmT5OCAkBQgM5YQQghwLN0eeeTmzJBLIZ2W1g6CS1irwPAL7OFKCUFhICKY1AEtsaVP+gEYFETZZRCpMIITx4DvStoGBeoc89nSAHUFlAdh8YukylItu5CXv37AlarQaCg4IgNz8fGhtNtb8UFHjZKkSBpoOJxuvzT6fLUVbsGP+gEeFERZYBIZNsx/Tscb/JW6dTo66FRcVQfvMmXCsuFnSj20tyM1eInUvAbGlDmph4CEchgNFR86FPr552hZzJyoYzP/4IP5w911BXX+9x1/Qhh5rNK1wBiowCIL0t4+g1ff7pQmfaIoCgJusJkHCun6eHR/2I4cM8hw8dCsOHDLY7/GpRMbyze7ep+L/X1WwmMP9VKjMlMdI3MMTXS6vJRjNBEONi14JOpxX1SaSfPAkHDn7W+FtFRYe7gNIUaobtoKaBnJ/Ff125CwCoQL/G+TcwkUJQkUhCIJKT3blTp9qZ06d6DRs8RLSOS9euq9aXlnqjfGONoU9FYU6FqMUBSEtaBAwMXQ4q8k8UvmPrZvDr2lXsPHy/I0e/gYTkZMnjpAyIjIiAZ54aI2UI64tmvmRNbI3ZbNYBpW+V5GUuFytEEiMDBoVlA4GQx0aGweKo+WLnYP3QfI4cTYMzWVnUaDQ2m7dfn0B4sH9fuD8gAAb07wc+3kiM5q2quhouXSmAEn0p3NCXQvaFi3b7PT5yJISPGgnBA4Mk6fnqlq1XLubm9cdNUp+X2UfsYNFAWnZA1VUUvHrpEof+xnbi3J/z4ZPUVMjLv2T1p25+XeGJUWHwxKOjYGjIQ2L1tdvvx5wLcC7nPBw/lQG/FDAV+TYoaAA8O3YsDHPgH20FFhQWVq2L2+CDv28EGCw20hANpNCsP074t8uFIwMTk5KsANRptTB+3Bh4btxTMKB/X5cy5HRAph7+Og2SPz0ENTUGK0CnTZwoiqEvzJ3PzJtSiNfnZcSJ0UM8kINCtwMhywYOeBDi18U6lI3KIwOPpH3D9+nu1xUWzJ0Nj4eFgY+PfZMVo6zUPl8cTYP33v8A9GXl/FA0+cgZEU43oCVrYq+VlpX1BgqpJXkZzUIoe3qIBtI/ODSdAHncmX9EM96xdx/cvHWLzYUMfClyFkRMnSwVA0X72wKq1WohZslih+zcnbA//9v09CAK9Lg+N5MPpZwpJRpIbqOZOnECTJ/c/ENKSEq2YuELUybCi3NmtSkDnS20qqoakj49BHv3f8h3e2bsGMZO25aQdEB/JC3NH8OgktyMP4j5VMUDGRxGUaAtkGjKO/fug7PZ2Ww+/25+EBcb0+INRIzycvrgxhS3cQtv7rgZxSxZYmXqaFnxmzYz8SW5GaIwEtUJBQY0ARk9fy6EjxrFJkEQ4zduhsLiIvbzY2GhELd2VbthoSOgkZ1v7ngXvkz7lnUJ7NkLFkbN409obQLk+rVrmG+xBfHZsaMhLna1HJLcszHvJXzAmzr6zfWxaxmYbQZkYK9eVkxcv3YlPPfU2HsGSEsmxo0oftM2JkKr0dAtr8aTsvKbrW/az4wZDXn5l3lzXhn90j3flVsCJI4Vgtm7Rw/TtCmT1Vvf/lfr+kih0r9Hc3YEuhBMjUbDH2MV32y4OJJT5P8JRG5Nb76zCw58lspjTYHe0edmOk1cc51F79pCIAc/9CfYvX2LZIvKOn+BjRnycMvO1q4mbsk8Ly6P4RMhrRKQ+w8KvYp5SMw/Ju/ZBQH+3V2th/97+skM2LbjXSgpLWO/C+jeDVYuWgDho8JEyxDTEWPE+E1b+Xm8vXXsUBDxF1GnPDYFhkbjZ8xmUQlmgGoNxsFi8pKiGClMWEjdXIS+BxWdNvFppvAnqV+Bkrs9flgx/9gAU8aPY0nWo8dOQHVT0kLqPJws1FNs4sIlkJgV13prCymFzlJNGjMxM16MhurqGgbevrfegKeffIz9/6v/nIBlf3sNDn+Y2OIAHlk0YeYciImeB1Gzn2fyM85kwdS5S3giH05KlGRFK19eD9+f/oGNpyZzH1fXHC6B9B8UFkcIrEeBUpURBrxoZpdPp1lZ6H1/HAnzZ89kiY2WNI71N346ZSVm6OjJUKK3uBOpmyOSYMKMORYggSbqczP5awx7ujoFEtmo0WkxU+orVRGcbGZUNFwu+JWf13ahCKRUlttbxKpX4uFERibYyh82ZgpcLynl/fLh5P2SPq91G96Ab9OPi2KlUyCFvvHdbZslJyKG/XmcleLxa5byprdn/0ewfvPb7O9nj30taYG2nSdEzGYbzMqFc2H1onnszx+lfAkrXnndqqvUeX4pKIQZUQssQLpI8joHsumORi5rbIFEhUKHWa5EM89askVKACmcJ3jAA9Cpk7eVfLnzNDQ0QuyG1+HEqQy2gzu7w3EIpPCORuquxyluD0h71JPKFFsZ41+YZZUFd0RvOfMgs7njorM7HIdACs36WOpBWTvrjKiFzS6jbBcpl+1COZyPdOYfME/6+YEPJLuQq0U3YHrkXMs4J1e0jhnZdLXwQL8+kLRnl2QFcIBw13YkQGpcak+Obaxqrw9m7FctXih5HSVlt2DDpq1wLjsbd2+HVw8MSEtpCIAwVgoIDruNu3VLwhPhKcHeCvCU9HnSfllsl2Leck5jnHwE8rPUL/iiBmESQ4gbEdbycIMtFWSW6i08Fz8S8jD7E8aCeI36QN++ohfvjC1bNvxDsWPipSu/wksrVltdwXLrkerj8ayO8vAgUVVjgCsFv/JXKXiPY1tSYzLTyXaBdMV/vFJ48zUWo4tqtvckrXWvg4uP37SF98s4D5qzlDN93Mat/BWEqMUBAANSYNqW+kGVKhwIDcerV/wRNwNswtIQ2f5GXwreOp1oNotdiG0/dCnVNTWSjoScDFu/jvf42H6+dJn9i34SKEkHs5krTSxEl2h3sxEeC+WEDHIBaG/jjLV1oC+z3NHPWbgIjEajw8DcDaSTT6+ysgZuVdxhPdb8PY5drzg64dgFUhhDcozkkqUo1Nlm07H8DmiLS0FtqONVNGk7gqFnd6jz69ympJOrC7fW23eqoW+gxeNxsaRTILGUmRDiSwj1xaJ6Qokvlu85WrWzBEa3Y9ngUWlJmwlbfdfOUD7K4m/bqsnRxVXsixENEECfmEMpqaCUVtQZjYlEyD6xC3QVWyITOt6ymAS2ui6dJbMx+dMUwASrsGEYFjVnplg1WT+pugiTumInQpYSfDahpjSFDSLA1WgXEiAsGYfsGz/Ocmd9n393WTuhWIW4fs4WIzUmlDo31z/rQh7cKNGzH89mZcGRbyxVGXhMpE3WSoD4Ukp9wUwjXR4RpcaMchUXjnNmXnLyolJ1qqo2wM3f7paPv7NnL8sAqVSqn65fPGnXP7Vq0kLqArj+yQcPwbad79kdrsTZ3JleJrMZrt8oB5PZxHeLjF4MBoNBXtICTb4DAEsatpU5CRdoL6PTFkVaeLaurb0bceATFy6NRk3mJxw9aXGa2OXush/s1xc+3LNTLsFkj8Oj5YKVa9h4ORl6qRP/drsS7lRVWw2L27iJlW+rVOT69YunejiS6RxIfEGlVn13r1jZlkDa+kVcsxUbXTxiEnGLGIqZoN54RsZbxLasAcfFYHKYVdvu2dVqc9sDEeeOXhXDyrhdsRH7ugZSwMqnRz8JG16OkWox7bo/7s4IpG37+FAKHEw9zH6N2Z2ynzMtIaKD5hJIHBfQ9KIB/79m2WKYNvG5dg2OGOUaGxuh9GYF1NfXN+uOz/127m16AiPyZYMoIJvutzFtxDK8K6IXwPNTJoBapRKjc7vrg8mIispqqxCHU1JYrQuEFBurax5SrPYHJ2FpdTXJIUA6Y5nw4qgoGB0+Ejr5eP9uAMW02K3bdwCvWe01fGQVv3ETixkJIdUNlD6q+MsvnLgptsTSg07485wZETBh3Djw8dGAj04LHTrcffjanmiIPrCy2mDXjDk9heYsFURRm40tIOxsDhQfL7GcmPAllU6rAZ1OAzpNszfvbY4r+sDKKgMYamsdMpBTaseefXD8lKVuSA6IsoDkzJyoVbiLMZ/ZtUsXWDR/Hv+SSq1Sg5eXJ2i8OoLGy7PNmIqmazTWiQIP9UZ/mJh0gK+Hx7N0vdk8S6w5C9kharNxRCfhbo59hg0eDJEzI5q94/bw6ACeHh7g4aEGT09P8FDjv3e/UEAqXfE8XF/fAA31jdBoMoGxrt6p2drKx3fZHx9K5VmIf8eKs9oa43IxG4s9fVsEZBM7w0FFEjBo5yZAc58+eaKoh/FeXh2t9PLooAa12hINNDSYAEHjmslkcmmmzj4UewDizmwymZe6ihNdfdgtBhInsHxFg3Y5ELqc8534e3yehu+xEdh72dD/fff9Sds345VA6ftGgzFOLgsVM21bcBwBypn98EeGwKABA0QxtSXAY/33uZxsOHMuC3IvXbKkwJoavlQASrbXGgzblQCQk6sII+0CqvOaRECF3wlhKdMQNNyc8Otiuvn5QXAQAttFNrhoruU3b8HVoiIovFbEvi6He+ZsM+15MNMEo9GYoCSArQqkcAEs9jRT9KNYOtwMVFuA8SsauObXpSsDG1uNoQYKiyyPR7HhMzcHgAlFnqcUUkwEUuTsxFKsolUY6UgBNH1PjSZcTSAc7z24ag4pCjvri1UQhEKOiUK6itIcVwX0Ss2LctoUSHuKN1V0BeJ3llG8Egbqy10uOVoogkWBWC5VLKUjrGxESWCkyrrnQEpVuL32dwOp0CfjBtINpEIIKCTGzUg3kAohoJAYNyPdQCqEgEJi3Ix0A6kQAgqJ+R/hGsVgZB67rgAAAABJRU5ErkJggg\x3d\x3d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'text']])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-badge']],[[2,'?:'],[[7],[3,'inverted']],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-badge-'],[[7],[3,'type']]],[1,' uni-badge--']],[[7],[3,'size']]],[1,' uni-badge-inverted']],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-badge-'],[[7],[3,'type']]],[1,' uni-badge--']],[[7],[3,'size']]]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'onClick']]]]]]]]])
Z([a,[[7],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-icon']],[[2,'+'],[1,'uni-icon-'],[[7],[3,'type']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'font-size:'],[[2,'+'],[[7],[3,'size']],[1,'px']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-list-item']],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'disabled']],[1,true]],[[2,'==='],[[7],[3,'disabled']],[1,'true']]],[1,'uni-list-item--disabled'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'==='],[[7],[3,'disabled']],[1,true]],[[2,'==='],[[7],[3,'disabled']],[1,'true']]],[[2,'==='],[[7],[3,'showSwitch']],[1,true]]],[[2,'==='],[[7],[3,'showSwitch']],[1,'true']]],[1,''],[1,'uni-list-item--hover']])
Z([3,'uni-list-item__container'])
Z([[7],[3,'thumb']])
Z([3,'uni-list-item__icon'])
Z([3,'uni-list-item__icon-img'])
Z(z[6])
Z([[2,'||'],[[2,'==='],[[7],[3,'showExtraIcon']],[1,true]],[[2,'==='],[[7],[3,'showExtraIcon']],[1,'true']]])
Z(z[7])
Z([[6],[[7],[3,'extraIcon']],[3,'color']])
Z([[6],[[7],[3,'extraIcon']],[3,'size']])
Z([[6],[[7],[3,'extraIcon']],[3,'type']])
Z([3,'uni-list-item__content'])
Z([3,'uni-list-item__content-title'])
Z([a,[[7],[3,'title']]])
Z([[7],[3,'note']])
Z([3,'uni-list-item__content-note'])
Z([a,[[7],[3,'note']]])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'==='],[[7],[3,'showBadge']],[1,true]],[[2,'==='],[[7],[3,'showBadge']],[1,'true']]],[[2,'==='],[[7],[3,'showArrow']],[1,true]]],[[2,'==='],[[7],[3,'showArrow']],[1,'true']]],[[2,'==='],[[7],[3,'showSwitch']],[1,true]]],[[2,'==='],[[7],[3,'showSwitch']],[1,'true']]])
Z([3,'uni-list-item__extra'])
Z([[2,'||'],[[2,'==='],[[7],[3,'showBadge']],[1,true]],[[2,'==='],[[7],[3,'showBadge']],[1,'true']]])
Z([[7],[3,'badgeText']])
Z([[7],[3,'badgeType']])
Z([[2,'||'],[[2,'==='],[[7],[3,'showSwitch']],[1,true]],[[2,'==='],[[7],[3,'showSwitch']],[1,'true']]])
Z(z[1])
Z([[7],[3,'switchChecked']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'onSwitchChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'disabled']])
Z([[2,'||'],[[2,'==='],[[7],[3,'showArrow']],[1,true]],[[2,'==='],[[7],[3,'showArrow']],[1,'true']]])
Z([3,'#bbb'])
Z([3,'20'])
Z([3,'arrowright'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'uni-list'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'example-title'])
Z([3,'图像识别'])
Z([[4],[[5],[1,'default']]])
Z([3,'../image_recognition/Dish_recognition'])
Z([1,true])
Z([3,'菜品识别'])
Z([3,'../image_recognition/Animal_recognition'])
Z(z[5])
Z([3,'动物识别'])
Z([3,'../image_recognition/Botany'])
Z(z[5])
Z([3,'植物识别'])
Z([3,'../image_recognition/Vehicle_type_recognition'])
Z(z[5])
Z([3,'车型识别'])
Z(z[5])
Z(z[5])
Z([3,'红酒识别'])
Z(z[5])
Z(z[5])
Z([3,'货币识别'])
Z(z[1])
Z([3,'人脸与人体识别技术'])
Z(z[3])
Z([3,'../Face_recognition/Face_detection'])
Z(z[5])
Z([3,'人脸识别'])
Z([3,'../Face_recognition/Face_registration'])
Z(z[5])
Z([3,'最美证件照功能'])
Z(z[1])
Z([3,'跟AI没关系了'])
Z(z[3])
Z([3,'../QR_image/qrimage'])
Z(z[5])
Z([3,'二维码生成器'])
Z(z[1])
Z([3,'理解与交互技术'])
Z(z[3])
Z([3,'../voice/voice1'])
Z(z[5])
Z([3,'人机对话'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'title']])
Z([3,'uni-padding-wrap'])
Z([3,'background:#FFF;padding:40rpx;'])
Z([[2,'==='],[[7],[3,'hasLogin']],[1,true]])
Z([3,'uni-h3 uni-center uni-common-mt'])
Z([3,'已登录'])
Z([3,'uni-hello-text uni-center'])
Z([3,'每个账号仅需登录 1 次，\n后续每次进入页面即可自动拉取用户信息。'])
Z([[2,'==='],[[7],[3,'hasLogin']],[1,false]])
Z(z[5])
Z([3,'未登录'])
Z(z[7])
Z([3,'请点击按钮登录'])
Z([3,'uni-btn-v uni- uni-common-mt'])
Z([3,'key'])
Z([3,'value'])
Z([[7],[3,'providerList']])
Z(z[15])
Z([3,'__e'])
Z([3,'page-body-button'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'tologin']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'providerList']],[1,'']],[[7],[3,'key']]]]]]]]]]]]]]]])
Z([3,'primary'])
Z([a,[[6],[[7],[3,'value']],[3,'name']]])
Z([3,'navigator-hover'])
Z([3,'../getuser/getuser'])
Z([3,'default'])
Z([3,'跳转到新页面'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'addPhoto']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'添加图片'])
Z(z[2])
Z(z[2])
Z(z[2])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'cpimgOk']]]]]]]],[[4],[[5],[[5],[1,'^err']],[[4],[[5],[[4],[[5],[1,'cpimgErr']]]]]]]],[[4],[[5],[[5],[1,'^result_path']],[[4],[[5],[[4],[[5],[1,'cpimgPath']]]]]]]],[[4],[[5],[[5],[1,'^result_wh']],[[4],[[5],[[4],[[5],[1,'cpimgWH']]]]]]]]])
Z([3,'cpimg'])
Z([1,1000])
Z([1,0.9])
Z([1,500])
Z([3,'base64'])
Z([3,'img'])
Z([3,'showimg'])
Z([3,'aspectFit'])
Z([[7],[3,'src']])
Z([3,'imgPath'])
Z([3,'width:1000rpx;height:1000px;position:fixed;top:-99999px;left:-9999px;'])
Z([3,'firstCanvas'])
Z([3,'width:1000px;height:1000px;'])
Z(z[16])
Z(z[17])
Z(z[18])
Z([[7],[3,'src1']])
Z([a,[[2,'+'],[1,'年龄'],[[6],[[6],[[6],[[6],[[7],[3,'data']],[3,'result']],[3,'face_list']],[1,0]],[3,'age']]]])
Z([a,[[2,'+'],[1,'颜值'],[[6],[[6],[[6],[[6],[[7],[3,'data']],[3,'result']],[3,'face_list']],[1,0]],[3,'beauty']]]])
Z([a,[[2,'+'],[1,'人脸置信度'],[[6],[[6],[[6],[[6],[[7],[3,'data']],[3,'result']],[3,'face_list']],[1,0]],[3,'face_probability']]]])
Z([a,[[2,'+'],[1,'性别'],[[6],[[6],[[6],[[6],[[6],[[7],[3,'data']],[3,'result']],[3,'face_list']],[1,0]],[3,'gender']],[3,'type']]]])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'filepath']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'重新识别'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'addPhoto']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'添加图片'])
Z([3,'uni-title'])
Z([3,'此功能采用人像分离，人体关键点识别'])
Z(z[5])
Z([3,'选择尺寸'])
Z(z[2])
Z([3,'radio-group'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'radioChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'items']])
Z([3,'value'])
Z([3,'uni-list-cell uni-list-cell-pd'])
Z([[2,'==='],[[7],[3,'index']],[[7],[3,'current']]])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z(z[5])
Z([3,'选择底色'])
Z(z[2])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'radioChange1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[12])
Z(z[13])
Z([[7],[3,'items1']])
Z(z[15])
Z(z[16])
Z([[2,'==='],[[7],[3,'index']],[[7],[3,'current1']]])
Z(z[18])
Z([a,z[19][1]])
Z(z[2])
Z(z[2])
Z(z[2])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'cpimgOk']]]]]]]],[[4],[[5],[[5],[1,'^err']],[[4],[[5],[[4],[[5],[1,'cpimgErr']]]]]]]],[[4],[[5],[[5],[1,'^result_path']],[[4],[[5],[[4],[[5],[1,'cpimgPath']]]]]]]],[[4],[[5],[[5],[1,'^result_wh']],[[4],[[5],[[4],[[5],[1,'cpimgWH']]]]]]]]])
Z([3,'cpimg'])
Z([1,1000])
Z([1,0.9])
Z([1,500])
Z([3,'base64'])
Z([3,'img'])
Z([3,'showimg'])
Z([[2,'!'],[[7],[3,'src']]])
Z([3,'aspectFit'])
Z([[7],[3,'src']])
Z(z[45])
Z([[2,'!'],[[2,'!'],[[7],[3,'src']]]])
Z(z[47])
Z([3,'../../static/timg.jpg'])
Z([3,'imgPath'])
Z(z[45])
Z(z[46])
Z(z[47])
Z([[6],[[7],[3,'data']],[3,'data']])
Z(z[45])
Z(z[50])
Z(z[47])
Z([3,'../../static/timg1.png'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'baocun']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'保存'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'uni-form-item uni-column'])
Z([3,'__e'])
Z([3,'uni-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'title']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'']]]]]]]]]]])
Z([3,'文字/链接'])
Z([[7],[3,'title']])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'btn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'生成二维码'])
Z([[2,'!'],[[7],[3,'src']]])
Z([3,'showimg'])
Z([3,'aspectFit'])
Z([[7],[3,'urlFile']])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'btn1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[9])
Z([3,'保存二维码到手机'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([[4],[[5],[[5],[[2,'?:'],[[6],[[7],[3,'item']],[3,'m0']],[1,'active'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'item']],[3,'m1']],[1,'active1'],[1,'']]]])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'time']]])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'message']]])
Z([3,'bottom'])
Z([3,'__e'])
Z([3,'uni-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'title']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'']]]]]]]]]]])
Z([3,'自动获得焦点'])
Z([[7],[3,'title']])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'btn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'发送'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page-body'])
Z([3,'page-section page-section-gap'])
Z([3,'text-align:center;'])
Z([[7],[3,'audioAction']])
Z([[6],[[7],[3,'current']],[3,'author']])
Z([[6],[[7],[3,'current']],[3,'name']])
Z([[6],[[7],[3,'current']],[3,'poster']])
Z([[6],[[7],[3,'current']],[3,'src']])
Z([3,'text-align:left;'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'btn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'播放背景音频'])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'btn1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[12])
Z([3,'播放背景音频1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([3,'bky_list'])
Z([3,'navigator-hover'])
Z([[2,'+'],[1,'../content_body/content_body?id\x3d'],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']],[1,0]]])
Z([3,'row'])
Z([3,'column-title'])
Z([a,[[6],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'title']],[1,0]],[3,'_']]])
Z(z[8])
Z([3,'flex-txt'])
Z([[2,'!'],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'topicIcon']],[1,0]]])
Z([3,'column-description'])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'m0']]]])
Z([3,'text-danger'])
Z([[2,'!'],[[2,'!'],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'topicIcon']],[1,0]]]])
Z(z[14])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'m1']]]])
Z([3,'flex-img'])
Z(z[13])
Z([3,'__e'])
Z([3,'flex_image'])
Z([[4],[[5],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'imageError']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'aspectFit'])
Z([[6],[[7],[3,'item']],[3,'m2']])
Z([3,'display:inline-block;'])
Z([3,'width:94%;margin:10rpx auto;color:#999;'])
Z([a,[[6],[[7],[3,'item']],[3,'m3']]])
Z([3,'float:right;'])
Z([a,[[2,'+'],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'views']],[1,0]],[1,'阅读']]])
Z([3,'float:right;margin-right:40rpx;'])
Z([a,[[2,'+'],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'diggs']],[1,0]],[1,'推荐']]])
Z([3,'loading'])
Z([a,[[7],[3,'loadingText']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'markdown_view'])
Z([3,'markdown_view_header'])
Z([3,'content_body_title'])
Z([a,[[6],[[6],[[7],[3,'items']],[3,'Title']],[1,0]]])
Z([3,'width:100%;height:40rpx;'])
Z([3,'float:left;'])
Z([a,[[6],[[6],[[7],[3,'items']],[3,'SubmitDate']],[1,0]]])
Z([3,'float:right;'])
Z([a,[[6],[[6],[[7],[3,'items']],[3,'SourceName']],[1,0]]])
Z([3,'markdown _div'])
Z([[6],[[7],[3,'$root']],[3,'m0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'title']])
Z([3,'uni-padding-wrap'])
Z([3,'background:#FFF;padding:40rpx;'])
Z([[2,'==='],[[7],[3,'hasUserInfo']],[1,false]])
Z([3,'uni-hello-text uni-center'])
Z([3,'请点击下方按钮获取用户头像及昵称'])
Z([[2,'==='],[[7],[3,'hasUserInfo']],[1,true]])
Z([3,'uni-h4 uni-center uni-common-mt'])
Z([a,[[6],[[7],[3,'userInfo']],[3,'nickName']]])
Z([3,'padding:30rpx 0;text-align:center;'])
Z([3,'userinfo-avatar'])
Z([[6],[[7],[3,'userInfo']],[3,'avatarUrl']])
Z([3,'uni-btn-v'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getUserInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'获取用户信息'])
Z(z[14])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清空'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'addPhoto']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'添加图片'])
Z(z[2])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'cpimgOk']]]]]]]],[[4],[[5],[[5],[1,'^err']],[[4],[[5],[[4],[[5],[1,'cpimgErr']]]]]]]]])
Z([3,'cpimg'])
Z([1,1000])
Z([1,0.9])
Z([1,500])
Z([3,'base64'])
Z([3,'img'])
Z([3,'showimg'])
Z([3,'aspectFit'])
Z([[7],[3,'src']])
Z([3,'imgPath'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'data']],[3,'result']])
Z([3,'result'])
Z([[6],[[6],[[7],[3,'item']],[3,'baike_info']],[3,'baike_url']])
Z([3,'百度百科'])
Z([3,'result_title'])
Z([a,[[2,'+'],[1,'名称:'],[[6],[[7],[3,'item']],[3,'name']]]])
Z([3,'float:right;'])
Z([3,'result_description'])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'baike_info']],[3,'description']]])
Z([[6],[[6],[[7],[3,'item']],[3,'baike_info']],[3,'image_url']])
Z([3,'width:100%;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'addPhoto']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'添加图片'])
Z(z[2])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'cpimgOk']]]]]]]],[[4],[[5],[[5],[1,'^err']],[[4],[[5],[[4],[[5],[1,'cpimgErr']]]]]]]]])
Z([3,'cpimg'])
Z([1,1000])
Z([1,0.9])
Z([1,500])
Z([3,'base64'])
Z([3,'img'])
Z([3,'showimg'])
Z([3,'aspectFit'])
Z([[7],[3,'src']])
Z([3,'imgPath'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'data']],[3,'result']])
Z([3,'result'])
Z([[6],[[6],[[7],[3,'item']],[3,'baike_info']],[3,'baike_url']])
Z([3,'百度百科'])
Z([3,'result_title'])
Z([a,[[2,'+'],[1,'名称:'],[[6],[[7],[3,'item']],[3,'name']]]])
Z([3,'float:right;'])
Z([3,'result_description'])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'baike_info']],[3,'description']]])
Z([[6],[[6],[[7],[3,'item']],[3,'baike_info']],[3,'image_url']])
Z([3,'width:100%;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'addPhoto']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'添加图片'])
Z(z[2])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'cpimgOk']]]]]]]],[[4],[[5],[[5],[1,'^err']],[[4],[[5],[[4],[[5],[1,'cpimgErr']]]]]]]]])
Z([3,'cpimg'])
Z([1,1000])
Z([1,0.9])
Z([1,500])
Z([3,'base64'])
Z([3,'img'])
Z([3,'showimg'])
Z([3,'aspectFit'])
Z([[7],[3,'src']])
Z([3,'imgPath'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'data']],[3,'result']])
Z([3,'result'])
Z([[6],[[6],[[7],[3,'item']],[3,'baike_info']],[3,'baike_url']])
Z([3,'百度百科'])
Z([3,'result_title'])
Z([a,[[2,'+'],[1,'名称:'],[[6],[[7],[3,'item']],[3,'name']]]])
Z([3,'float:right;'])
Z([a,[[2,'+'],[[2,'+'],[1,'热量'],[[6],[[7],[3,'item']],[3,'calorie']]],[1,'KJ/100g']]])
Z([3,'result_description'])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'baike_info']],[3,'description']]])
Z([[6],[[6],[[7],[3,'item']],[3,'baike_info']],[3,'image_url']])
Z([3,'width:100%;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'addPhoto']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'添加图片'])
Z(z[2])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'cpimgOk']]]]]]]],[[4],[[5],[[5],[1,'^err']],[[4],[[5],[[4],[[5],[1,'cpimgErr']]]]]]]]])
Z([3,'cpimg'])
Z([1,1000])
Z([1,0.9])
Z([1,500])
Z([3,'base64'])
Z([3,'img'])
Z([3,'showimg'])
Z([3,'aspectFit'])
Z([[7],[3,'src']])
Z([3,'imgPath'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([3,'result'])
Z([[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'baike_info']],[3,'baike_url']])
Z([3,'百度百科'])
Z([3,'result_title'])
Z([a,[[2,'+'],[1,'名称:'],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']]]])
Z([3,'float:right;'])
Z([a,[[2,'+'],[1,'可信度'],[[6],[[7],[3,'item']],[3,'m0']]]])
Z([3,'result_description'])
Z([a,[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'baike_info']],[3,'description']]])
Z([[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'baike_info']],[3,'image_url']])
Z([3,'width:100%;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([3,'navigator-hover'])
Z([[2,'+'],[1,'../markdown/markdown?id\x3d'],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']]])
Z([3,'row'])
Z([3,'flex-txt'])
Z([3,'column'])
Z([3,'column-title'])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'title']]])
Z([3,'column-description'])
Z([a,[[6],[[7],[3,'item']],[3,'m0']]])
Z([3,'flex-img'])
Z([3,'__e'])
Z([3,'flex_image'])
Z([[4],[[5],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'imageError']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'aspectFit'])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'image']])
Z([3,'height:100%;background-color:#eeeeee;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'markdown_view'])
Z([3,'_img'])
Z([[2,'?:'],[[6],[[6],[[7],[3,'items']],[1,0]],[3,'image']],[[6],[[6],[[7],[3,'items']],[1,0]],[3,'image']],[1,'']])
Z([3,'100%;'])
Z([3,'markdown _div'])
Z([[6],[[7],[3,'$root']],[3,'m0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'nav-bar'])
Z(z[2])
Z([[7],[3,'scrollLeft']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tabBars']])
Z([3,'id'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'nav-item']],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'tabCurrentIndex']]],[1,'current'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'+'],[1,'tab'],[[7],[3,'index']]])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z(z[9])
Z(z[9])
Z([3,'panel-content vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^refresh']],[[4],[[5],[[4],[[5],[1,'onPulldownReresh']]]]]]]],[[4],[[5],[[5],[1,'^setEnableScroll']],[[4],[[5],[[4],[[5],[1,'setEnableScroll']]]]]]]]])
Z([3,'mixPulldownRefresh'])
Z([1,90])
Z([[4],[[5],[1,'default']]])
Z(z[9])
Z([3,'swiper-box'])
Z([[7],[3,'tabCurrentIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,300])
Z([3,'swiper'])
Z(z[9])
Z([3,'panel-scroll-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'enableScroll']])
Z([3,'__i0__'])
Z(z[6])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([3,'bky_list'])
Z([3,'navigator-hover'])
Z([[2,'+'],[1,'../content_body/content_body?id\x3d'],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']],[1,0]]])
Z([3,'row'])
Z([3,'column-title'])
Z([a,[[6],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'title']],[1,0]],[3,'_']]])
Z(z[37])
Z([3,'flex-txt'])
Z([[2,'!'],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'topicIcon']],[1,0]]])
Z([3,'column-description'])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'m0']]]])
Z([3,'text-danger'])
Z([[2,'!'],[[2,'!'],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'topicIcon']],[1,0]]]])
Z(z[43])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'m1']]]])
Z([3,'flex-img'])
Z(z[42])
Z(z[9])
Z([3,'flex_image'])
Z([[4],[[5],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'imageError']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'aspectFit'])
Z([[6],[[7],[3,'item']],[3,'m2']])
Z([3,'display:inline-block;'])
Z([3,'width:94%;margin:10rpx auto;color:#999;'])
Z([a,[[6],[[7],[3,'item']],[3,'m3']]])
Z([3,'float:right;'])
Z([a,[[2,'+'],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'views']],[1,0]],[1,'阅读']]])
Z([3,'float:right;margin-right:40rpx;'])
Z([a,[[2,'+'],[[6],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'diggs']],[1,0]],[1,'推荐']]])
Z([[6],[[7],[3,'tabItem']],[3,'loadMoreStatus']])
Z(z[9])
Z(z[28])
Z(z[29])
Z(z[30])
Z([3,'__i1__'])
Z(z[6])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[34])
Z(z[35])
Z(z[36])
Z(z[37])
Z(z[38])
Z([a,z[39][1]])
Z(z[37])
Z(z[41])
Z(z[42])
Z(z[43])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'m4']]]])
Z(z[45])
Z(z[46])
Z(z[43])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'m5']]]])
Z(z[49])
Z(z[42])
Z(z[9])
Z(z[52])
Z(z[53])
Z(z[54])
Z([[6],[[7],[3,'item']],[3,'m6']])
Z(z[56])
Z(z[57])
Z([a,[[6],[[7],[3,'item']],[3,'m7']]])
Z(z[59])
Z([a,z[60][1]])
Z(z[61])
Z([a,z[62][1]])
Z(z[9])
Z(z[28])
Z(z[29])
Z(z[30])
Z([3,'__i2__'])
Z(z[6])
Z([[6],[[7],[3,'$root']],[3,'l2']])
Z(z[34])
Z(z[35])
Z(z[36])
Z(z[37])
Z(z[38])
Z([a,z[39][1]])
Z(z[37])
Z(z[41])
Z(z[42])
Z(z[43])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'m8']]]])
Z(z[45])
Z(z[46])
Z(z[43])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'m9']]]])
Z(z[49])
Z(z[42])
Z(z[9])
Z(z[52])
Z(z[53])
Z(z[54])
Z([[6],[[7],[3,'item']],[3,'m10']])
Z(z[56])
Z(z[57])
Z([a,[[6],[[7],[3,'item']],[3,'m11']]])
Z(z[59])
Z([a,z[60][1]])
Z(z[61])
Z([a,z[62][1]])
Z(z[63])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'title']])
Z([3,'uni-padding-wrap'])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'recording']]],[[2,'!'],[[7],[3,'playing']]]],[[2,'!'],[[7],[3,'hasRecord']]]])
Z([3,'page-body-time'])
Z([3,'time-big'])
Z([a,[[7],[3,'formatedRecordTime']]])
Z([3,'page-body-buttons'])
Z([3,'page-body-button'])
Z([3,'__e'])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'startRecord']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/record.png'])
Z(z[8])
Z([[2,'==='],[[7],[3,'recording']],[1,true]])
Z(z[4])
Z(z[5])
Z([a,z[6][1]])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopRecord']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'button-stop-record'])
Z(z[8])
Z([[2,'&&'],[[2,'==='],[[7],[3,'hasRecord']],[1,true]],[[2,'==='],[[7],[3,'playing']],[1,false]]])
Z(z[4])
Z(z[5])
Z([a,[[7],[3,'formatedPlayTime']]])
Z([3,'time-small'])
Z([a,z[6][1]])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'playVoice']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/play.png'])
Z(z[9])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/trash.png'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'hasRecord']],[1,true]],[[2,'==='],[[7],[3,'playing']],[1,true]]])
Z(z[4])
Z(z[5])
Z([a,z[28][1]])
Z(z[29])
Z([a,z[6][1]])
Z(z[7])
Z(z[9])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopVoice']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/stop.png'])
Z(z[9])
Z(z[8])
Z(z[39])
Z(z[40])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'data']],[3,'result']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([[4],[[5],[[5],[[2,'?:'],[[6],[[7],[3,'item']],[3,'m0']],[1,'active'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'item']],[3,'m1']],[1,'active1'],[1,'']]]])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'time']]])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'message']]])
Z([3,'bottom'])
Z([3,'input_view bottom'])
Z([3,'__e'])
Z([3,'Voice'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'open_sr']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'sr']]])
Z([3,'aspectFit'])
Z([3,'../../static/mpxiaomi.png'])
Z([3,'width:100rpx;height:60rpx;margin-top:20rpx;'])
Z([[2,'!'],[[2,'!'],[[7],[3,'sr']]]])
Z(z[13])
Z([3,'../../static/jianpan.png'])
Z(z[15])
Z([3,'input'])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'title']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'']]]]]]]]]]])
Z(z[12])
Z([3,'text'])
Z([[7],[3,'title']])
Z(z[9])
Z(z[9])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'startRecord']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'endRecord']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[16])
Z([3,'按住说话'])
Z(z[9])
Z([3,'btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'btn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'发送'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/cpimg.wxml','./components/loding.wxml','./components/mix-load-more/mix-load-more.wxml','./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml','./components/uni-badge/uni-badge.wxml','./components/uni-icon/uni-icon.wxml','./components/uni-list-item/uni-list-item.wxml','./components/uni-list/uni-list.wxml','./pages/AI_list/AI_list.wxml','./pages/API/api.wxml','./pages/Face_recognition/Face_detection.wxml','./pages/Face_recognition/Face_registration.wxml','./pages/QR_image/qrimage.wxml','./pages/Robot/Robot.wxml','./pages/audio/audio.wxml','./pages/cnblogs/cnblogs.wxml','./pages/content_body/content_body.wxml','./pages/getuser/getuser.wxml','./pages/image_recognition/Animal_recognition.wxml','./pages/image_recognition/Botany.wxml','./pages/image_recognition/Dish_recognition.wxml','./pages/image_recognition/Vehicle_type_recognition.wxml','./pages/index/index.wxml','./pages/markdown/markdown.wxml','./pages/tabar/tabar.wxml','./pages/voice/voice.wxml','./pages/voice/voice1.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./components/cpimg.wxml:view:1:1")
var oB=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./components/cpimg.wxml:canvas:1:37")
var xC=_mz(z,'canvas',['canvasId',2,'id',1,'style',2],[],e,s,gg)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./components/loding.wxml:view:1:1")
var fE=_mz(z,'view',['bind:__l',0,'bindtap',1,'class',1,'data-event-opts',2,'hidden',3],[],e,s,gg)
cs.push("./components/loding.wxml:view:1:147")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
cs.push("./components/loding.wxml:image:1:169")
var hG=_mz(z,'image',['mode',-1,'src',6],[],e,s,gg)
cs.pop()
_(cF,hG)
cs.pop()
_(fE,cF)
cs.pop()
_(r,fE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./components/mix-load-more/mix-load-more.wxml:view:1:1")
var cI=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./components/mix-load-more/mix-load-more.wxml:image:1:44")
var oJ=_mz(z,'image',['class',2,'hidden',1,'src',2],[],e,s,gg)
cs.pop()
_(cI,oJ)
cs.push("./components/mix-load-more/mix-load-more.wxml:text:1:1985")
var lK=_n('text')
_rz(z,lK,'class',5,e,s,gg)
var aL=_oz(z,6,e,s,gg)
_(lK,aL)
cs.pop()
_(cI,lK)
cs.pop()
_(r,cI)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
cs.push("./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml:view:1:1")
var eN=_mz(z,'view',['bind:__l',0,'bindtouchend',1,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
cs.push("./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml:view:1:475")
var bO=_n('view')
_rz(z,bO,'class',7,e,s,gg)
cs.push("./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml:image:1:509")
var oP=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
cs.pop()
_(bO,oP)
cs.pop()
_(eN,bO)
cs.push("./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml:slot:1:5768")
var xQ=_n('slot')
cs.pop()
_(eN,xQ)
cs.pop()
_(r,eN)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var fS=_v()
_(r,fS)
if(_oz(z,1,e,s,gg)){fS.wxVkey=1
cs.push("./components/uni-badge/uni-badge.wxml:block:1:1")
cs.push("./components/uni-badge/uni-badge.wxml:text:1:40")
var cT=_mz(z,'text',['bind:__l',2,'bindtap',1,'class',2,'data-event-opts',3],[],e,s,gg)
var hU=_oz(z,6,e,s,gg)
_(cT,hU)
cs.pop()
_(fS,cT)
cs.pop()
}
fS.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
cs.push("./components/uni-icon/uni-icon.wxml:view:1:1")
var cW=_mz(z,'view',['bind:__l',0,'bindtap',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
cs.pop()
_(r,cW)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
cs.push("./components/uni-list-item/uni-list-item.wxml:view:1:1")
var lY=_mz(z,'view',['bind:__l',0,'bindtap',1,'class',1,'data-event-opts',2,'hoverClass',3],[],e,s,gg)
cs.push("./components/uni-list-item/uni-list-item.wxml:view:1:306")
var aZ=_n('view')
_rz(z,aZ,'class',5,e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,6,e,s,gg)){t1.wxVkey=1
cs.push("./components/uni-list-item/uni-list-item.wxml:block:1:345")
cs.push("./components/uni-list-item/uni-list-item.wxml:view:1:370")
var b3=_n('view')
_rz(z,b3,'class',7,e,s,gg)
cs.push("./components/uni-list-item/uni-list-item.wxml:image:1:404")
var o4=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
cs.pop()
_(b3,o4)
cs.pop()
_(t1,b3)
cs.pop()
}
else{t1.wxVkey=2
cs.push("./components/uni-list-item/uni-list-item.wxml:block:1:482")
var x5=_v()
_(t1,x5)
if(_oz(z,10,e,s,gg)){x5.wxVkey=1
cs.push("./components/uni-list-item/uni-list-item.wxml:block:1:497")
cs.push("./components/uni-list-item/uni-list-item.wxml:view:1:561")
var o6=_n('view')
_rz(z,o6,'class',11,e,s,gg)
cs.push("./components/uni-list-item/uni-list-item.wxml:uni-icon:1:595")
var f7=_mz(z,'uni-icon',['color',12,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(o6,f7)
cs.pop()
_(x5,o6)
cs.pop()
}
x5.wxXCkey=1
x5.wxXCkey=3
cs.pop()
}
cs.push("./components/uni-list-item/uni-list-item.wxml:view:1:719")
var c8=_n('view')
_rz(z,c8,'class',15,e,s,gg)
cs.push("./components/uni-list-item/uni-list-item.wxml:view:1:756")
var o0=_n('view')
_rz(z,o0,'class',16,e,s,gg)
var cAB=_oz(z,17,e,s,gg)
_(o0,cAB)
cs.pop()
_(c8,o0)
var h9=_v()
_(c8,h9)
if(_oz(z,18,e,s,gg)){h9.wxVkey=1
cs.push("./components/uni-list-item/uni-list-item.wxml:block:1:815")
cs.push("./components/uni-list-item/uni-list-item.wxml:view:1:839")
var oBB=_n('view')
_rz(z,oBB,'class',19,e,s,gg)
var lCB=_oz(z,20,e,s,gg)
_(oBB,lCB)
cs.pop()
_(h9,oBB)
cs.pop()
}
h9.wxXCkey=1
cs.pop()
_(aZ,c8)
var e2=_v()
_(aZ,e2)
if(_oz(z,21,e,s,gg)){e2.wxVkey=1
cs.push("./components/uni-list-item/uni-list-item.wxml:block:1:911")
cs.push("./components/uni-list-item/uni-list-item.wxml:view:1:1045")
var aDB=_n('view')
_rz(z,aDB,'class',22,e,s,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,23,e,s,gg)){tEB.wxVkey=1
cs.push("./components/uni-list-item/uni-list-item.wxml:block:1:1080")
cs.push("./components/uni-list-item/uni-list-item.wxml:uni-badge:1:1136")
var oHB=_mz(z,'uni-badge',['text',24,'type',1],[],e,s,gg)
cs.pop()
_(tEB,oHB)
cs.pop()
}
var eFB=_v()
_(aDB,eFB)
if(_oz(z,26,e,s,gg)){eFB.wxVkey=1
cs.push("./components/uni-list-item/uni-list-item.wxml:block:1:1209")
cs.push("./components/uni-list-item/uni-list-item.wxml:switch:1:1267")
var xIB=_mz(z,'switch',['bindchange',27,'checked',1,'data-event-opts',2,'disabled',3],[],e,s,gg)
cs.pop()
_(eFB,xIB)
cs.pop()
}
var bGB=_v()
_(aDB,bGB)
if(_oz(z,31,e,s,gg)){bGB.wxVkey=1
cs.push("./components/uni-list-item/uni-list-item.wxml:block:1:1428")
cs.push("./components/uni-list-item/uni-list-item.wxml:uni-icon:1:1484")
var oJB=_mz(z,'uni-icon',['color',32,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(bGB,oJB)
cs.pop()
}
tEB.wxXCkey=1
tEB.wxXCkey=3
eFB.wxXCkey=1
bGB.wxXCkey=1
bGB.wxXCkey=3
cs.pop()
_(e2,aDB)
cs.pop()
}
t1.wxXCkey=1
t1.wxXCkey=3
e2.wxXCkey=1
e2.wxXCkey=3
cs.pop()
_(lY,aZ)
cs.pop()
_(r,lY)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
cs.push("./components/uni-list/uni-list.wxml:view:1:1")
var cLB=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./components/uni-list/uni-list.wxml:slot:1:39")
var hMB=_n('slot')
cs.pop()
_(cLB,hMB)
cs.pop()
_(r,cLB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
cs.push("./pages/AI_list/AI_list.wxml:view:1:1")
var cOB=_n('view')
_rz(z,cOB,'bind:__l',0,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:view:1:22")
var oPB=_n('view')
_rz(z,oPB,'class',1,e,s,gg)
var lQB=_oz(z,2,e,s,gg)
_(oPB,lQB)
cs.pop()
_(cOB,oPB)
cs.push("./pages/AI_list/AI_list.wxml:uni-list:1:69")
var aRB=_n('uni-list')
_rz(z,aRB,'vueSlots',3,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:navigator:1:107")
var tSB=_n('navigator')
_rz(z,tSB,'url',4,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:uni-list-item:1:162")
var eTB=_mz(z,'uni-list-item',['showBadge',5,'title',1],[],e,s,gg)
cs.pop()
_(tSB,eTB)
cs.pop()
_(aRB,tSB)
cs.push("./pages/AI_list/AI_list.wxml:navigator:1:248")
var bUB=_n('navigator')
_rz(z,bUB,'url',7,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:uni-list-item:1:305")
var oVB=_mz(z,'uni-list-item',['showBadge',8,'title',1],[],e,s,gg)
cs.pop()
_(bUB,oVB)
cs.pop()
_(aRB,bUB)
cs.push("./pages/AI_list/AI_list.wxml:navigator:1:391")
var xWB=_n('navigator')
_rz(z,xWB,'url',10,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:uni-list-item:1:436")
var oXB=_mz(z,'uni-list-item',['showBadge',11,'title',1],[],e,s,gg)
cs.pop()
_(xWB,oXB)
cs.pop()
_(aRB,xWB)
cs.push("./pages/AI_list/AI_list.wxml:navigator:1:522")
var fYB=_n('navigator')
_rz(z,fYB,'url',13,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:uni-list-item:1:585")
var cZB=_mz(z,'uni-list-item',['showBadge',14,'title',1],[],e,s,gg)
cs.pop()
_(fYB,cZB)
cs.pop()
_(aRB,fYB)
cs.push("./pages/AI_list/AI_list.wxml:uni-list-item:1:671")
var h1B=_mz(z,'uni-list-item',['disabled',16,'showBadge',1,'title',2],[],e,s,gg)
cs.pop()
_(aRB,h1B)
cs.push("./pages/AI_list/AI_list.wxml:uni-list-item:1:765")
var o2B=_mz(z,'uni-list-item',['disabled',19,'showBadge',1,'title',2],[],e,s,gg)
cs.pop()
_(aRB,o2B)
cs.pop()
_(cOB,aRB)
cs.push("./pages/AI_list/AI_list.wxml:view:1:870")
var c3B=_n('view')
_rz(z,c3B,'class',22,e,s,gg)
var o4B=_oz(z,23,e,s,gg)
_(c3B,o4B)
cs.pop()
_(cOB,c3B)
cs.push("./pages/AI_list/AI_list.wxml:uni-list:1:932")
var l5B=_n('uni-list')
_rz(z,l5B,'vueSlots',24,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:navigator:1:970")
var a6B=_n('navigator')
_rz(z,a6B,'url',25,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:uni-list-item:1:1022")
var t7B=_mz(z,'uni-list-item',['showBadge',26,'title',1],[],e,s,gg)
cs.pop()
_(a6B,t7B)
cs.pop()
_(l5B,a6B)
cs.push("./pages/AI_list/AI_list.wxml:navigator:1:1108")
var e8B=_n('navigator')
_rz(z,e8B,'url',28,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:uni-list-item:1:1163")
var b9B=_mz(z,'uni-list-item',['showBadge',29,'title',1],[],e,s,gg)
cs.pop()
_(e8B,b9B)
cs.pop()
_(l5B,e8B)
cs.pop()
_(cOB,l5B)
cs.push("./pages/AI_list/AI_list.wxml:view:1:1269")
var o0B=_n('view')
_rz(z,o0B,'class',31,e,s,gg)
var xAC=_oz(z,32,e,s,gg)
_(o0B,xAC)
cs.pop()
_(cOB,o0B)
cs.push("./pages/AI_list/AI_list.wxml:uni-list:1:1321")
var oBC=_n('uni-list')
_rz(z,oBC,'vueSlots',33,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:navigator:1:1359")
var fCC=_n('navigator')
_rz(z,fCC,'url',34,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:uni-list-item:1:1396")
var cDC=_mz(z,'uni-list-item',['showBadge',35,'title',1],[],e,s,gg)
cs.pop()
_(fCC,cDC)
cs.pop()
_(oBC,fCC)
cs.pop()
_(cOB,oBC)
cs.push("./pages/AI_list/AI_list.wxml:view:1:1499")
var hEC=_n('view')
_rz(z,hEC,'class',37,e,s,gg)
var oFC=_oz(z,38,e,s,gg)
_(hEC,oFC)
cs.pop()
_(cOB,hEC)
cs.push("./pages/AI_list/AI_list.wxml:uni-list:1:1555")
var cGC=_n('uni-list')
_rz(z,cGC,'vueSlots',39,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:navigator:1:1593")
var oHC=_n('navigator')
_rz(z,oHC,'url',40,e,s,gg)
cs.push("./pages/AI_list/AI_list.wxml:uni-list-item:1:1626")
var lIC=_mz(z,'uni-list-item',['showBadge',41,'title',1],[],e,s,gg)
cs.pop()
_(oHC,lIC)
cs.pop()
_(cGC,oHC)
cs.pop()
_(cOB,cGC)
cs.pop()
_(r,cOB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
cs.push("./pages/API/api.wxml:view:1:1")
var tKC=_n('view')
_rz(z,tKC,'bind:__l',0,e,s,gg)
cs.push("./pages/API/api.wxml:page-head:1:22")
var eLC=_n('page-head')
_rz(z,eLC,'title',1,e,s,gg)
cs.pop()
_(tKC,eLC)
cs.push("./pages/API/api.wxml:view:1:63")
var bMC=_n('view')
_rz(z,bMC,'class',2,e,s,gg)
cs.push("./pages/API/api.wxml:view:1:94")
var oNC=_n('view')
_rz(z,oNC,'style',3,e,s,gg)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,4,e,s,gg)){xOC.wxVkey=1
cs.push("./pages/API/api.wxml:block:1:139")
cs.push("./pages/API/api.wxml:block:1:174")
cs.push("./pages/API/api.wxml:view:1:181")
var fQC=_n('view')
_rz(z,fQC,'class',5,e,s,gg)
var cRC=_oz(z,6,e,s,gg)
_(fQC,cRC)
cs.pop()
_(xOC,fQC)
cs.push("./pages/API/api.wxml:view:1:243")
var hSC=_n('view')
_rz(z,hSC,'class',7,e,s,gg)
cs.push("./pages/API/api.wxml:text:1:283")
var oTC=_n('text')
var cUC=_oz(z,8,e,s,gg)
_(oTC,cUC)
cs.pop()
_(hSC,oTC)
cs.pop()
_(xOC,hSC)
cs.pop()
cs.pop()
}
var oPC=_v()
_(oNC,oPC)
if(_oz(z,9,e,s,gg)){oPC.wxVkey=1
cs.push("./pages/API/api.wxml:block:1:411")
cs.push("./pages/API/api.wxml:block:1:447")
cs.push("./pages/API/api.wxml:view:1:454")
var oVC=_n('view')
_rz(z,oVC,'class',10,e,s,gg)
var lWC=_oz(z,11,e,s,gg)
_(oVC,lWC)
cs.pop()
_(oPC,oVC)
cs.push("./pages/API/api.wxml:view:1:516")
var aXC=_n('view')
_rz(z,aXC,'class',12,e,s,gg)
var tYC=_oz(z,13,e,s,gg)
_(aXC,tYC)
cs.pop()
_(oPC,aXC)
cs.pop()
cs.pop()
}
xOC.wxXCkey=1
oPC.wxXCkey=1
cs.pop()
_(bMC,oNC)
cs.push("./pages/API/api.wxml:view:1:607")
var eZC=_n('view')
_rz(z,eZC,'class',14,e,s,gg)
var b1C=_v()
_(eZC,b1C)
cs.push("./pages/API/api.wxml:block:1:650")
var o2C=function(o4C,x3C,f5C,gg){
cs.push("./pages/API/api.wxml:block:1:650")
cs.push("./pages/API/api.wxml:button:1:735")
var h7C=_mz(z,'button',['bindtap',19,'class',1,'data-event-opts',2,'type',3],[],o4C,x3C,gg)
var o8C=_oz(z,23,o4C,x3C,gg)
_(h7C,o8C)
cs.pop()
_(f5C,h7C)
cs.pop()
return f5C
}
b1C.wxXCkey=2
_2z(z,17,o2C,e,s,gg,b1C,'value','key','key')
cs.pop()
cs.pop()
_(bMC,eZC)
cs.pop()
_(tKC,bMC)
cs.push("./pages/API/api.wxml:navigator:1:923")
var c9C=_mz(z,'navigator',['hoverClass',24,'url',1],[],e,s,gg)
cs.push("./pages/API/api.wxml:button:1:989")
var o0C=_n('button')
_rz(z,o0C,'type',26,e,s,gg)
var lAD=_oz(z,27,e,s,gg)
_(o0C,lAD)
cs.pop()
_(c9C,o0C)
cs.pop()
_(tKC,c9C)
cs.pop()
_(r,tKC)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
cs.push("./pages/Face_recognition/Face_detection.wxml:view:1:1")
var tCD=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/Face_recognition/Face_detection.wxml:button:1:38")
var eDD=_mz(z,'button',['bindtap',2,'data-event-opts',1],[],e,s,gg)
var bED=_oz(z,4,e,s,gg)
_(eDD,bED)
cs.pop()
_(tCD,eDD)
cs.push("./pages/Face_recognition/Face_detection.wxml:cpimg:1:139")
var oFD=_mz(z,'cpimg',['bind:err',5,'bind:result',1,'bind:result_path',2,'bind:result_wh',3,'class',4,'data-event-opts',5,'data-ref',6,'maxWidth',7,'ql',8,'size',9,'type',10],[],e,s,gg)
cs.pop()
_(tCD,oFD)
cs.push("./pages/Face_recognition/Face_detection.wxml:view:1:462")
var xGD=_n('view')
_rz(z,xGD,'class',16,e,s,gg)
cs.push("./pages/Face_recognition/Face_detection.wxml:image:1:480")
var oHD=_mz(z,'image',['class',17,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(xGD,oHD)
cs.pop()
_(tCD,xGD)
cs.push("./pages/Face_recognition/Face_detection.wxml:view:1:549")
var fID=_n('view')
_rz(z,fID,'class',20,e,s,gg)
cs.push("./pages/Face_recognition/Face_detection.wxml:view:1:571")
var cJD=_n('view')
_rz(z,cJD,'style',21,e,s,gg)
cs.push("./pages/Face_recognition/Face_detection.wxml:canvas:1:655")
var hKD=_mz(z,'canvas',['canvasId',22,'style',1],[],e,s,gg)
cs.pop()
_(cJD,hKD)
cs.pop()
_(fID,cJD)
cs.push("./pages/Face_recognition/Face_detection.wxml:view:1:739")
var oLD=_n('view')
_rz(z,oLD,'class',24,e,s,gg)
cs.push("./pages/Face_recognition/Face_detection.wxml:image:1:757")
var cMD=_mz(z,'image',['class',25,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(oLD,cMD)
cs.pop()
_(fID,oLD)
cs.push("./pages/Face_recognition/Face_detection.wxml:view:1:827")
var oND=_n('view')
cs.push("./pages/Face_recognition/Face_detection.wxml:text:1:833")
var lOD=_n('text')
var aPD=_oz(z,28,e,s,gg)
_(lOD,aPD)
cs.pop()
_(oND,lOD)
cs.push("./pages/Face_recognition/Face_detection.wxml:text:1:887")
var tQD=_n('text')
var eRD=_oz(z,29,e,s,gg)
_(tQD,eRD)
cs.pop()
_(oND,tQD)
cs.push("./pages/Face_recognition/Face_detection.wxml:text:1:944")
var bSD=_n('text')
var oTD=_oz(z,30,e,s,gg)
_(bSD,oTD)
cs.pop()
_(oND,bSD)
cs.push("./pages/Face_recognition/Face_detection.wxml:text:1:1020")
var xUD=_n('text')
var oVD=_oz(z,31,e,s,gg)
_(xUD,oVD)
cs.pop()
_(oND,xUD)
cs.pop()
_(fID,oND)
cs.push("./pages/Face_recognition/Face_detection.wxml:button:1:1089")
var fWD=_mz(z,'button',['bindtap',32,'data-event-opts',1,'type',2],[],e,s,gg)
var cXD=_oz(z,35,e,s,gg)
_(fWD,cXD)
cs.pop()
_(fID,fWD)
cs.pop()
_(tCD,fID)
cs.pop()
_(r,tCD)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
cs.push("./pages/Face_recognition/Face_registration.wxml:view:1:1")
var oZD=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/Face_recognition/Face_registration.wxml:button:1:38")
var c1D=_mz(z,'button',['bindtap',2,'data-event-opts',1],[],e,s,gg)
var o2D=_oz(z,4,e,s,gg)
_(c1D,o2D)
cs.pop()
_(oZD,c1D)
cs.push("./pages/Face_recognition/Face_registration.wxml:view:1:139")
var l3D=_n('view')
_rz(z,l3D,'class',5,e,s,gg)
var a4D=_oz(z,6,e,s,gg)
_(l3D,a4D)
cs.pop()
_(oZD,l3D)
cs.push("./pages/Face_recognition/Face_registration.wxml:view:1:221")
var t5D=_n('view')
_rz(z,t5D,'class',7,e,s,gg)
var e6D=_oz(z,8,e,s,gg)
_(t5D,e6D)
cs.pop()
_(oZD,t5D)
cs.push("./pages/Face_recognition/Face_registration.wxml:radio-group:1:264")
var b7D=_mz(z,'radio-group',['bindchange',9,'class',1,'data-event-opts',2],[],e,s,gg)
var o8D=_v()
_(b7D,o8D)
cs.push("./pages/Face_recognition/Face_registration.wxml:block:1:378")
var x9D=function(fAE,o0D,cBE,gg){
cs.push("./pages/Face_recognition/Face_registration.wxml:block:1:378")
cs.push("./pages/Face_recognition/Face_registration.wxml:label:1:459")
var oDE=_n('label')
_rz(z,oDE,'class',16,fAE,o0D,gg)
cs.push("./pages/Face_recognition/Face_registration.wxml:view:1:505")
var cEE=_n('view')
cs.push("./pages/Face_recognition/Face_registration.wxml:radio:1:511")
var oFE=_mz(z,'radio',['checked',17,'value',1],[],fAE,o0D,gg)
cs.pop()
_(cEE,oFE)
cs.pop()
_(oDE,cEE)
cs.push("./pages/Face_recognition/Face_registration.wxml:view:1:586")
var lGE=_n('view')
var aHE=_oz(z,19,fAE,o0D,gg)
_(lGE,aHE)
cs.pop()
_(oDE,lGE)
cs.pop()
_(cBE,oDE)
cs.pop()
return cBE
}
o8D.wxXCkey=2
_2z(z,14,x9D,e,s,gg,o8D,'item','index','value')
cs.pop()
cs.pop()
_(oZD,b7D)
cs.push("./pages/Face_recognition/Face_registration.wxml:view:1:642")
var tIE=_n('view')
_rz(z,tIE,'class',20,e,s,gg)
var eJE=_oz(z,21,e,s,gg)
_(tIE,eJE)
cs.pop()
_(oZD,tIE)
cs.push("./pages/Face_recognition/Face_registration.wxml:radio-group:1:685")
var bKE=_mz(z,'radio-group',['bindchange',22,'class',1,'data-event-opts',2],[],e,s,gg)
var oLE=_v()
_(bKE,oLE)
cs.push("./pages/Face_recognition/Face_registration.wxml:block:1:800")
var xME=function(fOE,oNE,cPE,gg){
cs.push("./pages/Face_recognition/Face_registration.wxml:block:1:800")
cs.push("./pages/Face_recognition/Face_registration.wxml:label:1:882")
var oRE=_n('label')
_rz(z,oRE,'class',29,fOE,oNE,gg)
cs.push("./pages/Face_recognition/Face_registration.wxml:view:1:928")
var cSE=_n('view')
cs.push("./pages/Face_recognition/Face_registration.wxml:radio:1:934")
var oTE=_mz(z,'radio',['checked',30,'value',1],[],fOE,oNE,gg)
cs.pop()
_(cSE,oTE)
cs.pop()
_(oRE,cSE)
cs.push("./pages/Face_recognition/Face_registration.wxml:view:1:1010")
var lUE=_n('view')
var aVE=_oz(z,32,fOE,oNE,gg)
_(lUE,aVE)
cs.pop()
_(oRE,lUE)
cs.pop()
_(cPE,oRE)
cs.pop()
return cPE
}
oLE.wxXCkey=2
_2z(z,27,xME,e,s,gg,oLE,'item','index','value')
cs.pop()
cs.pop()
_(oZD,bKE)
cs.push("./pages/Face_recognition/Face_registration.wxml:cpimg:1:1066")
var tWE=_mz(z,'cpimg',['bind:err',33,'bind:result',1,'bind:result_path',2,'bind:result_wh',3,'class',4,'data-event-opts',5,'data-ref',6,'maxWidth',7,'ql',8,'size',9,'type',10],[],e,s,gg)
cs.pop()
_(oZD,tWE)
cs.push("./pages/Face_recognition/Face_registration.wxml:view:1:1389")
var eXE=_n('view')
_rz(z,eXE,'class',44,e,s,gg)
cs.push("./pages/Face_recognition/Face_registration.wxml:image:1:1407")
var bYE=_mz(z,'image',['class',45,'hidden',1,'mode',2,'src',3],[],e,s,gg)
cs.pop()
_(eXE,bYE)
cs.push("./pages/Face_recognition/Face_registration.wxml:image:1:1489")
var oZE=_mz(z,'image',['class',49,'hidden',1,'mode',2,'src',3],[],e,s,gg)
cs.pop()
_(eXE,oZE)
cs.pop()
_(oZD,eXE)
cs.push("./pages/Face_recognition/Face_registration.wxml:view:1:1593")
var x1E=_n('view')
_rz(z,x1E,'class',53,e,s,gg)
cs.push("./pages/Face_recognition/Face_registration.wxml:image:1:1615")
var o2E=_mz(z,'image',['class',54,'hidden',1,'mode',2,'src',3],[],e,s,gg)
cs.pop()
_(x1E,o2E)
cs.push("./pages/Face_recognition/Face_registration.wxml:image:1:1703")
var f3E=_mz(z,'image',['class',58,'hidden',1,'mode',2,'src',3],[],e,s,gg)
cs.pop()
_(x1E,f3E)
cs.push("./pages/Face_recognition/Face_registration.wxml:button:1:1801")
var c4E=_mz(z,'button',['bindtap',62,'data-event-opts',1,'type',2],[],e,s,gg)
var h5E=_oz(z,65,e,s,gg)
_(c4E,h5E)
cs.pop()
_(x1E,c4E)
cs.pop()
_(oZD,x1E)
cs.pop()
_(r,oZD)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
cs.push("./pages/QR_image/qrimage.wxml:view:1:1")
var c7E=_n('view')
_rz(z,c7E,'bind:__l',0,e,s,gg)
cs.push("./pages/QR_image/qrimage.wxml:view:1:22")
var o8E=_n('view')
_rz(z,o8E,'class',1,e,s,gg)
cs.push("./pages/QR_image/qrimage.wxml:input:1:61")
var l9E=_mz(z,'input',['focus',-1,'bindinput',2,'class',1,'data-event-opts',2,'placeholder',3,'value',4],[],e,s,gg)
cs.pop()
_(o8E,l9E)
cs.push("./pages/QR_image/qrimage.wxml:button:1:239")
var a0E=_mz(z,'button',['bindtap',7,'data-event-opts',1,'type',2],[],e,s,gg)
var tAF=_oz(z,10,e,s,gg)
_(a0E,tAF)
cs.pop()
_(o8E,a0E)
cs.pop()
_(c7E,o8E)
cs.push("./pages/QR_image/qrimage.wxml:view:1:360")
var eBF=_n('view')
_rz(z,eBF,'hidden',11,e,s,gg)
cs.push("./pages/QR_image/qrimage.wxml:image:1:386")
var bCF=_mz(z,'image',['class',12,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(eBF,bCF)
cs.push("./pages/QR_image/qrimage.wxml:button:1:452")
var oDF=_mz(z,'button',['bindtap',15,'data-event-opts',1,'type',2],[],e,s,gg)
var xEF=_oz(z,18,e,s,gg)
_(oDF,xEF)
cs.pop()
_(eBF,oDF)
cs.pop()
_(c7E,eBF)
cs.pop()
_(r,c7E)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
cs.push("./pages/Robot/Robot.wxml:view:1:1")
var fGF=_n('view')
_rz(z,fGF,'bind:__l',0,e,s,gg)
var cHF=_v()
_(fGF,cHF)
cs.push("./pages/Robot/Robot.wxml:block:1:22")
var hIF=function(cKF,oJF,oLF,gg){
cs.push("./pages/Robot/Robot.wxml:block:1:22")
cs.push("./pages/Robot/Robot.wxml:view:1:91")
var aNF=_n('view')
cs.push("./pages/Robot/Robot.wxml:view:1:97")
var tOF=_n('view')
_rz(z,tOF,'class',4,cKF,oJF,gg)
cs.push("./pages/Robot/Robot.wxml:text:1:162")
var ePF=_n('text')
var bQF=_oz(z,5,cKF,oJF,gg)
_(ePF,bQF)
cs.pop()
_(tOF,ePF)
cs.push("./pages/Robot/Robot.wxml:text:1:194")
var oRF=_n('text')
var xSF=_oz(z,6,cKF,oJF,gg)
_(oRF,xSF)
cs.pop()
_(tOF,oRF)
cs.pop()
_(aNF,tOF)
cs.pop()
_(oLF,aNF)
cs.pop()
return oLF
}
_wp('./pages/Robot/Robot.wxml:block:1:22: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
cHF.wxXCkey=2
_2z(z,3,hIF,e,s,gg,cHF,'item','index','')
cs.pop()
cs.push("./pages/Robot/Robot.wxml:view:1:251")
var oTF=_n('view')
_rz(z,oTF,'class',7,e,s,gg)
cs.push("./pages/Robot/Robot.wxml:input:1:272")
var fUF=_mz(z,'input',['focus',-1,'bindinput',8,'class',1,'data-event-opts',2,'placeholder',3,'value',4],[],e,s,gg)
cs.pop()
_(oTF,fUF)
cs.push("./pages/Robot/Robot.wxml:button:1:455")
var cVF=_mz(z,'button',['bindtap',13,'data-event-opts',1,'type',2],[],e,s,gg)
var hWF=_oz(z,16,e,s,gg)
_(cVF,hWF)
cs.pop()
_(oTF,cVF)
cs.pop()
_(fGF,oTF)
cs.pop()
_(r,fGF)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
cs.push("./pages/audio/audio.wxml:view:1:1")
var cYF=_n('view')
_rz(z,cYF,'bind:__l',0,e,s,gg)
cs.push("./pages/audio/audio.wxml:view:1:22")
var oZF=_n('view')
_rz(z,oZF,'class',1,e,s,gg)
cs.push("./pages/audio/audio.wxml:view:1:46")
var l1F=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
cs.push("./pages/audio/audio.wxml:audio:1:117")
var a2F=_mz(z,'audio',['controls',-1,'action',4,'author',1,'name',2,'poster',3,'src',4,'style',5],[],e,s,gg)
cs.pop()
_(l1F,a2F)
cs.pop()
_(oZF,l1F)
cs.pop()
_(cYF,oZF)
cs.push("./pages/audio/audio.wxml:button:1:307")
var t3F=_mz(z,'button',['bindtap',10,'data-event-opts',1,'type',2],[],e,s,gg)
var e4F=_oz(z,13,e,s,gg)
_(t3F,e4F)
cs.pop()
_(cYF,t3F)
cs.push("./pages/audio/audio.wxml:button:1:424")
var b5F=_mz(z,'button',['bindtap',14,'data-event-opts',1,'type',2],[],e,s,gg)
var o6F=_oz(z,17,e,s,gg)
_(b5F,o6F)
cs.pop()
_(cYF,b5F)
cs.pop()
_(r,cYF)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
cs.push("./pages/cnblogs/cnblogs.wxml:view:1:1")
var o8F=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
var f9F=_v()
_(o8F,f9F)
cs.push("./pages/cnblogs/cnblogs.wxml:block:1:38")
var c0F=function(oBG,hAG,cCG,gg){
cs.push("./pages/cnblogs/cnblogs.wxml:block:1:38")
cs.push("./pages/cnblogs/cnblogs.wxml:view:1:108")
var lEG=_n('view')
_rz(z,lEG,'class',5,oBG,hAG,gg)
cs.push("./pages/cnblogs/cnblogs.wxml:navigator:1:131")
var aFG=_mz(z,'navigator',['hoverClass',6,'url',1],[],oBG,hAG,gg)
cs.push("./pages/cnblogs/cnblogs.wxml:view:1:234")
var tGG=_n('view')
_rz(z,tGG,'class',8,oBG,hAG,gg)
cs.push("./pages/cnblogs/cnblogs.wxml:text:1:252")
var eHG=_n('text')
_rz(z,eHG,'class',9,oBG,hAG,gg)
var bIG=_oz(z,10,oBG,hAG,gg)
_(eHG,bIG)
cs.pop()
_(tGG,eHG)
cs.pop()
_(aFG,tGG)
cs.push("./pages/cnblogs/cnblogs.wxml:view:1:318")
var oJG=_n('view')
_rz(z,oJG,'class',11,oBG,hAG,gg)
cs.push("./pages/cnblogs/cnblogs.wxml:view:1:336")
var xKG=_mz(z,'view',['class',12,'hidden',1],[],oBG,hAG,gg)
cs.push("./pages/cnblogs/cnblogs.wxml:text:1:399")
var oLG=_n('text')
_rz(z,oLG,'class',14,oBG,hAG,gg)
var fMG=_oz(z,15,oBG,hAG,gg)
_(oLG,fMG)
cs.pop()
_(xKG,oLG)
cs.pop()
_(oJG,xKG)
cs.push("./pages/cnblogs/cnblogs.wxml:view:1:460")
var cNG=_mz(z,'view',['class',16,'hidden',1],[],oBG,hAG,gg)
cs.push("./pages/cnblogs/cnblogs.wxml:text:1:527")
var hOG=_n('text')
_rz(z,hOG,'class',18,oBG,hAG,gg)
var oPG=_oz(z,19,oBG,hAG,gg)
_(hOG,oPG)
cs.pop()
_(cNG,hOG)
cs.pop()
_(oJG,cNG)
cs.push("./pages/cnblogs/cnblogs.wxml:view:1:588")
var cQG=_mz(z,'view',['class',20,'hidden',1],[],oBG,hAG,gg)
cs.push("./pages/cnblogs/cnblogs.wxml:image:1:651")
var oRG=_mz(z,'image',['binderror',22,'class',1,'data-event-opts',2,'mode',3,'src',4,'style',5],[],oBG,hAG,gg)
cs.pop()
_(cQG,oRG)
cs.pop()
_(oJG,cQG)
cs.pop()
_(aFG,oJG)
cs.push("./pages/cnblogs/cnblogs.wxml:view:1:842")
var lSG=_n('view')
_rz(z,lSG,'style',28,oBG,hAG,gg)
cs.push("./pages/cnblogs/cnblogs.wxml:text:1:896")
var aTG=_n('text')
var tUG=_oz(z,29,oBG,hAG,gg)
_(aTG,tUG)
cs.pop()
_(lSG,aTG)
cs.push("./pages/cnblogs/cnblogs.wxml:text:1:920")
var eVG=_n('text')
_rz(z,eVG,'style',30,oBG,hAG,gg)
var bWG=_oz(z,31,oBG,hAG,gg)
_(eVG,bWG)
cs.pop()
_(lSG,eVG)
cs.push("./pages/cnblogs/cnblogs.wxml:text:1:986")
var oXG=_n('text')
_rz(z,oXG,'style',32,oBG,hAG,gg)
var xYG=_oz(z,33,oBG,hAG,gg)
_(oXG,xYG)
cs.pop()
_(lSG,oXG)
cs.pop()
_(aFG,lSG)
cs.pop()
_(lEG,aFG)
cs.pop()
_(cCG,lEG)
cs.pop()
return cCG
}
_wp('./pages/cnblogs/cnblogs.wxml:block:1:38: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
f9F.wxXCkey=2
_2z(z,4,c0F,e,s,gg,f9F,'item','__i0__','')
cs.pop()
cs.push("./pages/cnblogs/cnblogs.wxml:view:1:1105")
var oZG=_n('view')
_rz(z,oZG,'class',34,e,s,gg)
var f1G=_oz(z,35,e,s,gg)
_(oZG,f1G)
cs.pop()
_(o8F,oZG)
cs.push("./pages/cnblogs/cnblogs.wxml:loding:1:1149")
var c2G=_n('loding')
cs.pop()
_(o8F,c2G)
cs.pop()
_(r,o8F)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
cs.push("./pages/content_body/content_body.wxml:view:1:1")
var o4G=_n('view')
_rz(z,o4G,'bind:__l',0,e,s,gg)
cs.push("./pages/content_body/content_body.wxml:view:1:22")
var c5G=_n('view')
_rz(z,c5G,'class',1,e,s,gg)
cs.push("./pages/content_body/content_body.wxml:view:1:50")
var o6G=_n('view')
_rz(z,o6G,'class',2,e,s,gg)
cs.push("./pages/content_body/content_body.wxml:view:1:85")
var l7G=_n('view')
_rz(z,l7G,'class',3,e,s,gg)
cs.push("./pages/content_body/content_body.wxml:text:1:118")
var a8G=_n('text')
var t9G=_oz(z,4,e,s,gg)
_(a8G,t9G)
cs.pop()
_(l7G,a8G)
cs.pop()
_(o6G,l7G)
cs.push("./pages/content_body/content_body.wxml:view:1:156")
var e0G=_n('view')
_rz(z,e0G,'style',5,e,s,gg)
cs.push("./pages/content_body/content_body.wxml:text:1:195")
var bAH=_n('text')
_rz(z,bAH,'style',6,e,s,gg)
var oBH=_oz(z,7,e,s,gg)
_(bAH,oBH)
cs.pop()
_(e0G,bAH)
cs.push("./pages/content_body/content_body.wxml:text:1:251")
var xCH=_n('text')
_rz(z,xCH,'style',8,e,s,gg)
var oDH=_oz(z,9,e,s,gg)
_(xCH,oDH)
cs.pop()
_(e0G,xCH)
cs.pop()
_(o6G,e0G)
cs.pop()
_(c5G,o6G)
cs.push("./pages/content_body/content_body.wxml:view:1:322")
var fEH=_n('view')
_rz(z,fEH,'class',10,e,s,gg)
cs.push("./pages/content_body/content_body.wxml:rich-text:1:350")
var cFH=_n('rich-text')
_rz(z,cFH,'nodes',11,e,s,gg)
cs.pop()
_(fEH,cFH)
cs.pop()
_(c5G,fEH)
cs.pop()
_(o4G,c5G)
cs.push("./pages/content_body/content_body.wxml:view:1:408")
var hGH=_n('view')
cs.push("./pages/content_body/content_body.wxml:loding:1:414")
var oHH=_n('loding')
cs.pop()
_(hGH,oHH)
cs.pop()
_(o4G,hGH)
cs.pop()
_(r,o4G)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
cs.push("./pages/getuser/getuser.wxml:view:1:1")
var oJH=_n('view')
_rz(z,oJH,'bind:__l',0,e,s,gg)
cs.push("./pages/getuser/getuser.wxml:page-head:1:22")
var lKH=_n('page-head')
_rz(z,lKH,'title',1,e,s,gg)
cs.pop()
_(oJH,lKH)
cs.push("./pages/getuser/getuser.wxml:view:1:63")
var aLH=_n('view')
_rz(z,aLH,'class',2,e,s,gg)
cs.push("./pages/getuser/getuser.wxml:view:1:94")
var tMH=_n('view')
_rz(z,tMH,'style',3,e,s,gg)
var eNH=_v()
_(tMH,eNH)
if(_oz(z,4,e,s,gg)){eNH.wxVkey=1
cs.push("./pages/getuser/getuser.wxml:block:1:139")
cs.push("./pages/getuser/getuser.wxml:block:1:178")
cs.push("./pages/getuser/getuser.wxml:view:1:185")
var oPH=_n('view')
_rz(z,oPH,'class',5,e,s,gg)
cs.push("./pages/getuser/getuser.wxml:text:1:225")
var xQH=_n('text')
var oRH=_oz(z,6,e,s,gg)
_(xQH,oRH)
cs.pop()
_(oPH,xQH)
cs.pop()
_(eNH,oPH)
cs.pop()
cs.pop()
}
var bOH=_v()
_(tMH,bOH)
if(_oz(z,7,e,s,gg)){bOH.wxVkey=1
cs.push("./pages/getuser/getuser.wxml:block:1:309")
cs.push("./pages/getuser/getuser.wxml:block:1:347")
cs.push("./pages/getuser/getuser.wxml:view:1:354")
var fSH=_n('view')
_rz(z,fSH,'class',8,e,s,gg)
var cTH=_oz(z,9,e,s,gg)
_(fSH,cTH)
cs.pop()
_(bOH,fSH)
cs.push("./pages/getuser/getuser.wxml:view:1:428")
var hUH=_n('view')
_rz(z,hUH,'style',10,e,s,gg)
cs.push("./pages/getuser/getuser.wxml:image:1:477")
var oVH=_mz(z,'image',['class',11,'src',1],[],e,s,gg)
cs.pop()
_(hUH,oVH)
cs.pop()
_(bOH,hUH)
cs.pop()
cs.pop()
}
eNH.wxXCkey=1
bOH.wxXCkey=1
cs.pop()
_(aLH,tMH)
cs.push("./pages/getuser/getuser.wxml:view:1:575")
var cWH=_n('view')
_rz(z,cWH,'class',13,e,s,gg)
cs.push("./pages/getuser/getuser.wxml:button:1:599")
var oXH=_mz(z,'button',['bindtap',14,'data-event-opts',1,'type',2],[],e,s,gg)
var lYH=_oz(z,17,e,s,gg)
_(oXH,lYH)
cs.pop()
_(cWH,oXH)
cs.push("./pages/getuser/getuser.wxml:button:1:724")
var aZH=_mz(z,'button',['bindtap',18,'data-event-opts',1],[],e,s,gg)
var t1H=_oz(z,20,e,s,gg)
_(aZH,t1H)
cs.pop()
_(cWH,aZH)
cs.pop()
_(aLH,cWH)
cs.pop()
_(oJH,aLH)
cs.pop()
_(r,oJH)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
cs.push("./pages/image_recognition/Animal_recognition.wxml:view:1:1")
var b3H=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/image_recognition/Animal_recognition.wxml:button:1:38")
var o4H=_mz(z,'button',['bindtap',2,'data-event-opts',1],[],e,s,gg)
var x5H=_oz(z,4,e,s,gg)
_(o4H,x5H)
cs.pop()
_(b3H,o4H)
cs.push("./pages/image_recognition/Animal_recognition.wxml:cpimg:1:139")
var o6H=_mz(z,'cpimg',['bind:err',5,'bind:result',1,'class',2,'data-event-opts',3,'data-ref',4,'maxWidth',5,'ql',6,'size',7,'type',8],[],e,s,gg)
cs.pop()
_(b3H,o6H)
cs.push("./pages/image_recognition/Animal_recognition.wxml:view:1:356")
var f7H=_n('view')
_rz(z,f7H,'class',14,e,s,gg)
cs.push("./pages/image_recognition/Animal_recognition.wxml:image:1:374")
var c8H=_mz(z,'image',['class',15,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(f7H,c8H)
cs.pop()
_(b3H,f7H)
cs.push("./pages/image_recognition/Animal_recognition.wxml:view:1:443")
var h9H=_n('view')
_rz(z,h9H,'class',18,e,s,gg)
var o0H=_v()
_(h9H,o0H)
cs.push("./pages/image_recognition/Animal_recognition.wxml:block:1:465")
var cAI=function(lCI,oBI,aDI,gg){
cs.push("./pages/image_recognition/Animal_recognition.wxml:block:1:465")
cs.push("./pages/image_recognition/Animal_recognition.wxml:view:1:538")
var eFI=_n('view')
_rz(z,eFI,'class',22,lCI,oBI,gg)
cs.push("./pages/image_recognition/Animal_recognition.wxml:navigator:1:559")
var bGI=_n('navigator')
_rz(z,bGI,'url',23,lCI,oBI,gg)
var oHI=_oz(z,24,lCI,oBI,gg)
_(bGI,oHI)
cs.pop()
_(eFI,bGI)
cs.push("./pages/image_recognition/Animal_recognition.wxml:view:1:630")
var xII=_n('view')
_rz(z,xII,'class',25,lCI,oBI,gg)
cs.push("./pages/image_recognition/Animal_recognition.wxml:text:1:657")
var oJI=_n('text')
var fKI=_oz(z,26,lCI,oBI,gg)
_(oJI,fKI)
cs.pop()
_(xII,oJI)
cs.push("./pages/image_recognition/Animal_recognition.wxml:text:1:693")
var cLI=_n('text')
_rz(z,cLI,'style',27,lCI,oBI,gg)
cs.pop()
_(xII,cLI)
cs.pop()
_(eFI,xII)
cs.push("./pages/image_recognition/Animal_recognition.wxml:view:1:734")
var hMI=_n('view')
_rz(z,hMI,'class',28,lCI,oBI,gg)
var oNI=_oz(z,29,lCI,oBI,gg)
_(hMI,oNI)
cs.pop()
_(eFI,hMI)
cs.push("./pages/image_recognition/Animal_recognition.wxml:view:1:805")
var cOI=_n('view')
cs.push("./pages/image_recognition/Animal_recognition.wxml:image:1:811")
var oPI=_mz(z,'image',['mode',-1,'src',30,'style',1],[],lCI,oBI,gg)
cs.pop()
_(cOI,oPI)
cs.pop()
_(eFI,cOI)
cs.pop()
_(aDI,eFI)
cs.pop()
return aDI
}
_wp('./pages/image_recognition/Animal_recognition.wxml:block:1:465: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
o0H.wxXCkey=2
_2z(z,21,cAI,e,s,gg,o0H,'item','__i0__','')
cs.pop()
cs.pop()
_(b3H,h9H)
cs.pop()
_(r,b3H)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
cs.push("./pages/image_recognition/Botany.wxml:view:1:1")
var aRI=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/image_recognition/Botany.wxml:button:1:38")
var tSI=_mz(z,'button',['bindtap',2,'data-event-opts',1],[],e,s,gg)
var eTI=_oz(z,4,e,s,gg)
_(tSI,eTI)
cs.pop()
_(aRI,tSI)
cs.push("./pages/image_recognition/Botany.wxml:cpimg:1:139")
var bUI=_mz(z,'cpimg',['bind:err',5,'bind:result',1,'class',2,'data-event-opts',3,'data-ref',4,'maxWidth',5,'ql',6,'size',7,'type',8],[],e,s,gg)
cs.pop()
_(aRI,bUI)
cs.push("./pages/image_recognition/Botany.wxml:view:1:356")
var oVI=_n('view')
_rz(z,oVI,'class',14,e,s,gg)
cs.push("./pages/image_recognition/Botany.wxml:image:1:374")
var xWI=_mz(z,'image',['class',15,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(oVI,xWI)
cs.pop()
_(aRI,oVI)
cs.push("./pages/image_recognition/Botany.wxml:view:1:443")
var oXI=_n('view')
_rz(z,oXI,'class',18,e,s,gg)
var fYI=_v()
_(oXI,fYI)
cs.push("./pages/image_recognition/Botany.wxml:block:1:465")
var cZI=function(o2I,h1I,c3I,gg){
cs.push("./pages/image_recognition/Botany.wxml:block:1:465")
cs.push("./pages/image_recognition/Botany.wxml:view:1:538")
var l5I=_n('view')
_rz(z,l5I,'class',22,o2I,h1I,gg)
cs.push("./pages/image_recognition/Botany.wxml:navigator:1:559")
var a6I=_n('navigator')
_rz(z,a6I,'url',23,o2I,h1I,gg)
var t7I=_oz(z,24,o2I,h1I,gg)
_(a6I,t7I)
cs.pop()
_(l5I,a6I)
cs.push("./pages/image_recognition/Botany.wxml:view:1:630")
var e8I=_n('view')
_rz(z,e8I,'class',25,o2I,h1I,gg)
cs.push("./pages/image_recognition/Botany.wxml:text:1:657")
var b9I=_n('text')
var o0I=_oz(z,26,o2I,h1I,gg)
_(b9I,o0I)
cs.pop()
_(e8I,b9I)
cs.push("./pages/image_recognition/Botany.wxml:text:1:693")
var xAJ=_n('text')
_rz(z,xAJ,'style',27,o2I,h1I,gg)
cs.pop()
_(e8I,xAJ)
cs.pop()
_(l5I,e8I)
cs.push("./pages/image_recognition/Botany.wxml:view:1:734")
var oBJ=_n('view')
_rz(z,oBJ,'class',28,o2I,h1I,gg)
var fCJ=_oz(z,29,o2I,h1I,gg)
_(oBJ,fCJ)
cs.pop()
_(l5I,oBJ)
cs.push("./pages/image_recognition/Botany.wxml:view:1:805")
var cDJ=_n('view')
cs.push("./pages/image_recognition/Botany.wxml:image:1:811")
var hEJ=_mz(z,'image',['mode',-1,'src',30,'style',1],[],o2I,h1I,gg)
cs.pop()
_(cDJ,hEJ)
cs.pop()
_(l5I,cDJ)
cs.pop()
_(c3I,l5I)
cs.pop()
return c3I
}
_wp('./pages/image_recognition/Botany.wxml:block:1:465: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
fYI.wxXCkey=2
_2z(z,21,cZI,e,s,gg,fYI,'item','__i0__','')
cs.pop()
cs.pop()
_(aRI,oXI)
cs.pop()
_(r,aRI)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
cs.push("./pages/image_recognition/Dish_recognition.wxml:view:1:1")
var cGJ=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/image_recognition/Dish_recognition.wxml:button:1:38")
var oHJ=_mz(z,'button',['bindtap',2,'data-event-opts',1],[],e,s,gg)
var lIJ=_oz(z,4,e,s,gg)
_(oHJ,lIJ)
cs.pop()
_(cGJ,oHJ)
cs.push("./pages/image_recognition/Dish_recognition.wxml:cpimg:1:139")
var aJJ=_mz(z,'cpimg',['bind:err',5,'bind:result',1,'class',2,'data-event-opts',3,'data-ref',4,'maxWidth',5,'ql',6,'size',7,'type',8],[],e,s,gg)
cs.pop()
_(cGJ,aJJ)
cs.push("./pages/image_recognition/Dish_recognition.wxml:view:1:356")
var tKJ=_n('view')
_rz(z,tKJ,'class',14,e,s,gg)
cs.push("./pages/image_recognition/Dish_recognition.wxml:image:1:374")
var eLJ=_mz(z,'image',['class',15,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(tKJ,eLJ)
cs.pop()
_(cGJ,tKJ)
cs.push("./pages/image_recognition/Dish_recognition.wxml:view:1:443")
var bMJ=_n('view')
_rz(z,bMJ,'class',18,e,s,gg)
var oNJ=_v()
_(bMJ,oNJ)
cs.push("./pages/image_recognition/Dish_recognition.wxml:block:1:465")
var xOJ=function(fQJ,oPJ,cRJ,gg){
cs.push("./pages/image_recognition/Dish_recognition.wxml:block:1:465")
cs.push("./pages/image_recognition/Dish_recognition.wxml:view:1:538")
var oTJ=_n('view')
_rz(z,oTJ,'class',22,fQJ,oPJ,gg)
cs.push("./pages/image_recognition/Dish_recognition.wxml:navigator:1:559")
var cUJ=_n('navigator')
_rz(z,cUJ,'url',23,fQJ,oPJ,gg)
var oVJ=_oz(z,24,fQJ,oPJ,gg)
_(cUJ,oVJ)
cs.pop()
_(oTJ,cUJ)
cs.push("./pages/image_recognition/Dish_recognition.wxml:view:1:630")
var lWJ=_n('view')
_rz(z,lWJ,'class',25,fQJ,oPJ,gg)
cs.push("./pages/image_recognition/Dish_recognition.wxml:text:1:657")
var aXJ=_n('text')
var tYJ=_oz(z,26,fQJ,oPJ,gg)
_(aXJ,tYJ)
cs.pop()
_(lWJ,aXJ)
cs.push("./pages/image_recognition/Dish_recognition.wxml:text:1:693")
var eZJ=_n('text')
_rz(z,eZJ,'style',27,fQJ,oPJ,gg)
var b1J=_oz(z,28,fQJ,oPJ,gg)
_(eZJ,b1J)
cs.pop()
_(lWJ,eZJ)
cs.pop()
_(oTJ,lWJ)
cs.push("./pages/image_recognition/Dish_recognition.wxml:view:1:769")
var o2J=_n('view')
_rz(z,o2J,'class',29,fQJ,oPJ,gg)
var x3J=_oz(z,30,fQJ,oPJ,gg)
_(o2J,x3J)
cs.pop()
_(oTJ,o2J)
cs.push("./pages/image_recognition/Dish_recognition.wxml:view:1:840")
var o4J=_n('view')
cs.push("./pages/image_recognition/Dish_recognition.wxml:image:1:846")
var f5J=_mz(z,'image',['mode',-1,'src',31,'style',1],[],fQJ,oPJ,gg)
cs.pop()
_(o4J,f5J)
cs.pop()
_(oTJ,o4J)
cs.pop()
_(cRJ,oTJ)
cs.pop()
return cRJ
}
_wp('./pages/image_recognition/Dish_recognition.wxml:block:1:465: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
oNJ.wxXCkey=2
_2z(z,21,xOJ,e,s,gg,oNJ,'item','__i0__','')
cs.pop()
cs.pop()
_(cGJ,bMJ)
cs.pop()
_(r,cGJ)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:view:1:1")
var h7J=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:button:1:38")
var o8J=_mz(z,'button',['bindtap',2,'data-event-opts',1],[],e,s,gg)
var c9J=_oz(z,4,e,s,gg)
_(o8J,c9J)
cs.pop()
_(h7J,o8J)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:cpimg:1:139")
var o0J=_mz(z,'cpimg',['bind:err',5,'bind:result',1,'class',2,'data-event-opts',3,'data-ref',4,'maxWidth',5,'ql',6,'size',7,'type',8],[],e,s,gg)
cs.pop()
_(h7J,o0J)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:view:1:356")
var lAK=_n('view')
_rz(z,lAK,'class',14,e,s,gg)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:image:1:374")
var aBK=_mz(z,'image',['class',15,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(lAK,aBK)
cs.pop()
_(h7J,lAK)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:view:1:443")
var tCK=_n('view')
_rz(z,tCK,'class',18,e,s,gg)
var eDK=_v()
_(tCK,eDK)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:block:1:465")
var bEK=function(xGK,oFK,oHK,gg){
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:block:1:465")
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:view:1:535")
var cJK=_n('view')
_rz(z,cJK,'class',22,xGK,oFK,gg)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:navigator:1:556")
var hKK=_n('navigator')
_rz(z,hKK,'url',23,xGK,oFK,gg)
var oLK=_oz(z,24,xGK,oFK,gg)
_(hKK,oLK)
cs.pop()
_(cJK,hKK)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:view:1:633")
var cMK=_n('view')
_rz(z,cMK,'class',25,xGK,oFK,gg)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:text:1:660")
var oNK=_n('text')
var lOK=_oz(z,26,xGK,oFK,gg)
_(oNK,lOK)
cs.pop()
_(cMK,oNK)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:text:1:702")
var aPK=_n('text')
_rz(z,aPK,'style',27,xGK,oFK,gg)
var tQK=_oz(z,28,xGK,oFK,gg)
_(aPK,tQK)
cs.pop()
_(cMK,aPK)
cs.pop()
_(cJK,cMK)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:view:1:766")
var eRK=_n('view')
_rz(z,eRK,'class',29,xGK,oFK,gg)
var bSK=_oz(z,30,xGK,oFK,gg)
_(eRK,bSK)
cs.pop()
_(cJK,eRK)
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:view:1:843")
var oTK=_n('view')
cs.push("./pages/image_recognition/Vehicle_type_recognition.wxml:image:1:849")
var xUK=_mz(z,'image',['mode',-1,'src',31,'style',1],[],xGK,oFK,gg)
cs.pop()
_(oTK,xUK)
cs.pop()
_(cJK,oTK)
cs.pop()
_(oHK,cJK)
cs.pop()
return oHK
}
_wp('./pages/image_recognition/Vehicle_type_recognition.wxml:block:1:465: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
eDK.wxXCkey=2
_2z(z,21,bEK,e,s,gg,eDK,'item','__i0__','')
cs.pop()
cs.pop()
_(h7J,tCK)
cs.pop()
_(r,h7J)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
cs.push("./pages/index/index.wxml:view:1:1")
var fWK=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
var cXK=_v()
_(fWK,cXK)
cs.push("./pages/index/index.wxml:block:1:38")
var hYK=function(c1K,oZK,o2K,gg){
cs.push("./pages/index/index.wxml:block:1:38")
cs.push("./pages/index/index.wxml:view:1:108")
var a4K=_n('view')
cs.push("./pages/index/index.wxml:navigator:1:114")
var t5K=_mz(z,'navigator',['hoverClass',5,'url',1],[],c1K,oZK,gg)
cs.push("./pages/index/index.wxml:view:1:206")
var e6K=_n('view')
_rz(z,e6K,'class',7,c1K,oZK,gg)
cs.push("./pages/index/index.wxml:view:1:224")
var b7K=_n('view')
_rz(z,b7K,'class',8,c1K,oZK,gg)
cs.push("./pages/index/index.wxml:view:1:247")
var o8K=_n('view')
_rz(z,o8K,'class',9,c1K,oZK,gg)
cs.push("./pages/index/index.wxml:view:1:268")
var x9K=_n('view')
_rz(z,x9K,'class',10,c1K,oZK,gg)
cs.push("./pages/index/index.wxml:text:1:295")
var o0K=_n('text')
var fAL=_oz(z,11,c1K,oZK,gg)
_(o0K,fAL)
cs.pop()
_(x9K,o0K)
cs.pop()
_(o8K,x9K)
cs.push("./pages/index/index.wxml:view:1:335")
var cBL=_n('view')
_rz(z,cBL,'class',12,c1K,oZK,gg)
cs.push("./pages/index/index.wxml:text:1:368")
var hCL=_n('text')
var oDL=_oz(z,13,c1K,oZK,gg)
_(hCL,oDL)
cs.pop()
_(cBL,hCL)
cs.pop()
_(o8K,cBL)
cs.pop()
_(b7K,o8K)
cs.pop()
_(e6K,b7K)
cs.push("./pages/index/index.wxml:view:1:413")
var cEL=_n('view')
_rz(z,cEL,'class',14,c1K,oZK,gg)
cs.push("./pages/index/index.wxml:image:1:436")
var oFL=_mz(z,'image',['binderror',15,'class',1,'data-event-opts',2,'mode',3,'src',4,'style',5],[],c1K,oZK,gg)
cs.pop()
_(cEL,oFL)
cs.pop()
_(e6K,cEL)
cs.pop()
_(t5K,e6K)
cs.pop()
_(a4K,t5K)
cs.pop()
_(o2K,a4K)
cs.pop()
return o2K
}
_wp('./pages/index/index.wxml:block:1:38: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
cXK.wxXCkey=2
_2z(z,4,hYK,e,s,gg,cXK,'item','__i0__','')
cs.pop()
cs.pop()
_(r,fWK)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
cs.push("./pages/markdown/markdown.wxml:view:1:1")
var aHL=_n('view')
_rz(z,aHL,'bind:__l',0,e,s,gg)
cs.push("./pages/markdown/markdown.wxml:view:1:22")
var tIL=_n('view')
_rz(z,tIL,'class',1,e,s,gg)
cs.push("./pages/markdown/markdown.wxml:image:1:50")
var eJL=_mz(z,'image',['alt',-1,'class',2,'src',1,'width',2],[],e,s,gg)
cs.pop()
_(tIL,eJL)
cs.push("./pages/markdown/markdown.wxml:view:1:139")
var bKL=_n('view')
_rz(z,bKL,'class',5,e,s,gg)
cs.push("./pages/markdown/markdown.wxml:rich-text:1:167")
var oLL=_n('rich-text')
_rz(z,oLL,'nodes',6,e,s,gg)
cs.pop()
_(bKL,oLL)
cs.pop()
_(tIL,bKL)
cs.pop()
_(aHL,tIL)
cs.push("./pages/markdown/markdown.wxml:view:1:225")
var xML=_n('view')
cs.push("./pages/markdown/markdown.wxml:loding:1:231")
var oNL=_n('loding')
cs.pop()
_(xML,oNL)
cs.pop()
_(aHL,xML)
cs.pop()
_(r,aHL)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
cs.push("./pages/tabar/tabar.wxml:view:1:1")
var cPL=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/tabar/tabar.wxml:scroll-view:1:38")
var hQL=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollX',-1,'class',2,'id',1,'scrollLeft',2],[],e,s,gg)
var oRL=_v()
_(hQL,oRL)
cs.push("./pages/tabar/tabar.wxml:block:1:140")
var cSL=function(lUL,oTL,aVL,gg){
cs.push("./pages/tabar/tabar.wxml:block:1:140")
cs.push("./pages/tabar/tabar.wxml:view:1:220")
var eXL=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2,'id',3],[],lUL,oTL,gg)
var bYL=_oz(z,13,lUL,oTL,gg)
_(eXL,bYL)
cs.pop()
_(aVL,eXL)
cs.pop()
return aVL
}
oRL.wxXCkey=2
_2z(z,7,cSL,e,s,gg,oRL,'item','index','id')
cs.pop()
cs.pop()
_(cPL,hQL)
cs.push("./pages/tabar/tabar.wxml:mix-pulldown-refresh:1:423")
var oZL=_mz(z,'mix-pulldown-refresh',['bind:refresh',14,'bind:setEnableScroll',1,'class',2,'data-event-opts',3,'data-ref',4,'top',5,'vueSlots',6],[],e,s,gg)
cs.push("./pages/tabar/tabar.wxml:swiper:1:695")
var x1L=_mz(z,'swiper',['bindchange',21,'class',1,'current',2,'data-event-opts',3,'duration',4,'id',5],[],e,s,gg)
cs.push("./pages/tabar/tabar.wxml:swiper-item:1:862")
var o2L=_n('swiper-item')
cs.push("./pages/tabar/tabar.wxml:scroll-view:1:875")
var f3L=_mz(z,'scroll-view',['bindscrolltolower',27,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var c4L=_v()
_(f3L,c4L)
cs.push("./pages/tabar/tabar.wxml:block:1:1033")
var h5L=function(c7L,o6L,o8L,gg){
cs.push("./pages/tabar/tabar.wxml:block:1:1033")
cs.push("./pages/tabar/tabar.wxml:view:1:1103")
var a0L=_n('view')
_rz(z,a0L,'class',34,c7L,o6L,gg)
cs.push("./pages/tabar/tabar.wxml:navigator:1:1126")
var tAM=_mz(z,'navigator',['hoverClass',35,'url',1],[],c7L,o6L,gg)
cs.push("./pages/tabar/tabar.wxml:view:1:1229")
var eBM=_n('view')
_rz(z,eBM,'class',37,c7L,o6L,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:1247")
var bCM=_n('text')
_rz(z,bCM,'class',38,c7L,o6L,gg)
var oDM=_oz(z,39,c7L,o6L,gg)
_(bCM,oDM)
cs.pop()
_(eBM,bCM)
cs.pop()
_(tAM,eBM)
cs.push("./pages/tabar/tabar.wxml:view:1:1313")
var xEM=_n('view')
_rz(z,xEM,'class',40,c7L,o6L,gg)
cs.push("./pages/tabar/tabar.wxml:view:1:1331")
var oFM=_mz(z,'view',['class',41,'hidden',1],[],c7L,o6L,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:1394")
var fGM=_n('text')
_rz(z,fGM,'class',43,c7L,o6L,gg)
var cHM=_oz(z,44,c7L,o6L,gg)
_(fGM,cHM)
cs.pop()
_(oFM,fGM)
cs.pop()
_(xEM,oFM)
cs.push("./pages/tabar/tabar.wxml:view:1:1455")
var hIM=_mz(z,'view',['class',45,'hidden',1],[],c7L,o6L,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:1522")
var oJM=_n('text')
_rz(z,oJM,'class',47,c7L,o6L,gg)
var cKM=_oz(z,48,c7L,o6L,gg)
_(oJM,cKM)
cs.pop()
_(hIM,oJM)
cs.pop()
_(xEM,hIM)
cs.push("./pages/tabar/tabar.wxml:view:1:1583")
var oLM=_mz(z,'view',['class',49,'hidden',1],[],c7L,o6L,gg)
cs.push("./pages/tabar/tabar.wxml:image:1:1646")
var lMM=_mz(z,'image',['binderror',51,'class',1,'data-event-opts',2,'mode',3,'src',4,'style',5],[],c7L,o6L,gg)
cs.pop()
_(oLM,lMM)
cs.pop()
_(xEM,oLM)
cs.pop()
_(tAM,xEM)
cs.push("./pages/tabar/tabar.wxml:view:1:1837")
var aNM=_n('view')
_rz(z,aNM,'style',57,c7L,o6L,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:1891")
var tOM=_n('text')
var ePM=_oz(z,58,c7L,o6L,gg)
_(tOM,ePM)
cs.push("./pages/tabar/tabar.wxml:text:1:1908")
var bQM=_n('text')
_rz(z,bQM,'style',59,c7L,o6L,gg)
var oRM=_oz(z,60,c7L,o6L,gg)
_(bQM,oRM)
cs.pop()
_(tOM,bQM)
cs.push("./pages/tabar/tabar.wxml:text:1:1974")
var xSM=_n('text')
_rz(z,xSM,'style',61,c7L,o6L,gg)
var oTM=_oz(z,62,c7L,o6L,gg)
_(xSM,oTM)
cs.pop()
_(tOM,xSM)
cs.pop()
_(aNM,tOM)
cs.pop()
_(tAM,aNM)
cs.pop()
_(a0L,tAM)
cs.pop()
_(o8L,a0L)
cs.pop()
return o8L
}
_wp('./pages/tabar/tabar.wxml:block:1:1033: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
c4L.wxXCkey=2
_2z(z,33,h5L,e,s,gg,c4L,'item','__i0__','')
cs.pop()
cs.push("./pages/tabar/tabar.wxml:mix-load-more:1:2100")
var fUM=_n('mix-load-more')
_rz(z,fUM,'status',63,e,s,gg)
cs.pop()
_(f3L,fUM)
cs.pop()
_(o2L,f3L)
cs.pop()
_(x1L,o2L)
cs.push("./pages/tabar/tabar.wxml:swiper-item:1:2195")
var cVM=_n('swiper-item')
cs.push("./pages/tabar/tabar.wxml:scroll-view:1:2208")
var hWM=_mz(z,'scroll-view',['bindscrolltolower',64,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var oXM=_v()
_(hWM,oXM)
cs.push("./pages/tabar/tabar.wxml:block:1:2366")
var cYM=function(l1M,oZM,a2M,gg){
cs.push("./pages/tabar/tabar.wxml:block:1:2366")
cs.push("./pages/tabar/tabar.wxml:view:1:2436")
var e4M=_n('view')
_rz(z,e4M,'class',71,l1M,oZM,gg)
cs.push("./pages/tabar/tabar.wxml:navigator:1:2459")
var b5M=_mz(z,'navigator',['hoverClass',72,'url',1],[],l1M,oZM,gg)
cs.push("./pages/tabar/tabar.wxml:view:1:2562")
var o6M=_n('view')
_rz(z,o6M,'class',74,l1M,oZM,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:2580")
var x7M=_n('text')
_rz(z,x7M,'class',75,l1M,oZM,gg)
var o8M=_oz(z,76,l1M,oZM,gg)
_(x7M,o8M)
cs.pop()
_(o6M,x7M)
cs.pop()
_(b5M,o6M)
cs.push("./pages/tabar/tabar.wxml:view:1:2646")
var f9M=_n('view')
_rz(z,f9M,'class',77,l1M,oZM,gg)
cs.push("./pages/tabar/tabar.wxml:view:1:2664")
var c0M=_mz(z,'view',['class',78,'hidden',1],[],l1M,oZM,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:2727")
var hAN=_n('text')
_rz(z,hAN,'class',80,l1M,oZM,gg)
var oBN=_oz(z,81,l1M,oZM,gg)
_(hAN,oBN)
cs.pop()
_(c0M,hAN)
cs.pop()
_(f9M,c0M)
cs.push("./pages/tabar/tabar.wxml:view:1:2788")
var cCN=_mz(z,'view',['class',82,'hidden',1],[],l1M,oZM,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:2855")
var oDN=_n('text')
_rz(z,oDN,'class',84,l1M,oZM,gg)
var lEN=_oz(z,85,l1M,oZM,gg)
_(oDN,lEN)
cs.pop()
_(cCN,oDN)
cs.pop()
_(f9M,cCN)
cs.push("./pages/tabar/tabar.wxml:view:1:2916")
var aFN=_mz(z,'view',['class',86,'hidden',1],[],l1M,oZM,gg)
cs.push("./pages/tabar/tabar.wxml:image:1:2979")
var tGN=_mz(z,'image',['binderror',88,'class',1,'data-event-opts',2,'mode',3,'src',4,'style',5],[],l1M,oZM,gg)
cs.pop()
_(aFN,tGN)
cs.pop()
_(f9M,aFN)
cs.pop()
_(b5M,f9M)
cs.push("./pages/tabar/tabar.wxml:view:1:3170")
var eHN=_n('view')
_rz(z,eHN,'style',94,l1M,oZM,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:3224")
var bIN=_n('text')
var oJN=_oz(z,95,l1M,oZM,gg)
_(bIN,oJN)
cs.push("./pages/tabar/tabar.wxml:text:1:3241")
var xKN=_n('text')
_rz(z,xKN,'style',96,l1M,oZM,gg)
var oLN=_oz(z,97,l1M,oZM,gg)
_(xKN,oLN)
cs.pop()
_(bIN,xKN)
cs.push("./pages/tabar/tabar.wxml:text:1:3307")
var fMN=_n('text')
_rz(z,fMN,'style',98,l1M,oZM,gg)
var cNN=_oz(z,99,l1M,oZM,gg)
_(fMN,cNN)
cs.pop()
_(bIN,fMN)
cs.pop()
_(eHN,bIN)
cs.pop()
_(b5M,eHN)
cs.pop()
_(e4M,b5M)
cs.pop()
_(a2M,e4M)
cs.pop()
return a2M
}
_wp('./pages/tabar/tabar.wxml:block:1:2366: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
oXM.wxXCkey=2
_2z(z,70,cYM,e,s,gg,oXM,'item','__i1__','')
cs.pop()
cs.pop()
_(cVM,hWM)
cs.pop()
_(x1L,cVM)
cs.push("./pages/tabar/tabar.wxml:swiper-item:1:3461")
var hON=_n('swiper-item')
cs.push("./pages/tabar/tabar.wxml:scroll-view:1:3474")
var oPN=_mz(z,'scroll-view',['bindscrolltolower',100,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var cQN=_v()
_(oPN,cQN)
cs.push("./pages/tabar/tabar.wxml:block:1:3632")
var oRN=function(aTN,lSN,tUN,gg){
cs.push("./pages/tabar/tabar.wxml:block:1:3632")
cs.push("./pages/tabar/tabar.wxml:view:1:3702")
var bWN=_n('view')
_rz(z,bWN,'class',107,aTN,lSN,gg)
cs.push("./pages/tabar/tabar.wxml:navigator:1:3725")
var oXN=_mz(z,'navigator',['hoverClass',108,'url',1],[],aTN,lSN,gg)
cs.push("./pages/tabar/tabar.wxml:view:1:3828")
var xYN=_n('view')
_rz(z,xYN,'class',110,aTN,lSN,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:3846")
var oZN=_n('text')
_rz(z,oZN,'class',111,aTN,lSN,gg)
var f1N=_oz(z,112,aTN,lSN,gg)
_(oZN,f1N)
cs.pop()
_(xYN,oZN)
cs.pop()
_(oXN,xYN)
cs.push("./pages/tabar/tabar.wxml:view:1:3912")
var c2N=_n('view')
_rz(z,c2N,'class',113,aTN,lSN,gg)
cs.push("./pages/tabar/tabar.wxml:view:1:3930")
var h3N=_mz(z,'view',['class',114,'hidden',1],[],aTN,lSN,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:3993")
var o4N=_n('text')
_rz(z,o4N,'class',116,aTN,lSN,gg)
var c5N=_oz(z,117,aTN,lSN,gg)
_(o4N,c5N)
cs.pop()
_(h3N,o4N)
cs.pop()
_(c2N,h3N)
cs.push("./pages/tabar/tabar.wxml:view:1:4054")
var o6N=_mz(z,'view',['class',118,'hidden',1],[],aTN,lSN,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:4121")
var l7N=_n('text')
_rz(z,l7N,'class',120,aTN,lSN,gg)
var a8N=_oz(z,121,aTN,lSN,gg)
_(l7N,a8N)
cs.pop()
_(o6N,l7N)
cs.pop()
_(c2N,o6N)
cs.push("./pages/tabar/tabar.wxml:view:1:4182")
var t9N=_mz(z,'view',['class',122,'hidden',1],[],aTN,lSN,gg)
cs.push("./pages/tabar/tabar.wxml:image:1:4245")
var e0N=_mz(z,'image',['binderror',124,'class',1,'data-event-opts',2,'mode',3,'src',4,'style',5],[],aTN,lSN,gg)
cs.pop()
_(t9N,e0N)
cs.pop()
_(c2N,t9N)
cs.pop()
_(oXN,c2N)
cs.push("./pages/tabar/tabar.wxml:view:1:4437")
var bAO=_n('view')
_rz(z,bAO,'style',130,aTN,lSN,gg)
cs.push("./pages/tabar/tabar.wxml:text:1:4491")
var oBO=_n('text')
var xCO=_oz(z,131,aTN,lSN,gg)
_(oBO,xCO)
cs.push("./pages/tabar/tabar.wxml:text:1:4509")
var oDO=_n('text')
_rz(z,oDO,'style',132,aTN,lSN,gg)
var fEO=_oz(z,133,aTN,lSN,gg)
_(oDO,fEO)
cs.pop()
_(oBO,oDO)
cs.push("./pages/tabar/tabar.wxml:text:1:4575")
var cFO=_n('text')
_rz(z,cFO,'style',134,aTN,lSN,gg)
var hGO=_oz(z,135,aTN,lSN,gg)
_(cFO,hGO)
cs.pop()
_(oBO,cFO)
cs.pop()
_(bAO,oBO)
cs.pop()
_(oXN,bAO)
cs.pop()
_(bWN,oXN)
cs.pop()
_(tUN,bWN)
cs.pop()
return tUN
}
_wp('./pages/tabar/tabar.wxml:block:1:3632: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
cQN.wxXCkey=2
_2z(z,106,oRN,e,s,gg,cQN,'item','__i2__','')
cs.pop()
cs.push("./pages/tabar/tabar.wxml:mix-load-more:1:4701")
var oHO=_n('mix-load-more')
_rz(z,oHO,'status',136,e,s,gg)
cs.pop()
_(oPN,oHO)
cs.pop()
_(hON,oPN)
cs.pop()
_(x1L,hON)
cs.pop()
_(oZL,x1L)
cs.pop()
_(cPL,oZL)
cs.pop()
_(r,cPL)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
cs.push("./pages/voice/voice.wxml:view:1:1")
var oJO=_n('view')
_rz(z,oJO,'bind:__l',0,e,s,gg)
cs.push("./pages/voice/voice.wxml:page-head:1:22")
var lKO=_n('page-head')
_rz(z,lKO,'title',1,e,s,gg)
cs.pop()
_(oJO,lKO)
cs.push("./pages/voice/voice.wxml:view:1:63")
var aLO=_n('view')
_rz(z,aLO,'class',2,e,s,gg)
var tMO=_v()
_(aLO,tMO)
if(_oz(z,3,e,s,gg)){tMO.wxVkey=1
cs.push("./pages/voice/voice.wxml:block:1:94")
cs.push("./pages/voice/voice.wxml:block:1:146")
cs.push("./pages/voice/voice.wxml:view:1:153")
var xQO=_n('view')
_rz(z,xQO,'class',4,e,s,gg)
cs.push("./pages/voice/voice.wxml:text:1:182")
var oRO=_n('text')
_rz(z,oRO,'class',5,e,s,gg)
var fSO=_oz(z,6,e,s,gg)
_(oRO,fSO)
cs.pop()
_(xQO,oRO)
cs.pop()
_(tMO,xQO)
cs.push("./pages/voice/voice.wxml:view:1:241")
var cTO=_n('view')
_rz(z,cTO,'class',7,e,s,gg)
cs.push("./pages/voice/voice.wxml:view:1:273")
var hUO=_n('view')
_rz(z,hUO,'class',8,e,s,gg)
cs.pop()
_(cTO,hUO)
cs.push("./pages/voice/voice.wxml:view:1:311")
var oVO=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/voice/voice.wxml:image:1:417")
var cWO=_n('image')
_rz(z,cWO,'src',12,e,s,gg)
cs.pop()
_(oVO,cWO)
cs.pop()
_(cTO,oVO)
cs.push("./pages/voice/voice.wxml:view:1:469")
var oXO=_n('view')
_rz(z,oXO,'class',13,e,s,gg)
cs.pop()
_(cTO,oXO)
cs.pop()
_(tMO,cTO)
cs.pop()
cs.pop()
}
var eNO=_v()
_(aLO,eNO)
if(_oz(z,14,e,s,gg)){eNO.wxVkey=1
cs.push("./pages/voice/voice.wxml:block:1:530")
cs.push("./pages/voice/voice.wxml:block:1:566")
cs.push("./pages/voice/voice.wxml:view:1:573")
var lYO=_n('view')
_rz(z,lYO,'class',15,e,s,gg)
cs.push("./pages/voice/voice.wxml:text:1:602")
var aZO=_n('text')
_rz(z,aZO,'class',16,e,s,gg)
var t1O=_oz(z,17,e,s,gg)
_(aZO,t1O)
cs.pop()
_(lYO,aZO)
cs.pop()
_(eNO,lYO)
cs.push("./pages/voice/voice.wxml:view:1:661")
var e2O=_n('view')
_rz(z,e2O,'class',18,e,s,gg)
cs.push("./pages/voice/voice.wxml:view:1:693")
var b3O=_n('view')
_rz(z,b3O,'class',19,e,s,gg)
cs.pop()
_(e2O,b3O)
cs.push("./pages/voice/voice.wxml:view:1:731")
var o4O=_mz(z,'view',['bindtap',20,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/voice/voice.wxml:view:1:836")
var x5O=_n('view')
_rz(z,x5O,'class',23,e,s,gg)
cs.pop()
_(o4O,x5O)
cs.pop()
_(e2O,o4O)
cs.push("./pages/voice/voice.wxml:view:1:883")
var o6O=_n('view')
_rz(z,o6O,'class',24,e,s,gg)
cs.pop()
_(e2O,o6O)
cs.pop()
_(eNO,e2O)
cs.pop()
cs.pop()
}
var bOO=_v()
_(aLO,bOO)
if(_oz(z,25,e,s,gg)){bOO.wxVkey=1
cs.push("./pages/voice/voice.wxml:block:1:944")
cs.push("./pages/voice/voice.wxml:block:1:997")
cs.push("./pages/voice/voice.wxml:view:1:1004")
var f7O=_n('view')
_rz(z,f7O,'class',26,e,s,gg)
cs.push("./pages/voice/voice.wxml:text:1:1033")
var c8O=_n('text')
_rz(z,c8O,'class',27,e,s,gg)
var h9O=_oz(z,28,e,s,gg)
_(c8O,h9O)
cs.pop()
_(f7O,c8O)
cs.push("./pages/voice/voice.wxml:text:1:1083")
var o0O=_n('text')
_rz(z,o0O,'class',29,e,s,gg)
var cAP=_oz(z,30,e,s,gg)
_(o0O,cAP)
cs.pop()
_(f7O,o0O)
cs.pop()
_(bOO,f7O)
cs.push("./pages/voice/voice.wxml:view:1:1144")
var oBP=_n('view')
_rz(z,oBP,'class',31,e,s,gg)
cs.push("./pages/voice/voice.wxml:view:1:1176")
var lCP=_n('view')
_rz(z,lCP,'class',32,e,s,gg)
cs.pop()
_(oBP,lCP)
cs.push("./pages/voice/voice.wxml:view:1:1214")
var aDP=_mz(z,'view',['bindtap',33,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/voice/voice.wxml:image:1:1318")
var tEP=_n('image')
_rz(z,tEP,'src',36,e,s,gg)
cs.pop()
_(aDP,tEP)
cs.pop()
_(oBP,aDP)
cs.push("./pages/voice/voice.wxml:view:1:1368")
var eFP=_mz(z,'view',['bindtap',37,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/voice/voice.wxml:image:1:1468")
var bGP=_n('image')
_rz(z,bGP,'src',40,e,s,gg)
cs.pop()
_(eFP,bGP)
cs.pop()
_(oBP,eFP)
cs.pop()
_(bOO,oBP)
cs.pop()
cs.pop()
}
var oPO=_v()
_(aLO,oPO)
if(_oz(z,41,e,s,gg)){oPO.wxVkey=1
cs.push("./pages/voice/voice.wxml:block:1:1542")
cs.push("./pages/voice/voice.wxml:block:1:1594")
cs.push("./pages/voice/voice.wxml:view:1:1601")
var oHP=_n('view')
_rz(z,oHP,'class',42,e,s,gg)
cs.push("./pages/voice/voice.wxml:text:1:1630")
var xIP=_n('text')
_rz(z,xIP,'class',43,e,s,gg)
var oJP=_oz(z,44,e,s,gg)
_(xIP,oJP)
cs.pop()
_(oHP,xIP)
cs.push("./pages/voice/voice.wxml:text:1:1680")
var fKP=_n('text')
_rz(z,fKP,'class',45,e,s,gg)
var cLP=_oz(z,46,e,s,gg)
_(fKP,cLP)
cs.pop()
_(oHP,fKP)
cs.pop()
_(oPO,oHP)
cs.push("./pages/voice/voice.wxml:view:1:1741")
var hMP=_n('view')
_rz(z,hMP,'class',47,e,s,gg)
cs.push("./pages/voice/voice.wxml:view:1:1773")
var oNP=_mz(z,'view',['bindtap',48,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/voice/voice.wxml:image:1:1877")
var cOP=_n('image')
_rz(z,cOP,'src',51,e,s,gg)
cs.pop()
_(oNP,cOP)
cs.pop()
_(hMP,oNP)
cs.push("./pages/voice/voice.wxml:view:1:1927")
var oPP=_mz(z,'view',['bindtap',52,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/voice/voice.wxml:image:1:2027")
var lQP=_n('image')
_rz(z,lQP,'src',55,e,s,gg)
cs.pop()
_(oPP,lQP)
cs.pop()
_(hMP,oPP)
cs.pop()
_(oPO,hMP)
cs.pop()
cs.pop()
}
tMO.wxXCkey=1
eNO.wxXCkey=1
bOO.wxXCkey=1
oPO.wxXCkey=1
cs.pop()
_(oJO,aLO)
cs.push("./pages/voice/voice.wxml:view:1:2108")
var aRP=_n('view')
var tSP=_oz(z,56,e,s,gg)
_(aRP,tSP)
cs.pop()
_(oJO,aRP)
cs.pop()
_(r,oJO)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
cs.push("./pages/voice/voice1.wxml:view:1:1")
var bUP=_n('view')
_rz(z,bUP,'bind:__l',0,e,s,gg)
var oVP=_v()
_(bUP,oVP)
cs.push("./pages/voice/voice1.wxml:block:1:22")
var xWP=function(fYP,oXP,cZP,gg){
cs.push("./pages/voice/voice1.wxml:block:1:22")
cs.push("./pages/voice/voice1.wxml:view:1:91")
var o2P=_n('view')
cs.push("./pages/voice/voice1.wxml:view:1:97")
var c3P=_n('view')
_rz(z,c3P,'class',4,fYP,oXP,gg)
cs.push("./pages/voice/voice1.wxml:text:1:162")
var o4P=_n('text')
var l5P=_oz(z,5,fYP,oXP,gg)
_(o4P,l5P)
cs.pop()
_(c3P,o4P)
cs.push("./pages/voice/voice1.wxml:text:1:194")
var a6P=_n('text')
var t7P=_oz(z,6,fYP,oXP,gg)
_(a6P,t7P)
cs.pop()
_(c3P,a6P)
cs.pop()
_(o2P,c3P)
cs.pop()
_(cZP,o2P)
cs.pop()
return cZP
}
_wp('./pages/voice/voice1.wxml:block:1:22: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
oVP.wxXCkey=2
_2z(z,3,xWP,e,s,gg,oVP,'item','index','')
cs.pop()
cs.push("./pages/voice/voice1.wxml:view:1:251")
var e8P=_n('view')
_rz(z,e8P,'class',7,e,s,gg)
cs.pop()
_(bUP,e8P)
cs.push("./pages/voice/voice1.wxml:view:1:279")
var b9P=_n('view')
_rz(z,b9P,'class',8,e,s,gg)
cs.push("./pages/voice/voice1.wxml:view:1:311")
var o0P=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/voice/voice1.wxml:image:1:402")
var xAQ=_mz(z,'image',['hidden',12,'mode',1,'src',2,'style',3],[],e,s,gg)
cs.pop()
_(o0P,xAQ)
cs.push("./pages/voice/voice1.wxml:image:1:537")
var oBQ=_mz(z,'image',['hidden',16,'mode',1,'src',2,'style',3],[],e,s,gg)
cs.pop()
_(o0P,oBQ)
cs.pop()
_(b9P,o0P)
cs.push("./pages/voice/voice1.wxml:view:1:679")
var fCQ=_n('view')
_rz(z,fCQ,'class',20,e,s,gg)
cs.push("./pages/voice/voice1.wxml:input:1:699")
var cDQ=_mz(z,'input',['bindinput',21,'data-event-opts',1,'hidden',2,'type',3,'value',4],[],e,s,gg)
cs.pop()
_(fCQ,cDQ)
cs.push("./pages/voice/voice1.wxml:view:1:856")
var hEQ=_mz(z,'view',['bindtouchend',26,'bindtouchstart',1,'data-event-opts',2,'hidden',3],[],e,s,gg)
var oFQ=_oz(z,30,e,s,gg)
_(hEQ,oFQ)
cs.pop()
_(fCQ,hEQ)
cs.pop()
_(b9P,fCQ)
cs.push("./pages/voice/voice1.wxml:view:1:1056")
var cGQ=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/voice/voice1.wxml:view:1:1141")
var oHQ=_n('view')
var lIQ=_oz(z,34,e,s,gg)
_(oHQ,lIQ)
cs.pop()
_(cGQ,oHQ)
cs.pop()
_(b9P,cGQ)
cs.pop()
_(bUP,b9P)
cs.pop()
_(r,bUP)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@charset \x22UTF-8\x22;\nbody { font-size: 63%; font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/cpimg.wxss']=setCssToHead([".",[1],"_cpimg { position: fixed; top: ",[0,-99999],"; left: ",[0,-99999],"; z-index: -99999; }\n",],undefined,{path:"./components/cpimg.wxss"});    
__wxAppCode__['components/cpimg.wxml']=$gwx('./components/cpimg.wxml');

__wxAppCode__['components/loding.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"loading { width: 100%; }\n.",[1],"loading wx-image { width: 50%; position: absolute; top: 20%; left: 25%; }\n",],undefined,{path:"./components/loding.wxss"});    
__wxAppCode__['components/loding.wxml']=$gwx('./components/loding.wxml');

__wxAppCode__['components/mix-load-more/mix-load-more.wxss']=setCssToHead([".",[1],"mix-load-more{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,90],"; padding-top: ",[0,10],"; }\n.",[1],"mix-load-icon{ display: block; width: ",[0,36],"; height: ",[0,36],"; margin-right: ",[0,12],"; -webkit-animation: load 1.2s cubic-bezier(.37,1.08,.7,.74) infinite; animation: load 1.2s cubic-bezier(.37,1.08,.7,.74) infinite; }\n.",[1],"mix-load-text{ font-size: ",[0,28],"; color: #888; }\n@-webkit-keyframes load { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}",],undefined,{path:"./components/mix-load-more/mix-load-more.wxss"});    
__wxAppCode__['components/mix-load-more/mix-load-more.wxml']=$gwx('./components/mix-load-more/mix-load-more.wxml');

__wxAppCode__['components/mix-pulldown-refresh/mix-pulldown-refresh.wxss']=setCssToHead([".",[1],"mix-refresh-content{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; position: relative; }\n.",[1],"mix-loading-wrapper{ position: absolute; left: 0; top: 0; -webkit-transform: translateY(-100%); -ms-transform: translateY(-100%); transform: translateY(-100%); display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; }\n.",[1],"mix-loading-icon{ width: ",[0,70],"; height: ",[0,70],"; -webkit-transition: .3s; -o-transition: .3s; transition: .3s; }\n.",[1],"mix-loading-icon.",[1],"ready{ -webkit-transform: scaleX(1.3); -ms-transform: scaleX(1.3); transform: scaleX(1.3); }\n.",[1],"mix-loading-icon.",[1],"active{ -webkit-animation: loading .5s ease-in infinite both alternate; animation: loading .5s ease-in infinite both alternate; }\n@-webkit-keyframes loading { 0% { -webkit-transform: translateY(",[0,-20],") scaleX(1); transform: translateY(",[0,-20],") scaleX(1); }\n100% { -webkit-transform: translateY(",[0,4],")  scaleX(1.3); transform: translateY(",[0,4],")  scaleX(1.3); }\n}@keyframes loading { 0% { -webkit-transform: translateY(",[0,-20],") scaleX(1); transform: translateY(",[0,-20],") scaleX(1); }\n100% { -webkit-transform: translateY(",[0,4],")  scaleX(1.3); transform: translateY(",[0,4],")  scaleX(1.3); }\n}",],undefined,{path:"./components/mix-pulldown-refresh/mix-pulldown-refresh.wxss"});    
__wxAppCode__['components/mix-pulldown-refresh/mix-pulldown-refresh.wxml']=$gwx('./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml');

__wxAppCode__['components/uni-badge/uni-badge.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-badge { font-family: \x27Helvetica Neue\x27, Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box; font-size: 12px; line-height: 1; display: inline-block; padding: 3px 6px; color: #333; border-radius: 100px; background-color: #f1f1f1 }\n.",[1],"uni-badge.",[1],"uni-badge-inverted { padding: 0 5px 0 0; color: #999; background-color: transparent }\n.",[1],"uni-badge-primary { color: #fff; background-color: #007aff }\n.",[1],"uni-badge-primary.",[1],"uni-badge-inverted { color: #007aff; background-color: transparent }\n.",[1],"uni-badge-success { color: #fff; background-color: #4cd964 }\n.",[1],"uni-badge-success.",[1],"uni-badge-inverted { color: #4cd964; background-color: transparent }\n.",[1],"uni-badge-warning { color: #fff; background-color: #f0ad4e }\n.",[1],"uni-badge-warning.",[1],"uni-badge-inverted { color: #f0ad4e; background-color: transparent }\n.",[1],"uni-badge-error { color: #fff; background-color: #dd524d }\n.",[1],"uni-badge-error.",[1],"uni-badge-inverted { color: #dd524d; background-color: transparent }\n.",[1],"uni-badge--small { -webkit-transform: scale(.8); -ms-transform: scale(.8); transform: scale(.8); -webkit-transform-origin: center center; -ms-transform-origin: center center; transform-origin: center center }\n",],undefined,{path:"./components/uni-badge/uni-badge.wxss"});    
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-icon/uni-icon.wxss']=setCssToHead(["@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(data:font/truetype;charset\x3dutf-8;base64,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PDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuw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AVkBWgFbAVwBXQd1bmlFMTAwB3VuaUUxMDEHdW5pRTEwMgd1bmlFMTMwB3VuaUUxMzEHdW5pRTEzMgd1bmlFMjAwB3VuaUUyMDEHdW5pRTIwMgd1bmlFMjAzB3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTI2MAd1bmlFMjYxB3VuaUUyNjIHdW5pRTI2Mwd1bmlFMjY0B3VuaUUzMDAHdW5pRTMwMQd1bmlFMzAyB3VuaUUzMDMHdW5pRTMzMgd1bmlFMzMzB3VuaUUzNjAHdW5pRTM2Mwd1bmlFMzY0B3VuaUU0MDAHdW5pRTQwMQd1bmlFNDAyB3VuaUU0MDMHdW5pRTQwNAd1bmlFNDA1B3VuaUU0MDYHdW5pRTQwNwd1bmlFNDA4B3VuaUU0MDkHdW5pRTQxMAd1bmlFNDExB3VuaUU0MTMHdW5pRTQzNAd1bmlFNDM3B3VuaUU0MzgHdW5pRTQzOQd1bmlFNDQwB3VuaUU0NDEHdW5pRTQ0Mgd1bmlFNDQzB3VuaUU0NjAHdW5pRTQ2MQd1bmlFNDYyB3VuaUU0NjMHdW5pRTQ2NAd1bmlFNDY1B3VuaUU0NjYHdW5pRTQ2OAd1bmlFNDcwB3VuaUU0NzEHdW5pRTQ3Mgd1bmlFNTAwB3VuaUU1MDEHdW5pRTUwMgd1bmlFNTAzB3VuaUU1MDQHdW5pRTUwNQd1bmlFNTA2B3VuaUU1MDcHdW5pRTUwOAd1bmlFNTMwB3VuaUU1MzIHdW5pRTUzNAd1bmlFNTM1B3VuaUU1MzcHdW5pRTU2MAd1bmlFNTYyB3VuaUU1NjMHdW5pRTU2NQd1bmlFNTY3B3VuaUU1NjgHdW5pRTU4MAd1bmlFNTgxB3VuaUU1ODIHdW5pRTU4Mwd1bmlFNTg0B3VuaUU1ODUHdW5pRTU4Ngd1bmlFNTg3B3VuaUU1ODgHdW5pRTU4OQRFdXJvBEV1cm8AAQAB//8ADwABAAAADAAAABYAAAACAAEAAQBfAAEABAAAAAIAAAAAAAAAAQAAAADVpCcIAAAAANJrTZkAAAAA2DhhuQ\x3d\x3d) format(\x27truetype\x27); }\nwx-uni-icon { line-height: 1; }\n.",[1],"uni-icon { font-family: uniicons; font-weight: normal; font-style: normal; line-height: 1; display: inline-block; text-decoration: none; -webkit-font-smoothing: antialiased; }\n.",[1],"uni-icon.",[1],"uni-active { color: #007aff; }\n.",[1],"uni-icon-contact:before { content: \x27\\E100\x27; }\n.",[1],"uni-icon-person:before { content: \x27\\E101\x27; }\n.",[1],"uni-icon-personadd:before { content: \x27\\E102\x27; }\n.",[1],"uni-icon-contact-filled:before { content: \x27\\E130\x27; }\n.",[1],"uni-icon-person-filled:before { content: \x27\\E131\x27; }\n.",[1],"uni-icon-personadd-filled:before { content: \x27\\E132\x27; }\n.",[1],"uni-icon-phone:before { content: \x27\\E200\x27; }\n.",[1],"uni-icon-email:before { content: \x27\\E201\x27; }\n.",[1],"uni-icon-chatbubble:before { content: \x27\\E202\x27; }\n.",[1],"uni-icon-chatboxes:before { content: \x27\\E203\x27; }\n.",[1],"uni-icon-phone-filled:before { content: \x27\\E230\x27; }\n.",[1],"uni-icon-email-filled:before { content: \x27\\E231\x27; }\n.",[1],"uni-icon-chatbubble-filled:before { content: \x27\\E232\x27; }\n.",[1],"uni-icon-chatboxes-filled:before { content: \x27\\E233\x27; }\n.",[1],"uni-icon-weibo:before { content: \x27\\E260\x27; }\n.",[1],"uni-icon-weixin:before { content: \x27\\E261\x27; }\n.",[1],"uni-icon-pengyouquan:before { content: \x27\\E262\x27; }\n.",[1],"uni-icon-chat:before { content: \x27\\E263\x27; }\n.",[1],"uni-icon-qq:before { content: \x27\\E264\x27; }\n.",[1],"uni-icon-videocam:before { content: \x27\\E300\x27; }\n.",[1],"uni-icon-camera:before { content: \x27\\E301\x27; }\n.",[1],"uni-icon-mic:before { content: \x27\\E302\x27; }\n.",[1],"uni-icon-location:before { content: \x27\\E303\x27; }\n.",[1],"uni-icon-mic-filled:before, .",[1],"uni-icon-speech:before { content: \x27\\E332\x27; }\n.",[1],"uni-icon-location-filled:before { content: \x27\\E333\x27; }\n.",[1],"uni-icon-micoff:before { content: \x27\\E360\x27; }\n.",[1],"uni-icon-image:before { content: \x27\\E363\x27; }\n.",[1],"uni-icon-map:before { content: \x27\\E364\x27; }\n.",[1],"uni-icon-compose:before { content: \x27\\E400\x27; }\n.",[1],"uni-icon-trash:before { content: \x27\\E401\x27; }\n.",[1],"uni-icon-upload:before { content: \x27\\E402\x27; }\n.",[1],"uni-icon-download:before { content: \x27\\E403\x27; }\n.",[1],"uni-icon-close:before { content: \x27\\E404\x27; }\n.",[1],"uni-icon-redo:before { content: \x27\\E405\x27; }\n.",[1],"uni-icon-undo:before { content: \x27\\E406\x27; }\n.",[1],"uni-icon-refresh:before { content: \x27\\E407\x27; }\n.",[1],"uni-icon-star:before { content: \x27\\E408\x27; }\n.",[1],"uni-icon-plus:before { content: \x27\\E409\x27; }\n.",[1],"uni-icon-minus:before { content: \x27\\E410\x27; }\n.",[1],"uni-icon-circle:before, .",[1],"uni-icon-checkbox:before { content: \x27\\E411\x27; }\n.",[1],"uni-icon-close-filled:before, .",[1],"uni-icon-clear:before { content: \x27\\E434\x27; }\n.",[1],"uni-icon-refresh-filled:before { content: \x27\\E437\x27; }\n.",[1],"uni-icon-star-filled:before { content: \x27\\E438\x27; }\n.",[1],"uni-icon-plus-filled:before { content: \x27\\E439\x27; }\n.",[1],"uni-icon-minus-filled:before { content: \x27\\E440\x27; }\n.",[1],"uni-icon-circle-filled:before { content: \x27\\E441\x27; }\n.",[1],"uni-icon-checkbox-filled:before { content: \x27\\E442\x27; }\n.",[1],"uni-icon-closeempty:before { content: \x27\\E460\x27; }\n.",[1],"uni-icon-refreshempty:before { content: \x27\\E461\x27; }\n.",[1],"uni-icon-reload:before { content: \x27\\E462\x27; }\n.",[1],"uni-icon-starhalf:before { content: \x27\\E463\x27; }\n.",[1],"uni-icon-spinner:before { content: \x27\\E464\x27; }\n.",[1],"uni-icon-spinner-cycle:before { content: \x27\\E465\x27; }\n.",[1],"uni-icon-search:before { content: \x27\\E466\x27; }\n.",[1],"uni-icon-plusempty:before { content: \x27\\E468\x27; }\n.",[1],"uni-icon-forward:before { content: \x27\\E470\x27; }\n.",[1],"uni-icon-back:before, .",[1],"uni-icon-left-nav:before { content: \x27\\E471\x27; }\n.",[1],"uni-icon-checkmarkempty:before { content: \x27\\E472\x27; }\n.",[1],"uni-icon-home:before { content: \x27\\E500\x27; }\n.",[1],"uni-icon-navigate:before { content: \x27\\E501\x27; }\n.",[1],"uni-icon-gear:before { content: \x27\\E502\x27; }\n.",[1],"uni-icon-paperplane:before { content: \x27\\E503\x27; }\n.",[1],"uni-icon-info:before { content: \x27\\E504\x27; }\n.",[1],"uni-icon-help:before { content: \x27\\E505\x27; }\n.",[1],"uni-icon-locked:before { content: \x27\\E506\x27; }\n.",[1],"uni-icon-more:before { content: \x27\\E507\x27; }\n.",[1],"uni-icon-flag:before { content: \x27\\E508\x27; }\n.",[1],"uni-icon-home-filled:before { content: \x27\\E530\x27; }\n.",[1],"uni-icon-gear-filled:before { content: \x27\\E532\x27; }\n.",[1],"uni-icon-info-filled:before { content: \x27\\E534\x27; }\n.",[1],"uni-icon-help-filled:before { content: \x27\\E535\x27; }\n.",[1],"uni-icon-more-filled:before { content: \x27\\E537\x27; }\n.",[1],"uni-icon-settings:before { content: \x27\\E560\x27; }\n.",[1],"uni-icon-list:before { content: \x27\\E562\x27; }\n.",[1],"uni-icon-bars:before { content: \x27\\E563\x27; }\n.",[1],"uni-icon-loop:before { content: \x27\\E565\x27; }\n.",[1],"uni-icon-paperclip:before { content: \x27\\E567\x27; }\n.",[1],"uni-icon-eye:before { content: \x27\\E568\x27; }\n.",[1],"uni-icon-arrowup:before { content: \x27\\E580\x27; }\n.",[1],"uni-icon-arrowdown:before { content: \x27\\E581\x27; }\n.",[1],"uni-icon-arrowleft:before { content: \x27\\E582\x27; }\n.",[1],"uni-icon-arrowright:before { content: \x27\\E583\x27; }\n.",[1],"uni-icon-arrowthinup:before { content: \x27\\E584\x27; }\n.",[1],"uni-icon-arrowthindown:before { content: \x27\\E585\x27; }\n.",[1],"uni-icon-arrowthinleft:before { content: \x27\\E586\x27; }\n.",[1],"uni-icon-arrowthinright:before { content: \x27\\E587\x27; }\n.",[1],"uni-icon-pulldown:before { content: \x27\\E588\x27; }\n.",[1],"uni-icon-closefill:before { content: \x27\\E589\x27; }\n.",[1],"uni-icon-sound:before { content: \x27\\E590\x27; }\n.",[1],"uni-icon-scan:before { content: \x27\\E612\x27; }\n",],undefined,{path:"./components/uni-icon/uni-icon.wxss"});    
__wxAppCode__['components/uni-icon/uni-icon.wxml']=$gwx('./components/uni-icon/uni-icon.wxml');

__wxAppCode__['components/uni-list-item/uni-list-item.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-list-item { font-size: ",[0,32],"; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"uni-list-item--disabled { opacity: .3 }\n.",[1],"uni-list-item--hover { background-color: #f1f1f1 }\n.",[1],"uni-list-item__container { padding: ",[0,24]," ",[0,30],"; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"uni-list-item__container:after { position: absolute; z-index: 3; right: 0; bottom: 0; left: ",[0,30],"; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc }\n.",[1],"uni-list-item__content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column }\n.",[1],"uni-list-item__content-title { font-size: ",[0,32],"; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; color: inherit; line-height: 1.5; overflow: hidden }\n.",[1],"uni-list-item__content-note { color: #999; font-size: ",[0,28],"; white-space: normal; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden }\n.",[1],"uni-list-item__extra { width: 25%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"uni-list-item__icon { margin-right: ",[0,18],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"uni-list-item__icon-img { height: ",[0,52],"; width: ",[0,52]," }\n.",[1],"uni-list\x3e.",[1],"uni-list-item:last-child .",[1],"uni-list-item-container:after { height: 0 }\n",],undefined,{path:"./components/uni-list-item/uni-list-item.wxss"});    
__wxAppCode__['components/uni-list-item/uni-list-item.wxml']=$gwx('./components/uni-list-item/uni-list-item.wxml');

__wxAppCode__['components/uni-list/uni-list.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-list { background-color: #fff; position: relative; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column }\n.",[1],"uni-list:after { position: absolute; z-index: 10; right: 0; bottom: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc }\n.",[1],"uni-list:before { position: absolute; z-index: 10; right: 0; top: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc }\n",],undefined,{path:"./components/uni-list/uni-list.wxss"});    
__wxAppCode__['components/uni-list/uni-list.wxml']=$gwx('./components/uni-list/uni-list.wxml');

__wxAppCode__['pages/AI_list/AI_list.wxss']=setCssToHead(["body { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; background-color: #fff }\nwx-view { font-size: ",[0,28],"; line-height: inherit }\n.",[1],"example { padding: 0 ",[0,30]," ",[0,30]," }\n.",[1],"example-title { font-size: ",[0,32],"; line-height: ",[0,32],"; color: #777; margin: ",[0,40]," ",[0,25],"; position: relative }\n.",[1],"example .",[1],"example-title { margin: ",[0,40]," 0 }\n.",[1],"example-body { padding: 0 ",[0,40]," }\n",],undefined,{path:"./pages/AI_list/AI_list.wxss"});    
__wxAppCode__['pages/AI_list/AI_list.wxml']=$gwx('./pages/AI_list/AI_list.wxml');

__wxAppCode__['pages/API/api.wxss']=setCssToHead(["wx-button { background-color: #007aff; color: #ffffff; }\n",],undefined,{path:"./pages/API/api.wxss"});    
__wxAppCode__['pages/API/api.wxml']=$gwx('./pages/API/api.wxml');

__wxAppCode__['pages/audio/audio.wxss']=undefined;    
__wxAppCode__['pages/audio/audio.wxml']=$gwx('./pages/audio/audio.wxml');

__wxAppCode__['pages/cnblogs/cnblogs.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"row { display: -webkit-flex; display: -webkit-box; display: -ms-flexbox; display: flex; text-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; width: 94%; margin: ",[0,20]," auto; }\n.",[1],"row .",[1],"flex-txt { width: 77%; height: ",[0,120],"; text-align: left; padding-right: 2%; }\n.",[1],"row .",[1],"text-danger { width: 100%; height: ",[0,120],"; text-align: left; }\n.",[1],"row .",[1],"flex-img { width: 18%; height: ",[0,120],"; overflow: hidden; position: relative; }\n.",[1],"column { display: block; }\n.",[1],"column-title { color: #333; font-size: 1.3em; font-weight: 700; text-align: left; }\n.",[1],"column-description { color: #999; padding: ",[0,10]," 0; line-height: ",[0,40],"; }\n.",[1],"bky_list { margin-bottom: ",[0,20],"; border-bottom: ",[0,2]," solid #cccccc; }\n.",[1],"flex_image { float: right; }\nwx-image { width: 100%; height: ",[0,120],"; }\n.",[1],"loading { text-align: center; }\n",],undefined,{path:"./pages/cnblogs/cnblogs.wxss"});    
__wxAppCode__['pages/cnblogs/cnblogs.wxml']=$gwx('./pages/cnblogs/cnblogs.wxml');

__wxAppCode__['pages/content_body/content_body.wxss']=setCssToHead([".",[1],"markdown{font-size: 1.3em;line-height: 1.8em;}\n.",[1],"markdown_view{width: 94%;margin: 0 auto;}\n.",[1],"content_body_img{ width: 100%; margin: 8px 0; }\n.",[1],"content_body_p{ margin: 8px 0; }\n.",[1],"content_body_title{ font-size: 1.5em;font-weight: 700;margin-bottom: 20px;margin-top: 5px; }\n.",[1],"markdown_view_header{ border-bottom: 1px solid #cccccc; }\n",],undefined,{path:"./pages/content_body/content_body.wxss"});    
__wxAppCode__['pages/content_body/content_body.wxml']=$gwx('./pages/content_body/content_body.wxml');

__wxAppCode__['pages/Face_recognition/Face_detection.wxss']=setCssToHead([".",[1],"content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"showimg{ margin: ",[0,20]," 0; width: ",[0,750],"; }\n.",[1],"imgPath{ word-break: break-all; }\n.",[1],"result{ width: 94%; margin: ",[0,20]," auto; border-bottom: 1px solid #CCCCCC; }\n.",[1],"result_title{ font-size: 1.3em;color: #333333; }\n.",[1],"result_description{ color: #999999; margin: ",[0,10]," 0; }\n",],undefined,{path:"./pages/Face_recognition/Face_detection.wxss"});    
__wxAppCode__['pages/Face_recognition/Face_detection.wxml']=$gwx('./pages/Face_recognition/Face_detection.wxml');

__wxAppCode__['pages/Face_recognition/Face_registration.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"radio-group { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"radio-group .",[1],"uni-list-cell { width: ",[0,200],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"radio-group .",[1],"uni-list-cell wx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"showimg { margin: ",[0,20]," 0; width: ",[0,750],"; }\n.",[1],"imgPath { word-break: break-all; }\n.",[1],"result { width: 94%; margin: ",[0,20]," auto; border-bottom: 1px solid #CCCCCC; }\n.",[1],"result_title { font-size: 1.3em; color: #333333; }\n.",[1],"result_description { color: #999999; margin: ",[0,10]," 0; }\n",],undefined,{path:"./pages/Face_recognition/Face_registration.wxss"});    
__wxAppCode__['pages/Face_recognition/Face_registration.wxml']=$gwx('./pages/Face_recognition/Face_registration.wxml');

__wxAppCode__['pages/getuser/getuser.wxss']=setCssToHead([".",[1],"userinfo-avatar { border-radius: ",[0,128],"; width: ",[0,128],"; height: ",[0,128],"; }\n",],undefined,{path:"./pages/getuser/getuser.wxss"});    
__wxAppCode__['pages/getuser/getuser.wxml']=$gwx('./pages/getuser/getuser.wxml');

__wxAppCode__['pages/image_recognition/Animal_recognition.wxss']=setCssToHead([".",[1],"content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"showimg{ margin: ",[0,20]," 0; width: ",[0,750],"; }\n.",[1],"imgPath{ word-break: break-all; }\n.",[1],"result{ width: 94%; margin: ",[0,20]," auto; border-bottom: 1px solid #CCCCCC; }\n.",[1],"result_title{ font-size: 1.3em;color: #333333; }\n.",[1],"result_description{ color: #999999; margin: ",[0,10]," 0; }\n",],undefined,{path:"./pages/image_recognition/Animal_recognition.wxss"});    
__wxAppCode__['pages/image_recognition/Animal_recognition.wxml']=$gwx('./pages/image_recognition/Animal_recognition.wxml');

__wxAppCode__['pages/image_recognition/Botany.wxss']=setCssToHead([".",[1],"content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"showimg{ margin: ",[0,20]," 0; width: ",[0,750],"; }\n.",[1],"imgPath{ word-break: break-all; }\n.",[1],"result{ width: 94%; margin: ",[0,20]," auto; border-bottom: 1px solid #CCCCCC; }\n.",[1],"result_title{ font-size: 1.3em;color: #333333; }\n.",[1],"result_description{ color: #999999; margin: ",[0,10]," 0; }\n",],undefined,{path:"./pages/image_recognition/Botany.wxss"});    
__wxAppCode__['pages/image_recognition/Botany.wxml']=$gwx('./pages/image_recognition/Botany.wxml');

__wxAppCode__['pages/image_recognition/Dish_recognition.wxss']=setCssToHead([".",[1],"content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"showimg{ margin: ",[0,20]," 0; width: ",[0,750],"; }\n.",[1],"imgPath{ word-break: break-all; }\n.",[1],"result{ width: 94%; margin: ",[0,20]," auto; border-bottom: 1px solid #CCCCCC; }\n.",[1],"result_title{ font-size: 1.3em;color: #333333; }\n.",[1],"result_description{ color: #999999; margin: ",[0,10]," 0; }\n",],undefined,{path:"./pages/image_recognition/Dish_recognition.wxss"});    
__wxAppCode__['pages/image_recognition/Dish_recognition.wxml']=$gwx('./pages/image_recognition/Dish_recognition.wxml');

__wxAppCode__['pages/image_recognition/Vehicle_type_recognition.wxss']=setCssToHead([".",[1],"content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"showimg{ margin: ",[0,20]," 0; width: ",[0,750],"; }\n.",[1],"imgPath{ word-break: break-all; }\n.",[1],"result{ width: 94%; margin: ",[0,20]," auto; border-bottom: 1px solid #CCCCCC; }\n.",[1],"result_title{ font-size: 1.3em;color: #333333; }\n.",[1],"result_description{ color: #999999; margin: ",[0,10]," 0; }\n",],undefined,{path:"./pages/image_recognition/Vehicle_type_recognition.wxss"});    
__wxAppCode__['pages/image_recognition/Vehicle_type_recognition.wxml']=$gwx('./pages/image_recognition/Vehicle_type_recognition.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"row { display: -webkit-flex; display: -webkit-box; display: -ms-flexbox; display: flex; text-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; width: 94%; margin: ",[0,20]," auto; }\n.",[1],"row .",[1],"flex-txt { width: 68%; height: ",[0,200],"; text-align: left; padding-right: 2%; }\n.",[1],"row .",[1],"flex-img { width: 30%; height: ",[0,190],"; overflow: hidden; position: relative; }\n.",[1],"row .",[1],"flex-img .",[1],"flex_image { position: absolute; margin: auto; top: -9999px; right: -9999px; bottom: -9999px; left: -9999px; }\n.",[1],"column { display: block; }\n.",[1],"column-title { color: #333; font-size: 1.3em; font-weight: 700; }\n.",[1],"column-description { color: #999; padding: ",[0,10]," 0; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/markdown/markdown.wxss']=setCssToHead([".",[1],"hljs { display: block; overflow-x: auto; padding: 0.5em; background: #444; }\n.",[1],"hljs-keyword, .",[1],"hljs-selector-tag, .",[1],"hljs-literal, .",[1],"hljs-section, .",[1],"hljs-link { color: white; }\n.",[1],"hljs, .",[1],"hljs-subst { color: #ddd; }\n.",[1],"hljs-string, .",[1],"hljs-title, .",[1],"hljs-name, .",[1],"hljs-type, .",[1],"hljs-attribute, .",[1],"hljs-symbol, .",[1],"hljs-bullet, .",[1],"hljs-built_in, .",[1],"hljs-addition, .",[1],"hljs-variable, .",[1],"hljs-template-tag, .",[1],"hljs-template-variable { color: #d88; }\n.",[1],"hljs-comment, .",[1],"hljs-quote, .",[1],"hljs-deletion, .",[1],"hljs-meta { color: #777; }\n.",[1],"hljs-keyword, .",[1],"hljs-selector-tag, .",[1],"hljs-literal, .",[1],"hljs-title, .",[1],"hljs-section, .",[1],"hljs-doctag, .",[1],"hljs-type, .",[1],"hljs-name, .",[1],"hljs-strong { font-weight: bold; }\n.",[1],"hljs-emphasis { font-style: italic; }\n.",[1],"wxParse .",[1],"pre{ background:#2b303b; }\n.",[1],"wxParse wx-view{ display: inline-block; }\n.",[1],"pre{ background:#2b303b; overflow: auto; color: #cccccc; padding: ",[0,20],"; margin: ",[0,20]," 0; }\n.",[1],"pre .",[1],"hljs-attr { color: #8fa1b3; }\n.",[1],"markdown{font-size: 1.3em;line-height: 1.8em;}\n.",[1],"markdown_view{width: 94%;margin: 0 auto;}\nwx-image{ width: 100%; }\n",],undefined,{path:"./pages/markdown/markdown.wxss"});    
__wxAppCode__['pages/markdown/markdown.wxml']=$gwx('./pages/markdown/markdown.wxml');

__wxAppCode__['pages/QR_image/qrimage.wxss']=setCssToHead([".",[1],"showimg{ margin: ",[0,20]," 0; width: ",[0,750],"; }\n.",[1],"imgPath{ word-break: break-all; }\n.",[1],"uni-input{ height: 2rem; min-height: 2rem; }\n",],undefined,{path:"./pages/QR_image/qrimage.wxss"});    
__wxAppCode__['pages/QR_image/qrimage.wxml']=$gwx('./pages/QR_image/qrimage.wxml');

__wxAppCode__['pages/Robot/Robot.wxss']=setCssToHead([".",[1],"active{ text-align: right; }\n.",[1],"active1{ text-align: left; }\n.",[1],"bottom{ position: absolute;bottom:0;left: 0;width: 100%;border-top: #000000 ",[0,2]," solid; }\n",],undefined,{path:"./pages/Robot/Robot.wxss"});    
__wxAppCode__['pages/Robot/Robot.wxml']=$gwx('./pages/Robot/Robot.wxml');

__wxAppCode__['pages/tabar/tabar.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"row { display: -webkit-flex; display: -webkit-box; display: -ms-flexbox; display: flex; text-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; width: 94%; margin: ",[0,20]," auto; }\n.",[1],"row .",[1],"flex-txt { width: 77%; height: ",[0,120],"; text-align: left; padding-right: 2%; }\n.",[1],"row .",[1],"text-danger { width: 100%; height: ",[0,120],"; text-align: left; }\n.",[1],"row .",[1],"flex-img { width: 18%; height: ",[0,120],"; overflow: hidden; position: relative; }\n.",[1],"column { display: block; }\n.",[1],"column-title { color: #333; font-size: 1.3em; font-weight: 700; text-align: left; }\n.",[1],"column-description { color: #999; padding: ",[0,10]," 0; line-height: ",[0,40],"; }\n.",[1],"bky_list { margin-bottom: ",[0,20],"; border-bottom: ",[0,2]," solid #cccccc; }\n.",[1],"flex_image { float: right; }\nwx-image { width: 100%; height: ",[0,120],"; }\n.",[1],"loading { text-align: center; }\nbody, .",[1],"content { background-color: #ffffff; height: 100%; overflow: hidden; }\n.",[1],"nav-bar { position: relative; z-index: 10; height: ",[0,90],"; white-space: nowrap; -webkit-box-shadow: 0 ",[0,2]," ",[0,8]," rgba(0, 0, 0, 0.06); box-shadow: 0 ",[0,2]," ",[0,8]," rgba(0, 0, 0, 0.06); background-color: #fff; }\n.",[1],"nav-bar .",[1],"nav-item { display: inline-block; width: ",[0,250],"; height: ",[0,90],"; text-align: center; line-height: ",[0,90],"; font-size: ",[0,30],"; color: #303133; position: relative; }\n.",[1],"nav-bar .",[1],"nav-item:after { content: \x27\x27; width: 0; height: 0; border-bottom: ",[0,4]," solid #007aff; position: absolute; left: 50%; bottom: 0; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); -webkit-transition: .3s; -o-transition: .3s; transition: .3s; }\n.",[1],"nav-bar .",[1],"current { color: #007aff; }\n.",[1],"nav-bar .",[1],"current:after { width: 50%; }\n.",[1],"swiper-box { height: 100%; }\n.",[1],"panel-scroll-box { height: 100%; }\n.",[1],"panel-scroll-box .",[1],"panel-item { background: #fff; padding: 30px 0; border-bottom: 2px solid #000; }\n.",[1],"video-wrapper { width: 100%; height: ",[0,440],"; }\n.",[1],"video-wrapper .",[1],"video { width: 100%; }\nwx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"img { width: 100%; height: 100%; }\n.",[1],"news-item { position: relative; }\n.",[1],"news-item { width: ",[0,750],"; padding: ",[0,24]," ",[0,30],"; border-bottom-width: 1px; border-color: #eee; background-color: #fff; }\n.",[1],"title { font-size: ",[0,32],"; color: #303133; line-height: ",[0,46],"; }\n.",[1],"bot { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"author { font-size: ",[0,26],"; color: #aaa; }\n.",[1],"time { font-size: ",[0,26],"; color: #aaa; margin-left: ",[0,20],"; }\n.",[1],"img-list { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; background-color: #fff; width: ",[0,220],"; height: ",[0,140],"; }\n.",[1],"img-wrapper { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: ",[0,140],"; position: relative; }\n.",[1],"img { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"img-empty { height: ",[0,20],"; }\n.",[1],"img-list1 { position: absolute; left: ",[0,30],"; top: ",[0,24],"; }\n.",[1],"title1 { padding-left: ",[0,240],"; }\n.",[1],"bot1 { padding-left: ",[0,240],"; margin-top: ",[0,20],"; }\n.",[1],"img-list2 { position: absolute; right: ",[0,30],"; top: ",[0,24],"; }\n.",[1],"title2 { padding-right: ",[0,210],"; }\n.",[1],"bot2 { margin-top: ",[0,20],"; }\n.",[1],"img-list3 { width: ",[0,700],"; margin: ",[0,16]," ",[0,0],"; }\n.",[1],"img-wrapper3 { margin-right: ",[0,4],"; }\n.",[1],"img-list-single { width: ",[0,690],"; height: ",[0,240],"; margin: ",[0,16]," ",[0,0],"; }\n.",[1],"img-wrapper-single { height: ",[0,240],"; margin-right: ",[0,0],"; }\n.",[1],"video-tip { position: absolute; left: 0; top: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.3); }\n.",[1],"video-tip-icon { width: ",[0,60],"; height: ",[0,60],"; }\n",],undefined,{path:"./pages/tabar/tabar.wxss"});    
__wxAppCode__['pages/tabar/tabar.wxml']=$gwx('./pages/tabar/tabar.wxml');

__wxAppCode__['pages/voice/voice.wxss']=setCssToHead(["wx-image { width: ",[0,150],"; height: ",[0,150],"; }\n.",[1],"page-body-wrapper { -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-flex: 1; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1; margin-bottom: ",[0,300],"; }\n.",[1],"page-body-time { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"time-big { font-size: ",[0,60],"; margin: ",[0,20],"; }\n.",[1],"time-small { font-size: ",[0,30],"; }\n.",[1],"page-body-buttons { margin-top: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"page-body-button { width: ",[0,250],"; text-align: center; }\n.",[1],"button-stop-record { width: ",[0,110],"; height: ",[0,110],"; border: ",[0,20]," solid #fff; background-color: #f55c23; border-radius: ",[0,130],"; margin: 0 auto; }\n",],undefined,{path:"./pages/voice/voice.wxss"});    
__wxAppCode__['pages/voice/voice.wxml']=$gwx('./pages/voice/voice.wxml');

__wxAppCode__['pages/voice/voice1.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"input_view { width: ",[0,750],"; height: ",[0,100],"; background: #f9f9f9; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"input_view .",[1],"Voice { width: ",[0,100],"; height: ",[0,50],"; }\n.",[1],"input_view .",[1],"input { width: ",[0,500],"; background: #ffffff; height: ",[0,70],"; margin-top: ",[0,15],"; }\n.",[1],"input_view .",[1],"input wx-input { line-height: ",[0,70],"; height: ",[0,70],"; padding-left: ",[0,20],"; }\n.",[1],"input_view .",[1],"input wx-view { width: ",[0,500],"; line-height: ",[0,70],"; height: ",[0,70],"; text-align: center; }\n.",[1],"input_view .",[1],"btn { width: ",[0,150],"; }\n.",[1],"input_view .",[1],"btn wx-view { margin: 0 auto; width: ",[0,100],"; height: ",[0,70],"; margin-top: ",[0,15],"; font-size: ",[0,28],"; background: #22ac38; color: #ffffff; text-align: center; line-height: ",[0,70],"; }\n.",[1],"active { text-align: right; }\n.",[1],"active1 { text-align: left; }\n.",[1],"bottom { position: absolute; bottom: 0; left: 0; width: 100%; }\n",],undefined,{path:"./pages/voice/voice1.wxss"});    
__wxAppCode__['pages/voice/voice1.wxml']=$gwx('./pages/voice/voice1.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        plus.webview.postMessageToUniNView({
            type: 'UniWebviewReady-' + plus.webview.currentWebview().id
        }, '__uniapp__service');
})();
