const findTheOldest = function(people) {
  people.forEach(person => {
      if (!person.yearOfDeath) person.yearOfDeath = (new Date()).getFullYear();
    });

  return people.reduce((a, b) => {
      if ( (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ) {
	return a;
      }
      return b;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
