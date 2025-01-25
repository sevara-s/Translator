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
let encodedText = encodeURIComponent(text1.value.trim());

// translate language

translateBtn.addEventListener("click", () => {
  fetch(`https://lingva.ml/api/v1/${lang1.value}/${lang2.value}/${text1.value}`)
    .then((response) => response.json())
    .then((data) => ADDUI(data.translation))
    .catch((error) => console.error("Error:", error));
});

function ADDUI(params) {
  text2.value = params;
  console.log(params);
}
