const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


$(window).scroll(function (){
  var posY=window.scrollY; 

  if (posY > 150){
        $('.back-to-top').css('display', 'inline-block');			
  } else{
     $('.back-to-top').css('display', 'none');				
  }
});