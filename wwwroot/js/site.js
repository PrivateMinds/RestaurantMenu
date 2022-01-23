$(document).ready(function ()
{
  //salads selection code.
    $('.salad').click(function ()
    {
        //expand salads  options.

       $('.showsalads').slideToggle('slow');
        $(".showsalads").show();
        
        $("#chkdressing").prop("checked", false);
        $("#chkGreek").prop("checked", false);




        var salads = $('#chkSalad').is(":checked");

        //Keep track of the check and uncheck click events.
        if (salads)
        {
        //show the salad options when salad is checked
            $(".showsalads").show();
          
         
        }
        else
        {
          //Hide salad and dressing options when salad is unchecked.

            $(".showsalads").hide()
            $(".showdressings").hide();
            $(".showsuggestion").hide();
            $(".dressing").hide();
            $(".showbread").hide();
            $(".dressingsopt").hide();



            
        }
    });
 //====================================================================================================================================
    //Greek  selection code.
    $('#chkGreek').click(function ()
    {
        $("#chkdressing").prop("checked", false);
        var Greek = $('#chkGreek').is(":checked")

        if (Greek)
        {
            
            //suggest other options to the user
            $(".showsuggestion").show();
            $(".dressing").show();
            $(".showbread").show();
           
        }
        else
        {
       
            //Hide other options.
            $(".showsuggestion").hide();
            $(".dressing").hide();
            $(".showbread").hide();
            $(".dressingsopt").hide();

        }
    });

//====================================================================================================================================
    //dressings  selection code.
    $('.dressing').click(function ()
    {
        //expand dressings options.

        $('.dressingsopt').slideToggle('slow');
        $(".dressingsopt").show();

        var dressings = $('.dressing').is(":checked")

        //Keep track of the check and uncheck click events.

        if (dressings)
        {
            //show the dressing options when dressing is checked
            $(".dressingsopt").hide();
        }
        else {
            //Hide dressing options when dressing is unchecked.
            $(".dressingsopt").show();

        }
    });
 
//==================================================================================================================================================
    $('.Soups').click(function ()
    {
    //expand soups options.
        $('.showsoups').slideToggle('slow');
        $(".showsoups").show();
        $(".Othersuggestions").hide();
        $("#chkMineStrone").prop("checked", false);


        var soups = $('.soups').is(":checked");

        //Keep track of the check and uncheck click events.
        if (soups)
        {
            //show the soup options when soup is checked
            $(".showsoups").hide();
            $(".Othersuggestions").hide();
            
        }
        else {
            //Hide soup options when soup is unchecked.

            $(".showsoups").show()
           
            
        }
    });
//==================================================================================================================================
    $('#MineStrone').click(function ()
    {
        //Expand other suggestions

        $('.Othersuggestions').slideToggle('slow');
        $(".Othersuggestions").show();

        var MineStrone = $('#MineStrone').is(":checked")

        //Keep track of the check and uncheck click events.

        if (dressings)
        {
            //suggest other options to the user
            $(".Othersuggestions").hide();
        }
        else {
            //Hide suggestions
            $(".Othersuggestions").show();

        }
    });
});