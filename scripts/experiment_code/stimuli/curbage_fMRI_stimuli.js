var instructions_audio_check = '<p>Message to experimenter: <br>Please check the audio and microphone before continuing.</br></p>'
var instructions_overview_audio_test = '<p>Thank you for being a responsible experimenter and conducting the audio test!</p> Press SpaceBar and start speaking into the microphone.</p>'
var instructions_audio_test = "<p>Please read the following aloud.\
    <br></br><em>I wanna be the best that no one ever was. To catch them is my real test. To train them is my cause. Pokemon! Gotta catch 'em all!</em>\
    <br></br>Press Continue when you are finished.</p>"
var instructions_audio_test_exit = '<p>Perfect! You have successfully conducted the audio test! <br></br> <img src="stimuli/squirtle.gif" style="height=270;"> <br></br> Press SpaceBar to exit.</p>'
var instructions_field_map = 'Message to experimenter: Run fieldmap.'
var instructions_pause = 'Waiting on experimenter... <br></br> Please relax while you wait for the experimenter. Remember to keep your head still.'
var welcome_instructions = 'Welcome to the experiment!'
var instructions_encoding = '<br></br>You will now watch a video. This is an episode of a TV sitcom, and features no violence or nudity, but has some crude humor. Please try to be as alert and attentive as you can. You will be asked questions about the video after you are finished.\
    <br></br>Please ask the experimenter any questions now. Whenever you are ready to begin, let the experimenter know.'
var instructions_recall = "<p>Please recall the episode you just watched in as much detail as you can. It is best if you can go in order, from start to finish, but if it is easier for you to remember out of order, that's okay. The microphone here will record your voice, and there is no need to use formal language. Also, remember to keep you head as still as possible.</br></br></p> \
    <br>When you see the fixation (+) on the next screen, you may begin speaking whenever you are ready. When you are finished, use your index finger to stop the recording.</br><br></br>\
    <br></br>Remember to keep your head still. Please ask the experimenter any questions now. Whenever you are ready to begin, let the experimenter know."
var instructions_recall_finish = '<br></br><div style="font-size:60px;">+</div><br></br><br></br><p>Use your index finger to press the button when you are finished.</p>'
var instructions_exit_session = 'Great job! You have completed the experiment.'

var instructions_narrative_recognition = ["<p>In this part of the experiment, you will be presented with a series of statements \
    about the TV show episode you just watched.\
    Your job is to read the statement, and use your index finger to press the button if the statement is true, and your middle finger to press the button if it is false. \
    This is self-paced, so you may take as long as you like to remember and answer each question. \
    There are 90 questions in total. This should take 10-20 minutes, depending on your pace. \
    Remember to keep your head still. Please ask the experimenter any questions now. Whenever you are ready to begin, let the experimenter know.</p>"]

