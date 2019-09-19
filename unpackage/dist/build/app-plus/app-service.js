var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'box border_top'])
Z([[2,'!='],[[7],[3,'userName']],[1,'']])
Z([[2,'!='],[[7],[3,'userPhoto']],[1,'']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'box border_top'])
Z([[2,'>'],[[6],[[6],[[7],[3,'goodsList']],[3,'list']],[3,'length']],[1,0]])
Z([[2,'<='],[[6],[[6],[[7],[3,'goodsList']],[3,'list']],[3,'length']],[1,0]])
Z(z[1])
Z([[7],[3,'alertBoxIsShow']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[6])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^alertBoxClose']],[[4],[[5],[[4],[[5],[1,'alertBoxClose']]]]]]]],[[4],[[5],[[5],[1,'^alertBoxDelete']],[[4],[[5],[[4],[[5],[1,'alertBoxDelete']]]]]]]]])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isFrist']])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^homeGoRegister']],[[4],[[5],[[4],[[5],[1,'homeGoRegister']]]]]]]]])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[7],[3,'login_photo']],[1,'']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'box border_top'])
Z([3,'content'])
Z([[2,'=='],[[7],[3,'micTabStatus']],[1,0]])
Z([[2,'=='],[[7],[3,'micTabStatus']],[1,1]])
Z([[2,'=='],[[7],[3,'micTabStatus']],[1,2]])
Z([[2,'=='],[[7],[3,'micTabStatus']],[1,3]])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shopIsShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/alertBox/alertBox.wxml','./components/homeAlert/homeAlert.wxml','./components/mic/mic.wxml','./pages/address/address.wxml','./pages/cart/cart.wxml','./pages/customized/customized.wxml','./pages/dm/dm.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/micPlayPage/micPlayPage.wxml','./pages/mine/mine.wxml','./pages/myOrder/myOrder.wxml','./pages/myTbox/myTbox.wxml','./pages/ranking/ranking.wxml','./pages/shopConfirmation/shopConfirmation.wxml','./pages/shopDetails/shopDetails.wxml','./pages/starMusic/starMusic.wxml','./pages/welcome/welcome.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var fE=_n('view')
_rz(z,fE,'class',0,e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,1,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(fE,hG)
if(_oz(z,2,e,s,gg)){hG.wxVkey=1
}
cF.wxXCkey=1
hG.wxXCkey=1
_(r,fE)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cI=_n('view')
_rz(z,cI,'class',0,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,1,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,2,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(cI,aL)
if(_oz(z,3,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(cI,tM)
if(_oz(z,4,e,s,gg)){tM.wxVkey=1
var eN=_mz(z,'alert-box',['bind:__l',5,'bind:alertBoxClose',1,'bind:alertBoxDelete',2,'data-event-opts',3,'vueId',4],[],e,s,gg)
_(tM,eN)
}
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
tM.wxXCkey=3
_(r,cI)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oR=_v()
_(r,oR)
if(_oz(z,0,e,s,gg)){oR.wxVkey=1
var fS=_mz(z,'home-alert',['bind:__l',1,'bind:homeGoRegister',1,'data-event-opts',2,'vueId',3],[],e,s,gg)
_(oR,fS)
}
oR.wxXCkey=1
oR.wxXCkey=3
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var hU=_v()
_(r,hU)
if(_oz(z,0,e,s,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var lY=_n('view')
_rz(z,lY,'class',0,e,s,gg)
var t1=_n('view')
_rz(z,t1,'class',1,e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,2,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(t1,b3)
if(_oz(z,3,e,s,gg)){b3.wxVkey=1
}
var o4=_v()
_(t1,o4)
if(_oz(z,4,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(t1,x5)
if(_oz(z,5,e,s,gg)){x5.wxVkey=1
}
e2.wxXCkey=1
b3.wxXCkey=1
o4.wxXCkey=1
x5.wxXCkey=1
_(lY,t1)
var aZ=_v()
_(lY,aZ)
if(_oz(z,6,e,s,gg)){aZ.wxVkey=1
}
aZ.wxXCkey=1
_(r,lY)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var o0=_v()
_(r,o0)
if(_oz(z,0,e,s,gg)){o0.wxVkey=1
}
o0.wxXCkey=1
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/micPlayPage/micPlayPage","pages/login/login","pages/shopConfirmation/shopConfirmation","pages/shopDetails/shopDetails","pages/cart/cart","pages/mine/mine","pages/myOrder/myOrder","pages/address/address","components/homeAlert/homeAlert","pages/ranking/ranking","pages/myTbox/myTbox","pages/customized/customized","pages/starMusic/starMusic","pages/welcome/welcome","pages/dm/dm","components/mic/mic","components/alertBox/alertBox"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"音芙","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#000000","selectedColor":"#FF3366","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"iconPath":"/static/img/home.png","selectedIconPath":"/static/img/home_selected.png","pagePath":"pages/index/index","text":"首页"},{"iconPath":"/static/img/dz.png","selectedIconPath":"/static/img/dz_selected.png","pagePath":"pages/customized/customized","text":"定制"},{"iconPath":"/static/img/card.png","selectedIconPath":"/static/img/card_selected.png","pagePath":"pages/cart/cart","text":"购物车"},{"iconPath":"/static/img/mine.png","selectedIconPath":"/static/img/mine_selected.png","pagePath":"pages/mine/mine","text":"我的"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"musicSugar","compilerVersion":"2.2.2","usingComponents":{"page-mic":"/components/mic/mic","home-alert":"/components/homeAlert/homeAlert","alert-box":"/components/alertBox/alertBox"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/alertBox/alertBox.json']={"usingComponents":{}};
__wxAppCode__['components/alertBox/alertBox.wxml']=$gwx('./components/alertBox/alertBox.wxml');

__wxAppCode__['components/homeAlert/homeAlert.json']={"navigationBarTitleText":"注册弹框","usingComponents":{}};
__wxAppCode__['components/homeAlert/homeAlert.wxml']=$gwx('./components/homeAlert/homeAlert.wxml');

__wxAppCode__['components/mic/mic.json']={"navigationBarTitleText":"音乐全局组件","usingComponents":{}};
__wxAppCode__['components/mic/mic.wxml']=$gwx('./components/mic/mic.wxml');

__wxAppCode__['pages/address/address.json']={"navigationBarTitleText":"添加收货地址","usingComponents":{}};
__wxAppCode__['pages/address/address.wxml']=$gwx('./pages/address/address.wxml');

__wxAppCode__['pages/cart/cart.json']={"navigationBarTitleText":"购物车","usingComponents":{"alert-box":"/components/alertBox/alertBox"}};
__wxAppCode__['pages/cart/cart.wxml']=$gwx('./pages/cart/cart.wxml');

__wxAppCode__['pages/customized/customized.json']={"navigationBarTitleText":"定制","usingComponents":{}};
__wxAppCode__['pages/customized/customized.wxml']=$gwx('./pages/customized/customized.wxml');

__wxAppCode__['pages/dm/dm.json']={"navigationBarTitleText":"dm","usingComponents":{}};
__wxAppCode__['pages/dm/dm.wxml']=$gwx('./pages/dm/dm.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"音芙·音乐棒棒糖","navigationBarBackgroundColor":"#FF6666","navigationBarTextStyle":"white","usingComponents":{"home-alert":"/components/homeAlert/homeAlert"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录音芙","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/micPlayPage/micPlayPage.json']={"navigationBarTitleText":"音频播放","usingComponents":{}};
__wxAppCode__['pages/micPlayPage/micPlayPage.wxml']=$gwx('./pages/micPlayPage/micPlayPage.wxml');

__wxAppCode__['pages/mine/mine.json']={"navigationBarTitleText":"音符·音乐棒棒糖","navigationBarBackgroundColor":"#FF6666","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/mine/mine.wxml']=$gwx('./pages/mine/mine.wxml');

__wxAppCode__['pages/myOrder/myOrder.json']={"navigationBarTitleText":"我的订单","usingComponents":{}};
__wxAppCode__['pages/myOrder/myOrder.wxml']=$gwx('./pages/myOrder/myOrder.wxml');

__wxAppCode__['pages/myTbox/myTbox.json']={"navigationBarTitleText":"我的糖盒","usingComponents":{}};
__wxAppCode__['pages/myTbox/myTbox.wxml']=$gwx('./pages/myTbox/myTbox.wxml');

__wxAppCode__['pages/ranking/ranking.json']={"navigationBarTitleText":"销量排行","usingComponents":{}};
__wxAppCode__['pages/ranking/ranking.wxml']=$gwx('./pages/ranking/ranking.wxml');

__wxAppCode__['pages/shopConfirmation/shopConfirmation.json']={"navigationBarTitleText":"确认订单","usingComponents":{}};
__wxAppCode__['pages/shopConfirmation/shopConfirmation.wxml']=$gwx('./pages/shopConfirmation/shopConfirmation.wxml');

__wxAppCode__['pages/shopDetails/shopDetails.json']={"navigationBarTitleText":"商品详情","usingComponents":{}};
__wxAppCode__['pages/shopDetails/shopDetails.wxml']=$gwx('./pages/shopDetails/shopDetails.wxml');

__wxAppCode__['pages/starMusic/starMusic.json']={"navigationBarTitleText":"明星音频","usingComponents":{}};
__wxAppCode__['pages/starMusic/starMusic.wxml']=$gwx('./pages/starMusic/starMusic.wxml');

__wxAppCode__['pages/welcome/welcome.json']={"navigationBarTitleText":"启动页","usingComponents":{}};
__wxAppCode__['pages/welcome/welcome.wxml']=$gwx('./pages/welcome/welcome.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main","components/alertBox/alertBox","components/homeAlert/homeAlert","components/mic/mic"],{"14fb":function(t,n,e){"use strict";e.r(n);var u=e("8c00"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},"402b":function(t,n,e){"use strict";var u=e("dd7b"),r=e.n(u);r.a},"45e2":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"page-mic",props:{title:{type:String,default:""}}};n.default=u},"51f1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;wx.getBackgroundAudioManager();var u={globalData:{playIndex:0,currentTime:0,duration:0},onLaunch:function(){plus.payment.getChannels(function(t){alert(t)}),plus.push.addEventListener("click",function(t){plus.ui.alert("click:"+JSON.stringify(t)),plus.ui.alert(t.payload)},!1),plus.push.addEventListener("receive",function(t){plus.ui.alert("recevice:"+JSON.stringify(t))},!1)},onShow:function(){},onHide:function(){}};n.default=u},"5c81":function(t,n,e){"use strict";var u=e("a87a"),r=e.n(u);r.a},"620d":function(t,n,e){"use strict";e.r(n);var u=e("9f93"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},"6c1d":function(t,n,e){"use strict";e.r(n);var u=e("a362"),r=e("14fb");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("402b");var i=e("2877"),o=Object(i["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"6f5e":function(t,n,e){},"7cab":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},"847c":function(t,n,e){"use strict";e.r(n);var u=e("45e2"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},"8c00":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"alert-box",props:{title:{content:String,letfFont:String,rightFont:String}},methods:{close:function(){this.$emit("alertBoxClose")},deleteFun:function(){this.$emit("alertBoxDelete")}}};n.default=u},"9f93":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"page-alent",props:{title:{name:String}},methods:{goRegister:function(){this.$emit("homeGoRegister")}}};n.default=u},a1cc:function(t,n,e){"use strict";e.r(n);var u=e("f520");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);e("5c81");var a,i,o=e("2877"),c=Object(o["a"])(u["default"],a,i,!1,null,null,null);n["default"]=c.exports},a362:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},a87a:function(t,n,e){},bf3e:function(t,n,e){"use strict";var u=e("6f5e"),r=e.n(u);r.a},d2b0:function(t,n,e){"use strict";var u=e("d52d"),r=e.n(u);r.a},d52d:function(t,n,e){},d790:function(t,n,e){"use strict";e.r(n);var u=e("fb4f"),r=e("847c");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("d2b0");var i=e("2877"),o=Object(i["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},dd7b:function(t,n,e){},f520:function(t,n,e){"use strict";e.r(n);var u=e("51f1"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},f7b1:function(t,n,e){"use strict";e.r(n);var u=e("7cab"),r=e("620d");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("bf3e");var i=e("2877"),o=Object(i["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},fb4f:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})}},[["3a41","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"05e1":function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("30e1"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},1413:function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("7929"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"214b":function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("b94e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"25e0":function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("23da"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2b4e":function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("fafa"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2bd7":function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("23b4"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2d81":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r="https://lollipop.zhenzhangmedia.com";function o(e){return"POST"==e?{Authentication:t.getStorageSync("token"),"Content-type":"application/x-www-form-urlencoded"}:{"Content-type":"application/json"}}function i(e,i,a,s){return t.showLoading({title:"正在加载..."}),new Promise(function(s,u){wx.request({url:r+e,method:i,data:a,header:o(i),success:function(e){console.log(n(e," at utils/wx_request.js:33")),0==e.data.code?(t.hideLoading(),s(e.data)):(t.hideLoading(),t.showToast({title:e.data.message,icon:"none",duration:1e3}),u(e))},fail:function(e){t.hideLoading()},complete:function(){}})})}function a(t){return i(t.url,"GET",t.data)}function s(t){return i(t.url,"POST",t.data)}function u(){var t=getCurrentPages(),e=t[t.length-1],n=e.options;return n}var c={request:i,get:a,post:s,host:r,getQuery:u};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return k}),n.d(e,"mapState",function(){return j}),n.d(e,"mapMutations",function(){return C}),n.d(e,"mapGetters",function(){return P}),n.d(e,"mapActions",function(){return R}),n.d(e,"createNamespacedHelpers",function(){return M});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,f);var l=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;p(t.concat(r),e.getChild(r),n.modules[r])}}l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},l.prototype.update=function(t){p([],this.root,t)},l.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new c(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var h;var d=function(t){var e=this;void 0===t&&(t={}),!h&&"undefined"!==typeof window&&window.Vue&&k(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var a=this,s=this,u=s.dispatch,c=s.commit;this.dispatch=function(t,e){return u.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=r,m(this,o,[],this._modules.root),g(this,o),n.forEach(function(t){return t(e)}),h.config.devtools&&i(this)},v={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),g(t,n,e)}function g(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=h.config.silent;h.config.silent=!0,t._vm=new h({data:{$$state:e},computed:i}),h.config.silent=s,t.strict&&E(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),h.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=S(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){h.set(s,u,r.state)})}var c=r.context=b(t,a,n);r.forEachMutation(function(e,n){var r=a+n;A(t,r,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;O(t,r,o,c)}),r.forEachGetter(function(e,n){var r=a+n;$(t,r,e,c)}),r.forEachChild(function(r,i){m(t,e,n.concat(i),r,o)})}function b(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=x(n,r,o),a=i.payload,s=i.options,u=i.type;return s&&s.root||(u=e+u),t.dispatch(u,a)},commit:r?t.commit:function(n,r,o){var i=x(n,r,o),a=i.payload,s=i.options,u=i.type;s&&s.root||(u=e+u),t.commit(u,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return w(t,e)}},state:{get:function(){return S(t.state,n)}}}),o}function w(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function A(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function O(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return u(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function $(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function E(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function S(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function x(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function k(t){h&&t===h||(h=t,r(h))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,o=x(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),u=this._mutations[i];u&&(this._withCommit(function(){u.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=x(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},d.prototype.subscribe=function(t){return y(t,this._subscribers)},d.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),g(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=S(e.state,t.slice(0,-1));h.delete(n,t[t.length-1])}),_(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var j=T(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=N(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),C=T(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=N(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),P=T(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||N(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),R=T(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=N(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),M=function(t){return{mapState:j.bind(null,t),mapGetters:P.bind(null,t),mapMutations:C.bind(null,t),mapActions:R.bind(null,t)}};function I(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function T(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function N(t,e,n){var r=t._modulesNamespaceMap[n];return r}var H={Store:d,install:k,version:"3.0.1",mapState:j,mapMutations:C,mapGetters:P,mapActions:R,createNamespacedHelpers:M};e["default"]=H},"3a41":function(t,e,n){"use strict";(function(t){n("6659");var e=f(n("66fd")),r=f(n("a1cc")),o=f(n("2d81")),i=f(n("50e0")),a=f(n("d790")),s=f(n("f7b1")),u=f(n("6c1d")),c=f(n("da1f"));function f(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){p(t,e,n[e])})}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.component("page-mic",a.default),e.default.component("home-alert",s.default),e.default.component("alert-box",u.default),e.default.prototype._md5=c.default,e.default.prototype.$store=i.default,e.default.config.productionTip=!1,r.default.mpType="app",e.default.prototype.$wxhttp=o.default;var h=new e.default(l({},r.default));t(h).$mount()}).call(this,n("6e42")["createApp"])},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"50e0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("66fd")),o=i(n("2f62"));function i(t){return t&&t.__esModule?t:{default:t}}r.default.use(o.default);var a=new o.default.Store({state:{micList:[{url:"www.baidu.com"},{url:"www.taobao.com"}],micInfo:{name:"音乐测试",all:"03:01",info:"qweasdweqweqweasdqw"},micStatus:!1},mutations:{SET_MICLIST:function(t,e){t.micList=e},SET_MICINFO:function(t,e){t.micInfo=e},SET_MICSTATUS:function(t,e){t.micStatus=e}},getters:{getMicList:function(t){return t.micList},getMicInfo:function(t){return t.micInfo},getMicStatus:function(t){return t.micStatus}}}),s=a;e.default=s},"516e":function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("38ef"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"561e":function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("a79c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5b27":function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("d790"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},6531:function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("fda6"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},6659:function(t,e,n){},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var A=/-(\w)/g,O=w(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),$=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),E=/\B([A-Z])/g,S=w(function(t){return t.replace(E,"-$1").toLowerCase()});function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function k(t,e){return t.bind(e)}var j=Function.prototype.bind?k:x;function C(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function R(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function M(t,e,n){}var I=function(t,e,n){return!1},T=function(t){return t};function N(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return N(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return N(t[n],e[n])})}catch(c){return!1}}function H(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function D(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:M,parsePlatformTagName:T,mustUseProp:I,async:!0,_lifecycleHooks:F},L=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function V(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function X(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+L.source+".$_\\d]");function z(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,J="__proto__"in{},q="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=K&&WXEnvironment.platform.toLowerCase(),Q=q&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Y),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(q)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(no){}var ot=function(){return void 0===G&&(G=!q&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},it=q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=M,ft=0,lt=function(){this.id=ft++,this.subs=[]};lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){g(this.subs,t)},lt.prototype.depend=function(){lt.target&&lt.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.target=null;var pt=[];function ht(t){pt.push(t),lt.target=t}function dt(){pt.pop(),lt.target=pt[pt.length-1]}var vt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},yt={child:{configurable:!0}};yt.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,yt);var _t=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function gt(t){return new vt(void 0,void 0,void 0,String(t))}function mt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var bt=Array.prototype,wt=Object.create(bt),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach(function(t){var e=bt[t];X(wt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var Ot=Object.getOwnPropertyNames(wt),$t=!0;function Et(t){$t=t}var St=function(t){this.value=t,this.dep=new lt,this.vmCount=0,X(t,"__ob__",this),Array.isArray(t)?(J?xt(t,wt):kt(t,wt,Ot),this.observeArray(t)):this.walk(t)};function xt(t,e){t.__proto__=e}function kt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];X(t,i,e[i])}}function jt(t,e){var n;if(u(t)&&!(t instanceof vt))return b(t,"__ob__")&&t.__ob__ instanceof St?n=t.__ob__:$t&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new St(t)),e&&n&&n.vmCount++,n}function Ct(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&jt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Mt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&jt(e),i.notify())}})}}function Pt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Ct(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Rt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Mt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Mt(e)}St.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Ct(t,e[n])},St.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)jt(t[e])};var It=U.optionMergeStrategies;function Tt(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&Tt(r,o):Pt(t,n,o));return t}function Nt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Tt(r,o):o}:e?t?function(){return Tt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Ht(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Dt(n):n}function Dt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Bt(t,e,n,r){var o=Object.create(t||null);return e?P(o,e):o}It.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},F.forEach(function(t){It[t]=Ht}),B.forEach(function(t){It[t+"s"]=Bt}),It.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in P(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return P(o,t),e&&P(o,e),o},It.provide=Nt;var Ft=function(t,e){return void 0===e?t:e};function Ut(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=O(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function Lt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?P({from:i},a):{from:a}}else 0}}function Vt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Xt(t,e,n){if("function"===typeof e&&(e=e.options),Ut(e,n),Lt(e,n),Vt(e),!e._base&&(e.extends&&(t=Xt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Xt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=It[r]||Ft;a[r]=o(t[r],e[r],n,r)}return a}function Wt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var a=$(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function zt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Kt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===S(t)){var u=Kt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Gt(r,o,t);var c=$t;Et(!0),jt(a),Et(c)}return a}function Gt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Jt(e.type)?r.call(t):r}}function Jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function qt(t,e){return Jt(t)===Jt(e)}function Kt(t,e){if(!Array.isArray(e))return qt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(qt(e[n],t))return n;return-1}function Yt(t,e,n){ht();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(no){Zt(no,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{dt()}}function Qt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Yt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(no){Yt(no,r,o)}return i}function Zt(t,e,n){if(U.errorHandler)try{return U.errorHandler.call(null,t,e,n)}catch(no){no!==t&&te(no,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!q&&!K||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],re=!1;function oe(){re=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();ee=function(){ie.then(oe),et&&setTimeout(M)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var ae=1,se=new MutationObserver(oe),ue=document.createTextNode(String(ae));se.observe(ue,{characterData:!0}),ee=function(){ae=(ae+1)%2,ue.data=String(ae)}}function ce(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(no){Yt(no,e,"nextTick")}else n&&n(e)}),re||(re=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var fe=new st;function le(t){pe(t,fe),fe.clear()}function pe(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)pe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)pe(t[r[n]],e)}}}var he=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function de(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Qt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Qt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,o,a,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=he(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=de(c,s)),i(l.once)&&(c=t[u]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(l=he(u),o(l.name,e[u],l.capture))}function ye(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var f=S(c);_e(a,u,c,f,!0)||_e(a,s,c,f,!1)}return a}}function _e(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ge(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[gt(t)]:Array.isArray(t)?we(t):void 0}function be(t){return o(t)&&o(t.text)&&a(t.isComment)}function we(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),be(a[0])&&be(c)&&(f[u]=gt(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?be(c)?f[u]=gt(c.text+a):""!==a&&f.push(gt(a)):be(a)&&be(c)?f[u]=gt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function Ae(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=$e(t.$options.inject,t);e&&(Et(!1),Object.keys(e).forEach(function(n){Ct(t,n,e[n])}),Et(!0))}function $e(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function Ee(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(Se)&&delete n[c];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function xe(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=ke(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=je(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),X(o,"$stable",a),X(o,"$key",s),X(o,"$hasNormal",i),o}function ke(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function je(t,e){return function(){return t[e]}}function Ce(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function Pe(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=P(P({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Re(t){return Wt(this.$options,"filters",t,!0)||T}function Me(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,o){var i=U.keyCodes[e]||n;return o&&r&&!U.keyCodes[e]?Me(o,r):i?Me(i,t):r?S(r)!==e:void 0}function Te(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=R(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||U.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=O(a),c=S(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),De(r,"__static__"+t,!1),r)}function He(t,e,n){return De(t,"__once__"+e+(n?"_"+n:""),!0),t}function De(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Be(t[r],e+"_"+r,n);else Be(t,e,n)}function Be(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Fe(t,e){if(e)if(f(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ue(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ue(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Le(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ve(t,e){return"string"===typeof t?e+t:t}function Xe(t){t._o=He,t._n=v,t._s=d,t._l=Ce,t._t=Pe,t._q=N,t._i=H,t._m=Ne,t._f=Re,t._k=Ie,t._b=Te,t._v=gt,t._e=_t,t._u=Ue,t._g=Fe,t._d=Le,t._p=Ve}function We(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=$e(c.inject,o),this.slots=function(){return u.$slots||xe(t.scopedSlots,u.$slots=Ee(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return xe(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=xe(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=on(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return on(s,t,e,n,r,l)}}function ze(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=zt(f,c,e||n);else o(r.attrs)&&Je(u,r.attrs),o(r.props)&&Je(u,r.props);var l=new We(r,u,a,i,t),p=s.render.call(null,l._c,l);if(p instanceof vt)return Ge(p,r,l.parent,s,l);if(Array.isArray(p)){for(var h=me(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Ge(h[v],r,l.parent,s,l);return d}}function Ge(t,e,n,r,o){var i=mt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Je(t,e){for(var n in e)t[O(n)]=e[n]}Xe(We.prototype);var qe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;qe.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,$n);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;kn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Rn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Xn(n):Cn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},Ke=Object.keys(qe);function Ye(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=vn(f,c),void 0===t))return dn(f,e,n,a,s);e=e||{},hr(t),o(e.model)&&en(t.options,e);var l=ye(e,t,s);if(i(t.options.functional))return ze(t,l,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var d=t.options.name||s,v=new vt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:a},f);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var r=Ke[n],o=e[r],i=qe[r];o===i||o&&o._merged||(e[r]=o?tn(i,o):i)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var nn=1,rn=2;function on(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=rn),an(t,e,n,r,o)}function an(t,e,n,r,i){if(o(n)&&o(n.__ob__))return _t();if(o(n)&&o(n.is)&&(e=n.is),!e)return _t();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===rn?r=me(r):i===nn&&(r=ge(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||U.getTagNamespace(e),a=U.isReservedTag(e)?new vt(U.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Wt(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):Ye(u,n,t,r,e)):a=Ye(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&sn(a,s),o(n)&&un(n),a):_t()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&sn(u,e,n)}}function un(t){u(t.style)&&le(t.style),u(t.class)&&le(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Ee(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return on(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return on(t,e,n,r,o,!0)};var i=r&&r.data;Ct(t,"$attrs",i&&i.attrs||n,null,!0),Ct(t,"$listeners",e._parentListeners||n,null,!0)}var fn,ln=null;function pn(t){Xe(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=xe(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(no){Yt(no,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=_t()),t.parent=o,t}}function hn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function dn(t,e,n,r,o){var i=_t();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function vn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=ln;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return g(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},p=D(function(n){t.resolved=hn(n,e),s?a.length=0:l(!0)}),d=D(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(t.errorComp=hn(v.error,e)),o(v.loading)&&(t.loadingComp=hn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function yn(t){return t.isComment&&t.asyncFactory}function _n(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||yn(n)))return n}}function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&An(t,e)}function mn(t,e){fn.$on(t,e)}function bn(t,e){fn.$off(t,e)}function wn(t,e){var n=fn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function An(t,e,n){fn=t,ve(e,n||{},mn,bn,wn,t),fn=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?C(n):n;for(var r=C(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Qt(n[i],e,r,e,o)}return e}}var $n=null;function En(t){var e=$n;return $n=t,function(){$n=e}}function Sn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function xn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=En(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Rn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Rn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function kn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Et(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=zt(h,d,e,t)}Et(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,An(t,r,v),c&&(t.$slots=Ee(i,o.context),t.$forceUpdate())}function jn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Cn(t,e){if(e){if(t._directInactive=!1,jn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Cn(t.$children[n]);Rn(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!jn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Rn(t,"deactivated")}}function Rn(t,e){ht();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Qt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Mn=[],In=[],Tn={},Nn=!1,Hn=!1,Dn=0;function Bn(){Dn=Mn.length=In.length=0,Tn={},Nn=Hn=!1}var Fn=Date.now;if(q&&!Z){var Un=window.performance;Un&&"function"===typeof Un.now&&Fn()>document.createEvent("Event").timeStamp&&(Fn=function(){return Un.now()})}function Ln(){var t,e;for(Fn(),Hn=!0,Mn.sort(function(t,e){return t.id-e.id}),Dn=0;Dn<Mn.length;Dn++)t=Mn[Dn],t.before&&t.before(),e=t.id,Tn[e]=null,t.run();var n=In.slice(),r=Mn.slice();Bn(),Wn(n),Vn(r),it&&U.devtools&&it.emit("flush")}function Vn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Rn(r,"updated")}}function Xn(t){t._inactive=!1,In.push(t)}function Wn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Cn(t[e],!0)}function zn(t){var e=t.id;if(null==Tn[e]){if(Tn[e]=!0,Hn){var n=Mn.length-1;while(n>Dn&&Mn[n].id>t.id)n--;Mn.splice(n+1,0,t)}else Mn.push(t);Nn||(Nn=!0,ce(Ln))}}var Gn=0,Jn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var t;ht(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(no){if(!this.user)throw no;Yt(no,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),dt(),this.cleanupDeps()}return t},Jn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Jn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Jn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(no){Yt(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var qn={enumerable:!0,configurable:!0,get:M,set:M};function Kn(t,e,n){qn.get=function(){return this[e][n]},qn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,qn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&ar(t,e.methods),e.data?Zn(t):jt(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&sr(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||Et(!1);var a=function(i){o.push(i);var a=zt(i,e,n,t);Ct(r,i,a),i in t||Kn(t,"_props",i)};for(var s in e)a(s);Et(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||V(i)||Kn(t,"_data",i)}jt(e,!0)}function tr(t,e){ht();try{return t.call(e,e)}catch(no){return Yt(no,e,"data()"),{}}finally{dt()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Jn(t,a||M,M,er)),o in t||rr(t,o,i)}}function rr(t,e,n){var r=!ot();"function"===typeof n?(qn.get=r?or(e):ir(n),qn.set=M):(qn.get=n.get?r&&!1!==n.cache?or(e):ir(n.get):M,qn.set=n.set||M),Object.defineProperty(t,e,qn)}function or(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?M:j(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)ur(t,n,r[o]);else ur(t,n,r)}}function ur(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Pt,t.prototype.$delete=Rt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return ur(r,t,e,n);n=n||{},n.user=!0;var o=new Jn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Yt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var fr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=fr++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=Xt(hr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Sn(e),gn(e),cn(e),Rn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Oe(e),Yn(e),"mp-toutiao"!==e.mpHost&&Ae(e),"mp-toutiao"!==e.mpHost&&Rn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function hr(t){var e=t.options;if(t.super){var n=hr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=dr(t);o&&P(t.extendOptions,o),e=t.options=Xt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function dr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function vr(t){this._init(t)}function yr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=C(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function _r(t){t.mixin=function(t){return this.options=Xt(this.options,t),this}}function gr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Xt(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&br(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function br(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function wr(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Ar(t){return t&&(t.Ctor.options.name||t.tag)}function Or(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function $r(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=Ar(a.componentOptions);s&&!e(s)&&Er(n,i,r,o)}}}function Er(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}lr(vr),cr(vr),On(vr),xn(vr),pn(vr);var Sr=[String,RegExp,Array],xr={name:"keep-alive",abstract:!0,props:{include:Sr,exclude:Sr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Er(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){$r(t,function(t){return Or(e,t)})}),this.$watch("exclude",function(e){$r(t,function(t){return!Or(e,t)})})},render:function(){var t=this.$slots.default,e=_n(t),n=e&&e.componentOptions;if(n){var r=Ar(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!Or(i,r))||a&&r&&Or(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,g(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Er(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},kr={KeepAlive:xr};function jr(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:P,mergeOptions:Xt,defineReactive:Ct},t.set=Pt,t.delete=Rt,t.nextTick=ce,t.observable=function(t){return jt(t),t},t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,kr),yr(t),_r(t),gr(t),wr(t)}jr(vr),Object.defineProperty(vr.prototype,"$isServer",{get:ot}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:We}),vr.version="2.6.10";var Cr="[object Array]",Pr="[object Object]";function Rr(t,e){var n={};return Mr(t,e),Ir(t,e,"",n),n}function Mr(t,e){if(t!==e){var n=Nr(t),r=Nr(e);if(n==Pr&&r==Pr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Mr(i,e[o])}}else n==Cr&&r==Cr&&t.length>=e.length&&e.forEach(function(e,n){Mr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var o=Nr(t),i=Nr(e);if(o==Pr)if(i!=Pr||Object.keys(t).length<Object.keys(e).length)Tr(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Nr(i),u=Nr(a);if(s!=Cr&&s!=Pr)i!=e[o]&&Tr(r,(""==n?"":n+".")+o,i);else if(s==Cr)u!=Cr?Tr(r,(""==n?"":n+".")+o,i):i.length<a.length?Tr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Pr)if(u!=Pr||Object.keys(i).length<Object.keys(a).length)Tr(r,(""==n?"":n+".")+o,i);else for(var c in i)Ir(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Cr?i!=Cr?Tr(r,n,t):t.length<e.length?Tr(r,n,t):t.forEach(function(t,o){Ir(t,e[o],n+"["+o+"]",r)}):Tr(r,n,t)}}function Tr(t,e,n){t[e]=n}function Nr(t){return Object.prototype.toString.call(t)}function Hr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Dr(t){return Mn.find(function(e){return t._watcher===e})}function Br(t,e){if(!t.__next_tick_pending&&!Dr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(no){Yt(no,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Fr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ur=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Fr(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Rr(o,i);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Hr(n)})):Hr(this)}};function Lr(){}function Vr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Lr),t.$options.render||(t.$options.render=Lr),"mp-toutiao"!==t.mpHost&&Rn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Jn(t,r,M,{before:function(){t._isMounted&&!t._isDestroyed&&Rn(t,"beforeUpdate")}},!0),n=!1,t}function Xr(t,e){return o(t)||o(e)?Wr(t,zr(e)):""}function Wr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Gr(t):u(t)?Jr(t):"string"===typeof t?t:""}function Gr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Jr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var qr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Kr(t){return Array.isArray(t)?R(t):"string"===typeof t?qr(t):t}var Yr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:C(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Br(this,t)},Yr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=Ae,t.prototype.__init_injections=Oe,t.prototype.__call_hook=function(t,e){var n=this;ht();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Qt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),dt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Xr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Kr(t),r=e?P(e,n):n;return Object.keys(r).map(function(t){return S(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;to.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=to}vr.prototype.__patch__=Ur,vr.prototype.$mount=function(t,e){return Vr(this,t,e)},eo(vr),Zr(vr),e["default"]=vr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=$e,e.createPage=Oe,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return h(t)||p(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function _(t){return"string"===typeof t}function g(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var A=/-(\w)/g,O=w(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),$=["invoke","success","fail","complete","returnValue"],E={},S={};function x(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?k(n):n}function k(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function j(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function C(t,e){Object.keys(e).forEach(function(n){-1!==$.indexOf(n)&&y(e[n])&&(t[n]=x(t[n],e[n]))})}function P(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==$.indexOf(n)&&y(e[n])&&j(t[n],e[n])})}function R(t,e){"string"===typeof t&&g(e)?C(S[t]||(S[t]={}),e):g(t)&&C(E,t)}function M(t,e){"string"===typeof t?g(e)?P(S[t],e):delete S[t]:g(t)&&P(E,t)}function I(t){return function(e){return t(e)||e}}function T(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function N(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(I(o));else{var i=o(e);if(T(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){N(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function D(t,e){var n=[];Array.isArray(E.returnValue)&&n.push.apply(n,f(E.returnValue));var r=S[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function B(t){var e=Object.create(null);Object.keys(E).forEach(function(t){"returnValue"!==t&&(e[t]=E[t].slice())});var n=S[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function F(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=B(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=N(a.invoke,n);return s.then(function(t){return e.apply(void 0,[H(a,t)].concat(o))})}return e.apply(void 0,[H(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var U={returnValue:function(t){return T(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},L=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,V=/^create|Manager$/,X=/^on/;function W(t){return V.test(t)}function z(t){return L.test(t)}function G(t){return X.test(t)}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function q(t){return!(W(t)||z(t)||G(t))}function K(t,e){return q(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return y(n.success)||y(n.fail)||y(n.complete)?D(t,F.apply(void 0,[t,e,n].concat(o))):D(t,J(new Promise(function(r,i){F.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Q=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Z?.5:1:t<0?-n:n}var ot={promiseInterceptor:U},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:R,removeInterceptor:M}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(pt(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var i=!0===o?e:{};for(var a in y(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];y(s)&&(s=s(e[a],e,i)),s?_(s)?i[s]=e[a]:g(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return y(e)&&(e=ft(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;y(n)&&(o=n(e)),e=lt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return z(t)?pt(t,a,o.returnValue,W(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(o),y(r)&&r(o)}}vt.forEach(function(t){dt[t]=yt(t)});var _t=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function gt(t,e,n){return t[e].apply(t,n)}function mt(){return gt(_t(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(_t(),"$off",Array.prototype.slice.call(arguments))}function wt(){return gt(_t(),"$once",Array.prototype.slice.call(arguments))}function At(){return gt(_t(),"$emit",Array.prototype.slice.call(arguments))}var Ot=Object.freeze({$on:mt,$off:bt,$once:wt,$emit:At});function $t(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function Et(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&$t(e),e}function St(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var xt=Object.freeze({requireNativePlugin:St,getSubNVueById:Et}),kt=Page,jt=Component,Ct=/:/g,Pt=w(function(t){return O(t.replace(Ct,"-"))});function Rt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Pt(n)].concat(o))}}}function Mt(t,e){var n=e[t];e[t]=n?function(){Rt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Rt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Mt("onLoad",t),kt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Mt("created",t),jt(t)};var It=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Tt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Nt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Nt(t,e)}):void 0}function Ht(t,e,n){e.forEach(function(e){Nt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Dt(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Bt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ft(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ut(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return g(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Lt=[String,Number,Boolean,Object,Array,null];function Vt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Xt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(r)&&r.props&&a.push(e({properties:zt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){g(t)&&t.props&&a.push(e({properties:zt(t.props,!0)}))}),a}function Wt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function zt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Vt(t)}}):g(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(g(r)){var o=r["default"];y(o)&&(o=o()),r.type=Wt(e,r.type),n[e]={type:-1!==Lt.indexOf(r.type)?r.type:null,value:o,observer:Vt(e)}}else{var i=Wt(e,r);n[e]={type:-1!==Lt.indexOf(i)?i:null,observer:Vt(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):g(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function qt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Jt(t,e)}),r}function Kt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=qt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Kt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Qt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Zt;r=s?r.slice(1):r;var u=r.charAt(0)===Qt;r=u?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var a=o[r];if(!y(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Yt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Tt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},Ht(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function le(t){return re(t,{mocks:oe,initRefs:ce})}var pe=["onUniNViewMessage"];function he(t){var e=le(t);return Ht(e,pe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Dt(r.default,t),s=i(a,2),u=s[0],c=s[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:Ut(c,r.default.prototype),behaviors:Xt(c,ae),properties:zt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ft(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Bt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return n?f:[f,u]}function ye(t){return ve(t,{isPage:se,initRelation:ue})}function _e(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=_e(t);return Ht(n.methods,ge,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}ge.push.apply(ge,It);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ae(t){var e=be(t);return Ht(e.methods,we),e}function Oe(t){return Component(Ae(t))}function $e(t){return Component(_e(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Ee={};Object.keys(it).forEach(function(t){Ee[t]=it[t]}),Object.keys(Ot).forEach(function(t){Ee[t]=Ot[t]}),Object.keys(xt).forEach(function(t){Ee[t]=K(t,xt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Ee[t]=K(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ee,t.UniEmitter=Ot),wx.createApp=de,wx.createPage=Oe,wx.createComponent=$e;var Se=Ee,xe=Se;e.default=xe}).call(this,n("c8ba"))},"7f40":function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("6147"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8e19":function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("3073"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"===typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{f=e.regeneratorRuntime=c?t.exports:{},f.wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},y={};y[a]=function(){return this};var _=Object.getPrototypeOf,g=_&&_(_(R([])));g&&g!==r&&o.call(g,a)&&(y=g);var m=$.prototype=A.prototype=Object.create(y);O.prototype=m.constructor=$,$.constructor=O,$[u]=O.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,$):(t.__proto__=$,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[s]=function(){return this},f.AsyncIterator=S,f.async=function(t,e,n,r){var o=new S(b(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=R,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof A?e:A,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=x(t,n,a),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function A(){}function O(){}function $(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){function e(n,r,i,a){var s=w(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function x(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return M()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=w(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:M}}function M(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},a6e6:function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("2f31"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d6b5:function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("7968"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},da1f:function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(){var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var n=OUTPUT_TYPES[e];t[n]=createOutputMethod(n)}return t},nodeWrap=function nodeWrap(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var r,o,i=0,a=t.length,s=this.blocks,u=this.buffer8;while(i<a){if(this.hashed&&(this.hashed=!1,s[0]=s[16],s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),e)if(ARRAY_BUFFER)for(o=this.start;i<a&&o<64;++i)u[o++]=t[i];else for(o=this.start;i<a&&o<64;++i)s[o>>2]|=t[i]<<SHIFT[3&o++];else if(ARRAY_BUFFER)for(o=this.start;i<a&&o<64;++i)r=t.charCodeAt(i),r<128?u[o++]=r:r<2048?(u[o++]=192|r>>6,u[o++]=128|63&r):r<55296||r>=57344?(u[o++]=224|r>>12,u[o++]=128|r>>6&63,u[o++]=128|63&r):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++i)),u[o++]=240|r>>18,u[o++]=128|r>>12&63,u[o++]=128|r>>6&63,u[o++]=128|63&r);else for(o=this.start;i<a&&o<64;++i)r=t.charCodeAt(i),r<128?s[o>>2]|=r<<SHIFT[3&o++]:r<2048?(s[o>>2]|=(192|r>>6)<<SHIFT[3&o++],s[o>>2]|=(128|63&r)<<SHIFT[3&o++]):r<55296||r>=57344?(s[o>>2]|=(224|r>>12)<<SHIFT[3&o++],s[o>>2]|=(128|r>>6&63)<<SHIFT[3&o++],s[o>>2]|=(128|63&r)<<SHIFT[3&o++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++i)),s[o>>2]|=(240|r>>18)<<SHIFT[3&o++],s[o>>2]|=(128|r>>12&63)<<SHIFT[3&o++],s[o>>2]|=(128|r>>6&63)<<SHIFT[3&o++],s[o>>2]|=(128|63&r)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,n,r,o,i,a=this.blocks;this.first?(t=a[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,r=(-1732584194^2004318071&t)+a[1]-117830708,r=(r<<12|r>>>20)+t<<0,n=(-271733879^r&(-271733879^t))+a[2]-1126478375,n=(n<<17|n>>>15)+r<<0,e=(t^n&(r^t))+a[3]-1316259209,e=(e<<22|e>>>10)+n<<0):(t=this.h0,e=this.h1,n=this.h2,r=this.h3,t+=(r^e&(n^r))+a[0]-680876936,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+a[1]-389564586,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+a[2]+606105819,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+a[3]-1044525330,e=(e<<22|e>>>10)+n<<0),t+=(r^e&(n^r))+a[4]-176418897,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+a[5]+1200080426,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+a[6]-1473231341,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+a[7]-45705983,e=(e<<22|e>>>10)+n<<0,t+=(r^e&(n^r))+a[8]+1770035416,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+a[9]-1958414417,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+a[10]-42063,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+a[11]-1990404162,e=(e<<22|e>>>10)+n<<0,t+=(r^e&(n^r))+a[12]+1804603682,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+a[13]-40341101,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+a[14]-1502002290,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+a[15]+1236535329,e=(e<<22|e>>>10)+n<<0,t+=(n^r&(e^n))+a[1]-165796510,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+a[6]-1069501632,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+a[11]+643717713,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+a[0]-373897302,e=(e<<20|e>>>12)+n<<0,t+=(n^r&(e^n))+a[5]-701558691,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+a[10]+38016083,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+a[15]-660478335,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+a[4]-405537848,e=(e<<20|e>>>12)+n<<0,t+=(n^r&(e^n))+a[9]+568446438,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+a[14]-1019803690,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+a[3]-187363961,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+a[8]+1163531501,e=(e<<20|e>>>12)+n<<0,t+=(n^r&(e^n))+a[13]-1444681467,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+a[2]-51403784,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+a[7]+1735328473,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+a[12]-1926607734,e=(e<<20|e>>>12)+n<<0,o=e^n,t+=(o^r)+a[5]-378558,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+a[8]-2022574463,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+a[11]+1839030562,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+a[14]-35309556,e=(e<<23|e>>>9)+n<<0,o=e^n,t+=(o^r)+a[1]-1530992060,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+a[4]+1272893353,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+a[7]-155497632,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+a[10]-1094730640,e=(e<<23|e>>>9)+n<<0,o=e^n,t+=(o^r)+a[13]+681279174,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+a[0]-358537222,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+a[3]-722521979,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+a[6]+76029189,e=(e<<23|e>>>9)+n<<0,o=e^n,t+=(o^r)+a[9]-640364487,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+a[12]-421815835,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+a[15]+530742520,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+a[2]-995338651,e=(e<<23|e>>>9)+n<<0,t+=(n^(e|~r))+a[0]-198630844,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+a[7]+1126891415,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+a[14]-1416354905,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+a[5]-57434055,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~r))+a[12]+1700485571,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+a[3]-1894986606,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+a[10]-1051523,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+a[1]-2054922799,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~r))+a[8]+1873313359,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+a[15]-30611744,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+a[6]-1560198380,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+a[13]+1309151649,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~r))+a[4]-145523070,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+a[11]-1120210379,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+a[2]+718787259,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+a[9]-343485551,e=(e<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,n,r="",o=this.array(),i=0;i<15;)t=o[i++],e=o[i++],n=o[i++],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|n>>>6)]+BASE64_ENCODE_CHAR[63&n];return t=o[i],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",r};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===a(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),a=Math.min(o.length,i.length),s=a,u=0;u<a;u++)if(o[u]!==i[u]){s=u;break}var c=[];for(u=s;u<o.length;u++)c.push("..");return c=c.concat(i.slice(s)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e21b:function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("eb66"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e43f:function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("036e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e7db:function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("f7b1"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e99b:function(t,e,n){"use strict";(function(t){n("6659");r(n("66fd"));var e=r(n("6c1d"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0894":function(n,a,e){},"27ea":function(n,a,e){"use strict";var t=e("0894"),o=e.n(t);o.a},"30e1":function(n,a,e){"use strict";e.r(a);var t=e("7879"),o=e("8273");for(var i in o)"default"!==i&&function(n){e.d(a,n,function(){return o[n]})}(i);e("27ea");var r=e("2877"),s=Object(r["a"])(o["default"],t["a"],t["b"],!1,null,null,null);a["default"]=s.exports},7879:function(n,a,e){"use strict";var t=function(){var n=this,a=n.$createElement;n._self._c},o=[];e.d(a,"a",function(){return t}),e.d(a,"b",function(){return o})},"78b5":function(n,a,e){"use strict";(function(n,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=e("2f62");function i(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.forEach(function(a){r(n,a,e[a])})}return n}function r(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}var s={data:function(){return{micList:[],micTabList:[],isFrist:!0,headerTop:Number,isTop:!1,initStatus:!1,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,micTabStatus:0,scrollLeft:0,micTab:[{name:"全部推荐",id:"0"},{name:"独家音乐",id:"21"},{name:"儿童故事",id:"9"},{name:"明星音频",id:"18"},{name:"周杰伦的"},{name:"华晨宇的"},{name:"烟火里的"},{name:"销量最多"}],fullScreen:!1}},computed:i({},(0,o.mapGetters)(["getMicList","getMicInfo","getMicStatus"])),onLoad:function(){var a=this;wx.createSelectorQuery().select(".mic_tab").boundingClientRect(function(n){a.headerTop=n.top}).exec();n.getStorageSync("userInfo");n.getStorageSync("userInfo")&&(this.isFrist=!1);var e=[{num:1,pic:.1,name:"攀登",starName:"潘玮柏",playbackVolume:"1.21",url:"https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E5%87%BA%E5%B1%B1-%E8%8A%B1%E7%B2%A5.mp3",img:"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",version:21,id:1,isChecked:!1,lyric:"[00:01.78]编曲：赫连长泓\n[00:02.10]音乐总监：刘洲\n[00:03.20]定位制作人：刘洲\n[00:04.25]中文填词：G.E.M.邓紫棋\n[00:05.30]Rap词：潘玮柏/G.E.M.邓紫棋/艾热\n[00:06.40]混音：时俊峰\n[00:07.50]改编歌曲：《Hymn For The Weekend》\n[00:08.60]原唱：Coldplay\n[00:09.70]原词曲：aaaa Scott Alan\n[00:10.80]改编歌曲词曲版权代理：环球音乐出版有限公司(Universal Music Publishing Ltd.)\n[00:11.90]百代音乐版权代理（北京）有限公司\n[00:12.00]北京盛海传音文化传播有限公司\n[00:14.00]有时候我会问自己\n[00:19.17]到底为了什么努力\n[00:24.86]赢得什么才叫胜利\n[00:30.04]你曾否问自己\n[00:36.13]我们明白很多时候\n[00:37.45]当你醒来渴望自由\n[00:38.86]但现实总变质\n[00:40.17]并不是你想要的样子\n[00:41.53]有人在逆境中蜕变\n[00:42.67]想在机遇中兑现\n[00:44.03]说过的承诺\n[00:44.71]更多的时候\n[00:45.36]都被打磨成碎片\n[00:46.79]是因为生活要继续\n[00:48.12]想振作 获得惊喜\n[00:49.50]要更多 要心意\n[00:50.82]更精细 更尽力\n[00:52.18]让经历跟新意\n[00:53.59]更亲密 更凝聚\n[00:54.84]这就是我想要的\n[00:56.23]我想要我能被铭记\n[00:58.00]想忘记那些\n[00:58.94]华丽的浮夸的装点\n[01:00.45]滑稽的实话里\n[01:01.29]藏着谎话却又很庄严\n[01:03.17]Do what I do (做我想做的)\n[01:04.45]是因为不想停止迈步\n[01:05.66]不是不在乎\n[01:06.93]而是我害怕心思败露\n[01:08.51]世界的面积\n[01:09.36]可能大到让人抵触\n[01:10.77]但时间的延续\n[01:11.92]就是你最大的礼物\n[01:13.52]别畏惧\n[01:14.18]像是暴露你某个意图\n[01:16.21]让阳光彻底照着你\n[01:17.68]每寸皮肤\n[01:18.87]I pray for myself(为我自己祈祷)\n[01:20.14]I pray for my hood(为我的队友们祈祷)\n[01:21.43]真理藏在心里\n[01:22.81]Keep real for my world(在我的世界里保持绝对的真实)\n[01:24.18]我为我自己买单\n[01:25.40]不会逃脱而是负责\n[01:26.90]我自己对抗灾难\n[01:28.09]哪怕超过我的负荷\n[01:29.60]You feel me(感受我的心声)\n[01:29.75]Oh 爱 oh 爱\n[01:33.00]Got me feeling drunk and high(让我如此沉醉)\n[01:36.20]So high so high(兴致高昂)\n[01:40.63]Oh 爱 oh 爱\n[01:44.10]Got me feeling drunk and high(让我如此沉醉)\n[01:46.62]So high so high(兴致高昂)\n[01:50.36]我曾经如此随和\n[01:51.55]跟着世界的规则\n[01:52.88]他们说什么就什么\n[01:54.61]听着话 心却是灰色\n[01:56.17]沉睡着\n[01:56.95]多努力追上\n[01:57.85]社会太看重的荣耀\n[01:59.19]我逐一对抗\n[02:00.49]恶鬼在煽动的控告\n[02:02.02]根本都不重要\n[02:02.88]理想再崇高\n[02:03.92]每当我动摇\n[02:04.84]撑着我是一个拥抱\n[02:06.22]我的忠告 别覆辙重蹈\n[02:08.17]一切的功劳\n[02:09.24]来自我爱的 爱着我的\n[02:10.74]身边每一个珍贵的容貌\n[02:12.94]Yo shout out to 2Pac(用这首歌向说唱歌手致敬)\n[02:15.53]Put your hands up(举起你们的双手)\n[02:16.94]So just bounce(就尽情地释放吧)\n[02:18.45]If you feel me(如果你听懂这首歌的话)\n[02:18.74]不要放肆 学着感激\n[02:20.05]像个壮士 勇往向前去\n[02:21.56]伤势再痛不要放弃\n[02:22.96]拼死拼活地追求\n[02:24.31]到底为了什么意义\n[02:25.73]不就是为了成为你口中的\n[02:27.60]Favorite MC(最佳说唱歌手)\n[02:28.66]他要spit game on fire(火力全开)\n[02:29.88]他要带你们higher(更好的体验)\n[02:31.42]他要证明说唱文化\n[02:32.61]本身就是个爷们儿\n[02:34.27]我觉得现在可以好好入睡\n[02:36.93]因为世界都是\n[02:38.13]Hip-Hop(说唱音乐)词汇\n[02:39.32]Never thought (从未想过)\n[02:40.06]I be in position to do this  (我能够参与其中)\n[02:41.31]It all started (一切都开始来自)\n[02:42.18]When Pac nation chanted(他的歌)\n[02:43.44]《How do you want It》(歌名)\n[02:44.00]I keep it old school(带你感受老学校的音乐)\n[02:45.30]With some Pac imitation(模仿着)\n[02:46.73]West side till I die(西海岸的终点)\n[02:47.94]You love it no hesitation(爱他的人不会有一丝犹豫)\n[02:49.73]Dear mama (亲爱的母亲)\n[02:50.30]不要哭我永远在你身边\n[02:51.73]别在乎世界怎么看我\n[02:53.32]对我多少偏见\n[02:54.54]今天忍气吞声\n[02:55.74]为了要更好的明天\n[02:57.26]我们说的唱的\n[02:58.44]坚持的全都会实现\n[02:59.90]So I pray for my loved ones(为我爱的人祈祷)\n[03:01.43]And I pray for the warriors(也为所有的勇士们祈祷)\n[03:02.76]I pray for the go-getters (为所有的能者志士祈祷)\n[03:04.14]And I pray for the naysayers(也为那些唾弃我的人们祈祷)\n[03:05.48]Lord please let me(请允许我)\n[03:06.86]See another day(坚持下去)\n[03:07.94]浴火凤凰展开双翼\n[03:09.49]We will see that day let go(我们必将看到那终点)\n[03:10.71]Oh 爱 oh 爱\n[03:14.74]Got me feeling drunk and high(让我如此沉醉)\n[03:17.27]So high so high(兴致高昂)\n[03:21.91]Oh 爱 oh 爱\n[03:25.35]Got me feeling drunk and high(让我如此沉醉)\n[03:27.95]So high so high(兴致高昂)\n[03:32.12]Oh 爱 oh 爱\n[03:35.96]Got me feeling drunk and high(让我如此沉醉)\n[03:38.72]So high so high(兴致高昂)\n[03:42.71]Oh 爱\n[03:46.70]Got me feeling drunk and high(让我如此沉醉)\n[03:49.30]So high so high(兴致高昂)\n[03:54.74]你觉得我会在意么\n[03:57.37]你给的质疑\n[03:58.61]你觉得我会猜疑么\n[04:00.06]只相信自己\n[04:01.40]用音乐转换季节\n[04:02.66]所以不会再畏惧冬天\n[04:04.54]中文Hip-Hop(说唱音乐)有版图\n[04:06.62]我会在最中间\n[04:08.18]Yeah you feel me(用心感受我想说的)\n[04:09.00]\n"},{num:1,pic:.1,name:"出山",starName:"花粥",playbackVolume:"3.29",url:"https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E6%94%80%E7%99%BB-%E6%BD%98%E7%8E%AE%E6%9F%8F.mp3",img:"http://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg",version:9,id:2,isChecked:!1,lyric:"[by:GoodTM]\n[00:00.000] 作曲 : 花粥\n[00:01.000] 作词 : 花粥\n[00:10.43]\n[00:11.12]在夜半三更过天桥从来不敢回头看\n[00:15.86]白日里是车水马龙此时脚下是忘川\n[00:21.30]我独自走过半山腰山间野狗来作伴\n[00:25.19]层林尽染百舸流秋风吹过鬼门关\n[00:29.81]一瞬三年五载 品粗茶 食淡饭\n[00:34.49]六界八荒四海 无人与我来叫板\n[00:39.19]人间荒唐古怪 竹林外 有书斋\n[00:43.78]匿于此地畅快 偏来者不善善者不来\n[00:50.85]是我装模作样在瞎掰\n[00:55.18]还是他们本就心怀鬼胎\n[00:57.82]有人不知悔改 迷雾中混淆黑白\n[01:02.46]在情怀里市侩 旁人不敢来拆穿\n[01:07.17]看似时来运转 实则在顶风作案\n[01:11.73]待曲终又人散 这一出还有谁在围观\n[01:16.79]在凡尘修炼二十载听闻水能滴石穿\n[01:21.07]帝王豪杰风云变幻敌不过桑田沧海\n[01:25.85]我不关心谁的江山只眷恋两小无猜\n[01:30.36]兴风作浪不稀罕只身固守峨眉山\n[01:35.14]一瞬三年五载 品粗茶 食淡饭\n[01:39.73]六界八荒四海 无人与我来叫板\n[01:44.33]人间荒唐古怪 竹林外 有书斋\n[01:49.11]匿于此地畅快 偏来者不善善者不来\n[01:56.00]是我装模作样在瞎猜\n[02:00.39]还是他们本就心怀鬼胎\n[02:03.15]有人不知悔改 迷雾中混淆黑白\n[02:07.73]在情怀里市侩 旁人不敢来拆穿\n[02:12.39]看似时来运转 实则在顶风作案\n[02:17.06]待曲终又人散 这一出还有谁在围观\n[02:21.82]静悄悄配唠唠叨叨\n[02:24.00]随便瞧瞧我凑凑热闹\n[02:26.34]客串也别太潦草\n[02:28.70]吃的生蚝要蘸个酱料\n[02:31.00]悄悄你唠唠叨叨\n[02:33.30]随便瞧瞧你凑的热闹\n[02:35.68]听到你做个记号\n[02:37.84]请装进书包别四处招摇\n[02:40.29]有人迷途知返\n[02:45.08]便是苦尽甘来\n[02:50.00]一瞬三年五载\n[02:54.15]这曲终又人散\n[03:33.63]\n[03:33.95]合作音乐人：王胜男\n[03:34.13]音乐制作：BachBeats\n[03:34.31]录音师：种旭\n[03:34.48]混音／母带处理：钻石狗音乐工作室（北京）\n[03:34.82]专辑封面设计：姜小海\n[03:35.25]\n"},{num:1,pic:.1,name:"来自天堂的魔鬼",starName:"邓紫棋",playbackVolume:"1.78",url:"https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E6%9D%A5%E8%87%AA%E5%A4%A9%E5%A0%82%E7%9A%84%E9%AD%94%E9%AC%BC-%E9%82%93%E7%B4%AB%E6%A3%8B.mp3",img:"http://p1.music.126.net/kVwk6b8Qdya8oDyGDcyAVA==/1364493930777368.jpg",version:18,id:3,isChecked:!1,lyric:"[00:00.000] 作曲 : G.E.M.邓紫棋\n[00:00.666] 作词 : G.E.M.邓紫棋\n[00:02.00]编曲：Lupo Groinig\n[00:03.00]监制：Lupo Groinig\n[00:07.45]我见过天使\n[00:09.30]遇过魔鬼\n[00:10.87]亲爱的 你到底\n[00:12.62]你到底是谁\n[00:13.86]夜里做了美丽的恶梦\n[00:17.37]想清醒我却抵不过心动\n[00:21.08]梦里你是无底的黑洞\n[00:24.18]我无力抗拒失重\n[00:27.17]我的意识自控脉搏流动\n[00:31.47]全被你神秘引力操控\n[00:34.81]亲爱的你是危险的迷宫\n[00:38.26]我找不到出口\n[00:42.85]You took my heart away\n[00:45.56]away away away\n[00:49.86]My head is blown away\n[00:52.58]away away away\n[00:57.05]你就是传说来自天堂的魔鬼\n[01:03.95]You took my heart away\n[01:05.56]away away away\n[01:08.43]away away away\n[01:26.45]拜托别对我细心问候\n[01:29.42]这是你也不察觉的阴谋\n[01:33.08]我讨厌你无心的微笑\n[01:36.61]我快无可救药\n[01:39.58]你像一个漩涡慢慢让我\n[01:44.13]无法抽离一直地坠落\n[01:46.98]亲爱的你是优雅的恶魔\n[01:50.81]一点一点把我吞没\n[01:53.56]You took my heart away\n[01:56.05]away away away\n[02:00.56]My head is blown away\n[02:03.07]away away away\n[02:07.64]你就是传说来自天堂的魔鬼\n[02:14.59]You  took my heart away\n[02:16.12]away away away\n[02:18.97]away away away\n[02:37.48]如果你是蛇的诱惑\n[02:40.11]你存心迷惑 我才能软弱\n[02:44.20]但你是牛顿头上那颗\n[02:46.97]若无其事的苹果\n[02:51.83]You took my heart away\n[02:54.32]away away away\n[02:58.72]You took my heart away\n[03:01.36]away away away\n[03:05.75]You took my heart away\n[03:08.49]away away away\n[03:12.71]My head is blown away\n[03:15.49]away away away\n[03:19.79]你就是传说来自天堂的魔鬼\n[03:26.66]You took my heart away\n[03:28.62]away away away\n[03:31.33]away away away\n[03:56.95]你到底是谁 你是谁\n[04:00.43]你到底是谁\n"}];n.setStorageSync("micList",e)},onShow:function(){n.getStorageSync("userInfo")&&(this.isFrist=!1),this.micList=n.getStorageSync("micList"),this.micTabList=n.getStorageSync("micList");var a={all:"修改了",info:"我被修改了",name:"我被修改了"};this.SET_MICINFO(a)},onPageScroll:function(n){n.scrollTop>this.headerTop?this.isTop=!0:this.isTop=!1},methods:i({},(0,o.mapMutations)(["SET_MICLIST","SET_MICINFO","SET_MICSTATUS"]),{appTest:function(){},homeGoRegister:function(){n.navigateTo({url:"/pages/login/login"})},go_shopDetails:function(a){console.log(t(a," at pages/index/index.vue:303")),n.navigateTo({url:"/pages/shopDetails/shopDetails?id="+a})},goStar:function(){n.navigateTo({url:"/pages/starMusic/starMusic"})},goTbox:function(){n.navigateTo({url:"/pages/myTbox/myTbox"})},goRanking:function(){n.navigateTo({url:"/pages/ranking/ranking"})},micTabClick:function(n,a){var e=this;e.micTabStatus=n,e.scrollLeft=90*(n-2);var t=e.micList,o=[];t.map(function(n,e,t){n.version==a&&o.push(n)}),e.micTabList=o,0==a&&(e.micTabList=t)},close:function(){this.initStatus=!0},swiper_change:function(n){var a=this;console.log(t(n.detail," at pages/index/index.vue:353")),2==n.detail.current&&setTimeout(function(){a.close()},1e3)},goMic:function(){n.navigateTo({url:"/pages/micPlayPage/micPlayPage"})},play:function(n){var a=wx.createVideoContext("myvideo",this);a.requestFullScreen(),this.fullScreen=!0},closeVideo:function(){var n=wx.createVideoContext("myvideo",this);n.exitFullScreen(),this.fullScreen=!1},getScancode:function(){n.scanCode({success:function(a){n.showToast({title:"条码类型:"+a.scanType+"，条码内容："+a.result,duration:2e3,icon:"none"}),console.log(t("条码类型："+a.scanType," at pages/index/index.vue:397")),console.log(t("条码内容："+a.result," at pages/index/index.vue:398"))}})}})};a.default=s}).call(this,e("6e42")["default"],e("0de9")["default"])},8273:function(n,a,e){"use strict";e.r(a);var t=e("78b5"),o=e.n(t);for(var i in t)"default"!==i&&function(n){e.d(a,n,function(){return t[n]})}(i);a["default"]=o.a}},[["05e1","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/micPlayPage/micPlayPage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/micPlayPage/micPlayPage.js';

define('pages/micPlayPage/micPlayPage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/micPlayPage/micPlayPage"],{"0a1b":function(n,a,t){},3073:function(n,a,t){"use strict";t.r(a);var e=t("d967"),r=t("a26a");for(var i in r)"default"!==i&&function(n){t.d(a,n,function(){return r[n]})}(i);t("aa2c");var o=t("2877"),s=Object(o["a"])(r["default"],e["a"],e["b"],!1,null,null,null);a["default"]=s.exports},"5c46":function(n,a,t){"use strict";(function(n,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=wx.getBackgroundAudioManager(),r=(n.createAnimation({duration:12e3,timingFunction:"linear"}),{data:function(){return{shopIdx:0,shopId:0,playingObj:{num:1,pic:.1,name:"攀登",starName:"潘玮柏",url:"https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E5%87%BA%E5%B1%B1-%E8%8A%B1%E7%B2%A5.mp3",img:"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",version:21,lyric:"[00:00.000] 作曲 : 黄韵仁[00:01.000] 作词 : 冷玩妹 Coldplay Sister[00:14.540]我和你啊存在一种危险关系[00:21.670]彼此挟持这另一部份的自己[00:27.680]本以为这完整了爱的定义[00:34.720]那就乖乖的守护着你[00:39.440]相爱变成猜忌怀疑的烂游戏"},playNum:0,isPlay:!0,lrcDir:"[00:00.60]许巍 - 此时此刻\r\n[00:01.60]词：许巍\r\n[00:02.60]曲：许巍\r\n[00:21.40]此刻谁在茫茫人海之中\r\n[01:28.14]在这浩瀚的宇宙\r\n[01:31.44]蓝色的城市\r\n[01:34.89]只是生命的旅程\r\n[01:38.19]瞬间的停留\r\n[01:41.81]欢乐和悲伤\r\n[01:45.34]不会再回头\r\n[01:48.14]只是自在向远方\r\n[01:52.05]也来不及感伤\r\n[01:57.06]如此难舍的美丽\r\n[02:00.71]萦绕我脑海\r\n[02:03.76]难以挥去的不安\r\n[02:07.46]曾在我心里\r\n[02:10.24]无论欢乐和悲伤\r\n[02:13.89]我已不会再回头\r\n[02:17.34]只是寂静向远方\r\n[02:20.76]这光明的旅程\r\n[02:26.45]此刻谁在群山云海之巅\r\n[02:33.04]自在的心畅游天外之天\r\n[02:40.13]此刻谁在清晨伫立海边\r\n[02:45.97]迎着朝阳缓缓升起\r\n[02:52.99]心中开启无言欣喜\r\n[03:28.11]此刻谁在茫茫人海之中\r\n[03:34.98]久久凝视日落向着天边\r\n[03:41.88]心中绽放自由的梦想\r\n[03:48.76]默默思念旅行的终点\r\n[04:22.97]此刻谁在茫茫人海之中\r\n[04:29.88]久久凝视日落向着天边\r\n[04:36.77]心中绽放自由的梦想\r\n[04:43.55]默默思念旅行的终点\r\n",storyContent:[],marginTop:0,currentIndex:0,sliderValue:Number,sliderMax:Number,now:"00:00",long:"04:00",time_width:0,micList:[{num:1,pic:.1,name:"攀登",starName:"潘玮柏",playbackVolume:"1.21",url:"https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E5%87%BA%E5%B1%B1-%E8%8A%B1%E7%B2%A5.mp3",img:"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",version:21,lyric:"[00:01.78]编曲：赫连长泓\n[00:02.10]音乐总监：刘洲\n[00:03.20]定位制作人：刘洲\n[00:04.25]中文填词：G.E.M.邓紫棋\n[00:05.30]Rap词：潘玮柏/G.E.M.邓紫棋/艾热\n[00:06.40]混音：时俊峰\n[00:07.50]改编歌曲：《Hymn For The Weekend》\n[00:08.60]原唱：Coldplay\n[00:09.70]原词曲：aaaa Scott Alan\n[00:10.80]改编歌曲词曲版权代理：环球音乐出版有限公司(Universal Music Publishing Ltd.)\n[00:11.90]百代音乐版权代理（北京）有限公司\n[00:12.00]北京盛海传音文化传播有限公司\n[00:14.00]有时候我会问自己\n[00:19.17]到底为了什么努力\n[00:24.86]赢得什么才叫胜利\n[00:30.04]你曾否问自己\n[00:36.13]我们明白很多时候\n[00:37.45]当你醒来渴望自由\n[00:38.86]但现实总变质\n[00:40.17]并不是你想要的样子\n[00:41.53]有人在逆境中蜕变\n[00:42.67]想在机遇中兑现\n[00:44.03]说过的承诺\n[00:44.71]更多的时候\n[00:45.36]都被打磨成碎片\n[00:46.79]是因为生活要继续\n[00:48.12]想振作 获得惊喜\n[00:49.50]要更多 要心意\n[00:50.82]更精细 更尽力\n[00:52.18]让经历跟新意\n[00:53.59]更亲密 更凝聚\n[00:54.84]这就是我想要的\n[00:56.23]我想要我能被铭记\n[00:58.00]想忘记那些\n[00:58.94]华丽的浮夸的装点\n[01:00.45]滑稽的实话里\n[01:01.29]藏着谎话却又很庄严\n[01:03.17]Do what I do (做我想做的)\n[01:04.45]是因为不想停止迈步\n[01:05.66]不是不在乎\n[01:06.93]而是我害怕心思败露\n[01:08.51]世界的面积\n[01:09.36]可能大到让人抵触\n[01:10.77]但时间的延续\n[01:11.92]就是你最大的礼物\n[01:13.52]别畏惧\n[01:14.18]像是暴露你某个意图\n[01:16.21]让阳光彻底照着你\n[01:17.68]每寸皮肤\n[01:18.87]I pray for myself(为我自己祈祷)\n[01:20.14]I pray for my hood(为我的队友们祈祷)\n[01:21.43]真理藏在心里\n[01:22.81]Keep real for my world(在我的世界里保持绝对的真实)\n[01:24.18]我为我自己买单\n[01:25.40]不会逃脱而是负责\n[01:26.90]我自己对抗灾难\n[01:28.09]哪怕超过我的负荷\n[01:29.60]You feel me(感受我的心声)\n[01:29.75]Oh 爱 oh 爱\n[01:33.00]Got me feeling drunk and high(让我如此沉醉)\n[01:36.20]So high so high(兴致高昂)\n[01:40.63]Oh 爱 oh 爱\n[01:44.10]Got me feeling drunk and high(让我如此沉醉)\n[01:46.62]So high so high(兴致高昂)\n[01:50.36]我曾经如此随和\n[01:51.55]跟着世界的规则\n[01:52.88]他们说什么就什么\n[01:54.61]听着话 心却是灰色\n[01:56.17]沉睡着\n[01:56.95]多努力追上\n[01:57.85]社会太看重的荣耀\n[01:59.19]我逐一对抗\n[02:00.49]恶鬼在煽动的控告\n[02:02.02]根本都不重要\n[02:02.88]理想再崇高\n[02:03.92]每当我动摇\n[02:04.84]撑着我是一个拥抱\n[02:06.22]我的忠告 别覆辙重蹈\n[02:08.17]一切的功劳\n[02:09.24]来自我爱的 爱着我的\n[02:10.74]身边每一个珍贵的容貌\n[02:12.94]Yo shout out to 2Pac(用这首歌向说唱歌手致敬)\n[02:15.53]Put your hands up(举起你们的双手)\n[02:16.94]So just bounce(就尽情地释放吧)\n[02:18.45]If you feel me(如果你听懂这首歌的话)\n[02:18.74]不要放肆 学着感激\n[02:20.05]像个壮士 勇往向前去\n[02:21.56]伤势再痛不要放弃\n[02:22.96]拼死拼活地追求\n[02:24.31]到底为了什么意义\n[02:25.73]不就是为了成为你口中的\n[02:27.60]Favorite MC(最佳说唱歌手)\n[02:28.66]他要spit game on fire(火力全开)\n[02:29.88]他要带你们higher(更好的体验)\n[02:31.42]他要证明说唱文化\n[02:32.61]本身就是个爷们儿\n[02:34.27]我觉得现在可以好好入睡\n[02:36.93]因为世界都是\n[02:38.13]Hip-Hop(说唱音乐)词汇\n[02:39.32]Never thought (从未想过)\n[02:40.06]I be in position to do this  (我能够参与其中)\n[02:41.31]It all started (一切都开始来自)\n[02:42.18]When Pac nation chanted(他的歌)\n[02:43.44]《How do you want It》(歌名)\n[02:44.00]I keep it old school(带你感受老学校的音乐)\n[02:45.30]With some Pac imitation(模仿着)\n[02:46.73]West side till I die(西海岸的终点)\n[02:47.94]You love it no hesitation(爱他的人不会有一丝犹豫)\n[02:49.73]Dear mama (亲爱的母亲)\n[02:50.30]不要哭我永远在你身边\n[02:51.73]别在乎世界怎么看我\n[02:53.32]对我多少偏见\n[02:54.54]今天忍气吞声\n[02:55.74]为了要更好的明天\n[02:57.26]我们说的唱的\n[02:58.44]坚持的全都会实现\n[02:59.90]So I pray for my loved ones(为我爱的人祈祷)\n[03:01.43]And I pray for the warriors(也为所有的勇士们祈祷)\n[03:02.76]I pray for the go-getters (为所有的能者志士祈祷)\n[03:04.14]And I pray for the naysayers(也为那些唾弃我的人们祈祷)\n[03:05.48]Lord please let me(请允许我)\n[03:06.86]See another day(坚持下去)\n[03:07.94]浴火凤凰展开双翼\n[03:09.49]We will see that day let go(我们必将看到那终点)\n[03:10.71]Oh 爱 oh 爱\n[03:14.74]Got me feeling drunk and high(让我如此沉醉)\n[03:17.27]So high so high(兴致高昂)\n[03:21.91]Oh 爱 oh 爱\n[03:25.35]Got me feeling drunk and high(让我如此沉醉)\n[03:27.95]So high so high(兴致高昂)\n[03:32.12]Oh 爱 oh 爱\n[03:35.96]Got me feeling drunk and high(让我如此沉醉)\n[03:38.72]So high so high(兴致高昂)\n[03:42.71]Oh 爱\n[03:46.70]Got me feeling drunk and high(让我如此沉醉)\n[03:49.30]So high so high(兴致高昂)\n[03:54.74]你觉得我会在意么\n[03:57.37]你给的质疑\n[03:58.61]你觉得我会猜疑么\n[04:00.06]只相信自己\n[04:01.40]用音乐转换季节\n[04:02.66]所以不会再畏惧冬天\n[04:04.54]中文Hip-Hop(说唱音乐)有版图\n[04:06.62]我会在最中间\n[04:08.18]Yeah you feel me(用心感受我想说的)\n[04:09.00]\n"},{num:1,pic:.1,name:"出山",starName:"花粥",playbackVolume:"3.29",url:"https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E6%94%80%E7%99%BB-%E6%BD%98%E7%8E%AE%E6%9F%8F.mp3",img:"http://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg",version:9,lyric:"[by:GoodTM]\n[00:00.000] 作曲 : 花粥\n[00:01.000] 作词 : 花粥\n[00:10.43]\n[00:11.12]在夜半三更过天桥从来不敢回头看\n[00:15.86]白日里是车水马龙此时脚下是忘川\n[00:21.30]我独自走过半山腰山间野狗来作伴\n[00:25.19]层林尽染百舸流秋风吹过鬼门关\n[00:29.81]一瞬三年五载 品粗茶 食淡饭\n[00:34.49]六界八荒四海 无人与我来叫板\n[00:39.19]人间荒唐古怪 竹林外 有书斋\n[00:43.78]匿于此地畅快 偏来者不善善者不来\n[00:50.85]是我装模作样在瞎掰\n[00:55.18]还是他们本就心怀鬼胎\n[00:57.82]有人不知悔改 迷雾中混淆黑白\n[01:02.46]在情怀里市侩 旁人不敢来拆穿\n[01:07.17]看似时来运转 实则在顶风作案\n[01:11.73]待曲终又人散 这一出还有谁在围观\n[01:16.79]在凡尘修炼二十载听闻水能滴石穿\n[01:21.07]帝王豪杰风云变幻敌不过桑田沧海\n[01:25.85]我不关心谁的江山只眷恋两小无猜\n[01:30.36]兴风作浪不稀罕只身固守峨眉山\n[01:35.14]一瞬三年五载 品粗茶 食淡饭\n[01:39.73]六界八荒四海 无人与我来叫板\n[01:44.33]人间荒唐古怪 竹林外 有书斋\n[01:49.11]匿于此地畅快 偏来者不善善者不来\n[01:56.00]是我装模作样在瞎猜\n[02:00.39]还是他们本就心怀鬼胎\n[02:03.15]有人不知悔改 迷雾中混淆黑白\n[02:07.73]在情怀里市侩 旁人不敢来拆穿\n[02:12.39]看似时来运转 实则在顶风作案\n[02:17.06]待曲终又人散 这一出还有谁在围观\n[02:21.82]静悄悄配唠唠叨叨\n[02:24.00]随便瞧瞧我凑凑热闹\n[02:26.34]客串也别太潦草\n[02:28.70]吃的生蚝要蘸个酱料\n[02:31.00]悄悄你唠唠叨叨\n[02:33.30]随便瞧瞧你凑的热闹\n[02:35.68]听到你做个记号\n[02:37.84]请装进书包别四处招摇\n[02:40.29]有人迷途知返\n[02:45.08]便是苦尽甘来\n[02:50.00]一瞬三年五载\n[02:54.15]这曲终又人散\n[03:33.63]\n[03:33.95]合作音乐人：王胜男\n[03:34.13]音乐制作：BachBeats\n[03:34.31]录音师：种旭\n[03:34.48]混音／母带处理：钻石狗音乐工作室（北京）\n[03:34.82]专辑封面设计：姜小海\n[03:35.25]\n"},{num:1,pic:.1,name:"来自天堂的魔鬼",starName:"邓紫棋",playbackVolume:"1.78",url:"https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E6%9D%A5%E8%87%AA%E5%A4%A9%E5%A0%82%E7%9A%84%E9%AD%94%E9%AC%BC-%E9%82%93%E7%B4%AB%E6%A3%8B.mp3",img:"http://p1.music.126.net/kVwk6b8Qdya8oDyGDcyAVA==/1364493930777368.jpg",version:18,lyric:"[00:00.000] 作曲 : G.E.M.邓紫棋\n[00:00.666] 作词 : G.E.M.邓紫棋\n[00:02.00]编曲：Lupo Groinig\n[00:03.00]监制：Lupo Groinig\n[00:07.45]我见过天使\n[00:09.30]遇过魔鬼\n[00:10.87]亲爱的 你到底\n[00:12.62]你到底是谁\n[00:13.86]夜里做了美丽的恶梦\n[00:17.37]想清醒我却抵不过心动\n[00:21.08]梦里你是无底的黑洞\n[00:24.18]我无力抗拒失重\n[00:27.17]我的意识自控脉搏流动\n[00:31.47]全被你神秘引力操控\n[00:34.81]亲爱的你是危险的迷宫\n[00:38.26]我找不到出口\n[00:42.85]You took my heart away\n[00:45.56]away away away\n[00:49.86]My head is blown away\n[00:52.58]away away away\n[00:57.05]你就是传说来自天堂的魔鬼\n[01:03.95]You took my heart away\n[01:05.56]away away away\n[01:08.43]away away away\n[01:26.45]拜托别对我细心问候\n[01:29.42]这是你也不察觉的阴谋\n[01:33.08]我讨厌你无心的微笑\n[01:36.61]我快无可救药\n[01:39.58]你像一个漩涡慢慢让我\n[01:44.13]无法抽离一直地坠落\n[01:46.98]亲爱的你是优雅的恶魔\n[01:50.81]一点一点把我吞没\n[01:53.56]You took my heart away\n[01:56.05]away away away\n[02:00.56]My head is blown away\n[02:03.07]away away away\n[02:07.64]你就是传说来自天堂的魔鬼\n[02:14.59]You  took my heart away\n[02:16.12]away away away\n[02:18.97]away away away\n[02:37.48]如果你是蛇的诱惑\n[02:40.11]你存心迷惑 我才能软弱\n[02:44.20]但你是牛顿头上那颗\n[02:46.97]若无其事的苹果\n[02:51.83]You took my heart away\n[02:54.32]away away away\n[02:58.72]You took my heart away\n[03:01.36]away away away\n[03:05.75]You took my heart away\n[03:08.49]away away away\n[03:12.71]My head is blown away\n[03:15.49]away away away\n[03:19.79]你就是传说来自天堂的魔鬼\n[03:26.66]You took my heart away\n[03:28.62]away away away\n[03:31.33]away away away\n[03:56.95]你到底是谁 你是谁\n[04:00.43]你到底是谁\n"}]}},onLoad:function(a){var t=this,e=n.getStorageSync("micList");this.shopId=a.id||9,e.map(function(n,a){n.version==t.shopId&&(t.playingObj=n,t.shopIdx=a)}),this.playFun()},onShow:function(){var n=this,a=getApp().globalData;e.onPlay(function(){if(e.duration!=n.max){var t=n.formStr(e.duration);a.duration=e.duration,n.sliderMax=e.duration,n.long=t}}),e.onTimeUpdate(function(){var r=parseInt(e.currentTime);if(r>0&&r!=a.currentTime){a.currentTime=r;var i=n.formStr(r);a.currentTime=r,n.sliderValue=r,n.now=i;var o=(e.duration/100).toFixed(2);if(e.currentTime/o>0){var s=(e.currentTime/o).toFixed(2);n.time_width=s}}if(n.storyContent.length-n.currentIndex==3?console.log(t("到底了"," at pages/micPlayPage/micPlayPage.vue:174")):n.currentIndex>=1&&(n.marginTop=22*(n.currentIndex-1)),n.currentIndex!=n.storyContent.length-1){var u=0;for(u=n.currentIndex;u<n.storyContent.length;u++)if(n.currentIndex==n.storyContent.length-2){if(parseFloat(e.currentTime)>parseFloat(n.storyContent[n.storyContent.length-1][0]))return void(n.currentIndex=n.storyContent.length-1)}else if(parseFloat(e.currentTime)>parseFloat(n.storyContent[u][0])&&parseFloat(e.currentTime)<parseFloat(n.storyContent[u+1][0]))return void(n.currentIndex=u)}})},methods:{nextMic:function(n){if("add"==n){var a=this.shopIdx;this.playingObj=this.micList[a+1]||this.micList[a-1],this.shopIdx=this.micList[a+1]?a+1:a-1,e.pause(),this.playFun()}else{var t=this.shopIdx;this.playingObj=this.micList[t-1]||this.micList[t+1],this.shopIdx=this.micList[t-1]?t-1:t+1,e.pause(),this.playFun()}},micControllerFun:function(n){"pause"==n?(this.isPlay=!0,e.play()):(this.isPlay=!1,e.pause())},formStr:function(n){var a=parseInt(n/60),t=parseInt(n%60);return t<10&&(t="0"+t),a<10&&(a="0"+a),a+":"+t},playFun:function(n){this.initMic(),e.title=this.playingObj.name,e.epname=this.playingObj.starName,e.singer=this.playingObj.name,e.src=this.playingObj.url,this.storyContent=this.sliceNull(this.parseLyric(this.playingObj.lyric))},initMic:function(){this.marginTop=0,this.currentIndex=0,this.now="00:00",this.long="00:00",this.sliderMax=0,this.sliderValue=0},parseLyric:function(n){var a=[],t=n.split("\n"),e=/\[\d{2}:\d{2}.\d{2}\]/g;while(!e.test(t[0]))t=t.slice(1);return 0===t[t.length-1].length&&t.pop(),t.forEach(function(n,t,r){var i=n.match(e),o=n.replace(e,"");i.forEach(function(n,t,e){var r=n.slice(1,-1).split(":");a.push([60*parseInt(r[0],10)+parseFloat(r[1]),o])})}),a.sort(function(n,a){return n[0]-a[0]}),a},sliceNull:function(n){for(var a=[],t=0;t<n.length;t++)""==n[t][1]||a.push(n[t]);return a}}});a.default=r}).call(this,t("6e42")["default"],t("0de9")["default"])},a26a:function(n,a,t){"use strict";t.r(a);var e=t("5c46"),r=t.n(e);for(var i in e)"default"!==i&&function(n){t.d(a,n,function(){return e[n]})}(i);a["default"]=r.a},aa2c:function(n,a,t){"use strict";var e=t("0a1b"),r=t.n(e);r.a},d967:function(n,a,t){"use strict";var e=function(){var n=this,a=n.$createElement;n._self._c},r=[];t.d(a,"a",function(){return e}),t.d(a,"b",function(){return r})}},[["8e19","common/runtime","common/vendor"]]]);
});
require('pages/micPlayPage/micPlayPage.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"156b":function(n,t,e){"use strict";var o=e("6d75"),a=e.n(o);a.a},"6d75":function(n,t,e){},aa2e:function(n,t,e){"use strict";(function(n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,o,a,i,r){try{var c=n[i](r),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(o,a)}function c(n){return function(){var t=this,e=arguments;return new Promise(function(o,a){var i=n.apply(t,e);function c(n){r(i,o,a,c,u,"next",n)}function u(n){r(i,o,a,c,u,"throw",n)}c(void 0)})}}var u={data:function(){return{isLogin:!1,login_code:"",login_photo:""}},onShow:function(){},methods:{isLoginFun:function(){""!=this.login_code&&""!=this.login_photo?this.isLogin=!0:this.isLogin=!1},getCode:function(){var t=c(a.default.mark(function t(){var e,o,i,r,c,u;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this.login_photo,o=Date.parse(new Date)/1e3,i="saqqweqw",r="".concat(e).concat(o).concat(i),c=this._md5(r),t.next=8,this.$wxhttp.post({url:"/lollipop/api/v1/get_vcode",data:{phone:e,utc:o,sign:c}});case 8:u=t.sent,console.log(n(u," at pages/login/login.vue:60")),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(n(t.t0," at pages/login/login.vue:62"));case 15:case"end":return t.stop()}},t,this,[[0,12]])}));function e(){return t.apply(this,arguments)}return e}(),goLogin:function(){var t=c(a.default.mark(function t(e){var i,r;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=this,console.log(n(e.detail.userInfo," at pages/login/login.vue:67")),!e.detail.userInfo){t.next=16;break}return o.setStorageSync("userInfo",e.detail.userInfo),t.prev=4,t.next=7,i.$wxhttp.post({url:"/lollipop/api/v1/login_bind",data:{phone:i.login_photo,tmp_vcode:i.login_code,wx_icon_path:e.detail.userInfo.avatarUrl,wx_nick_name:e.detail.userInfo.nickName}});case 7:r=t.sent,r.data.access_token&&(o.setStorageSync("access_token",r.data),o.navigateBack()),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](4),console.log(n(t.t0," at pages/login/login.vue:86"));case 14:t.next=17;break;case 16:o.showToast({title:"允许授权才能进行登录",icon:"none",duration:1e3});case 17:case"end":return t.stop()}},t,this,[[4,11]])}));function e(n){return t.apply(this,arguments)}return e}()}};t.default=u}).call(this,e("0de9")["default"],e("6e42")["default"])},b2a5:function(n,t,e){"use strict";e.r(t);var o=e("aa2e"),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=a.a},b50c:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},eb66:function(n,t,e){"use strict";e.r(t);var o=e("b50c"),a=e("b2a5");for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);e("156b");var r=e("2877"),c=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports}},[["e21b","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/shopConfirmation/shopConfirmation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shopConfirmation/shopConfirmation.js';

define('pages/shopConfirmation/shopConfirmation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopConfirmation/shopConfirmation"],{2180:function(o,n,t){},"44a3":function(o,n,t){"use strict";(function(o,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{userAddress:null,num:0,allNum:0,addShowList:[],orderType:"",allGoodsPrice:0,allGoodsNum:0}},onShow:function(){var o=this,n=[];if("buyNow"==o.orderType){var t=wx.getStorageSync("buyNowInfo");t&&t.shopList&&(n=t.shopList)}else{var e=wx.getStorageSync("addShowList");n=e.filter(function(o){return o.active})}o.addShowList=n,o.initShippingAddress()},methods:{initShippingAddress:function(){this.userAddress=o.getStorageSync("address")||null,this.processYunfei()},processYunfei:function(){for(var o=this,n=this.addShowList,t="[",e=0,s=0,i="",r=0;r<n.length;r++){var a=n[r];e+=Number(a.pic)*Number(a.num),s+=a.num;var d="";r>0&&(d=","),r>=0&&(i+=a.id+","),d+='{"goodsId":'+a.id+',"number":'+a.num+"}",t+=d}t+="]",o.allGoodsPrice=Number(e).toFixed(2),o.goodsJsonStr=t,o.goodsId=i,o.allGoodsNum=s},goAddress:function(){o.navigateTo({url:"/pages/address/address"})},confirmation:function(){if(this.userAddress){var n=[];n.goodsList=this.goodsJsonStr,n.addresslist=this.userAddress,console.log(t(n," at pages/shopConfirmation/shopConfirmation.vue:161")),o.showToast({title:"在等支付接口",duration:1e3,icon:"none"})}else o.showToast({title:"请选择配送地址",duration:1e3,icon:"none"})}}};n.default=e}).call(this,t("6e42")["default"],t("0de9")["default"])},a5d5:function(o,n,t){"use strict";t.r(n);var e=t("44a3"),s=t.n(e);for(var i in e)"default"!==i&&function(o){t.d(n,o,function(){return e[o]})}(i);n["default"]=s.a},a79c:function(o,n,t){"use strict";t.r(n);var e=t("e7de"),s=t("a5d5");for(var i in s)"default"!==i&&function(o){t.d(n,o,function(){return s[o]})}(i);t("d307");var r=t("2877"),a=Object(r["a"])(s["default"],e["a"],e["b"],!1,null,null,null);n["default"]=a.exports},d307:function(o,n,t){"use strict";var e=t("2180"),s=t.n(e);s.a},e7de:function(o,n,t){"use strict";var e=function(){var o=this,n=o.$createElement;o._self._c},s=[];t.d(n,"a",function(){return e}),t.d(n,"b",function(){return s})}},[["561e","common/runtime","common/vendor"]]]);
});
require('pages/shopConfirmation/shopConfirmation.js');
__wxRoute = 'pages/shopDetails/shopDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shopDetails/shopDetails.js';

define('pages/shopDetails/shopDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopDetails/shopDetails"],{"48fe":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"9c0f":function(t,n,e){"use strict";var i=e("b4d4"),o=e.n(i);o.a},b4d4:function(t,n,e){},be0a:function(t,n,e){"use strict";e.r(n);var i=e("c4de"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},c4de:function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{btnType:0,shopId:22,miObj:{},swiperIdx:0,indicatorDots:!1,autoplay:!0,interval:2e3,duration:500,micTabStatus:0,shopIsShow:!1,shopDetails:{name:"华晨宇",pic:10,micName:"烟火里的尘埃",num:1,id:"2",isChecked:!1},fullScreen:!1}},onLoad:function(n){var e=this,i=t.getStorageSync("micList");this.shopId=n.id||9,i.map(function(t){t.version==e.shopId&&(e.miObj=t)})},onShow:function(){},methods:{intervalChange:function(t){this.swiperIdx=t.detail.current},onShareAppMessage:function(t){return console.log(e(t," at pages/shopDetails/shopDetails.vue:156")),t.from,{title:this.miObj.name,path:"/pages/shopDetails/shopDetails"}},buyShop:function(){this.shopIsShow=!0,this.btnType=1},addShop:function(){this.shopIsShow=!0,this.btnType=0},add:function(t,n){var e={name:t.name,size:n.size,price:n.price,cunt:1};if(this.pazzdata.length>0){var i=this.pazzdata.filter(function(e){return e.name==t.name&&e.price==n.price});null!=i&&i.length>0?i[0].cunt++:this.pazzdata.push(e)}},confirmBtn:function(){var n=wx.getStorageSync("addShowList")||[],e=this.miObj,i=n.find(function(t){return t.version===e.version});i?n.map(function(t){t.version==i.version&&(t.num+=+e.num)}):n.push(e),t.setStorageSync("addShowList",n),0==this.btnType?(t.showToast({duration:1e3,icon:"none",title:"添加成功，在购物车等您"}),this.shopIsShow=!1):(t.navigateTo({url:"/pages/shopConfirmation/shopConfirmation"}),this.shopIsShow=!1)},addBtn:function(n){var i=this.miObj;"add"==n?(console.log(e("add"," at pages/shopDetails/shopDetails.vue:236")),i.num++):(console.log(e("减"," at pages/shopDetails/shopDetails.vue:240")),1==i.num?t.showToast({icon:"none",duration:1e3,title:"不能在少啦"}):i.num--),this.miObj=i},goMic:function(){t.navigateTo({url:"/pages/micPlayPage/micPlayPage?id="+this.miObj.version})},close:function(){this.shopIsShow=!1}}};n.default=i}).call(this,e("6e42")["default"],e("0de9")["default"])},fafa:function(t,n,e){"use strict";e.r(n);var i=e("48fe"),o=e("be0a");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("9c0f");var s=e("2877"),u=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports}},[["2b4e","common/runtime","common/vendor"]]]);
});
require('pages/shopDetails/shopDetails.js');
__wxRoute = 'pages/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cart/cart.js';

define('pages/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"0856":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{alertBoxIsShow:!1,allPic:0,shopId:[],delId:0,shopCount:0,isAllChecked:!1,shopList:[],goodsList:{saveHidden:!0,totalPrice:0,allSelect:!0,noSelect:!1,list:[]}}},onShow:function(){var e=[],i=wx.getStorageSync("addShowList");this.goodsList.list=i,e=i,console.log(t(e," at pages/cart/cart.vue:91")),this.setGoodsList(this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),e)},methods:{goConfirmation:function(){if(this.goodsList.noSelect)wx.showToast({title:"请选择商品",image:"/static/img/login_close.png",duration:2e3});else{var t=[],e=wx.getStorageSync("addShowList");t=e.filter(function(t){return t.active}),0!=t.length?this.navigateToPayOrder():wx.showToast({title:"请选择商品",image:"/static/img/login_close.png",duration:2e3})}},delItem:function(t){var e=this.goodsList.list;e.splice(t,1),this.setGoodsList(this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),e)},selectTap:function(t,e){var i=this.goodsList.list;""!==e&&null!=e&&(i[parseInt(e)].active=!i[parseInt(e)].active,this.setGoodsList(this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),i))},totalPrice:function(){for(var t=this.goodsList.list,e=0,i=0;i<t.length;i++){var s=t[i];s.active&&(e+=parseFloat(s.pic)*s.num)}return e=parseFloat(e.toFixed(2)),e},allSelect:function(){for(var t=this.goodsList.list,e=!1,i=0;i<t.length;i++){var s=t[i];if(!s.active){e=!1;break}e=!0}return e},noSelect:function(){for(var t=this.goodsList.list,e=0,i=0;i<t.length;i++){var s=t[i];s.active||e++}return e==t.length},setGoodsList:function(e,i,s,o,a){this.goodsList.saveHidden=e,this.goodsList.totalPrice=i,this.goodsList.allSelect=s,this.goodsList.noSelect=o,this.goodsList.list=a,this.shopList=a,console.log(t(a," at pages/cart/cart.vue:188"));var n={},l=0;n.shopList=a;for(var r=0;r<a.length;r++)l+=a[r].number;n.shopNum=l,wx.setStorage({key:"addShowList",data:a})},bindAllSelect:function(){var t=this.goodsList.allSelect,e=this.goodsList.list;if(t)for(var i=0;i<e.length;i++){var s=e[i];s.active=!1}else for(i=0;i<e.length;i++){s=e[i];s.active=!0}this.setGoodsList(this.getSaveHide(),this.totalPrice(),!t,this.noSelect(),e)},jiaBtnTap:function(t,e,i){var s=this.goodsList.list;""!==i&&null!=i&&(s[parseInt(i)].num++,this.setGoodsList(this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),s))},jianBtnTap:function(t,e,i){var s=this.goodsList.list;""!==i&&null!=i&&(s[parseInt(i)].num>1?(s[parseInt(i)].num--,this.setGoodsList(this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),s)):1==s[parseInt(i)].num&&(this.delId=i,this.alertBoxIsShow=!0))},editTap:function(){for(var t=this.goodsList.list,e=0;e<t.length;e++){var i=t[e];i.active=!1}this.setGoodsList(!this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),t)},saveTap:function(){for(var t=this.goodsList.list,e=0;e<t.length;e++){var i=t[e];i.active=!0}this.setGoodsList(!this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),t)},getSaveHide:function(){var t=this.goodsList.saveHidden;return t},deleteSelected:function(){var t=this.goodsList.list;t=t.filter(function(t){return!t.active}),this.setGoodsList(this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),t)},alertBoxClose:function(){this.alertBoxIsShow=!1},alertBoxDelete:function(t){this.delItem(this.delId),this.alertBoxIsShow=!1},toIndexPage:function(){wx.switchTab({url:"/pages/index/index"})},navigateToPayOrder:function(){wx.hideLoading(),wx.navigateTo({url:"/pages/shopConfirmation/shopConfirmation"})}}};e.default=i}).call(this,i("0de9")["default"])},"166f":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o})},2788:function(t,e,i){"use strict";i.r(e);var s=i("0856"),o=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);e["default"]=o.a},"772f":function(t,e,i){"use strict";var s=i("f123"),o=i.n(s);o.a},7968:function(t,e,i){"use strict";i.r(e);var s=i("166f"),o=i("2788");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("772f");var n=i("2877"),l=Object(n["a"])(o["default"],s["a"],s["b"],!1,null,null,null);e["default"]=l.exports},f123:function(t,e,i){}},[["d6b5","common/runtime","common/vendor"]]]);
});
require('pages/cart/cart.js');
__wxRoute = 'pages/mine/mine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/mine.js';

define('pages/mine/mine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/mine"],{2220:function(n,t,e){"use strict";var r=e("3265"),u=e.n(r);u.a},3265:function(n,t,e){},"79f4":function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return r}),e.d(t,"b",function(){return u})},"9ea1":function(n,t,e){"use strict";e.r(t);var r=e("c5b2"),u=e.n(r);for(var o in r)"default"!==o&&function(n){e.d(t,n,function(){return r[n]})}(o);t["default"]=u.a},b94e:function(n,t,e){"use strict";e.r(t);var r=e("79f4"),u=e("9ea1");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("2220");var a=e("2877"),c=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},c5b2:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{userInfo:{avatarUrl:"/static/img/dj.png",nickName:"尼米用户"}}},onLoad:function(){n.getStorageSync("userInfo")&&(this.userInfo=n.getStorageSync("userInfo"))},onShow:function(){n.getStorageSync("userInfo")&&(this.userInfo=n.getStorageSync("userInfo"))},methods:{goOrder:function(t){n.navigateTo({url:"/pages/myOrder/myOrder?micTabStatus="+t})}}};t.default=e}).call(this,e("6e42")["default"])}},[["214b","common/runtime","common/vendor"]]]);
});
require('pages/mine/mine.js');
__wxRoute = 'pages/myOrder/myOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myOrder/myOrder.js';

define('pages/myOrder/myOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myOrder/myOrder"],{"1a9d":function(n,t,a){"use strict";var e=a("d4ca"),c=a.n(e);c.a},"4f26":function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},c=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return c})},7929:function(n,t,a){"use strict";a.r(t);var e=a("4f26"),c=a("92f3");for(var i in c)"default"!==i&&function(n){a.d(t,n,function(){return c[n]})}(i);a("1a9d");var u=a("2877"),r=Object(u["a"])(c["default"],e["a"],e["b"],!1,null,null,null);t["default"]=r.exports},"92f3":function(n,t,a){"use strict";a.r(t);var e=a("f291"),c=a.n(e);for(var i in e)"default"!==i&&function(n){a.d(t,n,function(){return e[n]})}(i);t["default"]=c.a},d4ca:function(n,t,a){},f291:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{micTabStatus:0,scrollLeft:0,micTab:[{name:"全部订单"},{name:"待付款"},{name:"待发货"},{name:"待收货"},{name:"待评价"}],shopList:[{name:"周杰伦",pic:20,micName:"黑色毛衣",num:1,id:"1",isChecked:!1},{name:"华晨宇",pic:10,micName:"烟火里的尘埃",num:2,id:"2",isChecked:!1}]}},onLoad:function(n){this.micTabStatus=n.micTabStatus},methods:{micTabClick:function(n){this.micTabStatus=n,this.scrollLeft=90*(n-2)}}};t.default=e}},[["1413","common/runtime","common/vendor"]]]);
});
require('pages/myOrder/myOrder.js');
__wxRoute = 'pages/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/address.js';

define('pages/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"084a":function(e,t,s){"use strict";s.r(t);var r=s("39de"),a=s.n(r);for(var n in r)"default"!==n&&function(e){s.d(t,e,function(){return r[e]})}(n);t["default"]=a.a},"23da":function(e,t,s){"use strict";s.r(t);var r=s("767e"),a=s("084a");for(var n in a)"default"!==n&&function(e){s.d(t,e,function(){return a[e]})}(n);s("e369");var o=s("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=i.exports},"39de":function(e,t,s){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{userName:"",userPhoto:"",cityArr:[],address:"",citybox:"",ajxtrue:!1}},onShow:function(){var e=wx.getStorageSync("address");this.userName=e.userName,this.userPhoto=e.userPhoto,this.cityArr=e.cityArr,this.address=e.address},methods:{cityChange:function(t){console.log(e(t," at pages/address/address.vue:79")),this.cityArr=t.detail.value[0]+t.detail.value[1]+t.detail.value[2]},initInput:function(e){0==e?this.userName="":this.userPhoto=""},saveFun:function(){if(""!=this.userName&&""!=this.userPhoto&&this.cityArr.length>0&&""!=this.address){if(this.blurPhone(this.userPhoto)){var t={userName:this.userName,userPhoto:this.userPhoto,cityArr:this.cityArr,address:this.address};console.log(e(t," at pages/address/address.vue:100")),s.setStorageSync("address",t),s.navigateBack()}}else s.showToast({title:"请填写完整信息",icon:"none",duration:1e3})},blurPhone:function(e){var t=!1;return/^1[34578]\d{9}$/.test(e)?t=!0:(t=!1,wx.showToast({title:"手机号有误",icon:"/static/img/login_close.png",duration:2e3})),t}}};t.default=r}).call(this,s("0de9")["default"],s("6e42")["default"])},"767e":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];s.d(t,"a",function(){return r}),s.d(t,"b",function(){return a})},"93f0":function(e,t,s){},e369:function(e,t,s){"use strict";var r=s("93f0"),a=s.n(r);a.a}},[["25e0","common/runtime","common/vendor"]]]);
});
require('pages/address/address.js');
__wxRoute = 'components/homeAlert/homeAlert';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/homeAlert/homeAlert.js';

define('components/homeAlert/homeAlert.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/homeAlert/homeAlert"],{"620d":function(e,t,n){"use strict";n.r(t);var o=n("9f93"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},"6f5e":function(e,t,n){},"7cab":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"9f93":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"page-alent",props:{title:{name:String}},methods:{goRegister:function(){this.$emit("homeGoRegister")}}};t.default=o},bf3e:function(e,t,n){"use strict";var o=n("6f5e"),r=n.n(o);r.a},f7b1:function(e,t,n){"use strict";n.r(t);var o=n("7cab"),r=n("620d");for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);n("bf3e");var a=n("2877"),f=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=f.exports}},[["e7db","common/runtime","common/vendor"]]]);
});
require('components/homeAlert/homeAlert.js');
__wxRoute = 'pages/ranking/ranking';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ranking/ranking.js';

define('pages/ranking/ranking.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ranking/ranking"],{"428e":function(n,t,e){},"44d8":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{go_shopDetails:function(){n.navigateTo({url:"/pages/shopDetails/shopDetails"})}}};t.default=e}).call(this,e("6e42")["default"])},6147:function(n,t,e){"use strict";e.r(t);var u=e("c03c"),a=e("e803");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("cec8");var o=e("2877"),r=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},c03c:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},cec8:function(n,t,e){"use strict";var u=e("428e"),a=e.n(u);a.a},e803:function(n,t,e){"use strict";e.r(t);var u=e("44d8"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a}},[["7f40","common/runtime","common/vendor"]]]);
});
require('pages/ranking/ranking.js');
__wxRoute = 'pages/myTbox/myTbox';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myTbox/myTbox.js';

define('pages/myTbox/myTbox.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myTbox/myTbox"],{"025f":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},"227c":function(n,t,e){},"2f8b":function(n,t,e){"use strict";var u=e("227c"),r=e.n(u);r.a},"38ef":function(n,t,e){"use strict";e.r(t);var u=e("43e6"),r=e("74e7");for(var o in r)"default"!==o&&function(n){e.d(t,n,function(){return r[n]})}(o);e("2f8b");var a=e("2877"),f=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},"43e6":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},"74e7":function(n,t,e){"use strict";e.r(t);var u=e("025f"),r=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=r.a}},[["516e","common/runtime","common/vendor"]]]);
});
require('pages/myTbox/myTbox.js');
__wxRoute = 'pages/customized/customized';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/customized/customized.js';

define('pages/customized/customized.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/customized/customized"],{"02a2":function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},u=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return u})},"2c0e":function(n,t,a){"use strict";a.r(t);var e=a("6df6"),u=a.n(e);for(var c in e)"default"!==c&&function(n){a.d(t,n,function(){return e[n]})}(c);t["default"]=u.a},"374a":function(n,t,a){},"6df6":function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{micTabStatus:0,micTab:[{name:"全部推荐"},{name:"独家音乐"},{name:"儿童故事"},{name:"明星音频"},{name:"儿童故事"},{name:"明星音频"},{name:"儿童故事"},{name:"明星音频"}]}},methods:{micTabClick:function(n){this.micTabStatus=n}}};t.default=e},"9d2d":function(n,t,a){"use strict";var e=a("374a"),u=a.n(e);u.a},fda6:function(n,t,a){"use strict";a.r(t);var e=a("02a2"),u=a("2c0e");for(var c in u)"default"!==c&&function(n){a.d(t,n,function(){return u[n]})}(c);a("9d2d");var i=a("2877"),r=Object(i["a"])(u["default"],e["a"],e["b"],!1,null,null,null);t["default"]=r.exports}},[["6531","common/runtime","common/vendor"]]]);
});
require('pages/customized/customized.js');
__wxRoute = 'pages/starMusic/starMusic';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/starMusic/starMusic.js';

define('pages/starMusic/starMusic.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/starMusic/starMusic"],{"2f31":function(t,n,e){"use strict";e.r(n);var a=e("86b5"),u=e("d8bb");for(var l in u)"default"!==l&&function(t){e.d(n,t,function(){return u[t]})}(l);e("f370");var i=e("2877"),o=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},"54c5":function(t,n,e){},"86b5":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},"8f2b":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{labeloneStatus:0,labeltwoStatus:0,labelthrStatus:0,labelList1:[{name:"全部"},{name:"港台"},{name:"日韩"},{name:"其他"}],labelList2:[{name:"全部"},{name:"男"},{name:"女"},{name:"组合"}],labelList3:[{name:"全部"},{name:"流行"},{name:"嘻哈"},{name:"电子"},{name:"摇滚"}]}},methods:{labeloneClick:function(t){this.labeloneStatus=t},labeltwoClick:function(t){this.labeltwoStatus=t},labelthrClick:function(t){this.labelthrStatus=t}}};n.default=a},d8bb:function(t,n,e){"use strict";e.r(n);var a=e("8f2b"),u=e.n(a);for(var l in a)"default"!==l&&function(t){e.d(n,t,function(){return a[t]})}(l);n["default"]=u.a},f370:function(t,n,e){"use strict";var a=e("54c5"),u=e.n(a);u.a}},[["a6e6","common/runtime","common/vendor"]]]);
});
require('pages/starMusic/starMusic.js');
__wxRoute = 'pages/welcome/welcome';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/welcome/welcome.js';

define('pages/welcome/welcome.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/welcome/welcome"],{"0190":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{initStatus:!1,initSwiper:!1,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},computed:i({},(0,o.mapGetters)(["getMicList","getMicInfo","getMicStatus"])),onShow:function(){var e={all:"修改了",info:"我被修改了",name:"我被修改了"};this.SET_MICINFO(e)},methods:i({},(0,o.mapMutations)(["SET_MICLIST","SET_MICINFO","SET_MICSTATUS"]),{close:function(){e.switchTab({url:"/pages/index/index"})},swiper_change:function(e){var t=this;console.log(a(e.detail," at pages/welcome/welcome.vue:75")),2==e.detail.current&&setTimeout(function(){t.close()},1e3)},go_details:function(){e.navigateTo({url:"/pages/micPlayPage/micPlayPage"})},getScancode:function(){var e=this;wx.scanCode({success:function(t){e.result=t.result}})},go_jd:function(){wx.navigateToMiniProgram({appId:"wx91d27dbf599dff74",path:"pages/item_wqvue/detail/detail?__pid=Pxc83sui8udq",extraData:{foo:"bar"},envVersion:"develop",success:function(e){console.log(a(e," at pages/welcome/welcome.vue:106"))}})}})};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"23b4":function(e,t,n){"use strict";n.r(t);var a=n("755a"),o=n("6db5");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("f3aa");var c=n("2877"),u=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},"36dc":function(e,t,n){},"6db5":function(e,t,n){"use strict";n.r(t);var a=n("0190"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},"755a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},f3aa:function(e,t,n){"use strict";var a=n("36dc"),o=n.n(a);o.a}},[["2bd7","common/runtime","common/vendor"]]]);
});
require('pages/welcome/welcome.js');
__wxRoute = 'pages/dm/dm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/dm/dm.js';

