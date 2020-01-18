let text = `Городничий: Я пригласил вас, господа, с тем чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович: Как ревизор?
Артемий Филиппович: Как ревизор?
Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович: Вот те на!
Артемий Филиппович: Вот не было заботы, так подай!
Лука Лукич: Господи Боже! еще и с секретным предписаньем!`;
let roles = ["Городничий","Аммос Федорович", "Артемий Филиппович", "Лука Лукич"];

let amountOfRoles = roles.length;// количетсво ролей в пьесе
let arrayReplics = text.split("\n"); //  строка текста становиться массивом реплик
let arrayReplicsLenght = arrayReplics.length // количтсесво реплик в пьесе



//цикл добавлет нумирацию реплик 
for(let z=0; z<arrayReplicsLenght;z++)
{
    arrayReplics[z] = (z+1) +") "+ arrayReplics[z];
}


 for(let i=0; i<amountOfRoles;i++){ //цикл ролей

    //вставка ФИО героя в окно (значение i)
    let role = document.createElement('div');
    role.className = "roleName";
    role.innerHTML=roles[i] + ":";
    document.body.append(role);

    //проверем каждую реплику пьесы. Находим говорит ли эту реплику герой i
     for(let y=0; y<arrayReplicsLenght; y++) //цикл реплик
     {
         if(arrayReplics[y].includes(roles[i])){ //если в реплике y есть слова i
             let start=arrayReplics[y].indexOf(roles[i]);//начало ФИО
             let end=start+roles[i].length +1;//конец ФИО
             let replic = arrayReplics[y].substring(0,start)+ arrayReplics[y].substring(end); //реплика без ФИО
             //вставка реплик в окно
             let replicDiv = document.createElement('div');
             replicDiv.className = "replic";
             replicDiv.innerHTML=replic;
             document.body.append(replicDiv);
             console.log(replic);
         }
     }
     
     //вставка таба между блоками
     let tab = document.createElement('div');
     tab.className = "tab";
     document.body.append(tab);
 }