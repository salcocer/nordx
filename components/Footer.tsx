import Image from "next/image";
export const Footer = () => {
    return (
        <footer className="flex flex-column justify-between border-t  py-6 text-center text-white bg-gray-800 flex-row items-center">
            <div className="h-26 ml-18 flex flex-col justify-around">
                <p className="">Follow us</p>
                <div>
                    <Image src="facebook.svg" alt="Facebook" width={24} height={24} className="inline-block mx-2" />
                    <Image src="instagram.svg" alt="Instagram" width={24} height={24} className="inline-block mx-2" />
                </div>

                {/* <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} className="inline-block mx-2"/> */}
                {/* <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="inline-block mx-2"/> */}
                <p className="text-xs">
                    ©{new Date().getFullYear()} NordX. All rights reserved.
                </p>
            </div>

            <div className="h-60 mr-18 flex flex-col p-4 items-center justify-between">
                <div>
                    <p>Contact us</p>
                    <p>nordxpeptited@gmail.com</p>
                </div>


                <div>
                    <p>WhatsApp</p>
                    <div className="flex flex-row">
                        <p>+66 992300072</p>
                        <Image src="whatsapp.svg" alt="WhatsApp" width={24} height={24} className="inline-block mx-2" />
                    </div>
                </div>

                <div>
                    <p>Line</p>
                    <div className="flex flex-row">
                        <p>+66 992300072</p>
                        <Image src="line.svg" alt="Line" width={24} height={24} className="inline-block mx-2" />
                    </div>
                </div>

            </div>


        </footer >
    )
}
