import React from "react";

import emojis from "./data/emojis.json"

function App() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900">React Tailwind Coding Task
          <br className="hidden sm:block"/>
        </h1>
        <p className="sm:text-lg text-md text-center text-gray-800 mb-10">This Project has been setup with React and Tailwind and you can build the following requirements on top of this project.</p>
        <p className="p-2 leading-relaxed text-base mb-10 max-w-2xl mx-auto">Note: You should not write any additional CSS Style Sheets. Styling should be solely done using TailwindCSS classes. You can refer to <a href="https://tailwindcss.com/">Tailwind Official Documentation</a></p>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Show Feed</h2>
              <p className="leading-relaxed text-base">The Project Contains a JSON data file (data/feed.json) which contains a list of Feed items. Build a Page that shows Feed in a paginated manner. The UI should be built such that each type of Feed Item(Announcements, Users, Projects) and Event Type(Founder Onboarded, Project Launched etc.) are rendered on different type of cards. The card should be such that what kind of event occured can be easily understood.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Create Feed Item</h2>
              <p className="leading-relaxed text-base">There should be a button to open a form that accepts a new Item to the Feed, using which a Feed Item of any type can be created and on creating the new item, it would reflect as the first item in the feed.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Emoji Suggestions</h2>
              <p className="leading-relaxed text-base">The Create Feed Item Editor should show suggestions for words with Emojis from the included emojis library(data/emojis.json). For instance when the last word typed is "smile", This Emoji should be suggested: {Object.entries(emojis).find(([name, emoji]) => name === "smile")[1]} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App;
