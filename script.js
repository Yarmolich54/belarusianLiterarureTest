var countText = document.getElementById('countText');
var quesCont = document.getElementById('quesCont');
var ansCont1 = document.getElementById('ansCont1');
var ansCont2 = document.getElementById('ansCont2');
var ansCont3 = document.getElementById('ansCont3');
var ansCont4 = document.getElementById('ansCont4');

var questionNum = 0;
var rightCount = 0;

var rightAnswers = 
    [3, // 1
    1, // 2
    3, // 3
    4, // 4
    3, // 5
    4, // 6
    1, // 7
    1, // 8
    2, // 9
    4,]; // 10

countText.innerHTML = `${questionNum+1}/${rightAnswers.length}`;
quesCont.innerHTML = "У якім годзе нарадзіўся Іван Шамякін?";
ansCont1.innerHTML = "1914";
ansCont2.innerHTML = "1918";
ansCont3.innerHTML = "1921";
ansCont4.innerHTML = "2004";

var i = -1;
nextButton = document.getElementById('next');
nextButton.addEventListener('click', function() {
    rightAnswerBlock = document.getElementById(`contAns${rightAnswers[i]}`);
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer == undefined || selectedAnswer == null || selectedAnswer == 0) {
        console.log('ответ не выбран');
    } else {
        i++;
    }

    console.log("i= "+i);
    console.log(selectedValue);
    if (selectedAnswer) {
        const selectedValue = selectedAnswer.value;
        var selectedValueNum = parseFloat(selectedValue);
        selectedAnswer.checked = false;
    } else {
        selectedAnswer.checked = false;
    }

    if (selectedValueNum == rightAnswers[i]) {
        rightCount++;
        console.log(`Кол-во правильных ответов ${rightCount}`);
        rightAnswerBlock.style.border = '0.1vw solid green';
    } else {
        rightAnswerBlock.style.border = '0.1vw solid green';
        document.getElementById(`contAns${selectedValueNum}`).style.border = '0.1vw solid red';
    }

    
    setTimeout(function(){ 
        questionNum++;
        console.log(questionNum);
        if (questionNum == 1) {
        quesCont.innerHTML = "Бацька Івана Шамякіна называў сына ў дзяцінстве “шут гарохавы”. Чаму?";
        ansCont1.innerHTML = "Ён лоўка навучыўся насіць на галаве стос кніг";
        ansCont2.innerHTML = "У Івана былі здольнасці да акцёрскага майстэрства";
        ansCont3.innerHTML = "У яго было яскравае пачуцце гумару";
        ansCont4.innerHTML = "Ён быў пасьмешышчам для ўсёй вёскі";
        } else if (questionNum == 2) {
        quesCont.innerHTML = "Калі Іван Шамякін пазнаёміўся са сваёй будучай жонкай?";
        ansCont1.innerHTML = "На фронце, падчас вайны";
        ansCont2.innerHTML = "Адразу пасля вайны";
        ansCont3.innerHTML = "Калі вучыўся ў пятым классе";
        ansCont4.innerHTML = "У тэхнікуме";
        } else if (questionNum == 3) {
        quesCont.innerHTML = "Пісьменнік лічыў, што на магілах творцаў павінны стаяць не скульптурныя партрэты, а...";
        ansCont1.innerHTML = "Цукеркі";
        ansCont2.innerHTML = "Выявы грэчаскіх муз";
        ansCont3.innerHTML = "Каменныя вазы з кветкамі";
        ansCont4.innerHTML = "Паэтычныя сімвалы";
        } else if (questionNum == 4) {
        quesCont.innerHTML = "У якіх вайсках падчас вайны служыў Іван Шамякін?";
        ansCont1.innerHTML = "У пехоце";
        ansCont2.innerHTML = "У авіяцыі";
        ansCont3.innerHTML = "У артылерыі";
        ansCont4.innerHTML = "У марскім флоце";
        } else if (questionNum == 5) {
        quesCont.innerHTML = "Калі адбываюцца падзеі рамана 'Сэрца на далоні'?";
        ansCont1.innerHTML = "Пачатак XIX стагодзя";
        ansCont2.innerHTML = "Падчас Першай Сусветнай вайны";
        ansCont3.innerHTML = "Падчас Другой Сусветнай вайны";
        ansCont4.innerHTML = "У 1960-я гады";
        } else if (questionNum == 6) {
        quesCont.innerHTML = "Што звязвае Антона Яраша і Зосю Савіч у рамане 'Сэрца на далоні'?";
        ansCont1.innerHTML = "Зося выратавала Яраша ў гады Вялікай Айчыннай вайны";
        ansCont2.innerHTML = "Іх яднае першае каханне";
        ansCont3.innerHTML = "Яны вучыліся ў адной школе";
        ansCont4.innerHTML = "Яны брат і сястра";
        } else if (questionNum == 7) {
        quesCont.innerHTML = "Хто з герояў рамана сапраўды трымае ў руках чалавечае сэрца?";
        ansCont1.innerHTML = "Антон Яраш";
        ansCont2.innerHTML = "Тарас Ганчароў";
        ansCont3.innerHTML = "Кірыл Шыковіч";
        ansCont4.innerHTML = "Сямён Гукан";
        } else if (questionNum == 8) {
        quesCont.innerHTML = "Хто выканаў галоўную ролю ў фільме 'Вазьму твой боль'?";
        ansCont1.innerHTML = "Леанід Рахленка";
        ansCont2.innerHTML = "Уладзімір Гасцюхін";
        ansCont3.innerHTML = "Глеб Глебаў";
        ansCont4.innerHTML = "Дзмітрый Пучкоў";
        } else if (questionNum == 9) {
        quesCont.innerHTML = "Імем пісьменніка названа адна з вуліц...";
        ansCont1.innerHTML = "Гомеля";
        ansCont2.innerHTML = "Пінска";
        ansCont3.innerHTML = "Мазыра";
        ansCont4.innerHTML = "Мінска";
        } else {
        quesCont.innerHTML = `Тэст пройдзен. ${rightCount}/${rightAnswers.length} правiльныя`;
        document.querySelector('.answers_block').style.display = 'none';
        document.querySelector('.buttons').style.display = 'none';
        document.querySelector('.number_count_block').style.display = 'none';
    }
    countText.innerHTML = `${questionNum+1}/${rightAnswers.length}`;
    rightAnswerBlock.style.border = 'none';
    document.getElementById(`contAns${selectedValueNum}`).style.border = 'none';
    }, 1500);
});