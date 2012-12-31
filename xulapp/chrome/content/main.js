
const Cu = Components.utils;

Cu.import("resource://main/template.js");

var load_template = function(){
  var root = Template.load(
                "chrome://main/content/_template.xul", // template file
                {label:"testing"}, // argument for template context
                document // document to import nodes to
             );

/*
var serializer = new XMLSerializer();
var xml = serializer.serializeToString( root );
alert( xml );
*/

  var main = document.getElementById("main");
  main.appendChild( root );
};  

window.addEventListener( 'load', function(){

load_template();

}, false);