define('pages/dm/dm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dm/dm"],{"036e":function(n,e,a){"use strict";a.r(e);var t=a("4300"),m=a("5976");for(var i in m)"default"!==i&&function(n){a.d(e,n,function(){return m[n]})}(i);a("f42d");var u=a("2877"),s=Object(u["a"])(m["default"],t["a"],t["b"],!1,null,null,null);e["default"]=s.exports},4300:function(n,e,a){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c},m=[];a.d(e,"a",function(){return t}),a.d(e,"b",function(){return m})},5976:function(n,e,a){"use strict";a.r(e);var t=a("fcf9"),m=a.n(t);for(var i in t)"default"!==i&&function(n){a.d(e,n,function(){return t[n]})}(i);e["default"]=m.a},ab56:function(n,e,a){},f42d:function(n,e,a){"use strict";var t=a("ab56"),m=a.n(t);m.a},fcf9:function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{list:[{name:"上面弹幕11111"},{name:"上面弹幕2222"},{name:"上面弹幕333"},{name:"上面弹幕444"},{name:"上面弹幕5555"},{name:"上面弹幕6666"},{name:"上面弹幕77777"},{name:"上面弹幕8888"},{name:"上面弹幕999"},{name:"上面弹幕444"},{name:"上面弹幕5555"},{name:"上面弹幕6666"},{name:"上面弹幕77777"},{name:"上面弹幕8888"},{name:"上面弹幕999"}],list2:[{name:"中间弹幕11111"},{name:"中间弹幕2222"},{name:"中间弹幕333"},{name:"中间弹幕444"},{name:"中间弹幕5555"},{name:"中间弹幕666"},{name:"中间弹幕77777"},{name:"中间弹幕8888"},{name:"中间弹幕999"},{name:"中间弹幕444"},{name:"中间弹幕5555"},{name:"中间弹幕6666"},{name:"中间弹幕77777"},{name:"中间弹幕8888"},{name:"中间弹幕999"}],list3:[{name:"下面弹幕11111"},{name:"下面弹幕2222"},{name:"下面弹幕333"},{name:"下面弹幕444"},{name:"下面弹幕5555"},{name:"下面弹幕6666"},{name:"下面弹幕77777"},{name:"下面弹幕8888"},{name:"下面弹幕999"},{name:"下面弹幕444"},{name:"下面弹幕5555"},{name:"下面弹幕6666"},{name:"下面弹幕77777"},{name:"下面弹幕8888"},{name:"下面弹幕999"}],aNum:0,colors:""}},onLoad:function(){this.listB(this.list,3e3),this.listB(this.list2,3500),this.listB(this.list3,4e3)},methods:{listB:function(e,a){var t=setInterval(function(){e.length>0?(e.shift(),this.list=e):(console.log(n("清除"," at pages/dm/dm.vue:115")),clearInterval(t))},a)}}};e.default=a}).call(this,a("0de9")["default"])}},[["e43f","common/runtime","common/vendor"]]]);
});
require('pages/dm/dm.js');
__wxRoute = 'components/mic/mic';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mic/mic.js';

