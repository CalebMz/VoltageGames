$(document).ready(function(){
    //Heading fades in first
    $("#MainHeading").fadeIn(2000);
    //Followed by the logo
    $("#MainLogo").fadeIn(5000);
    //Then each of the reviews one after the other
    $("#review1").fadeIn(6000);
    $("#review2").fadeIn(8000);
    $("#review3").fadeIn(10000);
    
    /**When the mouse hovers over the browse button it will change color, when it leaves it changes back
     * This can also be done using css
     */
    $("#BrowseButton").mouseover(function(){
        $("#BrowseButton").css("background-color", "#1A2127");
        $("#BrowseButton").css("color", "white");
    }).mouseout(function(){
        $("#BrowseButton").css("color", "black");
        $("#BrowseButton").css("background-color", "white");
    })
});