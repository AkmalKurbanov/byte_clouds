$(function(){
 var form =  $('#form');
  if (form.length) {
    form.validate({
      rules: {
        name: {
          required: true
        },
        phone: {
          required: true
        }
      },
      messages: {
        name: {
          required: 'Поле обязательно для заполнения'
        },
        phone: {
          required: 'Поле обязательно для заполнения'
        }
      }
    })
  }
});

