// $(document).ready - действия только полностью загруженной страницы
// Функционал зашифровки
$(document).ready(function () {
    $("#encode").click(function() {
        // AJAX-запрос на нужный адресс
        var la = $('#left_area').val();
        var rot = $('#rotate_value').val();
        // ссылаемся на URL , где прописано в URLs.py, далее отсылка на VIEW.PY
        $.get("/ajax_encode/", {l_area : la, rv : rot }, function(data) {
            // Меняем текст тега на полученные данные зашифровки
            $("#right_area").val(data.result); 
        });
    });
});

$(document).ready(function () {
    $("#decode").click(function() {
        // AJAX-запрос на нужный адресс
        var ra = $('#right_area').val();
        var rot = $('#rotate_value').val();
        // ссылаемся на URL , где прописано в URLs.py, далее отсылка на VIEW.PY
        $.get("/ajax_decode/", {r_area : ra, rv : rot }, function(data) {
            // Меняем текст тега на полученные данные расшифровки
            $("#left_area").val(data.result);
        });
    });
});

// Обработка графиков по анализу введенного текста
$(document).ready(function () {
    // JQuery.
    // .keyup() - устанавливает обработчик возвращения клавиши клавиатуры..
    // .. в ненажатое состояние, либо, запускает это событие.
$("#left_area").keyup(function(){
    // для статистики переведем все в нижний регистр
    var pre_val = String($(this).val());
    var value = pre_val.toLowerCase();
    //var avar = parseInt(value);
    var v_a = 0, v_b = 0, v_c = 0, v_d = 0, v_e = 0;
    var v_f = 0, v_g = 0, v_h = 0, v_i = 0, v_j = 0;
    var v_k = 0, v_l = 0, v_m = 0, v_n = 0, v_o = 0;
    var v_p = 0, v_q = 0, v_r = 0, v_s = 0, v_t = 0;
    var v_t = 0, v_u = 0, v_v = 0, v_w = 0, v_x = 0;
    var v_y = 0, v_z = 0;
    //26 букв
    // a b c d e f g h i j k l m n o p q r s t u v w x y z
    if (value.match(/[a\?\<]/g)){
        v_a = value.match(/[a\?\<]/g).length;    
    } 
    if (value.match(/[b\?\<]/g)){
        v_b = value.match(/[b\?\<]/g).length;    
    }
    if (value.match(/[c\?\<]/g)){
        v_c = value.match(/[c\?\<]/g).length;    
    }
    if (value.match(/[d\?\<]/g)){
        v_d = value.match(/[d\?\<]/g).length;    
    }  
    if (value.match(/[e\?\<]/g)){
        v_e = value.match(/[e\?\<]/g).length;    
    }
    if (value.match(/[f\?\<]/g)){
        v_f = value.match(/[f\?\<]/g).length;    
    }
    if (value.match(/[g\?\<]/g)){
        v_g = value.match(/[g\?\<]/g).length;    
    }
    if (value.match(/[h\?\<]/g)){
        v_h = value.match(/[h\?\<]/g).length;    
    }
    if (value.match(/[i\?\<]/g)){
        v_i = value.match(/[i\?\<]/g).length;    
    }  
    if (value.match(/[j\?\<]/g)){
        v_j = value.match(/[j\?\<]/g).length;    
    }
    if (value.match(/[k\?\<]/g)){
        v_k = value.match(/[k\?\<]/g).length;    
    }
    if (value.match(/[l\?\<]/g)){
        v_l = value.match(/[l\?\<]/g).length;    
    }
    if (value.match(/[m\?\<]/g)){
        v_m = value.match(/[m\?\<]/g).length;    
    }
    if (value.match(/[n\?\<]/g)){
        v_n = value.match(/[n\?\<]/g).length;    
    }  
    if (value.match(/[o\?\<]/g)){
        v_o = value.match(/[o\?\<]/g).length;    
    }
    if (value.match(/[p\?\<]/g)){
        v_p = value.match(/[p\?\<]/g).length;    
    }
    if (value.match(/[g\?\<]/g)){
        v_g = value.match(/[g\?\<]/g).length;    
    }
    if (value.match(/[h\?\<]/g)){
        v_h = value.match(/[h\?\<]/g).length;    
    }
    if (value.match(/[i\?\<]/g)){
        v_i = value.match(/[i\?\<]/g).length;    
    }  
    if (value.match(/[j\?\<]/g)){
        v_j = value.match(/[j\?\<]/g).length;    
    }
    if (value.match(/[q\?\<]/g)){
        v_q = value.match(/[q\?\<]/g).length;    
    }
    if (value.match(/[r\?\<]/g)){
        v_r = value.match(/[r\?\<]/g).length;    
    }
    if (value.match(/[s\?\<]/g)){
        v_s = value.match(/[s\?\<]/g).length;    
    }
    if (value.match(/[t\?\<]/g)){
        v_t = value.match(/[t\?\<]/g).length;    
    }  
    if (value.match(/[u\?\<]/g)){
        v_u = value.match(/[u\?\<]/g).length;    
    }
    if (value.match(/[v\?\<]/g)){
        v_v = value.match(/[v\?\<]/g).length;    
    }
    if (value.match(/[w\?\<]/g)){
        v_w = value.match(/[w\?\<]/g).length;    
    }
    if (value.match(/[x\?\<]/g)){
        v_x = value.match(/[x\?\<]/g).length;    
    }  
    if (value.match(/[y\?\<]/g)){
        v_y = value.match(/[y\?\<]/g).length;    
    }
    if (value.match(/[z\?\<]/g)){
        v_z = value.match(/[z\?\<]/g).length;    
    }
    // Переменная chart - содержит главные параметры для построения
    // Canvas.JS графиков.       
    var chart = new CanvasJS.Chart("chartContainer", {
        title:{
            text: "# Chars in textarea"              
        },
        data: [              
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "a",  y: v_a  },
                { label: "b",  y: v_b  },
                { label: "c",  y: v_c  },
                { label: "d",  y: v_d  },
                { label: "e",  y: v_e  },
                { label: "f",  y: v_f  },
                { label: "g",  y: v_g  },
                { label: "h",  y: v_h  },
                { label: "i",  y: v_i  },
                { label: "j",  y: v_j  },
                { label: "k",  y: v_k  },
                { label: "l",  y: v_l  },
                { label: "m",  y: v_m  },
                { label: "n",  y: v_n  },
                { label: "o",  y: v_o  },
                { label: "p",  y: v_p  },
                { label: "q",  y: v_q  },
                { label: "r",  y: v_r  },
                { label: "s",  y: v_s  },
                { label: "t",  y: v_t  },
                { label: "u",  y: v_u  },
                { label: "v",  y: v_v  },
                { label: "w",  y: v_w  },
                { label: "x",  y: v_x  },
                { label: "y",  y: v_y  },
                { label: "z",  y: v_z  }
            ]
        }
        ]
    });
    // Сформировать график
    chart.render();
}).keyup();
});

// События 'Alert' сообщений, которые реагируют на наведение мышки
// на блок по значению id
// $().show - показать элемент/блок;
// $().hide - скрыть элемент/блок;
$(document).ready(function(){
    $("#Alert-rotn").hide();
    $("#Alert-la").hide();
    $("#Alert-ra").hide();
    // Показ сообщения при наведении на блок .rotn
    $(".rotn").mouseenter(function(){
        $("#Alert-rotn").show();
    });
    $(".rotn").mouseleave(function(){
        $("#Alert-rotn").hide();
    });
    // Показ сообщения при наведении на блок id="left_area"
    $("#left_area").mouseenter(function(){
        $("#Alert-la").show();
    });
    $("#left_area").mouseleave(function(){
        $("#Alert-la").hide();
    });
    // Показ сообщения при наведении на блок id="right_area"
    $("#right_area").mouseenter(function(){
        $("#Alert-ra").show();
    });
    $("#right_area").mouseleave(function(){
        $("#Alert-ra").hide();
    });
});