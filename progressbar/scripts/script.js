$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 6,
        color: "#1ABC9C",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: ""
    }).circularProgress('animate', 100, 5000);
});
