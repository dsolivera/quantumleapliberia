var greetingLine1 = "Quantum Leap Liberia offers comprehensive IT services to meet all your technology needs.;";
var greetingLine2 = "Our services include web hosting, managed security, VPN, IoT solutions, data backup and disaster recovery, managed WiFi, consulting, professional services, professional installation of internet equipment, and web development/IT support.;";
var greetingLine3 = " Discover the future of IT with Quantum Leap Liberia.;";


$(document).ready(function() {
    $(document).foundation();
    new FastClick(document.body);

    $(".scroll-prompter").hide();

    $(".scroll-prompter a").click(function() {
        $(this).fadeOut(200);
        $.scrollTo(".skill-logos", {duration: 400});
        $(window).scroll(function() {
            if ($(this).scrollTop() == 0)
                $(".scroll-prompter a").fadeIn(400);
        });
    });

    $(".intro-greeting").hide().slideDown('slow', function() {
        $(".intro-text-1").typed({
            strings: ["^1500" + greetingLine1 + "^1800"],
            typeSpeed: 0,
            cursorChar: " |",
            callback: function() {
                $(".typed-cursor").fadeOut("fast");
                $(".intro-text-2").typed({
                    strings: [greetingLine2 + "^1800<br>"],
                    typeSpeed: 0,
                    cursorChar: " |",
                    callback: function() {
                        $(".typed-cursor").fadeOut("fast");
                        $(".intro-text-3").typed({
                            strings: [greetingLine3],
                            typeSpeed: 0,
                            cursorChar: " |",
                            callback: function() {
                                $(".scroll-prompter").fadeIn("slow");
                            }
                        });
                    }
                });
            }
        });
    });

    $(".site-intro").click(function(e) {
        // Hides all three lines and breaks in one go
        $(".intro-text-1").parent().hide();

        $(".intro-text-1-skipped").html(greetingLine1);
        $(".intro-text-2-skipped").html(greetingLine2);
        $(".intro-text-3-skipped").html(greetingLine3);

        $(".scroll-prompter").fadeIn("slow");
        $(".typed-cursor").hide();
    });
});