var instructions_perceptual_recognition = ["<p>In this part of the experiment, you will be presented with a series of images. \
    from the TV show episode you just watched. Some are from that episode, but some are from a different episode. \
    Your job is to view each image, and your middle finger to press the button if it is true you that saw it, and your ring finger to press the button if it is false that you saw it. \
    This is self-paced, so you may take as long as you like to evaluate each picture. \
    There are 90 pictures in total. This should take 10-20 minutes, depending on your pace. \
    Remember to keep your head still. Please ask the experimenter any questions now. Whenever you are ready to begin, let the experimenter know.</p>"]

    var narrative_recognition_test = [
    {
      "item": "n1",
      "stimulus": "Jeff mentions that he sponsored a kid at a summer camp.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n2",
      "stimulus": "Larry walks in on Jeff discussing a house fire over the phone.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n3",
      "stimulus": "Cheryl asks Larry to critique her outfit and is upset that he does not approve of it.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n4",
      "stimulus": "Larry unexpectedly meets a lawyer who can solve a problem for Jeff.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n5",
      "stimulus": "Larry complains to Cheryl about how many pillows they have on their bed.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n6",
      "stimulus": "Cheryl's friend Amy complains that Larry never picks up the bill for dinner.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n7",
      "stimulus": "Larry goes to see Dr. John Lynch on the third floor of the medical building.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n8",
      "stimulus": "The front desk attendant at the doctor's office informs Larry that patients are seen in the order they sign in.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n9",
      "stimulus": "At the grocery store Larry complains to Jeff that they never carry enough Kosher food.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n10",
      "stimulus": "Larry complains that he is late for a meeting with Diane Keaton.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n11",
      "stimulus": "Cheryl puts Larry's hurt finger in a splint made of tape and a plastic fork.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n12",
      "stimulus": "Larry is unable to pay for his parking fee and tries to argue with the attendant about whether he should pay.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n13",
      "stimulus": "Cheryl's interior decorator Carmen suggests that their home needs brighter colors.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n14",
      "stimulus": "Jeff offends Larry by ordering for him when they go out to dinner.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n15",
      "stimulus": "Larry gets into a wrestling match with the interior decorator that Cheryl hired.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n16",
      "stimulus": "Larry's doctor mentions that his wife is an actress and is looking for jobs.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n17",
      "stimulus": "Cheryl tells Larry that the cutoff time for calling friends at their home is 10PM.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n18",
      "stimulus": "A dinner party attendee spills a very expensive bottle of Larry's wine.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n19",
      "stimulus": "Larry goes to visit a friend and finds her distraught over her cat who just passed away.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n20",
      "stimulus": "Larry's shoes are stolen from the bowling alley.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n21",
      "stimulus": "Larry and Cheryl are invited by some friends to go to a concert.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n22",
      "stimulus": "Larry loses his notepad and barges into his friend's house to look for it.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n23",
      "stimulus": "Jeff lets a kid stay at his house who steals a lot of his belongings.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n24",
      "stimulus": "Larry's friend thinks that Cheryl stole her bracelet.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n25",
      "stimulus": "Cheryl is annoyed with Larry for stealing forks from the restaurant.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n26",
      "stimulus": "A guest at dinner has an allergic reaction to the shrimp being served and has to go to the ER.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n27",
      "stimulus": "A neighbor of Larry's yells at him for putting his garbage can in front of their driveway.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n28",
      "stimulus": "Larry and Cheryl get into their car to leave and discover that their plane tickets are missing.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n29",
      "stimulus": "Larry offends Cheryl and her family by insulting her aunt who just passed away.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "n30",
      "stimulus": "Larry complains to Cheryl about their Jewish relative who is marrying a Christian man and converting to Christianity.",
      "correct_response": "g",
      "type": "foil"
    },
    {
      "item": "s1",
      "stimulus": "The car Jeff gets is a 1970 Chevy.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s2",
      "stimulus": "Larry offers a man on the street a ham sandwich.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s3",
      "stimulus": "The replacement caterer Larry suggests to Cheryl is Jeff's cousin.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s4",
      "stimulus": "Jeff answers $50 when Larry asks how much Jeff paid for the Chevy.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s5",
      "stimulus": "The driver behind Larry and Jeff at the stop sign angrily honks his horn at them.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s6",
      "stimulus": "The two towns Julie and Pat are discussing on the couch are Covina and Los Angeles.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s7",
      "stimulus": "Mike asks Larry if he gets paid every time a rerun of Cheers is on TV.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s8",
      "stimulus": "Mike tells Larry that the Chevy involved in the wreck should be totally fine.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s9",
      "stimulus": "Mike makes a toast to the hosts Cheryl and Larry at dinner.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s10",
      "stimulus": "Cheryl wins a bet she made with Larry the night of the dinner party.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s11",
      "stimulus": "Larry asks Cheryl if they can switch to Crest toothpaste.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s12",
      "stimulus": "Mike calls and leaves Larry a message at 10 in the morning.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s13",
      "stimulus": "Larry goes into the fridge and is surprised that the chocolate cake is not in there.",
      "correct_response": "f ",
      "type": "lure"
    },
    {
      "item": "s14",
      "stimulus": "Larry says he remembers Jeff walked to his car with a platter of leftovers.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s15",
      "stimulus": "Cheryl calls Debbie the caterer about the leftovers but no one answers the phone.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s16",
      "stimulus": "The caterer claims she gave all of the food away to her friends.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s17",
      "stimulus": "Larry confronts Jeff as he is eating and sitting at the computer.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s18",
      "stimulus": "Larry sits down and eats a cherry turnover when confronting Jeff in his house.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s19",
      "stimulus": "Mike tells Larry that the Chevy has damage to the radiator.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s20",
      "stimulus": "Jeff insists that he will pay for the labor costs for the car repairs.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s21",
      "stimulus": "Cheryl tells Larry to apologize to Mike when he meets him at the AAMCO shop.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s22",
      "stimulus": "Mike tells Larry at the AAMCO shop that he felt guilty for taking Cheryl's chair at dinner.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s23",
      "stimulus": "Mike tells Larry that he has never been to Martha's Vineyard.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s24",
      "stimulus": "Larry suggests to Mike that they go fishing together in Martha's Vineyard.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s25",
      "stimulus": "Mike's last name is Daniels.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s26",
      "stimulus": "Jeff's car is hit from the side.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s27",
      "stimulus": "Cheryl insists that the caterer took the food by accident.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s28",
      "stimulus": "Cheryl's friend compliments the directing in the movie she borrowed.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s29",
      "stimulus": "Larry jokingly asks Cheryl when the next meeting of the Young Democrats' Club is.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "s30",
      "stimulus": "After Larry pressures her the caterer gets apple turnovers from the fridge.",
      "correct_response": "g",
      "type": "lure"
    },
    {
      "item": "t1",
      "stimulus": "Jeff got his newly purchased car from his neighbor.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t2",
      "stimulus": "Cheryl sarcastically tells her friend Julie that Larry is good at doing impressions.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t3",
      "stimulus": "Cheryl's friend Julie was returning a movie she borrowed called Sour Grapes.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t4",
      "stimulus": "Larry argues that Cheryl's friend did not like the movie she borrowed.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t5",
      "stimulus": "Jeff's feelings are hurt because Larry did not congratulate him on his car purchase.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t6",
      "stimulus": "The commercial on the radio is for an auto shop called AAMCO.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t7",
      "stimulus": "At the dinner party Allison and David tell Larry they saw the play Annie Get Your Gun on a cruise.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t8",
      "stimulus": "Mike tells Larry that he owns an AAMCO station.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t9",
      "stimulus": "Mike says grace before the dinner party guests begin eating their meal.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t10",
      "stimulus": "Larry tells Cheryl he would prefer some Jewish people to be at their next dinner party.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t11",
      "stimulus": "Cheryl thinks Mike is upset from overhearing that Larry does not want people staying in his guest house.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t12",
      "stimulus": "Larry says he remembers the caterer walked to her car with a platter of leftovers.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t13",
      "stimulus": "Cheryl threatens to cancel the check paying for the food if the caterer does not return it.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t14",
      "stimulus": "Cheryl sends Larry to go get the leftovers from the caterer.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t15",
      "stimulus": "The caterer tells Larry that there are three pieces of chicken left.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t16",
      "stimulus": "Larry learns that the assistant to the caterer dropped the food off with his friend Jeff.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t17",
      "stimulus": "Larry accuses Jeff of getting 10 percent of his salary and 10 percent of his food.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t18",
      "stimulus": "Mike tells Larry that his rash cleared up.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t19",
      "stimulus": "Mike tells Larry that he can fix the Chevy.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t20",
      "stimulus": "The homeless man tells Larry they serve soup and peanut butter at the shelter.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t21",
      "stimulus": "Larry and Cheryl are returning from a seafood restaurant at the end of the episode.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t22",
      "stimulus": "The Chevy is still not fixed at the end of the episode.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t23",
      "stimulus": "Mike has a wife named Maggie.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t24",
      "stimulus": "Larry ends up giving his leftover food to a homeless man.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t25",
      "stimulus": "Mike asks Larry if the car was in gear when it was hit.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t26",
      "stimulus": "Mike sits in Larry's chair at the head of the dinner table.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t27",
      "stimulus": "Cheryl's friend Julie compliments the movie she borrowed for having the perfect length.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t28",
      "stimulus": "Cheryl's friend Julie compliments the expressions on the characters' faces in the movie she borrowed.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t29",
      "stimulus": "Jeff's car is hit because of a commercial on the radio.",
      "correct_response": "r",
      "type": "old"
    },
    {
      "item": "t30",
      "stimulus": "Larry tells Cheryl he didn't hear the phone ring when Mike called.",
      "correct_response": "r",
      "type": "old"
    }
   ]
   
