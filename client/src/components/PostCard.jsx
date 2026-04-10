import { useState } from "react";
import styled from "styled-components";

/* CARD */
const Card = styled.div`
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  margin-bottom: 16px;
  transition: 0.2s;

  &:hover {
    background-color: var(--hover);
  }
`;

/* USER ROW */
const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
`;

const UserInfo = styled.div``;

const Username = styled.div`
  font-weight: 600;
`;

const Handle = styled.div`
  color: var(--text-secondary);
  font-size: 14px;
`;

/* TEXT */
const PostText = styled.div`
  margin-top: 8px;
  font-size: 15px;
`;

/* ACTIONS */
const Actions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${({ liked }) =>
    liked ? "#ff3b5c" : "var(--text-secondary)"};
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    color: ${({ liked }) =>
      liked ? "#ff3b5c" : "var(--text)"};
  }
`;

/* COMMENTS */
const CommentsWrapper = styled.div`
  margin-top: 12px;
  border-top: 1px solid var(--border);
  padding-top: 12px;
`;

const Comment = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

const CommentUser = styled.span`
  font-weight: 600;
  margin-right: 6px;
`;

const CommentInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);

  &:focus {
    outline: none;
    border-color: #555;
  }
`;

const CommentButton = styled.button`
  border: none;
  background: var(--accent);
  color: black;
  padding: 6px 12px;
  border-radius: 999px;
  cursor: pointer;
`;

export default function PostCard() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(12);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    { id: 1, user: "maria", text: "Много як пост!" },
    { id: 2, user: "ivan", text: "Съгласен съм 🔥" }
  ]);                        



  return (
    <Card>
      {/* USER */}
      <UserRow>
        <Avatar />
        <UserInfo>
          <Username>Iliyan</Username>
          <Handle>@iliyan_dev</Handle>
        </UserInfo>
      </UserRow>

      {/* TEXT */}
      <PostText>
        Това е примерен пост. В момента UI-то е хардкоднато, но по-късно ще го вържем със Supabase.
      </PostText>

      {/* ACTIONS */}
      <Actions>
        <ActionButton liked={liked} onClick={handleLike}>
          ❤️ {likes}
        </ActionButton>

        <ActionButton onClick={() => setShowComments(!showComments)}>
          💬 {comments.length}
        </ActionButton>
      </Actions>

      {showComments && (
        <CommentsWrapper>

          {/* LIST */}
          {comments.map(c => (
            <Comment key={c.id}>
              <CommentUser>@{c.user}</CommentUser>
              {c.text}
            </Comment>
          ))}

          {/* INPUT */}
          <CommentInputWrapper>
            <CommentInput
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />

            <CommentButton
              onClick={() => {
                if (!commentText.trim()) return;

                setComments(prev => [
                  ...prev,
                  {
                    id: Date.now(),
                    user: "you",
                    text: commentText
                  }
                ]);

                setCommentText("");
              }}
            >
              Post
            </CommentButton>
          </CommentInputWrapper>

        </CommentsWrapper>
      )}                          
    </Card>
  );
}