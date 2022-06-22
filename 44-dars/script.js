let rus = ['человек', 'люди','родители','отец','мать','папа','мама','брат','сестра','старший брат','младший брат','бабушка','дедушка','сирота','дядя','тетя','ребенок','дети','сын','дочь','жена','муж','супруг(а)','свекровь, теща','свекор, тесть','свояченица (сестра жены)','шурин (брат жены)','золовка (сестра мужа)','деверь (брат мужа)','зять','мачеха','отчим','родственник','племянник','племянница','близнецы, двойняшки','гость','сосед(ка)','невестка','невеста ','жених','мужчина','женщина ','мальчик','девушка','младенец, малыш','человечество','народ','детство','молодость, юность','молодежь','старый человек','старик','старуха','подросток','взрослый','несовершеннолетний','друг','враг','пол','язык','обычай','традиция','работа, дело','учеба','исследование','рабочий','сотрудник(ница)','водитель','врач, доктор, лекарь','целитель, лекарь','учник, ученица','переводчик(ца)','инженер','учитель(ница)','строитель','бухгалтер','пилот, летчик','мясник','продавец, продавщица','торговец','игрок','танцор, танцовщица','певец','художник','больной, пациент','виновник','преступник','грешник','моряк, матрос','портной','лидер, вождь','начальник, руководитель','любовник','любовница','охранник','сторож','посол','раб, рабыня','слуга, служитель','горничная, служанка','предки','пророк','паломник','раненый','господин, госпожа','труп','обманщик','лжец, врун, лгун(ья)','мошенник','невысокий человек, карлик, лилипут','убийца','известный','знаменитый','подхалим, подлиза','спонсор','поручитель','повар, повариха, кухарка','космонавт','зубной врач, стоматолог','охотник','помощник(ца)','дежурный','хвастун','заложник','наследник, наследница','представитель, агент','сваха']

let uzb =['odam','odamlar','ota-ona','ota','ona','dada','oyi','aka, uka','opa, singil','aka','uka','buvi','bobo','yetim','amaki, tog`a','амма, хоlа','bоlа','bolalar','o`g`il farzand','qiz farzand','xotin','er','turmush o`rtog`','qaynona','qaynota','qaynopa','qaynaka','qaynopa','qaynaka','pochcha, kuyov','o`gayona','o`gayota','qarindosh','o`g`il jiyan','qiz jiyan','egizaklar','mehmon','qo`shni','kelin','kelin (to`y	bo`layotgan)','kuyov (to`y bo`layotgan)','erkak kishi','ayol kishi','o`g`il bola','qiz bola','chaqaloq, go`dak','insoniyat','xalq','bolalik','yoshlik','yoshlar','qari odam','chol','kampir','o`smir','voyaga yetgan','voyaga yetmagan','do`st','dushman','jins','til','urf-odat','an`ana','ish','o`qish (tahsil)','tadqiqot','ishchi','xodim','haydovchi','shifokor','tabib','o`quvchi','tarjimon','muhandis','o`qituvchi','quruvchi','hisobchi','uchuvchi','qassob','sotuvchi','savdogar','o`yinchi','raqqos(a)','qo`shiqchi','rassom','bemor','aybdor','jinoyatchi','gunohkor','dengizchi','tikuvchi','yo`lboshchi','boshliq, rahbar','oshiq','ma`shuqa','qo`riqchi','qorovul','elchi','qul','xizmatchi','oqsoch','ajdodlar','payg`ambar','ziyoratchi','yarador','janob, xonim','murda','aldovchi','yolg`onchi','tovlamachi','pakana','qotil','taniqli','mashhur','laganbardor','homiy','kafil','oshpaz','fazogir','tish duxtur','ovchi','yordamchi','navbatchi','maqtanchoq','asir','merosxo`r','vakil','sovchi']

/*
let parent = document.querySelector('#parent')



rus.forEach((elem, index) => {
    parent.innerHTML +=   `<ul class="list-group list-group-horizontal">
    <li class="list-group-item w-50">${elem}</li>
    <li class="list-group-item w-50">${uzb[index]}</li>
    </ul>` 
})

let menyu = document.querySelector('.toogle')
let nav = document.querySelector('.nav-res')

menyu.addEventListener('click', () => {
    nav.classList.toggle('active')

    document.querySelector('.toggle-item').classList.toggle('active')
    menyu.classList.toggle('active')
})
*/

let title = document.querySelectorAll('.accor-title')
let body = document.querySelectorAll('.accor-item')

title.forEach((elem, index) => {
    elem.addEventListener('click', ()=>{
        body[index].classList.toggle('active')
    })
})
