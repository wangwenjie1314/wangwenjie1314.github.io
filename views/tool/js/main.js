$(document).ready(function() {
    $("#viewCssCode ul li:nth-child(even)").addClass("striped");
});
$(document).ready(function() {
    selectCss = $("#selectCss");
    loadContainet = $("#formDataLoad");
    viewCss = $("#viewCssCode");
    PreviewArea = $("#previewArea");
    browserComptability = $(".browserComptability");
    AllShow = $(".browserComptabilityData li");
    browserMozilla = $(".mozilla-firefox");
    browserblackberry = $(".blackberry");
    browseriPhone = $(".iPhone");
    browserIe = $(".ie");
    browserSafari = $(".safari");
    browserOpera = $(".opera");
    browserChrome = $(".google-chrome");
    allsupport = $('.allsupport');
    loadUrl = "loadContainet.html";
    function bdrColor() {
        $('#TextShadowColor div').css('backgroundColor', "#000000");
        $('#TextShadowColor').ColorPicker({
            color: "#000000",
            onShow: function(colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function(colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function(hsb, hex, rgb) {
                $('#TextShadowColor div').css('backgroundColor', '#' + hex);
                previewAreaBox.css(cssProparty, "#" + hex);
                cssTextview.text("#" + hex);
                ColorHex = hex;
            }
        });
    };
    var fnBorder = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        loadContainet.load(loadUrl + " #CssBorderRadius",
        function() {
            browserComptability.text("Border-Radius");
            borderStyle = $("#borderStyle");
            AllShow.removeClass("inactive");
            browserMozilla.text("3.5+");
            browserIe.text("9+");
            browserSafari.text("3.0+");
            browserChrome.text("4.1+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 1.0+");
            viewCss.append("<ul><li>border:<span class='boderstyle'>dashed</span> <span class='BorderWidth'> 5px</span> <span class='BorderColor'>#000000</span>;</li><li>-moz-border-radius: <span class='mozBdrRadius'>5px</span>;</li><li>-webkit-border-radius: <span class='webBdrRadius'>5px</span>;</li><li>border-radius: <span class='BdrRadius'>5px</span>;</li></ul>");
            PreviewArea.append("<div class='previewAreaBox'>Border Radius </div>");
            previewAreaBox = $(".previewAreaBox");
            previewAreaBox.css({
                "border-style": "dashed",
                "border-width": "5px",
                "-webkit-border-radius": "5px",
                "-moz-border-radius": "5px",
                "border-radius": "5px",
                "border-color": "#000000"
            });
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            borderStyle.change(function() {
                var a = $("#borderStyle").val();
                previewAreaBox.css({
                    "border-style": a
                });
                $(".boderstyle").text(a);
            });
            $("#BorderWidth").slider({
                value: 5,
                min: 0,
                max: 15,
                step: 1,
                slide: function(event, ui) {
                    $("#amount").text('Border Width:' + ui.value + 'px');
                    previewAreaBox.css({
                        "border-width": ui.value + "px"
                    });
                    $(".BorderWidth").text(ui.value + "px");
                }
            });
            cssProparty = 'border-color';
            cssTextview = $(".BorderColor");
            bdrColor();
            $("#BorderRedius").slider({
                value: 5,
                min: 0,
                max: 75,
                step: 1,
                slide: function(event, ui) {
                    $("#Radiusval").text('Border Radius:' + ui.value + 'px');
                    previewAreaBox.css({
                        "-webkit-border-radius": ui.value + 'px',
                        "-moz-border-radius": ui.value + 'px',
                        "border-radius": ui.value + 'px'
                    });
                    $(".mozBdrRadius").text(ui.value + "px");
                    $(".webBdrRadius").text(ui.value + "px");
                    $(".BdrRadius").text(ui.value + "px");
                }
            });
        });
    };
    var fnBorderRadius = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        loadContainet.load(loadUrl + " #CssRadius",
        function() {
            browserComptability.text("Border-Radius");
            borderStyle = $("#borderStyle");
            AllShow.removeClass("inactive");
            browserMozilla.text("3.5+");
            browserIe.text("9+");
            browserSafari.text("3.0+");
            browserChrome.text("4.0+");
            browserOpera.text("10.5+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 1.0+");
            viewCss.append("<ul><li>border:<span class='boderstyle'>dashed</span> <span class='BorderWidth'> 5px</span> <span class='BorderColor'>#000000</span>;</li><li>-moz-border-radius-topleft: <span class='radiusLeft'>5px</span>;</li><li> -moz-border-radius-topright:<span class='radiusRight'>5px</span>; </li><li>-moz-border-radius-bottomleft:<span class='radiusBleft'>5px</span>;</li><li> -moz-border-radius-bottomright:<span class='radiusBright'>5px</span>; </li><li>-webkit-border-top-left-radius:<span class='radiusLeft'>5px</span>;</li><li> -webkit-border-top-right-radius:<span class='radiusRight'>5px</span>; </li><li>-webkit-border-bottom-left-radius:<span class='radiusBleft'>5px</span>;</li><li>-webkit-border-bottom-right-radius:<span class='radiusBright'>5px</span>;</li><li>border-top-left-radius:<span class='radiusLeft'>5px</span>;</li><li> border-top-right-radius:<span class='radiusRight'>5px</span>; </li><li>border-bottom-left-radius:<span class='radiusBleft'>5px</span>;</li><li>border-bottom-right-radius:<span class='radiusBright'>5px</span>;</li></ul>");
            PreviewArea.append("<div class='previewAreaBox'>Border Radius </div>");
            previewAreaBox = $(".previewAreaBox");
            previewAreaBox.css({
                "border-style": "dashed",
                "border-width": "5px",
                "-webkit-border-radius": "5px",
                "-moz-border-radius": "5px",
                "border-radius": "5px",
                "border-color": "#000000"
            });
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            borderStyle.change(function() {
                var a = $("#borderStyle").val();
                previewAreaBox.css({
                    "border-style": a
                });
                $(".boderstyle").text(a);
            });
            $("#BorderWidth").slider({
                value: 5,
                min: 0,
                max: 15,
                step: 1,
                slide: function(event, ui) {
                    previewAreaBox.css({
                        "border-width": ui.value + "px"
                    });
                    $(".BorderWidth").text(ui.value + "px");
                }
            });
            cssProparty = 'border-color';
            cssTextview = $(".BorderColor");
            bdrColor();
            $("#BorderRediusTleft").slider({
                value: 5,
                min: 0,
                max: 75,
                step: 1,
                slide: function(event, ui) {
                    previewAreaBox.css({
                        "-moz-border-radius-topleft": ui.value + 'px',
                        "-webkit-border-top-left-radius": ui.value + 'px',
                        "border-top-left-radius": ui.value + 'px'
                    });
                    $(".radiusLeft").text(ui.value + "px");
                }
            });
            $("#BorderRediusTright").slider({
                value: 5,
                min: 0,
                max: 75,
                step: 1,
                slide: function(event, ui) {
                    previewAreaBox.css({
                        "-moz-border-radius-topright": ui.value + 'px',
                        "-webkit-border-top-right-radius": ui.value + 'px',
                        "border-top-right-radius": ui.value + 'px'
                    });
                    $(".radiusRight").text(ui.value + "px");
                }
            });
            $("#BorderRediusBleft").slider({
                value: 5,
                min: 0,
                max: 75,
                step: 1,
                slide: function(event, ui) {
                    previewAreaBox.css({
                        "-moz-border-radius-bottomleft": ui.value + 'px',
                        "-webkit-border-bottom-left-radius": ui.value + 'px',
                        "border-bottom-left-radius": ui.value + 'px'
                    });
                    $(".radiusBleft").text(ui.value + "px");
                }
            });
            $("#BorderRediusBright").slider({
                value: 5,
                min: 0,
                max: 75,
                step: 1,
                slide: function(event, ui) {
                    previewAreaBox.css({
                        "-moz-border-radius-bottomright": ui.value + 'px',
                        "-webkit-border-bottom-right-radius": ui.value + 'px',
                        "border-bottom-right-radius": ui.value + 'px'
                    });
                    $(".radiusBright").text(ui.value + "px");
                }
            });
        });
    };
    var fnBackground = function() {
        viewCss.empty();
        PreviewArea.empty();
        loadContainet.load(loadUrl + " #CssBackground",
        function() {
            viewCss.append("<ul><li>background:<span class='background-color'>#000000</span> <span class='background-image'>url(http://www.css3maker.com/reference/font/image.png)</span> <span class='background-repeat'>no-repeat</span> <span class='background-position'> left top</span>;</li></ul>");
            editThis = $(".editThis");
            selectOne = $("#selectOne");
            PreviewArea.append("<div class='previewAreaBox'> Css Background </div>");
            previewAreaBox = $(".previewAreaBox");
            previewAreaBox.css({
                "background-color": "#FF8C3C",
                "background-image": "url(http://www.css3maker.com/reference/font/image.png)",
                "background-position": "left top",
                "background-repeat": "no-repeat"
            });
            cssProparty = 'background-color';
            cssTextview = $(".background-color");
            bdrColor();
            editThis.change(function() {
                var a = selectOne.val();
                previewAreaBox.css({
                    "background-repeat": a
                });
                $(".background-repeat").text(a);
            });
            $("#Position").change(function() {
                var a = $(this).val();
                previewAreaBox.css({
                    "background-position": a
                });
                $(".background-position").text(a);
            });
            $("#Image").change(function() {
                var a = "url(http://www.css3maker.com/reference/font/" + $(this).val() + ".png)";
                previewAreaBox.css({
                    "background-image": a
                });
                $(".background-image").text(a);
            });
            editThis.keyup(function() {
                var a = input1.val() + "px";
                var c = "#" + input3.val();
                var b = input2.val() + "px";
                previewAreaBox.css({
                    "border-width": a,
                    "border-color": c,
                    "-webkit-border-radius": b,
                    "-moz-border-radius": b,
                    "border-radius": b
                });
                $(".input1").text(a);
                $(".input3").text(c);
                $(".input2").text(b);
            });
        });
    };
    var fnBoxShadow = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        browserComptability.text("Box Shadow");
        loadContainet.load(loadUrl + " #BoxShadow",
        function() {
            AllShow.removeClass("inactive");
            browserMozilla.text("3.5+");
            browserIe.text("9+");
            browserSafari.text("3.0+");
            browserChrome.text("4.0+");
            browserOpera.text("10.5+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 2.0+");
            PreviewArea.append("<div class='previewAreaBox'>Box Shadow</div>");
            previewAreaBox = $(".previewAreaBox");
            previewAreaBox.css({
                "-moz-box-shadow": "10px 10px 5px #000000",
                "-webkit-box-shadow": "10px 10px 5px #000000",
                "box-shadow": "10px 10px 5px #000000"
            });
            viewCss.append("<ul><li>-moz-box-shadow:<span class='box-shadow1'>10px</span> <span class='box-shadow2'> 10px</span> <span class='box-shadow3'>5px</span> <span class='box-shadow4'>#000000</span>;</li><li>-webkit-box-shadow:<span class='box-shadow1'>10px</span> <span class='box-shadow2'> 10px</span> <span class='box-shadow3'>5px</span> <span class='box-shadow4'>#000000</span>;</li><li>box-shadow:<span class='box-shadow1'>10px</span> <span class='box-shadow2'> 10px</span> <span class='box-shadow3'>5px</span> <span class='box-shadow4'>#000000</span>;</li></ul>");
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            var cssColor = new Array();
            cssColor["valoy"] = "#000000";
            $('#TextShadowColor div').css('backgroundColor', cssColor["valoy"]);
            $('#TextShadowColor').ColorPicker({
                color: cssColor["valoy"],
                onShow: function(colpkr) {
                    $(colpkr).fadeIn(500);
                    return false;
                },
                onHide: function(colpkr) {
                    $(colpkr).fadeOut(500);
                    return false;
                },
                onChange: function(hsb, hex, rgb) {
                    $('#TextShadowColor div').css('backgroundColor', '#' + hex);
                    cssColor["valoy"] = "#" + hex;
                    var inset = $("#boxShadowInset").val() + " ";
                    var a = $("#HorizontalLength").slider("value") + "px ";
                    var b = $("#VerticalLength").slider("value") + "px ";
                    var c = $("#BlurRadius").slider("value") + "px ";
                    var d = cssColor["valoy"];
                    var e = inset + a + b + c + d;
                    previewAreaBox.css({
                        "-moz-box-shadow": e,
                        "-webkit-box-shadow": e,
                        "box-shadow": e
                    });
                    $(".box-shadow1").text(inset + a);
                    $(".box-shadow2").text(b);
                    $(".box-shadow3").text(c);
                    $(".box-shadow4").text(d);
                }
            });
            $("#boxShadowInset").change(function() {
                var inset = $(this).val() + " ";
                var a = $("#HorizontalLength").slider("value") + "px ";
                var b = $("#VerticalLength").slider("value") + "px ";
                var c = $("#BlurRadius").slider("value") + "px ";
                var d = cssColor["valoy"];
                var e = inset + a + b + c + d;
                previewAreaBox.css({
                    "-moz-box-shadow": e,
                    "-webkit-box-shadow": e,
                    "box-shadow": e
                });
                $(".box-shadow1").text(inset + a);
                $(".box-shadow2").text(b);
                $(".box-shadow3").text(c);
                $(".box-shadow4").text(d);
            });
            $("#HorizontalLength").slider({
                value: 10,
                min: -75,
                max: 75,
                step: 1,
                slide: function(event, ui) {
                    var inset = $("#boxShadowInset").val() + " ";
                    var a = ui.value + "px ";
                    var b = $("#VerticalLength").slider("value") + "px ";
                    var c = $("#BlurRadius").slider("value") + "px ";
                    var d = cssColor["valoy"];
                    var e = inset + a + b + c + d;
                    previewAreaBox.css({
                        "-moz-box-shadow": e,
                        "-webkit-box-shadow": e,
                        "box-shadow": e
                    });
                    $(".box-shadow1").text(inset + a);
                    $(".box-shadow2").text(b);
                    $(".box-shadow3").text(c);
                    $(".box-shadow4").text(d);
                }
            });
            $("#VerticalLength").slider({
                value: 10,
                min: -75,
                max: 75,
                step: 1,
                slide: function(event, ui) {
                    var inset = $("#boxShadowInset").val() + " ";
                    var a = $("#HorizontalLength").slider("value") + "px ";
                    var b = ui.value + "px ";
                    var c = $("#BlurRadius").slider("value") + "px ";
                    var d = cssColor["valoy"];
                    var e = inset + a + b + c + d;
                    previewAreaBox.css({
                        "-moz-box-shadow": e,
                        "-webkit-box-shadow": e,
                        "box-shadow": e
                    });
                    $(".box-shadow1").text(inset + a);
                    $(".box-shadow2").text(b);
                    $(".box-shadow3").text(c);
                    $(".box-shadow4").text(d);
                }
            });
            $("#BlurRadius").slider({
                value: 5,
                min: 0,
                max: 75,
                step: 1,
                slide: function(event, ui) {
                    var inset = $("#boxShadowInset").val() + " ";
                    var a = $("#HorizontalLength").slider("value") + "px ";
                    var b = $("#VerticalLength").slider("value") + "px ";
                    var c = ui.value + "px ";
                    var d = cssColor["valoy"];
                    var e = inset + a + b + c + d;
                    previewAreaBox.css({
                        "-moz-box-shadow": e,
                        "-webkit-box-shadow": e,
                        "box-shadow": e
                    });
                    $(".box-shadow1").text(inset + a);
                    $(".box-shadow2").text(b);
                    $(".box-shadow3").text(c);
                    $(".box-shadow4").text(d);
                }
            });
        });
    };
    var fnTextShadow = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        browserComptability.text("Text Shadow");
        loadContainet.load(loadUrl + " #textShadow",
        function() {
            viewCss.append("<ul><li>text-shadow:<span class='text-shadow1'>5px</span> <span class='text-shadow2'> 5px</span> <span class='text-shadow3'>5px</span> <span class='text-shadow4'>#000000</span>;</li></ul>");
            AllShow.removeClass("inactive");
            browserMozilla.text("3.5+");
            browserIe.addClass("inactive");
            browserSafari.text("3.0+");
            browserChrome.text("4.0+");
            browserOpera.text("9.5+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 1.0+");
            PreviewArea.append("<div class='previewAreaBox'> text-shadow:  Preview Area</div>");
            previewAreaBox = $(".previewAreaBox");
            previewAreaBox.css({
                "text-shadow": "5px 5px 5px #000000"
            });
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            var cssColor = new Array();
            cssColor["valoy"] = "#000000";
            $('#TextShadowColor div').css('backgroundColor', cssColor["valoy"]);
            $('#TextShadowColor').ColorPicker({
                color: cssColor["valoy"],
                onShow: function(colpkr) {
                    $(colpkr).fadeIn(500);
                    return false;
                },
                onHide: function(colpkr) {
                    $(colpkr).fadeOut(500);
                    return false;
                },
                onChange: function(hsb, hex, rgb) {
                    $('#TextShadowColor div').css('backgroundColor', '#' + hex);
                    cssColor["valoy"] = "#" + hex;
                    var a = $("#HorizontalLength").slider("value") + "px ";
                    var b = $("#VerticalLength").slider("value") + "px ";
                    var c = $("#BlurRadius").slider("value") + "px ";
                    var e = cssColor["valoy"];
                    var d = a + b + c + e;
                    previewAreaBox.css({
                        "text-shadow": d
                    });
                    $(".text-shadow1").text(a);
                    $(".text-shadow2").text(b);
                    $(".text-shadow3").text(c);
                    $(".text-shadow4").text(e);
                }
            });
            $("#HorizontalLength").slider({
                value: 5,
                min: -75,
                max: 75,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value + "px ";
                    var b = $("#VerticalLength").slider("value") + "px ";
                    var c = $("#BlurRadius").slider("value") + "px ";
                    var e = cssColor["valoy"];
                    var d = a + b + c + e;
                    previewAreaBox.css({
                        "text-shadow": d
                    }); 
					$(".text-shadow1").text(a);
                    $(".text-shadow2").text(b);
                    $(".text-shadow3").text(c);
                    $(".text-shadow4").text(e);
                }
            });
            $("#VerticalLength").slider({
                value: 5,
                min: -75,
                max: 50,
                step: 1,
                slide: function(event, ui) {
                    var a = $("#HorizontalLength").slider("value") + "px ";
                    var b = ui.value + "px ";
                    var c = $("#BlurRadius").slider("value") + "px ";
                    var e = cssColor["valoy"];
                    var d = a + b + c + e;
                    previewAreaBox.css({
                        "text-shadow": d
                    }); 
					$(".text-shadow1").text(a);
                    $(".text-shadow2").text(b);
                    $(".text-shadow3").text(c);
                    $(".text-shadow4").text(e);
                }
            });
            $("#BlurRadius").slider({
                value: 5,
                min: 0,
                max: 35,
                step: 1,
                slide: function(event, ui) {
                    var a = $("#HorizontalLength").slider("value") + "px ";
                    var b = $("#VerticalLength").slider("value") + "px ";
                    var c = ui.value + "px ";
                    var e = cssColor["valoy"];
                    var d = a + b + c + e;
                    previewAreaBox.css({
                        "text-shadow": d
                    }); 
					$(".text-shadow1").text(a);
                    $(".text-shadow2").text(b);
                    $(".text-shadow3").text(c);
                    $(".text-shadow4").text(e);
                }
            });
            $(".editThis").keyup(function() {
                var a = $("#HorizontalLength").slider("value") + "px ";
                var b = $("#VerticalLength").slider("value") + "px ";
                var c = $("#BlurRadius").slider("value") + "px ";
                var e = "#" + $("#textcolor").val();
                var d = a + b + c + e;
                previewAreaBox.css({
                    "text-shadow": d
                });
                $(".text-shadow1").text(a);
                $(".text-shadow2").text(b);
                $(".text-shadow3").text(c);
                $(".text-shadow4").text(e);
            });
        });
    };
    var fnrgba = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        browserComptability.text("RGBA");
        loadContainet.load(loadUrl + "  #rgba",
        function() {
            viewCss.append("<ul><li>background-color: rgba(<span class='rgba1'>215,</span> <span class='rgba2'> 40,</span> <span class='rgba3'>40,</span> <span class='rgba4'>0.9</span>);</li><li>background: rgba(<span class='rgba1'>215,</span> <span class='rgba2'> 40,</span> <span class='rgba3'>40,</span> <span class='rgba4'>0.9</span>);</li><li>color: rgba(<span class='rgba1'>215,</span> <span class='rgba2'> 40,</span> <span class='rgba3'>40,</span> <span class='rgba4'>0.9</span>);</li></ul>");
            AllShow.removeClass("inactive");
            browserMozilla.text("3.0+");
            browserIe.text("9+");
            browserSafari.text("3.1+");
            browserChrome.text("4.0+");
            browserOpera.text("10.0+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 1.0+");
            PreviewArea.append("<div class='previewAreaBox'> RGBA </div>");
            previewAreaBox = $(".previewAreaBox");
            previewAreaBox.css({
                "background": "rgba(215, 40, 40, 0.9)"
            });
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            $("#colorR").slider({
                value: 215,
                min: 0,
                max: 255,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value + ", ";
                    var b = $("#colorG").slider("value") + ", ";
                    var c = $("#colorB").slider("value") + ", ";
                    var e = $("#Opacity").slider("value");
                    var d = a + b + c + e;
                    previewAreaBox.css("background", "rgba(" + d + ")");
                    $(".rgba1").text(a);
                    $(".rgba2").text(b);
                    $(".rgba3").text(c);
                    $(".rgba4").text(e);
                }
            });
            $("#colorG").slider({
                value: 44,
                min: 0,
                max: 255,
                step: 1,
                slide: function(event, ui) {
                    var a = $("#colorR").slider("value") + ", ";
                    var b = ui.value + ", ";
                    var c = $("#colorB").slider("value") + ", ";
                    var e = $("#Opacity").slider("value");
                    var d = a + b + c + e;
                    previewAreaBox.css("background", "rgba(" + d + ")");
                    $(".rgba1").text(a);
                    $(".rgba2").text(b);
                    $(".rgba3").text(c);
                    $(".rgba4").text(e);
                }
            });
            $("#colorB").slider({
                value: 44,
                min: 0,
                max: 255,
                step: 1,
                slide: function(event, ui) {
                    var a = $("#colorR").slider("value") + ", ";
                    var b = $("#colorG").slider("value") + ", ";
                    var c = ui.value + ", ";
                    var e = $("#Opacity").slider("value");
                    var d = a + b + c + e;
                    previewAreaBox.css("background-color", "rgba(" + d + ")");
                    $(".rgba1").text(a);
                    $(".rgba2").text(b);
                    $(".rgba3").text(c);
                    $(".rgba4").text(e);
                }
            });
            $("#Opacity").slider({
                value: 0.9,
                min: 0.0,
                max: 1,
                step: 0.1,
                slide: function(event, ui) {
                    var a = $("#colorR").slider("value") + ", ";
                    var b = $("#colorG").slider("value") + ", ";
                    var c = $("#colorB").slider("value") + ", ";
                    var e = ui.value;
                    var d = a + b + c + e;
                    previewAreaBox.css("background", "rgba(" + d + ")");
                    $(".rgba1").text(a);
                    $(".rgba2").text(b);
                    $(".rgba3").text(c);
                    $(".rgba4").text(e);
                }
            });
        });
    };
    var fnBorderimage = function() {
        viewCss.empty();
        allsupport.empty();
        PreviewArea.empty();
        browserComptability.text("Border Image");
        loadContainet.load(loadUrl + " #Borderimage",
        function() {
            viewCss.append("<ul><li>background-image: rgba(<span class='rgba1'>200,</span> <span class='rgba2'> 100,</span> <span class='rgba3'>100,</span> <span class='rgba4'>0.1</span>);</li><li>background: rgba(<span class='rgba1'>200,</span> <span class='rgba2'> 100,</span> <span class='rgba3'>100,</span> <span class='rgba4'>0.1</span>);</li><li>color: rgba(<span class='rgba1'>200,</span> <span class='rgba2'> 100,</span> <span class='rgba3'>100,</span> <span class='rgba4'>0.1</span>);</li></ul>");
            AllShow.removeClass("inactive");
            browserMozilla.text("3.0+");
            browserIe.addClass("inactive");
            browserSafari.text("3.1+");
            browserChrome.text("4.0+");
            browserOpera.text("10.0+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 2.0+");
            PreviewArea.append("<div class='previewAreaBox'> Border Image </div>");
            previewAreaBox = $(".previewAreaBox");
            previewAreaBox.css({
                "background-color": "rgba(200, 100, 100, 0.1)"
            });
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            $(".editThis").keyup(function() {
                var a = $("#rgbaR").val() + ", ";
                var d = a + a + a + a;
                previewAreaBox.css("background-color", "rgba(" + d + ")");
                $(".rgba1").text(a);
            });
        });
    };
    var fntextRotation = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        browserComptability.text("Text Rotation");
        loadContainet.load(loadUrl + " #textRotation",
        function() {
            viewCss.append("<ul><li>-webkit-transform:  rotate(<span class='textRotation1'>90deg</span>);</li><li>-moz-transform:  rotate(<span class='textRotation1'>90deg</span>);</li><li>-o-transform:  rotate(<span class='textRotation1'>90deg</span>);</li><li>writing-mode: <span class='textRotationForIe'>tb-rl</span>;</li></ul>");
            AllShow.removeClass("inactive");
            browserMozilla.text("3.5+");
            browserIe.text("IE7+");
            browserSafari.text("3.1+");
            browserChrome.text("4.0+");
            browserOpera.text("10.5+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 2.0+");
            PreviewArea.append("<div class='previewAreaBox'> <span class='previewAreaBoxRotet'>CSS3.0<br /> Rotation</span></div>");
            previewAreaBox = $(".previewAreaBoxRotet");
            previewAreaBox.css({
                "writing-mode": "tb-rl",
                "-webkit-transform": "rotate(90deg)",
                "-moz-transform": "rotate(90deg)",
                "-o-transform": "rotate(90deg)"
            });
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            $("#Rotate").slider({
                value: 90,
                min: 0,

                max: 360,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value + "deg";
                    var c = $("#ForieRotate").val();
                    var b = "rotate(" + a + ")";
                    previewAreaBox.css({
                        "writing-mode": c,
                        "-webkit-transform": b,
                        "-moz-transform": b,
                        "-o-transform": b
                    });
                    $(".textRotation1").text(a);
                    $(".textRotationForIe").text(c);
                }
            });
            $(".editThis").change(function() {
                var a = $("#Rotate").slider("value") + "deg";
                var c = $("#ForieRotate").val();
                var b = "rotate(" + a + ")";
                previewAreaBox.css({
                    "writing-mode": c,
                    "-webkit-transform": b,
                    "-moz-transform": b,
                    "-o-transform": b
                });
                $(".textRotation1").text(a);
                $(".textRotationForIe").text(c);
            });
        });
    };
    var fncssTransform = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        browserComptability.text("CSS Transform");
        loadContainet.load(loadUrl + " #CSStransform",
        function() {
            viewCss.append("<ul><li>transform:  <span class='transformCord'>rotate(90deg) scale(1) skew(1deg) translate(10px)</span>;</li><li>-webkit-transform:  <span class='transformCord'>rotate(90deg) scale(1) skew(1deg) translate(10px)</span>;</li><li>-moz-transform: <span class='transformCord'>rotate(90deg) scale(1) skew(1deg) translate(10px)</span>;</li><li>-o-transform:  <span class='transformCord'>rotate(90deg) scale(1) skew(1deg) translate(10px)</span>;</li><li>-ms-transform:  <span class='transformCord'>rotate(90deg) scale(1) skew(1deg) translate(10px)</span>;</li></ul>");
            AllShow.removeClass("inactive");
            browserMozilla.text("3.5+");
            browserIe.text("9+");
            browserSafari.text("3.1+");
            browserChrome.text("4.0+");
            browserOpera.text("10.5+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 2.0+");
            PreviewArea.append("<div class='previewAreaBox'> CSS3.0 Transform</div>");
            previewAreaBox = $(".previewAreaBoxRotet");
            PreviewArea.css({
                "transform": "rotate(4deg)",
                "-webkit-transform": "rotate(4deg)",
                "-moz-transform": "rotate(4deg)",
                "-o-transform": "rotate(4deg)",
                "-ms-transform": "rotate(4deg)"
            });
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            $(".transformSelect").live('click',
            function() {
                $(".transformSelect").removeClass('transformActive');
                $(this).addClass('transformActive');
                var thisVal = $(this).val();
                if (thisVal == 'Rotate') {
                    $('.showall').hide();
                    $('.rotate').show();
                } else if (thisVal == 'Scale') {
                    $('.showall').hide();
                    $('.scale').show().find('label').text('Scale X');
                    $('.scaleY').show();
                } else if (thisVal == 'Skew') {
                    $('.showall').hide();
                    $('.skew').show().find('label').text('Skew X');
                    $('.skewY').show();
                } else if (thisVal == 'Translate') {
                    $('.showall').hide();
                    $('.translate').show().find('label').text('Translate X');
                    $('.translateY').show();
                } else if (thisVal == 'All') {
                    $('.showall').show();
                    $('.scale').find('label').text('Scale');
                    $('.skew').find('label').text('Skew');
                    $('.translate').find('label').text('Translate');
                    $('.translateY').hide();
                    $('.skewY').hide();
                    $('.scaleY').hide();
                };
            });
			$("#Rotate").slider({
                value: 4,
                min: 0,
                max: 360,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + a + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'Rotate') {
                        PreviewArea.css({
                            "transform": b,
                            "-webkit-transform": b,
                            "-moz-transform": b,
                            "-o-transform": b,
                            "-ms-transform": b
                        });
                        $(".transformCord").text(b);
                    } else if (transformactive == 'All') {
                        PreviewArea.css({
                            "transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f,
                            "-ms-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
            $("#Scale").slider({
                value: 1,
                min: 0.1,
                max: 1.5,
                step: 0.001,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + a + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var g = "scale(" + a + ", " + $("#ScaleY").slider("value") + ")";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'Scale') {
                        PreviewArea.css({
                            "transform": g,
                            "-ms-transform": g,
                            "-webkit-transform": g,
                            "-moz-transform": g,
                            "-o-transform": g
                        });
                        $(".transformCord").text(g);
                    } else if (transformactive == 'All') {
                        PreviewArea.css({
                            "transform": f,
                            "-ms-transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
            $("#Skew").slider({
                value: 1,
                min: -180,
                max: 180,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + a + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var g = "skew(" + a + "deg, " + $("#SkewY").slider("value") + "deg) ";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'Skew') {
                        PreviewArea.css({
                            "transform": g,
                            "-ms-transform": g,
                            "-webkit-transform": g,
                            "-moz-transform": g,
                            "-o-transform": g
                        });
                        $(".transformCord").text(g);
                    } else if (transformactive == 'All') {
                        PreviewArea.css({
                            "transform": f,
                            "-ms-transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
            $("#Translate").slider({
                value: 0,
                min: -300,
                max: 300,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + a + "px)";
                    var g = "translate(" + a + "px, " + $("#TranslateY").slider("value") + "px)";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'Translate') {
                        PreviewArea.css({
                            "transform": g,
                            "-ms-transform": g,
                            "-webkit-transform": g,
                            "-moz-transform": g,
                            "-o-transform": g
                        });
                        $(".transformCord").text(g);
                    } else if (transformactive == 'All') {
                        PreviewArea.css({
                            "transform": g,
                            "-ms-transform": g,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
            $("#TranslateY").slider({
                value: 0,
                min: -300,
                max: 300,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + a + "px)";
                    var g = "translate(" + $("#Translate").slider("value") + "px, " + a + "px)";
                    var f = b + c + d + e;
                    PreviewArea.css({
                        "transform": g,
                        "-ms-transform": g,
                        "-webkit-transform": g,
                        "-moz-transform": g,
                        "-o-transform": g
                    });
                    $(".transformCord").text(g);
                }
            });
            $("#SkewY").slider({
                value: 1,
                min: -180,
                max: 180,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + a + "px)";
                    var g = "skew(" + $("#Skew").slider("value") + "deg, " + a + "deg) ";
                    var f = b + c + d + e;
                    PreviewArea.css({
                        "transform": g,
                        "-ms-transform": g,
                        "-webkit-transform": g,
                        "-moz-transform": g,
                        "-o-transform": g
                    });
                    $(".transformCord").text(g);
                }
            });
            $("#ScaleY").slider({
                value: 1,
                min: 0.1,
                max: 2,
                step: 0.001,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + a + "px)";
                    var g = "scale(" + $("#Scale").slider("value") + ", " + a + ")";
                    var f = b + c + d + e;
                    PreviewArea.css({
                        "transform": g,
                        "-ms-transform": g,
                        "-webkit-transform": g,
                        "-moz-transform": g,
                        "-o-transform": g
                    });
                    $(".transformCord").text(g);
                }
            });
        });
    };
    var fnFontFace = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        $(".fontfaceview").empty();
        browserComptability.text("@Font Face");
        loadContainet.load(loadUrl + " #FontFace",
        function() {
            viewCss.append("<ul><li>@font-face { font-family: '<span class='SelectFont'>BrushScriptStdMedium</span>';</li><li>src: url('<span class='fontsrc'>brushscriptstd</span>.eot');</li><li>src: local('<span class='fontlocal'>Brush Script Std</span>'), local('<span class='fontlocal2'>BrushScriptStd</span>'), url('<span class='fontsrc'>brushscriptstd</span>.woff') format('woff'), url('<span class='fontsrc'>brushscriptstd</span>.ttf') format('truetype');}</li><li>.classname{ font:<span class='fontsize'>21px</span> <span class='fontWeight'>bold</span> <span class='fontStyle'>italic</span>  <span class='SelectFont'>Arial</span>;}</li></ul>");
            AllShow.removeClass("inactive");
            browserMozilla.text("3.5+");
            browserIe.text("IE6+");
            browserSafari.text("3.1+");
            browserChrome.text("4.0+");
            browserOpera.text("10.0+");
            browserblackberry.addClass("inactive"); 
			browseriPhone.text("iOS 1.0+");
            PreviewArea.append("<div class='previewAreaBox'> @Font Face </div>");
            $(".fontfaceview").append("<style>@font-face {font-family: 'BrushScriptStdMedium'; src: url('font/brushscriptstd.eot'); src: local('Brush Script Std'), local('BrushScriptStd'), url('font/brushscriptstd.woff') format('woff'), url('font/brushscriptstd.ttf') format('truetype');} .previewAreaBox{font-family: 'BrushScriptStdMedium', sans-serif;}</style>");
            previewAreaBox = $(".previewAreaBox");
            previewAreaBox.css({
                "font-family": "BrushScriptStdMedium",
                "font-size": "21px",
                "font-style": "normal",
                "font-weight": "bold"
            });
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            $("#FontSize").slider({
                value: 21,
                min: 12,
                max: 50,
                step: 1,
                slide: function(event, ui) {
                    var a = $("#SelectFont").val();
                    var b = ui.value + "px ";
                    var c = $("#fontStyle").val();
                    var d = $("#fontWeight").val();
                    previewAreaBox.css({
                        "font-family": a,
                        "font-size": b,
                        "font-style": c,
                        "font-weight": d
                    });
                    $(".SelectFont").text(a);
                    $(".fontsize").text(b);
                    $(".fontStyle").text(c);
                    $(".fontWeight").text(d);
                }
            });
            $(".editThis").keyup(function() {
                var a = $("#SelectFont").val();
                var b = $("#FontSize").slider("value") + "px ";
                var c = $("#fontStyle").val();
                var d = $("#fontWeight").val();
                previewAreaBox.css({
                    "font-family": a,
                    "font-size": b,
                    "font-style": c,
                    "font-weight": d
                });
                $(".SelectFont").text(a);
                $(".fontsize").text(b);
                $(".fontStyle").text(c);
                $(".fontWeight").text(d);
            });
            $(".editThis").change(function() {
                var a = $("#SelectFont").val();
                var b = $("#FontSize").slider("value") + "px ";
                var c = $("#fontStyle").val();
                var d = $("#fontWeight").val();
                previewAreaBox.css({
                    "font-family": a,
                    "font-size": b,
                    "font-style": c,
                    "font-weight": d
                });
                $(".SelectFont").text(a);
                $(".fontsize").text(b);
                $(".fontStyle").text(c);
                $(".fontWeight").text(d);
            });
            $(".editThisfont").change(function() {
                var a = $("#SelectFont").val();
                var b = $("#FontSize").slider("value") + "px ";
                var c = $("#fontStyle").val();
                var d = $("#fontWeight").val();
                previewAreaBox.css({
                    "font-family": a,
                    "font-size": b,
                    "font-style": c,
                    "font-weight": d
                });
                $(".SelectFont").text(a);
                $(".fontsize").text(b);
                $(".fontStyle").text(c);
                $(".fontWeight").text(d);
                if (a == "BrushScriptStdMedium") {
                    $(".fontfaceview").empty();
                    $(".fontfaceview").append("<style>@font-face {font-family: 'BrushScriptStdMedium'; src: url('font/brushscriptstd.eot'); src: local('Brush Script Std'), local('BrushScriptStd'), url('font/brushscriptstd.woff') format('woff'), url('font/brushscriptstd.ttf') format('truetype');} .previewAreaBox{font-family: 'BrushScriptStdMedium', sans-serif;}</style>");
                    fontlocal = "Brush Script Std";
                    fontlocal2 = "BrushScriptStd";
                    fontsrc = "brushscriptstd";
                    $(".fontsrc").text(fontsrc);
                    $(".fontlocal").text(fontlocal);
                    $(".fontlocal2").text(fontlocal2);
                } else if (a == "GoodFootRegular") {
                    $(".fontfaceview").empty();
                    $(".fontfaceview").append("<style>@font-face {font-family: 'GoodFootRegular'; src: url('font/goodfoot.eot'); src: local('Good Foot'), local('GoodFoot'), url('font/goodfoot.woff') format('woff'), url('font/goodfoot.ttf') format('truetype');} .previewAreaBox{font-family: 'GoodFootRegular', sans-serif;}</style>");
                    fontlocal = "Good Foot";
                    fontlocal2 = "GoodFoot";
                    fontsrc = "goodfoot";
                    $(".fontsrc").text(fontsrc);
                    $(".fontlocal").text(fontlocal);
                    $(".fontlocal2").text(fontlocal2);
                } else if (a == "SouciSansRegular") {
                    $(".fontfaceview").empty();
                    $(".fontfaceview").append("<style>@font-face {font-family: 'SouciSansRegular'; src: url('font/SOUCISAN.eot'); src: local('SouciSans'), local('SouciSans'), url('font/SOUCISAN.woff') format('woff'), url('font/SOUCISAN.ttf') format('truetype');} .previewAreaBox{font-family: 'SouciSansRegular', sans-serif;}</style>");
                    fontlocal = "SouciSans";
                    fontlocal2 = "SouciSans";
                    fontsrc = "SOUCISAN";
                    $(".fontsrc").text(fontsrc);
                    $(".fontlocal").text(fontlocal);
                    $(".fontlocal2").text(fontlocal2);
                };
            });
        });
    };
    var fnOutline = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        browserComptability.text("Outline Offset");
        loadContainet.load(loadUrl + " #CssOutline",
        function() {
            viewCss.append("<ul><li>outline-style:<span class='outlinestyle'>dashed</span>;</li><li>outline-width:<span class='outlinewidth'>5px</span>;</li><li>outline-color: <span class='outlinecolor'>#000000</span>;</li> <li>outline-offset: <span class='outlineoffset'>5px</span>;</li></ul>");
            AllShow.removeClass("inactive");
            browserMozilla.text("1.5+");
            browserIe.text("9+");
            browserSafari.text("1.2+");
            browserChrome.text("4.0+");
            browserOpera.text("9.5+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 2.0+");
            PreviewArea.append("<div class='previewAreaBox'> Outline</div>");
            previewAreaBox = $(".previewAreaBox");
            previewAreaBox.css({
                "outline-style": "dashed",
                "outline-width": "5px",
                "outline-color": "#000000",
                "outline-offset": "5px"
            });
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            $("#BorderWidth").slider({
                value: 5,
                min: 0,
                max: 15,
                step: 1,
                slide: function(event, ui) {
                    previewAreaBox.css({
                        "outline-width": ui.value + "px"
                    });
                    $(".outlinewidth").text(ui.value + "px");
                }
            });
            $("#Outline-offset").slider({
                value: 5,
                min: 0,
                max: 15,
                step: 1,
                slide: function(event, ui) {
                    previewAreaBox.css({
                        "outline-offset": ui.value + "px"
                    });
                    $(".outlineoffset").text(ui.value + "px");
                }
            });
            $(".editThis").keyup(function() {
                var a = $("#BorderWidth").slider("value") + "px";
                var c = $("#OutlineStyle").val();
                var b = $("#OutlineColor").val();
                var e = $("#Outline-offset").slider("value") + "px";
                var d = "#" + b;
                previewAreaBox.css({
                    "outline-style": c,
                    "outline-width": a,
                    "outline-color": d,
                    "outline-offset": e
                });
                $(".outlinestyle").text(c);
                $(".outlinewidth").text(a);
                $(".outlinecolor").text(d);
                $(".outlineoffset").text(e);
            });
            cssProparty = 'outline-color';
            cssTextview = $(".outlinecolor");
            bdrColor();
            $(".editThis").change(function() {
                var a = $("#BorderWidth").slider("value") + "px";
                var c = $("#OutlineStyle").val();
                var b = $("#OutlineColor").val();
                var e = $("#Outline-offset").slider("value") + "px";;
                var d = "#" + b;
                previewAreaBox.css({
                    "outline-style": c
                });
                $(".outlinestyle").text(c);
                $(".outlinewidth").text(a);
                $(".outlinecolor").text(d);
            });
        });
    };
    var fnTransition = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        browserComptability.text("CSS Transition");
        loadContainet.load(loadUrl + " #Transition",
        function() {
            viewCss.append("<ul><li>.classname {</li><li>transition:<span class='Iteration'>All</span> <span class='duration'>1s</span> <span class='animation-timing'>ease</span>;</li><li>-webkit-transition:<span class='Iteration'>All</span> <span class='duration'>1s</span> <span class='animation-timing'>ease</span>;</li><li>-moz-transition:<span class='Iteration'>All</span> <span class='duration'>1s</span> <span class='animation-timing'>ease</span>;</li><li>-o-transition:<span class='Iteration'>All</span> <span class='duration'>1s</span> <span class='animation-timing'>ease</span>;</li><li>transform:  <span class='transformCord'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>;</li> <li>-webkit-transform:  <span class='transformCord'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>;</li><li>-moz-transform:  <span class='transformCord'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>;</li><li>-o-transform:  <span class='transformCord'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>;</li><li>-ms-transform:  <span class='transformCord'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>;</li><li>}</li><li>.classname:hover{</li><li>transform:  <span class='transformEnd'>rotate(0deg) scale(0.67) skew(1deg) translate(0px)</span>;</li><li>-webkit-transform:  <span class='transformEnd'>rotate(0deg) scale(0.67) skew(1deg) translate(0px)</span>;</li><li>-moz-transform:  <span class='transformEnd'>rotate(0deg) scale(0.67) skew(1deg) translate(0px)</span>;</li><li>-o-transform:  <span class='transformEnd'>rotate(0deg) scale(0.67) skew(1deg) translate(0px)</span>;</li><li>-ms-transform:  <span class='transformEnd'>rotate(0deg) scale(0.67) skew(1deg) translate(0px)</span>;</li><li>}</li></ul>");
            AllShow.removeClass("inactive");
            browserMozilla.text("4.0+");
            browserIe.addClass("inactive");
            browserSafari.text("3.1+");
            browserChrome.text("4.0+");
            browserOpera.text("10.5+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 2.0+");
            PreviewArea.append("<div class='previewAreaBox'> CSS 3.0 Transition<span class='start'>transform: rotate(4deg) scale(1) skew(1deg) translate(10px); -ms-transform: rotate(4deg) scale(1) skew(1deg) translate(10px); -webkit-transform: rotate(4deg) scale(1) skew(1deg) translate(10px); -moz-transform: rotate(4deg) scale(1) skew(1deg) translate(10px); -o-transform: rotate(4deg) scale(1) skew(1deg) translate(10px)</span><span class='end'></span></div>");
            previewAreaBox = $(".previewAreaBoxRotet");
            PreviewArea.addClass('cssAnimation');
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            $(".transformSelect").live('click',
            function() {
                $(".transformSelect").removeClass('transformActive');
                $(this).addClass('transformActive');
                var thisVal = $(this).val();
                if (thisVal == 'Start') {
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    $(".end").text("transform:" + f + "; -ms-transform:" + f + "; -webkit-transform:" + f + "; -moz-transform:" + f + "; -o-transform:" + f);
                } else if (thisVal == 'End') {
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    $(".start").text("transform:" + f + "; -ms-transform:" + f + "; -webkit-transform:" + f + "; -moz-transform:" + f + "; -o-transform:" + f);
                };
            });
            $(".viewimg").live('click',
            function() {
                var thisVal = $('.transformActive').val();
                var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                var c = "scale(" + $("#Scale").slider("value") + ") ";
                var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                var e = "translate(" + $("#Translate").slider("value") + "px)";
                var g = $("#Duration").slider("value") + "s";
                var h = $(".aniTiming").val();
                var i = "all";
                var f = b + c + d + e;
                if (thisVal == "Start") {
                    htmlend = $('.end').text();
                    htmlfStart = "transform:" + f + "; -ms-transform:" + f + ";  -webkit-transform:" + f + "; -moz-transform:" + f + "; -o-transform:" + f;
                } else if (thisVal == 'End') {
                    htmlend = "transform:" + f + "; -ms-transform:" + f + ";  -webkit-transform:" + f + "; -moz-transform:" + f + "; -o-transform:" + f;
                    htmlfStart = $('.start').text();
                };
                style = "<style>.cssAnimation{transition:" + i + " " + g + " " + h + "; -webkit-transition:" + i + " " + g + " " + h + "; -moz-transition:" + i + " " + g + " " + h + "; -o-transition:" + i + " " + g + " " + h + ";" + htmlfStart + "}.cssAnimation:hover {" + htmlend + "}</style>";
                $(".fontfaceview").empty();
                $(".fontfaceview").append(style);
                PreviewArea.addClass('cssAnimation');
                PreviewArea.removeAttr("style");
            });
            $(".aniTiming").change(function() {
                $('.animation-timing').text($(this).val());
            });
            $("#Duration").slider({
                value: 1,
                min: 0.001,
                max: 5,
                step: 0.0001,
                slide: function(event, ui) {
                    var a = ui.value + "s";
                    $(".duration").text(a);
                }
            });
            $("#Rotate").slider({
                value: 4,
                min: 0,
                max: 360,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + a + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'End') {
                        PreviewArea.css({
                            "transform": f,
                            "-ms-transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformEnd").text(f);
                    } else if (transformactive == 'Start') {
                        PreviewArea.css({
                            "transform": f,
                            "-ms-transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
            $("#Scale").slider({
                value: 1,
                min: 0.1,
                max: 1.5,
                step: 0.001,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + a + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'End') {
                        PreviewArea.css({
                            "transform": f,
                            "-ms-transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformEnd").text(f);
                    } else if (transformactive == 'Start') {
                        PreviewArea.css({
                            "transform": f,
                            "-ms-transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
            $("#Skew").slider({
                value: 1,
                min: -180,
                max: 180,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + a + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'End') {
                        PreviewArea.css({
                            "transform": f,
                            "-ms-transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformEnd").text(f);
                    } else if (transformactive == 'Start') {
                        PreviewArea.css({
                            "transform": f,
                            "-ms-transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
            $("#Translate").slider({
                value: 0,
                min: -300,
                max: 300,
                step: 1,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + a + "px)";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'End') {
                        PreviewArea.css({
                            "transform": f,
                            "-ms-transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformEnd").text(f);
                    } else if (transformactive == 'Start') {
                        PreviewArea.css({
                            "transform": f,
                            "-ms-transform": f,
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
        });
    };
    var fnGradient = function() {
        viewCss.empty();
        PreviewArea.empty();
        AllShow.removeClass("inactive");
        browserMozilla.text("3.6+");
        browserIe.addClass("inactive");
        browserSafari.text("4.0+");
        browserChrome.text("4.0+");
        browserOpera.addClass("inactive");
        browserComptability.text("CSS Gradient");
        browserblackberry.addClass("inactive");
        browseriPhone.text("iOS 1.0+");
        if ($.browser.webkit) {
            browserblackberry.removeClass("inactive");
            browserblackberry.text("BlackBerry  6+");
            browserMozilla.addClass("inactive");
            lodinforamtion = " #" + information;
            loadContainet.load(loadUrl + " " + lodinforamtion,
            function() {
                viewCss.append("<ul><li>background:<span class='css-Gradient'>#000000</span> </li></ul>");
                editThis = $(".editThis");
                selectOne = $("#selectOne");
                PreviewArea.append("<div class='previewAreaBox'> Css Gradient </div>");
                previewAreaBox = $(".previewAreaBox");
                previewAreaBox.css({
                    "background": "-webkit-gradient(linear, 100% 0, 100% 100%, from(#ccc), to(#000))"
                });
                var Type = $("#type").val();
                if (Type == 'linear') {
                    minivalue = 0;
                    maxivalue = 100;
                } else if (Type == 'radial') {
                    minivalue = -1000;
                    maxivalue = 1000;
                };
                $("#type").change(function() {
                    var thisval = $(this).val();
                    if (thisval == 'linear') {
                        information = "CssGradient";
                        fnGradient();
                    } else if (thisval == 'radial') {
                        information = "CssGradientradial";
                        fnGradient();
                    };
                });
                var CssGradientinfo = $(lodinforamtion + " div.slider_mozz");
                CssGradientinfo.each(function() {
                    var value = parseInt($(this).text());
                    var mivalue = parseInt($(this).attr("ral"));
                    $(this).empty().slider({
                        value: value,
                        min: mivalue,
                        max: maxivalue,
                        step: 1,
                        range: "min",
                        animate: true,
                        slide: function(event, ui) {
                            var hPosition = CssGradientinfo.eq("0").slider("value");
                            var getPosition = CssGradientinfo.eq("1").slider("value");
                            var startvRadial = CssGradientinfo.eq("2").slider("value");
                            var endhPosition = CssGradientinfo.eq("3").slider("value");
                            var getendvPosition = CssGradientinfo.eq("4").slider("value");
                            var endRadial = CssGradientinfo.eq("5").slider("value");
                            var Type = $("#type").val();
                            if (Type == "linear") {
                                previewAreaBox.css({
                                    "background": "-webkit-gradient(" + Type + ", " + hPosition + "% " + getPosition + "%, " + endhPosition + "% " + getendvPosition + "%, from(#" + ColorStart + "), to(#" + ColorEnd + "))"
                                });
                                $(".css-Gradient").text("-webkit-gradient(" + Type + ", " + hPosition + "% " + getPosition + "%, " + endhPosition + "% " + getendvPosition + "%, from(#" + ColorStart + "), to(#" + ColorEnd + "))");
                            };
                            if (Type == "radial") {
                                previewAreaBox.css({
                                    "background": "-webkit-gradient(radial, " + hPosition + " " + getPosition + ", " + startvRadial + ", " + endhPosition + "  " + getendvPosition + ", " + endRadial + ",  from(#" + ColorStart + "), to(#" + ColorEnd + "))"
                                });
                                $(".css-Gradient").text("-webkit-gradient(radial, " + hPosition + " " + getPosition + ", " + startvRadial + ", " + endhPosition + "  " + getendvPosition + ", " + endRadial + ",  from(#" + ColorStart + "), to(#" + ColorEnd + "))");
                            };
                        }
                    });
                });
                function hexFromRGB(r, g, b) {
                    var hex = [r.toString(16), g.toString(16), b.toString(16)];
                    $.each(hex,
                    function(nr, val) {
                        if (val.length == 1) {
                            hex[nr] = '0' + val;
                        }
                    });
                    return hex.join('').toUpperCase();
                }
                function refreshSwatch() {
                    var red = $("#red").slider("value"),
                    green = $("#green").slider("value"),
                    blue = $("#blue").slider("value"),
                    hex = hexFromRGB(red, green, blue);
                    ColorStart = hex;
                    cred = $(".red").slider("value");
                    cgreen = $(".green").slider("value");
                    cblue = $(".blue").slider("value");
                    ColorEnd = hexFromRGB(cred, cgreen, cblue);
                    startvRadial = $("#startvRadial").slider("value");
                    endRadial = $("#endRadial").slider("value");
                    var getendvPosition = $("#endvPosition").slider("value");
                    hPosition = $("#hPosition").slider("value");
                    getPosition = $("#vPosition").slider("value");
                    endhPosition = $("#endhPosition").slider("value");
                    var Type = $("#type").val();
                    if (Type == "linear") {
                        previewAreaBox.css({
                            "background": "-webkit-gradient(" + Type + ", " + hPosition + "% " + getPosition + "%, " + endhPosition + "% " + getendvPosition + "%, from(#" + ColorStart + "), to(#" + ColorEnd + "))"
                        });
                        $(".css-Gradient").text("-webkit-gradient(" + Type + ", " + hPosition + "% " + getPosition + "%, " + endhPosition + "% " + getendvPosition + "%, from(#" + ColorStart + "), to(#" + ColorEnd + "))");
                    }
                    if (Type == "radial") {
                        previewAreaBox.css({
                            "background": "-webkit-gradient(radial, " + hPosition + " " + getPosition + ", " + startvRadial + ", " + endhPosition + "  " + getendvPosition + ", " + endRadial + ",  from(#" + ColorStart + "), to(#" + ColorEnd + "))"
                        });
                        $(".css-Gradient").text("-webkit-gradient(radial, " + hPosition + " " + getPosition + ", " + startvRadial + ", " + endhPosition + "  " + getendvPosition + ", " + endRadial + ",  from(#" + ColorStart + "), to(#" + ColorEnd + "))");
                    };
                }
                $(function() {
                    $("#red, #green, #blue").slider({
                        orientation: 'horizontal',
                        range: "min",
                        max: 255,
                        value: 127,
                        slide: refreshSwatch,
                        change: refreshSwatch
                    });
                    $("#red").slider("value", 134);
                    $("#green").slider("value", 100);
                    $("#blue").slider("value", 0);
                });
                function refreshSwatchend() {
                    var red = $(".red").slider("value"),
                    green = $(".green").slider("value"),
                    blue = $(".blue").slider("value"),
                    hex2 = hexFromRGB(red, green, blue);
                    ColorEnd = hex2;
                    startvRadial = $("#startvRadial").slider("value");
                    endRadial = $("#endRadial").slider("value");
                    var getendvPosition = $("#endvPosition").slider("value");
                    hPosition = $("#hPosition").slider("value");
                    getPosition = $("#vPosition").slider("value");
                    endhPosition = $("#endhPosition").slider("value");
                    var Type = $("#type").val();
                    if (Type == "linear") {
                        previewAreaBox.css({
                            "background": "-webkit-gradient(" + Type + ", " + hPosition + "% " + getPosition + "%, " + endhPosition + "% " + getendvPosition + "%, from(#" + ColorStart + "), to(#" + ColorEnd + "))"
                        });
                        $(".css-Gradient").text("-webkit-gradient(" + Type + ", " + hPosition + "% " + getPosition + "%, " + endhPosition + "% " + getendvPosition + "%, from(#" + ColorStart + "), to(#" + ColorEnd + "))");
                    };
                    if (Type == "radial") {
                        previewAreaBox.css({
                            "background": "-webkit-gradient(radial, " + hPosition + " " + getPosition + ", " + startvRadial + ", " + endhPosition + "  " + getendvPosition + ", " + endRadial + ",  from(#" + ColorStart + "), to(#" + ColorEnd + "))"
                        });
                        $(".css-Gradient").text("-webkit-gradient(radial, " + hPosition + " " + getPosition + ", " + startvRadial + ", " + endhPosition + "  " + getendvPosition + ", " + endRadial + ",  from(#" + ColorStart + "), to(#" + ColorEnd + "))");
                    };
                }
                $(function() {
                    $(".red, .green, .blue").slider({
                        orientation: 'horizontal',
                        range: "min",
                        max: 255,
                        value: 127,
                        slide: refreshSwatchend,
                        change: refreshSwatchend
                    });
                    $(".red").slider("value", 326);
                    $(".green").slider("value", 78);
                    $(".blue").slider("value", 40);
                });
            });
        } else if ($.browser.mozilla) {
            browserSafari.addClass("inactive");
            browserChrome.addClass("inactive");
            browserOpera.addClass("inactive");
            lodinforamtion = " #moz" + information;
            loadContainet.load(loadUrl + " " + lodinforamtion,
            function() {
                viewCss.append("<ul><li>background:<span class='css-Gradient'>#000000</span> </li></ul>");
                editThis = $(".editThis");
                selectOne = $("#selectOne");
                PreviewArea.append("<div class='previewAreaBox'> Css Gradient </div>");
                previewAreaBox = $(".previewAreaBox");
                previewAreaBox.css({
                    "background": "-moz-linear-gradient(100% 0 100deg, #ccc, #000)"
                });
                var Type = $("#type").val();
                if (Type == 'linear') {
                    minivalue = 0;
                } else if (Type == 'radial') {
                    minivalue = 0;
                };
                $("#type").change(function() {
                    var thisval = $(this).val();
                    if (thisval == 'linear') {
                        information = "CssGradient";
                        fnGradient();
                    } else if (thisval == 'radial') {
                        information = "CssGradientradial";
                        fnGradient();
                    };
                });
                var CssGradientinfo = $(lodinforamtion + " div.slider_mozz");
                CssGradientinfo.each(function() {
                    var value = parseInt($(this).text());
                    var maxivalue = parseInt($(this).attr("ral"));
                    $(this).empty().slider({
                        value: value,
                        min: minivalue,
                        max: maxivalue,
                        step: 1,
                        range: "min",
                        animate: true,
                        slide: function(event, ui) {
                            var hPosition = CssGradientinfo.eq("0").slider("value");
                            var getPosition = CssGradientinfo.eq("1").slider("value");
                            var startvRadial = CssGradientinfo.eq("2").slider("value");
                            var endhPosition = CssGradientinfo.eq("3").slider("value");
                            var getendvPosition = CssGradientinfo.eq("4").slider("value");
                            var endRadial = CssGradientinfo.eq("5").slider("value");
                            var Type = $("#type").val();
                            if (Type == "linear") {
                                previewAreaBox.css({
                                    "background": "-moz-linear-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)"
                                });
                                $(".css-Gradient").text("-moz-linear-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)");
                            };
                            if (Type == "radial") {
                                previewAreaBox.css({
                                    "background": "-moz-radial-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)"
                                });
                                $(".css-Gradient").text("-moz-radial-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)");
                            };
                        }
                    });
                });
                function hexFromRGB(r, g, b) {
                    var hex = [r.toString(16), g.toString(16), b.toString(16)];
                    $.each(hex,
                    function(nr, val) {
                        if (val.length == 1) {
                            hex[nr] = '0' + val;
                        }
                    });
                    return hex.join('').toUpperCase();
                }
                function refreshSwatch() {
                    var red = $("#red").slider("value"),
                    green = $("#green").slider("value"),
                    blue = $("#blue").slider("value"),
                    hex = hexFromRGB(red, green, blue);
                    ColorStart = hex;
                    cred = $(".red").slider("value");
                    cgreen = $(".green").slider("value");
                    cblue = $(".blue").slider("value");
                    ColorEnd = hexFromRGB(cred, cgreen, cblue);
                    startvRadial = $("#startvRadial").slider("value");
                    endRadial = $("#endRadial").slider("value");
                    var getendvPosition = $("#endvPosition").slider("value");
                    hPosition = $("#hPosition").slider("value");
                    getPosition = $("#vPosition").slider("value");
                    endhPosition = $("#endhPosition").slider("value");
                    var Type = $("#type").val();
                    if (Type == "linear") {
                        previewAreaBox.css({
                            "background": "-moz-linear-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)"
                        });
                        $(".css-Gradient").text("-moz-linear-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)");
                    }
                    if (Type == "radial") {
                        previewAreaBox.css({
                            "background": "-moz-radial-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)"
                        });
                        $(".css-Gradient").text("-moz-radial-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)");
                    };
                }
                $(function() {
                    $("#red, #green, #blue").slider({
                        orientation: 'horizontal',
                        range: "min",
                        max: 255,
                        value: 127,
                        slide: refreshSwatch,
                        change: refreshSwatch
                    });
                    $("#red").slider("value", 134);
                    $("#green").slider("value", 100);
                    $("#blue").slider("value", 0);
                });
                function refreshSwatchend() {
                    var red = $(".red").slider("value"),
                    green = $(".green").slider("value"),
                    blue = $(".blue").slider("value"),
                    hex2 = hexFromRGB(red, green, blue);
                    ColorEnd = hex2;
                    startvRadial = $("#startvRadial").slider("value");
                    endRadial = $("#endRadial").slider("value");
                    var getendvPosition = $("#endvPosition").slider("value");
                    hPosition = $("#hPosition").slider("value");
                    getPosition = $("#vPosition").slider("value");
                    endhPosition = $("#endhPosition").slider("value");
                    var Type = $("#type").val();
                    if (Type == "linear") {
                        previewAreaBox.css({
                            "background": "-moz-linear-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)"
                        });
                        $(".css-Gradient").text("-moz-linear-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)");
                    };
                    if (Type == "radial") {
                        previewAreaBox.css({
                            "background": "-moz-radial-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)"
                        });
                        $(".css-Gradient").text("-moz-radial-gradient(" + hPosition + "% " + getPosition + "% " + startvRadial + "deg, #" + ColorStart + ", #" + ColorEnd + " " + endhPosition + "%)");
                    };
                }
                $(function() {
                    $(".red, .green, .blue").slider({
                        orientation: 'horizontal',
                        range: "min",
                        max: 255,
                        value: 127,
                        slide: refreshSwatchend,
                        change: refreshSwatchend
                    });
                    $(".red").slider("value", 326);
                    $(".green").slider("value", 78);
                    $(".blue").slider("value", 40);
                });
            });
        } else {
            alert(" sorry this browser not sapported, plsece check other browser ");
        };
    };
    var fncssAnimation = function() {
        viewCss.empty();
        PreviewArea.empty();
        allsupport.empty();
        browserComptability.text("CSS Animation");
        loadContainet.load(loadUrl + " #CSSAnimation",
        function() {
            viewCss.append("<ul><li>.classname {</li><li>-webkit-animation: cssAnimation <span class='duration'>1s</span>  <span class='Iteration'>16</span> <span class='animation-timing'>ease</span>;</li><li>-moz-animation: cssAnimation <span class='duration'>1s</span>  <span class='Iteration'>16</span> <span class='animation-timing'>ease</span>;</li><li>-o-animation: cssAnimation <span class='duration'>1s</span>  <span class='Iteration'>16</span> <span class='animation-timing'>ease</span>;</li><li>}</li><li> @-webkit-keyframes cssAnimation {</li><li>from { -webkit-transform:  <span class='transformCord'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>; } </li><li> to { -webkit-transform:  <span class='transformEnd'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>; }</li><li> }</li><li> @-moz-keyframes cssAnimation {</li><li>from { -moz-transform:  <span class='transformCord'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>; } </li><li> to { -moz-transform:  <span class='transformEnd'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>; }</li><li> }</li><li> @-o-keyframes cssAnimation {</li><li>from { -o-transform:  <span class='transformCord'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>; } </li><li> to { -o-transform:  <span class='transformEnd'>rotate(4deg) scale(1) skew(1deg) translate(10px)</span>; }</li><li> }</li></ul>");
            AllShow.removeClass("inactive");
            browserMozilla.text("5.0+");
            browserIe.addClass("inactive");
            browserSafari.text("4.0+");
            browserChrome.text("4.0+");
            browserOpera.text("12+");
            browserblackberry.text("BlackBerry 6+");
            browseriPhone.text("iOS 2.0+");
            PreviewArea.append("<div class='previewAreaBox'> CSS 3.0 Animation<span class='start'>-webkit-transform: rotate(4deg) scale(1) skew(1deg) translate(10px); -moz-transform: rotate(4deg) scale(1) skew(1deg) translate(10px); -o-transform: rotate(4deg) scale(1) skew(1deg) translate(10px)</span><span class='end'></span></div>");
            previewAreaBox = $(".previewAreaBoxRotet");
            PreviewArea.css({
                "-webkit-transform": "rotate(4deg)",
                "-moz-transform": "rotate(4deg)",
                "-o-transform": "rotate(4deg)"
            });
            $("#viewCssCode ul li:nth-child(even)").addClass("striped");
            $(".transformSelect").live('click',
            function() {
                PreviewArea.removeClass('cssAnimation');
                $(".transformSelect").removeClass('transformActive');
                $(this).addClass('transformActive');
                var thisVal = $(this).val();
                if (thisVal == 'Start') {
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    $(".end").text("-webkit-transform:" + f + "; -moz-transform:" + f + "; -o-transform:" + f);
                } else if (thisVal == 'End') {
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    $(".start").text("-webkit-transform:" + f + "; -moz-transform:" + f + "; -o-transform:" + f);
                };
            });
            $(".viewimg").live('click',
            function() {
                var thisVal = $('.transformActive').val();
                var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                var c = "scale(" + $("#Scale").slider("value") + ") ";
                var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                var e = "translate(" + $("#Translate").slider("value") + "px)";
                var g = $("#Duration").slider("value") + "s";
                var h = $(".aniTiming").val();
                var i = $("#Iteration").slider("value");
                var f = b + c + d + e;
                if (thisVal == "Start") {
                    htmlend = $('.end').text();
                    htmlfStart = "-webkit-transform:" + f + "; -moz-transform:" + f + "; -o-transform:" + f;
                } else if (thisVal == 'End') {
                    htmlend = "-webkit-transform:" + f + "; -moz-transform:" + f + "; -o-transform:" + f;
                    htmlfStart = $('.start').text();
                };
                style = "<style>.cssAnimation{-webkit-animation-name: cssAnimation;-webkit-animation-duration:" + g + ";-webkit-animation-iteration-count: " + i + ";-webkit-animation-timing-function: " + h + "; -moz-animation-name: cssAnimation;-moz-animation-duration:" + g + ";-moz-animation-iteration-count: " + i + ";-moz-animation-timing-function: " + h + "; -o-animation-name: cssAnimation;-o-animation-duration:" + g + ";-o-animation-iteration-count: " + i + ";-o-animation-timing-function: " + h + "}@-webkit-keyframes cssAnimation {from {" + htmlfStart + "}to {" + htmlend + "}} @-moz-keyframes cssAnimation {from {" + htmlfStart + "}to {" + htmlend + "}}@-o-keyframes cssAnimation {from {" + htmlfStart + "}to {" + htmlend + "}}</style>";
                $(".fontfaceview").empty();
                $(".fontfaceview").prepend(style);
                PreviewArea.addClass('cssAnimation');
            });
            $(".aniTiming").change(function() {
                PreviewArea.removeClass('cssAnimation');
                $('.animation-timing').text($(this).val());
            });
            $("#Iteration").slider({
                value: 16,
                min: 1,
                max: 20,
                step: 1,
                slide: function(event, ui) {
                    PreviewArea.removeClass('cssAnimation');
                    var a = ui.value;
                    $(".Iteration").text(a);
                }
            });
            $("#Duration").slider({
                value: 1,
                min: 0.001,
                max: 5,
                step: 0.0001,
                slide: function(event, ui) {
                    PreviewArea.removeClass('cssAnimation');
                    var a = ui.value + "s";
                    $(".duration").text(a);
                }
            });
            $("#Rotate").slider({
                value: 4,
                min: 0,
                max: 360,
                step: 1,
                slide: function(event, ui) {
                    PreviewArea.removeClass('cssAnimation');
                    var a = ui.value;
                    var b = "rotate(" + a + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'End') {
                        PreviewArea.css({
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformEnd").text(f);
                    } else if (transformactive == 'Start') {
                        PreviewArea.css({
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
            $("#Scale").slider({
                value: 1,
                min: 0.1,
                max: 1.5,
                step: 0.001,
                slide: function(event, ui) {
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + a + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    PreviewArea.removeClass('cssAnimation');
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'End') {
                        PreviewArea.css({
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformEnd").text(f);
                    } else if (transformactive == 'Start') {
                        PreviewArea.css({
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
            $("#Skew").slider({
                value: 1,
                min: -180,
                max: 180,
                step: 1,
                slide: function(event, ui) {
                    PreviewArea.removeClass('cssAnimation');
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + a + "deg) ";
                    var e = "translate(" + $("#Translate").slider("value") + "px)";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'End') {
                        PreviewArea.css({
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformEnd").text(f);
                    } else if (transformactive == 'Start') {
                        PreviewArea.css({
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
            $("#Translate").slider({
                value: 0,
                min: -300,
                max: 300,
                step: 1,
                slide: function(event, ui) {
                    PreviewArea.removeClass('cssAnimation');
                    var a = ui.value;
                    var b = "rotate(" + $("#Rotate").slider("value") + "deg) ";
                    var c = "scale(" + $("#Scale").slider("value") + ") ";
                    var d = "skew(" + $("#Skew").slider("value") + "deg) ";
                    var e = "translate(" + a + "px)";
                    var f = b + c + d + e;
                    var transformactive = $('.transformActive').val();
                    if (transformactive == 'End') {
                        PreviewArea.css({
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformEnd").text(f);
                    } else if (transformactive == 'Start') {
                        PreviewArea.css({
                            "-webkit-transform": f,
                            "-moz-transform": f,
                            "-o-transform": f
                        });
                        $(".transformCord").text(f);
                    }
                }
            });
        });
    };
    selectCss.change(function() {
        if (selectCss.val() == "Border-Radius-all") {
            fnBorderRadius();
        } else if (selectCss.val() == "Border-Radius") {
            //fnBorder();
			fnBorderRadius();
        } else if (selectCss.val() == "BoxShadow") {
            fnBoxShadow();
        } else if (selectCss.val() == "TextShadow") {
            fnTextShadow();
        } else if (selectCss.val() == "rgba") {
            fnrgba();
        } else if (selectCss.val() == "Borderimage") {
            fnBorderimage();
        } else if (selectCss.val() == "textRotation") {
            fntextRotation();
        } else if (selectCss.val() == "FontFace") {
            fnFontFace();
        } else if (selectCss.val() == "Outline") {
            fnOutline();
        } else if (selectCss.val() == "Transition") {
            fnTransition();
        } else if (selectCss.val() == "CSS Gradient") {
            information = "CssGradient";
            fnGradient();
        } else if (selectCss.val() == "CSS Transform") {
            fncssTransform();
        } else if (selectCss.val() == "CSS Animation") {
            fncssAnimation();
        };
    });
    if (selectCss.val() == "Border-Radius-all") {
        fnBorderRadius();
    } else if (selectCss.val() == "Border-Radius") {
        //fnBorder();
		fnBorderRadius();
    } else if (selectCss.val() == "BoxShadow") {
        fnBoxShadow();
    } else if (selectCss.val() == "TextShadow") {
        fnTextShadow();
    } else if (selectCss.val() == "rgba") {
        fnrgba();
    } else if (selectCss.val() == "Borderimage") {
        fnBorderimage();
    } else if (selectCss.val() == "textRotation") {
        fntextRotation();
    } else if (selectCss.val() == "FontFace") {
        fnFontFace();
    } else if (selectCss.val() == "Outline") {
        fnOutline();
    } else if (selectCss.val() == "Transition") {
        fnTransition();
    } else if (selectCss.val() == "CSS Gradient") {
        information = "CssGradient";
        fnGradient();
    } else if (selectCss.val() == "CSS Transform") {
        fncssTransform();
    } else if (selectCss.val() == "CSS Animation") {
        fncssAnimation();
    };
});
$(function() {
    setTimeout(function() {
        var banner = $('.banner');
        banner.animate({
            "height": "+=40px"
        },
        "slow");
        $('.close').click(function() {
            var bannerHeight = banner.height();
            if (bannerHeight == "0") {
                banner.animate({
                    "height": "+=40px"
                },
                "slow");
                $(this).removeClass('active')
            } else {
                banner.animate({
                    "height": "-=40px"
                },
                "slow");
                $(this).addClass('active');
            };
        });
    },
    2000);
});
$(function() {
    $("#download").live('click',
    function() {
        _viewcsssode = $("#viewCssCode");
        var selectedval = $("#selectCss").val();
        var getStyale = _viewcsssode.text();
        var d = new Date();
        var getfilename = "css3make-" + d.getDate() + d.getTime();
        var dataString = 'name=' + getStyale + '&filename=' + getfilename;
        if (selectedval == "CSS Animation") {
            var dataString = 'name=' + getStyale + '&filename=' + getfilename;
        } else if (selectedval == "Transition") {
            var dataString = 'name=' + getStyale + '&filename=' + getfilename;
        } else if (selectedval == "textRotation") {
            var addclass = ".classname a{position:absolute; left:40%; " + getStyale + "}";
            var dataString = 'name=' + addclass + '&filename=' + getfilename;
        } else if (selectedval == "FontFace") {
            var addclass = getStyale;
            var dataString = 'name=' + addclass + '&filename=' + getfilename;
        } else {
            var addclass = ".classname{" + getStyale + "}";
            var dataString = 'name=' + addclass + '&filename=' + getfilename;
        }
        $.ajax({
            type: "POST",
            url: "bin/download.php",
            data: dataString,
            success: function() {
                setTimeout(function() {
                    window.location = "bin/downloadsorce/" + getfilename + ".zip";
                },
                200);
            }
        });
    });
});