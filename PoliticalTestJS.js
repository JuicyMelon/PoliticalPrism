<!DOCTYPE html>
<html>
    <head>
        <title>The Political Prism</title>
        <script src = "PoliticalTestJS.js" type="text/javascript"></script>
    </head>

<!--GUIDE:-->
<!--X AXIS : Economic; Socialist-Capitalist | var eco-->
<!--Y AXIS : Cultural; Progressive-Traditionalist | var cult-->
<!--Z AXIS : Foreign Affairs; Globalist-Nationalist | var fng-->
<!--SIZE : Paternalism; Anarchist-Totalitarian | var pat-->

    <body>
        <h1>The Political Prism</h1>
        <h3> *Some explanation about the test that I'll add later*</h3>

        <form id = "Political Quiz" name = "Political Quiz">

                <!--ECONOMIC QUESTIONS-->

                <p>1. What are your views on free trade?<br>
                    <input type="radio" name="q1" value="free">Everyone should be allowed to trade accross borders without any repercussions or tariffs<br>
                    <input type="radio" name="q1" value="semifree">Free trade should be pursued as much as possible but we should still take measures to protect local industries<br>
                    <input type="radio" name="q1" value="protect">We shouldn't import unless it is absolutely necessary and aim to become resource-independent<br>
                </p>

                <p>2. Should a government tax its citizens?<br>
                    <input type="radio" name="q2" value="redistribution">Yes, a government must tax its citizens to fund projects as well as redistribution to create a safety net<br>
                    <input type="radio" name="q2" value="onlyprojects">A government should only tax to fund projects as using the fruits of your labour for redistribution is akin to slavery<br>
                    <input type="radio" name="q2" value="anarchist">What government?<br>
                    <input type="radio" name="q2" value="minarchist">Yes, but only to maintain things that are absolutely necessary (e.g. EMS, roads)<br> 
                </p>


                <p>3. What are your views on fiscal and monetary policy? <br>
                    <input type="radio" name="q3" value="keynesian">Governments should use fiscal policy instead of monetary policy, as the latter is ineffective<br>
                    <input type="radio" name="q3" value="monetarist">Governments should use monetary policy instead of fiscal policy, to protect private investment<br>
                    <input type="radio" name="q3" value="austrian">No to both, fiscal policy crowds out private investment, and monetary policy creates business cycles<br>
                    <input type="radio" name="q3" value="stossel">There can't be policy without government....get it? <br>
                </p>

                <p>4. Do you support drug legalization? <br>
                    <input type="radio" name="q4" value="yesDrugs">Yes, individuals should be allowed to pursue activities in their own private capacities, as long as no private property is infringed<br>
                    <input type="radio" name="q4" value="kindOfDrugs">Yes, but only some drugs, and only to ensure it may be publicly regulated and controlled<br>
                    <input type="radio" name="q4" value="noDrugs">No, drugs pose both psychological and physiological threats to one's health that should not be perrmitted under any circumstance<br>
                </p>

                <p>5. To what extent should education be controlled by the government?<br>
                    <input type="radio" name="q5" value="propoganda">A government should have control over all curriculums to ensure citizens are patriotic and productive<br>
                    <input type="radio" name="q5" value="freemarket">Education is just like any other market and impossible for a government to properly control and should thus be completely private<br>
                    <input type="radio" name="q5" value="primary">Primary schooling should be conducted by the government but should be private from high school to account for different specializations and interests<br>
                    <input type="radio" name="q5" value="hs">Schooling should be provided by the state until graduation from high school<br>
                    <input type="radio" name="q5" value="mixed">Schooling should be provided up to university, wherein private universities will coexist with cheaper state funded ones<br>
                    <input type="radio" name="q5" value="bernie">All education(including post-secondary) should be fully subsidized by the state 
                </p>

                <p>6. What is your stance on abortion?<br>
                    <input type="radio" name="q6" value="babyIsGone">I support abortion in all cases and trimesters<br>
                    <input type="radio" name="q6" value="babyKillerLite">I support abortion as long as it's not in the third trimester.<br>
                    <input type="radio" name="q6" value="rape">I think abortion should only be legal in cases of rape, incest or danger to the mother<br>
                    <input type="radio" name="q6" value="danger">I think abortion should only be legal when the mother is endangered<br>
                    <input type="radio" name="q6" value="noKill">I believe that abortion should be banned in all cases<br>
                    <input type="radio" name="q6" value="stossel">Although I don't believe abortion is moral, I also don't think the government has a right to ban abortion<br>
                </p>

                <p>7. What are your thoughts on exchange rate regimes?<br>
                    <input type="radio" name="q7" value="closed">We shouldn't allow exchange of our currency to prevent it's manipulation and promote domestic stability<br>
                    <input type="radio" name="q7" value="fixedExchange">We should exchange currencies but go back to the gold standard, to hedge against inflation<br>
                    <input type="radio" name="q7" value="managedFloat">We should have a floating exchange rate system, but allow governmental management to ensure stable rates <br>
                    <input type="radio" name="q7" value="floatingExchange">We should have a freely floating exchange rate system with no intervention, to promote purchasing power parity<br>
                </p>

                <p>8. What are your views on gun control?<br>
                    <input type="radio" name="q8" value="standYourGround">We should allow all citizens to hold firearms and defend themselves with lethal force<br>
                    <input type="radio" name="q8" value="fixedExchange">We should exchange currencies but go back to the gold standard, to hedge against inflation<br>
                    <input type="radio" name="q8" value="managedFloat">We should have a floating exchange rate system, but allow governmental management to ensure stable rates <br>
                    <input type="radio" name="q8" value="floatingExchange">We should have a freely floating exchange rate system with no intervention, to promote purchasing power parity<br>
                </p>

                <input id = "button" type = "button" value = "Submit" onclick = "check();">
        </form>

        <div id = "after_submit">
            <p id = "result"></p>
        </div>
    </body>
</html>
