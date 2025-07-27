import React, { useState, useContext } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'

const Atcoder = () => {
  const navigate = useNavigate()
  const { backendUrl, getUserData, userData } = useContext(AppContent)
  const [prompt, setPrompt] = useState(0)
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      getUserData()
      let email = userData?.email || ''
      axios.defaults.withCredentials = true
      const { data } = await axios.post(backendUrl + '/api/gemini/e/atcoder', { prompt, email })

      if (data.success) {
        console.log(data)
        getUserData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-purple-300 to-indigo-400 px-4 py-8">
      <img
        onClick={() => navigate('/')}
        src={assets.log}
        className="absolute top-6 left-6 sm:top-8 sm:left-20 w-24 sm:w-32 cursor-pointer transition-transform duration-200 hover:scale-105"
        alt="Logo"
      />
      <div className="flex flex-col items-center space-y-8 w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl w-full">
          <form onSubmit={onSubmitHandler} className="space-y-6">
            <img src='https://atcoder.jp/public/img/atcoder.png' className="w-10 h-10 object-contain"/>
            <h2 className="text-xl font-semibold text-indigo-900 text-center">Generate Test Cases</h2>
            <div className="flex items-center gap-3 w-full px-5 py-3 rounded-full bg-indigo-100 border border-indigo-300">
              <span className="text-sm font-medium text-indigo-800">No.</span>
              <input
                onChange={(e) => setPrompt(e.target.value)}
                value={prompt}
                type="text"
                placeholder="Enter question number"
                required
                className="bg-transparent flex-1 outline-none text-indigo-900 placeholder-indigo-400"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full text-white font-semibold transition-colors ${
                loading
                  ? 'bg-indigo-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  <span>Generating...</span>
                </div>
              ) : (
                'Generate'
              )}
            </button>
          </form>
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl w-full">
          <h3 className="text-md font-semibold text-indigo-800 mb-2">Testcases:</h3>
          <div className="font-mono space-y-2">
            <div className="space-y-2">
  {userData && userData.prompt ? (
    userData.prompt.split('\n').map((line, index) => (
      <div key={index} className="flex justify-between whitespace-pre-wrap text-sm text-gray-800">
        {line}
      </div>
    ))
  ) : (
    <p>Given question no. is not present in Atcoder</p>
  )}
</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Atcoder
