
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vcare - Homepage</title>
                <meta name="description" content="MediChain - Homepage" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className="overflow-x-hidden antialiased">
                {/* Header Here */}
                <Header />
                {/* <!-- BEGIN MAIN SECTION --> */}
                <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-24 xl:pt-24 xl:pb-64">
                    <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
                        <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
                            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
                                A secure decentralized Medical Record Keeping System
                            </h1>
                            <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
                                Strengthening coordination across healthcare institutions to build a robust ecosystem.Implementation of smart contracts in health care built using ethereum where only patients can access their medical
                                data, providing full control over the data.
                            </p>
                            <button className="btn btn-primary md:btn-md btn-sm text-center">
                                <Link href="/patientDashboard">
                                    <a>Patient Login</a>
                                </Link>
                            </button>
                            <button className="btn btn-primary md:btn-base btn-sm md:hidden mt-4 md:mt-0">
                                <Link href="/doctorDashboard">
                                    <a>Doctor Login</a>
                                </Link>
                            </button>
                            <button className="btn btn-primary md:btn-base btn-sm md:hidden mt-4 md:mt-0">
                                <Link href="/hospitalDashboard">
                                    <a>Hospital Login</a>
                                </Link>
                            </button>
                            <button className="btn btn-primary md:btn-base btn-sm md:hidden mt-4 md:mt-0">
                                <Link href="/ownerDashboard">
                                    <a>Owner Login</a>
                                </Link>
                            </button>
                        </div>
                        <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
                            <div className="container relative left-0 w-full max-w-4xl lg:absolute lg:w-screen">
                                <img
                                    src="/homepage-mockup-image.png"
                                    className="mt-24 w-auto h-auto rounded-lg lg:w-3/4 lg:h-3/4 lg:mt-32"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- HERO SECTION END --> */}

                
                
            </div>
        </div>
    )
}
