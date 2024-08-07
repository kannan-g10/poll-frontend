import { useEffect, useState } from "react";
import Post from "./components/Post";
import PostInput from "./components/PostInput";
import { API_URL } from "./config/constants";

function App() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    async function getAllPolls() {
      try {
        const res = await fetch(API_URL + "/" + "polls");
        const polls = await res.json();
        setPolls(polls.data.polls);
      } catch (err) {
        console.error(err);
      }
    }

    const timer = setInterval(() => {
      getAllPolls();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:w-[70%] mx-auto">
      <PostInput />
      <div className="border border-pink-50 flex flex-col justify-center items-center">
        {polls?.map((poll) => (
          <Post key={poll._id} poll={poll} />
        ))}
      </div>
    </div>
  );
}

export default App;
