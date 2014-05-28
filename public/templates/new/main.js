define(["vendor/jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (auth) {
if ( auth && auth.loggedIn())
{
}
buf.push("<div class=\"spacer\"></div><div class=\"align-center\"><div class=\"new main-box bg-white box-center box-shadow\"><div class=\"editor\"><form><input type=\"text\" name=\"title\" placeholder=\"Title\" class=\"title box-shadow-thin\"/><br/><textarea id=\"message\" name=\"content\" placeholder=\"Message - parsed with markdown\" class=\"message box-shadow-thin\"></textarea><br/><button type=\"submit\" class=\"btn btn-success margin\">Publish</button></form></div><div class=\"preview align-left\"><h1>Preview</h1><h3>Tips</h3><li class=\"text-small\">Do this for that</li><li class=\"text-small\">And this for that</li></div><a href=\"https://help.github.com/articles/github-flavored-markdown\" target=\"_blank\">Markdown help</a></div></div>");}("auth" in locals_for_with?locals_for_with.auth:typeof auth!=="undefined"?auth:undefined));;return buf.join("");
};

});
