
//swiper insert
let swiper = new Swiper(".mySwiper", {});

// carousel PC start

$(function(){
    let timer = null;
    let i = 0;
    let sum = $("#carousel_pc a").length;
    let carousel_items = $("#carousel_pc>a");
    let list_carousel_items= $("#list>a");


    // start carousel

    function startCarousel(){

        let piccolo = carousel_items.eq(i).attr("data-color");

        carousel_items.eq(i).fadeIn().siblings().fadeOut(500, function (){
            $("#player").css("backgroundColor", piccolo)
        });

        list_carousel_items.eq(i).addClass("text-white text-decoration-underline bi-caret-right-fill").removeClass('text-white-50')
            .siblings().addClass('text-white-50').removeClass("text-white text-decoration-underline bi-caret-right-fill");
    }

    carousel_items.hover(function (){
        clearInterval(timer)
    }, function (){
        carousel();
    })

    //automatic play function
    function carousel(){
        clearInterval(timer);
        timer = setInterval(function (){
            i++;
            if(i === sum){
                i = 0;
            }

            startCarousel();

        },2000);
    }

    let piccolo = carousel_items.eq(0).attr("data-color");

    $("#player").css("backgroundColor",piccolo);

    list_carousel_items.eq(0).addClass("text-white text-decoration-underline bi-caret-right-fill").removeClass("text-white-50");
    // start play
    carousel();


    let htimer = null;

    for (let j = 0; j < list_carousel_items.length; j++) {
        list_carousel_items.mouseover(function (){
       let obj = $(this)
         htimer = setTimeout(function (){

             i = obj.index();
             clearInterval(timer);
             startCarousel();
             obj.addClass("text-danger").removeClass("text-white text-white-50")
         }, 500);




        }).mouseout(function (){
            $(this).addClass("text-white-50").removeClass(('text-danger'));
            clearTimeout(htimer);
            carousel();
        })

    }


});
//carousel end

// swiper_pc start
let num = 0;
let box = document.querySelectorAll(".box > div");
for (let i = 0; i < box.length; i++){
    var pointA = box[i];
    pointA.index = i;
    pointA.onmousemove = function (){
        num = this.index;
        for (var j = 0; j < box.length;j++){
            box[j].className = "swiper_pc"
        }
        box[num].className = "box_list";
    }

}
// swiper_pc end

//follow us start

//follow us end

//Your supervisor start
//The Jquery solution -- Important!!
// $(function () {
//     $('.teacher').hover(function (){
//         let data_i = $(this).attr('data-i');
//         switch (data_i) {
//             case '1':
//                 $("#teacher_pic").attr('src','images/supervisor/ray.png');
//                 $("#teacher-name").text('Ray Wen');
//                 $('#teacher-title').text('Webumate Senior Backend Developer & Easi IT Education Director');
//                 $('#teacher-desc').text('This is Ray, who graduated from the Australian National University. As a Bachelor of Mathematics and Master of Computing, I have a clear and deep understanding of the principles of programming, which give me the ability to analyze and refactor codes and make them more efficient. I worked as a programming teacher focusing on Java education three years ago and then I came to Australia to pursue a higher degree. I also have the experience of working as a full-stack web developer for a company to maintain, optimize, and add new features to their company. It is my pleasure to help our people build and improve their websites and I will do my best to satisfy our business partners.');
//                 break;
//             case '2':
//                 $("#teacher_pic").attr('src','images/supervisor/edusunjk.png');
//                 $("#teacher-name").text('Larry Liang');
//                 $('#teacher-title').text('Product Manager & Senior Technical Lecturer');
//                 $('#teacher-desc').text('This is Larry, who graduated from The Australian National University with a Master of Computing degree majored in Artificial Intelligence. I have been involved in the complete Software Development LifeCycle for more than six years now. As a System Design enthusiast and a Full Stack developer, I have experience building systems from scratch and have exe- cuted a few projects that are successful in production now. In the webU- mate, I am responsible for designing systems, implementing the backend technologies and also act as the Project manager directing the team to- wards the intended goal in a more efficient manner.');
//                 break;
//             case '3':
//                 $("#teacher_pic").attr('src','images/supervisor/eduliu.png');
//                 $("#teacher-name").text('David Sun');
//                 $('#teacher-title').text('asi Education CTO & Senior Technical Lecturer');
//                 $('#teacher-desc').text('This is David,graduated from the Australian National University. After graduation, I worked in a police check company as a front-end developer and led the team to build the front-end side of the individual portal as well as the business-portal. Now in webUmate, I have built many websites for business and organizations in different fields such as restaurants, higher education institutions, and one nursing service institution. In webUmate, my role is a front-end developer. Additionally, I am studying the knowledge about back-end development from my team members in webUmate. We are a team, and we can learn a lot from each other.');
//                 break;
//             case '4':
//                 $("#teacher_pic").attr('src','images/supervisor/eduxuxx.png');
//                 $("#teacher-name").text('Ben Xiong');
//                 $('#teacher-title').text('Easi Education Director & Senior Technical Lecturer');
//                 $('#teacher-desc').text('This is Ben, who graduated from the Australian National University. I used to work in Baidu AI technology platform Group in Baidu Online Net- work Technology (Beijing) Co.,Ltd and then joined Deeperception Pty.Ltd. At the current stage, I am serving as a mobile development engineer in webUmate. As a technical lover, I am more favoured in applying technolo- gy to serve society and extending humanity. In my personal life, I am passionate about hiking and badminton, and willing to meet new friends.');
//                 break;
//         }
//
//     }, function (){
//     })
// })
// $(function () {
//     $('.teacher').hover(function (){
//         $(this).children('.card').addClass('shadow');
//     }, function (){
//         $(this).children('.card').removeClass('shadow');
//     })
// })

