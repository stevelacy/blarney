define(["vendor/jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (auth) {
buf.push("<nav class=\"navbar navbar-default\"><div class=\"navbar-header\"><a href=\"/\" class=\"navbar-brand green\">Blarney</a><button type=\"button\" data-toggle=\"collapse\" data-target=\".sidebar .navbar-collapse\" class=\"navbar-toggle\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button></div><div class=\"nav sidebar\"><div class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav\"><li><a href=\"v1/posts\">API</a></li></ul><ul class=\"nav navbar-nav right-nav\">");
if ( auth && auth.loggedIn())
{
buf.push("<li class=\"nav-user-pre\"><a href=\"/new\">New</a></li><div class=\"nav-user\"><div class=\"btn-group\"><img data-toggle=\"dropdown\"" + (jade.attr("src", "" + (auth.image()) + "", true, false)) + " alt=\"\" class=\"dropdown-toggle\"/><ul class=\"dropdown-menu trans\"><li><a" + (jade.attr("href", "/" + (auth.handle()) + "", true, false)) + ">Profile</a></li><li><a href=\"/logout\">Logout</a></li>");
if ( auth.level() == "5")
{
buf.push("<li><a href=\"/admin\">Admin</a></li>");
}
buf.push("</ul></div></div>");
}
else
{
buf.push("<li><a id=\"login\" href=\"/login\">Login</a></li>");
}
buf.push("</ul></div></div></nav>");}("auth" in locals_for_with?locals_for_with.auth:typeof auth!=="undefined"?auth:undefined));;return buf.join("");
};

});
