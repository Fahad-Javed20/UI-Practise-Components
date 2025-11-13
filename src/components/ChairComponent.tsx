const ChairComponent = () => {
  return (
    <div className="flex justify-center mt-8">

    <div className="bg-white h-[550px] w-[700px] shadow-lg/30 p-4">
      <div className="flex">
        <div className="w-[470px] bg-blue-900 h-8 text-white text-left pl-4 ">
          ←
        </div>
        <h1 className="font-extrabold text-2xl pl-4">New Products</h1>
      </div>

      <div className="grid grid-cols-2 mt-4">
        <div className="text-left">
          <h1 className="font-bold text-6xl">Nurton</h1>
          <h1 className="text-2xl text-gray-500">OFFICE CHAIR</h1>
          <h1 className="font-extrabold text-xl">$210.00</h1>
          <img
            className="mt-4 object-cover pr-4 h-64 w-full"
            src="https://plus.unsplash.com/premium_photo-1675186049302-a0dad4cf3412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXIlMjB3b29kfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="">
          <p className="px-3 mt-4 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            sapiente temporibus distinctio obcaecati rerum corporis enim
            dolorum. Repellendus, ipsam ipsum exercitationem maiores voluptates
            eum recusandae a omnis dolores veritatis illum. Laudantium illum
            nisi officia maxime soluta unde exercitationem tempora{" "}
          </p>
          <p className="text-green-600 mt-5 font-semibold text-left pl-3">
            In Stock
          </p>
          <div className="flex mt-4 pl-3 gap-0.5">
            <svg
              className="size-4 fill-yellow-400 stroke-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              >
              <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
            </svg>
            <svg
              className="size-4 fill-yellow-400 stroke-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              >
              <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
            </svg>
            <svg
              className="size-4 fill-yellow-400 stroke-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              >
              <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
            </svg>
            <svg
              className="size-4 fill-yellow-400 stroke-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
            </svg>
            <svg
              className="size-4 fill-yellow-400 stroke-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              >
              <path d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z" />
            </svg>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-600 my-4" />

      <div className="grid grid-cols-2 items-start">
        <div className="text-left pl-4 leading-1">
          <p className="text-[13px]">RECOMMENDED BY</p>
          <h1 className="font-bold text-blue-600 text-xl">Fahad Bin Javed</h1>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-3 py-2 w-40 rounded-3xl">
            ADD TO CART
          </button>
        </div>
      </div>
                </div>
    </div>
  );
};

export default ChairComponent;
