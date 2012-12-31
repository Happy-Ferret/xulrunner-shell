
# load alias prep code
cat ./scripts/_template > xpcshell.js

# set alias
echo "aliasFile.initWithPath('`pwd`/modules/');" >> xpcshell.js
echo "var aliasURI = ioService.newFileURI(aliasFile);" >> xpcshell.js
echo "resProt.setSubstitution('modules', aliasURI);" >> xpcshell.js

for module in modules/*.jsm; do
  module="`basename $module`"
  echo "print('Loading: $module');" >> xpcshell.js
  echo "Components.utils.import('resource://modules/$module');" >> xpcshell.js
done

./xulrunner/run-mozilla.sh ./xulrunner/xpcshell -v 180 -s -w 

