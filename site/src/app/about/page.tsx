// import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-black">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey, influences, and the story behind the music.
          </p>
        </div>
      </section>
      
      {/* Bio section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Profile image */}
            <div className="w-full md:w-1/3 aspect-square bg-gray-800 rounded-lg relative overflow-hidden">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
                Your Photo Here
              </div>
            </div>
            
            {/* Bio text */}
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">The Story</h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum 
                  magna eget sem maximus, vitae efficitur justo dapibus. Praesent tempor volutpat 
                  velit, ut molestie eros mollis ac.
                </p>
                
                <p>
                  Fusce gravida vel urna a convallis. Fusce nec pharetra magna. Nulla 
                  facilisi. Morbi gravida metus sit amet ligula malesuada tincidunt. Nulla 
                  tristique urna ut justo ornare, et maximus dui varius.
                </p>
                
                <p>
                  Donec feugiat eros et velit condimentum, vel faucibus ex convallis. Sed 
                  tincidunt sem et eros tempus malesuada. Vestibulum ante ipsum primis in 
                  faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Influences section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Musical Influences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace with your actual influences */}
            {['Influence 1', 'Influence 2', 'Influence 3', 'Influence 4', 'Influence 5', 'Influence 6'].map((name, index) => (
              <div key={index} className="bg-black p-6 rounded-lg">
                <div className="w-full aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                  Image
                </div>
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-400">
                  Brief description of how this artist or genre has influenced your musical style and approach.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Equipment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills</h3>
              <ul className="space-y-4">
                {[
                  'Music Production',
                  'Sound Design',
                  'Mixing & Mastering',
                  'Composition',
                  'Live Performance',
                  'Instrument 1',
                  'Instrument 2'
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Equipment */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Equipment</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-2">Software</h4>
                  <ul className="text-gray-300">
                    <li>DAW 1</li>
                    <li>Plugin Suite 1</li>
                    <li>Virtual Instrument 1</li>
                    <li>Virtual Instrument 2</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-2">Hardware</h4>
                  <ul className="text-gray-300">
                    <li>Audio Interface</li>
                    <li>MIDI Controller</li>
                    <li>Microphones</li>
                    <li>Instruments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 px-4 bg-purple-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let&#39;s Work Together</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Interested in collaborating or booking me for your event? Get in touch!
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-purple-900 py-3 px-8 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}