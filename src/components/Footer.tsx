

export default function Footer () {
  return (

    <footer
      className="flex flex-col items-center text-center text-surface bg-[#4B715F] text-white lg:text-left">
      <div className="container p-6">
        <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
          {/* First links section  */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>
    
            <ul className="mb-0 list-none">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
    
           {/* Second links section  */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>
    
            <ul className="mb-0 list-none">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
    
           {/* Third links section  */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>
    
            <ul className="mb-0 list-none">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
    
          {/*  Fourth links section  */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>
    
            <ul className="mb-0 list-none">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
      {/*  Copyright section  */}
      <div className="w-full bg-black/5 p-4 text-center">
        © 2023 Copyright:
        <a href="https://tw-elements.com/">TW Elements</a>
      </div>
    </footer>
  );
}