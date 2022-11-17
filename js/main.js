$(document).ready(function () {
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1200,
    responsive: true,
    pager: true,
  });

  // posts
  var posts = [
    {
      title: "Titulo del Articulo 1",
      date:
        "Plublicado el dia: " +
        moment().date() +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corrupti temporibus iure reiciendis nemo velit vel nesciunt possimus rem perspiciatis qui aspernatur rerum odit dolorem saepe quibusdam ipsa prae sentium amet earum tenetur impedit. Quos eius amet minima soluta animi  iste!",
    },
    {
      title: "Titulo del Articulo 2",
      date:
        "Plublicado el dia: " +
        moment().date() +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corrupti temporibus iure reiciendis nemo velit vel nesciunt possimus rem perspiciatis qui aspernatur rerum odit dolorem saepe quibusdam ipsa prae sentium amet earum tenetur impedit. Quos eius amet minima soluta animi  iste!",
    },
    {
      title: "Titulo del Articulo 3",
      date:
        "Plublicado el dia: " +
        moment().date() +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corrupti temporibus iure reiciendis nemo velit vel nesciunt possimus rem perspiciatis qui aspernatur rerum odit dolorem saepe quibusdam ipsa prae sentium amet earum tenetur impedit. Quos eius amet minima soluta animi  iste!",
    },
    {
      title: "Titulo del Articulo 4",
      date:
        "Plublicado el dia: " +
        moment().date() +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corrupti temporibus iure reiciendis nemo velit vel nesciunt possimus rem perspiciatis qui aspernatur rerum odit dolorem saepe quibusdam ipsa prae sentium amet earum tenetur impedit. Quos eius amet minima soluta animi  iste!",
    },
    {
      title: "Titulo del Articulo 5",
      date:
        "Plublicado el dia: " +
        moment().date() +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corrupti temporibus iure reiciendis nemo velit vel nesciunt possimus rem perspiciatis qui aspernatur rerum odit dolorem saepe quibusdam ipsa prae sentium amet earum tenetur impedit. Quos eius amet minima soluta animi  iste!",
    },
    {
        title: "Titulo del Articulo 6",
        date:
          "Plublicado el dia: " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corrupti temporibus iure reiciendis nemo velit vel nesciunt possimus rem perspiciatis qui aspernatur rerum odit dolorem saepe quibusdam ipsa prae sentium amet earum tenetur impedit. Quos eius amet minima soluta animi  iste!",
      },
  ];
  posts.forEach((item, index) => {
    var post = ` 
    <article class="post">
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>
      <p>
        ${item.content}
      </p>
      <a href="#" class="button-more">
        Leer mas
      </a>
    </article> 
    `;
    $("#posts").append(post);
  });

  // Selector del theme
  var theme = $("#theme")
  $("#to-green").click(function(){
    theme.attr("href", "css/green.css");
  });

  $("#to-blue").click(function(){
    theme.attr("href", "css/blue.css");
  });

  $("#to-red").click(function(){
    theme.attr("href", "css/red.css");
  });

  // Scroll arriba de la web
  $(".subir").click(function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false
  })


});
