function check()
{
    //Questions:
    var q1 = document.forms["Political Quiz"]["q1"].value;
    var q2 = document.forms["Political Quiz"]["q2"].value;
    var q3 = document.forms["Political Quiz"]["q3"].value;
    var q4 = document.forms["Political Quiz"]["q4"].value;
    var q5 = document.forms["Political Quiz"]["q5"].value;
    var q6 = document.forms["Political Quiz"]["q6"].value;
    var q7 = document.forms["Political Quiz"]["q7"].value;

    //Variables:
    var eco = 0;
    var cult = 0;
    var fng = 0;
    var pat = 0;

    //Question results:

    //QUESTION 1 :
        if (q1 == "free")
        {
            eco = eco + 1;
            fng = fng + 1;
        }

        else if (q1 == "semifree")
        {
            eco = eco + 0.5;
        }

        else if (q1 == "protect")
        {
            eco = eco - 0.75;
            fng = fng - 0.75;
            cult = cult + 0.25;
        }

    //QUESTION 2 :
        if (q2 == "redistribution")
        {
            eco = eco - 0.25;
        }

        else if (q2 == "onlyprojects")
        {
            eco = eco + 0.5;
            pat = pat - 0.125;
        }

        else if (q2 == "anarchist")
        {
            eco = eco + 1;
            pat = pat - 2;
        }

        else if (q2 == "minarchist")
        {
            eco = eco + 0.75;
            pat = pat - 1.5;
        }

    //Question 3:
        if (q3 == "keynesian") {
            eco = eco - 0.5;
        }

        else if (q3 == "monetarist") {
            eco = eco + 0.25;
        }

        else if (q3 == "austrian") {
            eco = eco + 0.5;
        }

        else if (q3 == "stossel") {
            eco = eco + 1;
        }

    //Question 4:
        if (q4 == "yesDrugs") 
        {
            pat = pat - 0.5;
            cult = cult - 0.5;
            eco = eco + 0.75;
        }

        else if (q4 == "kindOfDrugs") 
        {
            pat = pat + 0.25;
            cult = cult + 0.25;
        }

        else if (q4 == "noDrugs") 
        {
            pat = pat + 0.5;
            cult = cult + 0.5;
        }

    //QUESTION 5 :

        if (q5 == "propoganda")
        {
            eco = eco - 0.125;
            pat = pat + 1;
        }

        else if (q5 == "freemarket")
        {
            eco = eco + 1.25;
        }

        else if (q5 == "primary")
        {
            eco = eco + 1;
        }

        else if (q5 == "hs")
        {
            eco = eco + 0.25;
        }

        else if (q5 == "mixed")
        {
            eco = eco -0.125;
        }

        else if (q5 == "bernie")
        {
            eco = eco - 1;
            pat = pat + 0.125;
        }

    //QUESTION 6 :

        if (q6 == "babyIsGone")
        {
            cult = cult - 0.75;
            pat = pat - 0.75;
        }

        else if (q6 == "babyKillerLite")
        {
            cult = cult - 0.5;
            pat = pat - 0.5;
        }

        else if (q6 == "rape")
        {
            cult = cult + 0.25;
            pat = pat + 0.25;
        }

        else if (q6 == "danger")
        {
            cult = cult + 0.75;
            pat = pat + 0.75;
        }

        else if (q6 == "noKill")
        {
            cult = cult + 1;
            pat = pat + 1;
        }

        else if (q6 == "stossel")
        {
            cult = cult + 0.25;
            pat = pat - 0.75;
        }

    //Question 7:
        if (q7 == "closed") 
        {
            eco = eco - 1;

        }

        else if (q7 == "fixedExchange") 
        {
            eco = eco - 0.5;
        }

        else if (q7 == "managedFloat") 
        {
            eco = eco + 0.5;
        }

        else if (q7 == "floatingExchange") 
        {
            eco = eco + 1;
        }
        
        document.getElementById("after_submit").style.visibility = "visible";
        document.getElementById("result").innerHTML = "Your political stance values on each axis are Economical : " + eco + " Cultural : " + cult + " Foreign Policy : " + fng + " Paternalism : " + pat;
}
