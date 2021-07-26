// OnLoad Default View

var randomTheme = randomThemeSelector();
var currentView = "desktop";
var hasClicked = "no";

$(".statusBarIcons").removeClass("d-flex");
$(".container").addClass(randomTheme);
$(".title").html("Web Developer");

// OnClick NavDots in desktop View
$(".navDots").on("click", function() {

  if (currentView === "desktop") {
    console.log(currentView);
    mobileModelView();
    toMobileView();

  } else {
    console.log(currentView);
//Clear
    $(".biDownIcon").removeClass("d-none");
    $(".biDashIcon").addClass("d-none");
    $(".dropDownIconDiv").addClass("d-none");
//Clear Current & Reset new Theme
    $(".profileHero").removeClass(randomTheme);
    randomTheme = randomThemeSelector();

    toDesktopView();
  }

// OnClick DropDownIcon in Mobile View
  $(".dropDownIconDiv").on("click", function() {
    dropDownIconAction();
  });

});

// ALL FUNCTIONS //

// Theme Selector Function
function randomThemeSelector() {
  var randomNumber = Math.round(Math.random() * 5);
  var themesArray = ["themeDark1", "themeDark2", "themeDark3", "themeLight1", "themeLight2", "themeLight3"];
  var randomThemeSelected = themesArray[randomNumber];
  return randomThemeSelected;
}

// Text Theme Selector
function textLightOrDark() {
  if ((randomTheme === "themeLight1") || (randomTheme === "themeLight2") || (randomTheme === "themeLight3")) {
    // alert(randomTheme);
    $(".desgDiv").removeClass("text-light");
    $(".desgDiv").addClass("text-dark");
  } else {
    $(".desgDiv").removeClass("text-dark");
    $(".desgDiv").addClass("text-light");
  }
}

//Changing from desktop to Mobile View
function toMobileView() {
  $(".navDotsDiv").addClass("d-none");
  $(".desgOnClick").addClass("d-none");
  $(".textArea").addClass("d-none");
  $(".dropDownIconDiv").removeClass("d-none");
  mobileModelView();
  $(".imgDiv").removeClass("mt-5-cust");
  $(".desig").addClass("ms-2");
  textLightOrDark();
  $(".title").addClass("ms-0 mb-0");
  $(".title").html("Sat Sid"); //Name
}

//Creating an outline of Mobile Model
function mobileModelView() {
  $(".container").removeClass("breathAnimation w-50 p-3 container-cust");
  $(".container").addClass("onExpand p-2 bg-dark");
  $(".container").removeClass(randomTheme);
  $(".emptyDiv").addClass("bg-light screenSize");
  $(".statusBarIcons").removeClass("d-none");
  $(".statusBarIcons").addClass("d-flex");
  $(".profileHero").addClass("mt-0 py-4 shadow rounded-cust");
  $(".profileHero").addClass(randomTheme);
  $("img").removeClass("profileImg");
  $("img").addClass("profileImgMobile");
  $(".desgDiv").removeClass("bg-dark h-75 p-3 rounded-pill shadow");
  currentView = "mobile"; //check
}

//DropDownIcon Action
function dropDownIconAction() {
  if (hasClicked === "no") {
    $(".biDownIcon").addClass("d-none");
    $(".biDashIcon").removeClass("d-none");

    $(".navDotsDiv").removeClass("d-none");
    $(".imgDiv").addClass("mt-5-cust");
    $(".desig").addClass("ms-2 mt-5-cust");
    $(".desgOnClick").removeClass("d-none");
    $(".desgOnClick").html("<em>Full-stack Developer</em>");
    $(".textArea").removeClass("d-none");
    $(".hireMeBtn").addClass("btn btn-primary rounded-pill mt-5");
    $(".hireMeBtn").html("HIRE ME");
    $(".textArea").removeClass("opacity-cust");
    hasClicked = "yes";
// OnClick HireMeBtn in mobile View
    $(".hireMeBtn").on("click", function() {
      onClickHireBtn();
// OnClick CloseBtn on PopUpMesg in mobile View
      $(".popUpDiv").on("click", function() {
        popUpClose();
      });

    });

  } else {
    $(".biDownIcon").removeClass("d-none");
    $(".biDashIcon").addClass("d-none");

    $(".navDotsDiv").addClass("d-none");
    $(".imgDiv").removeClass("mt-5-cust");
    $(".desig").removeClass("ms-2 mt-5-cust");
    $(".desgOnClick").addClass("d-none");
    $(".textArea").addClass("d-none");
    $(".hireMeBtn").removeClass("btn btn-primary rounded-pill mt-5");
    hasClicked = "no";
  }
}

//Clicking on HireBtn
function onClickHireBtn() {
  $(".popUpDiv").removeClass("d-none");
  $(".popUpDiv").addClass("popUpMesg");
  $(".textArea").addClass("opacity-cust");
  $(".dropDownIconDiv").addClass("pe-none");
}

// PopUp  disable on closeIcon
function popUpClose() {
  $(".popUpDiv").addClass("d-none");
  $(".textArea").removeClass("opacity-cust");
  $(".dropDownIconDiv").removeClass("pe-none");
}

//Changing from Mobile to Desktop View (Back to DesktopView)
function toDesktopView(){
  $(".container").addClass("breathAnimation w-50 p-3 container-cust");
  $(".container").removeClass("onExpand p-2 bg-dark");
  $(".container").addClass(randomTheme);
  $(".emptyDiv").removeClass("bg-light screenSize");
  $(".statusBarIcons").addClass("d-none");
  $(".statusBarIcons").removeClass("d-flex");
  $(".profileHero").removeClass("mt-0 py-4 shadow rounded-cust");
  $(".imgDiv").removeClass("mt-5-cust");
  $("img").addClass("profileImg");
  $("img").removeClass("profileImgMobile");
  $(".desig").removeClass("ms-2 mt-5-cust");
  $(".desgDiv").addClass("bg-dark h-75 p-3 rounded-pill shadow");
  $(".desgDiv").removeClass("text-dark");
  $(".title").removeClass("ms-0 mb-0");
  $(".title").html("Web Developer");
  $(".desgOnClick").html("");
  $(".textArea").addClass("d-none");
  $(".popUpDiv").addClass("d-none");
  $(".dropDownIconDiv").removeClass("pe-none");
  currentView = "desktop";
  hasClicked = "no";
}

//Time to Time Function
function currentTime() {
  var time = new Date();
  var hh = time.getHours();
  var mm = time.getMinutes();

  if ((hh < 10) && (mm < 10)) {
    $(".timeTotime").html("0" + hh + ":" + "0" + mm);
  } else if (hh < 10) {
    $(".timeTotime").html("0" + hh + ":" + mm);
  } else if (mm < 10) {
    $(".timeTotime").html(hh + ":" + "0" + mm);
  } else {
    $(".timeTotime").html(hh + ":" + mm);
  }
}

setInterval(currentTime, 1000);
