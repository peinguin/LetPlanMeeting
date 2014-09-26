Ember.TEMPLATES["_hello"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3 col-md-offset-1\">\n      <h1>Hello, ");
  stack1 = helpers._triageMustache.call(depth0, "user.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    </div>\n    <div class=\"col-md-7\">\n      <button type=\"button\" class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Logout</button>\n    </div>\n  </div>\n</div ");
  return buffer;
  
});

Ember.TEMPLATES["_login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <a href=\"/auth/google\"   class=\"btn btn-primary btn-lg active\">Sign In with Google</a>\n      <a href=\"/auth/twitter\"  class=\"btn btn-primary btn-lg active\">Sign In with Twitter</a>\n      <a href=\"/auth/facebook\" class=\"btn btn-primary btn-lg active\">Sign In with Facebook</a>\n\n      <form action=\"/login\" method=\"post\" role=\"form\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email:</label>\n          <input type=\"text\" id=\"email\" name=\"email\"/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwd\">Password:</label>\n          <input type=\"passwd\" name=\"passwd\"/>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" value=\"Log In\" class=\"btn btn-default\"/>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "hello", options) : helperMissing.call(depth0, "partial", "hello", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "partial", "login", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "connected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});