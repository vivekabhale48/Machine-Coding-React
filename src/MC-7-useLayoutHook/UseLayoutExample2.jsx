import { useLayoutEffect, useRef, useState } from "react"
export const UseLayoutExample2 = () => {

  const [messages, setMessages] = useState(["Hello!", "How are you?", "Welcome!"]);
  const chatRef = useRef(null);

  useLayoutEffect(() => {
    // Scroll to the bottom before the browser paints the UI
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]); // Runs every time messages update

  return (
    <div className="mt-10">
      <h2 className="font-bold">Chat Messages</h2>
      <div
        ref={chatRef}
        style={{
          width: "300px",
          height: "150px",
          border: "1px solid black",
          overflowY: "auto",
          padding: "10px"
        }}
      >
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <button className="bg-[#eee] p-2 mt-5 rounded border" onClick={() => setMessages([...messages, "New Message!"])}>
        Add Message
      </button>
    </div>
  );
}