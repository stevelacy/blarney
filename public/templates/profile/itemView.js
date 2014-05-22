define(["vendor/jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (item) {
if ( item)
{
buf.push("<a" + (jade.attr("href", "/p/" + (item.get('id')) + "", true, false)) + " class=\"title\">" + (jade.escape((jade_interp = item.get('title')) == null ? '' : jade_interp)) + "</a><div class=\"user\"><a" + (jade.attr("href", "/" + (item.get('author').get('handle')) + "", true, false)) + "><img" + (jade.attr("src", "" + (item.get('author').get('image')) + "", true, false)) + " class=\"icon\"/><div class=\"name text-small\">" + (jade.escape((jade_interp = item.get('author').get('name')) == null ? '' : jade_interp)) + "</div></a></div><div class=\"stats\"><img src=\"images/like.png\" class=\"icon\"/><div class=\"likes align-center grey\"> </div></div>");
}}("item" in locals_for_with?locals_for_with.item:typeof item!=="undefined"?item:undefined));;return buf.join("");
};

});
