$(document).ready(function(){

    /*Reemplazar aqui los links de cada linea segun corresponda*/
   /* $('#lineaA').FeedEk({
        FeedUrl : 'https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml',
        MaxCount: 1,
        ShowDesc: true,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });
    */

    $('#lineaA').FeedEk({
        FeedUrl : 'http://172.30.180.10:3021/scp/rss.xml/A',
        MaxCount : 1,
        ShowDesc : true,
        ShowPubDate: true,
        DescCharacterLimit:100,
        TitleLinkTarget:'_blank',
        DateFormat : 'dd/MM/yyyy',
        DateFormatLang : 'en',
        Offset: 5,
        ShowAuthor: true,
        AuthorLabel:"Author:",
        Success: function (feedItems) { },
        Error: function (error) { }
    });

    $('#lineaB').FeedEk({
        FeedUrl : 'http://172.30.180.10:3021/scp/rss.xml/B',
        MaxCount: 1,
        ShowDesc: true,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

    $('#lineaC').FeedEk({
        FeedUrl : 'http://172.30.180.10:3021/scp/rss.xml/C',
        MaxCount: 1,
        ShowDesc: true,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

    $('#lineaD').FeedEk({
        FeedUrl : ' http://172.30.180.10:3021/scp/rss.xml/D',
        MaxCount: 1,
        ShowDesc: true,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

    $('#lineaE').FeedEk({
        FeedUrl : 'http://172.30.180.10:3021/scp/rss.xml/E',
        MaxCount: 1,
        ShowDesc: true,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

    $('#lineaH').FeedEk({
        FeedUrl : 'http://172.30.180.10:3021/scp/rss.xml/H',
        MaxCount: 1,
        ShowDesc: true,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

});