$(document).ready(function() {

    function addRecord() {
        var header = $('#header_edit').val(),
            desc = $('#desc_edit').val();


        if (header.length != 0 && desc.length != 0) {
            $(this).removeClass('no_data');
            $('.empty_left').hide();
            $('.actual_records').append(`
<div class="record">
    <div class="rec_top">
        <h3 class="rec_name">${header}</h3>
        <button class="del"></button>
        <button class="resize"></button>
    </div>
    <div class="rec_desc">${desc}</div>
</div>
`);
            
            $('.req').val("");

        } else {
            function backLight() {
                $('go_rec').attr('disabled');
                $('.req').addClass('no_data');
                $('.no_data').css({
                    'border-color': 'red'
                });
                setTimeout(function() {
                    $('.no_data').removeAttr('style');
                    $('.go_rec').removeAttr('disabled');
                }, 500);
            };
            backLight();
        };
    };

    function RemoveRecord(del_btn) {
        del_btn.remove();
    };

    function ResizeRecord(hide_desc) {
        hide_desc.find('.rec_desc').toggle(600);
    };
    $('.go_rec').on('click', addRecord);
    $('body').on('click', '.del', function(event) {
        event.preventDefault();
        var del_btn = $(this).parents('.record');

        RemoveRecord(del_btn);

        var records = $('.record');
        console.log(records.length);
        if (records.length == 0) {
            $('.empty_left').show();
        }
    });
    $('body').on('click', '.resize', function(event) {
        event.preventDefault();
        var hide_desc = $(this).parents('.record');
        ResizeRecord(hide_desc);
        if ($(this).hasClass('shrink')) {
            $(this).removeClass('shrink');
        } else {
            $(this).addClass('shrink');
        }
    });
});