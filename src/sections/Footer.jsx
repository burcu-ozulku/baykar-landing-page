import { footerLinks, socialMedia } from "../assets/constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start py-12 flex-wrap max-lg:flex-col">

        <div className="flex flex-1 justify-between lg:gap-10 gap-12 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-roboto text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-roboto text-base leading-normal"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col items-start">
            <p className="font-roboto text-base font-medium text-white-200">Follow Us</p>
            <div className="flex items-center gap-4 mt-8">
              {socialMedia.map((icon) => (
                <div
                  key={icon.src}
                  className="flex justify-center items-center w-12 h-12"
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-roboto cursor-pointer">
          <p>Collers @ 2023. All rights reserved.</p>
        </div>
        <p className="font-roboto cursor-pointer">Terms</p>
      </div>
    </footer>
  );
};

export default Footer;
