document.addEventListener('DOMContentLoaded',function(){

    let sum=0;
    let major=0;
    let s1=0;
    let s2=0;
    let s=0;

    function traslateGrade(char){
        switch(char){
            case 'A'    : return 4;     break;
            case 'B+'   : return 3.5;   break;
            case 'B'    : return 3;     break;
            case 'C+'   : return 2.5;   break;
            case 'C'    : return 2;     break;
            case 'D+'   : return 1.5;   break;
            case 'D'    : return 1;     break;
            case 'F'    : return 0;     break;
        }
    }

    document.querySelector('form').onsubmit = function(){
        const course = document.querySelector("#course").value;
        const semester = document.querySelector("#semester").value;
        const grade = document.querySelector("#grade").value;

        const task = document.querySelector('table')
        const list = document.createElement('tr');
        const dataC = document.createElement('td');
        const dataS = document.createElement('td');
        const dataG = document.createElement('td');
        const remove = document.createElement('button');

        switch(semester){
            case '1':
            case '2':
        }

        dataC.innerHTML = course;
        list.append(dataC);
        dataS.innerHTML = semester;
        list.append(dataS);
        dataG.innerHTML = grade;
        list.append(dataG);
        remove.innerHTML = 'x';
        list.append(remove);
        remove.onclick = function(){
            task.removeChild(list);
        }

        task.append(list);
        return false;
    }

    document.querySelector('select').onchange = function(){
        const data = document.querySelector('select').value;

        if(data=='gpa'){

        }else if(data=='major'){

        }else if(data=='semester1'){

        }else if(data=='semester2'){

        }else if(data=='summer'){

        }
    }
})