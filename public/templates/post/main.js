define(["vendor/jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (item, auth) {
if ( item  )
{
buf.push("<div class=\"spacer\"></div><div class=\"align-center\"><div class=\"main-box bg-white box-center box-shadow align-left trans\"><div class=\"post\"><div class=\"post-author bg-grey z-index\"><a" + (jade.attr("href", "/" + (item.get('author').get('handle')) + "", true, false)) + "><img" + (jade.attr("src", "" + (item.get('author').get('image')) + "", true, false)) + " class=\"icon\"/><div class=\"name white\">" + (jade.escape((jade_interp = item.get('author').get('name')) == null ? '' : jade_interp)) + "</div><div class=\"bio white\">" + (jade.escape((jade_interp = item.get('author').get('description')) == null ? '' : jade_interp)) + "</div></a></div><div class=\"post-title text-huge\">" + (jade.escape((jade_interp = item.get('title')) == null ? '' : jade_interp)) + "</div><div" + (jade.attr("data-livestamp", "" + (item.get('created_at')) + "", true, false)) + " class=\"date\"></div><div id=\"rating-post\"" + (jade.attr("data-id", "" + (item.get('id')) + "", true, false)) + " class=\"post-stats grey\"><img src=\"/images/like.png\"/><span>likes</span></div><br/><div class=\"post-content text-med\">");
// content set via Marked in the view
buf.push("</div></div><div class=\"spacer\"></div><div class=\"comments-box\"></div>");
if ( auth && auth.loggedIn())
{
buf.push("<div class=\"new-comment bg-white-shade\"><div class=\"spacer-50\"><h2 class=\"grey\">Comment</h2></div><form><textarea name=\"content\" id=\"content\" placeholder=\"Message - parsed with markdown\"></textarea><div class=\"spacer-50\"></div><button type=\"submit\" class=\"btn btn-success\">Comment</button></form></div>");
}
else
{
buf.push("<div class=\"new-comment bg-white-shade align-center\"><div class=\"spacer-50\"></div><a href=\"/login\"><button class=\"bg-green btn-lg white inline-block\">Login to comment</button></a></div>");
}
buf.push("</div></div>");
}}("item" in locals_for_with?locals_for_with.item:typeof item!=="undefined"?item:undefined,"auth" in locals_for_with?locals_for_with.auth:typeof auth!=="undefined"?auth:undefined));;return buf.join("");
};

});
