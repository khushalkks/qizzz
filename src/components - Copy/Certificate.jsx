// src/components/Certificate.jsx
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = ({ name = "Khushal", score = "18/20", date = "13 June 2025" }) => {
  const certRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(certRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${name}_certificate.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-blue-100 flex flex-col items-center justify-center px-4 py-10">
      <div
        ref={certRef}
        className="bg-white shadow-2xl rounded-xl p-8 md:p-12 text-center border-4 border-yellow-500 w-full max-w-2xl"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Certificate of Completion</h1>
        <p className="text-lg text-gray-600 mb-2">This certifies that</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600">{name}</h2>
        <p className="mt-2 text-gray-600">has successfully completed the quiz</p>
        <h3 className="text-xl text-green-600 font-bold my-4">Score: {score}</h3>
        <p className="text-sm text-gray-400">Date: {date}</p>
      </div>

      <button
        onClick={handleDownload}
        className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default Certificate;
