export default function Newsletter() {
  return (
    <section className="relative bg-green-50">
      <div className="max-w-6xl pt-20 mx-auto px-4 sm:px-6 bg-green-50">
        <div className="pb-12 md:pb-20 bg-green-50">

          {/* CTA box */}
          <div className="relative bg-green-700 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#E8F6DF" offset="10%" />
                    <stop stopColor="#96BF74" offset="44.317%" />
                    <stop stopColor="#2A2C38" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center ">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">No te pierdas ninguna actualización</h3>
                <p className="text-gray-300 text-lg mb-6">Te enviaremos un correo electrónico con cada actualización y nuevas características de la aplicación.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input rounded-lg w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Tu email…" aria-label="Tu email…" />
                    <a className="btn text-white bg-green-800 hover:bg-green-900 shadow rounded-lg" href="#0">Subscribir</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-300 mt-3">No es SPAM. puedes darte de baja en cualquier momento</p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}