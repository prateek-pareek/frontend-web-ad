import React, { useState } from 'react';
import Head from 'next/head';
import { RadioGroup, Radio, Input, Button, Checkbox, Textarea } from '@nextui-org/react';
const PencilIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
    );
};
export function GetInitialSeoKeywords() {
    const initialSeoKeywords: string[] = ["Sample1", "Sample2"];;
    return initialSeoKeywords;
}
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
    const [showLocation, setShowLocation] = useState(false);

    const [location, setLocation] = useState('');
    const [customeLocation, setCustomLocation] = useState('');
    const [showNetwork, setShowNetwork] = useState(false);
    const [network, setNetwork] = useState('');
    const [searchNetwork, setSearchNetwork] = useState(false);
    const [displayNetwork, setDisplayNetwork] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const [showKeyword, setShowKeyword] = useState(false);

    const [keywords, setKeywords] = useState([
        { keyword: "content marketing", popularity: 90500 },
    ]);
    const [newKeyword, setNewKeyword] = useState("");

    const handleShowKeyword = () => {
        setShowKeyword(true)
    }

    const SaveShowKeyword = () => {
        setShowKeyword(false)
    }
    const handleAddKeyword = () => {
        const newKeywords = newKeyword.trim().split(",");
        if (newKeywords.length > 0) {
            setKeywords([
                ...keywords,
                ...newKeywords.map((keyword) => ({ keyword: keyword.trim(), popularity: 0 })),
            ]);
            setNewKeyword("");
        }
    };

    const handleDeleteKeyword = (index:any) => {
        setKeywords(keywords.filter((_, i) => i !== index));
    };

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    const handleSearchNetworkChange = (e: any) => {
        setSearchNetwork(e.target.checked);
    };

    const handleDisplayNetworkChange = (e: any) => {
        setDisplayNetwork(e.target.checked);
    };

    const handleCustomeLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomLocation(event.target.value);
    };
    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    const handleEditBudget = () => {
        setShowEditBudget(true);
    };
    const handleEditNetwork = () => {
        setShowNetwork(true);
    };
    const handleSaveNetwork = () => {
        setShowNetwork(false);
    };

    const handleEditTargetAudience = () => {
        setShowEditTargetAudience(true);
    };
    const handleShowLocation = () => {
        setShowLocation(true);
    };

    const handleEditBid = () => {
        setShowEditBid(true);
    };

    const handleEditAd = () => {
        setShowEditAd(true);
    };

    const handleSaveBudget = (newBudget: any) => {
        setBudget(newBudget);
        setShowEditBudget(false);
    };
    const handleSaveLocation = (location: any) => {
        setLocation(location);
        setShowLocation(false);
    };


    const handleSaveBid = (newBid: any) => {
        if (newBid) {
            setBid(newBid);
        }
        setShowEditBid(false);
    };

    const handleSaveAd = (newAd: any) => {
        if (newAd) {
            setAd(newAd);
        }

        setShowEditAd(false);
    };

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <Head>
                <title>Your First Campaign</title>
            </Head>
            <h1 className="text-3xl font-bold mb-4">Your First Campaign</h1>
            <p className="text-gray-600 mb-6">
                A campaign focuses on a theme or a group of products. To create a campaign, you will set a budget, choose your audience, and write your ad. Keep in mind, you would not be charged for selecting options, and you can always make changes later.
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
                            <Button className="text-gray-700 text-xs font-bold" onClick={handleEditBudget}>
                                <PencilIcon />
                            </Button>
                        </div>)}
                    {showEditBudget && (
                        <div className="bg-gray-200 p-4 rounded mt-2 justify-between">
                            <label className="w-1/3 text-gray-700 text-xs font-bold mb-2">
                                Your Budget
                            </label>
                            <Input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} className='ml-2' />
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-start mt-4" onClick={() => handleSaveBudget(budget)}>
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
                                <div className="w-2/3">{location === 'custom-location' ? customeLocation : location}</div>
                                <Button className="text-gray-700 text-xs font-bold" onClick={handleShowLocation}>
                                    <PencilIcon />
                                </Button>
                            </div>
                            {showLocation && (
                                <div className="bg-white p-6 rounded-lg shadow-md">

                                    <RadioGroup
                                        aria-label="locations"
                                        className="mb-4"
                                        value={location}
                                        onChange={(e) => { handleLocationChange(e) }}
                                    >
                                        <Radio value="all" className="mr-2">
                                            All countries and territories
                                        </Radio>
                                        <Radio value="united-states" className="mr-2">
                                            United States
                                        </Radio>
                                        <Radio value="united-states-canada" className="mr-2">
                                            United States and Canada
                                        </Radio>

                                        <Radio value="custom-location" className="mr-2">
                                            Let me choose...
                                        </Radio>

                                    </RadioGroup>


                                    {location === 'custom-location' && (

                                        <div className="mb-4">

                                            <Input

                                                type="text"

                                                id="customlocation"

                                                name="customelocation"

                                                value={customeLocation}

                                                onChange={handleCustomeLocationChange}

                                                placeholder="Enter a location to target or exclude."

                                                className="w-full"

                                            />

                                            <p className="mt-2 text-xs text-gray-500">

                                                For example, a country, city, region, or postal code.

                                            </p>

                                        </div>

                                    )}


                                    <div className="flex justify-start">
                                        <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-start mt-4" onClick={() => handleSaveLocation(location)}>
                                            Save
                                        </Button>
                                    </div>

                                </div>
                            )}
                        </div>
                        <div className="w-full  px-3 mb-6 md:mb-0 mt-4">
                            <div className="flex bg-gray-200 p-4 rounded items-center">
                                <label className="w-1/3 text-gray-700 text-xs font-bold mb-2">
                                    Networks
                                </label>
                                <div className="w-2/3">{searchNetwork ? "Search-Network" : null} {displayNetwork ? "Display-Network" : null}</div>
                                <Button className="text-gray-700 text-xs font-bold" onClick={handleEditNetwork}>
                                    <PencilIcon />
                                </Button>
                            </div>

                            {showNetwork ? <div className="container mx-auto p-4 pt-6">
                                <div className="bg-white rounded-lg shadow-md p-4">
                                    <h4 className="text-lg font-bold mb-2">Networks</h4>
                                    <p className="text-gray-500 mb-4">
                                        Sites that show your ads along with their own search results, new articles or other content.
                                    </p>
                                    <div className="flex flex-wrap -mx-4">
                                        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                                            <div className="flex items-center mb-4">
                                                <Checkbox
                                                    id="search-network"
                                                    checked={searchNetwork}
                                                    onChange={handleSearchNetworkChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="search-network" className="text-lg font-bold">
                                                    Search Network
                                                </label>
                                            </div>
                                            <p className="text-gray-500 mb-4">
                                                Includes Google search sites and non-Google sites that use Google as a search engine.
                                            </p>
                                        </div>
                                        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                                            <div className="flex items-center mb-4">
                                                <Checkbox
                                                    id="display-network"
                                                    checked={displayNetwork}
                                                    onChange={handleDisplayNetworkChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="display-network" className="text-lg font-bold">
                                                    Display Network
                                                </label>
                                            </div>
                                            <p className="text-gray-500 mb-4">
                                                Includes Google content sites and non-Google content partners that show ads.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start mt-4">
                                        <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={handleSaveNetwork}>
                                            Save
                                        </Button>
                                        <Button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </div> : null}

                        </div>

                        <div className="w-full  px-3 mb-6 md:mb-0 mt-4">
                            <div className="w-full flex bg-gray-200 p-4 rounded justify-between">
                                <label className="text-gray-700 text-xs font-bold ">
                                    KeyWords
                                </label>
                                <div className="flex flex-wrap">
                                    {keywords.map((keyword, index) => (
                                        <div key={index} className="mr-2 mb-2">
                                            <span className="px-4 py-2">{keyword.keyword}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button className="text-gray-700 text-xs font-bold flex-end" onClick={handleShowKeyword}>
                                    <PencilIcon />
                                </Button>
                            </div>
                            {showKeyword ? 
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-lg font-bold mb-2">Keywords</h2>
                                <p className="text-gray-600 mb-4">
                                    Add around 15-20 keywords. These are the search terms that may trigger
                                    your ad to appear next to search results.
                                </p>

                              

                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left font-medium text-gray-700">
                                                Keyword
                                            </th>
                                            <th className="px-4 py-2 text-left font-medium text-gray-700">
                                                Search Popularity
                                            </th>
                                            <th className="px-4 py-2 text-left font-medium text-gray-700">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {keywords.map((keyword, index) => (
                                            <tr key={index}>
                                                <td className="px-4 py-2">{keyword.keyword}</td>
                                                <td className="px-4 py-2">{keyword.popularity}</td>
                                                <td className="px-4 py-2">
                                                    <button
                                                        className="px-2 py-1 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1"
                                                        onClick={() => handleDeleteKeyword(index)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex-grow">
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
                                            placeholder="Enter keywords separated by commas"
                                            value={newKeyword}
                                            onChange={(e) => setNewKeyword(e.target.value)}
                                        />
                                    </div>
                                    <Button
                                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mr-2 rounded ml-2"
                                        onClick={handleAddKeyword}
                                    >
                                        Add
                                    </Button>
                                </div>

                                <div className="mt-4 flex justify-start">
                                    <Button
                                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mr-2 rounded"
                                        onClick={SaveShowKeyword}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        onClick={SaveShowKeyword}
                                        className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-gray-300 focus:ring-1"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                                : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full  px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        3. Set your bid
                    </label>
                    <div className="bg-gray-200 p-4 rounded flex justify-between">
                        <div className="w-2/3">{selectedOption === 'automatic' ? "AdWords automatically sets your bids to help you get as many clicks as possible within your budget." : null}
                            {selectedOption === 'manual' ? "I'll set my bids manually" : null}
                        </div>
                        <Button className="text-gray-700 text-xs font-bold" onClick={() => handleEditBid()}>
                            <PencilIcon />
                        </Button>
                    </div>
                    {showEditBid && (
                        <div className="p-4 bg-white rounded-md shadow-md">
                            <div className="mb-4">
                                <p className="text-gray-700">
                                    The most you are willing to pay for a click on your ad.
                                </p>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    type="radio"
                                    name="bid-option"
                                    value="automatic"
                                    checked={selectedOption === 'automatic'}
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                />
                                <label htmlFor="automatic" className="text-gray-700">
                                    AdWords automatically sets your bids to help you get as many clicks as
                                    possible within your budget.
                                </label>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700">
                                    We recommend having AdWords automatically set your bids to start out.
                                </p>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="bid-option"
                                    value="manual"
                                    checked={selectedOption === 'manual'}
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                />
                                <label htmlFor="manual" className="text-gray-700">
                                    I will set my bids manually
                                </label>
                            </div>
                            <div className="mt-6 flex justify-start">
                                <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={() => { handleSaveBid(selectedOption) }}>
                                    Save
                                </Button>
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={() => { handleSaveBid(selectedOption) }}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full  px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        4. Write your ad
                    </label>
                    <div className="bg-gray-200 p-4 rounded flex items-center justify-between">
                        <div className="w-2/3">{ad}</div>
                        <Button className="text-gray-700 text-xs font-bold" onClick={handleEditAd}>
                            <PencilIcon />
                        </Button>
                    </div>
                    {showEditAd && (
                        <div className="bg-gray-200 p-4 rounded mt-2">
                            <Textarea
                                label="Ad"
                                placeholder="Enter your description"
                                className="max-w-xs"
                                value={ad}
                                onChange={(e) => setAd(e.target.value)}
                            />

                            <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-start mt-4" onClick={() => handleSaveAd(ad)}>
                                Save
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-start mt-4" >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CampaignSetup;

