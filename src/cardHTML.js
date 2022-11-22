const cardHTML = ({icon, employeeName, position, idNum, email, thirdOpt, thirdOptInput}) => `
<div class="card">
<div class="card-content">
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48">
        <img src="${icon}" alt="Placeholder image">
      </figure>
    </div>
    <div class="media-content">
      <p class="title is-4">${name}</p>
      <p class="subtitle is-6">${role}</p>
    </div>
  </div>
  <div class="content">
    <p class="box">ID: ${id}</p>
    <p class="box">Email: <a href="${email}">${email}</a></p>
    <p class="box">${thirdOpt}: ${thirdOptInput}</p>
  </div>
</div>
</div>`

module.exports = {
    cardHTML
}