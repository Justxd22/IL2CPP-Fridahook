// this buggy potatoes code made by
// github.com/Justxd22
// xd22.me

// offsets extracted from dnspy
var a = 0x6BDEC0 // afford coins
var b = 0x6BDD90 // continue times
var c = 0x6BDE68 //0 can watch ad
var d = 0x6BDF28 //50 continue v
var e = 0x6BE42C //crash string msg
var f = 0x6BCBC8 //check debug
var g = 0x6BED94 //spend coins
var h = 0x6BE8E8 //confirm continue
var i = 0x6BE24C //cancel  continue
var j = 0x6BDF30 //On enable
var k = 0x6BE02C //check continue
var l = 0x6BCBA0 //debug awake

var il2cp  = Module.findBaseAddress('libil2cpp.so')
var afford = il2cp.add(a)
var revint = il2cp.add(b)
var cwad   = il2cp.add(c)
var contv  = il2cp.add(d)
var crsmsg = il2cp.add(e)
var debugb = il2cp.add(f)
var spndc  = il2cp.add(g)
var confm  = il2cp.add(h)
var concl  = il2cp.add(i)
var onena  = il2cp.add(j)
var chkcn  = il2cp.add(k)
var dawke  = il2cp.add(l)

var spendcoinsF = new NativeFunction(spndc, 'void', ['pointer']);
var continueF   = new NativeFunction(confm, 'void', ['pointer']);
Interceptor.replace(spendcoinsF,continueF)

Interceptor.attach(dawke, {
    onEnter: function(args){
       lg('\nDebug awake', 'Entering', '');
       this.instance = args[0];
       var dbool = this.instance.add('0x18');
       console.log('Value of bb is: ', dbool.readInt());
       console.log('bb changed to: ', dbool.writeInt(1));
       },
    onLeave: function(retval){
      lg('\nDebug awake', 'Leaving', retval);
      }})

Interceptor.attach(afford, {
    onEnter: function(args){lg('\nAfford', 'Entering', '');},
    onLeave: function(retval){
      lg('\nAfford', 'Leaving', retval);
      retval.replace(1);}})

Interceptor.attach(revint, {
    onEnter: function(){lg('\nRevived times', 'Entering', '');},
    onLeave: function(retval){
      lg('\nRevived times', 'Leaving', retval);
      retval.replace(9999999999);}})

Interceptor.attach(cwad, {
    onEnter: function(){lg('\nWa AD?', 'Entering', '');},
    onLeave: function(retval){
      lg('\nWa Ad?', 'Leaving', retval);
      retval.replace(0);}})

Interceptor.attach(contv, {
    onEnter: function(){lg('\nContinue Coins Req', 'Entering', '');},
    onLeave: function(retval){
      lg('\nContinue Coins Req', 'Leaving', retval);}})

//var ss = 'vv'
Interceptor.attach(crsmsg, {
    onEnter: function(args){
      lg('\nCrash msg', 'Entering', '');
//       this.instance = args[0];
//       var stri   = this.instance.add('0xE8').readPointer();
//       var contnu = this.instance.add('0x124');
//       ss = stri
//       console.log('Value of contnu is: ', contnu.readInt());
//       console.log('Value of crashmsg is: ', stri.readUtf16String());
//       console.log(stri.readByteArray(400));
    },
    onLeave: function(retval){
      lg('\nCrash msg', 'Leaving', retval);}})
//      retval.replace(1);}})

Interceptor.attach(debugb, {
    onEnter: function(args){
       lg('\nDebug button', 'Entering', '');
//       this.instance = args[0];
//       var dbool = this.instance.add('0x18');
//       console.log('Value of bb is: ', dbool.readInt());
//       console.log('bb changed to: ', dbool.writeInt(1));
    },
    onLeave: function(retval){
      lg('\nDebug button', 'Leaving', retval);}})
//      retval.replace(1);}})

Interceptor.attach(spndc, {
    onEnter: function(args){
		lg('\nSpend Coins', 'Entering', '');
		//this.instance = args[0];
		//new NativeFunction(il2cp.add(0x006BE8E8), 'void', ['pointer'])(this.instance);
		},
    onLeave: function(retval){
      lg('\nSpend Coins', 'Leaving', retval);}})
//      retval.replace(1);}})

Interceptor.attach(confm, {
    onEnter: function(){lg('\nContinue confirm', 'Entering', '');},
    onLeave: function(retval){
      lg('\nContinue confirm', 'Leaving', retval);}})
//      retval.replace(1);}})

Interceptor.attach(concl, {
    onEnter: function(){lg('\nContinue cancel', 'Entering', '');},
    onLeave: function(retval){
      lg('\nContinue cancel', 'Leaving', retval);}})
//      retval.replace(1);}})

Interceptor.attach(onena, {
    onEnter: function(){lg('\nOnEnable', 'Entering', '');},
    onLeave: function(retval){
      lg('\nOnEnable', 'Leaving', retval);}})
//      retval.replace(1);}})

Interceptor.attach(chkcn, {
    onEnter: function(){lg('\nCheck continue', 'Entering', '');},
    onLeave: function(retval){
      lg('\nCheck continue', 'Leaving', retval);}})


function lg (n,s,v) {console.log(n,s,'args: ',v);}
