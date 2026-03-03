import React, { useState } from 'react'

function Feedback() {
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState(5)
  const [comments, setComments] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'email') setEmail(value)
    else if (name === 'rating') setRating(Number(value))
    else if (name === 'comments') setComments(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(
      `Feedback submitted successfully!\nEmail: ${email}\nRating: ${rating}\nComments: ${comments}`
    )
    setEmail('')
    setRating(5)
    setComments('')
  }

  return (
    <div className="main-content common min-h-screen flex items-center justify-center bg-indigo-50">
      <form onSubmit={handleSubmit}>
        <table className="bg-white border border-slate-200 shadow-2xl rounded-2xl px-6 py-4">
          <tbody>
            <tr>
              <td className="p-[2vw]" colSpan={2}>
                <h1 className="text-3xl font-semibold text-indigo-600 underline decoration-indigo-300">
                  Feedback Form
                </h1>
              </td>
            </tr>

            <tr>
              <td className="p-[2vw]">
                <label htmlFor="email" className="text-slate-600 font-medium">
                  Email:
                </label>
              </td>
              <td className="p-[2vw] text-left">
                <input
                  value={email}
                  onChange={handleChange}
                  className="border border-slate-300 bg-slate-50 rounded-md px-4 py-2 text-left focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 shadow-sm"
                  type="text"
                  id="email"
                  name="email"
                />
              </td>
            </tr>

            <tr>
              <td className="p-[2vw]">
                <label htmlFor="rating" className="text-slate-600 font-medium">
                  Rating:
                </label>
              </td>
              <td className="p-[2vw] text-left">
                <select
                  value={rating}
                  onChange={handleChange}
                  className="w-[210px] border border-slate-300 bg-slate-50 rounded-md px-4 py-2 text-center focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 shadow-sm"
                  id="rating"
                  name="rating"
                >
                  <option value={5}>Excellent</option>
                  <option value={4}>Very Good</option>
                  <option value={3}>Good</option>
                  <option value={2}>Average</option>
                  <option value={1}>Poor</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className="p-[2vw]">
                <label htmlFor="comments" className="text-slate-600 font-medium">
                  Comments:
                </label>
              </td>
              <td className="p-[2vw] text-left">
                <textarea
                  value={comments}
                  onChange={handleChange}
                  className="border border-slate-300 bg-slate-50 rounded-md px-4 py-2 text-left focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 shadow-sm"
                  id="comments"
                  name="comments"
                  rows="4"
                  cols="50"
                ></textarea>
              </td>
            </tr>

            <tr>
              <td className="p-[2vw] text-center" colSpan={2}>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-400 to-violet-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-indigo-500 hover:to-violet-600 hover:shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Submit Feedback
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Feedback