let teacher = document.getElementsByClassName('teacher');

for (let i = 0; i< teacher.length;i++){
    let data_i = teacher[i].getAttribute("data-i");
    teacher[i].addEventListener("mouseover",function (){
       let teacher_pic = document.querySelector('#teacher_pic');
       let teacher_name = document.querySelector('#teacher-name');
       let teacher_title = document.querySelector('#teacher-title');
       let teacher_desc = document.querySelector('#teacher-desc');

       teacher[i].classList.add('shadow');

        switch (data_i) {
            case '1':
                teacher_pic.setAttribute('src','images/supervisor/ray.png');
                teacher_name.innerHTML=('Ray Wen');
                teacher_title.innerHTML=('Webumate Senior Backend Developer & Easi IT Education Director');
                teacher_desc.innerHTML=('This is Ray, who graduated from the Australian National University. As a Bachelor of Mathematics and Master of Computing, I have a clear and deep understanding of the principles of programming, which give me the ability to analyze and refactor codes and make them more efficient. I worked as a programming teacher focusing on Java education three years ago and then I came to Australia to pursue a higher degree. I also have the experience of working as a full-stack web developer for a company to maintain, optimize, and add new features to their company. It is my pleasure to help our people build and improve their websites and I will do my best to satisfy our business partners.');
                break;
            case '2':
                teacher_pic.setAttribute('src','images/supervisor/edusunjk.png');
                teacher_name.innerHTML=('Larry Liang');
                teacher_title.innerHTML=('Product Manager & Senior Technical Lecturer');
                teacher_desc.innerHTML=('This is Larry, who graduated from The Australian National University with a Master of Computing degree majored in Artificial Intelligence. I have been involved in the complete Software Development LifeCycle for more than six years now. As a System Design enthusiast and a Full Stack developer, I have experience building systems from scratch and have exe- cuted a few projects that are successful in production now. In the webU- mate, I am responsible for designing systems, implementing the backend technologies and also act as the Project manager directing the team to- wards the intended goal in a more efficient manner.');
                break;
            case '3':
                teacher_pic.setAttribute('src','images/supervisor/edutina.png');
                teacher_name.innerHTML=('Tina');
                teacher_title.innerHTML=('Easi Education CTO & Senior Technical Lecturer');
                teacher_desc.innerHTML=('This is Tina,graduated from the Australian National University. After graduation, I worked in a police check company as a front-end developer and led the team to build the front-end side of the individual portal as well as the business-portal. Now in webUmate, I have built many websites for business and organizations in different fields such as restaurants, higher education institutions, and one nursing service institution. In webUmate, my role is a front-end developer. Additionally, I am studying the knowledge about back-end development from my team members in webUmate. We are a team, and we can learn a lot from each other.');
                break;
            case '4':
                teacher_pic.setAttribute('src','images/supervisor/eduxuxx.png');
                teacher_name.innerHTML=('Ben Xiong');
                teacher_title.innerHTML=('Easi Education Director & Senior Technical Lecturer');
                teacher_desc.innerHTML=('This is Ben, who graduated from the Australian National University. I used to work in Baidu AI technology platform Group in Baidu Online Net- work Technology (Beijing) Co.,Ltd and then joined Deeperception Pty.Ltd. At the current stage, I am serving as a mobile development engineer in webUmate. As a technical lover, I am more favoured in applying technolo- gy to serve society and extending humanity. In my personal life, I am passionate about hiking and badminton, and willing to meet new friends.');
                break;
        }
    })
    teacher[i].addEventListener("mouseout",function (){
        teacher[i].classList.remove('shadow');
    })
}

