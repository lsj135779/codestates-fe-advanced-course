import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Detail from "./pages/Detail.jsx";
import Main from "./pages/Main.jsx";
import Header from "./components/Header.jsx";
import { getAllPostsData } from "./reducers/postSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      dispatch(getAllPostsData(res.data));
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* 카드 클릭했을 때 상세페이지 이동 경로 => useNavigator 사용 */}
        <Route path="/detail/:postId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
