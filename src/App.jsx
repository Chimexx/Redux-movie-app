import React from "react";
// import { Switch } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/movie/:movieId" element={<MovieDetail />} />
						<Route path="/*" element={<PageNotFound />} />
					</Routes>
				</div>
				<div className="footer">
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
