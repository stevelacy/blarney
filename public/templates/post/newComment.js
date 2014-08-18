define(["vendor/jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (auth) {
if ( auth && auth.loggedIn())
{
buf.push("<div class=\"new-comment bg-white-shade\"><div class=\"spacer-50\"><h2 class=\"grey\">Comment</h2></div><form><textarea name=\"content\" id=\"content\" placeholder=\"Message - parsed with markdown\"></textarea><div class=\"spacer-50\"></div><button type=\"submit\" class=\"btn btn-success\">Comment</button></form></div>");
}
else
{
buf.push("<div class=\"new-comment bg-white-shade align-center\"><div class=\"spacer-50\"></div><a href=\"/login\"><button class=\"bg-green btn-lg white inline-block\">Login to comment</button></a></div>");
}}("auth" in locals_for_with?locals_for_with.auth:typeof auth!=="undefined"?auth:undefined));;return buf.join("");
};

});
