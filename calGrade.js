document.addEventListener('DOMContentLoaded',function(){

    let sum=0;
    let major=0;
    let s1=0;
    let s2=0;
    let s=0;
    let sum_c=0;
    let major_c=0;
    let s1_c=0;
    let s2_c=0;
    let s_c=0;

    function translateGrade(char){
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

        const tran_g = translateGrade(grade);

        switch(semester){
            case '1':   s1 += tran_g; 
                        sum += tran_g;
                        s1_c++;
                        sum_c++;
                        break;
            case '2':   s2 += tran_g; 
                        sum += tran_g;
                        s2_c++;
                        sum_c++;
                        break;
            case '3':   s += tran_g; 
                        sum += tran_g;
                        s_c++;
                        sum_c++;
                        break;
            default: break;
        }

        if((Math.floor(course/1000) == 261) || (Math.floor(course/1000) == 269)){
            major += tran_g;
            major_c++;
        }

        console.clear
        console.log('sum = '+sum);
        console.log('major = '+major);
        console.log('s1 = '+s1);
        console.log('s2 = '+s2);
        console.log('s = '+s);

        dataC.innerHTML = course;
        list.append(dataC);
        dataS.innerHTML = semester;
        list.append(dataS);
        dataG.innerHTML = grade;
        list.append(dataG);
        remove.innerHTML = 'x';
        list.append(remove);
        remove.onclick = function(){

            const trans_g = translateGrade(dataG.innerHTML);

            switch(dataS.innerHTML){
                case '1':   s1 -= trans_g;
                            sum -= trans_g;
                            s1_c--;
                            sum_c--;
                            break;
                case '2':   s2 -= trans_g; 
                            sum -= trans_g;
                            s2_c--;
                            sum_c--;
                            break;
                case '3':   s -= trans_g; 
                            sum -= trans_g;
                            s_c--;
                            sum_c--;
                            break;
                default: break;
            }
    
            if((Math.floor(dataC.innerHTML/1000) == 261) || (Math.floor(dataC.innerHTML/1000) == 269)){
                major -= trans_g;
                major_c--;
            }

            console.clear
            console.log('sum = '+sum);
            console.log('major = '+major);
            console.log('s1 = '+s1);
            console.log('s2 = '+s2);
            console.log('s = '+s);

            task.removeChild(list);
        }

        task.append(list);
        return false;
    }

    document.querySelector('select').onchange = function(){
        const data = document.querySelector('select').value;
        const grade = document.querySelector('#m-grade');

        if(data=='gpa'){
            grade.innerHTML = "is " + sum/sum_c;
        }else if(data=='major'){
            grade.innerHTML = "is " + major/major_c;
        }else if(data=='semester1'){
            grade.innerHTML = "is " + s1/s1_c;
        }else if(data=='semester2'){
            grade.innerHTML = "is " + s2/s2_c;
        }else if(data=='summer'){
            grade.innerHTML = "is " + s/s_c;
        }
    }
})