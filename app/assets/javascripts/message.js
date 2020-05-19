$(function(){
  function buildHTML(message){
    if (message.image) {
      var html =
        `<div class="message">
           <div class="main-chat__message-list__data">
             <div class="main-chat__message-list__data--name">
               ${message.user_name}
             </div>
             <div class="main-chat__message-list__data--date">
               ${message.created_at}
             </div>
           </div>
           <div class="main-chat__message-list--latest-message">
             <p class="main-chat__message-list--latest-message--content">
               ${message.content}
             </p>
             <img class="main-chat__message-list--latest-message--image" src=${message.image}>
           </div>
         </div>`
      return html;
    } else {
      var html =
        `<div class="message">
           <div class="main-chat__message-list__data">
             <div class="main-chat__message-list__data--name">
               ${message.user_name}
             </div>
             <div class="main-chat__message-list__data--date">
               ${message.created_at}
             </div>
           </div>
           <div class="main-chat__message-list--latest-message">
             <p class="main-chat__message-list--latest-message--content">
               ${message.content}
             </p>
           </div>
         </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__message-list').append(html);
      $('form')[0].reset();
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('.main-chat__form__send').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});