var posts = [{
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde <strong>omnis</strong> iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: [ 'voluptatem', 'laudantium', 'aspernatur'],
}, {
  title: 'Mauris eu odio mattis',
  published: (new Date).toUTCString(),
  body: 'Mauris eu odio mattis, ultricies neque vitae, volutpat justo. Aenean vehicula mauris a tortor finibus tempus vel in quam. Cras nec maximus massa. Donec a lacus ac sapien porta feugiat ut maximus turpis. In at sodales mauris. Donec suscipit tincidunt lacus, rhoncus facilisis lectus tincidunt tincidunt. Pellentesque viverra purus et magna luctus finibus. Maecenas convallis vehicula posuere. Sed ac sollicitudin purus. Suspendisse vel velit pulvinar mauris vulputate lacinia eget dignissim lacus. Phasellus eu eros eu mauris suscipit laoreet.',
}]
;


var postTemplate = Handlebars.compile($('#posts').html());
var tags = Handlebars.compile($('#tags').html());
Handlebars.registerPartial('tags', $('#tags').html());

$('main').append(postTemplate({posts: posts}));
