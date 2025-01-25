let languages = {
  uz: "Uzbek",
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  ru: "Russian",
  zh: "Chinese",
  ja: "Japanese",
  ar: "Arabic",
  pt: "Portuguese",
  hi: "Hindi",
  bn: "Bengali",
  nl: "Dutch",
  tr: "Turkish",
  ko: "Korean",
  vi: "Vietnamese",
  pl: "Polish",
  uk: "Ukrainian",
  el: "Greek",
  th: "Thai",
  cs: "Czech",
  ro: "Romanian",
  sv: "Swedish",
  hu: "Hungarian",
  he: "Hebrew",
  da: "Danish",
  fi: "Finnish",
  no: "Norwegian",
  id: "Indonesian",
  sk: "Slovak",
  bg: "Bulgarian",
  hr: "Croatian",
  lt: "Lithuanian",
  lv: "Latvian",
  sr: "Serbian",
  sl: "Slovenian",
  et: "Estonian",
  ms: "Malay",
  mk: "Macedonian",
  ka: "Georgian",
  sq: "Albanian",
  az: "Azerbaijani",
  is: "Icelandic",
  fa: "Persian",
  sw: "Swahili",
  tl: "Tagalog",
  ur: "Urdu",
  kk: "Kazakh",
  hy: "Armenian",
};
let lang1 = document.getElementById("sel1");
let lang2 = document.getElementById("sel2");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let translateBtn = document.getElementById("translate");

Object.entries(languages).forEach(([code, name]) => {
  let option = `<option value="${code}">${name}</option>`;
  lang1.innerHTML += option;
  lang2.innerHTML += option;
});

// switch language
let switchLang = document.getElementById("switch");
switchLang.addEventListener("click", () => {
  [text1.value, text2.value] = [text2.value, text1.value];
  [lang1.value, lang2.value] = [lang2.value, lang1.value];
});

// translate language

translateBtn.addEventListener("click", async () => {
  if (!text1.value.trim()) {
    text2.value = "Enter text to translate";
    text2.style.color = "red";
    return;
  }
  text2.value = "";

  try {
    let encodedText = encodeURIComponent(text1.value.trim());
    let apiURL = `https://lingva.ml/api/v1/${lang1.value}/${lang2.value}/${encodedText}`;

    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Couldn't translate the text");
    }

    let data = await response.json();

    if (data && data.translation) {
      text2.value = data.translation;
      text2.style.color = "white";
    } else {
      text2.value = "Translation not available.";
    }
    text2.value = "";
  } catch (error) {
    text2.value = `Error translating`;
  }
  text2.value = "";
});
