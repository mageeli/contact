 $(document).ready(function() {
            $("#go").click(function(){
                 var name = $("#name").val();
                 var mobile = $("#mobile").val();
                 var email = $("#email").val();
                 var massege = $("#massege").val();
                 var dataString = "name=" + name + "&mobile=" + mobile + "&email=" + email + "&massege=" + massege + "&go=";
                 if($.trim(name).length > 0 & $.trim(mobile).length > 0 & $.trim(email).length > 0 & $.trim(massege).length > 0){
                    $.ajax({
                         type: "POST",
                         url:"http://zajel.ogail.net/contact_us.php",
                         data: dataString,
                         crossDomain: true,
                         cache: false,
                         beforeSend: function(){ 
                             $("#go").val('جاري الاتصال...');
                         },
                         success: function(data){
                             if(data=="success")
                             {
                              alert('تم اضافة طلبك');
                             $("#go").val('إرسال الرسالة');
                             }
                             else if(data=="error")
                             {
                             alert("error");
                             }
                         }
                    });
                }
                else{
                    alert('املاء جميع الحقول');
                }
                return false;
            });
        });