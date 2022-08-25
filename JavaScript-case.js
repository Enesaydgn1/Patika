var section = document.getElementById("remainder");  // section adında global bir değişken oluşturdum ve remainder id'sini section değişkenine eşitledim.
var oddOrEven = document.getElementById("oddoreven");  // oddOrEven adında global bir değişken oluşturdum ve oddoreven id'sini oddoreven değişkenine eşitledim. 
                                                            //Çünkü işlemlerin sonunda kullanıcıya arkada yapılan işlemleri görüntülemek için kullanacağım.

document.getElementById("btnGet").addEventListener("click", function () {  // Butona tıkladığında fonksiyon içerisine girecek ve işlemleri uygulayacak. 

    var number = document.getElementById("number").value;  // html'deki inputumun value'sini number değişkenime aktardım.   

    if (number % 2 == 0) {      // number değişkenimi mod'unu hesaplatmak için 2 ile bölümünden kalan 0 ise true 
        oddOrEven.innerText = "Even "; // global olarak tanımladığım değişkenime koşulumu sağladıysa innerText özelliğini kullanarak html ekranıma Event yazdırdım.
        oddishOrEvenish(number); //  oluşturmuş olduğum fonksiyonuma sayımı göndermdim. 

    }
    else if (number % 2 == 1) { // number değişkenimi mod'unu hesaplatmak için 2 ile bölümünden kalan 1 ise true 
        oddOrEven.innerText = "Odd "; // global olarak tanımladığım değişkenime koşulumu sağladıysa innerText özelliğini kullanarak html ekranıma Odd yazdırdım.
        oddishOrEvenish(number); //  oluşturmuş olduğum fonksiyonuma sayımı göndermdim. 
    }


});


function oddishOrEvenish(number2) { //  oddishOrEvenish adında parametreli fonkisyon oluşturdum ve hesaplatmalarımı bu fonksiyon içerisinde yapacağım. 

    var sum = 0; //sum adında değişken oluşturdum ve 0'a eşitledim. toplanan verileri burada tutmak için. 
    while (number2) {   // bir while koşulu oluşurdum number2 değişkenimin içerisindeki değer 0 olana kadar dönecek.
        debugger
        sum += number2 % 10; // bu işlemde gelen sayıyı 10 sayısının modundan kalan kaç ise sum değişkenine ekliyorum ve number değişkenimi çıkan sonuca eşitliyorum. koşul devam ettikçe number2 içerisindeği değerleri sum ile oplayıp sum'a aktarıyorum.
        number2 = Math.floor(number2 / 10); // toplanan sayının 10 ile bölümünden kalan sayıyı yuvarlıyor böylece küsüratlı bir sonuç çıkmıyor ortaya 
    }   //  Örn : 43 sayısının 10 ile bölümünden kalan 3 değeri. bu değer sum değişkenine aktarılıyor.
         // artık sum değeri 3  ve number2 bölümünden çıkan sonuç 4  olduğu için number2 değeri 4 oluyor. tekrar koşul sağlanıyor. bu sefer 4 10 dan küçük ve kalan olmadığı için kalan 4 rakamını da sum değişkenim içerisindeki 3 ile toplayıp number2 değişkenini sıfırlıyorum ve koşulu sonrandırıp sum değişkenim ile işleme devam ediyorum.  
    

    if (sum % 2 == 0) { // sonucun  2 ile bölümünden  kalan 0 ise  true (ÇİFTTİR)
        const OddOrEven = document.getElementById("OddOrEven"); // OddOrEven adında değişken oluşurup OddOrEven id değişkenine tanımladım 
        OddOrEven.innerText = "Even"; // html tarafında oluşurmuş olduğum kısma yazdırdım
    }

    else if (sum % 2 == 1) { // üst satırda yaptığım şeyleri Odd için yaptım. 
        const OddOrEven = document.getElementById("OddOrEven");
        OddOrEven.innerText = "Odd";
    }

    remainder = sum % 2; // bu kısımda kalan kaç olduğunu hesaplatmak için remainder adında global değikenimi fonksiyonumun içerisine çağırıpsum içerisindeki değer 2 ile bölümünden kalanı değişkenime aktarıyorum.
    section.innerText = remainder; // html kısmına yazdırma işlemi yapıyorum. 
}




