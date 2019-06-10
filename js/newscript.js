// Calculate the total

$(document).ready(function() {
    $("input[type='radio']").click(function() {
        var radioValue = $("input[name='radio']:checked").val();
        var qty = $('#selectNum').val();
        $('#total_sum').html(radioValue * qty);
        var licensePlan = $(this).attr('license_plan');
        $('#selected_num').html(licensePlan);

        // Update total when the selected number of licenses changes

        if (radioValue) {
            $("#selectNum").change(function() {
                $(this).addClass('active_select');
                var selectedAmount = $(this).children("option:selected").val();
                $('#total_sum').html(radioValue * selectedAmount);
            });
        }

    });




});

// Change the bg-color of license that is chosen

$(document).ready(function() {
    $('input[type="radio"]').change(function() {
        $('input:radio').each(function() {
            if ($(this).is(':checked')) {
                $(this).parents('.licenses').addClass('bg-checked');
            } else {
                $(this).parents('.licenses').removeClass('bg-checked');
            }
        });
    });

});


// Make button change it`s clicked on

$(document).ready(function() {
    $('button').mousedown(function() {
        $(this).addClass('btn-clicked');

    });
    $('button').mouseup(function() {
        $(this).removeClass('btn-clicked');
    });

})