import React, { useState } from 'react';
import Header from './Header';
import { API_URL } from '../config/constants';

export default function PostInput() {
  const [openModal, setOpenModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');

  const handleSubmit = async () => {
    if (!question === '' || !optionA === '' || optionB === '' || optionC === '')
      return;
    if (!question.includes('?')) setQuestion(prev => prev + '?');

    try {
      const postPOll = await fetch(API_URL + '/' + 'polls', {
        method: 'POST',
        body: JSON.stringify({
          question,
          optionA,
          optionB,
          optionC,
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
    } catch (err) {
      console.error(err.message);
    }

    setQuestion('');
    setOptionA('');
    setOptionB('');
    setOptionC('');

    setOpenModal(false);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-5">
      <Header setOpenModal={setOpenModal} />
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setOpenModal(false)}
          ></div>
          <div className="bg-white p-5 rounded-lg shadow-lg z-10 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Create Poll</h2>
            <div className="mb-4">
              <label
                htmlFor="question"
                className="block text-lg font-medium mb-1"
              >
                Question:
              </label>
              <input
                type="text"
                id="question"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter question..."
                value={question}
                onChange={e => setQuestion(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="option"
                className="block text-lg font-medium mb-1"
              >
                Options:
              </label>
              <form className="flex flex-col gap-4 mb-2">
                <div className="flex">
                  <label className="text-3xl m-2">A:</label>
                  <input
                    type="text"
                    id="option"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="Add an option..."
                    value={optionA}
                    onChange={e => setOptionA(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <label className="text-3xl m-2">B:</label>
                  <input
                    type="text"
                    id="option"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="Add an option..."
                    value={optionB}
                    onChange={e => setOptionB(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <label className="text-3xl m-2">C:</label>
                  <input
                    type="text"
                    id="option"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="Add an option..."
                    value={optionC}
                    onChange={e => setOptionC(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-teal-600 text-white rounded-lg"
                onClick={handleSubmit}
              >
                Create Poll
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
