var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      app.post("/api/friends", function(req, res) {
            //req.body is where we get the friends data
            //Do a for loop over each 'friend' in our friends array
            //then for each friend for loop through their scores array
            //compare each value in an absolute manner and total up a 'difference'
            //Keep track of the lowest difference as you iterate
            //once both iterations are complete you should have the best match 
            //return the object back to the front end so the best match can be displayed in modal
            //Dont forget to push your new 'friend' into the friends array for the next victim
            for(var i = 0; i < friends.length; i++) {
                //Here friends[i] is each friend
                for(var j = 0; j < friends[i].scores.length; j++) {
                    //Here friends[i].scores[j] is each score
                    //req.body.scores[j]

                    // 1-5 = -4 Math.abs(1-5) // +4 
                    
                }
            }
      });
     
}
