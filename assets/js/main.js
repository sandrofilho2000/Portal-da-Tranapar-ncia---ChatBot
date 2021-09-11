$(function(){
    $('.openChat').click(function(){
        $('.chatBot-Overlay').show()
    })
    $('.chatBot-Overlay').click(function(){
        $('.chatBot-Overlay').hide()
    })
    $('.chatContainer').click(function(e){
        e.stopPropagation()
    })

   
})