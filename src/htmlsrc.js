const htmlsrc =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <title>Team Profile!</title>
</head>
<body>
    <section class="hero is-dark is-small">
        <div class="hero-body is-flex is-centered container">
          <div class="title">
            My Team!
          </div>
        </div>
    </section>

  <main>
    <div class="container">
        ${cards}
    </div>
  </main>
</body>
</html>`



module.exports = {
    htmlsrc
}