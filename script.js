var quotes=[
{'author': 'Mahatma Gandhi',

'quote':' “Live as if you were to die tomorrow. Learn as if you were to live forever.”'
},

{ 'author': 'Andre Gide, Autumn Leaves',
  
'quote': '“It is better to be hated for what you are than to be loved for what you are not.”'

},

{ 'author': 'Mark Twain',

'quote':'“If you tell the truth, you dont have to remember anything.”'


},

{'author': 'Elbert Hubbard',

'quote':'“A friend is someone who knows all about you and still loves you.”'
},

{ 'author': 'Oscar Wilde',
'quote': '“To live is the rarest thing in the world. Most people exist, that is all.”'


}

];


function  generateQuote(){

    var random=Number.parseInt(Math.random()*quotes.length);

    document.getElementById('Quote').textContent= `" ${quotes[random].quote}`;
    document.getElementById('author').textContent=`" ${quotes[random].author}`;
    
}


