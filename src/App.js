
import Base from "./components/base";
import Features from "./components/features";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Homes from "./components/homes";
import Realtors from "./components/realtors";
import Sidebar from "./components/sidebar";
import Typography from "./components/typography";
import Story from "./components/story";

export default function App(){
    return(
       <>
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <Story />
        <Homes />
        <Gallery />
        <Footer />
       </>
    )
}

