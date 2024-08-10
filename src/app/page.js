// imports
import Dropzone from "@/components/dropzone"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Free <span className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Unlimited</span> File Converter
        </h1>
        <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
        Meet Zipzy, the best alternative to Convertio and CloudConvert for transforming images, audio, and videos. Enjoy total freedom and zero cost—say goodbye to limits and hello to endless possibilities for file conversions!
        </p>
      </div>

      <Dropzone />
      <Footer />
    </div>
  )
}
