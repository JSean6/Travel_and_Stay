import React from 'react';
import { Link } from "react-router-dom";
import "../PackageCard.css"
import imageSrc from '/src/assets/imageSrc.jpg'
import Dubai from '/src/assets/dubai.jpg'
import Mombasa from '/src/assets/mombasa.jpg'
import Diani from '/src/assets/Diani.jpg'
import Wildebeest from '/src/assets/wildebeest.jpg'
import LNaivasha from '/src/assets/L.Naivasha.jpg'

import Maracards from "./Maracards"

const PackageCard = () => {
    return (
        <section>
            <div className='card2'>
                <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full" src={imageSrc} class='cardimage' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Maasai Mara Safari</div>
                        <p className="text-gray-700 text-base">
                            Location: Maasai Mara

                        </p>
                        <p className="text-gray-700 text-base">
                            Ksh: 20,000
                        </p>
                        <p><strong>3 Days/ 2 Nights</strong></p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            Wildlife/Safari Tourism Package
                        </span>
                    </div>
                    <li>
                        <Link to="/cards"><button className="font-serif bg-blue-900 text-center mt-4 text-slate-50 hover:text-gray-300 border border-orange-500 rounded-lg">VIEW MORE PACKAGES</button></Link>
                    </li>
                </div>
            </div>
            <div className="card2">
                <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full" src={LNaivasha} class='cardimage' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Lake Naivasha Safari</div>
                        <p className="text-gray-700 text-base">
                            Location: Lake Naivasha National Park

                        </p>
                        <p className="text-gray-700 text-base">
                            Ksh: 68,700
                        </p>
                        <p><strong>5 DAYS / 4 NIGHTS</strong></p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            Wildlife/Safari Tourism Package
                        </span>
                    </div>
                    <li>
                        <Link to="/cards2"><button className="font-serif bg-blue-900 text-center mt-4 text-slate-50 hover:text-gray-300 border border-orange-500 rounded-lg">VIEW MORE PACKAGES</button></Link>
                    </li>
                </div>
            </div>
            <div className="card2">
                <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full" src={Mombasa} class='cardimage' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">5 Days Mombasa</div>
                        <p className="text-gray-700 text-base">
                            Location: Mombasa

                        </p>
                        <p className="text-gray-700 text-base">
                            Ksh: 110,000
                        </p>
                        <p><strong>5 DAYS / 4 NIGHTS</strong></p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            Tropical Island Package
                        </span>
                    </div>
                </div>
            </div>
            <div className="card2">
                <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full" src={Diani} class='cardimage' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">DIANI PACKAGE</div>
                        <p className="text-gray-700 text-base">
                            Location: Diani

                        </p>
                        <p className="text-gray-700 text-base">
                            Ksh: 100,000
                        </p>
                        <p><strong>6 DAYS / 5 NIGHTS
                        </strong></p>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            South Coast Packages
                        </span>
                    </div>
                </div>
            </div>

            <div className="card2">
                <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg ">
                    <img className="w-full" src={Wildebeest} class='cardimage' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Wildebeest Migration</div>
                        <p className="text-gray-700 text-base">
                            Location: Maasai Mara

                        </p>
                        <p className="text-gray-700 text-base">
                            Ksh: 37,000
                        </p>
                        <p><strong>3 DAYS / 2 NIGHTS</strong></p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            Wildlife/Safari Tourism Package
                        </span>
                    </div>
                </div>
            </div>
            <div className='card2'>
                <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full" src={Dubai} class='cardimage' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Dubai Holiday Packages</div>
                        <p className="text-gray-700 text-base">
                            Location: Dubai

                        </p>
                        <p className="text-gray-700 text-base">
                            Ksh: 55,000
                        </p>
                        <p><strong>5 Days/ 4 Nights</strong></p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            Dubai Holiday Packages
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageCard;
