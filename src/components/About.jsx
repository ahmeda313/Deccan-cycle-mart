import img from "../assets/bicycle-transparent.png"

export default function About(){
    return(
        <>
        <div className="sm:mt-8" id="about">
            <h1 className='p-4 text-4xl sm:text-6xl font-bold'>
                About us
            </h1>
        </div>
        {/*  */}
        <div className="bg-cyan-700 h-fit sm:h-96 sm:flex items-center justify-around rounded-md mb-8">
        <div className="pt-1 h-5/6">
                <img src={img} alt="bicycle" className="h-full mt-8"  />
        </div>

            <div className="p-6 sm:w-1/2 text-white">
                <h1 className="text-3xl font-semibold mb-2"> We belive in quality</h1>
                <p className="p-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis totam quasi autem corporis inventore impedit facere quos animi, error beatae repellat qui odio expedita voluptatum. Voluptatem expedita odio deleniti quae!
                </p>
                <p className="hidden sm:block p-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis totam quasi autem corporis inventore impedit facere quos animi, error beatae repellat qui odio expedita voluptatum. Voluptatem expedita odio deleniti quae!
                </p>
            </div>

        </div>
        
        </>
    )
}