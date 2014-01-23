(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var Post, User, View, templ, _ref;
    User = require("models/User");
    Post = require("models/Post");
    templ = require("templates/profile/main");
    return View = (function(_super) {
      var setFile;

      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.render = function() {
        var _this = this;
        console.log("handle " + this.id);
        this.model = new User({
          handle: this.id
        });
        this.model.fetch({
          success: function(data) {
            _this.json = data.toJSON();
            _this.itemModel = new Post({
              author: _this.json[0]._id
            });
            return _this.itemModel.fetch({
              success: function(items) {
                return _this.$el.html(templ({
                  profile: _this.json,
                  posts: items.toJSON()
                }));
              }
            });
          }
        });
        return this;
      };

      View.prototype.events = {
        "click #edit-cover-button": "editBoxToggle",
        "change #file": "fileChange",
        "click #sub-cover": "fileLoad"
      };

      View.prototype.editBoxToggle = function() {
        return $("#edit-cover-box").fadeToggle();
      };

      setFile = function(input) {
        var reader;
        if (input.files && input.files[0]) {
          reader = new FileReader();
          console.log(input.files);
          console.log(input.files[0]);
          reader.onload = function(e) {
            return $("#profile-img").attr("src", e.target.result);
          };
          return reader.readAsDataURL(input.files[0]);
        }
      };

      View.prototype.fileChange = function() {
        var file, fileArray;
        file = $("#file");
        fileArray = file.val().split(".").pop().toLowerCase();
        console.log(file);
        if ($.inArray(fileArray, ["png", "jpg", "jpeg"]) === -1) {
          return $("#status").text("Error, incorrect file type  .jpg, .jpeg, .png only");
        } else {
          $("#status").text(".jpg, .jpeg, .png only");
          return setFile(file);
        }
      };

      View.prototype.fileLoad = function() {
        var file, formData, xhr;
        e.preventDefault();
        file = $("#file").val().split(".").pop().toLowerCase();
        if ($("#file").val() < 1) {

        } else if ($.inArray(file, ["png", "jpg", "jpeg"]) === -1) {
          return $("#status").text("Error, incorrect file type  .jpg, .jpeg, .png only");
        } else {
          formData = new FormData($("#form-cover")[0]);
          xhr = new XMLHttpRequest();
          xhr.open("post", "/upload", true);
          xhr.upload.onprogress = function(e) {
            var percentage;
            if (e.lengthComputable) {
              percentage = (e.loaded / e.total) * 100;
              return $(".progress .bar").css("width", percentage + "%");
            }
          };
          xhr.onerror = function(e) {
            return console.log(xhr.responseText);
          };
          xhr.onload = function() {
            var result;
            result = xhr.responseText;
            console.log(result);
            slideUpload();
            return showEditBox();
          };
          xhr.send(formData);
          return slideUpload();
        }
      };

      return View;

    })(Backbone.Marionette.View);
  });

}).call(this);
