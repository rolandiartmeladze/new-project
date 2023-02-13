function myFunction() {
  const x = document.querySelector("ul");
  x.style.display = x.style.display === "block" ? "none" : "block";
}



function callFunction(item) {
  var block = document.getElementById("section");
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      var article = document.createElement("article");
      var h1 = document.createElement("h1");
      var p = document.createElement("p");
      var img = document.createElement("img");
      article.style.width = "90%";
      article.style.margin = "5%";
      h1.innerHTML = item.saxeli;
      p.innerHTML = item.agwera;
      img.src = item.foto;
      article.append(img, h1, p);
      block.appendChild(article);
    });
}

function mtavari() {



  const block0 = document.getElementById("section_chvensshesaxeb");
  const block = document.getElementById("section_newpost");
  const block1 = document.getElementById("section_shemotavazebuli");
  const block2 = document.getElementById("section_gundi");
  const createSection = (sectionBlock, title) => {
    const div = document.createElement("div");
     div.className = "sectionid";
    div.innerText = title;
    sectionBlock.append(div);
  };

  createSection(block0, "ჩვენს შესახებ");
  createSection(block, "უახლესი განცხადებები");
  createSection(block1, "შემოთავაზებული");
  createSection(block2, "გუნდის წევრები");
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const createArticle = (sectionBlock, item) => {
        const article = document.createElement("article");
        const h1 = document.createElement("h1");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const button = document.createElement("button");
        const imgdiv = document.createElement("div");
              imgdiv.className= "imgdiv";
        h1.innerText = item.saxeli;
        img.src = item.foto;
        p.innerText =
          item.agwera.length > 100
            ? item.agwera.substring(0, 100) + "..."
            : item.agwera;
        button.innerText = "მეტის ჩვენება";
        sectionBlock.append(article);
        imgdiv.append(img);
        article.append(imgdiv, h1, p, button);
        article.id = item.saxeli;
      };

      data.kategoria[0].gancxadeba.slice(0, 4).forEach((item) => {
        createArticle(block, item);
      });

      data.shemotavazebuli.slice(0, 4).forEach((item) => {
        createArticle(block1, item);
      });
      var button = document.createElement("button");
      button.id = "btn_gundi";
      button.innerText= "ყველას ჩვენება";

      data.gundi.forEach((item) => {
        var article = document.createElement("article");
        var img = document.createElement("img");
        var h1 = document.createElement("h1");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");
        var p6 = document.createElement("p");
        var imgdiv = document.createElement("div");
        imgdiv.className = "imgdiv";
        img.src = item.foto;
        h1.innerText = item.saxeli;
        p1.innerText = item.pozicia;
        p2.innerText = item.ganatleba;
        p3.innerText = item.gamocdileba;
        p4.innerText = item.telfoni;
        p5.innerText = item.misamarti;
        p6.innerText = item.meili;
        imgdiv.append(img);
        article.append(imgdiv, h1,p1,p2,p3,p4,p5,p6)
        block2.append(article, button);
      });
      
            data.chvens_shesaxeb.forEach((item) => {
              var article = document.createElement("article");
              var p = document.createElement("p");
              var button = document.createElement("button");
              var imgdiv = document.createElement("div");
              var img = document.createElement("img");
              imgdiv.className ="imgdiv";
              img.src = item.foto;
              p.innerText = item.agwera;
              button.innerText = "გაიგე მეტი";
        imgdiv.append(img);
        p.append(button);
        article.append(imgdiv, p);
        block0.appendChild(article);
      });



    });
}



function side_newposts() {
  var list_newpost = document.getElementById("list_newpost");
  var list_shemotavazebuli = document.getElementById("list_shemotavazebuli");
  var list_kategoria = document.getElementById("list_kategoria");
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
        data.shemotavazebuli.forEach(item => {
          var li = document.createElement("li");
          li.id = item.saxeli;
          var link = document.createElement("a");
          link.href = "blank.html";
          li.innerText = item.saxeli;
          li.addEventListener("click", ()   => callFunction(item));
          link.append(li);
          list_shemotavazebuli.append(link);
});

        




      data.kategoria[0].gancxadeba
        .slice(0, 6)
        .forEach(item => {
          var li = document.createElement("li");
          var link = document.createElement("a");
          link.href = "blank.html";
          li.innerText = item.saxeli;
          link.append(li);
          li.addEventListener("click", () => callFunction(item));
          list_newpost.append(link);
        });
      data.kategoria.forEach((item, index) => {
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.href = "post.html";
        li.innerText = "კატეგორიები " + item;
        link.append(li);
        li.addEventListener("click", () => callFunction(item));
        list_kategoria.append(link);
      });
    })
    .catch(error => console.error("Error fetching JSON:", error));
}
