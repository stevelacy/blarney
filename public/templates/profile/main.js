define(["vendor/jade"],function(jade){

return function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "/www/node/blarney-marionette/client/templates/profile/main.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),profile = locals_.profile,posts = locals_.posts;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div class=\"wrapper\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<div class=\"profile-background\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<img" + (jade.attrs({ 'id':('profile-img'), 'src':('' + (profile[0].background) + ''), "class": [('img')] }, {"src":true})) + "/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<button id=\"edit-cover-button\" class=\"edit bg-white-trans box-shadow white\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("Change Cover");
jade.debug.shift();
jade.debug.shift();
buf.push("</button>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("<div id=\"edit-cover-box\" class=\"edit-box bg-white-trans-light z-index box-shadow\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<div id=\"upload-box\" class=\"upload-box align-center\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 8, filename: jade.debug[0].filename });
buf.push("<form action=\"/upload\" name=\"form-cover\" id=\"form-cover\" method=\"post\" enctype=\"multipart/form-data\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("<input type=\"file\" name=\"image\" id=\"file\" class=\"bg-white-trans-light\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
buf.push("<input type=\"submit\" name=\"sub-cover\" id=\"sub-cover\" value=\"Save\" class=\"white bg-green\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<br/>");
jade.debug.shift();
jade.debug.shift();
buf.push("</form>");
jade.debug.shift();
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<div id=\"status\" class=\"text-small\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push(".jpg, .jpeg, .png only");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 14, filename: jade.debug[0].filename });
buf.push("<div id=\"progress\" class=\"progress bg-white-trans\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 15, filename: jade.debug[0].filename });
buf.push("<div class=\"bar bg-dark-grey\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 16, filename: jade.debug[0].filename });
buf.push("<div class=\"percent\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 18, filename: jade.debug[0].filename });
buf.push("<div class=\"spacer\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 19, filename: jade.debug[0].filename });
buf.push("<div class=\"align-center z-index\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 20, filename: jade.debug[0].filename });
buf.push("<div class=\"content bg-white-trans box-center box-shadow align-left\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 21, filename: jade.debug[0].filename });
buf.push("<div class=\"profile\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 22, filename: jade.debug[0].filename });
buf.push("<div class=\"user\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 23, filename: jade.debug[0].filename });
buf.push("<div class=\"icon\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 24, filename: jade.debug[0].filename });
buf.push("<img" + (jade.attrs({ 'src':('' + (profile[0].image) + '') }, {"src":true})) + "/>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 26, filename: jade.debug[0].filename });
buf.push("<!--.name.text-large.white(class='#{profile.colors.name}')-->");
jade.debug.shift();
jade.debug.unshift({ lineno: 26, filename: jade.debug[0].filename });
buf.push("<div class=\"name text-large white\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 27, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = profile[0].name) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 28, filename: jade.debug[0].filename });
buf.push("<div class=\"bio bg bg-white-pure\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 30, filename: jade.debug[0].filename });
buf.push("<!--.bio-left(class='#{profile.colors.bio}')-->");
jade.debug.shift();
jade.debug.unshift({ lineno: 30, filename: jade.debug[0].filename });
buf.push("<div class=\"bio-left\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 31, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = profile[0].description) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 32, filename: jade.debug[0].filename });
buf.push("<div class=\"bio-right\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 33, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':("https://twitter.com/" + (profile[0].handle) + "") }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 33, filename: jade.debug[0].filename });
buf.push("Twitter  @" + (jade.escape((jade.interp = profile[0].handle) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 35, filename: jade.debug[0].filename });
buf.push("<div class=\"align-center z-index\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 36, filename: jade.debug[0].filename });
buf.push("<div class=\"spacer\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 37, filename: jade.debug[0].filename });
buf.push("<div class=\"spacer\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 38, filename: jade.debug[0].filename });
buf.push("<div class=\"content bg-white-shade box-center box-shadow-light align-center profile-content\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 40, filename: jade.debug[0].filename });
if (posts){
jade.debug.shift();
jade.debug.unshift({ lineno: 41, filename: jade.debug[0].filename });
// iterate posts
;(function(){
  var $$obj = posts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var post = $$obj[$index];

jade.debug.unshift({ lineno: 41, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 42, filename: jade.debug[0].filename });
buf.push("<div class=\"content-cards bg-white-pure box-shadow-light align-left\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 43, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':("/p/" + (post.id) + ""), "class": [('title')] }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 44, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = post.title) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.unshift({ lineno: 45, filename: jade.debug[0].filename });
buf.push("<div class=\"user\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 46, filename: jade.debug[0].filename });
buf.push("<img" + (jade.attrs({ 'src':("" + (profile[0].image) + ""), "class": [('icon')] }, {"src":true})) + "/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 47, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':("/" + (profile[0].handle) + ""), "class": [('name'),('text-small')] }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 48, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = profile[0].name) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 49, filename: jade.debug[0].filename });
buf.push("<div class=\"stats\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 50, filename: jade.debug[0].filename });
buf.push("<img src=\"/images/like.png\" class=\"icon\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 51, filename: jade.debug[0].filename });
buf.push("<div class=\"likes align-center grey\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 52, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = post.likes) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var post = $$obj[$index];

jade.debug.unshift({ lineno: 41, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 42, filename: jade.debug[0].filename });
buf.push("<div class=\"content-cards bg-white-pure box-shadow-light align-left\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 43, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':("/p/" + (post.id) + ""), "class": [('title')] }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 44, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = post.title) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.unshift({ lineno: 45, filename: jade.debug[0].filename });
buf.push("<div class=\"user\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 46, filename: jade.debug[0].filename });
buf.push("<img" + (jade.attrs({ 'src':("" + (profile[0].image) + ""), "class": [('icon')] }, {"src":true})) + "/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 47, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':("/" + (profile[0].handle) + ""), "class": [('name'),('text-small')] }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 48, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = profile[0].name) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 49, filename: jade.debug[0].filename });
buf.push("<div class=\"stats\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 50, filename: jade.debug[0].filename });
buf.push("<img src=\"/images/like.png\" class=\"icon\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 51, filename: jade.debug[0].filename });
buf.push("<div class=\"likes align-center grey\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 52, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = post.likes) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
    }

  }
}).call(this);

jade.debug.shift();
jade.debug.unshift({ lineno: 53, filename: jade.debug[0].filename });
}
else{
{
jade.debug.unshift({ lineno: 55, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 55, filename: jade.debug[0].filename });
buf.push("<h2>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 55, filename: jade.debug[0].filename });
buf.push(" ");
jade.debug.shift();
jade.debug.unshift({ lineno: 56, filename: jade.debug[0].filename });
buf.push("<span class=\"green\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 56, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = profile[0].name) == null ? '' : jade.interp)) + " ");
jade.debug.shift();
jade.debug.shift();
buf.push("</span>");
jade.debug.shift();
jade.debug.unshift({ lineno: 57, filename: jade.debug[0].filename });
buf.push("has not posted yet");
jade.debug.shift();
jade.debug.shift();
buf.push("</h2>");
jade.debug.shift();
jade.debug.shift();
}
jade.debug.shift();
jade.debug.unshift({ lineno: 58, filename: jade.debug[0].filename });
}
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
};

});
