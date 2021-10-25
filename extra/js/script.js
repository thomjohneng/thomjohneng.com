 $(function () {
            var mediumPromise = new Promise(function (resolve) {
            var $content = $('#jsonContent');
            var data = {
                rss: 'https://medium.com/@thom.john.eng'
            };
            $.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40thom.john.eng&api_key=nxddlp9haya0auwg6lu6spzdkvgoxczyikul8rmr', data, function (response) {
                if (response.status == 'ok') {
                    $("#logo").append(`<img src="${response.feed["image"]}" class="rounded mx-auto d-block">`)
                    var display = '';
                    $.each(response.items, function (k, item) {
                        display += `<div class="card mx-auto" id="cardItem">`;
                        var src = item["thumbnail"]; // use thumbnail url
                        display += `<div class="row" id="cardRow">`;
                        display += `<div class="col-3" id="cardLeft">`;
                        display += `<img src="${src}" class="card-img" id="cardImg" alt="Cover image">`;
                        display += `</div>`;
                        display += `<div class="col-9" id="cardRight">`
                        display += `<div class="card-body">`;
                        display += `<div class="cardTitle"><a href="${item.link}">${item.title}</a></div>`;
                        var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
                        yourString = yourString.replace('h4', 'div');
                        yourString = yourString.replace('h3', 'div');
                        var maxLength = 140; // Max Characters to display
                        //trim string
                        var trimmedString = yourString.substr(0, maxLength);
                        //re-trim if in the middle of a word
                        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
                        display += `<div class="cardText">${trimmedString}...</div>`;
                        display += '</div></div></div></div>';
                        return k < 8;
                    });

                    resolve($content.html(display));
                }
            });
            });

mediumPromise.then(function()
            {
                //Pagination
                pageSize = 4;

                var pageCount = $(".card").length / pageSize;

                for (var i = 0; i < pageCount; i++) {
                    $("#pagin").append(`<li class="page-item"><a class="page-link" href="#">${(i + 1)}</a></li> `);
                }
                $("#pagin li:nth-child(1)").addClass("active");
                showPage = function (page) {
                    $(".card").hide();
                    $(".card").each(function (n) {
                        if (n >= pageSize * (page - 1) && n < pageSize * page)
                            $(this).show();
                    });
                }

                showPage(1);

                $("#pagin li").click(function () {
                    $("#pagin li").removeClass("active");
                    $(this).addClass("active");
                    showPage(parseInt($(this).text()))
                    return false;
                });
            });
        });
