//git hub에 있는 label들 받아오기
app.get('/getIssuesLabels', function(req, res){
    //1. issue 받기
    var issues = github.getIssues('MinSikMoon', 'links');
    //2. label받아오기
    issues.listLabels('',function(err, result, req){
        try {
            res.send(result);
        } catch (err) {
            console.log(err);
        }
    })
})
