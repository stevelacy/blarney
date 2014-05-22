define(["vendor/jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (query) {
buf.push("<form><input type=\"text\" placeholder=\"Search\"" + (jade.attr("value", "" + (query) + "", true, false)) + " class=\"block search-term\"/><button class=\"block green search-button\">Search</button></form>");}("query" in locals_for_with?locals_for_with.query:typeof query!=="undefined"?query:undefined));;return buf.join("");
};

});
