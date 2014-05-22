define(["vendor/jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (item, Date, auth) {
if ( item)
{
buf.push("<div class=\"profile-background\"><img id=\"profile-img\"" + (jade.attr("src", "" + (item.get('background')) + "?d=" + (Date.now()) + "", true, false)) + " class=\"img\"/>");
if ( auth.handle() == item.get('handle'))
{
buf.push("<button id=\"edit-cover-button\" class=\"edit bg-white-trans box-shadow white\">Change Cover</button>");
}
buf.push("</div><div id=\"edit-cover-box\" class=\"edit-box bg-white-trans-light z-index box-shadow\"><div id=\"upload-box\" class=\"upload-box align-center\"><form action=\"/upload\" name=\"form-cover\" id=\"form-cover\" method=\"post\" enctype=\"multipart/form-data\"><input type=\"file\" accept=\"image/*\" name=\"image\" id=\"file\" class=\"bg-white-trans-light\"/><input type=\"submit\" name=\"sub-cover\" id=\"sub-cover\" value=\"Save\" class=\"white bg-green\"/><br/></form><div id=\"status\" class=\"text-small\">.jpg, .jpeg, .png only</div></div><div id=\"progress\" class=\"progress bg-white-trans\"><div class=\"bar bg-dark-grey\"></div><div class=\"percent\"></div></div></div><div class=\"spacer\"></div><div class=\"align-center z-index\"><div class=\"main-box bg-white-trans box-center box-shadow align-left\"><div class=\"profile\"><div class=\"user\"><div class=\"icon\"><img" + (jade.attr("src", "" + (item.get('image')) + "", true, false)) + "/></div><!--.name.text-large.white(class='#{profile.colors.name}')--><div class=\"name text-large white\">" + (jade.escape((jade_interp = item.get('name')) == null ? '' : jade_interp)) + "</div></div><div class=\"bio bg bg-white-pure\"><!--.bio-left(class='#{profile.colors.bio}')--><div class=\"bio-left\">" + (jade.escape((jade_interp = item.get('description')) == null ? '' : jade_interp)) + "</div><div class=\"bio-right\">");
if ( item.get('provider') == "twitter")
{
buf.push("<a" + (jade.attr("href", "https://twitter.com/" + (item.get('handle')) + "", true, false)) + ">Twitter  @" + (jade.escape((jade_interp = item.get('handle')) == null ? '' : jade_interp)) + "</a>");
}
buf.push("</div></div></div></div></div><div class=\"align-center z-index\"><div class=\"spacer\"></div><div class=\"main-box bg-white-shade box-center box-shadow-light align-center posts-box\"></div></div>");
}}("item" in locals_for_with?locals_for_with.item:typeof item!=="undefined"?item:undefined,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"auth" in locals_for_with?locals_for_with.auth:typeof auth!=="undefined"?auth:undefined));;return buf.join("");
};

});
