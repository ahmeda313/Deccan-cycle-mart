import atlas from "../assets/brands/atlas.png"
import avon from "../assets/brands/avon.png"
import bsa from "../assets/brands/bsa.png"
import dodge from "../assets/brands/dodge.png"
import firefox from "../assets/brands/firefox.png"
import gang from "../assets/brands/gang.png"
import hercules from "../assets/brands/hercules.jpg"
import kross from "../assets/brands/kross.png"
import montra from "../assets/brands/montra.png"
import nintyone from "../assets/brands/nintyone.jpg"
import redeo from "../assets/brands/redeo.png"
import schnell from "../assets/brands/schnell.png"
import stryder from "../assets/brands/stryder.jpg"

export default function Others(){
    return(
        <section class="bg-cyan-700 rounded-md">
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-black  md:text-4xl">You’ll be in good company</h2>
        <div class="grid grid-cols-2 gap-8 text-black sm:gap-12 md:grid-cols-3 lg:grid-cols-6 ">
            <img src={atlas} alt="atlas" />
            <img src={avon} alt="avon" />
            <img src={bsa} alt="bsa" />
            <img src={dodge} alt="dodge" />
            <img src={firefox} alt="firefox" />
            <img src={gang} alt="gang" />
            <img src={hercules} alt="hercules" />
            <img src={kross} alt="kross" />
            <img src={montra} alt="montra" />
            <img src={nintyone} alt="nintyone" />
            <img src={redeo} alt="redeo" />
            <img src={schnell} alt="schnell" />
            <img src={stryder} alt="stryder" />








        </div>
    </div>
</section>
    )
}