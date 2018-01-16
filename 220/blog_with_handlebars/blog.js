var post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde <strong>omnis</strong> iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: [ 'voluptatem', 'laudantium', 'aspernatur'],
};


var postTemplate = Handlebars.compile($('#post').html());

$('main').append(postTemplate(post));
