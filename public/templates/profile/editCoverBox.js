define(["vendor/jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div id=\"edit-cover-box\" class=\"modalify\"><div class=\"closeModalifyX closeModalify\">&times;</div><div id=\"upload-box\" class=\"upload-box align-center\"><form action=\"/upload\" name=\"form-cover\" id=\"form-cover\" method=\"post\" enctype=\"multipart/form-data\"><input type=\"file\" accept=\"image/*\" name=\"image\" id=\"file\" class=\"bg-white-trans-light\"/><input type=\"submit\" name=\"sub-cover\" id=\"sub-cover\" value=\"Save\" class=\"white bg-green\"/><br/></form><div id=\"status\">.jpg, .jpeg, .png only</div><div class=\"spacer-50\"></div></div><div id=\"progress\" class=\"progress bg-white-trans\"><div class=\"bar bg-dark-grey\"></div><div class=\"percent\"></div></div></div>");;return buf.join("");
};

});
