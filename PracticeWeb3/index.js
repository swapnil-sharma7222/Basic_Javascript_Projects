const inputEl = $("#input");
const infoTextEl = $("#info-text");
const meaningContainerEl = $("#meaning-container");
const titleEl = $("#title");
const meaningEl = $("#meaning");
const audioEl = $("#audio");

async function fetchAPI(word) {
  try {
    infoTextEl.css("display", "block");
    meaningContainerEl.css("display", "none");
    infoTextEl.text(`Searching the meaning of "${word}"`);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      meaningContainerEl.css("display", "block");
      infoTextEl.css("display", "none");
      titleEl.text(word);
      meaningEl.text("N/A");
      audioEl.css("display", "none");
    } else {
      infoTextEl.css("display", "none");
      meaningContainerEl.css("display", "block");
      audioEl.css("display", "inline-flex");
      titleEl.text(result[0].word);
      meaningEl.text(result[0].meanings[0].definitions[0].definition);
      audioEl.attr("src", result[0].phonetics[0].audio);
    }
  } catch (error) {
    console.log(error);
    infoTextEl.text(`an error happened, try again later`);
  }
}

inputEl.on("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});


// const apiKey= "...........";

// const options = {
//     method: "GET",
//     headers: {
//         "X-Api-Key": apiKey,
//     },
// };

// const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// async function fun(e) {
//     if(e.which === 13) {
//         try{
//             $('.info-text').css("display", "none");
//             $('#meaning-container').css("display", "flex");
//             const response = await fetch(apiURL, options);
//             const data= await response.json();
//             $(".meaning").text(data[0].joke);
//         } catch (error) {
//             $(".container").html(`
//                 <h3>An error happened, try again later</h3>
//                 <p>Please check your internet connection</p>
//             `)
//             console.log(error);
//         }
        
//     }
// }

// $(document).on('keypress', fun);

  

