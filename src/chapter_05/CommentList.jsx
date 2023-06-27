import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "헌우",
        comment: "안녕하세요. 반이 아빠입니다!",
    },
    {
        name: "반이",
        comment: "안녕하세요. 반이입니다!",
    },
    {
        name: "수연",
        comment: "안녕하세요. 반이 엄마입니다!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;