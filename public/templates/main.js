define(["vendor/jade"],function(jade){

return function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "/www/node/blarney-marionette/client/templates/main.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),items = locals_.items;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div class=\"spacer-75 align-center\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<div class=\"search inline-block align-left trans\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<form action=\"\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<input id=\"search-term\" type=\"text\" placeholder=\"Search\" class=\"block\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<button id=\"search\" class=\"block green\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("Search");
jade.debug.shift();
jade.debug.shift();
buf.push("</button>");
jade.debug.shift();
jade.debug.shift();
buf.push("</form>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("<div class=\"align-center\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<div id=\"content-index\" class=\"content bg-white-shade box-center box-shadow align-center trans\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
if ( items)
{
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var post = $$obj[$index];

jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("<div class=\"content-cards bg-white-pure box-shadow-light align-left trans\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':('/p/' + (post.id) + ''), "class": [('title')] }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = post.title) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.unshift({ lineno: 14, filename: jade.debug[0].filename });
buf.push("<div class=\"user\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 15, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':('/' + (post.author.handle) + '') }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 16, filename: jade.debug[0].filename });
buf.push("<img" + (jade.attrs({ 'src':('' + (post.author.image) + ''), "class": [('icon')] }, {"src":true})) + "/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 17, filename: jade.debug[0].filename });
buf.push("<div class=\"name text-small\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 18, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = post.author.name) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 19, filename: jade.debug[0].filename });
buf.push("<div class=\"stats\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 20, filename: jade.debug[0].filename });
buf.push("<img src=\"images/like.png\" class=\"icon\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 21, filename: jade.debug[0].filename });
buf.push("<div class=\"likes align-center grey\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 22, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = post.likes) == null ? '' : jade.interp)) + " ");
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

jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("<div class=\"content-cards bg-white-pure box-shadow-light align-left trans\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':('/p/' + (post.id) + ''), "class": [('title')] }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = post.title) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.unshift({ lineno: 14, filename: jade.debug[0].filename });
buf.push("<div class=\"user\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 15, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':('/' + (post.author.handle) + '') }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 16, filename: jade.debug[0].filename });
buf.push("<img" + (jade.attrs({ 'src':('' + (post.author.image) + ''), "class": [('icon')] }, {"src":true})) + "/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 17, filename: jade.debug[0].filename });
buf.push("<div class=\"name text-small\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 18, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = post.author.name) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 19, filename: jade.debug[0].filename });
buf.push("<div class=\"stats\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 20, filename: jade.debug[0].filename });
buf.push("<img src=\"images/like.png\" class=\"icon\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 21, filename: jade.debug[0].filename });
buf.push("<div class=\"likes align-center grey\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 22, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = post.likes) == null ? '' : jade.interp)) + " ");
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
jade.debug.shift();
}
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
