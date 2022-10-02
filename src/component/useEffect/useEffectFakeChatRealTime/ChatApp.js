import React, { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: "Reactjs la gi va tai sao phai hoc reactjs",
  },
  {
    id: 2,
    name: "SPA/MPA la gi?",
  },
  {
    id: 3,
    name: "Arrow function",
  },
];

const ChatApp = () => {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  const handleClick = (id) => {
    setLessonId(id);
  };
  return (
    <ul>
      {lessons.map((lesson) => (
        <li
          key={lesson.id}
          style={{
            color: lessonId === lesson.id ? "#fa4400" : "#ccc",
            cursor: "pointer",
          }}
          onClick={() => handleClick(lesson.id)}
        >
          {lesson.name}
        </li>
      ))}
    </ul>
  );
};

export default ChatApp;
