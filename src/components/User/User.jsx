import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            👤 User Profile
          </h1>
          <p className="text-gray-300 text-lg">Dynamic routing demonstration</p>
        </div>

        {/* Main Profile Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-center">
            {/* Avatar Placeholder */}
            <div className="relative mx-auto mb-6">
              <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                {userid ? userid.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>

            {/* User Info */}
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome, {userid}!
            </h2>
            <p className="text-blue-300 text-lg mb-6">@{userid}</p>

            {/* User ID Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                User Information
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-gray-300">User ID:</span>
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-mono text-lg font-bold shadow-lg">
                  {userid}
                </span>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">42</div>
                <div className="text-gray-300 text-sm">Posts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">1.2k</div>
                <div className="text-gray-300 text-sm">Followers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">856</div>
                <div className="text-gray-300 text-sm">Following</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg">
                Follow User
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 border border-white/30">
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Route Info Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Route Information
          </h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center">
              <span className="text-cyan-400 mr-2">🔗</span>
              <span className="font-mono bg-gray-800 px-3 py-1 rounded text-sm">
                /user/{userid}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">⚡</span>
              <span>Dynamic routing with useParams hook</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-400 mr-2">🎯</span>
              <span>Try changing the URL to /user/yourname</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
