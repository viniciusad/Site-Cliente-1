var tickets= [''];var freeTickets = [''];var discountTickets = [''];var usdAmount=1;
var ticketsQty = 0;
var ticketsDiscountQty = 0;
var isTicketsAvailable = false;
        var isLive = true;


$('.t-value').each(function(){
    if($(this).val() > 0)
        ticketsQty += parseInt($(this).val(), 10);
});

$('.table-tickets .number').each(function(){
    if($(this).data('available') > 0) {
        isTicketsAvailable = true;
        return;
    }
});

$('#btnContinue').click(function(){
                var msgNoAvailable = 'Nenhum ingresso disponível';
        var msgNoSelected = 'Nenhum ingresso foi selecionado.';
                            var msgEventClose = 'EVENTO ENCERRADO'

    if(!isLive) {
        $('#btnContinue').popover({content:msgEventClose, container:'body', trigger:'manual', placement:'top'});
        $('#btnContinue').popover('show');
        setTimeout(function(){ $('#btnContinue').popover('destroy'); }, 3000);
        return;
    }

    if(!isTicketsAvailable && isLive) {
        $('#btnContinue').popover({content:msgNoAvailable, container:'body', trigger:'manual', placement:'top'});
        $('#btnContinue').popover('show');
        setTimeout(function(){ $('#btnContinue').popover('destroy'); }, 3000);
        return;
    }

    if(ticketsQty === 0 && isTicketsAvailable) {
        $('#btnContinue').popover({content:msgNoSelected, container:'body', trigger:'manual', placement:'top'});
        $('#btnContinue').popover('show');
        setTimeout(function(){ $('#btnContinue').popover('destroy'); }, 3000);
    }
    else {
                    $('#btnContinue').attr('disabled', true);
        
        //$('#btnContinue').hide();
        //$('#buy-container').append('<div><i class="fa fa-spinner fa-2x fa-spin fa-pulse" style="line-height: 51px; text-align: center;"></i></div>');
        $('form#ticket-form').submit();
    }
});

function showDIV(divID) {
    var div = document.getElementById(divID);
    div.style.display = (div.style.display === 'none') ? 'block' : 'none';
}

jQuery('#discountCode').blur(function(){
    if(window.location.search === "") {
        var url = window.location.pathname;
                    jQuery('#btnAddDiscount').attr('href', url + '?d=' + jQuery('#discountCode').val());
    }
    else
    {
        var url = window.location.pathname + window.location.search;
                    url = removeURLParameter(url, 'd');
        jQuery('#btnAddDiscount').attr('href', url + '&d=' + jQuery('#discountCode').val());
    }
});

jQuery("#discountCode").on('keyup', function (e) {
    if (e.keyCode == 13) {
        if(window.location.search === "") {
            var url = window.location.pathname;
                            window.location.href = url + '?d=' + jQuery('#discountCode').val();
        }
        else
        {
            var url = window.location.pathname + window.location.search;
                            url = removeURLParameter(url, 'd');
            window.location.href = url + '&d=' + jQuery('#discountCode').val();
        }
    }
});

jQuery('#discountCode').keydown(function(){
    jQuery('#discountCode').removeClass('alert-danger');
    jQuery('#discountCode').popover('destroy');
});

function showDiscountPanel()
{
    jQuery('#show-discount').hide();
    jQuery('#discount-form').show();
}




