let url = window.location;
let title = document.title;
let mnsocial = document.getElementsByClassName('mn-social-bottom');
mnsocial[0].href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
mnsocial[1].href = 'https://twitter.com/home?status=' + url + ' ' + title;
mnsocial[2].href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + url;
mnsocial[3].href = 'mailto:?&subject=' + url + '&body=' + title + ', ' + url;
mnsocial[6].href = 'http://www.reddit.com/submit?url=' + url;
mnsocial[7].href = 'https://pinterest.com/pin/create/link/?url=' + url;