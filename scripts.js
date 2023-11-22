// Handle form of payment radio button change
$('input[name="payment-type"]').change(function () {
    if (this.value === 'Card') {
        $('#card-details').show();
    } else {
        $('#card-details').hide();
    }
});

// You can add further JavaScript code to handle form submission and processing here