$('.t-operator').click(function() {
    var $input = $('#' + $(this).data('t'));
    var $ticket = $('#t-' + $(this).data('t'));

    var value = parseInt($input.val());
    var available = parseInt($ticket.data('available'));
    var min = parseInt($ticket.data('min-qty'));
    var ticketSalePrice = parseFloat($ticket.data('total'), 10);
    var bvalue = value;
    var $operator = $(this);

    $('.t-operator').popover('destroy');

    if($(this).data('optType') === 'minus')
    {
        if(value-1 >= min)
        {
            if(value > 0)
            {
                value--;
                ticketsQty --;
                                    $input.val(value);
                $ticket.text(value);
                if(ticketSalePrice > 0)
                {
                    totalSale = totalSale - ticketSalePrice;
                    $('.lbl-tickets-total').text(Sympla.moneyString(totalSale,usdAmount));
                }

                //tracking
                if (typeof _tracking_callback === "function") {
                    _tracking_callback({
                        'event': 'removeFromCart',
                        'eventCategory': 'sympla:ingresso',
                        'eventAction': 'remocao:ecommerce',
                        'eventLabel': 'carrinho',
                        'ecommerce': {
                            'add': {
                                'products': [{
                                    'name': 'medeia-em-faces-cia-de-teatro-variante',
                                    'id': $(this).data('t').replace('ddlQuant_', ''),
                                    'price': ticketSalePrice,
                                    'category': 'filme-cinema-e-teatro/filme-cinema-e-teatro',
                                    'variant': 'NA',
                                    'quantity': '1'
                                }]
                            }
                        }
                    });
                }
            }
        }
        else
        {
            value = 0;
            if(bvalue !== 0)
            {
                ticketsQty = ticketsQty - bvalue;
                                    $input.val(value);
                $ticket.text(value);
                if(ticketSalePrice > 0)
                {
                    totalSale = totalSale - ticketSalePrice * bvalue;
                    $('.lbl-tickets-total').text(Sympla.moneyString(totalSale,usdAmount));
                }

                //tracking
                if (typeof _tracking_callback === "function") {
                    _tracking_callback({
                        'event': 'removeFromCart',
                        'eventCategory': 'sympla:ingresso',
                        'eventAction': 'remocao:ecommerce',
                        'eventLabel': 'carrinho',
                        'ecommerce': {
                            'add': {
                                'products': [{
                                    'name': 'medeia-em-faces-cia-de-teatro-variante',
                                    'id': $(this).data('t').replace('ddlQuant_', ''),
                                    'price': ticketSalePrice,
                                    'category': 'filme-cinema-e-teatro/filme-cinema-e-teatro',
                                    'variant': 'NA',
                                    'quantity': '1'
                                }]
                            }
                        }
                    });
                }
            }
        }

        if(totalSale > 0) {
            getInstallmentInfo(totalSale);
            $('.exteded-buy-container .col-lbl').show();
            $('.exteded-buy-container .col-btn').removeClass('col-xs-12');
            $('.exteded-buy-container .col-btn').removeClass('col-sm-12');
            $('.exteded-buy-container .col-btn').addClass('col-xs-7');
            $('.exteded-buy-container .col-btn').addClass('col-sm-7');
            $('.exteded-buy-container .col-btn').addClass('padding-top-10');
        }
        else {
            $('.exteded-buy-container .col-lbl').hide();
            $('.exteded-buy-container .col-btn').removeClass('col-xs-7');
            $('.exteded-buy-container .col-btn').removeClass('col-sm-7');
            $('.exteded-buy-container .col-btn').addClass('col-xs-12');
            $('.exteded-buy-container .col-btn').addClass('col-sm-12');
            $('.exteded-buy-container .col-btn').removeClass('padding-top-10');
        }
    }

    if($(this).data('optType') === 'plus')
    {
        
        if(min > value+1 && min <= available)
        {
            value = min;
            ticketsQty = ticketsQty + min;
                            $input.val(value);
            $ticket.text(value);
            if(ticketSalePrice > 0)
            {
                totalSale = totalSale + ticketSalePrice * value;
                $('.lbl-tickets-total').text(Sympla.moneyString(totalSale,usdAmount));
            }

            //tracking
            if (typeof _tracking_callback === "function") {
                _tracking_callback({
                    'event': 'addToCart',
                    'eventCategory': 'sympla:ingresso',
                    'eventAction': 'adicao:ecommerce',
                    'eventLabel': 'carrinho',
                    'ecommerce': {
                        'add': {
                            'products': [{
                                'name': 'medeia-em-faces-cia-de-teatro-variante',
                                'id': $(this).data('t').replace('ddlQuant_', ''),
                                'price': ticketSalePrice,
                                'category': 'filme-cinema-e-teatro/filme-cinema-e-teatro',
                                'variant': 'NA',
                                'quantity': '1'
                            }]
                        }
                    }
                });
            }
        }
        else
        {
            if(value < available)
            {
                value++;
                ticketsQty++;
                                    $input.val(value);
                $ticket.text(value);
                if(ticketSalePrice > 0)
                {
                    totalSale = totalSale + ticketSalePrice;
                    $('.lbl-tickets-total').text(Sympla.moneyString(totalSale,usdAmount));
                }

                //tracking
                if (typeof _tracking_callback === "function") {
                    _tracking_callback({
                        'event': 'addToCart',
                        'eventCategory': 'sympla:ingresso',
                        'eventAction': 'adicao:ecommerce',
                        'eventLabel': 'carrinho',
                        'ecommerce': {
                            'add': {
                                'products': [{
                                    'name': 'medeia-em-faces-cia-de-teatro-variante',
                                    'id': $(this).data('t').replace('ddlQuant_', ''),
                                    'price': ticketSalePrice,
                                    'category': 'filme-cinema-e-teatro/filme-cinema-e-teatro',
                                    'variant': 'NA',
                                    'quantity': '1'
                                }]
                            }
                        }
                    });
                }
            }
            else
            {
                $operator.popover({content:'Máxima quantidade permitida', container:'body', trigger:'manual', placement:'top'});
                $operator.popover('show');
                setTimeout(function(){ $operator.popover('destroy'); }, 3000);
            }
        }

        if(totalSale > 0) {
            getInstallmentInfo(totalSale);
            $('.exteded-buy-container .col-lbl').show();
            $('.exteded-buy-container .col-btn').removeClass('col-xs-12');
            $('.exteded-buy-container .col-btn').removeClass('col-sm-12');
            $('.exteded-buy-container .col-btn').addClass('col-xs-7');
            $('.exteded-buy-container .col-btn').addClass('col-sm-7');
            $('.exteded-buy-container .col-btn').addClass('padding-top-10');
        }
        else {
            $('.exteded-buy-container .col-lbl').hide();
            $('.exteded-buy-container .col-btn').removeClass('col-xs-7');
            $('.exteded-buy-container .col-btn').removeClass('col-sm-7');
            $('.exteded-buy-container .col-btn').addClass('col-xs-12');
            $('.exteded-buy-container .col-btn').addClass('col-sm-12');
            $('.exteded-buy-container .col-btn').removeClass('padding-top-10');
        }
    }
});




function getInstallmentInfo(amount)
{
    $.ajax({
        'type':'POST',
        'beforeSend':function( data ){
            $('.lbl-total-instl').html('');
        },
        'success':function(html){
            $('.lbl-total-instl').html(html);
        },
        'error':function(){ $('.lbl-instl').html(''); },
        'data':{ 'amount':amount, token:'EeI9rdZp2qJHLtDr2f3VTfzTdAAt9Io6Y7zfESR7Pk7vmZ8EhAgLcIDJnGREtobIkN73jIUsaQt_YOcCzTlCPw', 'lang':'pt' },
        'url':'/site/getInstallmentInfo'
    });
}

