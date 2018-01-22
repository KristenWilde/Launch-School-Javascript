
var languages = [{
  name: 'Python',
  descrip: `<p>Python is an advanced programming language that is interpreted, object-oriented and built on flexible and robust semantics.</p>
  <p>Python lets you work quickly to integrate systems as a scripting or glue language. It’s also suited for Rapid Application Develop (RAD).</p>
  <ul>
    <li>Simple to learn and easily read</li>
    <li>Associated web frameworks for developing web-based applications</li>
    <li>Free interpreter and standard library available in source or binary on major platforms</li>
  </ul>`
}, {
  name: 'Java',
  descrip: `<p>Java is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development.</p>
  <p>Java is used to develop enterprise-level applications for <span>video games and mobile apps, as well as to create web-based applications with JSP (Java Server Pages). When used online, Java allows applets to be downloaded and used through a browser, which can then perform a function not normally available.</p>
  <ul>
    <li>Application portability</li>
    <li>Robust and interpreted language</li>
    <li>Extensive network library</li>
  </ul></span>`,
}, {
  name: 'Ruby',
  descrip: `<p>Ruby is an open-sourced, object-oriented scripting language that can be used independently or as part of the Ruby on Rails web framework.</p>
  <p>Ruby is used for simulations, 3D modeling, and to manage and track information.</p>
  <ul>
    <li>Free to use, copy, modify and distribute</li>
    <li>Intuitive and flexible language</li>
    <li>Completely object-oriented (ability to use method chaining)</li>
  </ul>`,
}, {
  name: 'HTML',
  descrip: `<p>HTML (HyperText Markup Language) is the standard markup language used to create web pages; it ensures proper formatting of text and images (using tags) so that Internet browsers can display them in the ways they were intended to look.</p>
  <p>HTML is used to create electronic documents (pages) displayed online. Visit any page and you will see an example of HTML in action.</p>
  <ul>
    <li>Easy to use and learn the basics of HTML</li>
    <li>Free and accessible</li>
    <li>Multiple versions available</li>
  </ul>`,
}, {
  name: 'JavaScript',
  descrip: `<p>JavaScript is a client-side programming language that runs inside a client browser and processes commands on a computer rather than a server. It is commonly placed into an HTML or ASP file. Despite its name, JavaScript is not related to Java.</p>
  <p>JavaScript is used primarily in Web development to manipulate various page elements and make them more dynamic, including scrolling abilities, printing the time and date, creating a calendar and other tasks not possible through plain HTML. It can also be used to create games and APIs.</p>
  <ul>
    <li>Basic features are easy to learn</li>
    <li>Multiple frameworks</li>
    <li>Users can reference JQuery, a comprehensive Javascript library</li>
  </ul>`,
}, {
  name: 'C Language',
  descrip: `<p>C Language is a structure-oriented, middle-level programming language mostly used to develop low-level applications.       </p>
  <p>C Language is used to develop systems applications that are integrated into operating systems such as Windows, UNIX and Linux, as well as embedded softwares. Applications include graphics packages, word processors, spreadsheets, operating system development, database systems, compilers and assemblers, network drivers and interpreters.</p>
  <ul>
    <li>Simple to learn; there are only 32 keywords to master</li>
    <li>Easy to write systems programs such as compilers and interpreters</li>
    <li>Foundational language for beginners</li>
  </ul>`,
}, {
  name: 'C++',
  descrip: `<p>C++ is a general purpose, object-oriented, middle-level programming language and is an extension of C language, which makes it possible to code C++ in a “C style”. In some situations, coding can be done in either format, making C++ an example of a hybrid language.</p>
  <p>The C++ language is used to create computer programs and packaged software, such as games, office applications, graphics and video editors and operating systems.</p>
  <ul>
    <li>Often the first programming language taught at college level</li>
    <li>Quick processing and compilation mechanism</li>
    <li>Robust standard library (STL)</li>
  </ul>`,
}, {
  name: 'C#',
  descrip: `<p>Pronounced C-sharp (not C-hashtag), C# is a multi-paradigm programming language that features strong typing, imperative, declarative, functional, generic, object-oriented and component-oriented disciplines.</p>
  <p>C# helps developers create XML web services and Microsoft .NET-connected applications for Windows operating systems and the internet.</p>
  <ul>
    <li>Similar to Java in capabilities</li>
    <li>Ideal for beginners</li>
    <li>The go-to for working on Microsoft apps</li>
  </ul>`,
}, {
  name: 'Objective-C',
  descrip: `<p>Objective-C is a simple, general-purpose and object-oriented language. It uses a system of message passing borrowed from the language Smalltalk; when an object in Objective-C is sent a message, it can choose to ignore or forward to another object, rather than return a value.</p>
  <p>Objective-C is primarily used by developers to create apps for iOS and OS X.</p>
  <ul>
    <li>Increased flexibility with dynamic typing</li>
    <li>Often used alongside a framework such as Cocoa or Cocoa Touch</li>
    <li>Great first language for beginning programmers</li>
  </ul>`,
}, {
  name: 'PHP',
  descrip: `<p>PHP (Hypertext Preprocessor) is an open-source scripting language designed for creating dynamic web pages that effectively work with databases. It is also used as a general-purpose programming language.</p>
<p>PHP is primarily used alongside dynamic data-heavy websites to collect form data. It&#8217;s also used in app development to generate dynamic page content.</p>
<ul>
<li>Easy to learn (as simple as embedding code inside HTML)</li>
<li>Free and opensource</li>
<li>Can be used on all major operating systems and web servers</li>
</ul>`,
}, {
  name: 'SQL',
  descrip: `<p>SQL (Structured Query Language) is a database query language (not a development language) that allows for adding, accessing and managing content in a database. It is the language that allows programmers to perform the common acronym CRUD (Create; Read; Update; Delete) within a database.</p>
  <p>SQL interacts with the backend database of web application. It is the &#8220;de facto standard&#8221; database language, always used in conjunction with another programming language. SQL programs are implemented as a way for businesses and organizations to access and manipulate information stored in their databases.</p>
  <ul>
    <li>Simple syntax</li>
    <li>Free and easily accessible</li>
  </ul>`,
}, {
  name: 'Swift',
  descrip: `<p>Swift is Apple’s newest open-source, multi-paradigm programming language for iOS and OS X apps. Swift integrates Objective-C’s named parameters and object-oriented model, while including an advanced compiler, debugger and framework infrastructure.</p>
  <p>Swift is primarily used by developers to create apps for iOS and OS X.</p>
  <ul>
    <li>Supports ‘playgrounds,’ a feature that lets programmers experiment and see immediate results</li>
    <li>Easy to understand syntax</li>
    <li>Ideal for writing production-ready code</li>
  </ul>`,
}]
var element;

$(function() {
  var template = Handlebars.compile($('#template').html());
  $('main').append(template(languages));

  $('.description').each(function() {
    var fullContent = this.innerHTML;
    var snippet = fullContent.slice(0, 123) + ' . . .</p>';
    $(this).data('fullContent', fullContent);
    $(this).data('snippet', snippet);
    this.innerHTML = snippet;
  });

  $('main').on('click', 'button', function(e) {
    var $button = $(this);
    var $div = $button.parent().find('.description');
  
    if ($button.text() === 'Show More') {
      $div.html($div.data('fullContent'));
      $button.text('Show Less');
    } else {
      $div.html($div.data('snippet'));
      $button.text('Show More');
    }
  });
});