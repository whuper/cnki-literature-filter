;(function () {

 var page_host = window.location.host;

console.log('page_host ',page_host);

if(page_host.indexOf('zjgsu') != -1 || page_host.indexOf('idp') != -1){

     setTimeout(() => {

          document.getElementById("username").value= "20020181225";
          document.getElementById("password").value= "168232";

     }, 500);

     setTimeout(() => {

          // var idp_form = document.forms[0];
          var login_Btn = document.getElementsByTagName('button')[0];
          // idp_form.submit();

          login_Btn.click()

     }, 500);


}

if(typeof jQuery == 'undefined'){
     console.log('没有 JQUERY');
     return
}


     var literatureList = [
          '管理世界',
          '中国工业经济',
          '中国软科学',
          '南开管理评论',
          '科研管理',
          '科学学研究',
          '数量经济技术经济研究',
          '科学学与科学技术管理',
          '研究与发展管理',
          '经济管理',
          '企业管理',
          '科技导报',
          '营销科学学报',
          '市场营销导刊',
          '销售与市场',
          '中外管理导报',
          '外国经济与管理',
          '管理信息系统',
          '运筹与管理',
          '中国管理科学',
          '系统工程理论与实践',
          '管理科学学报',
          '管理工程学报',
          '企业经济',
          '心理科学'];

var a_color = "background: rgb(248, 177, 173); color: rgb(0, 128, 0)";

     console.log("%c 这是 inject.js ！", a_color);

     $(document).ajaxComplete(function () {
          console.log('aC')
          debounce(handle, 1500);
     });

     let timer;

     function debounce(fn, wait) {   
          //return function(){
          if (timer !== null) {
               window.clearTimeout(timer);
          }
          timer = window.setTimeout(fn, wait);
          // }
     }

     function handle() {
          // console.log(Math.random());
          console.log('aC2', 'ajaxComplete');
          let literature = $("div.sidebar-filter");

          if (literature) {

               let ddbox = literature.find('dd[tit="文献来源"],dd[tit="期刊"]');
               if (ddbox) {

                    let alinks = ddbox.find('div.resultlist ul li a');
                    if (alinks && alinks.length > 0) {

                         console.log(literatureList);

                         for (let index = 0; index < alinks.length; index++) {
                              var $element = alinks.eq(index);

                              console.log($element.text());

                              if (literatureList.includes($element.text())) {
                                   // console.log('匹配到 ', $element.text());
                                   console.log("%c 匹配到" + $element.text(), a_color);
                                   $element.addClass('wenhao-highlight')
                                   // element.css()
                              }

                         }

                         /*   alinks.forEach(element => {
                                
                           }); */

                         //.css("border","2px solid red");

                    } else {

                         console.log('没有期刊');
                    }



               }


          }


     } // handle end

     $("ul.doctype-menus").find('li[data-id="xsqk"]').on('click',function(){

          setTimeout(() => {
         
               var extend_labels = $("div.extend-tit-labels")
        
               let core_check = extend_labels.find('input[name="core"]')
               if(core_check.length > 0){
                    console.log('core_check ',core_check.html());
                    console.log('已创建');

               } else {
                   
                    var all_check =  extend_labels.find('label').eq(0)
                    console.log('### ',all_check.length);
                    $("<label class='core-label'> <input name='core' type='checkbox'  /> 核心期刊 </label>").insertAfter(all_check);

                    $('input[name="core"]').on('click',function(){

                         var core_items = extend_labels.find('label input').filter(":gt(1)")

                         if ($(this).prop("checked")) {

                              core_items.attr("checked", 'checked')
                              
                          } else {
                              core_items.attr("checked", '')
                          }

                    })

               }

               
          }, 1500);


     })



})();
