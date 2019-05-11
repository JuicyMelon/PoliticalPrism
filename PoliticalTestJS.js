function check()
{
    //Questions:
    var q1 = document.forms["Political Quiz"]["q1"].value;
    var q2 = document.forms["Political Quiz"]["q2"].value;
    let q3 = document.forms["Political Quiz"]["q3"].value;
    let q4 = document.forms["Political Quiz"]["q4"].value;
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

        if (q1 == "semifree")
        {
            eco = eco + 0.5;
        }

        if (q1 == "protect")
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

        if (q2 == "onlyprojects")
        {
            eco = eco + 0.5;
            pat = pat - 0.125;
        }

        if (q2 == "anarchist")
        {
            eco = eco + 1;
            pat = pat - 2;
        }

        if (q2 == "minarchist")
        {
            eco = eco + 0.75;
            pat = pat - 1.5;
        }

    //Question 3:
        if (q3 == 'keynesian') {
            eco = eco - 0.5;
        }

        if (q3 == 'monetarist') {
            eco = eco + 0.25;
        }

        if (q3 == 'austrian') {
            eco = eco + 0.5;
        }

        if (q3 == 'stossel') {
            eco = eco + 1;
        }

    //Question 4:
        if (q4 == 'yesDrugs') {
            pat = pat - 0.5;
            cult = cult - 0.5;
        
        }

        if (q4 == 'kindOfDrugs') {
            pat = pat + 0.25;
            cult = cult + 0.25;
        }

        if (q4 == 'Austrian') {
            pat = pat + 0.5;
            cult = cult + 0.5;
        }



        document.getElementById("after_submit").style.visibility = "visible";
        document.getElementById("result").innerHTML = "Your political stance values on each axis are Economical : " + eco + " Cultural : " + cult + " Foreign Policy : " + fng + " Paternalism : " + pat;
}