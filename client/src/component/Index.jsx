import Header from "./Header"
import Footer from "./Footer"
import Video from "./Video"
import Products from "./Products"
import PropTypes from "prop-types"

const Index = ({darkMode, setDarkMode}) => {


    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Video />
            <Products />
            <Footer darkMode={darkMode} />
        </div>
    )
};


export default Index

Index.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
};
