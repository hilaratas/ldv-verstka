export default function () {

  $.extend($.validator.messages, {
    required: 'Поле обязательно к заполнению',
    remote: 'Поле заполнено некорректно',
    email: 'E-mail некорректен',
    url: 'URL некорректен',
    date: 'Некорректная дата',
    dateISO: 'Введите корректную дату в формате ISO.',
    number: 'Введите число',
    digits: 'Введите только цифры',
    creditcard: 'Введите правильный номер карты',
    equalTo: 'Введите такое же значение ещё раз',
    extension: 'Выберите файл с разрешенным расширением',
    maxlength: $.validator.format('Введите не больше {0} символов'),
    minlength: $.validator.format('Введите не меньше {0} символов'),
    rangelength: $.validator.format('Введите значение длиной от {0} до {1} символов'),
    range: $.validator.format('Введите число от {0} до {1}'),
    max: $.validator.format('Введите число, меньшее или равное {0}'),
    min: $.validator.format('Введите число, большее или равное {0}'),
    tel: 'Введите телефон в формате +7 (012) 345-67-89',
    cyrillic: 'Введите русские буквы, дефис или пробел',
    passport: 'Введите данные в формате 22 00 123456',
    lc: 'Введите лицевой счет в формате 123456789',
    accept: 'Выберите файл с разрешенным расширением',
    "digits-and-cyr-chars" : 'Введите цифры или русские буквы',
    size: "Превышен допустимый размер файлов",
    oneSize: 'Превышен допустимый размер одного из файлов',
    maxCountFiles : 'Разрешается прикрепиь не больше {0} файлов',
    city: 'Город не найден. Выберите город из выпадающего списка.',
    street: 'Улица не найдена. Выберите улицу из выпадающего списка.',
    house: 'Дом не найден. Выберите дом из выпадающего списка.'
  });

	$.validator.setDefaults({
	    errorElement: 'span',
	    errorPlacement: function(error, element) {
        console.log(error, element);
	      error.addClass('form-error');
	      error.appendTo(element.closest('.js-form-validate__elem-holder'));
	    },
	    highlight: function(element, errorClass, validClass) {
	      $(element).addClass(errorClass).removeClass(validClass);
	    },
	    unhighlight: function(element, errorClass, validClass) {
	      var $input = $(element);

	      if ($input.val() === '') {
	        $input.removeClass(validClass).removeClass(errorClass);
	      } else {
	        $input.removeClass(errorClass).addClass(validClass);
	      }
	    },
	    errorClass: 'is-error',
	    validClass: 'is-valid',
	    ignore: ".ignore, :hidden"
	});

	$('.js-form-validate').each(function(){
        var $this_form = $(this);
        $this_form.validate();
    });

	$('.js-form-validate-remote').each(function(){

		var $curForm = $(this);

		$curForm.validate({
			rules: {
		        CaptchaInputText:
		        {
		            remote:$curForm.data('remote-url') + $curForm.serialize()
		        }
		    },
		    messages: {
		        CaptchaInputText:
		        {
		            remote:"Символы введены неправильно"
		        }
		    }
		});
	});

	$.validator.addMethod("greaterThan", function(value, element, params) {
	    if (!/Invalid|NaN/.test(new Date(value))) {
	        return new Date(value) > new Date($(params[0]).val());
	    }
	    return isNaN(value) && isNaN($(params[0]).val()) || (Number(value) > Number($(params[0]).val()));
	},'Must be greater than {1}.');

	$.validator.addMethod("float-digits", function(value, element, param) {
		if (this.optional(element)) {
			return true;
		}
		if (typeof param === "string") {
			param = new RegExp(param);
		}
		return param.test(value);
	});

  jQuery.validator.addMethod('tel2', function(value, element) {
    return this.optional(element) || /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
  }, $.validator.messages.tel);

  jQuery.validator.addMethod('cyrillic', function (value, element) {
      return this.optional(element) || /^[-а-яёА-ЯЁ ]+$/.test(value);
    }, $.validator.messages.cyrillic);

  jQuery.validator.addClassRules({
    "js-mask-tel": {
      tel2: true
    },
    "js-form-validate__cyrillic": {
      cyrillic: true
    }
  });
}
