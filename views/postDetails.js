module.exports = function(post){
     
      if (!post.id) {
            return (
            `
            <!DOCTYPE html>
            <html>
            <head>
                  <title>Wizard News</title>
                  <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                  <header><img src="/logo.png"/>Wizard News</header>
                  <div class="not-found">
                  <p>Accio Page! 🧙‍♀️ ... Page Not Found</p>
                  <img src="/dumbledore-404.gif" />
                  </div>
            </body>
            </html>
            `
            );
            
            } else {
            return (
            `
                  <!DOCTYPE_html>
                  <html>
                  <head>
                  <title>Wizard News</title>
                  <link rel="stylesheet" href="/style.css" />
                  </head>
                  <body>
                  <div class="news-list">
                        <header><img src="/logo.png"/>Wizard News</header>
                  <div class="news-item">
                  <p>
                        ${post.title}
                        <small>(by ${post.name})</small>
                  </p>
                  <p>
                        ${post.content}
                  </p>
                  </body>
                  </html>
            `
            )
      }
}