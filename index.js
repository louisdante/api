// var twitter = require('twitter');
// var readline = require('readline');

// var twit = new twitter({
//     consumer_key: '	KqEVSet8JInpr4Ughton8Pdxc',
//     consumer_secret: 'Ne3YNu9bM4KDUx3dNpwQ6tRcuaPDc9D2tnMVWAYjGZ5oDFODWA',
//     access_token_key: '380363171-YKT46bY5ohfwiVCkuivZ46sPoIQ0JBskvMzsY8qA',
//     access_token_secret: 'fPewYfM95l4kXVDMxfyN687trZGtCHdsc1fIzeaGKncao'
// });

// var rl = readline.createInterface(process.stdin, process.stdout);
// // rl.question('enter username? ', function(user) {
// //     // TODO: Log the answer in a database
// //     var options = {
// //         screen_name: user,
// //         count: 3
// //     };
// //     twit.get('statuses/user_timeline', options, function(err, data, response) {
// //         for (var i = 0; i < data.length; i++) {
// //             console.log(data[i].text);
// //         }
// //     });
// //     rl.close();
// // });




var tweet = require('twitter');
var readline = require('readline');

twit = new tweet({
    consumer_key: 'KqEVSet8JInpr4Ughton8Pdxc',
    consumer_secret: 'Ne3YNu9bM4KDUx3dNpwQ6tRcuaPDc9D2tnMVWAYjGZ5oDFODWA',
    access_token_key: '380363171-YKT46bY5ohfwiVCkuivZ46sPoIQ0JBskvMzsY8qA',
    access_token_secret: 'fPewYfM95l4kXVDMxfyN687trZGtCHdsc1fIzeaGKncao',
});

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Hello there!");
rl.question('Please enter 1 to get tweets or 2 to post tweets  ', (opt) => {

    if (opt == 1) {
        rl.question('Please enter the USERID for tweets? ', (user) => {

            var options = {
                screen_name: user,
                count: 3
            };
            twit.get('statuses/user_timeline', options, function(err, data, response) {
                for (var i = 0; i < data.length; i++) {
                    console.log('\nTweets ' + '----> ' + data[i].text + '\n');
                }
            });
            rl.close();
        });
    } else if (opt == 2) {
        rl.question('Please enter the USERID to post tweets? ', (user) => {
            var options = user;
            twit.post('statuses/update', { status: option }, function(err, data, response) {
                console.log(data)
            });
        });
    } else {
        console.log('Please enter 1 or 2 to use this app');
    }

});