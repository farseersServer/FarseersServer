function switchLanguage(lang) {

  $("html").attr("lang", lang);
 
  var koreanParagraphs = document.querySelectorAll("[data-lang='ko']");
  var englishParagraphs = document.querySelectorAll("[data-lang='en']");
  var koreanAnchor = document.querySelectorAll("[data-a-lang='ko']");
  var englishAnchor = document.querySelectorAll("[data-a-lang='en']");
  var koreanInput = document.querySelectorAll("[data-i-lang='ko']");
  var englishInput = document.querySelectorAll("[data-i-lang='en']");
  var koreanButton = document.querySelector(".btn-ko");
  var englishButton = document.querySelector(".btn-en");
  var nameinput = document.getElementById("name");
  var emailinput = document.getElementById("email");
  var phoneinput = document.getElementById("phone");
  var messageinput = document.getElementById("message");

  if (lang === "ko") {
    // Show Korean paragraphs and button, hide English paragraphs and button
    koreanParagraphs.forEach(function(p) {
      p.style.display = "block";
    });
    englishParagraphs.forEach(function(p) {
      p.style.display = "none";
    });
    koreanAnchor.forEach(function(a) {
      a.style.display = "inline";
    });
    englishAnchor.forEach(function(a) {
      a.style.display = "none";
    });
    koreanInput.forEach(function(input) {
      input.ariaDisabled = "false";
      input.style.display = "block";
    })
    englishInput.forEach(function(input) {
      input.ariaDisabled = "true";
      input.style.display = "none";
      input.ariaInvalid = "false";
    })
    koreanButton.style.display = "none";
    englishButton.style.display = "inline";
    nameinput.setAttribute("lang", "ko");
    nameinput.setAttribute("placeholder", "이름 *");
    emailinput.setAttribute("lang", "ko");
    emailinput.setAttribute("placeholder", "이메일 *");
    phoneinput.setAttribute("lang", "ko");
    phoneinput.setAttribute("placeholder", "전화번호 *");
    messageinput.setAttribute("lang", "ko");
    messageinput.setAttribute("placeholder", "문의 내용 *");
  } else if (lang === "en") {
    // Show English paragraphs and button, hide Korean paragraphs and button
    englishParagraphs.forEach(function(p) {
      p.style.display = "block";
    });
    koreanParagraphs.forEach(function(p) {
      p.style.display = "none";
    });
    englishAnchor.forEach(function(a) {
      a.style.display = "inline";
    });
    koreanAnchor.forEach(function(a) {
      a.style.display = "none";
    });
    koreanInput.forEach(function(input) {
      input.ariaDisabled = "true";
      input.style.display = "none";
      input.ariaInvalid = "false";
    })
    englishInput.forEach(function(input) {
      input.ariaDisabled = "false";
      input.style.display = "block";
    })    
    englishButton.style.display = "none";
    koreanButton.style.display = "inline";
    nameinput.setAttribute("lang", "en");
    nameinput.setAttribute("placeholder", "Your name *");
    emailinput.setAttribute("lang", "en");
    emailinput.setAttribute("placeholder", "Email Address *");
    phoneinput.setAttribute("lang", "en");
    phoneinput.setAttribute("placeholder", "Phone *");
    messageinput.setAttribute("lang", "en");
    messageinput.setAttribute("placeholder", "Message *");
  }
}

// Set the default language to Korean
switchLanguage('ko');
