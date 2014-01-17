define(["vendor/jade"],function(jade){

return function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "/www/node/blarney-marionette/client/templates/mixins/src.jade" }];
try {
var buf = [];
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
var js_mixin = function(src){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<script" + (jade.attrs({ 'type':("text/javascript"), 'src':(src) }, {"type":true,"src":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</script>");
jade.debug.shift();
jade.debug.shift();
};
jade.debug.shift();
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
var css_mixin = function(src){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<link" + (jade.attrs({ 'rel':('stylesheet'), 'href':(src) }, {"rel":true,"href":true})) + "/>");
jade.debug.shift();
jade.debug.shift();
};
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
};

});
