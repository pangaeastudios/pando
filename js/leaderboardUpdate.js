$(document).ready(function () {

    var sortBy = 0;
    var num = 1;

    $('#refreshBtn').hover(function () {
        $(this).attr("src", "img/refreshBtn_hover.png");
    }, function () {
        $(this).attr("src", "img/refreshBtn.png");
    });

    $('#refreshBtn').on('click', function (e) {
        var randomNum = Math.floor(Math.random() * 3) + 1;

        if (sortBy == 0) {
            switch (randomNum) {
                case 1:
                    num = 1;
                    document.getElementById("leaderboard1").src = "img/leaderboard_coins1.png";
                    break;
                case 2:
                    num = 2;
                    document.getElementById("leaderboard1").src = "img/leaderboard_coins2.png";
                    break;
                case 3:
                    num = 3;
                    document.getElementById("leaderboard1").src = "img/leaderboard_coins3.png";
                    break;
                default:
                    num = 1;
                    document.getElementById("leaderboard1").src = "img/leaderboard_coins1.png";
                    break;
            }
        }
        else if (sortBy == 1) {
            switch (randomNum) {
                case 1:
                    num = 1;
                    document.getElementById("leaderboard1").src = "img/leaderboard_tree1.png";
                    break;
                case 2:
                    num = 2;
                    document.getElementById("leaderboard1").src = "img/leaderboard_tree2.png";
                    break;
                case 3:
                    num = 3;
                    document.getElementById("leaderboard1").src = "img/leaderboard_tree3.png";
                    break;
                default:
                    num = 1;
                    document.getElementById("leaderboard1").src = "img/leaderboard_tree1.png";
                    break;
            }
        }
    });

    $('#sortByEarthBtn').hover(function () {
        $(this).attr("src", "img/sortCoinBtn_hover.png");
    }, function () {
        $(this).attr("src", "img/sortCoinBtn.png");
    });

    $('#sortByEarthBtn').on('click', function (e) {
        sortBy = 0;

        switch (num) {
            case 1:
                document.getElementById("leaderboard1").src = "img/leaderboard_coins1.png";
                break;
            case 2:
                document.getElementById("leaderboard1").src = "img/leaderboard_coins2.png";
                break;
            case 3:
                document.getElementById("leaderboard1").src = "img/leaderboard_coins3.png";
                break;
            default:
                document.getElementById("leaderboard1").src = "img/leaderboard_coins1.png";
                break;
        }
    });

    $('#sortByTreesBtn').hover(function () {
        $(this).attr("src", "img/sortTreesBtn_hover.png");
    }, function () {
        $(this).attr("src", "img/sortTreesBtn.png");
    });

    $('#sortByTreesBtn').on('click', function (e) {
        sortBy = 1;

        switch (num) {
            case 1:
                document.getElementById("leaderboard1").src = "img/leaderboard_tree1.png";
                break;
            case 2:
                document.getElementById("leaderboard1").src = "img/leaderboard_tree2.png";
                break;
            case 3:
                document.getElementById("leaderboard1").src = "img/leaderboard_tree3.png";
                break;
            default:
                document.getElementById("leaderboard1").src = "img/leaderboard_tree1.png";
                break;
        }
    });
});