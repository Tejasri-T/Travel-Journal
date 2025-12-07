import Entry from "./components/Entry.jsx";
import Header from "./components/Header.jsx";
import data from "./data.js";
// import Demo from "./components/demo.jsx";

const obj = { a: 1, b: 2 };

const x = { };
console.log(x);


export default function App() {

    const dataElements = data.map((place) => {
                    return <Entry
                    key={place.id}
                    {...place}
                    // img={place.img}
                    // title={place.title}
                    // country={place.country} 
                    // googleMapsLink={place.googleMapsLink}
                    // dates={place.dates}
                    // text={place.text}
                    />
                })

    return (
        <>
            {/* <Demo/> */}
            <Header />
            <main className="container">

                
                {dataElements}
            </main>
        </>


    )
}

