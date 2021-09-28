const quoteContiner = document.getElementById('quote-continer');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuotebtn = document.getElementById('new-quote'); 
const loader = document.getElementById('loader'); 

let apiQuotes=[];
//---------------------------------------------Get Quotes From Api----------------------------//
async function GetQuotes() {
    loading();
    const ApiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(ApiUrl);
        apiQuotes = await response.json();
        newQuotes();
    }
    catch(error){
    }
}
//----------------------------------------show New Quotes----------------------------------//
function newQuotes() {
    loading();
   const Quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  
   if(!Quote.author)
   {
       author.textContent = 'Unknown'
   }else{
      authorText.textContent = Quote.author;
   }
    if(Quote.text.length>120)
    {
        quoteText.classList.add('long-quote');

    }else{
        quoteText.classList.remove('long-quote');
    }
     quoteText.textContent = Quote.text;
     complete();
}
//-----------------------------------------------tweet Quote---------------------------------------//
function tweetQuote() {
   const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
   window.open(tweetUrl,'-blank');
}
newQuotebtn.addEventListener('click',newQuotes);
twitterBtn.addEventListener('click',tweetQuote);

//-----------------------------------------------Loader and Complete-------------------------------//
function loading() {
    loader.hidden = false;
    quoteContiner.hidden = true;
}
function complete() {
    loader.hidden = true;
    quoteContiner.hidden = false;
}

GetQuotes();