import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
<<<<<<< HEAD
  const productData = useSelector((state) => state.product)

  useEffect(() => {
    (async () => {
=======
  const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
>>>>>>> e6e82dc8f6524e4c16e3aa266baecb4a77dee8d7
      const res = await fetch(`https://food-backend-mern.onrender.com/product`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
<<<<<<< HEAD
  }, [])
=======
  },[])
>>>>>>> e6e82dc8f6524e4c16e3aa266baecb4a77dee8d7

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
