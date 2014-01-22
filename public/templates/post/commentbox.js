define(["vendor/jade"],function(jade){

return function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "/www/node/blarney-marionette/client/templates/post/commentbox.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),auth = locals_.auth;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
if ( auth.loggedIn())
{
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<div class=\"new-comment bg-white-shade\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<div class=\"spacer-50\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<form>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<textarea name=\"content\" placeholder=\"Message\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</textarea>");
jade.debug.shift();
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("<button type=\"submit\" class=\"btn btn-success\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("Comment");
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
}
else
{
jade.debug.unshift({ lineno: 8, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 8, filename: jade.debug[0].filename });
buf.push("<div class=\"new-comment bg-white-shade align-center\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("<div class=\"spacer-50\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
buf.push("<a href=\"/login\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("<button class=\"bg-green white inline-block\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("Login to comment");
jade.debug.shift();
jade.debug.shift();
buf.push("</button>");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
}
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
};

});