var perceptual_recognition_test = [
       {
         "item": "d1",
         "stimulus": ["stimuli/d01.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d2",
         "stimulus": ["stimuli/d02.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d3",
         "stimulus": ["stimuli/d03.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d4",
         "stimulus": ["stimuli/d04.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d5",
         "stimulus": ["stimuli/d05.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d6",
         "stimulus": ["stimuli/d06.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d7",
         "stimulus": ["stimuli/d07.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d8",
         "stimulus": ["stimuli/d08.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d9",
         "stimulus": ["stimuli/d09.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d10",
         "stimulus": ["stimuli/d10.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d11",
         "stimulus": ["stimuli/d11.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d12",
         "stimulus": ["stimuli/d12.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d13",
         "stimulus": ["stimuli/d13.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d14",
         "stimulus": ["stimuli/d14.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d15",
         "stimulus": ["stimuli/d15.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d16",
         "stimulus": ["stimuli/d16.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d17",
         "stimulus": ["stimuli/d17.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d18",
         "stimulus": ["stimuli/d18.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d19",
         "stimulus": ["stimuli/d19.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d20",
         "stimulus": ["stimuli/d20.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d21",
         "stimulus": ["stimuli/d21.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d22",
         "stimulus": ["stimuli/d22.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d23",
         "stimulus": ["stimuli/d23.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d24",
         "stimulus": ["stimuli/d24.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d25",
         "stimulus": ["stimuli/d25.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d26",
         "stimulus": ["stimuli/d26.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d27",
         "stimulus": ["stimuli/d27.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d28",
         "stimulus": ["stimuli/d28.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d29",
         "stimulus": ["stimuli/d29.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "d30",
         "stimulus": ["stimuli/d30.png"],
         "correct_response": "g",
         "type": "foil"
       },
       {
         "item": "s1",
         "stimulus": ["stimuli/s01.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s2",
         "stimulus": ["stimuli/s02.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s3",
         "stimulus": ["stimuli/s03.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s4",
         "stimulus": ["stimuli/s04.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s5",
         "stimulus": ["stimuli/s05.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s6",
         "stimulus": ["stimuli/s06.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s7",
         "stimulus": ["stimuli/s07.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s8",
         "stimulus": ["stimuli/s08.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s9",
         "stimulus": ["stimuli/s09.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s10",
         "stimulus": ["stimuli/s10.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s11",
         "stimulus": ["stimuli/s11.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s12",
         "stimulus": ["stimuli/s12.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s13",
         "stimulus": ["stimuli/s13.png"],
         "correct_response": "f ",
         "type": "lure"
       },
       {
         "item": "s14",
         "stimulus": ["stimuli/s14.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s15",
         "stimulus": ["stimuli/s15.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s16",
         "stimulus": ["stimuli/s16.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s17",
         "stimulus": ["stimuli/s17.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s18",
         "stimulus": ["stimuli/s18.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s19",
         "stimulus": ["stimuli/s19.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s20",
         "stimulus": ["stimuli/s20.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s21",
         "stimulus": ["stimuli/s21.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s22",
         "stimulus": ["stimuli/s22.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s23",
         "stimulus": ["stimuli/s23.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s24",
         "stimulus": ["stimuli/s24.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s25",
         "stimulus": ["stimuli/s25.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s26",
         "stimulus": ["stimuli/s26.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s27",
         "stimulus": ["stimuli/s27.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s28",
         "stimulus": ["stimuli/s28.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s29",
         "stimulus": ["stimuli/s29.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "s30",
         "stimulus": ["stimuli/s30.png"],
         "correct_response": "g",
         "type": "lure"
       },
       {
         "item": "t1",
         "stimulus": ["stimuli/t01.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t2",
         "stimulus": ["stimuli/t02.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t3",
         "stimulus": ["stimuli/t03.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t4",
         "stimulus": ["stimuli/t04.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t5",
         "stimulus": ["stimuli/t05.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t6",
         "stimulus": ["stimuli/t06.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t7",
         "stimulus": ["stimuli/t07.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t8",
         "stimulus": ["stimuli/t08.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t9",
         "stimulus": ["stimuli/t09.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t10",
         "stimulus": ["stimuli/t10.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t11",
         "stimulus": ["stimuli/t11.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t12",
         "stimulus": ["stimuli/t12.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t13",
         "stimulus": ["stimuli/t13.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t14",
         "stimulus": ["stimuli/t14.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t15",
         "stimulus": ["stimuli/t15.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t16",
         "stimulus": ["stimuli/t16.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t17",
         "stimulus": ["stimuli/t17.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t18",
         "stimulus": ["stimuli/t18.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t19",
         "stimulus": ["stimuli/t19.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t20",
         "stimulus": ["stimuli/t20.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t21",
         "stimulus": ["stimuli/t21.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t22",
         "stimulus": ["stimuli/t22.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t23",
         "stimulus": ["stimuli/t23.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t24",
         "stimulus": ["stimuli/t24.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t25",
         "stimulus": ["stimuli/t25.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t26",
         "stimulus": ["stimuli/t26.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t27",
         "stimulus": ["stimuli/t27.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t28",
         "stimulus": ["stimuli/t28.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t29",
         "stimulus": ["stimuli/t29.png"],
         "correct_response": "r",
         "type": "old"
       },
       {
         "item": "t30",
         "stimulus": ["stimuli/t30.png"],
         "correct_response": "r",
         "type": "old"
       }
   ]
; 

