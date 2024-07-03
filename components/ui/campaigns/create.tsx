import React, { useState } from 'react';
import Head from 'next/head';
import { RadioGroup, Radio, Input, Button } from '@nextui-org/react';
const PencilIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
    );
};

function CampaignSetup() {


    const [budget, setBudget] = useState('$10.00 per day');
    const [targetAudience, setTargetAudience] = useState({
        locations: 'All countries and territories',
        networks: 'Search Network, Display Network',
        keywords: 'content marketing',
    });
    const [bid, setBid] = useState('AdWords automatically sets your bids to help you get as many clicks as possible within your budget.');
    const [ad, setAd] = useState('test - test\nAd www.getcodeless.com');

    const [showEditBudget, setShowEditBudget] = useState(false);
    const [showEditTargetAudience, setShowEditTargetAudience] = useState(false);
    const [showEditBid, setShowEditBid] = useState(false);
    const [showEditAd, setShowEditAd] = useState(false);

    const [location, setLocation] = useState('');


    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setLocation(event.target.value);

    };

    const handleEditBudget = () => {
        setShowEditBudget(true);
    };

    const handleEditTargetAudience = () => {
        setShowEditTargetAudience(true);
    };

    const handleEditBid = () => {
        setShowEditBid(true);
    };

    const handleEditAd = () => {
        setShowEditAd(true);
    };

    const handleSaveBudget = (newBudget) => {
        setBudget(newBudget);
        setShowEditBudget(false);
    };

    const handleSaveTargetAudience = (newTargetAudience) => {
        setTargetAudience(newTargetAudience);
        setShowEditTargetAudience(false);
    };

    const handleSaveBid = (newBid) => {
        setBid(newBid);
        setShowEditBid(false);
    };

    const handleSaveAd = (newAd) => {
        setAd(newAd);
        setShowEditAd(false);
    };

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <Head>
                <title>Your First Campaign</title>
            </Head>
            <h1 className="text-3xl font-bold mb-4">Your First Campaign</h1>
            <p className="text-gray-600 mb-6">
                A campaign focuses on a theme or a group of products. To create a campaign, you'll set a budget, choose your audience, and write your ad. Keep in mind, you won't be charged for selecting options, and you can always make changes later.
            </p>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full  px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        1. Decide how much to spend
                    </label>
                    {!showEditBudget && (
                        <div className="bg-gray-200 p-4 rounded flex items-center">
                            <label className="w-1/3 text-gray-700 text-xs font-bold mb-2">
                                Your Budget
                            </label>
                            <div className="w-2/3">{budget}</div>
                            <button className="text-gray-700 text-xs font-bold" onClick={handleEditBudget}>
                                <PencilIcon />
                            </button>
                        </div>)}
                    {showEditBudget && (
                        <div className="bg-gray-200 p-4 rounded mt-2 justify-between">
                            <label className="w-1/3 text-gray-700 text-xs font-bold mb-2">
                                Your Budget
                            </label>
                            <input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleSaveBudget(budget)}>
                                Save
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full  px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        2. Choose a target audience
                    </label>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full  px-3 mb-6 md:mb-0">
                            <div className="flex bg-gray-200 p-4 rounded items-center">
                                <label className="w-1/3 text-gray-700 text-xs font-bold mb-2">
                                    Locations
                                </label>
                                <div className="w-2/3">{targetAudience.locations}</div>
                                <button className="text-gray-700 text-xs font-bold" onClick={handleEditTargetAudience}>
                                    <PencilIcon />
                                </button>
                            </div>
                            {showEditTargetAudience && (
                                <div className="bg-white p-6 rounded-lg shadow-md">

                                  


                                    <div className="mb-4">

                                        <label htmlFor="location" className="block font-medium mb-2">

                                            Locations

                                        </label>

                                        <div className="flex space-x-4">

                                            <div className="flex items-center">

                                                <input

                                                    type="radio"

                                                    id="all-countries"

                                                    name="location"

                                                    value="all"

                                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"

                                                />

                                                <label htmlFor="all-countries" className="ml-2">

                                                    All countries and territories

                                                </label>

                                            </div>

                                            <div className="flex items-center">

                                                <input

                                                    type="radio"

                                                    id="united-states"

                                                    name="location"

                                                    value="united-states"

                                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"

                                                />

                                                <label htmlFor="united-states" className="ml-2">

                                                    United States

                                                </label>

                                            </div>

                                            <div className="flex items-center">

                                                <input

                                                    type="radio"

                                                    id="united-states-canada"

                                                    name="location"

                                                    value="united-states-canada"

                                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"

                                                />

                                                <label htmlFor="united-states-canada" className="ml-2">

                                                    United States and Canada

                                                </label>

                                            </div>

                                            <div className="flex items-center">

                                                <input

                                                    type="radio"

                                                    id="custom-location"

                                                    name="location"

                                                    value="custom-location"

                                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"

                                                />

                                                <label htmlFor="custom-location" className="ml-2">

                                                    Let me choose...

                                                </label>

                                            </div>

                                        </div>

                                    </div>


                                    {location === 'custom-location' && (

                                        <div className="mb-4">

                                            <input

                                                type="text"

                                                id="location"

                                                name="location"

                                                value={location}

                                                onChange={handleLocationChange}

                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                                placeholder="Enter a location to target or exclude."

                                            />

                                            <p className="mt-2 text-xs text-gray-500">

                                                For example, a country, city, region, or postal code.

                                            </p>

                                        </div>

                                    )}


                                    <div className="flex justify-start">

                                        <button

                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"

                                            type="button"

                                        >

                                            Cancel

                                        </button>

                                        <button

                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

                                            type="button"

                                        >

                                            Save

                                        </button>

                                    </div>

                                </div>
                            )}
                        </div>
                        <div className="w-full  px-3 mb-6 md:mb-0 mt-4">
                            <div className="flex bg-gray-200 p-4 rounded items-center">
                                <label className="w-1/3 text-gray-700 text-xs font-bold mb-2">
                                    Networks
                                </label>
                                <div className="w-2/3">{targetAudience.networks}</div>
                                <button className="text-gray-700 text-xs font-bold" onClick={handleEditTargetAudience}>
                                    <PencilIcon />
                                </button>
                            </div>
                        </div>

                        <div className="w-full  px-3 mb-6 md:mb-0 mt-4">
                            <div className="w-full flex bg-gray-200 p-4 rounded items-center">
                                <label className="w-1/3 text-gray-700 text-xs font-bold mb-2">
                                    KeyWords
                                </label>
                                <div className="w-2/3">{targetAudience.keywords}</div>
                                <button className="text-gray-700 text-xs font-bold" onClick={handleEditTargetAudience}>
                                    <PencilIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full  px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        3. Set your bid
                    </label>
                    <div className="bg-gray-200 p-4 rounded flex items-center">
                        <div className="w-2/3">{bid}</div>
                        <button className="text-gray-700 text-xs font-bold" onClick={handleEditBid}>
                            <PencilIcon />
                        </button>
                    </div>
                    {showEditBid && (
                        <div className="bg-gray-200 p-4 rounded mt-2">
                            <input type="text" value={bid} onChange={(e) => setBid(e.target.value)} />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleSaveBid(bid)}>
                                Save
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full  px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        4. Write your ad
                    </label>
                    <div className="bg-gray-200 p-4 rounded flex items-center">
                        <div className="w-2/3">{ad}</div>
                        <button className="text-gray-700 text-xs font-bold" onClick={handleEditAd}>
                            <PencilIcon />
                        </button>
                    </div>
                    {showEditAd && (
                        <div className="bg-gray-200 p-4 rounded mt-2">
                            <textarea value={ad} onChange={(e) => setAd(e.target.value)} />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleSaveAd(ad)}>
                                Save
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Save and continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CampaignSetup;