define(["vendor/jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (auth) {
buf.push("<div class=\"navbar\"><div class=\"left\"><a href=\"/\" class=\"logo green\">Blarney</a></div><div class=\"right\">");
if ( auth && auth.loggedIn())
{
buf.push("<li class=\"user\"><a><img" + (jade.attr("src", "" + (auth.image()) + "", true, false)) + "/></a><div class=\"user-nav\"><ul><li><a" + (jade.attr("href", "/" + (auth.handle()) + "", true, false)) + ">Profile</a></li><li><a href=\"/logout\">Logout</a></li>");
if ( auth.level() == "5")
{
buf.push("<li><a href=\"/admin\">Admin</a></li>");
}
buf.push("</ul></div></li><li class=\"new\"><a href=\"/new\">New</a></li>");
}
else
{
buf.push("<li class=\"new\"><a href=\"/login\">Login</a></li>");
}
buf.push("</div></div>");}("auth" in locals_for_with?locals_for_with.auth:typeof auth!=="undefined"?auth:undefined));;return buf.join("");
};

});
