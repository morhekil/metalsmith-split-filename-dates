var path = require('path');

module.exports = function(options){
  return function drafts(files, metalsmith, done){
    Object.keys(files).forEach(function(name) {
      var m = name.match(/^(\d{4}-\d{2}-\d{2})-(.*)/);
      if (m) {
        var f = files[name];
        f.date = new Date(m[1]);
        f.name = path.basename(m[2], path.extname(m[2]));
      }
    });
    done();
  };
};
