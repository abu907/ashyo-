const Home = () => {
  return (
    <div>
      <div className="w-full h-[450px] bg-gray-100 relative">
        <div className="absolute top-[147px] left-[130px]">
          <h1 className="text-[44px] font-black leading-[120%] max-w-[594px]">
            Siz kutgan Xiaomi 12 Mi Laite
          </h1>
          <p className="text-[16px] font-normal mt-4 max-w-[596px]">
            Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz
            uchun eng yaxshi arziydigan takliflarimizdan biridir!
          </p>
          <button className="mt-6 bg-[#0F4A97] text-white px-4 py-3 rounded-[6px] w-[161px] h-[54px]">
            Batafsil
          </button>
        </div>
        <div className="absolute right-[100px] top-[50px]">
          <img
            src="https://via.placeholder.com/300x400"
            alt="product"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
