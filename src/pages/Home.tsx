import { FaGooglePlay, FaApple, FaChrome, FaArrowRight } from "react-icons/fa";
import hero from "../assets/hero.avif";
import Header from "../components/Header";
import { AiOutlineShop } from "react-icons/ai";
import avatar1 from "../assets/avatar/avatar1.png";
import avatar2 from "../assets/avatar/avatar2.jpeg";
import avatar3 from "../assets/avatar/avatar3.jpeg";
import shop from "../assets/shop.png";
import send from "../assets/send.avif";
import bank from "../assets/bank.png";
import card from "../assets/card.png";
import meme from "../assets/meme.png";
import overlay from "../assets/overlay.png";
import Footer from "../components/Footer";
const Home = () => {
  const downloadLinks = [
    {
      name: "Get it on",
      platform: "Google Play",
      link: "#",
      icon: <FaGooglePlay />,
    },
    {
      name: "Download on the",
      platform: "Apple Store",
      link: "#",
      icon: <FaApple />,
    },
    {
      name: "Available in the",
      platform: "Chrome Web Store",
      link: "#",
      icon: <FaChrome />,
    },
  ];

  const socialCard = [
    {
      avatar: avatar1,
      name: "Sir Doge of the Coin",
      handle: "@sir_doge",
      review: "MyDoge is an amazing doge wallet app created by fellow shibes!",
    },
    {
      avatar: avatar2,
      name: "Mishaboar",
      handle: "@mishaboar",
      review: "MyDoge wallet is lovely, simple, non-custodial, and secure.",
    },
    {
      avatar: avatar3,
      name: "Rachel",
      handle: "@doge_coin",
      review: "MyDoge is an amazing doge wallet app created by fellow shibes!",
    },
  ];
  return (
    <>
      <Header />
      <div className="container mx-auto mt-20 lg:mt-32 text-[#1e2327] w-full p-6 border-b border-gray-200">
        <section className="flex flex-col gap-7 justify-center items-center w-full lg:w-[80%] mx-auto pb-10">
          <div className="bg-[#fdfdea] border border-[#fdf6b2] rounded-xl px-4 py-3 cursor-pointer flex flex-row items-center gap-2 hover:scale-105 transition-all duration-300">
            <div className="flex flex-row gap-2 rounded-full text-[15px] size-10 bg-[#fdf6b2] text-white items-center justify-center">
              <AiOutlineShop className="text-2xl text-orange-700" />
            </div>
            <div className="hidden lg:block"> We just dropped some</div>
            <div className="block lg:hidden">Fresh:</div> 🔥 Doge Fashion, check
            it out!
          </div>
          <div className="text-[32px] lg:text-[68px] font-[800] lg:leading-[72px] text-center">
            The social wallet for the people's currency
          </div>
          <div className="text-lg text-center w-[90%] lg:w-full">
            MyDoge is a free and secure self-custodial Dogecoin wallet. Buy,
            send, receive, and store your Dogecoin safely!
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {downloadLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-row items-center gap-2 bg-[#1e2327] text-white px-4 py-2 rounded-lg whitespace-nowrap"
              >
                <div className="text-2xl">{link.icon}</div>
                <div className="">
                  <div className="text-xs font-light">{link.name}</div>
                  <div className="text-base font-semibold">{link.platform}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="relative mx-auto w-[95%]">
          <img src={hero} alt="hero" className="w-full h-full object-cover" />
        </div>

        <section className="flex flex-col gap-7 justify-center items-center w-full lg:w-[80%] mx-auto pb-10 mt-32">
          <div className="text-[28px] lg:text-[55px] font-[800] lg:leading-[72px] text-center">
            The #1 Dogecoin Wallet
          </div>
          <div className="text-lg text-center w-[90%] lg:w-full">
            Trusted by shibes worldwide
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {socialCard.map((card) => (
              <div
                className="flex flex-col gap-6 rounded-2xl p-6 pb-8 shadow-lg"
                key={card.name}
              >
                <div className="flex flex-row gap-3 items-center">
                  <img
                    src={card.avatar}
                    alt={card.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold">{card.name}</div>
                    <div className="text-sm font-light">{card.handle}</div>
                  </div>
                </div>
                <div className="text-base lg:text-lg font-light pr-4">
                  {card.review}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-7 justify-center items-center w-full lg:w-[80%] mx-auto pb-10 mt-32">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src={shop}
                alt="shop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <div className="text-[32px] lg:text-[50px] font-[800]">
                Shop the latest Doge fashion
              </div>
              <div className="text-base lg:text-lg">
                Show your love for Dogecoin while looking fresh with exclusive
                apparel from GetDoge.com
              </div>
              <button className="bg-[#fcd436] text-black px-4 py-2 rounded-full flex flex-row items-center gap-2 w-fit hover:scale-105 transition-all duration-300">
                Visit Store <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-20 items-center ">
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <div className="text-[32px] lg:text-[50px] font-[800]">
                Send & receive Doge tips on Twitter
              </div>
              <div className="text-base lg:text-lg">
                Earn tips for your awesome tweets, and send tips to friends or
                your favorite creators on Twitter!
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={send}
                alt="shop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-20 items-center ">
            <div className="w-full lg:w-1/2">
              <img
                src={bank}
                alt="bank"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <div className="text-[32px] lg:text-[50px] font-[800]">
                Be your own bank
              </div>
              <div className="text-base lg:text-lg">
                Your keys, your Dogecoin! Self-custody means nobody, not even
                MyDoge, can access your funds
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-20 items-center ">
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <div className="text-[32px] lg:text-[50px] font-[800]">
                Buy gift cards with Dogecoin
              </div>
              <div className="text-base lg:text-lg">
                Get discounts on gift cards to your favorite shops & restaurants
                when you pay with Doge
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={card}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-20 items-center ">
            <div className="w-full lg:w-1/2">
              <img
                src={meme}
                alt="meme"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <div className="text-[32px] lg:text-[50px] font-[800]">
                Share memes in the Dogeverse
              </div>
              <div className="text-base lg:text-lg">
                TikTok for memes? You bet. The Dogeverse is home to the dankest
                memes in the known universe
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-7 justify-center items-center w-full lg:w-[80%] mx-auto pb-10 mt-32">
          <div className="bg-[#fdfdea] relative w-full rounded-3xl lg:rounded-4xl p-4 lg:p-20 overflow-hidden">
            <img
              src={overlay}
              alt="overlay"
              className="absolute top-0 -right-[55%] w-full h-full object-cover hidden lg:block"
            />
            <div className="relative z-10 lg:w-[55%] w-full flex flex-col gap-4 items-start">
              <div className="text-[32px] lg:text-[50px] font-[800]">
                Start your journey to the moon
              </div>
              <div className="text-base lg:text-lg">
                Download the free MyDoge Dogecoin Wallet and join the
                friendliest community in crypto
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {downloadLinks.slice(0, 2).map((link) => (
                  <div
                    key={link.name}
                    className="flex flex-row items-center gap-2 bg-[#1e2327] text-white px-4 py-2 rounded-lg whitespace-nowrap"
                  >
                    <div className="text-2xl">{link.icon}</div>
                    <div className="">
                      <div className="text-xs font-light">{link.name}</div>
                      <div className="text-base font-semibold">
                        {link.platform}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
