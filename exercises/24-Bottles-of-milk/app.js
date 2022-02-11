function beerSong() {
    var bottles;
    var bottlesLeft;
    for (i = 99; i >= 0; i--) {
        if (i == 1) {
            bottles = "bottle";
            bottlesLeft = "No more bottles of milk on the wall!";
        } else {
            bottles = "bottles";
            bottlesLeft = i - 1 + " bottles of milk on the wall!";
        }
        console.log(i + " " + bottles + " of milk on the wall, " + i + " " + bottles + " of milk. " + "Take one down, pass it around," + " " + bottlesLeft);
    }
    console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")

};

beerSong();