var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      app.post("/api/friends", function(req, res) {
          console.log(req.body.scores);
          var bestMatch = null;
          var bestScore = null;
            //req.body is where we get the friends data
            //Do a for loop over each 'friend' in our friends array
            for (var i = 0; i < friends.length; i++){
                //console.log(friends)
                var currentDifference = 0;
            //then for each friend for loop through their scores array

            for(var j = 0; j < friends[i].scores.length; j++){
                //Here we take differnce absolutely of the scores and add to our temp counter
                var currentFriendValue = parseInt(friends[i].scores[j]);
                var currentUserValue = parseInt(req.body.scores[j]);
                var difference = Math.abs(currentFriendValue - currentUserValue);
                currentDifference += difference;
            }
            //This code here still happens on every loop just after the other for loop
            if(!bestMatch){
                bestMatch = friends[i];
                bestScore = currentDifference;
            }
            else if(bestScore > currentDifference) {
                bestMatch = friends[i];
                bestScore = currentDifference;
            }
            }

            friends.push(req.body);
            console.log('near response')
            res.json(bestMatch);
            
            //compare each value in an absolute manner and total up a 'difference'
            //Keep track of the lowest difference as you iterate
            //once both iterations are complete you should have the best match 
            //return the object back to the front end so the best match can be displayed in modal
            //Dont forget to push your new 'friend' into the friends array for the next victim
                //Here friends[i] is each friend
                
                    //Here friends[i].scores[j] is each score
                    //req.body.scores[j]

                    // 1-5 = -4 Math.abs(1-5) // +4 
                    
                
          
      });
     
}
