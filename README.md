This project is pulled out from [forsaken-launchers](https://github.com/ForsakenX/forsaken-launchers) repo as a place to hold modules I built while developing a launcher for Forsaken in Mozilla's XulRunner.

These modules provide js bindings to some of Mozilla's internals allowing you to do things like:

* interact file system
* open network connections
* communicate between windows
* access user preferences
* interact with observer service

Some of them made their way into Mozilla's JetPack project but today they are hard to recognize from their original forms.

Some of the modules like file.jsm and socket.jsm are unfinished and I'd like to still submit them some day to Mozilla Labs.

The launcher was rather ambitious and towards the end even had a full blown irc lobby client built in.

There is some helper scripts here as well that help you to test the modules from the command line.
