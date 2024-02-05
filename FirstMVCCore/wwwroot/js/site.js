// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function calcPrice() {
    // Get hours and validate
    let hours = parseFloat($("#numHours").val());

    let charge = parseFloat($("#hourlyPrice").val());

    if (!Number.isNaN(hours) && hours >= 0 && !Number.isNaN(charge)) {
        const result = hours * charge;
        $("#totalPriceNum").val(`$${result}`);
        $("#totalPriceText").css('display', 'inline');
        $("#totalPriceNum").css('display', 'inline');
        $("#hoursError").html("");
    } else {
        $("#totalPriceText").css('display', 'none');
        $("#totalPriceNum").css('display', 'none');
        $("#totalPriceNum").val("");
        $("#hoursError").html(`Invalid number of hours or hourly charge; please only enter positive numbers`);
    }
}