define('components/mic/mic.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mic/mic"],{"45e2":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"page-mic",props:{title:{type:String,default:""}}};t.default=u},"847c":function(n,t,e){"use strict";e.r(t);var u=e("45e2"),r=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=r.a},d2b0:function(n,t,e){"use strict";var u=e("d52d"),r=e.n(u);r.a},d52d:function(n,t,e){},d790:function(n,t,e){"use strict";e.r(t);var u=e("fb4f"),r=e("847c");for(var c in r)"default"!==c&&function(n){e.d(t,n,function(){return r[n]})}(c);e("d2b0");var o=e("2877"),a=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports},fb4f:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["5b27","common/runtime","common/vendor"]]]);
});
require('components/mic/mic.js');
__wxRoute = 'components/alertBox/alertBox';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/alertBox/alertBox.js';

define('components/alertBox/alertBox.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/alertBox/alertBox"],{"14fb":function(t,n,e){"use strict";e.r(n);var o=e("8c00"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=r.a},"402b":function(t,n,e){"use strict";var o=e("dd7b"),r=e.n(o);r.a},"6c1d":function(t,n,e){"use strict";e.r(n);var o=e("a362"),r=e("14fb");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("402b");var a=e("2877"),i=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},"8c00":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"alert-box",props:{title:{content:String,letfFont:String,rightFont:String}},methods:{close:function(){this.$emit("alertBoxClose")},deleteFun:function(){this.$emit("alertBoxDelete")}}};n.default=o},a362:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},dd7b:function(t,n,e){}},[["e99b","common/runtime","common/vendor"]]]);
});
require('components/alertBox/alertBox.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