//Your supervisor end

//Compare part start
$(function (){
    $('#pk').children('.row').hover(function (){
        $(this).css('background', '#AAA');
    },function (){
        $(this).css('background', '#FFF');
    } )

})

//compare part end

//Training part batter start --- object oriented

$(function (){
    function DC(obj){
        this.self = obj;

        this.atimer = null;

    //    charge function
        this.charge = function (bgcolor){
             this.h = 127;
             this.num = 0;
             this.self.css("paddingTop", this.h + 'px');

            for (var i = 0; i < 21; i++) {
                $('<div class="charge_block"></div><div style="background:'+bgcolor+'" class="charge"></div>').appendTo(this.self);
            }

            let tobj = this;
            this.atimer = setInterval(function (){
                if(tobj.num % 5 === 0){
                    if(tobj.h > 0){
                        tobj.self.css("paddingTop", tobj.h + 'px');
                    } else {
                        tobj.h = 127;
                    }
                    tobj.h -= 6;
                }

                    tobj.num++;

                    if(tobj.num >= 120){
                        tobj.num = 120;
                    }

                    if (tobj.num < 22) {
                        tobj.self.children('.days').html(tobj.num + "level<br>starter").css("color", "blue");
                    } else if (tobj.num < 55) {
                        tobj.self.children('.days').html(tobj.num + "level<br>mid-level").css("color", "darkolivegreen");
                    } else if (tobj.num < 82) {
                        tobj.self.children('.days').html(tobj.num + "level<br>high-level").css("color", "whitesmoke");
                    } else if (tobj.num < 100) {
                        tobj.self.children('.days').html(tobj.num + "level<br>super-level").css("color", "wheat");
                    } else {
                        tobj.self.children('.days').html(tobj.num + "level<br>God-like").css("color", "white");
                    }

            }, 100);
        }

    //    Click function

        this.userevent = function (bgcolor){
            let tobj = this;
            this.self.click(function (){
                clearInterval(tobj.atimer);
                tobj.charge(bgcolor);
            }).mouseover(function (){
                $(this).css('borderColor',"blue");
                $(this).children('charge').css('backgroundColor', "blue");
                $(this).prev('.battery_top').css('backgroundColor', "blue");

            }).mouseout(function (){
                $(this).css('borderColor', bgcolor);
                $(this).children('charge').css('backgroundColor', bgcolor);
                $(this).prev('.battery_top').css('backgroundColor', bgcolor);
            });


        }
    }

    let battery1 = new DC($('#add1'));

    battery1.charge("#ff00ff");
    battery1.userevent("#ff00ff")

    let battery2 = new DC($('#add2'));
    battery2.charge("#ffff00");
    battery2.userevent("#ffff00")

    let battery3 = new DC($('#add3'));
    battery3.charge("#00ffff");
    battery3.userevent("#00ffff")
    }


)

//Training part batter end
