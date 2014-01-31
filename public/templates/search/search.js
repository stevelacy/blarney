define(["vendor/jade"],function(jade){

return function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "/www/node/blarney-marionette/client/templates/search/search.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),query = locals_.query;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<input" + (jade.attrs({ 'type':('text'), 'placeholder':('Search'), 'value':("" + (query) + ""), "class": [('block'),('search-term')] }, {"type":true,"placeholder":true,"value":true})) + "/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<button class=\"block green search-button\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("Search");
jade.debug.shift();
jade.debug.shift();
buf.push("</button>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
};

});
