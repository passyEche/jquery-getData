$(document).ready(function () {
    $('#idnewTutBtn').on('click', () => {
        $('#newForm').toggle()
        // alert('toggle')
    })
   
    //Get All Post
    getTutorials()
    function getTutorials() {
        $('#tutorialsBody').html('');
        $.ajax({
            url: 'http://localhost:5000/tutorial/all',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data)
                $(data).each(function (i, tutorial) {
                    $('#tutorialsBody').append($("<tr>")
                        .append($("<td>").append(tutorial.title))
                        .append($("<td>").append(tutorial.author))
                        .append($("<td>").append(tutorial.tutorialType))
                        .append($("<td id='eche'>").append(tutorial._id))
                        .append($("<td>").append(`<button class="del" data-tutIdD="` + tutorial._id + `">Delete</button>
                            <button id="edit" data-tutIdE="`+ tutorial._id + `">update</button>`)))
                })
            }
        })
    }

    // Making Post Forms
    $('#submitTutorial').on("click", function (e) {
        e.preventDefault();
        let data = {
            title: $($("#newForm")[0].title).val(),
            author: $($("#newForm")[0].author).val(),
            tutorialType: $($("#newForm")[0].tutorialType).val()
        }
        postForm(data);
        $("#newForm").trigger("reset");
        // alert(data.title)
        function postForm(data) {
            $.ajax({
                url: 'http://localhost:5000/tutorial/',
                method: 'POST',
                datatype: 'json',
                data: data,
                success: function (data) {
                    console.log(data)
                    getTutorials();
                },
                error: function (err) {
                    console.log(err)
                }
            })

        }

    })


    $('td.del').on('click', function () {
        // alert($($(this)[0]).data("tutIdD"));
        let id = $($(this)[0]).data("tutIdD");
        $.ajax({
            url: 'http://localhost:5000/tutorial/' + id,
            method: 'DELETE',
            dataType: 'json',
            success: function (data) {
                console.log(data)
                getTutorials();
            }
        })

    })


    

})

