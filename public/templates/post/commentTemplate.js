define(["vendor/jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (item) {
if ( item)
{
buf.push("<div class=\"comment bg-white-trans-med\"><div" + (jade.attr("data-livestamp", "" + (item.get('created_at')) + "", true, false)) + " class=\"date\"></div><div class=\"user\"><a" + (jade.attr("href", "/" + (item.get('author').get('handle')) + "", true, false)) + "><img" + (jade.attr("src", "" + (item.get('author').get('image')) + "", true, false)) + " class=\"icon\"/><div class=\"name\">" + (jade.escape((jade_interp = item.get('author').get('name')) == null ? '' : jade_interp)) + "</div></a></div><div class=\"message\">");
// content set via Marked in view
buf.push("</div></div>");
}}("item" in locals_for_with?locals_for_with.item:typeof item!=="undefined"?item:undefined));;return buf.join("");
};

});
