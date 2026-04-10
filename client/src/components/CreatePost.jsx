import { useState } from "react";
import styled from "styled-components";

/* CARD / MODAL */
const Wrapper = styled.div`
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  margin-bottom: ${({ isModal }) => (isModal ? "0" : "16px")};
  width: ${({ isModal }) => (isModal ? "100%" : "auto")};
`;

/* FORM */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* TEXTAREA */
const TextArea = styled.textarea`
  resize: none;
  min-height: 80px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background-color: var(--bg);
  color: var(--text);
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #555;
  }
`;

/* BUTTON */
const Button = styled.button`
  align-self: flex-end;
  background-color: var(--accent);
  color: #000;
  border: none;
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

export default function CreatePost({ onClose, isModal }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    console.log("New post:", text);

    setText("");

    if (onClose) onClose();
  };

  return (
    <Wrapper isModal={isModal}>
      <Form onSubmit={handleSubmit}>
        <TextArea
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button type="submit">Post</Button>
      </Form>
    </Wrapper>
  );
}