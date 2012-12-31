var file =  new File('/tmp/test');
if(file.exists()) print( "file says it exists" );
file.create();
if(!file.exists()) print( "file missing should of been created" );
file.remove();
if(File.exists("/tmp/test")) print( "file removed yet still exists" );
file.create();
file.rename( "test2" );
if(File.exists( "/tmp/test" )) print("file renamed yet /tmp/test still exists");
if(!File.exists( "/tmp/test2" )) print("file renamed yet /tmp/test2 doesn't exist");
if(file.parent.path != "/tmp") print("parent of file is not /tmp");
if(file.path != "/tmp/test2") print("path to file is wrong");
//target
if(file.isDirectory()) print("file says it's a directory");
if(!file.isFile()) print("file says it's not a file");
if(file.size>0) print("file says it has bigger than 0 size");
if(file.permissions!=0755) print("file doesn't have default perms");
if(file.name != "test2") print("file's .name doens't match");
if(file.uri != "/tmp/test2") print("file's uri does not poitn to right place");
/*
File.prototype.read = function(){
File.prototype.lines = function(){ return this.readLines(); };
File.prototype.readAsync = function( options ){
      options.complete( aResult );
File.prototype.write = function( data, mode )
File.prototype.append = function( data ){
File.prototype.copyTo = function( name, dir, dereference, native ){
File.prototype.moveTo = function( name, dir, native ){
File.prototype.clone = function(){ return new File( this.nsIFile.clone() ); };
File.prototype.normalize = function(){ return this.nsIFile.normalize(); };
File.prototype.isWritable = function(){ return this.nsIFile.isWritable(); };
File.prototype.isSymlink = function(){ return this.nsIFile.isSymlink(); };
File.prototype.isReadable = function(){ return this.nsIFile.isReadable(); };
File.prototype.isExecutable = function(){ return this.nsIFile.isExecutable(); };
File.prototype.isHidden = function(){ return this.nsIFile.isHidden(); };
File.prototype.modified = File.prototype.lastModifiedTime;
File.prototype.equals = function( file ){
File.prototype.contains = function( file, recurse ) // find
*/
