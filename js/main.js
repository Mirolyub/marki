$('document').ready(function(){

  $('.mybutton').on('click', function() {
    var Paste = $(this).data('paste');
    $('#myinput').val($('#myinput').val() + Paste).trigger('keypress');


    $(".reset").on ('click', function() {
      $('input').val('');
      $('#rez').html(' ');
      $('#rez1').html(' ');
      $('#rez2').html('Каких и сколько: ');

    });
    $('.delete').click(function() {
      $('input').val(function(i, val) {
        return val.slice(0, -1);
      });
    });

  });
    $('#myinput').keypress('keyup',function(){
      var value1, value2, value3, value4, value5, value6;
      value1 = $('.form-control').val();
      value2 = 20;
      value3 = value1/value2;
      value4 = Math.ceil(value3);
      value5 = value4-1;
      value6 = value5 * 3;
      var prise = 23+value6;
      $('#rez').html(prise + " руб");
      var arrayNumbers= [25, 10, 5, 3, 2, 1];
      var sumNumbers = 0;
      var y = 1;
      var result = [];
      var namberdelenie =[];
  for (var i=0;  prise!=0; i++) {
      if (prise/arrayNumbers[i]>=1){
          sumNumbers = sumNumbers + arrayNumbers[i]; //чтобы получить первую переменную которая подходит, 10, 3
          namberdelenie.push(sumNumbers)
          x = Math.floor(prise/sumNumbers);
          result.push(x);
          prise = prise%sumNumbers;  // остаток
          sumNumbers = 0;
      }
  }
 var otvet = [];
 var otvet1 = [];
 // var otvet = namberdelenie[0] + "Х" + result[0] + "," +  namberdelenie[1] + "Х" + result[1] + "," + namberdelenie[2] + "Х" + result[2];
  for (i=0; i < namberdelenie.length; i++) {
    if (i < result.length){
    otvet =  namberdelenie[i] + "X" + result[i];
    otvet1.push(namberdelenie[i] + "X" + result[i]);

     // otvet1.push(otvet);
    }
  }

  var res=0;
  for (var i=0; i<=result.length-1; i++) {
    res += result[i];
  }
  $('#rez1').html(res + " шт");
  $('#rez2').html(otvet1 + "") ;


        //console.log("то на что разделилось: " + sumNumbers);
      //  console.log("Сколько раз разделилось: " +x1);
       // console.log("Остаток: " +prise);
    });
    $('input').on('keyup',function(){
      var value1, value2, value3, value4, value5, value6;
      value1 = $('.form-control').val();
      value2 = 20;
      value3 = value1/value2;
      value4 = Math.ceil(value3);
      value5 = value4-1;
      value6 = value5 * 3;
      var prise = 23+value6;
      $('#rez').html(prise + " руб");
      var arrayNumbers= [25, 10, 5, 3, 2, 1];
      var sumNumbers = 0;
      var y = 1;
      var result = [];
      var namberdelenie =[];
  for (var i=0;  prise!=0; i++) {
      if (prise/arrayNumbers[i]>=1){
          sumNumbers = sumNumbers + arrayNumbers[i]; //чтобы получить первую переменную которая подходит, 10, 3
          namberdelenie.push(sumNumbers)
          x = Math.floor(prise/sumNumbers);
          result.push(x);
          prise = prise%sumNumbers;  // остаток
          sumNumbers = 0;
      }
  }
 var otvet = [];
 var otvet1 = [];
 // var otvet = namberdelenie[0] + "Х" + result[0] + "," +  namberdelenie[1] + "Х" + result[1] + "," + namberdelenie[2] + "Х" + result[2];
  for (i=0; i < namberdelenie.length; i++) {
    if (i < result.length){
    otvet =  namberdelenie[i] + "X" + result[i];
    otvet1.push(namberdelenie[i] + "X" + result[i]);

     // otvet1.push(otvet);
    }
  }

  var res=0;
  for (var i=0; i<=result.length-1; i++) {
    res += result[i];
  }
  $('#rez1').html(res + " шт");
  $('#rez2').html(otvet1 + "") ;


  console.log ("Сколько всего и по сколько: " +otvet1);
  console.log("Сколько всего нужно марок: " +res);
         console.log("Какие целые числа при делении: " +result);
      //console.log("то на что разделилось: " + sumNumbers);
    //  console.log("Сколько раз разделилось: " +x1);
     // console.log("Остаток: " +prise);

  });

    });

    //Первая переменная лежит в arrayNumbers, Вторая переменная лежит в массиве result