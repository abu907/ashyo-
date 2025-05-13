import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex justify-between items-center px-[130px] py-3 text-sm text-[#1D1D1F]">
        <div className="flex gap-6">
          <span className="w-[57px]">Tashkent</span>
          <span>About Us</span>
          <span>Products</span>
          <span>Contacts</span>
        </div>
        <div className="flex gap-4">
          <span className="font-semibold">+998 (71) 123-45-67</span>
          <span className="font-medium">Uz</span>
        </div>
      </div>

      <div className="flex items-center justify-between px-[130px] py-4">
        <img src={logo} alt="logo" className="w-[103px] h-[42px]" />
        <button className="w-[160px] h-[48px] bg-[#134E9B] text-white rounded-[6px] px-5 text-left">
          Kategoriya
        </button>
        <input
          className="w-[518px] h-[48px] border rounded-[6px] px-4"
          placeholder="What are you looking for?"
        />
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((_, idx) => (
            <div
              key={idx}
              className={`w-[50px] h-[48px] bg-gray-100 rounded-[6px] flex items-center justify-center`}
            >
              <div className="w-6 h-6 bg-gray-400 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
