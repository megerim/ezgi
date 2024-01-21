import Logo from './logo'

export default function Footer() {
  return (
    <footer className='bg-primary'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        
        {/* <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Yazılarım</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Ebeveyn</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Ergen</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Çocuk</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Dikkat Eksikliği</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Kaygı</a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Hakkımda</h6>
            <ul className="text-sm">
            <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Otobiyografi</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Eğitimim</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Sertifikalarım</a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">İletişim</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Telefon</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Mail</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Nar Psikoloji Adres</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-700 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">NeoLine Psikoloji Adres</a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Mail Listesi</h6>
            <p className="text-sm text-gray-700 mb-4">Mail listeme abone olarak yeni atölyelerden, yazılardan, etkinliklerden ve kampanyalardan anında haberdar olabilirsiniz.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Mailiniz" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>yy
                  <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p>
                </div>
              </div>
            </form>
          </div>

        </div> */}

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 mt-2 md:ml-4 md:mb-0">
              <li>
                <a
                  href="#0"
                  className="flex justify-center items-center text-gray-700 hover:text-white bg-white hover:bg-black ring-black ring-1 hover:ring-2  rounded-full shadow transition duration-300 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>

              <li className="ml-4">
                <a
                  href="whatsapp://send?phone=+905436715805"
                  className="flex justify-center items-center text-gray-700 hover:text-green-700 bg-white hover:bg-green-500 ring-green-600 ring-1 hover:ring-2  rounded-full shadow transition duration-300 ease-in-out"
                  aria-label="Whatsapp"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-current text-green-600 hover:text-white"
                  >
                    <path
                      d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li className="ml-4">
                <a
                  href="#0"
                  className="flex justify-center items-center text-gray-700 bg-white hover:bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 ring-fuchsia-500 ring-1 hover:ring-2 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.7 56.7"
                    className="w-8 p-1 h-8 fill-current text-gray-700 hover:text-white"
                    enableBackground="new 0 0 56.7 56.7"
                  >
                    <g>
                      <path
                        d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                      />
                      <circle cx="41.5" cy="16.4" r="2.9" />
                      <path
                        d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>

          {/* Copyrights note */}
          <div className="text-sm text-secondary mr-4">&copy; ZeynepEzgiKaya.com. Tüm hakları saklıdır. | </div>

        </div>

      </div>
    </footer>
  )
}
