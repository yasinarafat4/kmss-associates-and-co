import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8 px-4">
      <div className="lg:grid grid-cols-3 gap-6">
        <div className="col-span-1 pb-3 lg:pb-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            maiores impedit quas maxime quod odit alias modi vero ut,
            consectetur dignissimos consequuntur, ex, optio tenetur incidunt
            quos veritatis rerum quo?
          </p>
        </div>
        <div className="col-span-2">
          <div className="md:flex justify-start items-center gap-4">
            <div class="flex items-center pt-3">
              <img
                src="https://i.ibb.co/r2RKv6X/letter.png"
                alt=""
                class="w-6 h-auto mr-2"
              />
              <p>kms@gmail.com</p>
            </div>
            <div class="flex items-center pt-3">
              <img
                src="https://i.ibb.co/8zV10hK/phone-call.png"
                alt=""
                class="w-6 h-auto mr-2"
              />
              <p>+8801627338828</p>
            </div>
          </div>
          <div class="flex items-center pt-3">
            <img
              src="https://i.ibb.co/8g8JDNS/circle.png"
              alt=""
              class="w-6 h-auto mr-2"
            />
            <p>
              Block: k, Road: 1, House: 19 Eastern Housing, Pallabi 2nd Phase,
              Mirpur 1216
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-10">
        <p class="mt-4 text-sm">© {currentYear} KMS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
